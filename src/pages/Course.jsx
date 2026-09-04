import { useEffect } from 'react'
import { Link } from 'react-router'
import { courseMeta, lessons, publishedCount, stages, upcomingLessons, appendix } from '../data/course'
import { useLanguage } from '../i18n/LanguageContext'
import { profile } from '../data/profile'
import Reveal from '../components/Reveal'

const pad = (n) => String(n).padStart(2, '0')

/** Row for a lesson that exists: a link into the article. */
function LessonRow({ lesson, lang, t }) {
  const c = lesson[lang]
  return (
    <Link className="lesson-row" to={`/claude-code/${lesson.slug}`}>
      <span className="lesson-row__num display">{pad(lesson.number)}</span>
      <span className="lesson-row__main">
        <span className="lesson-row__topic display">{c.topic}</span>
        <span className="lesson-row__kicker muted">{c.kicker}</span>
      </span>
      <span className="lesson-row__aside meta">
        <span className="lesson-row__date">{lesson.date.replace(/-/g, '.')}</span>
        <span className="lesson-row__mins">{lesson.minutes} {t.minutes}</span>
      </span>
    </Link>
  )
}

/** Row for a lesson that is announced but not written yet. Not a link. */
function PlannedRow({ item, lang, t }) {
  const c = item[lang]
  return (
    <div className="lesson-row lesson-row--planned">
      <span className="lesson-row__num display">{item.number ? pad(item.number) : '—'}</span>
      <span className="lesson-row__main">
        <span className="lesson-row__topic display">{c.topic}</span>
        <span className="lesson-row__kicker muted">{c.kicker}</span>
      </span>
      <span className="lesson-row__aside meta">
        <span className="lesson-row__pending">{item.label?.[lang] ?? t.upcomingLabel}</span>
      </span>
    </div>
  )
}

export default function Course() {
  const { lang } = useLanguage()
  const t = courseMeta[lang]

  // Owned here rather than in App: see the note on the title effect there.
  useEffect(() => {
    document.title = `${t.title} — ${profile[lang].name}`
  }, [lang, t.title])

  const opener = lessons.find((lesson) => lesson.number === 0)
  const inStage = (stage) =>
    lessons.filter((l) => l.number >= stage.from && l.number <= stage.to)
  const plannedInStage = (stage) =>
    upcomingLessons.filter((l) => l.number >= stage.from && l.number <= stage.to)

  return (
    <section className="section page-top course">
      <div className="wrap">
        <Reveal className="page-head course__head">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1 className="display page-title">{t.title}</h1>
          <p className="lead">{t.lead}</p>
          <p className="course__byline">
            <span className="course__byline-mark" aria-hidden="true">{profile.initials}</span>
            {t.masthead.replace('{name}', profile[lang].name)}
          </p>
        </Reveal>

        {/* Progress as a run of ticks rather than a filled bar: this is a
            serial with a known length, and the ticks say so at a glance. */}
        <Reveal className="course__status">
          <p className="course__tally">
            <span className="course__tally-num display">{publishedCount}</span>
            <span className="meta">{t.tally.replace('{total}', courseMeta.total)}</span>
          </p>
          <p
            className="course__gauge"
            role="img"
            aria-label={`${publishedCount} / ${courseMeta.total}`}
          >
            {Array.from({ length: courseMeta.total }, (_, i) => (
              <span
                key={i}
                className={`course__tick${i < publishedCount ? ' is-done' : ''}`}
                aria-hidden="true"
              />
            ))}
          </p>
          <p className="meta course__cadence">{t.cadenceLabel}</p>
        </Reveal>

        <div className="course__contents">
          {opener && (
            <Reveal className="course__group course__group--opener">
              <LessonRow lesson={opener} lang={lang} t={t} />
            </Reveal>
          )}

          {stages.map((stage, i) => {
            const s = stage[lang]
            const rows = inStage(stage)
            const planned = plannedInStage(stage)
            return (
              <Reveal key={stage.key} className="course__group" delay={i * 60}>
                <div className="course__stage">
                  <p className="course__stage-label eyebrow">{s.label}</p>
                  <h2 className="course__stage-title display">{s.title}</h2>
                  <p className="course__stage-note muted">{s.note}</p>
                  <p className="course__stage-range meta" aria-hidden="true">
                    {pad(stage.from)} — {pad(stage.to)}
                  </p>
                </div>
                <div className="course__rows">
                  {rows.map((lesson) => (
                    <LessonRow key={lesson.slug} lesson={lesson} lang={lang} t={t} />
                  ))}
                  {planned.map((item) => (
                    <PlannedRow key={item.number} item={item} lang={lang} t={t} />
                  ))}
                  {stage.key === 'automation' && (
                    <PlannedRow item={appendix} lang={lang} t={t} />
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="course__colophon">
          <div className="course__why">
            <p className="meta course__why-label">{t.whyLabel}</p>
            <p>{t.why}</p>
          </div>
          <div className="course__channel">
            <img
              className="course__qr"
              src={courseMeta.channel.qr}
              alt={courseMeta.qrAlt[lang]}
              width="240"
              height="240"
              loading="lazy"
            />
            <p className="meta">{t.follow}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
