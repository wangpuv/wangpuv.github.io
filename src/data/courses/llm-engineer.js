// ───────────────────────────────────────────────────────────
// 从调用模型到构建 Agent：LLM 工程实战 — the hand-written half.
//
// Same split as the Claude Code course: `npm run course` generates the
// Chinese lesson bodies into src/content/course/llm-engineer/, and
// everything here is written by hand. The lessons not written yet come
// from the appendix of the 发刊词 and are listed as planned.
//
// The build script's `include` list decides what actually ships, so
// half-written lessons sitting in the same Obsidian folder stay off
// the site until they are named there.
//
// Publishing a lesson is three edits: name its stem in that `include` list,
// add its English shell to `english` below, and delete its row from
// `upcoming` — otherwise it appears twice, once as a link and once as a
// greyed row promising the same lesson.
// ───────────────────────────────────────────────────────────

export default {
  slug: 'llm-engineer',
  total: 22,
  ink: 'highlight',
  // Published here first and not carried on the WeChat account, so no QR on
  // this course's pages.
  wechat: false,

  en: {
    title: 'From calling a model to building an agent',
    tagline: 'LLM engineering, in practice',
    lead: '22 lessons that turn my own LLM notes into a working local agent: Ollama for the models, Python for the tool loop, and no cloud API credit to buy. You write the calling and the tool execution yourself, so you can see what the framework would have hidden.',
    why: 'The starting point is a real learning record, not a tidied-up set of right answers. I thought I was comparing sampling parameters, for instance, when the parameter never reached the request at all, so the comparison proved nothing. Mistakes like that are taught as they happened, along with the experiments and the fixes.',
    cadence: 'published by stage, after the code is verified',
    follow: 'This course is published here first, not on WeChat.',
  },
  zh: {
    title: '从调用模型到构建 Agent',
    tagline: 'LLM 工程实战',
    lead: '22 课，把我自己的 LLM 学习笔记整理成一个能跑起来的本地 Agent：全程用 Ollama 跑本地模型，用 Python 亲手写出调用与工具执行的过程，无需购买云模型 API 额度。',
    why: '这套教程的起点是真实的学习记录，不是事后整理出来的正确答案。比如我以为在比较生成参数，其实参数根本没传进去，那次对比等于没做。这样的错误会连同实验和修改过程一起原样讲清楚。',
    cadence: '按阶段更新，验证后发布',
    follow: '这套教程首发于本站，未在公众号连载。',
  },

  // Four stages, taken from the 发刊词. Lesson 0 (发刊词) sits above them.
  stages: [
    {
      key: 'calling',
      from: 1,
      to: 5,
      en: { label: 'Stage one', title: 'Calling the model, executing the tools', note: 'From tokens, parameters and waiting time to structured output and tool calls. Lesson 5 joins them into a tool loop with an execution limit; it cannot search anything yet.' },
      zh: { label: '第一阶段', title: '模型调用与工具执行', note: '从 Token、参数和等待时间开始，学习结构化输出、工具调用和消息组织。第 5 课把这些模块接成有执行上限的工具循环，这个版本还不会检索资料。' },
    },
    {
      key: 'retrieval',
      from: 6,
      to: 9,
      en: { label: 'Stage two', title: 'Answering from local material', note: 'Text vectors, document chunking and hybrid retrieval. Lesson 9 wires retrieval in as a tool, so answers trace back to a passage and say so when the material runs out.' },
      zh: { label: '第二阶段', title: '根据本地资料回答', note: '学习文本向量、文档切分和混合检索。第 9 课把检索接成 Agent 的工具，回答可以追溯到文段，资料不足时需要说明原因。' },
    },
    {
      key: 'multistep',
      from: 10,
      to: 13,
      en: { label: 'Stage three', title: 'Multi-step tasks, memory, failure', note: 'Deciding as you go versus planning first, recording task state, keeping what matters, handling timeouts and retries. Lesson 13 is the core agent’s checkpoint.' },
      zh: { label: '第三阶段', title: '多步任务、记忆与失败处理', note: '比较边执行边决定与先计划后执行，记录任务状态，保存需要的信息，并处理超时与重试。第 13 课是核心 Agent 的阶段验收。' },
    },
    {
      key: 'delivery',
      from: 14,
      to: 22,
      en: { label: 'Stage four', title: 'Turning the agent into something others can run', note: 'Model choice, logging, caching, long context, an HTTP interface and evaluation. Lesson 22 checks quality, failure handling, usage and latency on a full set of tasks.' },
      zh: { label: '第四阶段', title: '把 Agent 做成可供他人使用的应用', note: '沿用笔记中的模型选择、日志、缓存、长上下文、服务化和评测经验，为同一个 Agent 增加接口与启动配置。第 22 课用完整任务核对质量、失败处理、用量和耗时。' },
    },
  ],

  // The lessons still to come, taken from the appendix of the 发刊词. They
  // appear as greyed, inert rows so the arc of the course is visible without
  // pretending anything is published; a lesson moves out of this list when it
  // ships.
  upcoming: [
    {
      number: 2,
      en: { topic: 'Data the program actually validates', kicker: 'Fields, types and ranges, with a capped repair loop' },
      zh: { topic: '让模型返回的数据，真正通过程序校验', kicker: '检查字段、类型与取值，限制修复次数，区分格式正确和事实正确' },
    },
    {
      number: 3,
      en: { topic: 'Executing the tool call the model proposes', kicker: 'A registry hands the function and arguments to Python' },
      zh: { topic: '模型提出工具调用后，程序怎样执行？', kicker: '用工具注册表把函数与参数交给 Python 执行，再把结果送回模型' },
    },
    {
      number: 4,
      en: { topic: 'Organising instructions, input and tool results', kicker: 'Each part of the prompt gets its own place' },
      zh: { topic: '怎样组织任务要求、用户输入和工具结果？', kicker: '让任务要求、待处理材料和工具返回值各有清楚的位置' },
    },
    {
      number: 5,
      en: { topic: 'The smallest agent that works', kicker: 'Calling, prompting, executing and validating in one capped loop' },
      zh: { topic: '把模型调用和工具执行接起来，做出最小 Agent', kicker: '沿用笔记中的小型 SDK，接成一个有次数上限的循环' },
    },
    {
      number: 6,
      en: { topic: 'Turning text into vectors to find material', kicker: 'Starting from a small cosine-similarity example' },
      zh: { topic: '把文本变成向量，怎样找到相关资料？', kicker: '从余弦相似度的小例子出发，理解文本向量如何用于检索' },
    },
    {
      number: 7,
      en: { topic: 'Chunking without cutting the answer in half', kicker: 'Fixed size, by sentence, recursive: what each loses' },
      zh: { topic: '长文档怎样切分，才不把答案切丢？', kicker: '比较固定大小、按句子和递归切分，观察段落大小与重叠范围的影响' },
    },
    {
      number: 8,
      en: { topic: 'Vectors plus keywords: is it really better?', kicker: 'A fixed question set decides, and the answer was no' },
      zh: { topic: '向量检索加关键词，真的更好吗？', kicker: '把关键词与向量分数按文档对齐，用固定问题检查是否真有改善' },
    },
    {
      number: 9,
      en: { topic: 'Retrieval as a tool the agent calls', kicker: 'Answers carry their source, or say the material is missing' },
      zh: { topic: '把检索接成工具，让 Agent 根据资料回答', kicker: '让回答附带来源，资料不足时明确说明' },
    },
    {
      number: 10,
      en: { topic: 'Plan first or decide as you go?', kicker: 'ReAct against plan-then-execute on the same task' },
      zh: { topic: '先列计划还是边做边决定，Agent 怎样完成多步任务？', kicker: '把两种方式放在同一任务上比较，观察工具结果如何影响下一步' },
    },
    {
      number: 11,
      en: { topic: 'How far did it get, and when should it stop?', kicker: 'A state machine for running, done, failed, out of turns' },
      zh: { topic: 'Agent 做到了哪一步，什么时候应该停止？', kicker: '用状态机区分执行中、完成、失败与次数耗尽，保存每一步的结果' },
    },
    {
      number: 12,
      en: { topic: 'Saving what the task learned, fetching it back', kicker: 'Short-term notes, running summaries, long-term memory' },
      zh: { topic: '任务中的信息怎样保存，下次又怎样取回？', kicker: '理解短期记录、历史摘要和长期记忆的分工' },
    },
    {
      number: 13,
      en: { topic: 'Retry, recover, or end the run', kicker: 'The core agent’s checkpoint: search, tools, citations, a clean stop' },
      zh: { topic: 'Agent 执行失败后，怎样重试、恢复或结束？', kicker: '核心 Agent 的阶段验收：查资料、用工具、引用回答，也能失败收场' },
    },
    {
      number: 14,
      en: { topic: 'Choosing a local model and capping usage', kicker: 'The routing trade-off, and a budget per task' },
      zh: { topic: '怎样为 Agent 选择本地模型，并限制任务用量？', kicker: '理解模型路由的取舍，记录 Token、调用次数和耗时' },
    },
    {
      number: 15,
      en: { topic: 'Finding the cause in the log', kicker: 'Following one run to the step where it broke' },
      zh: { topic: 'Agent 卡住或失败了，怎样从日志找到原因？', kicker: '沿着同一次任务的模型与工具调用记录，定位失败发生在哪一步' },
    },
    {
      number: 16,
      en: { topic: 'What can be cached, what must be recomputed', kicker: 'Version changes, and near-miss hits on similar questions' },
      zh: { topic: '哪些结果可以缓存，什么时候必须重新执行？', kicker: '嵌入、检索和回答缓存的区别，以及相似问题误命中的情况' },
    },
    {
      number: 17,
      en: { topic: 'Keeping the key facts as the record grows', kicker: 'When to compress, how far, and what the summary dropped' },
      zh: { topic: '任务记录越来越长，怎样保留关键事实？', kicker: '何时压缩历史、一次压到什么程度，以及摘要和截断丢掉了哪些事实' },
    },
    {
      number: 18,
      en: { topic: 'An interface that returns progress and result', kicker: 'FastAPI in front of the same agent' },
      zh: { topic: '给 Agent 加上接口，返回执行进度和最终结果', kicker: '用 FastAPI 调用同一个 Agent，把进度、回答或错误返回给调用者' },
    },
    {
      number: 19,
      en: { topic: 'Config and startup, so others can run it', kicker: 'Dependencies, model address, data paths, Docker as an option' },
      zh: { topic: '怎样配置和启动，让别人也能运行这个 Agent？', kicker: '整理依赖、模型地址和资料路径，并说明 Docker 路线的适用条件' },
    },
    {
      number: 20,
      en: { topic: 'Queueing when several tasks arrive at once', kicker: 'A small concurrency experiment on a local model' },
      zh: { topic: '多个任务同时提交，Agent 怎样排队和处理？', kicker: '用小规模并发实验观察等待时间、任务隔离和本地模型的处理能力' },
    },
    {
      number: 21,
      en: { topic: 'Who may call it, and what it may touch', kicker: 'Rate, size and tool limits, and instructions hidden in the material' },
      zh: { topic: '谁能调用 Agent，它可以使用哪些工具和资料？', kicker: '限制访问频率、输入大小和工具权限，检查外部资料中的指令是否干扰执行' },
    },
    {
      number: 22,
      en: { topic: 'A full task set before delivery', kicker: 'Running and scoring stay separate' },
      zh: { topic: '交付前，用一组完整任务检查 Agent 是否合格', kicker: '保留运行与打分分离的设计，核对完成、计算、引用、失败处理与用量' },
    },
  ],

  appendix: null,

  english: {
    '00-preface': {
      topic: 'Introduction',
      kicker: '22 lessons, from calling a model to building an agent',
      description:
        'Starting from real learning notes, writing a local agent by hand in Python. 22 lessons covering model calls, tools, retrieval, multi-step execution and delivery, with no cloud API credit required.',
    },
    '00-environment': {
      topic: 'Environment setup',
      kicker: 'Getting Python to receive the first answer from a local model',
      description:
        'Install Ollama and set up the Python environment, run a local model, and verify the returned data with a small experiment. This is the preparation lesson before the 22 core lessons.',
    },
    '01-token-and-inference': {
      topic: 'Checking parameters, usage and waiting time',
      kicker: 'What one request actually sent, and how long it took',
      description:
        'Starting from a run where the parameter never reached the request: read the request that actually went out, take the token counts the service reports rather than counting characters, and time streaming against non-streaming for first text and for the whole answer.',
    },
  },
}
