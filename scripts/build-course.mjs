// ───────────────────────────────────────────────────────────
// Course build step — turns the Obsidian sources of the serialised
// tutorials into site content. Run it after publishing a lesson:
//
//   npm run course
//
// Reads   : one Obsidian folder per course (see COURSES below)
// Writes  : src/content/course/<course>/<slug>.html   article markup
//           src/data/course.generated.js              metadata + TOC
//           public/course/<course>/*.webp             figures, PNG → WebP
//
// Nothing here runs in the browser: markdown-it and sharp are
// devDependencies, and the site only ever imports the output.
//
// The 公众号 cover cards are deliberately NOT imported — they are
// navy/yellow title plates that repeat the headline, and both the
// palette and the duplication fight the site's own typography.
// ───────────────────────────────────────────────────────────

import { createHash } from 'node:crypto'
import { mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import MarkdownIt from 'markdown-it'
import sharp from 'sharp'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const VAULT = join(process.env.HOME, 'Documents/Obsidian/will-falcon-doc')

// One entry per serialised course. `slug` is the URL segment and the
// output folder; it must match the slug in src/data/courses/<slug>.js.
//
// `include` limits the build to specific source stems, and both courses
// now carry one: a lesson drafted in the vault is not a lesson published
// here. Without it the LLM course would ship a half-written 第 8 课 with
// 3–7 still missing, and the Claude Code course would mirror a lesson the
// WeChat account has not run yet. Naming the stem here is the first of the
// three edits that publish a lesson; see src/data/courses/<slug>.js for
// the other two.
const COURSES = [
  {
    slug: 'claude-code',
    src: process.env.COURSE_SRC
      || join(VAULT, 'Learn Claude Code/发布预览/公众号版'),
    preface: { topic: '发刊词', kicker: '17 课，从能用到自动化' },
    include: [
      '00-发刊词',
      '01-init-claude-md', '02-context-management', '03-model-and-plan-mode',
      '04-code-review', '05-memory-and-rewind', '06-resume',
      '07-agents-and-mcp', '08-permissions-and-auto-mode', '09-effort-and-fast',
      '10-diff-and-usage', '11-help-and-discovery', '12-batch-parallel-changes',
      '13-background-fork-branch',
    ],
  },
  {
    slug: 'llm-engineer',
    src: process.env.LLM_COURSE_SRC
      || join(VAULT, 'Learn LLM Engineer/发布预览/公众号版'),
    preface: { topic: '发刊词', kicker: '22 课，从调用模型到构建 Agent' },
    include: ['00-发刊词', '00-环境准备', '01-token-and-inference'],
  },
]

const OUT_HTML = join(ROOT, 'src/content/course')
const OUT_IMG = join(ROOT, 'public/course')
const OUT_DATA = join(ROOT, 'src/data/course.generated.js')

// Chinese reading pace, in characters per minute.
const CPM = 400

const esc = (s) => s
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')

// Heading anchors hash the heading text rather than counting sections, so an
// inserted section does not silently repoint every link below it.
const anchorId = (text) => `sec-${createHash('sha1').update(text).digest('hex').slice(0, 6)}`

// ── markdown-it ────────────────────────────────────────────

// Per-render collectors; the renderer rules below read from these.
let toc = []
let figures = new Map()

const md = new MarkdownIt({ html: false, linkify: true, breaks: false })

md.core.ruler.push('site-course', (state) => {
  const out = []
  let seenQuote = false
  let openedSection = false

  state.tokens.forEach((token, i) => {
    // A `---` immediately before a section heading doubles up with the rule
    // the heading already draws for itself.
    const next = state.tokens[i + 1]
    if (token.type === 'hr' && (!next || next.type === 'heading_open')) return

    if (token.type === 'heading_open' && token.tag === 'h2') openedSection = true

    if (token.type === 'heading_open' && (token.tag === 'h2' || token.tag === 'h3')) {
      // `.content` is the raw inline markdown, so a heading like
      // "1. `/context [all]` —— 看" would carry its backticks into the rail.
      // The parsed children give the plain text the reader should see.
      const text = (state.tokens[i + 1]?.children ?? [])
        .filter((child) => child.type === 'text' || child.type === 'code_inline')
        .map((child) => child.content)
        .join('')
      const id = anchorId(text)
      token.attrSet('id', id)
      if (token.tag === 'h2') toc.push({ id, text })
    }

    // Three different things arrive as blockquotes, and they are not
    // interchangeable on the page:
    //
    //   lesson__quote    the thing the sentence just pointed at — a prompt
    //                    sent to the model, a claim being quoted, a rule set
    //                    apart. Always introduced by a lead-in paragraph
    //                    ending in a colon, which is what distinguishes it.
    //   lesson__abstract the opening summary of a lesson (what it answers,
    //                    who it is for, the version it was checked against).
    //                    Only ever above the first section heading.
    //   lesson__aside    marginalia in the flow of the argument, standing on
    //                    its own after a list or a table.
    //
    // The LLM course writes no abstract and quotes the prompts it sends to
    // the model instead, so a plain "first quote wins" rule mounted a
    // question to the model on the abstract's card, halfway down the article.
    if (token.type === 'blockquote_open') {
      const leadIn = state.tokens[i - 1]?.type === 'paragraph_close'
        ? (state.tokens[i - 2]?.content ?? '')
        : ''
      const pointedAt = /[：:]\s*$/.test(leadIn)
      token.attrJoin(
        'class',
        pointedAt ? 'lesson__quote'
          : seenQuote || openedSection ? 'lesson__aside'
            : 'lesson__abstract',
      )
      if (!pointedAt) seenQuote = true
    }

    // The 📌 line is a version-checked-on stamp, not body copy.
    if (token.type === 'paragraph_open' && state.tokens[i + 1]?.content?.startsWith('📌')) {
      token.attrJoin('class', 'lesson__stamp')
    }

    out.push(token)
  })

  state.tokens = out
})

md.renderer.rules.image = (tokens, idx) => {
  const token = tokens[idx]
  const alt = token.content
  const fig = figures.get(token.attrGet('src'))
  if (!fig) throw new Error(`Unresolved image: ${token.attrGet('src')}`)
  return (
    `<figure class="lesson__fig">` +
    `<img src="${fig.url}" alt="${esc(alt)}" width="${fig.width}" height="${fig.height}"` +
    ` loading="lazy" decoding="async">` +
    `<figcaption>${esc(alt)}</figcaption>` +
    `</figure>`
  )
}

md.renderer.rules.table_open = () => '<div class="lesson__table"><table>'
md.renderer.rules.table_close = () => '</table></div>'

md.renderer.rules.fence = (tokens, idx) => {
  const token = tokens[idx]
  const lang = (token.info || '').trim()
  const code = token.content.replace(/\n+$/, '')
  // A one-line fence is a command, not a listing; it gets a compact plate
  // instead of a full block so `/effort high` does not read as a program.
  const tight = !code.includes('\n') ? ' lesson__code--tight' : ''
  const chip = lang && lang !== 'text' ? ` data-lang="${esc(lang)}"` : ''
  return `<pre class="lesson__code${tight}"${chip}><code>${esc(code)}</code></pre>\n`
}

// ── source parsing ─────────────────────────────────────────

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n/)
  if (!match) return { data: {}, body: raw }
  const data = {}
  for (const line of match[1].split('\n')) {
    const kv = line.match(/^(\w+):\s*(.*)$/)
    if (kv) data[kv[1]] = kv[2].trim()
  }
  return { data, body: raw.slice(match[0].length) }
}

function cleanBody(body) {
  return body
    // The page renders its own title from metadata.
    .replace(/^\s*#\s+.*\n/, '')
    // The source ends with a 公众号 prev/next line; the site has its own pager.
    .replace(/\n---\s*\n+##\s*课程导航[\s\S]*$/, '\n')
    .trim()
}

// Chinese stems get explicit URL-safe slugs.
const slugMap = { '00-发刊词': '00-preface', '00-环境准备': '00-environment' }
const slugFor = (stem) => slugMap[stem] ?? stem

// Source titles read "第 N 课：<主题> —— <副题>" in the Claude Code course and
// "第 N 课：<问题>" in the LLM one. The contents page sets the subject large and
// the subtitle small, so split them once here rather than re-parsing the same
// string in three components.
//
// A title that is a single question carries no subtitle to split off, and the
// contents row and article header both have a slot for one. Those lessons name
// it in the frontmatter as `kicker:`; it wins over anything parsed out of the
// title.
function splitTitle(title, number, course, slug, kicker) {
  if (slug === '00-preface') return { ...course.preface }
  if (kicker) {
    const subject = title.match(/^第\s*\d+\s*课[：:]\s*(.+?)(?:\s*——\s*.+)?$/)
    return { topic: subject ? subject[1] : title, kicker }
  }
  const parts = title.match(/^第\s*\d+\s*课[：:]\s*(.+?)\s*——\s*(.+)$/)
  if (parts) return { topic: parts[1], kicker: parts[2] }
  const bare = title.match(/^第\s*\d+\s*课[：:]\s*(.+)$/)
  if (bare) return { topic: bare[1], kicker: '' }
  const plain = title.match(/^(.+?)[：:]\s*(.+)$/)
  if (plain) return { topic: plain[1], kicker: plain[2] }
  return { topic: title, kicker: '' }
}

// ── figures ────────────────────────────────────────────────

async function convertFigure(srcPath, outDir, outName) {
  const outPath = join(outDir, `${outName}.webp`)
  const image = sharp(srcPath)
  const { width, height } = await image.metadata()
  await image.webp({ quality: 80, effort: 6 }).toFile(outPath)
  return { path: outPath, width, height }
}

// ── per-course build ───────────────────────────────────────

async function buildCourse(course) {
  const htmlDir = join(OUT_HTML, course.slug)
  const imgDir = join(OUT_IMG, course.slug)
  await mkdir(htmlDir, { recursive: true })
  await mkdir(imgDir, { recursive: true })

  const files = (await readdir(course.src))
    .filter((f) => f.endsWith('.md'))
    .filter((f) => !course.include || course.include.includes(f.replace(/\.md$/, '')))
    .sort()

  if (course.include) {
    const missing = course.include.filter((stem) => !files.includes(`${stem}.md`))
    if (missing.length) throw new Error(`${course.slug}: no source for ${missing.join(', ')}`)
  }

  const lessons = []
  let bytesIn = 0
  let bytesOut = 0

  console.log(`\n${course.slug}  ←  ${course.src.replace(process.env.HOME, '~')}`)

  for (const file of files) {
    const stem = file.replace(/\.md$/, '')
    const number = Number(stem.slice(0, 2))
    const slug = slugFor(stem)

    const raw = await readFile(join(course.src, file), 'utf8')
    const { data, body: rawBody } = parseFrontmatter(raw)
    const body = cleanBody(rawBody)

    // Convert every figure this lesson references before rendering, so the
    // image rule can inline real dimensions and avoid layout shift.
    toc = []
    figures = new Map()
    for (const [, ref] of body.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)) {
      if (figures.has(ref)) continue
      const srcPath = join(course.src, ref)
      const name = `${slug}-${ref.split('/').pop().replace(/\.png$/, '')}`
      bytesIn += (await stat(srcPath)).size
      const fig = await convertFigure(srcPath, imgDir, name)
      bytesOut += (await stat(fig.path)).size
      figures.set(ref, { url: `/course/${course.slug}/${name}.webp`, width: fig.width, height: fig.height })
    }

    const html = md.render(body)
      // Images are block-level here; markdown-it still wraps them in <p>.
      .replace(/<p>(<figure[\s\S]*?<\/figure>)<\/p>/g, '$1')

    const chars = body.replace(/```[\s\S]*?```/g, '').replace(/\s/g, '').length
    const { mtime } = await stat(join(course.src, file))

    await writeFile(join(htmlDir, `${slug}.html`), `${html}\n`)

    lessons.push({
      slug,
      number,
      date: mtime.toISOString().slice(0, 10),
      minutes: Math.max(1, Math.round(chars / CPM)),
      toc,
      zh: {
        title: data.title ?? stem,
        ...splitTitle(data.title ?? stem, number, course, slug, data.kicker),
        description: data.description ?? '',
      },
    })

    console.log(`  ${String(number).padStart(2, '0')}  ${slug}  ${lessons.at(-1).minutes} min  ${toc.length} sections  ${figures.size} figures`)
  }

  return { lessons, bytesIn, bytesOut }
}

// ── main ───────────────────────────────────────────────────

async function main() {
  await rm(OUT_HTML, { recursive: true, force: true })
  await rm(OUT_IMG, { recursive: true, force: true })

  const published = {}
  let bytesIn = 0
  let bytesOut = 0

  for (const course of COURSES) {
    const result = await buildCourse(course)
    published[course.slug] = result.lessons
    bytesIn += result.bytesIn
    bytesOut += result.bytesOut
  }

  const banner = `// Generated by scripts/build-course.mjs — do not edit.\n` +
    `// Sources:\n` +
    COURSES.map((c) => `//   ${c.slug}: ${c.src.replace(process.env.HOME, '~')}\n`).join('') +
    `// Run \`npm run course\` after publishing a lesson.\n\n`

  await writeFile(
    OUT_DATA,
    `${banner}export const publishedLessons = ${JSON.stringify(published, null, 2)}\n`,
  )

  const mb = (n) => `${(n / 1024 / 1024).toFixed(1)} MB`
  const total = Object.values(published).reduce((n, l) => n + l.length, 0)
  console.log(`\n${total} lessons across ${COURSES.length} courses → src/content/course/`)
  console.log(`figures: ${mb(bytesIn)} PNG → ${mb(bytesOut)} WebP`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
