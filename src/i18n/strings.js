// ───────────────────────────────────────────────────────────
// UI chrome strings (nav, buttons, section labels, footer…).
// Personal content lives in src/data/profile.js & projects.js.
// Access in components via: const t = ui[lang]
// ───────────────────────────────────────────────────────────

export const ui = {
  en: {
    nav: { work: 'Projects', about: 'About', contact: 'Contact' },
    heroCta: { primary: 'View projects', secondary: 'Get in touch' },
    home: {
      selectedWorkEyebrow: 'Selected projects',
      selectedWorkTitle: 'Systems I have built and shaped.',
      allProjects: 'All projects →',
      aboutEyebrow: 'About',
      moreAbout: 'More about me →',
    },
    work: {
      eyebrow: 'Projects',
      title: 'Backend systems, architecture, and AI engineering.',
      lead: 'A selection of real production work across e-commerce transactions, permission infrastructure, directory services, platform delivery, and AI-assisted product features.',
    },
    project: {
      overview: 'Overview',
      whatIDid: 'What I did',
      stack: 'Tech stack',
      outcome: 'Outcome',
    },
    about: { eyebrow: 'About', achievements: 'Core achievements', experience: 'Experience' },
    contact: {
      eyebrow: 'Contact',
      title: ['Backend, architecture,', 'or AI engineering?'],
      lead: 'The fastest way to reach me is by email. I am interested in backend architecture, AI engineering, agentic workflows, and serious technical conversations.',
    },
    footer: {
      getInTouch: 'Get in touch',
      cta: 'Let’s talk about AI',
      sitemap: 'Sitemap',
      elsewhere: 'Elsewhere',
      home: 'Home',
      work: 'Projects',
      about: 'About',
      contact: 'Contact',
    },
    notFound: {
      title: 'This page wandered off.',
      lead: 'The link may be broken, or the page may have moved.',
      backHome: 'Back home',
    },
    emailCopied: 'Email address copied — feel free to write to me.',
    social: { Email: 'Email', GitHub: 'GitHub' },
  },

  zh: {
    nav: { work: '项目', about: '关于我', contact: '联系我' },
    heroCta: { primary: '查看项目', secondary: '联系我' },
    home: {
      selectedWorkEyebrow: '精选项目',
      selectedWorkTitle: '一些我参与构建的核心系统。',
      allProjects: '查看全部项目 →',
      aboutEyebrow: '关于我',
      moreAbout: '了解更多 →',
    },
    work: {
      eyebrow: '项目',
      title: '后端系统、架构设计与 AI 工程。',
      lead: '这里整理了一些真实生产项目，覆盖电商交易、权限基础设施、目录服务、平台化交付，以及 AI 辅助产品能力。',
    },
    project: {
      overview: '概述',
      whatIDid: '我做了什么',
      stack: '技术栈',
      outcome: '成果',
    },
    about: { eyebrow: '关于我', achievements: '核心成就', experience: '工作经历' },
    contact: {
      eyebrow: '联系我',
      title: ['聊后端、架构，', '或 AI 工程。'],
      lead: '找我最快的方式是发邮件。我对后端架构、AI 工程、Agent 工作流，以及严肃的技术讨论都很感兴趣。',
    },
    footer: {
      getInTouch: '联系方式',
      cta: '一起聊聊 AI？',
      sitemap: '站点地图',
      elsewhere: '其他平台',
      home: '首页',
      work: '项目',
      about: '关于我',
      contact: '联系我',
    },
    notFound: {
      title: '这个页面走丢了。',
      lead: '链接可能已经失效，或者页面被移动了。',
      backHome: '返回首页',
    },
    emailCopied: '已复制邮箱地址，可以给我发邮件了',
    social: { Email: '邮箱', GitHub: 'GitHub' },
  },
}
