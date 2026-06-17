export const projects = [
  {
    slug: 'ai-product-comparison',
    year: '2025',
    accent: 'oklch(54% 0.17 36)',
    en: {
      title: 'AI Product Comparison',
      role: 'Architecture & AI Engineering',
      summary: 'An AI-assisted comparison feature inside Taobao shopping cart, designed for real shopping decisions.',
      tags: ['AI Engineering', 'LLM', 'E-commerce'],
      stack: ['Java', 'Spring', 'LLM', 'SSE Streaming', 'Prompt Engineering'],
      overview:
        'The shopping cart is a dense decision surface: users compare price, attributes, reviews, and trade-offs while still expecting the interaction to stay fast. I led the architecture for two generations of AI recommendation and comparison capabilities, making model output usable inside a high-traffic transaction scene.',
      contributions: [
        'Designed the engineering framework for AI comparison, including streaming protocol definition and product-side integration.',
        'Iterated prompt strategies around category-specific comparison and decision guidance.',
        'Connected model output with shopping cart interaction patterns while keeping latency and stability under control.',
      ],
      outcome: 'Reached 3.5%+ average daily click-through rate and became a Top 2 shopping cart click-through feature in its category context.',
    },
    zh: {
      title: '购物车商品 AI 智能对比',
      role: '架构设计 & AI 工程',
      summary: '在淘宝购物车里落地 AI 辅助商品对比能力，把大模型能力变成真实购物决策工具。',
      tags: ['AI 工程', '大模型', '电商交易'],
      stack: ['Java', 'Spring', '大模型', 'SSE 流式', 'Prompt 工程'],
      overview:
        '购物车是一个高密度决策场景：用户需要比较价格、参数、评价和取舍，同时又要求链路足够快、足够稳定。我主导两代 AI 智能推荐与商品对比能力架构，让模型输出可以稳定进入高流量交易场景。',
      contributions: [
        '设计商品智能对比工程框架，定义大模型流式协议并完成产品侧接入。',
        '围绕类目化对比和决策引导持续优化 Prompt 策略。',
        '把模型输出与购物车交互链路结合，同时控制延迟、稳定性和线上风险。',
      ],
      outcome: '日均点击率 3.5%+，在购物车点击率中位列 Top 2 场景之一。',
    },
  },
  {
    slug: 'shopping-cart-reconstruction',
    year: '2024',
    accent: 'oklch(55% 0.13 250)',
    en: {
      title: 'Shopping Cart Reconstruction',
      role: 'Backend Architecture',
      summary: 'A core transaction-system reconstruction that improved daily and campaign transaction throughput.',
      tags: ['Backend', 'Transactions', 'High Concurrency'],
      overview:
        'Taobao shopping cart sits on the critical path of e-commerce transactions. The reconstruction focused on business evolution, technical stability, and throughput under both daily traffic and major campaign peaks.',
      contributions: [
        'Participated in core architecture design for the reconstructed shopping cart transaction flow.',
        'Balanced business growth requirements with stability work in a high-concurrency production system.',
        'Supported daily and large-promotion scenarios with architecture changes that could be rolled out safely.',
      ],
      outcome: 'Helped drive +60k daily transaction orders and +230k orders during major promotion periods.',
    },
    zh: {
      title: '淘宝购物车重构',
      role: '后端架构',
      summary: '面向交易核心链路的购物车重构，在日常和大促场景提升交易承载与业务结果。',
      tags: ['后端', '交易系统', '高并发'],
      overview:
        '淘宝购物车处在电商交易核心路径上，既要支撑业务持续演进，也要扛住日常高并发和大促峰值。本次重构围绕链路稳定性、业务扩展性和交易效率展开。',
      contributions: [
        '参与购物车交易链路重构的核心架构设计与落地。',
        '在高并发生产系统中平衡业务增长诉求和稳定性治理。',
        '支持日常流量和大促场景，以可灰度、可回滚的方式推进架构改造。',
      ],
      outcome: '带来日常笔数 +6w，大促笔数 +23w 的业务增量。',
    },
  },
  {
    slug: 'solution-market',
    year: '2022',
    accent: 'oklch(58% 0.12 150)',
    en: {
      title: 'Solution Market',
      role: 'Platform Architecture',
      summary: 'A configurable delivery platform that productized middleware capabilities for complex business solutions.',
      tags: ['Platform', 'Productization', 'Delivery'],
      overview:
        'Complex business solutions often require repeated development, configuration, testing, and environment setup. The solution market turned these capabilities into a visual, self-service platform so teams could build and deliver scenarios faster.',
      contributions: [
        'Built a visual configuration workflow for solution creation, environment setup, debugging, and preview.',
        'Productized reusable middleware capabilities into self-service delivery assets.',
        'Supported complex scenarios such as mini-program site construction through standardized templates and tooling.',
      ],
      outcome: 'Reached 50%+ self-service solution construction rate and reduced complex solution delivery to about three person-days.',
    },
    zh: {
      title: '中台解决方案市场',
      role: '平台架构',
      summary: '把中台能力产品化成可视化配置交付平台，降低复杂方案的建设成本。',
      tags: ['平台化', '产品化', '交付效率'],
      overview:
        '复杂业务方案往往反复消耗开发、配置、测试和环境搭建成本。中台解决方案市场将这些能力沉淀为可视化、自助式平台，让团队可以更快建设和交付业务场景。',
      contributions: [
        '建设可视化配置流程，覆盖方案创建、测试环境搭建、调试和预览。',
        '将可复用的中台能力产品化，沉淀为自助交付资产。',
        '通过标准化模板和工具链支撑微信小程序建站等复杂方案。',
      ],
      outcome: '方案自助建设率达到 50%+，复杂方案交付人日缩短到约 3 天。',
    },
  },
  {
    slug: 'vds-directory-service',
    year: '2020',
    accent: 'oklch(60% 0.14 70)',
    en: {
      title: 'VDS Directory Service',
      role: 'Distributed Systems Architecture',
      summary: 'A government-grade organization directory service supporting 1.2 million users and 400k organizations.',
      tags: ['Distributed Systems', 'Directory Service', 'Patent'],
      stack: ['Java', 'Distributed Storage', 'Org Tree', 'Closure Table', 'Caching'],
      overview:
        'VDS is a large-scale organization directory service built for complex government and enterprise scenarios. The system needed to support massive organization trees, visibility control, and high-concurrency write operations without sacrificing correctness.',
      contributions: [
        'Built the distributed directory service from zero to one for 1.2 million users and 400k organizations.',
        'Designed a node write resource balancing algorithm for high-concurrency directory updates.',
        'Implemented large-organization address book visibility control, later granted as a national patent.',
      ],
      outcome: 'Improved node operation latency from 1200ms to 80ms and supported smooth operation at provincial government scale.',
    },
    zh: {
      title: 'VDS 组织级目录服务',
      role: '分布式系统架构',
      summary: '从 0 到 1 构建政务级组织目录服务，支撑 120 万用户和 40 万组织。',
      tags: ['分布式系统', '目录服务', '专利'],
      stack: ['Java', '分布式存储', '组织树', '闭包表', '多级缓存'],
      overview:
        'VDS 面向复杂政务和企业组织场景，需要支撑海量组织树、通讯录可见性控制，以及高并发节点写操作，同时保证一致性和稳定性。',
      contributions: [
        '从 0 到 1 构建分布式目录服务，支撑 120 万用户、40 万组织。',
        '设计目录服务节点写操作资源平衡算法，支撑高并发目录节点写入。',
        '实现大型组织通讯录可见性控制能力，并获得国家级专利授权。',
      ],
      outcome: '节点操作耗时从 1200ms 优化至 80ms，支撑省级政务场景平稳运行。',
    },
  },
  {
    slug: 'acl-permission-center',
    year: '2019',
    accent: 'oklch(50% 0.12 300)',
    en: {
      title: 'ACL Permission Center',
      role: 'System Architecture',
      summary: 'A group-wide permission system handling more than one billion authorization checks per day.',
      tags: ['ACL', 'Reliability', 'Authorization'],
      stack: ['Java', 'Tair', 'Decentralized', 'Multi-level Cache', 'Degradation'],
      overview:
        'The ACL permission center served as a core authorization layer for group-wide systems. It had to handle very high request volume, complex account and permission models, and strict availability requirements during major traffic peaks.',
      contributions: [
        'Built the group-level permission management architecture and high-throughput authorization flow.',
        'Designed decentralized degradation services to keep authorization available during peak events.',
        'Optimized permission data storage for large-scale applications with major compression gains.',
      ],
      outcome: 'Supported 1B+ daily authorization checks and achieved four-nines availability during major promotion periods.',
    },
    zh: {
      title: '集团 ACL 权限中枢',
      role: '系统架构',
      summary: '服务集团全域的权限管理体系，日均鉴权量超过 10 亿次。',
      tags: ['权限体系', '稳定性', '鉴权'],
      stack: ['Java', 'Tair', '去中心化', '多级缓存', '降级容灾'],
      overview:
        'ACL 权限中枢是集团级系统的核心鉴权层，需要处理超高请求量、复杂账号权限模型，以及大促期间的严苛可用性要求。',
      contributions: [
        '构建集团级权限管理架构和高吞吐鉴权链路。',
        '设计去中心化降级服务，保障峰值场景下的权限系统可用性。',
        '优化大型应用权限数据存储，在特定场景实现约 90% 的压缩收益。',
      ],
      outcome: '支撑日均 10 亿次以上鉴权，大促期权限系统可用性达到 4 个 9。',
    },
  },
]
