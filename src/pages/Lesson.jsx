import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { courseMeta, lessons } from '../data/course'
import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'
import LessonToc from '../components/LessonToc'
import NotFound from './NotFound'

// Article bodies are generated into src/content/course/ by `npm run course`.
// Loading them lazily keeps twelve long-form lessons out of the main bundle;
// only the one being read is fetched.
const bodies = import.meta.glob('../content/course/*.html', {
  query: '?raw',
  import: 'default',
})

const pad = (n) => String(n).padStart(2, '0')

export default function Lesson() {
  const { slug } = useParams()
  const { lang, setLang } = useLanguage()
  const t = courseMeta[lang]

  const index = lessons.findIndex((lesson) => lesson.slug === slug)
  const lesson = index === -1 ? null : lessons[index]
  const prev = index > 0 ? lessons[index - 1] : null
  const next = index !== -1 && index < lessons.length - 1 ? lessons[index + 1] : null

  const [html, setHtml] = useState('')

  useEffect(() => {
    if (!lesson) return undefined
    let cancelled = false
    setHtml('')
    bodies[`../content/course/${lesson.slug}.html`]().then((body) => {
      if (!cancelled) setHtml(body)
    })
    return () => { cancelled = true }
  }, [lesson])

  // Owned here rather than in App: see the note on the title effect there.
  useEffect(() => {
    if (!lesson) return
    document.title = `${lesson[lang].topic} — ${t.title} · ${profile[lang].name}`
  }, [lesson, lang, t.title])

  if (!lesson) return <NotFound />

  const c = lesson[lang]
  const isPreface = lesson.number === 0

  return (
    <article className="section page-top lesson">
      <div className="wrap">
        <header className="lesson__head">
          <p className="eyebrow">
            {isPreface
              ? c.topic
              : lang === 'zh' ? `第 ${lesson.number} 课` : `Lesson ${pad(lesson.number)}`}
          </p>
          <h1 className="display lesson__title">{isPreface ? c.kicker : c.topic}</h1>
          {!isPreface && <p className="lesson__kicker display">{c.kicker}</p>}
          <p className="lead">{c.description}</p>
          <p className="meta lesson__facts">
            <span className="lesson__byline">
              {t.byline.replace('{name}', profile[lang].name)}
            </span>
            <span>{lesson.date.replace(/-/g, '.')}</span>
            <span>{lesson.minutes} {t.minutes}</span>
          </p>
          {lang === 'en' && (
            <p className="lesson__notice">
              {t.inChinese}{' '}
              <button type="button" className="link" onClick={() => setLang('zh')}>
                {t.switchToChinese} →
              </button>
            </p>
          )}
        </header>

        <div className="lesson__grid">
          <div
            className="lesson__body"
            lang="zh"
            /* Generated at build time from markdown I wrote; no user input
               reaches this string. */
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className="lesson__rail">
            <LessonToc toc={lesson.toc} label={t.onThisPage} ready={html !== ''} />
          </div>
        </div>

        <nav className="lesson__pager" aria-label={t.onThisPage}>
          {prev ? (
            <Link className="lesson__pager-link lesson__pager-link--prev" to={`/claude-code/${prev.slug}`}>
              <span className="meta">← {t.prev}</span>
              <span className="display">{prev[lang].topic}</span>
            </Link>
          ) : <span />}
          {next ? (
            <Link className="lesson__pager-link lesson__pager-link--next" to={`/claude-code/${next.slug}`}>
              <span className="meta">{t.next} →</span>
              <span className="display">{next[lang].topic}</span>
            </Link>
          ) : <span />}
        </nav>

        <aside className="lesson__author">
          <span className="lesson__author-mark" aria-hidden="true">{profile.initials}</span>
          <div className="lesson__author-body">
            <p className="lesson__author-name display">{profile[lang].name}</p>
            <p className="lesson__author-bio">{t.authorBio}</p>
            <Link className="link lesson__author-cta" to="/about">
              {t.authorCta} <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </aside>

        <div className="lesson__foot">
          <Link className="link lesson__back" to="/claude-code">
            {t.backToContents} <span className="arrow" aria-hidden="true">→</span>
          </Link>
          <p className="meta">{t.follow}</p>
        </div>
      </div>
    </article>
  )
}
