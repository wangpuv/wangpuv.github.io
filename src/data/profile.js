export const profile = {
  initials: 'WP',
  social: [
    { label: 'Email', href: 'mailto:wangpuv@hotmail.com', display: 'wangpuv@hotmail.com' },
    { label: 'GitHub', href: 'https://github.com/wangpuv', display: 'github.com/wangpuv' },
  ],

  en: {
    name: 'Wang Pu',
    role: 'Backend Engineer / Architect / AI Agent Engineer',
    location: 'Hangzhou, China',
    aboutTitle: 'Wang Pu, backend engineer, architect, and AI Agent engineer.',
    heroLines: ['Backend', 'architecture,', 'and AI Agent', 'engineering.'],
    heroIntro:
      'I build reliable backend systems, high-concurrency transaction platforms, and organization-scale permission architectures. Recently I have been shifting more of my work toward AI engineering and agentic product systems.',
    about: [
      'I am a backend engineer and architect with long-running experience in distributed systems, high-concurrency business platforms, organization-level permission systems, and large-scale directory services.',
      'At Alibaba, my work has covered Taobao transaction systems, shopping cart architecture, middleware-style delivery platforms, group-wide ACL systems, and government-grade directory services serving millions of users and hundreds of thousands of organizations.',
      'My current focus is AI engineering: turning model capabilities into stable product features, from streaming protocols and prompt design to engineering frameworks that can be shipped and operated.',
      'Outside of engineering work, I write about reading, technology, and personal observations on my WeChat public account, A Cheng De Dai Ma.',
    ],
    skills: [
      { group: 'Backend', items: ['Java ecosystem', 'Distributed systems', 'High-concurrency transactions', 'Service stability'] },
      { group: 'Architecture', items: ['ACL systems', 'Directory services', 'Disaster recovery', 'Platform productization'] },
      { group: 'AI Engineering', items: ['AI Agent workflows', 'LLM streaming protocols', 'Prompt optimization', 'AI feature architecture'] },
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
        period: '2014 — 2025',
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
    role: '后端开发工程师 / 架构师 / AI Agent 工程师',
    location: '中国 · 杭州',
    aboutTitle: '我是王普，后端开发工程师、架构师和 AI Agent 工程师。',
    heroLines: ['做后端，', '做架构，', '也在转向', 'AI Agent。'],
    heroIntro:
      '我长期从事后端系统、高并发交易系统、组织级权限体系和大型目录服务建设。最近把更多精力放在 AI 工程与 Agent 化产品系统上。',
    about: [
      '我是后端开发工程师和架构师，长期关注分布式系统、高并发业务平台、组织级权限体系，以及大规模目录服务这类需要稳定性和工程深度的问题。',
      '在阿里巴巴，我参与和主导过淘宝交易链路、购物车架构、中台方案交付平台、集团级 ACL 权限系统，以及支撑百万级用户和数十万组织的政务级目录服务。',
      '现在我正在把工程经验迁移到 AI 方向：从大模型流式协议、Prompt 优化，到可上线、可运维的 AI 功能架构和 Agent 工作流。',
      '工作之外，我也在微信公众号「阿诚的代码」写一些关于阅读、技术和个人观察的内容。',
    ],
    skills: [
      { group: '后端工程', items: ['Java 技术体系', '分布式系统', '高并发交易', '服务稳定性'] },
      { group: '系统架构', items: ['ACL 权限体系', '目录服务', '容灾降级', '平台产品化'] },
      { group: 'AI 工程', items: ['AI Agent 工作流', '大模型流式协议', 'Prompt 优化', 'AI 功能架构'] },
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
        period: '2014 — 2025',
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
