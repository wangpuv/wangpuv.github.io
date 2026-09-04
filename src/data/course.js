// ───────────────────────────────────────────────────────────
// Claude Code 中文教程 — the serialised course published on the
// WeChat account 阿诚的代码 and mirrored here.
//
// Chinese content is generated: `npm run course` reads the Obsidian
// source and rewrites course.generated.js + src/content/course/*.html.
// Never hand-edit those. Everything in THIS file is hand-written:
// the English shell, the stage grouping, and lessons not yet published.
//
// The lesson bodies stay Chinese in both languages — an English reader
// gets a translated contents page and an honest note on the article.
// ───────────────────────────────────────────────────────────

import { publishedLessons } from './course.generated'

export const courseMeta = {
  slug: 'claude-code',
  total: 17,
  cadence: 2, // days between lessons
  channel: {
    name: '阿诚的代码',
    qr: '/wechat-qr.png',
  },
  // Reused from the Life page's WeChat card so there is one QR on the site.
  qrAlt: { en: 'WeChat QR code for 阿诚的代码', zh: '阿诚的代码 微信公众号二维码' },
  en: {
    eyebrow: 'Writing',
    title: 'Claude Code, taught in Chinese',
    lead: 'A 17-lesson course ordered by how often you actually reach for each thing, not by the alphabet. It starts from “Claude Code is installed and I have shipped a few changes with it” and works towards using it quickly, cheaply, safely, and unattended.',
    why: 'I wrote it because most Chinese material lists commands without explaining how they relate, and because this product moves fast enough that undated advice quietly goes wrong. Every lesson is re-checked against the official docs and the current build before it ships.',
    tally: 'published · {total} in total',
    cadenceLabel: 'a lesson every two days',
    stagesLabel: 'Contents',
    upcomingLabel: 'Not yet published',
    whyLabel: 'Why another one',
    readLesson: 'Read',
    minutes: 'min read',
    byline: 'By {name}',
    masthead: 'Written and serialised by {name}',
    authorBio:
      'Backend and distributed-systems engineer of twenty years, eleven of them at Alibaba as a Technical Expert. Now working on AI agent engineering, AI application architecture, and AI platforms.',
    authorCta: 'More about the author',
    inChinese: 'This lesson is written in Chinese.',
    switchToChinese: 'Switch the site to Chinese',
    follow: 'Lessons go out first on my WeChat account 阿诚的代码.',
    backToContents: 'All lessons',
    prev: 'Previous',
    next: 'Next',
    onThisPage: 'On this page',
  },
  zh: {
    eyebrow: '教程',
    title: 'Claude Code 中文教程',
    lead: '这不是一份命令清单，而是一条按使用频率组织的学习路线。它从「已经装好 Claude Code、也跑通过几次真实对话」出发，目标是走到用得快、用得省、用得稳，也敢让它自动跑。',
    why: '写它的原因很简单：现有的中文内容大多只罗列命令，不解释命令之间的关系；而这个产品更新太快，没有标注核对时间的说法很容易继续被转抄。每一课发布前，我都会重新对照官方文档和当前版本核对一遍。',
    tally: '已发布 · 共 {total} 课',
    cadenceLabel: '每两天更新一课',
    stagesLabel: '目录',
    upcomingLabel: '待发布',
    whyLabel: '为什么还要再写一套',
    readLesson: '阅读',
    minutes: '分钟',
    byline: '文 / {name}',
    masthead: '{name} 撰写并连载',
    authorBio:
      '20 年后端与分布式系统工程师，其中 11 年在阿里巴巴任技术专家。现在做 AI Agent 工程、AI 应用架构与 AI 平台。',
    authorCta: '了解作者',
    inChinese: '',
    switchToChinese: '',
    follow: '每课首发于微信公众号「阿诚的代码」。',
    backToContents: '返回目录',
    prev: '上一课',
    next: '下一课',
    onThisPage: '本课目录',
  },
}

// Three stages, taken from the 发刊词. `from`/`to` are lesson numbers;
// lesson 0 (发刊词) sits above all of them as the opener.
export const stages = [
  {
    key: 'foundations',
    from: 1,
    to: 6,
    en: { label: 'Stage one', title: 'Get the foundations right', note: 'The point is not knowing more commands. It is that Claude remembers, thinks clearly, and can be walked back when it goes wrong.' },
    zh: { label: '第一阶段', title: '先把地基打稳', note: '目标不是「知道更多命令」，而是让 Claude 在项目里记得住、想得清、跑偏后回得来。' },
  },
  {
    key: 'control',
    from: 7,
    to: 11,
    en: { label: 'Stage two', title: 'Make it controllable', note: 'The important part is not opening up more permissions. It is drawing the boundary with rules first, then going fast inside it.' },
    zh: { label: '第二阶段', title: '让它变得可控', note: '最重要的不是「放开更多权限」，而是学会用规则画边界，再在边界内提速。' },
  },
  {
    key: 'automation',
    from: 12,
    to: 17,
    en: { label: 'Stage three', title: 'From one thread to parallel and automatic', note: 'The goal is a partner that works in parallel, keeps verifying, and can push a task forward on its own inside a boundary you set.' },
    zh: { label: '第三阶段', title: '从单线程走向并行和自动化', note: '目标是让 Claude 从「你问一句，它做一步」，变成一个能并行协作、持续验证、在明确边界内自动推进的工程伙伴。' },
  },
]

// Lessons 12–17, announced in the 发刊词 but not yet written. They appear
// on the contents page as plain, unlinked rows: the arc is part of what
// the course is, and pretending the list stops at 11 would undersell it.
export const upcomingLessons = [
  {
    number: 12,
    en: { topic: 'Large parallel changes', kicker: 'Which big edits are worth splitting up' },
    zh: { topic: '大规模并行改动', kicker: '什么样的大改动适合拆成并行任务' },
  },
  {
    number: 13,
    en: { topic: 'Background, forks, branches, tasks', kicker: 'Four ways to run more than one thing' },
    zh: { topic: '后台、分叉、分支与任务面板', kicker: '同时推进多件事的四种方式' },
  },
  {
    number: 14,
    en: { topic: 'Running and verifying the app', kicker: 'Green tests are not a working product' },
    zh: { topic: '运行并验证应用', kicker: '测试变绿不等于应用真的跑起来了' },
  },
  {
    number: 15,
    en: { topic: 'Loops and goals', kicker: 'Keeping a task moving until it is done' },
    zh: { topic: '循环与目标', kicker: '让任务持续推进到目标达成' },
  },
  {
    number: 16,
    en: { topic: 'Cloud review and planning', kicker: 'Deep passes that do not run locally' },
    zh: { topic: '云端深度审查与规划', kicker: '不在本机跑的深度审查' },
  },
  {
    number: 17,
    en: { topic: 'Dynamic workflows and multi-agent research', kicker: 'What automatic orchestration actually decides' },
    zh: { topic: '动态工作流与多代理研究', kicker: '自动编排到底替你决定了什么' },
  },
]

// The low-frequency commands (remote control, GitHub, Slack, Chrome, IDE,
// diagnostics, billing) are not worth a lesson each; they close the course
// as a lookup table.
export const appendix = {
  number: null,
  label: { en: 'Appendix', zh: '附录' },
  en: { topic: 'Command lookup table', kicker: 'The low-frequency commands, in one place' },
  zh: { topic: '命令速查表', kicker: '低频命令集中放在这里，需要时查，不需要背' },
}

// English titles for the published lessons, keyed by slug. Topic and kicker
// mirror the Chinese split; the description is the frontmatter summary.
const english = {
  '00-preface': {
    topic: 'Introduction',
    kicker: '17 lessons, from getting by to running unattended',
    description:
      'Not a command list: a learning path ordered by how often you reach for each thing. A lesson every two days, from usable towards fast, controlled, and automatic.',
  },
  '01-init-claude-md': {
    topic: '/init and CLAUDE.md',
    kicker: 'A project brief Claude will actually follow',
    description:
      'What is worth writing down, a four-gate test for every line, six places a rule can live, and why the thing to optimise is attention rather than token cost.',
  },
  '02-context-management': {
    topic: 'Three context commands',
    kicker: '/context to look, /compact to squeeze, /clear to drop',
    description:
      'How the three divide the work: reading what the window holds, compressing to keep going, and clearing when the subject changes.',
  },
  '03-model-and-plan-mode': {
    topic: 'Models and plan mode',
    kicker: 'Plan with the strong one, execute with the fast one',
    description:
      'Choosing between Fable, Opus, Sonnet and Haiku by task, planning read-only first, and why the two phases are better kept apart.',
  },
  '04-code-review': {
    topic: 'Code review',
    kicker: 'Do not let the model only review itself',
    description:
      'What separates /code-review, /review and /code-review ultra, and how to get a fresh pair of eyes onto the real diff and the intent behind it.',
  },
  '05-memory-and-rewind': {
    topic: 'Memory and rewind',
    kicker: 'Keep what you learned, undo what broke',
    description:
      'How CLAUDE.md and auto-memory split the job, what /memory is actually for, and how /rewind restores code, conversation, or a slice of context.',
  },
  '06-resume': {
    topic: 'Resuming sessions',
    kicker: 'Find yesterday’s context, carry on today',
    description:
      'What a session stores, how /resume differs from --continue, and when to restore, compress, or start clean instead.',
  },
  '07-agents-and-mcp': {
    topic: 'Subagents and MCP',
    kicker: 'Send the side quest out, bring the tool in',
    description:
      'Separate context for side tasks versus connections to outside systems, and how to combine the two on least privilege.',
  },
  '08-permissions-and-auto-mode': {
    topic: 'Permissions and auto mode',
    kicker: 'Rules draw the line, modes catch the rest',
    description:
      'Two layered systems: allow, ask and deny as durable boundaries, and six modes deciding what happens to everything they miss.',
  },
  '09-effort-and-fast': {
    topic: 'Effort and speed',
    kicker: '/effort sets depth, /fast sets latency',
    description:
      'Two independent dials, and how to combine them against task difficulty, the cost of waiting, and the budget.',
  },
  '10-diff-and-usage': {
    topic: 'Changes and spend',
    kicker: '/diff for what changed, /usage for what it cost',
    description:
      'Three read-only commands: total versus per-turn diffs, session spend against plan limits, and a quick read on the current environment.',
  },
  '11-help-and-discovery': {
    topic: 'Help and discovery',
    kicker: 'Find the entry point without derailing the task',
    description:
      '/help for reference, /skills for what is visible, /powerup for demos, /btw for the side question that needs no tools.',
  },
}

export const lessons = publishedLessons.map((lesson) => ({
  ...lesson,
  en: english[lesson.slug] ?? lesson.zh,
}))

export const lessonBySlug = (slug) => lessons.find((lesson) => lesson.slug === slug)

// The 发刊词 is lesson 00 and sits outside the 17, so it is not one of them.
// Derived once here because both the contents page and the home page count.
export const publishedCount = lessons.filter((lesson) => lesson.number >= 1).length
