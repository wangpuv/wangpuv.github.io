// ───────────────────────────────────────────────────────────
// Personal works ("作品" / Lab) — things I design and ship on my
// own time, distinct from company projects in projects.js.
// `slug`, `year`, `accent`, `kind`, `link` are shared; translatable
// fields live in per-item en/zh blocks. Access via lab[lang].
// `kind` is 'app' (App Store) or 'repo' (GitHub) — drives the CTA.
// ───────────────────────────────────────────────────────────

export const labs = [
  {
    slug: 'littlesteps',
    year: '2025',
    accent: 'oklch(62% 0.14 160)',
    kind: 'app',
    link: 'https://apps.apple.com/us/app/%E5%B0%8F%E6%AD%A5%E6%89%93%E5%8D%A1-%E4%B8%AD%E5%B0%8F%E5%AD%A6%E7%94%9F%E4%B9%A0%E6%83%AF%E5%85%BB%E6%88%90/id6761506709',
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
