// ───────────────────────────────────────────────────────────
// UI chrome strings (nav, buttons, section labels, footer…).
// Personal content lives in src/data/profile.js & projects.js.
// Access in components via: const t = ui[lang]
// ───────────────────────────────────────────────────────────

export const ui = {
  en: {
    nav: { work: 'Work', about: 'About', contact: 'Contact' },
    heroCta: { primary: 'View work', secondary: 'Get in touch' },
    home: {
      selectedWorkEyebrow: 'Selected work',
      selectedWorkTitle: 'A few things I’m proud of.',
      allProjects: 'All projects →',
      aboutEyebrow: 'About',
      moreAbout: 'More about me →',
    },
    work: {
      eyebrow: 'Work',
      title: 'Selected projects, 2020 — 2025.',
      lead: 'A mix of shipped products, design systems, and side projects. Each one taught me something I still use today.',
    },
    project: {
      back: 'Work',
      overview: 'Overview',
      whatIDid: 'What I did',
      role: 'Role',
      year: 'Year',
      focus: 'Focus',
      outcome: 'Outcome',
      next: 'Next project',
      notFound: 'Project not found.',
      backToWork: '← Back to work',
    },
    about: { eyebrow: 'About', experience: 'Experience' },
    contact: {
      eyebrow: 'Contact',
      title: ['Have a project in mind?', 'Let’s talk.'],
      lead: 'I’m open to freelance work, collaborations, and the occasional good conversation. The fastest way to reach me is by email.',
    },
    footer: {
      getInTouch: 'Get in touch',
      cta: 'Let’s work together',
      sitemap: 'Sitemap',
      elsewhere: 'Elsewhere',
      home: 'Home',
      work: 'Work',
      about: 'About',
      contact: 'Contact',
    },
    notFound: {
      title: 'This page wandered off.',
      lead: 'The link may be broken, or the page may have moved.',
      backHome: 'Back home',
    },
    social: { Email: 'Email', GitHub: 'GitHub', LinkedIn: 'LinkedIn', Twitter: 'Twitter' },
  },

  zh: {
    nav: { work: '作品', about: '关于', contact: '联系' },
    heroCta: { primary: '查看作品', secondary: '联系我' },
    home: {
      selectedWorkEyebrow: '精选作品',
      selectedWorkTitle: '几件作品，我颇为自豪。',
      allProjects: '查看全部项目 →',
      aboutEyebrow: '关于',
      moreAbout: '了解更多 →',
    },
    work: {
      eyebrow: '作品',
      title: '精选项目，2020 — 2025。',
      lead: '既有已上线的产品和设计系统，也有自己的副业项目。每一个都教会了我至今仍在用的东西。',
    },
    project: {
      back: '作品',
      overview: '概述',
      whatIDid: '我做了什么',
      role: '角色',
      year: '年份',
      focus: '方向',
      outcome: '成果',
      next: '下一个项目',
      notFound: '未找到该项目。',
      backToWork: '← 返回作品',
    },
    about: { eyebrow: '关于', experience: '工作经历' },
    contact: {
      eyebrow: '联系',
      title: ['有想做的项目吗？', '聊聊吧。'],
      lead: '我接受自由职业、合作，以及偶尔一次愉快的交流。找我最快的方式是发邮件。',
    },
    footer: {
      getInTouch: '联系方式',
      cta: '一起合作吧',
      sitemap: '站点地图',
      elsewhere: '其他平台',
      home: '首页',
      work: '作品',
      about: '关于',
      contact: '联系',
    },
    notFound: {
      title: '这个页面走丢了。',
      lead: '链接可能已经失效，或者页面被移动了。',
      backHome: '返回首页',
    },
    social: { Email: '邮箱', GitHub: 'GitHub', LinkedIn: '领英', Twitter: 'Twitter' },
  },
}
