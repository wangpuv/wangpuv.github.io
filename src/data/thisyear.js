export const thisyear = {
  zh: {
    eyebrow: '写在空档期之后',
    title: '这一年',
    sections: [
      {
        paragraphs: [
          '2025 年，在阿里巴巴工作了十一年之后，我主动离职了。孩子从小学升入初中，遇到了严重的心理困难。我判断那是一个需要父亲在场的时刻，于是选择了停下来，用一整年的时间陪他度过那段最艰难的时期。',
          '他现在已经走出来了。',
        ],
      },
      {
        paragraphs: [
          '这一年大部分时间给了家庭。在那些琐碎的日子里，我经历了一些意料之外的变化：我开始学会真正倾听，而不是急着给出解决方案；开始站在对方的角度去理解一件事情，而不是先下判断。做了十几年技术的人，容易相信所有问题都可以用架构解决——但人不是系统。陪伴一个正在挣扎的孩子，你没有架构可以依赖，只能在场、等待，反复地做同样的事情，直到他自己找到力量。',
        ],
      },
      {
        paragraphs: [
          '但这一年我也没有停下来。',
          '陪孩子学习的过程中，我碰到了一个真实的问题：AI 可以讲解一道错题，但它做不到持续跟进。什么时候该复习、掌握到了什么程度、下一步该教什么——这些需要跨天、跨会话的记忆、证据和判断。对话式 AI 能给答案，但不对这个过程负责。',
          '这个问题让我开始认真思考：AI Agent 在一个真实的产品里、面对真实的用户时，到底该怎么做？怎么把不确定的模型能力变成可靠的产品行为？',
          '我先独立设计并上架了离线优先的习惯产品「小步打卡」，完成了从产品定义到 App Store 上架的完整闭环。然后从错题复习问题出发，主导构建了 Little Step Learning Agent——一个完整的学习 Agent 系统：工具调用、跨会话可信记忆、有界副作用，由宿主系统保证模型行为可验证、可恢复。整个系统有 1392 项单元与集成测试。',
          '我在这个项目中做的核心判断是：模型可以自由选择教学动作，但什么可以成为持久事实、什么时候状态可以转换、失败后如何恢复——这些必须由系统控制，不能交给模型。这和我过去二十年做分布式系统、高并发交易和权限体系时的工程直觉是一致的：事务、幂等、状态管理、容灾降级、安全边界。',
          '这不是一个 demo。它是一个从真实问题出发、经过完整工程验证的产品，也是我把二十年系统工程经验带进 AI Agent 领域的证明。',
        ],
      },
      {
        paragraphs: [
          '这一年让我找到了清晰的长期方向：AI Agent 工程、AI 应用架构、AI 平台。不是因为这是热门方向，而是因为我在实践中确认了——Agent 系统最缺的不是模型能力，而是我最擅长的那类工程能力。',
          '我带着二十年的系统工程深度、一个完整的 Agent 产品交付，和这一年沉淀下来的耐心与判断力，准备好了。',
        ],
      },
    ],
    closing:
      '如果你正在看我的简历，注意到了那一年的空白——那一年，我选择了家人，我不后悔。而那一年给我的，不只是技术上的新方向，还有作为一个人的成长。',
    backLabel: '返回首页',
  },

  en: {
    eyebrow: 'After the gap',
    title: 'This Year',
    sections: [
      {
        paragraphs: [
          "In 2025, after eleven years at Alibaba, I resigned. My child was moving from primary school to middle school and hit a serious psychological wall. I judged it was a moment that needed a father present, so I stepped away and spent a full year helping him through the hardest stretch.",
          "He came through it. He's back on track now.",
        ],
      },
      {
        paragraphs: [
          "Most of this year went to family. In those ordinary days, something shifted in me that I didn't expect: I learned to genuinely listen instead of rushing to provide solutions; to understand a situation from someone else's position before making judgments. After more than a decade in technology, you start to believe every problem can be solved with architecture — but people are not systems. Accompanying a child through a difficult period, there is no architecture to rely on. You can only be present, wait, and patiently do the same things over and over until they find their own strength.",
        ],
      },
      {
        paragraphs: [
          "But I didn't stop building.",
          "While helping my child study, I ran into a real problem: AI can explain a wrong answer, but it cannot follow through. When to review, how far mastery has progressed, what to teach next — these require memory, evidence, and judgment that persist across days and sessions. Conversational AI gives answers; it does not own the process.",
          "That problem pulled me into a serious question: how should an AI agent actually work inside a real product, facing real users? How do you turn non-deterministic model capability into reliable product behavior?",
          "I started by independently designing and shipping LittleSteps, an offline-first habit app — a complete cycle from product definition to App Store release. Then, starting from the wrong-answer review problem, I led the build of Little Step Learning Agent: a full learning-agent system with tool calling, cross-session trustworthy memory, bounded side effects, and a host system that keeps model behavior verifiable and recoverable. The system carries 1,392 unit and integration tests.",
          "The core design judgment I made: the model is free to choose teaching actions, but what may become durable fact, when state may transition, and how to recover from failure — those must stay under system control, never handed to the model. This is the same engineering instinct I built over twenty years of distributed systems, high-concurrency transactions, and permission architectures: transactions, idempotency, state management, failure recovery, security boundaries.",
          "This is not a demo. It is a product born from a real problem, verified through complete engineering, and proof that twenty years of systems depth translates directly into AI agent architecture.",
        ],
      },
      {
        paragraphs: [
          "This year gave me a clear long-term direction: AI agent engineering, AI application architecture, AI platforms. Not because they are popular, but because practice confirmed what agent systems lack most is exactly the kind of engineering I do best.",
          "I am coming back with twenty years of systems engineering depth, a fully delivered agent product, and the patience and judgment this year left me with. I'm ready.",
        ],
      },
    ],
    closing:
      "If you are reading my résumé and noticed the one-year gap — that year, I chose my family. I do not regret it. And what it gave me was not only a new technical direction, but growth as a person.",
    backLabel: 'Back to home',
  },
}
