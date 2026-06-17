// ───────────────────────────────────────────────────────────
// PLACEHOLDER PROJECTS — replace with your real work.
// `slug`, `year`, `accent` are shared across languages (the slug
// is the URL: /work/<slug>). Translatable fields live in the
// `en` and `zh` blocks. Access via: const c = project[lang]
// ───────────────────────────────────────────────────────────

export const projects = [
  {
    slug: 'aurora-analytics',
    year: '2024',
    accent: 'oklch(54% 0.17 36)',
    en: {
      title: 'Aurora Analytics',
      role: 'Lead Designer & Frontend',
      summary: 'A real-time analytics dashboard that makes complex data feel approachable.',
      tags: ['Product', 'Design System', 'Data Viz'],
      overview:
        'Aurora is a self-serve analytics platform for product teams. The challenge was to surface dense, fast-moving data without overwhelming non-technical users. I led both the design language and the frontend implementation.',
      contributions: [
        'Defined the visual language and component library used across 40+ screens.',
        'Designed a flexible chart system that adapts to light and dark themes.',
        'Built the frontend in React, shipping a 40% faster first paint.',
      ],
      outcome: 'Activation up 24%, support tickets down 30% within two quarters.',
    },
    zh: {
      title: 'Aurora 数据平台',
      role: '主设计师 & 前端',
      summary: '一个实时数据分析看板，让复杂的数据也变得平易近人。',
      tags: ['产品', '设计系统', '数据可视化'],
      overview:
        'Aurora 是一个面向产品团队的自助式数据分析平台。挑战在于：如何在不让非技术用户感到吃力的前提下，呈现密集且快速变化的数据。我主导了设计语言和前端实现。',
      contributions: [
        '定义了贯穿 40 多个页面的视觉语言和组件库。',
        '设计了一套可适配明暗主题的灵活图表系统。',
        '用 React 构建前端，首屏渲染提速 40%。',
      ],
      outcome: '两个季度内激活率提升 24%，客服工单下降 30%。',
    },
  },
  {
    slug: 'meridian-mobile',
    year: '2023',
    accent: 'oklch(55% 0.13 250)',
    en: {
      title: 'Meridian Mobile',
      role: 'Product Designer',
      summary: 'Rethinking onboarding for a finance app used by two million people.',
      tags: ['Mobile', 'Onboarding', 'Research'],
      overview:
        'Meridian’s onboarding was leaking users at every step. Through research and rapid prototyping, we cut the flow from nine screens to four without losing required compliance steps.',
      contributions: [
        'Ran 18 moderated usability sessions to map drop-off points.',
        'Prototyped and tested three flow variants in two weeks.',
        'Partnered with legal to keep compliance while reducing friction.',
      ],
      outcome: 'Completion rate rose from 61% to 84%.',
    },
    zh: {
      title: 'Meridian 移动端',
      role: '产品设计师',
      summary: '为一款两百万人在用的金融应用，重新设计引导流程。',
      tags: ['移动端', '引导流程', '用户研究'],
      overview:
        'Meridian 的引导流程在每一步都在流失用户。通过用户研究和快速原型，我们把流程从九屏精简到四屏，同时保留了所有必需的合规步骤。',
      contributions: [
        '主持了 18 场有引导的可用性测试，定位流失节点。',
        '在两周内制作并测试了三种流程方案。',
        '与法务协作，在降低阻力的同时确保合规。',
      ],
      outcome: '完成率从 61% 提升到 84%。',
    },
  },
  {
    slug: 'foldspace-editor',
    year: '2021',
    accent: 'oklch(58% 0.12 150)',
    en: {
      title: 'Foldspace Editor',
      role: 'Design & Engineering',
      summary: 'A distraction-free writing tool with a focus on typography.',
      tags: ['Editor', 'Typography', 'Web'],
      overview:
        'Foldspace is a writing environment built around the belief that good typography helps you think. I designed the reading experience and implemented the rich-text engine.',
      contributions: [
        'Designed a typographic system with optical sizing and balanced line lengths.',
        'Built a collaborative rich-text editor with conflict-free editing.',
        'Shipped offline-first sync so work is never lost.',
      ],
      outcome: 'Featured as a Product of the Day; 12k sign-ups in week one.',
    },
    zh: {
      title: 'Foldspace 编辑器',
      role: '设计 & 工程',
      summary: '一个专注排版、没有干扰的写作工具。',
      tags: ['编辑器', '排版', 'Web'],
      overview:
        'Foldspace 是一个写作环境，它相信好的排版能帮你更好地思考。我设计了阅读体验，并实现了富文本引擎。',
      contributions: [
        '设计了一套带光学尺寸、行长均衡的排版系统。',
        '构建了支持无冲突协同编辑的富文本编辑器。',
        '上线了离线优先的同步机制，让内容永不丢失。',
      ],
      outcome: '获评「每日精选产品」，上线首周 1.2 万次注册。',
    },
  },
  {
    slug: 'field-notes',
    year: '2020',
    accent: 'oklch(60% 0.14 70)',
    en: {
      title: 'Field Notes',
      role: 'Side Project',
      summary: 'A small app for capturing thoughts on the move, designed in a weekend.',
      tags: ['Side Project', 'iOS', 'Personal'],
      overview:
        'Field Notes started as a personal itch: a fast, quiet place to jot ideas without the bloat of bigger apps. It stays intentionally tiny.',
      contributions: [
        'Designed and built the entire app solo over a long weekend.',
        'Focused on a single gesture-driven capture interaction.',
        'Kept the whole thing under 2 MB.',
      ],
      outcome: 'Still my daily driver four years later.',
    },
    zh: {
      title: 'Field Notes',
      role: '副业项目',
      summary: '一个随手记录想法的小应用，用一个周末做出来的。',
      tags: ['副业项目', 'iOS', '个人'],
      overview:
        'Field Notes 源于一个个人的小痒处：一个快速、安静、能随手记下想法的地方，没有大应用那些臃肿。它刻意保持极简。',
      contributions: [
        '在一个长周末里独自完成了整个应用的设计与开发。',
        '专注打磨一个手势驱动的记录交互。',
        '把整个应用控制在 2 MB 以内。',
      ],
      outcome: '四年过去，它依然是我每天都在用的工具。',
    },
  },
]
