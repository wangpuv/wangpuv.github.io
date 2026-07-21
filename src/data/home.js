export const homeContent = {
  resume: {
    href: '/wang-pu-resume.pdf',
    available: false,
  },

  zh: {
    hero: {
      eyebrow: '资深后端与 AI Agent 应用工程师',
      title: '我把大型后端系统经验，带入 AI Agent 产品开发',
      intro:
        '20 年软件研发经验，长期从事电商交易、分布式系统和高并发平台建设。目前专注 AI Agent 应用工程，正在独立开发「小步学习伙伴」。',
      badges: ['20 年软件研发经验', 'Java / Python / AI Agent', '正在寻找新机会'],
    },
    capabilities: {
      eyebrow: '核心能力',
      title: '不是把旧经验放下，而是把它带进新的工程问题。',
      items: [
        {
          index: '01',
          title: '复杂业务系统',
          body: '长期参与电商交易和高并发业务平台建设，熟悉分布式系统、消息、缓存、搜索、数据存储和系统稳定性。',
        },
        {
          index: '02',
          title: 'AI Agent 工程化',
          body: '关注工具调用、状态管理、任务编排、结构化输出、异常恢复、测试和成本控制，而不只是调用模型 API。',
        },
        {
          index: '03',
          title: '从需求到交付',
          body: '能够独立完成需求分析、架构设计、后端开发、AI 能力集成、测试部署和产品迭代。',
        },
      ],
    },
    featured: {
      eyebrow: '重点项目 · 开发中',
      title: '小步学习伙伴',
      lead: '一个错题驱动的本地 AI 学习伙伴，通过对话诊断、工具调用、状态写回和即时可视化，帮助孩子真正理解错因并持续复习。',
      problemLabel: '解决的问题',
      problem: '孩子做错题后，往往只订正答案，没有识别真正错因；下一次学习也难以接续历史状态和薄弱点。',
      usersLabel: '目标用户',
      users: '当前 v1-alpha 聚焦初中阶段孩子，以科学和英语真实错题验证同一套通用学习闭环。',
      responsibilityLabel: '我的职责',
      responsibility:
        '独立负责产品定义、架构设计、Agent 与后端实现、数据模型、测试体系和前端联调，并使用 Codex、Claude Code 协作开发。',
      statusLabel: '真实进度',
      status: 'M1、M2 已完成并通过人工验收；M3 的交互学习页、截图识题、附件、只读查询层已完成，知识点检索重做和最终验收仍在进行。',
      progress: [
        { label: '已实现', value: '错题闭环、工具调用、分层写回、重开续学、分科计划、交互页、截图识题' },
        { label: '开发中', value: '知识点标签检索与重练入口' },
        { label: '规划中', value: 'Today 页面、完整 M3 验收、演示视频' },
      ],
      challengesTitle: '三个核心工程问题',
      challenges: [
        '让模型自主教学，同时用工具契约、状态机和编排层守住必须发生的系统动作。',
        '在 SQLite 事实层、画像、计划和会话历史之间建立可恢复、可重放的数据写回链路。',
        '把模型生成的交互 HTML 当作不可信代码，在最小上下文、CSP 和沙箱 iframe 中隔离执行。',
      ],
      evidence: [
        ['运行形态', 'Python + FastAPI 本地 Web App'],
        ['工程验证', 'M3 C2 阶段 780 项单测通过'],
        ['安全边界', '家长确认门禁 + 生成内容沙箱'],
      ],
      prototypeNote: '当前展示为产品结构预览；真实截图将在设计稿逐屏落地后替换。',
    },
    experience: {
      eyebrow: '大型系统经验',
      title: '在真实规模与约束中做过的工程决策。',
      items: [
        {
          title: '淘宝购物车重构',
          context: '电商交易核心链路，需要同时支撑日常业务演进和大促峰值。',
          complexity: '高并发、强稳定性要求，架构改造必须支持灰度与回滚。',
          action: '参与交易链路核心架构设计与落地，在业务增长和稳定性治理之间做取舍。',
          result: '带来日常交易笔数约 +6 万，大促期间约 +23 万。',
        },
        {
          title: '集团 ACL 权限中枢',
          context: '集团级核心鉴权基础设施，承载复杂账号与权限模型。',
          complexity: '日均鉴权超过 10 亿次，大促峰值要求高可用和可降级。',
          action: '建设高吞吐鉴权链路和去中心化降级服务，并优化大型应用权限数据存储。',
          result: '大促期间达到 99.99% 可用性，特定场景数据压缩约 90%。',
        },
        {
          title: 'VDS 组织级目录服务',
          context: '面向复杂政务组织、通讯录关系和可见性控制场景。',
          complexity: '约 120 万用户、40 万组织，并发写入同时要求关系正确。',
          action: '从 0 到 1 设计分布式目录服务、节点写资源平衡算法和大型组织可见性能力。',
          result: '节点操作耗时从约 1200ms 降至 80ms，并支撑省级政务场景运行。',
        },
      ],
    },
    skills: {
      eyebrow: '技术能力',
      title: '按实际使用深度区分，而不是做一面技术 Logo 墙。',
      levels: { core: '核心能力', used: '项目使用', learning: '正在深入' },
      groups: [
        {
          title: '后端与架构',
          items: [
            { name: 'Java / Spring 技术体系', level: 'core' },
            { name: '分布式系统与高并发', level: 'core' },
            { name: '服务稳定性与容灾降级', level: 'core' },
            { name: '平台化与复杂业务建模', level: 'core' },
          ],
        },
        {
          title: '数据与中间件',
          items: [
            { name: '关系型数据与事务设计', level: 'core' },
            { name: '缓存、消息与搜索', level: 'core' },
            { name: 'Tair 与多级缓存', level: 'used' },
            { name: 'SQLite 与本地数据模型', level: 'used' },
          ],
        },
        {
          title: 'AI Agent 应用',
          items: [
            { name: 'Agent Loop 与工具调用', level: 'used' },
            { name: '状态管理与结构化输出', level: 'used' },
            { name: '流式协议与失败恢复', level: 'used' },
            { name: 'Python / FastAPI', level: 'learning' },
          ],
        },
        {
          title: '工程实践',
          items: [
            { name: '架构设计与技术决策', level: 'core' },
            { name: '性能与稳定性治理', level: 'core' },
            { name: '自动化测试与评测', level: 'used' },
            { name: 'Codex / Claude Code 协作开发', level: 'used' },
          ],
        },
      ],
    },
    opportunity: {
      eyebrow: '我正在寻找',
      title: '真正把 AI 用于解决业务问题的团队。',
      body: '我适合 AI Agent 应用后端、Agent 平台、资深后端、技术架构或小型研发团队技术负责人岗位。我愿意继续亲自编码，也能够承担架构设计、技术决策、复杂问题处理和年轻工程师指导工作。',
      roles: ['AI Agent 应用工程师', 'Agent 平台后端 / 架构师', '资深 Java 后端工程师', 'FDE / 技术解决方案', '小团队技术负责人'],
      availability: ['杭州 / 上海', '可接受远程', '随时可以到岗'],
    },
    contact: {
      eyebrow: '联系方式',
      title: '如果你正在组建这样的团队，我们可以直接聊聊。',
      note: '简历正在重新整理，完成后将在这里提供中英文 PDF 下载。',
    },
  },

  en: {
    hero: {
      eyebrow: 'Senior Backend & AI Agent Application Engineer',
      title: 'I bring large-scale backend experience into AI Agent product engineering.',
      intro:
        '20 years in software engineering across e-commerce transactions, distributed systems, and high-concurrency platforms. I now focus on AI Agent application engineering and am independently building Little Step Learning Partner.',
      badges: ['20 years in software engineering', 'Java / Python / AI Agent', 'Open to new opportunities'],
    },
    capabilities: {
      eyebrow: 'Core strengths',
      title: 'Applying mature engineering judgment to a new class of product problems.',
      items: [
        { index: '01', title: 'Complex business systems', body: 'Long-term experience with e-commerce transactions and high-concurrency platforms, including distributed systems, messaging, caching, search, storage, and reliability.' },
        { index: '02', title: 'Production-oriented Agent engineering', body: 'I focus on tool use, state, orchestration, structured output, recovery, testing, and cost—not merely calling a model API.' },
        { index: '03', title: 'From need to delivery', body: 'I can independently cover product analysis, architecture, backend implementation, AI integration, testing, deployment, and iteration.' },
      ],
    },
    featured: {
      eyebrow: 'Featured project · In development',
      title: 'Little Step Learning Partner',
      lead: 'A local, wrong-question-driven AI learning partner that combines conversational diagnosis, tools, state write-back, and just-in-time visualization.',
      problemLabel: 'Problem',
      problem: 'Corrections often stop at the right answer. The actual misconception is not captured, and the next study session cannot reliably resume from prior evidence.',
      usersLabel: 'Current users',
      users: 'The v1-alpha currently validates one reusable learning loop with a middle-school learner across science and English.',
      responsibilityLabel: 'My contribution',
      responsibility: 'I independently own product definition, architecture, Agent and backend implementation, data modeling, testing, and frontend integration, using Codex and Claude Code as development collaborators.',
      statusLabel: 'Actual progress',
      status: 'M1 and M2 are complete and manually accepted. Major M3 slices are implemented; tag-based retrieval, final acceptance, and the Today surface remain in progress.',
      progress: [
        { label: 'Implemented', value: 'Learning loop, tools, write-back, resume, subject plans, interactive pages, screenshot intake' },
        { label: 'In progress', value: 'Knowledge-tag filtering and retest entry' },
        { label: 'Planned', value: 'Today surface, final M3 acceptance, demo video' },
      ],
      challengesTitle: 'Three engineering challenges',
      challenges: [
        'Preserve model autonomy while enforcing mandatory system actions through contracts, state machines, and orchestration.',
        'Build recoverable write-back across SQLite facts, profile state, plans, and session history.',
        'Treat model-generated HTML as untrusted code and isolate it with minimal context, CSP, and a sandboxed iframe.',
      ],
      evidence: [
        ['Runtime', 'Local Python + FastAPI web app'],
        ['Verification', '780 tests passing at M3 C2'],
        ['Safety', 'Parent confirmation gates + sandboxed generated content'],
      ],
      prototypeNote: 'This is a structural product preview. It will be replaced with real screenshots as each designed surface lands.',
    },
    experience: {
      eyebrow: 'Large-scale systems',
      title: 'Engineering decisions made under real scale and constraints.',
      items: [
        { title: 'Taobao Shopping Cart Reconstruction', context: 'A core transaction path supporting everyday evolution and campaign peaks.', complexity: 'High concurrency and strict reliability, with every architectural change requiring safe rollout and rollback.', action: 'Contributed to the core transaction architecture and balanced growth work with stability governance.', result: 'Delivered roughly +60k daily orders and +230k during major campaigns.' },
        { title: 'Group-wide ACL Platform', context: 'Core authorization infrastructure with complex account and permission models.', complexity: 'More than one billion checks per day with peak-event availability requirements.', action: 'Built the high-throughput path, decentralized degradation, and large-application storage optimizations.', result: 'Reached 99.99% availability during major campaigns and about 90% compression in a specific scenario.' },
        { title: 'VDS Directory Service', context: 'Government-scale organizations, address books, and visibility rules.', complexity: 'About 1.2M users and 400k organizations with concurrent writes and relationship correctness.', action: 'Designed the service from zero, including write balancing and large-organization visibility controls.', result: 'Reduced node operation latency from about 1200ms to 80ms.' },
      ],
    },
    skills: {
      eyebrow: 'Technical capability',
      title: 'Grouped by real depth of use—not presented as a logo wall.',
      levels: { core: 'Core', used: 'Used in projects', learning: 'Deepening now' },
      groups: [
        { title: 'Backend & Architecture', items: [{ name: 'Java / Spring ecosystem', level: 'core' }, { name: 'Distributed systems & high concurrency', level: 'core' }, { name: 'Reliability, degradation & recovery', level: 'core' }, { name: 'Platform and domain architecture', level: 'core' }] },
        { title: 'Data & Middleware', items: [{ name: 'Relational data and transactions', level: 'core' }, { name: 'Caching, messaging, and search', level: 'core' }, { name: 'Tair and multi-level caching', level: 'used' }, { name: 'SQLite and local data models', level: 'used' }] },
        { title: 'AI Agent Applications', items: [{ name: 'Agent loops and tool use', level: 'used' }, { name: 'State and structured output', level: 'used' }, { name: 'Streaming and failure recovery', level: 'used' }, { name: 'Python / FastAPI', level: 'learning' }] },
        { title: 'Engineering Practice', items: [{ name: 'Architecture and technical decisions', level: 'core' }, { name: 'Performance and reliability', level: 'core' }, { name: 'Automated tests and evals', level: 'used' }, { name: 'Codex / Claude Code collaboration', level: 'used' }] },
      ],
    },
    opportunity: {
      eyebrow: 'What I am looking for',
      title: 'A team using AI to solve real business problems.',
      body: 'I fit AI Agent application backend, Agent platform, senior backend, architecture, FDE, or small-team technical leadership roles. I want to keep coding while taking responsibility for architecture, technical decisions, hard problems, and mentoring.',
      roles: ['AI Agent Application Engineer', 'Agent Platform Backend / Architect', 'Senior Java Backend Engineer', 'FDE / Technical Solutions', 'Small-team Technical Lead'],
      availability: ['Hangzhou / Shanghai', 'Remote-friendly', 'Available immediately'],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'If you are building this kind of team, let’s talk directly.',
      note: 'The Chinese and English résumé PDFs are being rebuilt and will be available here when ready.',
    },
  },
}
