import { useEffect } from 'react'
import { Link } from 'react-router'
import {
  channel,
  courses,
  courseUi,
  totalLessons,
  totalPublished,
  writingPage,
} from '../data/course'
import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'

const pad = (n) => String(n).padStart(2, '0')

/**
 * One serial on the spread. The whole block is the link — the contents page
 * is the only place it goes, so a nested link to the latest lesson would
 * only split the target. The latest lesson is stated, not linked.
 */
function Serial({ course, index, lang, t }) {
  const c = course[lang]
  const { latest, publishedCount, total } = course
  const hasNumbered = publishedCount > 0

  return (
    <Link
      className="serial"
      to={`/${course.slug}`}
      style={{
        '--serial-ink': `var(--${course.ink})`,
        '--serial-ink-text': `var(--${course.ink}-ink)`,
      }}
    >
      <span className="serial__index display">{pad(index + 1)}</span>

      <span className="serial__main">
        <span className="serial__title display">{c.title}</span>
        <span className="serial__tagline display">{c.tagline}</span>
        <span className="serial__lead">{c.lead}</span>

        <span className="serial__stages">
          {course.stages.map((stage) => (
            <span className="serial__stage" key={stage.key}>
              <span className="serial__stage-range meta">
                {pad(stage.from)}—{pad(stage.to)}
              </span>
              <span className="serial__stage-title">{stage[lang].title}</span>
            </span>
          ))}
        </span>
      </span>

      <span className="serial__aside">
        {/* The scale of the series is the number worth setting large; the
            gauge carries the progress. A published count of 0 as the headline
            figure would read as "nothing here" for a serial that has just
            opened with its 发刊词. */}
        <span className="serial__count">
          <span className="serial__count-num display">{total}</span>
          <span className="serial__count-unit meta">{t.lessonsLabel}</span>
        </span>

        <span
          className="serial__gauge"
          role="img"
          aria-label={`${publishedCount} / ${total}`}
        >
          {latest && (
            <span className="serial__tick serial__tick--opener" aria-hidden="true" />
          )}
          {Array.from({ length: total }, (_, i) => (
            <span
              key={i}
              className={`serial__tick${i < publishedCount ? ' is-done' : ''}`}
              aria-hidden="true"
            />
          ))}
        </span>

        <span className="serial__status meta">
          {hasNumbered
            ? `${publishedCount} ${t.tally.replace('{total}', total)}`
            : t.justStarted.replace('{total}', total)}
        </span>
        <span className="serial__cadence meta">{c.cadence}</span>

        {latest && (
          <span className="serial__latest">
            <span className="serial__latest-label meta">{t.latestLabel}</span>
            <span className="serial__latest-topic display">
              {latest.number === 0
                ? latest[lang].topic
                : `${lang === 'zh' ? `第 ${latest.number} 课` : `Lesson ${pad(latest.number)}`} · ${latest[lang].topic}`}
            </span>
            <span className="serial__latest-date meta">{latest.date.replace(/-/g, '.')}</span>
          </span>
        )}

        <span className="serial__cta">
          {t.readContents} <span className="arrow" aria-hidden="true">→</span>
        </span>
      </span>
    </Link>
  )
}

export default function Writing() {
  const { lang } = useLanguage()
  const t = courseUi[lang]
  const p = writingPage[lang]

  // Owned here rather than in App: see the note on the title effect there.
  useEffect(() => {
    document.title = `${p.title} — ${profile[lang].name}`
  }, [lang, p.title])

  return (
    <section className="section page-top writing">
      <div className="wrap">
        <Reveal className="page-head writing__head">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1 className="display page-title">{p.title}</h1>
          <p className="lead">{p.lead}</p>
          <p className="writing__byline">
            <span className="writing__byline-mark" aria-hidden="true">{profile.initials}</span>
            {t.masthead.replace('{name}', profile[lang].name)}
          </p>
        </Reveal>

        <Reveal className="writing__tally">
          <span className="writing__tally-num display">{courses.length}</span>
          <span className="meta">
            {lang === 'zh'
              ? `套连载 · 共 ${totalLessons} 课 · 已发布 ${totalPublished}`
              : `serials · ${totalLessons} lessons in total · ${totalPublished} published`}
          </span>
        </Reveal>

        <div className="writing__serials">
          {courses.map((course, i) => (
            <Reveal key={course.slug} delay={i * 80}>
              <Serial course={course} index={i} lang={lang} t={t} />
            </Reveal>
          ))}
        </div>

        <Reveal className="writing__channel">
          <img
            className="writing__qr"
            src={channel.qr}
            alt={channel.alt[lang]}
            width="240"
            height="240"
            loading="lazy"
          />
          <p className="meta">{t.channelNote}</p>
        </Reveal>
      </div>
    </section>
  )
}
