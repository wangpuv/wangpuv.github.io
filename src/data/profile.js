export const profile = {
  initials: 'WP',
  social: [
    { label: 'Email', href: 'mailto:wangpuv@hotmail.com', display: 'wangpuv@hotmail.com' },
    { label: 'GitHub', href: 'https://github.com/wangpuv', display: 'github.com/wangpuv' },
  ],

  en: {
    name: 'Wang Pu',
    role: 'Senior Backend & AI Agent Application Engineer',
    location: 'Hangzhou, China',
    aboutTitle: 'Senior backend experience, applied to AI Agent product engineering.',
    heroLines: ['Large-scale backend experience,', 'applied to AI Agent products.'],
    heroIntro:
      'I build reliable backend systems, high-concurrency transaction platforms, and organization-scale permission architectures. Recently I have been shifting more of my work toward AI engineering and agentic product systems.',
    about: [
      'I am a backend engineer and architect with long-running experience in distributed systems, high-concurrency business platforms, organization-level permission systems, and large-scale directory services.',
      'At Alibaba, my work has covered Taobao transaction systems, shopping cart architecture, middleware-style delivery platforms, group-wide ACL systems, and government-grade directory services serving millions of users and hundreds of thousands of organizations.',
      'I now apply that engineering background to AI Agent products: tool use, state, orchestration, structured output, failure recovery, testing, and product delivery.',
      'Outside of engineering work, I write about reading, technology, and personal observations on my WeChat public account, A Cheng De Dai Ma.',
    ],
    skills: [
      { group: 'Backend & Architecture · Core', items: ['Java / Spring ecosystem', 'Distributed systems', 'High-concurrency transactions', 'Reliability and degradation'] },
      { group: 'Data & Middleware · Core / Used', items: ['Relational data and transactions', 'Caching, messaging, and search', 'Tair and multi-level caching', 'SQLite data modeling'] },
      { group: 'AI Agent Applications · Used / Deepening', items: ['Agent loops and tool use', 'State and structured output', 'Streaming and failure recovery', 'Python / FastAPI (deepening)'] },
      { group: 'Engineering Practice · Core', items: ['Architecture decisions', 'Performance governance', 'Automated tests and evals', 'Codex / Claude Code collaboration'] },
    ],
    achievements: [
      {
        metric: '1B+',
        label: 'daily authorization checks',
        detail: 'Built a group-wide ACL permission system with decentralized degradation and four-nines availability during major traffic peaks.',
      },
      {
        metric: '1.2M users',
        label: '400k organizations',
        detail: 'Designed and implemented a distributed directory service for government-grade organization and address book scenarios.',
      },
      {
        metric: '93%',
        label: 'latency reduction',
        detail: 'Optimized directory node operations from 1200ms to 80ms through architecture and algorithm improvements.',
      },
      {
        metric: '2 patents',
        label: 'system architecture',
        detail: 'Delivered one national patent for large-organization address book visibility control, plus a core directory-service algorithm patent kept as an enterprise patent rather than filed nationally, since the algorithm is best left undisclosed.',
      },
      {
        metric: 'Top 2',
        label: 'shopping cart CTR feature',
        detail: 'Led AI comparison architecture that reached 3.5%+ average daily click-through rate in a high-traffic transaction scene.',
      },
      {
        metric: '3 days',
        label: 'complex solution delivery',
        detail: 'Productized middleware capabilities into a self-service solution market with 50%+ self-service construction rate.',
      },
    ],
    experience: [
      {
        period: 'Sep 2025 — Present',
        role: 'Independent Developer · AI Agent Product Engineering',
        org: 'Little Step Learning Partner / LittleSteps / Open Source',
        note: 'Independently building an AI learning Agent and an iOS habit app, while shipping several open-source developer tools with Codex and Claude Code as development collaborators.',
      },
      {
        period: '2014 — Aug 2025',
        role: 'Technical Expert',
        org: 'Alibaba Group',
        note: 'Worked across Taobao transaction systems and enterprise intelligence; led architecture for AI product features, shopping cart reconstruction, ACL systems, and VDS directory services.',
      },
      {
        period: '2013 — 2014',
        role: 'Development Team Lead',
        org: 'Wuhan Baijuncheng Technology',
        note: 'Led localized development for China Mobile 4A security platform and standardized special requirement modules across 23 provinces.',
      },
      {
        period: '2009 — 2013',
        role: 'Project Manager',
        org: 'Gohigh Softcom',
        note: 'Delivered core China Mobile systems including 12580 service website, IVR optimization analysis, and portal single sign-on integration.',
      },
      {
        period: '2005 — 2009',
        role: 'Software Engineer',
        org: 'Henan Top Network Engineering',
        note: 'Built provincial government and tax systems covering business registration, invoice processing, and high-concurrency service modules.',
      },
    ],
  },

  zh: {
    name: '王普',
    role: '资深后端与 AI Agent 应用工程师',
    location: '中国 · 杭州',
    aboutTitle: '把长期后端工程经验，应用到 AI Agent 产品开发。',
    heroLines: ['把大型后端系统经验，', '带入 AI Agent 产品开发。'],
    heroIntro:
      '我长期从事后端系统、高并发交易系统、组织级权限体系和大型目录服务建设。最近把更多精力放在 AI 工程与 Agent 化产品系统上。',
    about: [
      '我是后端开发工程师和架构师，长期关注分布式系统、高并发业务平台、组织级权限体系，以及大规模目录服务这类需要稳定性和工程深度的问题。',
      '在阿里巴巴，我参与和主导过淘宝交易链路、购物车架构、中台方案交付平台、集团级 ACL 权限系统，以及支撑百万级用户和数十万组织的政务级目录服务。',
      '现在我把这些工程经验应用到 AI Agent 产品：工具调用、状态管理、任务编排、结构化输出、失败恢复、测试与交付，而不只是调用模型 API。',
      '工作之外，我也在微信公众号「阿诚的代码」写一些关于阅读、技术和个人观察的内容。',
    ],
    skills: [
      { group: '后端与架构 · 核心能力', items: ['Java / Spring 技术体系', '分布式系统', '高并发交易', '稳定性与容灾降级'] },
      { group: '数据与中间件 · 核心 / 项目使用', items: ['关系型数据与事务', '缓存、消息与搜索', 'Tair 与多级缓存', 'SQLite 数据建模'] },
      { group: 'AI Agent 应用 · 项目使用 / 正在深入', items: ['Agent Loop 与工具调用', '状态管理与结构化输出', '流式协议与失败恢复', 'Python / FastAPI（正在深入）'] },
      { group: '工程实践 · 核心能力', items: ['架构与技术决策', '性能与稳定性治理', '自动化测试与评测', 'Codex / Claude Code 协作开发'] },
    ],
    achievements: [
      {
        metric: '10 亿+',
        label: '日均鉴权',
        detail: '构建集团级 ACL 权限体系，设计去中心化降级能力，保障大促峰值场景下 4 个 9 可用性。',
      },
      {
        metric: '120 万用户',
        label: '40 万组织',
        detail: '从 0 到 1 构建政务级分布式目录服务，支撑大型组织通讯录和组织关系场景。',
      },
      {
        metric: '93%',
        label: '耗时优化',
        detail: '通过架构和算法优化，将目录节点操作耗时从 1200ms 降至 80ms。',
      },
      {
        metric: '2 项专利',
        label: '系统架构',
        detail: '沉淀大型组织通讯录可见性控制国家级专利，以及企业核心目录服务算法专利（因算法不宜公开未申请国家专利）。',
      },
      {
        metric: 'Top 2',
        label: '购物车点击场景',
        detail: '主导 AI 商品对比架构，日均点击率 3.5%+，进入购物车点击率 Top 2 场景之一。',
      },
      {
        metric: '3 天',
        label: '复杂方案交付',
        detail: '将中台能力产品化为自助方案市场，方案自助建设率 50%+，复杂方案交付周期大幅缩短。',
      },
    ],
    experience: [
      {
        period: '2025.09 — 至今',
        role: '独立开发者｜AI Agent 产品研发',
        org: '小步学习伙伴 / 小步打卡 / 开源项目',
        note: '独立开发 AI 学习 Agent 与 iOS 习惯养成 App，并使用 Codex、Claude Code 协作完成多个开源开发工具。',
      },
      {
        period: '2014 — 2025.08',
        role: '技术专家',
        org: '阿里巴巴集团',
        note: '先后在企业智能事业部和淘宝交易线工作，负责 AI 产品能力、购物车重构、ACL 权限体系和 VDS 目录服务等核心系统架构。',
      },
      {
        period: '2013 — 2014',
        role: '开发组组长',
        org: '武汉佰钧成技术',
        note: '主导中国移动 4A 安全平台河南本地化研发，并沉淀 23 省特殊需求模块的标准化方案。',
      },
      {
        period: '2009 — 2013',
        role: '项目经理',
        org: '高鸿软通',
        note: '交付河南移动 12580 综合服务网站、IVR 流程优化分析系统和门户单点登录等核心系统。',
      },
      {
        period: '2005 — 2009',
        role: '软件工程师',
        org: '河南拓普网络工程',
        note: '参与并主导省级工商、税务系统开发，覆盖工商登记、税务发票等高并发核心业务模块。',
      },
    ],
  },
}
