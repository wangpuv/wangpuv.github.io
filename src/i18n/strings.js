// ───────────────────────────────────────────────────────────
// UI chrome strings (nav, buttons, section labels, footer…).
// Personal content lives in src/data/profile.js & projects.js.
// Access in components via: const t = ui[lang]
// ───────────────────────────────────────────────────────────

export const ui = {
  en: {
    nav: { work: 'Projects', lab: 'Lab', life: 'Life', about: 'About', contact: 'Contact' },
    heroCta: { primary: 'View projects', lab: 'Lab', secondary: 'Get in touch' },
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
    lab: {
      eyebrow: 'Lab',
      title: 'Things I build on my own time.',
      lead: 'Side projects and small tools I design and ship myself — a shipped iOS app and a few open-source developer plugins.',
      highlights: 'Highlights',
      viewApp: 'View on the App Store',
      viewRepo: 'View on GitHub',
    },
    life: {
      eyebrow: 'Life',
      title: 'Outside the code.',
      lead: 'A few fragments from life beyond work — family, a podcast I tried, a public account, an unlikely trophy, and a book that stuck with me.',
      reading: {
        eyebrow: 'Bookshelf',
        title: 'Books I’ve finished',
        story:
          'For years I did all my reading on a Kindle. Once it stopped letting me buy books, I drifted over to WeChat Reading — which, conveniently, ships a skill that can export everything you’ve finished. So here they are.',
        note: '{n} finished, most recent first.',
      },
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
      lab: 'Lab',
      life: 'Life',
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
    nav: { work: '项目', lab: '小作品', life: '生活', about: '关于我', contact: '联系我' },
    heroCta: { primary: '查看项目', lab: '小作品', secondary: '联系我' },
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
    lab: {
      eyebrow: '小作品',
      title: '工作之外，我自己做的东西。',
      lead: '一些我独立设计并完成的个人项目和小工具：一款已上架的 iOS App，以及几个开源开发者插件。',
      highlights: '亮点',
      viewApp: '在 App Store 查看',
      viewRepo: '在 GitHub 查看',
    },
    life: {
      eyebrow: '生活',
      title: '代码之外。',
      lead: '工作之外的一些片段——家庭、做过的播客、公众号、一座意外的奖杯，还有一本让我念念不忘的书。',
      reading: {
        eyebrow: '书架',
        title: '读完的书',
        story:
          '以前一直用 Kindle 读书，后来 Kindle 不能买书了，就转投了微信读书。刚好它出了个 skill，能把读完的书导出来，那就顺手把这些书都陈列在这儿吧。',
        note: '共 {n} 本，按最近阅读排序。',
      },
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
      lab: '小作品',
      life: '生活',
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
