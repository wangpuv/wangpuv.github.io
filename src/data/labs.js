// ───────────────────────────────────────────────────────────
// Personal works ("作品" / Lab) — things I design and ship on my
// own time, distinct from company projects in projects.js.
// `slug`, `year`, `accent`, `kind`, `link` are shared; translatable
// fields live in per-item en/zh blocks. Access via lab[lang].
// `kind` is 'app' (App Store) or 'repo' (GitHub) — drives the CTA.
// `icon` + `shots` are optional. A shot carries both theme variants of the
// same screen; its caption lives in each language block under `shots`,
// keyed by `shot.key`, so captions never drift out of order.
// ───────────────────────────────────────────────────────────

export const labs = [
  {
    slug: 'little-step-learning',
    year: '2026',
    // The flagship agent accent (--agent), so this row reads as the same
    // project the home page opens with.
    accent: 'oklch(50% 0.19 285)',
    kind: 'repo',
    link: 'https://github.com/wangpuv/little-step-learning',
    // Desktop screenshot and architecture diagram, so these plates run wide
    // and in one column rather than as a row of phone screens.
    shotsLayout: 'wide',
    shots: [
      { key: 'errata', light: '/little-step-errata.webp', width: 1440, height: 900 },
      { key: 'architecture', light: '/little-step-architecture.webp', width: 1640, height: 1210 },
    ],
    en: {
      title: 'Little Step Learning Agent',
      summary:
        'A mistake-driven learning agent for a single student — from logging a wrong answer through teaching, evidence, and timed review.',
      tags: ['AI Agent', 'Tool calling', 'Local-first', 'Python'],
      overview:
        'Little Step began with my son’s wrong answers. The hard part was never explaining one more time — it was knowing which mistakes point at the same gap, what evidence counts as real mastery, and when to check back. I defined the product and the system boundaries and owned architecture, review, and acceptance, while AI agents wrote most of the implementation. The repository is source-available under an evaluation-only licence for recruiters and technical reviewers, and ships with a demo built on synthetic learning data so a reviewer can walk the whole loop without touching a real record.',
      highlights: [
        'Log one wrong answer and the agent decides for itself whether to explain, probe, or re-ask, keeps the evidence, and schedules the review — the question is not finished the moment it is answered.',
        '“Mastered” is settled by the system, never declared by the model: the agent submits evidence and a proposed action, and domain rules decide what becomes durable fact, so learning state stays traceable and can be judged again later.',
        'Cross-session memory separates raw facts, tentative judgments, and derived projections, so the model’s guesses never harden into untraceable durable state.',
        'The agent loop has explicit step, timeout, and cancellation boundaries; every tool write passes typed validation, transactions, and idempotency keys, with 1392 unit and integration tests guarding each state change.',
        'Local-first: the errata and the learning record stay on the family’s own machine.',
      ],
      stack: ['Python 3.12', 'FastAPI', 'SQLite', 'WebSocket'],
      shots: {
        errata: 'Errata library',
        architecture: 'System architecture',
      },
    },
    zh: {
      title: '小步学习 Agent',
      summary: '一个由错题驱动的单学生学习 Agent：从录入错题，到教学、留存证据，再到定时复查。',
      tags: ['AI Agent', '工具调用', '本地优先', 'Python'],
      overview:
        '这个项目从我儿子的错题开始。真正难的从来不是再讲一遍答案，而是判断哪些错题指向同一个知识点、什么证据才算真的掌握、以及什么时候该复查。我负责产品定义、系统边界、架构、代码审查和最终验收，大部分实现由 AI Agent 完成。仓库以「源码可见（仅限评估）」的方式公开，供招聘方和技术评审查看，并内附一个使用合成学习数据的 Demo，评审可以完整走一遍流程，不会接触任何真实记录。',
      highlights: [
        '录入一道错题，Agent 自己决定是讲解、追问还是重新出题，留下学习证据，并安排之后的复查。一道题不会因为答对一次就结束。',
        '「已经掌握」由系统结算，不由模型宣布：模型只提交学习证据和动作建议，什么能成为持久事实交给领域规则判定，学习状态因此可以追溯，也可以重新判断。',
        '跨会话记忆区分原始事实、暂定判断和派生投影，模型的推测不会变成不可追溯的长期状态。',
        'Agent 循环有步数、超时和取消边界；工具写入全部经过类型校验、事务与幂等键，1392 项单元与集成测试保护每一次状态变化。',
        '本地优先：孩子的错题和学习记录留在家里自己的机器上。',
      ],
      stack: ['Python 3.12', 'FastAPI', 'SQLite', 'WebSocket'],
      shots: {
        errata: '错题本',
        architecture: '系统架构',
      },
    },
  },
  {
    slug: 'littlesteps',
    year: '2026',
    accent: 'oklch(62% 0.14 160)',
    kind: 'app',
    link: 'https://apps.apple.com/cn/app/%E5%B0%8F%E6%AD%A5%E6%89%93%E5%8D%A1-%E4%B8%AD%E5%B0%8F%E5%AD%A6%E7%94%9F%E4%B9%A0%E6%83%AF%E5%85%BB%E6%88%90/id6761506709',
    icon: '/littlesteps/icon.webp',
    // Unretouched App Store screenshots, one pair per screen. The app ships
    // its own light and dark themes, so each plate follows the site theme.
    shots: [
      { key: 'today', light: '/littlesteps/today-light.webp', dark: '/littlesteps/today-dark.webp' },
      { key: 'rewards', light: '/littlesteps/rewards-light.webp', dark: '/littlesteps/rewards-dark.webp' },
      { key: 'achievements', light: '/littlesteps/achievements-light.webp', dark: '/littlesteps/achievements-dark.webp' },
      { key: 'manage', light: '/littlesteps/manage-light.webp', dark: '/littlesteps/manage-dark.webp' },
    ],
    en: {
      title: 'LittleSteps',
      summary: 'An offline-first iOS habit app for kids aged 6–15, building good routines through daily check-ins and rewards.',
      tags: ['iOS', 'SwiftUI', 'Habit Building', 'Offline-first'],
      overview:
        'LittleSteps helps children build daily life and study habits alongside their parents. It is offline-first by design — no accounts, no ads, no data collection; everything stays on the device. I designed, built, and shipped it to the App Store on my own.',
      highlights: [
        'Daily check-in flow with a points-and-rewards loop that keeps kids motivated.',
        'A “shield” mechanism protects streaks, so an occasional missed day doesn’t reset progress.',
        'Flexible scheduling for school days, weekends, and holidays, plus local backup.',
      ],
      stack: ['Swift', 'SwiftUI', 'Local Storage'],
      shots: {
        today: 'Today',
        rewards: 'Rewards',
        achievements: 'Achievements',
        manage: 'Parent controls',
      },
    },
    zh: {
      title: '小步打卡',
      summary: '一款离线优先的 iOS 习惯养成 App，面向 6–15 岁孩子，通过每日打卡和积分奖励培养好习惯。',
      tags: ['iOS', 'SwiftUI', '习惯养成', '离线优先'],
      overview:
        '小步打卡帮助孩子在家长陪伴下养成生活和学习习惯。完全离线优先：无需账号、没有广告、不收集数据，所有信息都保存在本地设备上。从设计、开发到上架 App Store，由我独立完成。',
      highlights: [
        '每日打卡流程结合积分奖励机制，持续激励孩子坚持。',
        '通过「护盾」机制保护连续打卡，偶尔漏打也不会清零。',
        '支持上学日、周末、假期的灵活排程，并提供本地备份。',
      ],
      stack: ['Swift', 'SwiftUI', '本地存储'],
      shots: {
        today: '今日打卡',
        rewards: '奖励兑换',
        achievements: '成就徽章',
        manage: '家长管理',
      },
    },
  },
  {
    slug: 'claude-chime',
    year: '2026',
    accent: 'oklch(60% 0.14 70)',
    kind: 'repo',
    link: 'https://github.com/wangpuv/claude-chime',
    en: {
      title: 'Claude Chime',
      summary: 'A friendly macOS desktop chime for Claude Code — native notifications with a live usage gauge.',
      tags: ['macOS', 'Claude Code', 'Developer Tool', 'Open Source'],
      overview:
        'When Claude Code finishes a task or needs your input, Claude Chime fires a native macOS notification with the real Claude icon, a pleasant sound, and a live gauge of your remaining session and weekly usage. It hooks into Claude Code’s settings and reads the usage endpoint.',
      highlights: [
        'Distinct sounds separate “task done” from “needs input”, and repeat chimes replace rather than stack.',
        'Color-coded usage gauges show session and weekly balance with reset countdowns.',
        'Bilingual, auto-detecting English or Chinese from system settings.',
      ],
      stack: ['Shell', 'Python', 'terminal-notifier'],
    },
    zh: {
      title: 'Claude Chime',
      summary: '为 Claude Code 打造的 macOS 桌面提示音，原生通知搭配实时用量仪表。',
      tags: ['macOS', 'Claude Code', '开发工具', '开源'],
      overview:
        '当 Claude Code 完成任务或需要你输入时，Claude Chime 会弹出带有真实 Claude 图标的原生 macOS 通知，配上悦耳提示音，并实时显示本次会话和每周的剩余用量。它通过 Claude Code 的 hooks 接入，并读取 usage 接口。',
      highlights: [
        '用不同提示音区分「任务完成」和「等待输入」，重复提醒会替换而非堆叠。',
        '彩色用量仪表展示会话与每周额度，并带有重置倒计时。',
        '中英双语，自动跟随系统语言。',
      ],
      stack: ['Shell', 'Python', 'terminal-notifier'],
    },
  },
  {
    slug: 'openclaw-telegram-audio-chat',
    year: '2026',
    accent: 'oklch(58% 0.13 250)',
    kind: 'repo',
    link: 'https://github.com/wangpuv/openclaw-telegram-audio-chat',
    en: {
      title: 'Telegram Audio Chat',
      summary: 'An OpenClaw plugin that turns assistant replies into Telegram voice messages using local TTS.',
      tags: ['OpenClaw', 'Telegram', 'TTS', 'TypeScript'],
      overview:
        'This OpenClaw plugin auto-sends Telegram voice-bubble replies from assistant text using local text-to-speech, so you can listen to responses instead of reading them. It cleans markdown before synthesis and keeps enable/disable state per chat.',
      highlights: [
        '/audio_chat on|off|status|max <n> commands control the feature per chat.',
        'Markdown is stripped before synthesis; overly long messages are skipped with feedback.',
        'Debounced sending avoids duplicate voice bubbles.',
      ],
      stack: ['TypeScript', 'edge-tts', 'ffmpeg'],
    },
    zh: {
      title: 'Telegram 语音对话',
      summary: '一个 OpenClaw 插件，用本地 TTS 把助手回复转成 Telegram 语音消息。',
      tags: ['OpenClaw', 'Telegram', 'TTS', 'TypeScript'],
      overview:
        '这个 OpenClaw 插件会用本地文本转语音，把助手的文字回复自动发成 Telegram 语音气泡，让你可以听而不是读。合成前会清理 Markdown，并按会话分别保存开关状态。',
      highlights: [
        '提供 /audio_chat on|off|status|max <n> 命令，按会话单独控制。',
        '合成前去除 Markdown，过长消息会跳过并给出提示。',
        '发送去重，避免出现重复语音气泡。',
      ],
      stack: ['TypeScript', 'edge-tts', 'ffmpeg'],
    },
  },
  {
    slug: 'openclaw-slack-blockkit-bridge',
    year: '2026',
    accent: 'oklch(54% 0.13 320)',
    kind: 'repo',
    link: 'https://github.com/wangpuv/openclaw-slack-blockkit-bridge',
    en: {
      title: 'Slack Block Kit Bridge',
      summary: 'An OpenClaw plugin for sending native Slack Block Kit cards and handling interactive button clicks.',
      tags: ['OpenClaw', 'Slack', 'Block Kit', 'TypeScript'],
      overview:
        'This OpenClaw plugin lets agents send native Slack Block Kit cards and respond to interactive button clicks. It ships with ready-made templates and supports fully custom layouts, thread replies, and post-action card updates.',
      highlights: [
        'Three built-in templates: approval, task-progress, and pick-one.',
        'Full custom Block Kit support with images, structured content, and multiple actions.',
        'Handles button clicks with replace-or-preserve render modes and thread replies.',
      ],
      stack: ['TypeScript', 'Slack API', 'Block Kit'],
    },
    zh: {
      title: 'Slack Block Kit 桥接',
      summary: '一个 OpenClaw 插件，用于发送原生 Slack Block Kit 卡片并处理交互按钮点击。',
      tags: ['OpenClaw', 'Slack', 'Block Kit', 'TypeScript'],
      overview:
        '这个 OpenClaw 插件让 agent 可以发送原生 Slack Block Kit 卡片，并响应交互按钮点击。内置开箱即用的模板，同时支持完全自定义布局、线程回复和操作后的卡片更新。',
      highlights: [
        '内置三种模板：审批、任务进度、单选。',
        '完整自定义 Block Kit 支持，可包含图片、结构化内容和多个操作。',
        '处理按钮点击，支持「替换 / 保留」渲染模式与线程回复。',
      ],
      stack: ['TypeScript', 'Slack API', 'Block Kit'],
    },
  },
]

// The home page introduces this app inside section 01, so it reads the same
// entry rather than keeping a second copy of the asset paths and captions.
export const littlesteps = labs.find((lab) => lab.slug === 'littlesteps')
