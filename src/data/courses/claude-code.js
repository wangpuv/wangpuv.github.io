// ───────────────────────────────────────────────────────────
// Claude Code 中文教程 — the hand-written half of the serial.
//
// Chinese lesson bodies are generated: `npm run course` reads the
// Obsidian source and rewrites course.generated.js plus
// src/content/course/claude-code/*.html. Never hand-edit those.
// Everything here is written by hand: the English shell, the stage
// grouping, and the lessons announced but not yet published.
// ───────────────────────────────────────────────────────────

export default {
  slug: 'claude-code',
  total: 17,
  // Which accent family the serial is inked in. `accent` is the site's
  // terracotta; the second course takes the teal so the two are told
  // apart by colour alone on the /writing spread.
  ink: 'accent',
  // Published on the WeChat account first, mirrored here, so the contents and
  // article pages carry the QR.
  wechat: true,

  en: {
    title: 'Claude Code, taught in Chinese',
    tagline: 'From getting by to running unattended',
    lead: 'A 17-lesson course ordered by how often you actually reach for each thing, not by the alphabet. It starts from “Claude Code is installed and I have shipped a few changes with it” and works towards using it quickly, cheaply, safely, and unattended.',
    why: 'I wrote it because most Chinese material lists commands without explaining how they relate, and because this product moves fast enough that undated advice quietly goes wrong. Every lesson is re-checked against the official docs and the current build before it ships.',
    cadence: 'a lesson every two days',
    follow: 'Lessons go out first on my WeChat account 阿诚的代码.',
  },
  zh: {
    title: 'Claude Code 中文教程',
    tagline: '从能用到自动化',
    lead: '这不是一份命令清单，而是一条按使用频率组织的学习路线。它从「已经装好 Claude Code、也跑通过几次真实对话」出发，目标是走到用得快、用得省、用得稳，也敢让它自动跑。',
    why: '写它的原因很简单：现有的中文内容大多只罗列命令，不解释命令之间的关系；而这个产品更新太快，没有标注核对时间的说法很容易继续被转抄。每一课发布前，我都会重新对照官方文档和当前版本核对一遍。',
    cadence: '每两天更新一课',
    follow: '每课首发于微信公众号「阿诚的代码」。',
  },

  // Three stages, taken from the 发刊词. `from`/`to` are lesson numbers;
  // lesson 0 (发刊词) sits above all of them as the opener.
  stages: [
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
  ],

  // Lessons 13–17, announced in the 发刊词 but not yet written. They appear
  // on the contents page as plain, unlinked rows: the arc is part of what
  // the course is, and pretending the list stops at the last published
  // lesson would undersell it.
  upcoming: [
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
  ],

  // The low-frequency commands (remote control, GitHub, Slack, Chrome, IDE,
  // diagnostics, billing) are not worth a lesson each; they close the course
  // as a lookup table. Rendered after the last stage.
  appendix: {
    number: null,
    label: { en: 'Appendix', zh: '附录' },
    en: { topic: 'Command lookup table', kicker: 'The low-frequency commands, in one place' },
    zh: { topic: '命令速查表', kicker: '低频命令集中放在这里，需要时查，不需要背' },
  },

  // English titles for the published lessons, keyed by slug. Topic and kicker
  // mirror the Chinese split; the description is the frontmatter summary.
  english: {
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
    '12-batch-parallel-changes': {
      topic: 'Large parallel changes',
      kicker: '/batch is not a “big change” button',
      description:
        'What actually suits /batch: rules already settled, units that are independent, results you can sign off. Then the split, the plan you approve, and the merge nobody else can do for you.',
    },
  },
}
