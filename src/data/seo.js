const origin = 'https://wangpuv.github.io'

const pages = {
  home: {
    zh: ['王普｜资深后端与 AI Agent 应用工程师', '20 年软件研发经验，将电商交易、分布式系统和高并发平台能力应用到 AI Agent 产品开发。'],
    en: ['Wang Pu | Senior Backend & AI Agent Application Engineer', '20 years in backend, distributed systems, and high-concurrency platforms, now applied to AI Agent product engineering.'],
  },
  work: {
    zh: ['工程案例｜王普', '电商交易、集团权限、分布式目录服务和 AI 产品工程案例。'],
    en: ['Engineering Case Studies | Wang Pu', 'Case studies in e-commerce transactions, authorization infrastructure, distributed directory services, and AI products.'],
  },
  lab: { zh: ['个人作品｜王普', '独立开发的 iOS 应用与开源开发工具。'], en: ['Independent Work | Wang Pu', 'An independently shipped iOS app and open-source developer tools.'] },
  life: { zh: ['生活与阅读｜王普', '工作之外的家庭、阅读、播客与长期兴趣。'], en: ['Life and Reading | Wang Pu', 'Family, reading, podcasting, and interests outside engineering.'] },
  about: { zh: ['关于王普｜资深后端与 AI Agent 应用工程师', '工作经历、核心成果、技术能力与独立产品研发。'], en: ['About Wang Pu | Backend & AI Agent Engineer', 'Experience, engineering outcomes, technical capability, and independent product work.'] },
  contact: { zh: ['联系王普｜工作机会与技术交流', '联系王普，沟通杭州、上海、远程岗位或技术合作。'], en: ['Contact Wang Pu | Roles and Technical Conversations', 'Contact Wang Pu about roles in Hangzhou, Shanghai, remote work, or technical collaboration.'] },
  littleSteps: { zh: ['小步学习伙伴案例｜AI Agent 应用工程', '错题驱动 AI 学习 Agent 的产品闭环、架构、状态、工具、安全边界与开发进度。'], en: ['Little Step Learning Partner | AI Agent Case Study', 'Product loop, architecture, state, tools, safety boundaries, and progress of a wrong-question-driven learning Agent.'] },
}

export const staticRoutes = [
  ['home', ''], ['work', 'work'], ['lab', 'lab'], ['life', 'life'], ['about', 'about'], ['contact', 'contact'], ['littleSteps', 'projects/little-steps'],
]

export function pageForPath(pathname) {
  const suffix = pathname.replace(/^\/(zh|en)/, '').replace(/^\/+|\/+$/g, '')
  return staticRoutes.find(([, route]) => route === suffix)?.[0] || 'home'
}

export function seoFor(page, lang, suffix = '') {
  const [title, description] = pages[page][lang]
  const path = `/${lang}${suffix ? `/${suffix}` : ''}/`
  const alternate = lang === 'zh' ? path.replace('/zh', '/en') : path.replace('/en', '/zh')
  return { title, description, path, canonical: `${origin}${path}`, alternate: `${origin}${alternate}`, origin }
}
