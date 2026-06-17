// ───────────────────────────────────────────────────────────
// PLACEHOLDER CONTENT — replace the values below with your own.
// Bilingual: shared fields at the top, then `en` and `zh` blocks.
// Access in components via: const p = profile[lang]
// ───────────────────────────────────────────────────────────

export const profile = {
  // Shared across languages
  initials: 'WP',
  social: [
    { label: 'Email', href: 'mailto:hello@example.com', display: 'hello@example.com' },
    { label: 'GitHub', href: 'https://github.com/yourname', display: 'github.com/yourname' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourname', display: 'linkedin.com/in/yourname' },
    { label: 'Twitter', href: 'https://twitter.com/yourname', display: '@yourname' },
  ],

  en: {
    name: 'Wang Pu',
    role: 'Designer & Engineer',
    location: 'Shanghai, China',
    heroLines: ['Designer &', 'Engineer', 'building things', 'that matter.'],
    heroIntro:
      'I design and build digital products end to end, from the first sketch to the shipped interface. Currently focused on tools that feel calm, fast, and genuinely useful.',
    about: [
      'Hello — I’m a designer and engineer with a decade of experience turning fuzzy ideas into products people actually use. I care about typography, performance, and the small details that make software feel considered.',
      'I’ve worked across consumer apps, internal tools, and design systems. I like the messy early phase where the problem is still unclear, and I like the late phase where everything has to be pixel-correct.',
      'Outside of work I read too much, take photos on a 35mm lens, and tinker with side projects that rarely ship but always teach me something.',
    ],
    skills: [
      { group: 'Design', items: ['Product design', 'Design systems', 'Prototyping', 'Brand & identity'] },
      { group: 'Engineering', items: ['React / TypeScript', 'Node.js', 'CSS architecture', 'Accessibility'] },
      { group: 'Practice', items: ['User research', 'Design ops', 'Mentoring', 'Workshops'] },
    ],
    experience: [
      { period: '2022 — Now', role: 'Principal Designer', org: 'Northbound Studio', note: 'Lead design for a B2B analytics suite; built the design system from scratch.' },
      { period: '2019 — 2022', role: 'Senior Product Designer', org: 'Meridian', note: 'Owned the mobile onboarding flow; lifted activation by 24%.' },
      { period: '2016 — 2019', role: 'Product Designer', org: 'Foldspace', note: 'Designed and shipped the first version of the flagship editor.' },
    ],
  },

  zh: {
    name: '王普',
    role: '设计师 & 工程师',
    location: '中国 · 上海',
    heroLines: ['做设计，', '也写代码，', '只为打造', '重要的产品。'],
    heroIntro:
      '我从草图到上线，端到端地设计并构建数字产品。当下专注于打造让人感到从容、快速、真正有用的工具。',
    about: [
      '你好，我是一名设计师兼工程师，有十年把模糊的想法变成好用产品的经验。我在意排版、性能，以及那些让软件显得用心的小细节。',
      '我做过面向消费者的应用、内部工具和设计系统。我喜欢问题还不清晰的混沌初期，也喜欢一切都必须像素级精确的收尾阶段。',
      '工作之外，我读很多书，用 35mm 镜头拍照，也折腾一些很少上线、却总能教会我东西的副业项目。',
    ],
    skills: [
      { group: '设计', items: ['产品设计', '设计系统', '原型设计', '品牌与视觉'] },
      { group: '工程', items: ['React / TypeScript', 'Node.js', 'CSS 架构', '无障碍'] },
      { group: '实践', items: ['用户研究', '设计运营', '带教', '工作坊'] },
    ],
    experience: [
      { period: '2022 — 至今', role: '首席设计师', org: 'Northbound Studio', note: '主导一套 B2B 分析产品的设计，从零搭建设计系统。' },
      { period: '2019 — 2022', role: '高级产品设计师', org: 'Meridian', note: '负责移动端引导流程，将激活率提升了 24%。' },
      { period: '2016 — 2019', role: '产品设计师', org: 'Foldspace', note: '设计并上线了旗舰编辑器的第一个版本。' },
    ],
  },
}
