// ───────────────────────────────────────────────────────────
// Course registry — the two serialised tutorials.
//
// They are not published the same way: the Claude Code course goes out on the
// WeChat account 阿诚的代码 first and is mirrored here, while the LLM course is
// published on this site first and is not on WeChat at all. That difference is
// per-course copy (`follow`, `wechat`), not something to state once for both.
//
// Each course is split in two: the Chinese lesson bodies are generated
// (`npm run course` → course.generated.js + src/content/course/<slug>/),
// and the English shell, stage grouping and unwritten lessons are
// hand-written in src/data/courses/<slug>.js.
//
// This module joins the halves and owns everything the two share: the
// chrome strings shared by both, the WeChat account, and the spread's copy.
//
// Lesson bodies stay Chinese in both languages — an English reader gets
// a translated contents page and an honest note on the article.
//
// Adding a third course: write src/data/courses/<slug>.js, add it to the
// COURSES list in scripts/build-course.mjs, and register it below. Routes,
// nav highlighting and the /writing spread are all derived from `courses`.
// ───────────────────────────────────────────────────────────

import { publishedLessons } from './course.generated'
import claudeCode from './courses/claude-code'
import llmEngineer from './courses/llm-engineer'

// The account itself. Only the courses with `wechat: true` are published on it;
// the Life page's WeChat card uses the same file.
export const channel = {
  name: '阿诚的代码',
  qr: '/wechat-qr.png',
  alt: { en: 'WeChat QR code for 阿诚的代码', zh: '阿诚的代码 微信公众号二维码' },
}

// Chrome shared by every course: the contents page, the article page, and
// the spread. Anything a course words for itself lives in its own module.
export const courseUi = {
  en: {
    eyebrow: 'Writing',
    tally: 'published · {total} in total',
    justStarted: 'introduction out · {total} lessons to come',
    startedTally: 'lessons · introduction out',
    stagesLabel: 'Contents',
    upcomingLabel: 'Not yet published',
    whyLabel: 'Why another one',
    lessonsLabel: 'lessons',
    latestLabel: 'Latest',
    minutes: 'min read',
    byline: 'By {name}',
    masthead: 'Written and serialised by {name}',
    authorBio:
      'Backend and distributed-systems engineer of twenty years, eleven of them at Alibaba as a Technical Expert. Now working on AI agent engineering, AI application architecture, and AI platforms.',
    authorCta: 'More about the author',
    inChinese: 'This lesson is written in Chinese.',
    switchToChinese: 'Switch the site to Chinese',
    channelNote: 'Scan to follow my WeChat account 阿诚的代码.',
    backToContents: 'All lessons',
    allCourses: 'Both courses',
    otherCourseLabel: 'The other serial',
    readContents: 'Contents',
    prev: 'Previous',
    next: 'Next',
    onThisPage: 'On this page',
  },
  zh: {
    eyebrow: '教程',
    tally: '已发布 · 共 {total} 课',
    justStarted: '发刊词已发布 · 共 {total} 课',
    startedTally: '课 · 发刊词已发布',
    stagesLabel: '目录',
    upcomingLabel: '待发布',
    whyLabel: '为什么写这一套',
    lessonsLabel: '课',
    latestLabel: '最新',
    minutes: '分钟',
    byline: '文 / {name}',
    masthead: '{name} 撰写并连载',
    authorBio:
      '20 年后端与分布式系统工程师，其中 11 年在阿里巴巴任技术专家。现在做 AI Agent 工程、AI 应用架构与 AI 平台。',
    authorCta: '了解作者',
    inChinese: '',
    switchToChinese: '',
    channelNote: '扫码关注我的微信公众号「阿诚的代码」。',
    backToContents: '返回目录',
    allCourses: '全部教程',
    otherCourseLabel: '另一套连载',
    readContents: '查看目录',
    prev: '上一课',
    next: '下一课',
    onThisPage: '本课目录',
  },
}

// The /writing spread — the level above the two contents pages.
export const writingPage = {
  en: {
    title: 'Two courses, written in the open',
    lead: 'One is about the tool I work with every day, and goes out on my WeChat account first. The other is about building the thing that tool helps me build, and is published here first. Neither is a command list, and neither pretends the experiments all worked.',
  },
  zh: {
    title: '两套教程，边写边连载',
    lead: '一套讲我每天在用的工具，每课首发于我的微信公众号，并在这里完整镜像；一套讲用它去构建的东西，首发在这里。都不是命令清单，也都不会假装实验全部成功。',
  },
}

/** Join a course's generated lessons with its hand-written English shell. */
function build(def) {
  const lessons = (publishedLessons[def.slug] ?? []).map((lesson) => ({
    ...lesson,
    en: def.english[lesson.slug] ?? lesson.zh,
  }))

  return {
    ...def,
    lessons,
    // The 发刊词 is lesson 00 and sits outside the numbered run, so it is
    // not one of them. Both the spread and the home page count this way.
    publishedCount: lessons.filter((lesson) => lesson.number >= 1).length,
    latest: lessons.length ? lessons[lessons.length - 1] : null,
  }
}

export const courses = [build(claudeCode), build(llmEngineer)]

/** Path prefixes the course section owns — used by the nav and the title effect. */
export const coursePaths = courses.map((course) => `/${course.slug}`)

export const totalLessons = courses.reduce((n, course) => n + course.total, 0)
export const totalPublished = courses.reduce((n, course) => n + course.publishedCount, 0)
