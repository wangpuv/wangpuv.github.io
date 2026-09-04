// ───────────────────────────────────────────────────────────
// Course build step — turns the Obsidian source of the Claude Code
// tutorial into site content. Run it after publishing a new lesson:
//
//   npm run course
//
// Reads   : $COURSE_SRC (default: the Obsidian 公众号版 folder)
// Writes  : src/content/course/<slug>.html   article markup
//           src/data/course.generated.js     lesson metadata + TOC
//           public/course/*.webp             figures, PNG → WebP
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

const SRC = process.env.COURSE_SRC || join(
  process.env.HOME,
  'Documents/Obsidian/will-falcon-doc/Learn Claude Code/发布预览/公众号版',
)

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

  state.tokens.forEach((token, i) => {
    // A `---` immediately before a section heading doubles up with the rule
    // the heading already draws for itself.
    const next = state.tokens[i + 1]
    if (token.type === 'hr' && (!next || next.type === 'heading_open')) return

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

    // First blockquote of a lesson is its abstract (what the lesson answers,
    // who it is for, and the version it was checked against); later ones are
    // asides in the flow of the argument.
    if (token.type === 'blockquote_open') {
      token.attrJoin('class', seenQuote ? 'lesson__aside' : 'lesson__abstract')
      seenQuote = true
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

// Lesson 0 is the 发刊词; its filename is Chinese, so it gets an explicit slug.
const slugFor = (stem) => (stem.startsWith('00-') ? '00-preface' : stem)

// Source titles read "第 N 课：<主题> —— <副题>". The contents page sets the
// subject large and the subtitle small, so split them once here rather than
// re-parsing the same string in three components.
function splitTitle(title, number) {
  if (number === 0) return { topic: '发刊词', kicker: '17 课，从能用到自动化' }
  const parts = title.match(/^第\s*\d+\s*课[：:]\s*(.+?)\s*——\s*(.+)$/)
  return parts ? { topic: parts[1], kicker: parts[2] } : { topic: title, kicker: '' }
}

// ── figures ────────────────────────────────────────────────

async function convertFigure(srcPath, outName) {
  const outPath = join(OUT_IMG, `${outName}.webp`)
  const image = sharp(srcPath)
  const { width, height } = await image.metadata()
  await image.webp({ quality: 80, effort: 6 }).toFile(outPath)
  return { url: `/course/${outName}.webp`, width, height }
}

// ── main ───────────────────────────────────────────────────

async function main() {
  await rm(OUT_HTML, { recursive: true, force: true })
  await rm(OUT_IMG, { recursive: true, force: true })
  await mkdir(OUT_HTML, { recursive: true })
  await mkdir(OUT_IMG, { recursive: true })

  const files = (await readdir(SRC))
    .filter((f) => f.endsWith('.md'))
    .sort()

  const lessons = []
  let bytesIn = 0
  let bytesOut = 0

  for (const file of files) {
    const stem = file.replace(/\.md$/, '')
    const number = Number(stem.slice(0, 2))
    const slug = slugFor(stem)

    const raw = await readFile(join(SRC, file), 'utf8')
    const { data, body: rawBody } = parseFrontmatter(raw)
    const body = cleanBody(rawBody)

    // Convert every figure this lesson references before rendering, so the
    // image rule can inline real dimensions and avoid layout shift.
    toc = []
    figures = new Map()
    for (const [, ref] of body.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)) {
      if (figures.has(ref)) continue
      const srcPath = join(SRC, ref)
      const name = `${slug}-${ref.split('/').pop().replace(/\.png$/, '')}`
      bytesIn += (await stat(srcPath)).size
      const fig = await convertFigure(srcPath, name)
      bytesOut += (await stat(join(OUT_IMG, `${name}.webp`))).size
      figures.set(ref, fig)
    }

    const html = md.render(body)
      // Images are block-level here; markdown-it still wraps them in <p>.
      .replace(/<p>(<figure[\s\S]*?<\/figure>)<\/p>/g, '$1')

    const chars = body.replace(/```[\s\S]*?```/g, '').replace(/\s/g, '').length
    const { mtime } = await stat(join(SRC, file))

    await writeFile(join(OUT_HTML, `${slug}.html`), `${html}\n`)

    lessons.push({
      slug,
      number,
      date: mtime.toISOString().slice(0, 10),
      minutes: Math.max(1, Math.round(chars / CPM)),
      toc,
      zh: {
        title: data.title ?? stem,
        ...splitTitle(data.title ?? stem, number),
        description: data.description ?? '',
      },
    })

    console.log(`  ${String(number).padStart(2, '0')}  ${slug}  ${lessons.at(-1).minutes} min  ${toc.length} sections  ${figures.size} figures`)
  }

  const banner = `// Generated by scripts/build-course.mjs — do not edit.\n` +
    `// Source: ${SRC.replace(process.env.HOME, '~')}\n` +
    `// Run \`npm run course\` after publishing a lesson.\n\n`

  await writeFile(OUT_DATA, `${banner}export const publishedLessons = ${JSON.stringify(lessons, null, 2)}\n`)

  const mb = (n) => `${(n / 1024 / 1024).toFixed(1)} MB`
  console.log(`\n${lessons.length} lessons → src/content/course/`)
  console.log(`figures: ${mb(bytesIn)} PNG → ${mb(bytesOut)} WebP`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
