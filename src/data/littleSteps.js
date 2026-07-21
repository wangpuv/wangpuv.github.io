export const littleStepsCase = {
  shared: {
    repositoryPrivate: true,
    diagrams: {
      flow: '/diagrams/little-steps/learning-loop.svg',
      architecture: '/diagrams/little-steps/architecture.svg',
    },
  },
  zh: {
    meta: { eyebrow: '项目案例 · AI Agent 应用工程', title: '小步学习伙伴', subtitle: '错题驱动的本地 AI 学习伙伴', status: 'M3 开发中', updated: '截至 2026 年 6 月' },
    intro: '这不是一个回答作业问题的普通 Chatbot，而是一套能诊断错因、调用工具、维护学习状态、持续写回并在下一次会话续上的 Agent 产品。当前 v1-alpha 服务真实家庭学习场景。',
    facts: [['目标用户', '当前聚焦 13 岁初一学生'], ['验证学科', '科学 + 英语，同一套通用闭环'], ['运行方式', '本地 Python / FastAPI Web App'], ['当前阶段', 'M1、M2 已验收；M3 进行中']],
    problem: {
      title: '用户问题',
      body: '孩子做错题后，传统订正通常止于抄写正确答案。真正的认知偏差没有被确认，复习计划也不会自动吸收这次学习证据。到了下一次学习，会话又从零开始。',
      points: ['答案改对了，但错因没有被识别', '题目、诊断、讲解、重测与计划相互割裂', '家长缺少可核对、可纠正的 AI 边界', '一次对话结束后，系统无法可靠续上'],
    },
    solution: {
      title: '产品解决方案',
      body: '以真实错题为入口，用一个通用 Agent 内核完成“假设错因 → 追问确认 → 自主讲解 → 理解检查 → 分层写回 → 后续重测”。科目和题型是上下文，不是写死的流程分支。',
      stages: [['录入', '手动录题或截图识别，家长可逐字段订正'], ['诊断', 'Agent 提出错因假设，通过对话确认或推翻'], ['学习', '根据上下文选择讲法、工具和交互可视化'], ['续学', '事实、画像、计划和历史写回，下次主动恢复']],
    },
    whyAgent: {
      title: '为什么需要 Agent，而不是普通 Chatbot',
      body: '错因诊断不是固定问答流程：同一道题会因孩子回答不同而走向不同追问、讲解和工具。Agent 负责在上下文中自主决策；系统层只强制数据、安全、超时和写回等不可跳过的边界。',
      comparisons: [['普通 Chatbot', '生成一段回答', '上下文随对话结束', '无法保证事实写入', '失败后通常重新问'], ['小步学习伙伴', '自主调用受控工具', '跨会话维护分层状态', '编排层强制写回与重放', '显式错误、重试与恢复']],
    },
    architecture: { title: '技术架构', body: '采用本地单进程架构控制复杂度，但在模型 I/O、Agent 循环、工具、数据持久化和生成内容执行面之间保持明确边界。' },
    state: {
      title: '数据与 Agent 状态设计',
      body: '不同生命周期的数据不混成一个“记忆库”。SQLite 保存事实和历史，JSON 保存人可读的画像与计划，运行时状态只承载当前会话的临时意图。',
      layers: [['SQLite 事实层', '错题、诊断状态、标签关系、turn、outbox、附件元数据和历史'], ['profile.json', '稳定事实、近期观察、薄弱点、有效教法、待确认假设和成绩记录'], ['plan_{subject}.json', '系统推荐、家长覆盖、执行记录三层合并'], ['SessionRuntimeState', '当前题目、待激活题目、工具幂等回执、待交付 artifact']],
    },
    tools: {
      title: '工具调用与结构化输出',
      body: '教学模型通过统一 LLMClient 流式输出并发起工具调用。每次调用带 call_id，参数由 Pydantic 校验，结果以同一调用上下文返回模型；写回使用独立结构化输出路径。',
      names: ['record_diagnosis', 'find_wrong_questions', 'activate_question', 'record_retest', 'get_plan', 'update_plan', 'search_history', 'request_interactive'],
    },
    safety: {
      title: '家长确认与 AI 安全边界',
      items: [['答案门禁', 'AI 提议的答案只存在于瞬态表单，家长确认前不能进入事实库。'], ['错因门禁', 'hypothesis 不进入薄弱点；只有 confirmed 诊断才能影响画像和计划。'], ['最小上下文', '交互页生成器不读取孩子作答、evidence、画像或历史，只接收当前题最小教学信息。'], ['生成代码隔离', '模型生成 HTML 被视为不可信代码，只能在 CSP-first、sandbox=allow-scripts 的 iframe 中运行。']],
    },
    reliability: {
      title: '测试、监控与失败恢复',
      body: '项目把确定性边界交给单元测试，把模型教学质量交给 eval 和真实会话验收。M3 C2 阶段全量 780 项单测通过，并完成 ruff、mypy、桌面与窄屏浏览器实测。',
      items: [['一致性', 'turn outbox、按顺序投影、幂等重放和 CAS 写画像'], ['文件安全', '原子写、路径约束、附件类型与大小校验、孤儿清理'], ['运行保护', 'per-kid 会话锁、max_steps、turn deadline、稳定错误结构'], ['产物恢复', 'pending / ready / failed 生命周期、generation_id fencing、受控 retry'], ['观测', '模型、tokens、时延和错误写入结构化日志；当前个人 demo 不设置硬成本预算']],
    },
    progress: {
      title: '当前开发进度',
      columns: [
        { status: '已实现', items: ['M1 错题诊断、讲解、理解检查、分层写回与重开续学', 'M2 多题真实测试、分科计划、重做重测、历史检索', 'M3 交互页生成与沙箱交付', '截图识题、无答案补录、带图题附件', '错题、画像、计划、历史只读查询层'] },
        { status: '开发中', items: ['知识点标签与能力维度筛选', '从错题本调出一组题进入真实重练闭环', 'M3 最终真实使用验收'] },
        { status: '规划中', items: ['可选 Today 页面', '设计稿逐屏收敛与真实产品截图', '演示视频或动态图', '更完整的多孩子体验不在当前 v1-alpha 范围'] },
      ],
    },
    next: { title: '下一阶段计划', items: ['完成标签筛选与重练入口', '用真实错题完成 M3 四项验收', '继续用真实使用反馈修正工具和上下文，而不是堆叠 Prompt 规则', '逐步替换设计原型为真实实现截图并录制演示'] },
    demo: { title: '演示与产品截图', body: '交互设计原型已经覆盖选人、学习、错题本、计划和画像等页面，但其中包含超出当前实现范围的状态和数字。本页暂不把设计稿当成成品截图；真实界面逐屏完成后再补充视频与动态图。', todo: 'TODO：真实产品截图、演示视频 / GIF' },
    contribution: {
      title: '我的具体贡献',
      body: '这是我独立定义和推进的真实产品。我负责需求范围、PRD、架构与数据模型、Agent 工具与编排、后端和前端实现、测试门禁、代码评审收敛与产品验证。开发过程中使用 Codex 和 Claude Code 协作，但产品决策、边界取舍和最终验收由我负责。',
    },
    cta: { back: '返回首页', work: '查看其他工程案例', contact: '联系我', demo: '演示待补充' },
  },
  en: {
    meta: { eyebrow: 'Case study · AI Agent application engineering', title: 'Little Step Learning Partner', subtitle: 'A local, wrong-question-driven AI learning partner', status: 'M3 in development', updated: 'As of June 2026' },
    intro: 'This is not a homework-answering chatbot. It diagnoses misconceptions, calls tools, maintains learning state, writes structured evidence back, and resumes that context in later sessions.',
    facts: [['Target user', 'Currently focused on a 13-year-old middle-school learner'], ['Validation subjects', 'Science + English through one shared loop'], ['Runtime', 'Local Python / FastAPI web app'], ['Stage', 'M1 and M2 accepted; M3 in progress']],
    problem: { title: 'User problem', body: 'Traditional correction often stops at copying the right answer. The misconception is not confirmed, plans do not absorb the evidence, and the next session starts from zero.', points: ['The answer changes but the misconception remains', 'Questions, diagnosis, teaching, retest, and planning are disconnected', 'Parents need reviewable AI boundaries', 'One-off conversations cannot reliably resume'] },
    solution: { title: 'Product solution', body: 'A real wrong question enters one reusable Agent loop: hypothesize, confirm, teach, verify, write back, and retest. Subject and question type are context, not hard-coded control flow.', stages: [['Capture', 'Manual entry or screenshot recognition with field-level correction'], ['Diagnose', 'The Agent proposes and revises a misconception hypothesis'], ['Learn', 'It chooses teaching approaches, tools, and optional visualization'], ['Resume', 'Facts, profile, plan, and history support the next session']] },
    whyAgent: { title: 'Why an Agent instead of a chatbot', body: 'Diagnosis cannot be reduced to a fixed script. Different learner responses require different questions, explanations, and tools. The Agent chooses the teaching path; the system enforces data, safety, timeout, and write-back boundaries.', comparisons: [['Typical chatbot', 'Generates an answer', 'Context ends with the chat', 'No guaranteed fact write', 'Failure usually restarts'], ['Little Step', 'Calls controlled tools', 'Maintains layered state', 'Mandatory write-back and replay', 'Explicit errors and recovery']] },
    architecture: { title: 'Technical architecture', body: 'A local single-process architecture keeps deployment small while maintaining clear boundaries between model I/O, the Agent loop, tools, persistence, and generated-content execution.' },
    state: { title: 'Data and Agent state', body: 'Data with different lifetimes is not collapsed into one memory store.', layers: [['SQLite facts', 'Questions, diagnosis, tags, turns, outbox, attachments, and history'], ['profile.json', 'Stable facts, observations, weak points, teaching hints, hypotheses, and exams'], ['plan_{subject}.json', 'Recommendations, parent overrides, and execution records'], ['SessionRuntimeState', 'Active question, staged activation, idempotent tool receipts, and artifacts']] },
    tools: { title: 'Tool use and structured output', body: 'The teaching model streams through one LLMClient and calls typed tools. Every call has a call_id, Pydantic-validated arguments, and a correlated result. Digest write-back uses a separate structured-output path.', names: ['record_diagnosis', 'find_wrong_questions', 'activate_question', 'record_retest', 'get_plan', 'update_plan', 'search_history', 'request_interactive'] },
    safety: { title: 'Parent confirmation and AI safety', items: [['Answer gate', 'AI-proposed answers remain transient until a parent explicitly confirms them.'], ['Diagnosis gate', 'A hypothesis cannot influence weak points until it is confirmed.'], ['Minimal context', 'The visualization generator receives no learner answer, evidence, profile, or history.'], ['Generated-code isolation', 'Generated HTML is untrusted and only runs inside a CSP-first sandboxed iframe.']] },
    reliability: { title: 'Testing, observability, and recovery', body: 'Deterministic boundaries are covered by tests; teaching quality is handled by evals and real-session acceptance. At M3 C2, 780 tests passed with clean ruff, mypy, desktop, and narrow-screen checks.', items: [['Consistency', 'Turn outbox, ordered projection, idempotent replay, and profile CAS'], ['File safety', 'Atomic writes, canonical paths, upload validation, and orphan cleanup'], ['Runtime protection', 'Per-kid lock, max steps, turn deadline, and stable errors'], ['Artifact recovery', 'pending / ready / failed lifecycle, generation fencing, and controlled retry'], ['Observability', 'Structured logs for model, tokens, latency, and errors; no hard budget in the personal demo']] },
    progress: { title: 'Current progress', columns: [{ status: 'Implemented', items: ['M1 diagnosis, teaching, verification, write-back, and resume', 'M2 multi-question validation, subject plans, retest, and history', 'M3 interactive-page generation and sandbox delivery', 'Screenshot intake, answer proposal, and image attachments', 'Read models for questions, profile, plans, and history'] }, { status: 'In progress', items: ['Tag and capability-dimension filters', 'Entering the real retest loop from the question library', 'Final M3 real-use acceptance'] }, { status: 'Planned', items: ['Optional Today surface', 'Replacing prototype screens with implementation screenshots', 'Demo video or animated walkthrough', 'A fuller multi-child experience is outside current v1-alpha'] }] },
    next: { title: 'Next stage', items: ['Finish tag filtering and retest entry', 'Complete the four M3 acceptance signals with real questions', 'Improve tools and context from real use instead of accumulating prompt rules', 'Replace prototype views with real screenshots and record a demo'] },
    demo: { title: 'Demo and screenshots', body: 'The interaction prototype covers learner selection, study, wrong questions, plans, and profile, but includes states and metrics beyond the current implementation. It is not presented as finished product evidence.', todo: 'TODO: real product screenshots and demo video / GIF' },
    contribution: { title: 'My contribution', body: 'I independently define and drive this product: scope, PRD, architecture, data model, Agent tools and orchestration, backend and frontend work, test gates, review convergence, and product validation. Codex and Claude Code are development collaborators; I own the decisions and acceptance.' },
    cta: { back: 'Back home', work: 'Other engineering cases', contact: 'Contact me', demo: 'Demo coming later' },
  },
}
