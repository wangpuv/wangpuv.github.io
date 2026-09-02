export const home = {
  assets: {
    today: '/little-step-today.jpg',
    session: '/little-step-session.jpg',
  },

  links: {
    flagship: '/#flagship',
    littleStepRepo: 'https://github.com/wangpuv/little-step-learning',
    work: '/work',
    aiComparison: '/work#ai-product-comparison',
    acl: '/work#acl-permission-center',
    contact: '/contact',
    resume: '/resume.pdf',
    thisYear: '/this-year',
  },

  en: {
    hero: {
      eyebrow: 'AI Agent Engineering · AI Application Architecture · AI Platform',
      title: [
        { text: 'Twenty years of backend architecture, now engineering reliable ' },
        { text: 'AI agents', emphasis: true, nowrap: true },
        { text: '.' },
      ],
      lead:
        "I'm Wang Pu, a backend and distributed-systems engineer with 20 years of experience, including 11 years at Alibaba as a Technical Expert. I now focus on AI agent engineering, AI application architecture, and AI platforms: turning non-deterministic model capability into product systems that are verifiable, recoverable, and built to evolve.",
      actions: {
        resume: 'Download résumé (Chinese PDF)',
        contact: 'Contact me',
      },
      status: 'Hangzhou · Available full-time · Open to other cities',
      proof: [
        { value: '11 yrs', label: 'Alibaba · Technical Expert' },
        { value: '1B+', label: 'group-wide ACL checks daily' },
        { value: '3.5%+', label: 'Taobao AI feature, daily CTR' },
      ],
    },

    year: {
      marker: 'The year after Alibaba',
      eyebrow: 'What I did with the year',
      title: 'I spent the year after Alibaba turning one real family problem into two products.',
      story: [
        'In 2025 I left Alibaba and spent much of the year helping my child study. Habits that never stick; the same kind of mistake coming back week after week. Small, concrete problems like these make a better starting point than any industry report.',
        'Two things came out of that year. First, LittleSteps, an offline-first habit app now on the App Store, where product, interface, Swift build, and release were all mine. Second, Little Step Learning Agent, a learning-agent system that grew out of wrong-answer review and took the deeper half of the year.',
      ],
      link: 'Why I stepped away for a year',
      shipped: {
        eyebrow: 'First of two · Shipped',
        store: 'App Store · Education',
        title: 'LittleSteps',
        subtitle: 'Habit building for school-age children',
        body:
          'A habit app for children aged 6–15: daily check-ins, points redeemed for rewards a parent sets, and a shield so one missed day does not reset the streak. Product, interface, Swift build, and App Store release were all mine.',
        facts: [
          { label: 'Platform', value: 'iOS 17.6+ · Swift · SwiftUI' },
          { label: 'Privacy', value: 'No network, no data collection, no ads, no third-party SDKs' },
        ],
        cta: 'View on the App Store',
        galleryLabel: 'LittleSteps interface screenshots',
      },
      handoff:
        'The second one is where the year actually went. Once the question shifted from "will the habit stick" to "why does the same mistake keep coming back", a check-in app was no longer the right tool.',
    },

    flagship: {
      marker: 'Agent case study',
      problemEyebrow: 'The problem I saw',
      problemTitle:
        'A child does not need more answers. They need a system that remembers, follows through, and verifies learning.',
      problemBody:
        'After a question is answered, the system still needs to know when to review it, what evidence counts as progress, whether the learner has actually mastered it, and what to teach next — all of it state that has to survive across days and sessions. A conversational AI can give an answer, but it rarely owns that process over time.',
      product: {
        label: 'Little Step Learning Agent',
        kind: 'Product interface',
        title: 'Little Step Learning Agent · Today workspace',
        description:
          'It connects mistakes, learning evidence, today’s tasks, and review plans into one loop. The agent chooses teaching actions and calls tools; the host system validates and commits durable state.',
        alt: 'Little Step Learning Agent today learning workspace',
        zoomLabel: 'View full image',
        closeLabel: 'Close full image',
        chips: [
          { text: '1392 tests', agent: true },
          { text: 'source-available' },
          { text: 'local-first' },
          { text: 'tool calling' },
        ],
      },
      principleEyebrow: 'Core design choice',
      title: [
        { text: 'The model decides how to teach. The system decides ' },
        { text: 'what may become fact.', emphasis: true },
      ],
      lead:
        "Little Step is a mistake-driven, local-first learning agent with tool calling and cross-session memory. The model is free to choose teaching actions, but fact writes, state transitions, and recovery stay under the host system's control.",
      mediaAlt:
        'Little Step learning conversation with a question, original-image reference, and current session state using synthetic learning data',
      mediaCaption: 'Real session screenshot · synthetic learning data',
      name: 'Little Step Learning Agent',
      heading: 'Non-deterministic teaching choices, running inside a traceable, recoverable system.',
      body:
        'The agent can explain, probe, and call tools, but it cannot bypass parameter validation, write to the database at will, or declare a single correct answer as "mastered".',
      repoCta: 'View source on GitHub',
      definitions: [
        { label: 'Agent loop', value: 'steps · timeout · cancel' },
        { label: 'Tool writes', value: 'typed · transactional · idempotent' },
        { label: 'Durable state', value: 'facts · tentative judgments · projections' },
        { label: 'Engineering proof', value: '1392 unit & integration tests' },
      ],
      capabilitiesEyebrow: 'What this project proves',
      capabilities: [
        {
          title: 'Product definition',
          body: 'Turning a real learning problem into a product boundary, domain model, and closed-loop experience.',
        },
        {
          title: 'Agent architecture',
          body: 'Designing the agent loop, tool calling, cross-session memory, and the boundary between model judgment and system fact.',
        },
        {
          title: 'Reliable engineering',
          body: 'Protecting every state change with validation, transactions, idempotency, recovery mechanisms, and a comprehensive unit and integration test suite.',
        },
        {
          title: 'AI-native delivery',
          body: 'Using agents for implementation leverage while personally owning architecture, review, acceptance criteria, and final quality.',
        },
      ],
    },

    bridge: {
      marker: 'Backend to agent systems',
      title: 'Agents need more than prompts. They need systems engineering.',
      support:
        "None of that is new to me — it is the last twenty years of backend work, pointed at a new problem. I'm bringing transactions, idempotency, state machines, stability, and security boundaries into agent systems.",
      capabilities: [
        {
          title: 'Safe tool writes',
          body:
            'Applying transaction and idempotency guarantees to every agent tool write. Any state-changing action must pass typed input validation, domain rules, and transactional control.',
        },
        {
          title: 'Trustworthy memory',
          body:
            'Separating raw facts, soft judgments, and derived state, so the model never writes speculation as durable, untraceable fact.',
        },
        {
          title: 'Failure recovery',
          body:
            'Persistent outbox, watermarks, and projections let interruptions, retries, and cross-session state recover cleanly.',
        },
        {
          title: 'Security boundary',
          body:
            'Constraining what the model can see, what it can call, and what is allowed to execute or become durable state.',
        },
      ],
      ledgerLead: 'In real production systems at Alibaba, scale and stability are table stakes.',
      ledgerLabel: 'Core production-system outcomes',
      metrics: [
        {
          value: '1B+',
          label: 'Alibaba group-wide ACL, daily checks',
          note: '99.99% availability during peak sales',
        },
        {
          value: '1.2M',
          label: 'users / 400k organizations',
          note: 'government-grade directory service, built 0 to 1',
        },
        {
          value: '1200→80ms',
          label: 'directory node operation latency',
          note: 'architecture and algorithm co-optimization',
        },
        {
          value: '3.5%+',
          label: 'Taobao AI comparison, daily CTR',
          note: 'one of the two highest-CTR shopping-cart features',
        },
      ],
      close:
        "This work taught me to be accountable for scale, state, failure, and long-term maintenance. That's exactly what I care about most when building agent systems now.",
    },

    proof: {
      marker: 'Selected projects',
      title: 'From large-scale systems to shippable AI products.',
      lead:
        'Not a chronological résumé, but the projects that best prove agent, AI-product, and systems-architecture capability.',
      projects: [
        {
          key: 'littleStep',
          name: 'Little Step Learning Agent',
          role: 'Independent Product Developer · Product, Agent Architecture & End-to-End Delivery',
          problem: 'Autonomous teaching needs trustworthy state boundaries.',
          decision: 'The model proposes; the host validates and commits.',
          result: 'Tool calling · cross-session memory · 1392 unit & integration tests',
        },
        {
          key: 'aiComparison',
          name: 'Taobao Cart AI Comparison',
          role: 'Alibaba · Architecture & AI engineering',
          problem: 'Variable model output inside a high-traffic shopping cart.',
          decision: 'The SSE contract defines timeouts and graceful degradation.',
          result: '3.5%+ daily CTR · top-two shopping-cart feature',
        },
        {
          key: 'acl',
          name: 'Group ACL Permission Core',
          role: 'Alibaba · Permission-system architecture',
          problem: 'Billion-scale authorization under peak load.',
          decision: 'Decentralized degradation and tiered caches isolate the core path.',
          result: '1B+ daily · 99.99% availability at peak',
        },
      ],
      projectLabel: 'Selected project',
      problemLabel: 'Problem',
      decisionLabel: 'Decision',
      workflow: {
        marker: 'AI-native engineering',
        heading: 'How I organize AI to deliver a complex system.',
        quote: "AI expands what I can deliver. It doesn't take over my engineering responsibility.",
        body:
          'Little Step was delivered AI-native: agents produced much of the implementation and test scaffolding, while I defined the domain model, system boundaries, key interfaces, and acceptance criteria, then reviewed critical code and tests and owned the final quality.',
        label: 'AI-native development workflow',
        steps: [
          'Real problem & requirement boundary',
          'Architecture constraints & acceptance criteria',
          'Task breakdown & AI implementation',
          'Code review & risk identification',
          'Tests, evals & release gates',
          'A running, explainable product',
        ],
        decisionEyebrow: 'Key engineering decisions I made',
        choiceLabel: 'Choice',
        whyLabel: 'Why',
        decisions: [
          {
            question: 'Why can’t the model write “mastered” directly?',
            choice:
              'The model submits evidence and a proposed action; domain rules settle durable learning state.',
            why:
              'One correct answer is not mastery. Keeping evidence separate preserves traceability and makes later review possible.',
          },
          {
            question: 'Why are tool writes transactional and idempotent?',
            choice:
              'Typed input, domain validation, transactions, and idempotency keys guard every state-changing tool call.',
            why:
              'Timeouts and retries are normal in agent loops; they must not duplicate facts or leave state half-written.',
          },
          {
            question: 'Why must autonomous agent loops have boundaries?',
            choice:
              'Step limits, timeouts, cancellation, and recovery are explicit; the host controls termination.',
            why:
              'Models can retry endlessly or drift from the goal. Clear boundaries contain cost and make failures interruptible and recoverable.',
          },
          {
            question: 'Why can’t AI-generated code ship directly?',
            choice:
              'I review critical code and require unit tests, integration tests, and release gates before delivery.',
            why:
              'Running code is not necessarily correct. Turning risks into repeatable checks keeps quality from depending on one-off judgment.',
          },
        ],
      },
    },

    closing: {
      eyebrow: 'Open to opportunities',
      title: "I'm looking for the next thing worth investing in for the long term.",
      body:
        'Focus areas: AI agent engineering, AI application architecture, AI platforms. Available full-time, Hangzhou preferred, open to other cities.',
      contact: 'Contact me',
      resume: 'Résumé PDF (Chinese)',
    },
  },

  zh: {
    hero: {
      eyebrow: 'AI Agent 工程 · AI 应用架构 · AI 平台',
      title: [
        { text: '把 20 年', nowrap: true },
        { text: '后端架构经验，', nowrap: true },
        { text: '带进 ', nowrap: true },
        { text: 'AI Agent', emphasis: true, nowrap: true },
        { text: ' 的可靠工程。' },
      ],
      lead:
        '我是王普，拥有 20 年 Java 后端与分布式系统经验，在阿里巴巴工作 11 年，曾任技术专家。现在聚焦 AI Agent 工程、AI 应用架构与 AI 平台——把非确定性的模型能力，变成可验证、可恢复、可持续演进的产品系统。',
      actions: {
        resume: '下载简历 PDF',
        contact: '联系我',
      },
      status: '杭州 · 可全职到岗 · 其他城市可商议',
      proof: [
        { value: '11 年', label: '阿里巴巴 · 曾任技术专家' },
        { value: '10 亿+', label: '集团级 ACL 日均鉴权' },
        { value: '3.5%+', label: '淘宝 AI 功能日均点击率' },
      ],
    },

    year: {
      marker: '离开阿里之后的这一年',
      eyebrow: '这一年我在做什么',
      title: '离开阿里的这一年，我把一个真实的家庭问题，做成了两个产品。',
      story: [
        '2025 年离开阿里后，我把很大一部分时间用来陪孩子学习。习惯坚持不下来，同一类错题隔一周又错一次——这些具体而琐碎的问题，比任何行业报告都更适合作为起点。',
        '这一年因此有了两个产出：一个是我独立完成产品定义、界面设计、开发与上架的习惯养成 App「小步打卡」；另一个是从错题复习出发、投入了这一年大半时间的学习 Agent 系统 Little Step Learning Agent。',
      ],
      link: '为什么我停下来这一年',
      shipped: {
        eyebrow: '产出之一 · 已上架',
        store: 'App Store · 教育',
        title: '小步打卡',
        subtitle: '中小学生习惯养成',
        body:
          '面向 6–15 岁孩子的习惯养成 App：每日打卡、用积分兑换家长设定的奖励、记录连续天数，并用护盾机制让偶尔漏打不至于清零。产品定义、界面设计、Swift 开发到 App Store 上架，都由我自己完成。',
        facts: [
          { label: '平台', value: 'iOS 17.6+ · Swift · SwiftUI' },
          { label: '隐私', value: '不联网 · 不收集数据 · 无广告 · 无第三方 SDK' },
        ],
        cta: '在 App Store 查看',
        galleryLabel: '小步打卡界面截图',
      },
      handoff:
        '另一个产出，才是这一年真正投入的地方。当问题从「能不能坚持」变成「同一道题为什么反复错」，一个打卡 App 就不再是合适的工具了。',
    },

    flagship: {
      marker: 'Agent 案例',
      problemEyebrow: '我看到的问题',
      problemTitle: '孩子缺的，不是更多答案，而是能记住、跟进、验证学习的系统。',
      problemBody:
        '一道题答完以后，什么时候复习、哪些证据代表进步、是否真正掌握、下一步该教什么，都依赖跨天、跨会话的状态。普通对话式 AI 可以给出答案，却很难对这个过程长期负责。',
      product: {
        label: 'Little Step Learning Agent',
        kind: '实际产品界面',
        title: '小步学习 Agent · 今日学习工作台',
        description:
          '它把错题、学习证据、今日任务和复习计划连成一个闭环：Agent 选择教学动作并调用工具，宿主系统负责校验并提交长期状态。',
        alt: '小步学习 Agent 今日学习工作台',
        zoomLabel: '查看小步学习 Agent 今日学习工作台大图',
        closeLabel: '关闭大图',
        chips: [
          { text: '1392 项测试', agent: true },
          { text: '源码可见' },
          { text: '本地优先' },
          { text: '工具调用' },
        ],
      },
      principleEyebrow: '核心设计选择',
      title: [
        { text: '模型负责决定怎么教，系统负责决定' },
        { text: '什么可以成为事实。', emphasis: true },
      ],
      lead:
        'Little Step 是一个由错题驱动、本地优先、支持工具调用和跨会话记忆的学习 Agent。它允许模型自主选择教学动作，但将事实写入、状态转换和恢复机制控制在宿主系统中。',
      mediaAlt: 'Little Step 学习对话界面：题目、原题图与此刻会话状态（合成学习数据）',
      mediaCaption: '真实会话截图 · 合成学习数据',
      name: 'Little Step Learning Agent',
      heading: '让非确定性的教学选择，运行在可追踪、可恢复的系统中。',
      body:
        'Agent 可以讲解、追问和调用工具，但不能绕过参数校验、任意写入数据库，也不能把一次回答正确直接宣布为“已经掌握”。',
      repoCta: '在 GitHub 查看源码',
      definitions: [
        { label: 'Agent 循环', value: '步数 · 超时 · 取消' },
        { label: '工具写入', value: '类型校验 · 事务保护 · 幂等执行' },
        { label: '长期状态', value: '事实 · 暂定判断 · 投影' },
        { label: '工程验证', value: '1392 项单元与集成测试' },
      ],
      capabilitiesEyebrow: '这个项目体现的能力',
      capabilities: [
        {
          title: '产品问题定义',
          body: '把真实的学习问题转化为产品边界、领域模型和可以持续运转的学习闭环。',
        },
        {
          title: 'Agent 系统架构',
          body: '设计 Agent 循环、工具调用、跨会话记忆，以及模型判断与系统事实之间的边界。',
        },
        {
          title: '可靠工程',
          body: '用参数校验、事务、幂等、恢复机制和完整的单元与集成测试体系，保护每一次状态变化。',
        },
        {
          title: 'AI-native 交付',
          body: '让 Agent 放大实现效率，同时亲自负责架构、审查、验收标准和最终质量。',
        },
      ],
    },

    bridge: {
      marker: '从后端架构到 Agent 系统',
      title: 'Agent 需要的不只是 Prompt，也需要系统工程。',
      support:
        '上面这套约束对我并不新鲜，它就是过去二十年的后端工作，只是换了一个对象：我不是在离开后端工程，而是在把事务、幂等、状态机、稳定性和安全边界带入 Agent 系统。',
      capabilities: [
        {
          title: '安全的工具写入',
          body: '把事务与幂等保障应用到 Agent 的每一次工具写入。任何会改变状态的操作，都必须经过参数类型校验、业务规则与事务控制。',
        },
        {
          title: '可信记忆',
          body: '区分原始事实、软判断和派生状态，避免模型把推测写成不可追溯的长期事实。',
        },
        {
          title: '失败恢复',
          body: '通过持久化 outbox、水位和投影机制，让中断、重试和跨会话状态可以恢复。',
        },
        {
          title: '安全边界',
          body: '限制模型可以看到什么、调用什么，以及哪些内容可以被执行或成为持久状态。',
        },
      ],
      ledgerLead: '在阿里巴巴的真实生产系统里，规模和稳定性是基本功。',
      ledgerLabel: '生产系统核心成果',
      metrics: [
        {
          value: '10 亿+',
          label: '阿里集团级 ACL 日均鉴权',
          note: '大促期间 99.99% 可用性',
        },
        {
          value: '120 万',
          label: '用户 / 40 万组织',
          note: '从 0 到 1 构建政务级目录服务',
        },
        {
          value: '1200→80ms',
          label: '目录节点操作耗时',
          note: '架构与算法协同优化',
        },
        {
          value: '3.5%+',
          label: '淘宝 AI 商品对比日均点击率',
          note: '进入购物车 Top 2 场景',
        },
      ],
      close:
        '这些经历让我习惯于对规模、状态、失败和长期维护负责，这也是我现在构建 Agent 系统时最看重的部分。',
    },

    proof: {
      marker: '代表项目',
      title: '从大规模系统，到可落地的 AI 产品。',
      lead: '不是按年份罗列所有经历，而是选择最能证明 Agent、AI 产品和系统架构能力的项目。',
      projects: [
        {
          key: 'littleStep',
          name: 'Little Step Learning Agent',
          role: '独立产品开发者 · 从产品定义到 Agent 架构与工程交付',
          problem: '让自主教学运行在可信的事实与状态边界内。',
          decision: '模型提出动作，宿主系统校验并提交持久状态。',
          result: '工具调用 · 跨会话记忆 · 1392 项单元与集成测试',
        },
        {
          key: 'aiComparison',
          name: '淘宝购物车 AI 商品对比',
          role: '阿里巴巴 · 架构设计与 AI 工程',
          problem: '把不稳定的模型输出接入高流量购物车链路。',
          decision: '定义 SSE 流式协议、超时行为与降级边界。',
          result: '日均点击率 3.5%+ · 购物车 Top 2 功能',
        },
        {
          key: 'acl',
          name: '集团 ACL 权限中枢',
          role: '阿里巴巴 · 权限系统架构',
          problem: '在十亿级日均鉴权下保持峰值可用。',
          decision: '用去中心化降级与多级缓存隔离核心链路。',
          result: '日均 10 亿+ · 大促 99.99% 可用性',
        },
      ],
      projectLabel: '代表项目',
      problemLabel: '核心问题',
      decisionLabel: '关键决策',
      workflow: {
        marker: 'AI-native 工程方法',
        heading: '我如何组织 AI 完成一个复杂系统。',
        quote: 'AI 扩大我的交付能力，但不替我承担工程责任。',
        body:
          'Little Step 采用 AI-native 方式交付：AI Agent 承担大量实现与测试脚手架生成；我亲自定义领域模型、系统边界、关键接口与验收标准，逐项审查关键代码和测试，并对最终质量负责。',
        label: 'AI-native 开发流程',
        steps: [
          '真实问题与需求边界',
          '架构约束与验收标准',
          '任务拆解与 AI 实现',
          '代码审查与风险识别',
          '测试、评测与发布门禁',
          '可运行、可解释的产品',
        ],
        decisionEyebrow: '我做的关键工程决策',
        choiceLabel: '选择',
        whyLabel: '原因',
        decisions: [
          {
            question: '为什么模型不能直接写入“已经掌握”？',
            choice: '模型只提交学习证据与动作建议，由领域规则结算持久状态。',
            why: '一次回答正确不等于已经掌握。证据与结论分离，才能追溯、复查和重新判断。',
          },
          {
            question: '为什么工具写入必须具备事务与幂等？',
            choice: '所有写操作都经过类型校验、领域规则、事务和幂等键控制。',
            why: '超时和重试是 Agent 循环的常态，不能因此重复写入事实或留下半完成状态。',
          },
          {
            question: '为什么 Agent 的自主循环必须有边界？',
            choice: '设置步数、超时、取消和恢复机制，由系统控制结束条件。',
            why: '模型可能重复尝试或偏离目标；明确边界才能限制成本，并让失败可中断、可恢复。',
          },
          {
            question: '为什么 AI 生成的代码不能直接发布？',
            choice: '关键代码由我审查，通过单元测试、集成测试和发布门禁后才能交付。',
            why: '能够运行不代表行为正确；把风险变成可重复验证的标准，质量才不会依赖一次性的人工判断。',
          },
        ],
      },
    },

    closing: {
      eyebrow: '开放机会',
      title: '我在找下一件值得长期投入的事。',
      body: '目标方向：AI Agent 工程、AI 应用架构、AI 平台。可全职到岗，工作地点优先杭州，其他城市可以商议。',
      contact: '联系我',
      resume: '下载简历 PDF',
    },
  },
}
