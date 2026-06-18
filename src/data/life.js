// ───────────────────────────────────────────────────────────
// Personal life ("生活" / Life) — fragments outside of work.
// `key`, `accent`, and optional `link` / `qr` are shared; the
// translatable label/title/body live in per-card en/zh blocks.
// Access via card[lang]. Page intro lives in i18n/strings.js.
// ───────────────────────────────────────────────────────────

export const lifeCards = [
  {
    key: 'family',
    accent: 'oklch(62% 0.14 160)',
    en: {
      label: 'Family',
      title: 'Two kids, a daily battle of wits',
      body: 'My older one is in middle school, the younger in primary school. Every day is a cheerful battle of wits with the two of them — exhausting, and endlessly fun.',
    },
    zh: {
      label: '家庭',
      title: '两个孩子，斗智斗勇',
      body: '老大上初中，老二上小学。每天跟他们俩斗智斗勇，累并快乐着，其乐无穷。',
    },
  },
  {
    key: 'podcast',
    accent: 'oklch(58% 0.13 250)',
    link: 'https://namecard.xiaoyuzhoufm.com/ruwy6',
    en: {
      label: 'Podcast',
      title: 'I tried podcasting',
      body: 'I once carved out time to make my own podcast. It turned out to eat a lot of hours, so I couldn’t keep it going — but the episodes are still there.',
      linkText: 'Listen on Xiaoyuzhou',
    },
    zh: {
      label: '播客',
      title: '做过一档播客',
      body: '曾经抽时间做了自己的播客，可惜太耗费时间，没能坚持下来。不过节目都还在。',
      linkText: '在小宇宙收听',
    },
  },
  {
    key: 'wechat',
    accent: 'oklch(54% 0.13 320)',
    qr: '/wechat-qr.png',
    en: {
      label: 'WeChat',
      title: '阿诚的代码',
      body: 'My WeChat public account. Its daily column “Last Night in Tech” (《昨夜科技圈二三事》) is compiled and published automatically every day by my little assistant Wilher (Hermes-Agent). Scan to follow.',
      qrAlt: 'WeChat QR code for 阿诚的代码',
      qrCaption: 'Scan to follow',
    },
    zh: {
      label: '公众号',
      title: '阿诚的代码',
      body: '我的微信公众号。每天的栏目《昨夜科技圈二三事》由我的小助理 Wilher（Hermes-Agent）自动整理信息并发布。扫码即可关注。',
      qrAlt: '阿诚的代码 微信公众号二维码',
      qrCaption: '扫码关注',
    },
  },
  {
    key: 'standup',
    accent: 'oklch(60% 0.14 70)',
    en: {
      label: 'Stand-up',
      title: 'Champion, somehow',
      body: 'I’m not exactly the cheery, joke-cracking type — yet somehow I won the championship of Alibaba’s 2nd stand-up comedy contest. I don’t even watch much stand-up. Still not sure how that happened.',
    },
    zh: {
      label: '脱口秀',
      title: '稀里糊涂拿了冠军',
      body: '我这人有点不苟言笑，却不知道为了什么，拿了阿里巴巴第二届脱口秀大会的冠军——其实我自己都不怎么看脱口秀。',
    },
  },
  {
    key: 'reading',
    accent: 'oklch(54% 0.17 36)',
    en: {
      label: 'Reading',
      title: 'The Beginning of Infinity',
      body: 'Among the books I’ve read these past couple of years, David Deutsch’s “The Beginning of Infinity” left the deepest mark. It told me: stay optimistic, keep learning, and forge ahead.',
    },
    zh: {
      label: '阅读',
      title: '《无穷的开始》',
      body: '这两年读过的书里，《无穷的开始：世界进步的本源》给我印象最深。它告诉我：要乐观，要学习，要勇往直前。',
    },
  },
]
