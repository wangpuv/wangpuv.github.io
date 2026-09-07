import { useEffect } from 'react'
import { Link } from 'react-router'
import { channel, courses, courseUi } from '../data/course'
import { useLanguage } from '../i18n/LanguageContext'
import { profile } from '../data/profile'
import Reveal from '../components/Reveal'

const pad = (n) => String(n).padStart(2, '0')

/** Row for a lesson that exists: a link into the article. */
function LessonRow({ course, lesson, lang, t }) {
  const c = lesson[lang]
  return (
    <Link className="lesson-row" to={`/${course.slug}/${lesson.slug}`}>
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

export default function Course({ course }) {
  const { lang } = useLanguage()
  const t = courseUi[lang]
  const c = course[lang]
  const { lessons, publishedCount, total } = course

  // Owned here rather than in App: see the note on the title effect there.
  useEffect(() => {
    document.title = `${c.title} — ${profile[lang].name}`
  }, [lang, c.title])

  const inStage = (stage) =>
    lessons.filter((l) => l.number >= stage.from && l.number <= stage.to)
  const plannedInStage = (stage) =>
    course.upcoming.filter((l) => l.number >= stage.from && l.number <= stage.to)

  // A serial whose 发刊词 is out but whose numbered run has not started
  // would lead this band with a large 0, which reads as "nothing here".
  // Set the length of the series instead and let the label say where it is.
  const started = publishedCount > 0
  const opener = lessons.find((lesson) => lesson.number === 0)

  const other = courses.find((item) => item.slug !== course.slug)
  const lastStage = course.stages[course.stages.length - 1]

  return (
    <section
      className="section page-top course"
      style={{
        '--course-ink': `var(--${course.ink})`,
        '--course-ink-text': `var(--${course.ink}-ink)`,
      }}
    >
      <div className="wrap">
        <Reveal className="page-head course__head">
          {/* The spread is the parent now, so the eyebrow slot carries the
              way back to it rather than repeating the section name. */}
          <Link className="course__up eyebrow" to="/writing">
            <span aria-hidden="true">←</span> {t.allCourses}
          </Link>
          <h1 className="display page-title">{c.title}</h1>
          <p className="course__tagline display">{c.tagline}</p>
          <p className="lead">{c.lead}</p>
          <p className="course__byline">
            <span className="course__byline-mark" aria-hidden="true">{profile.initials}</span>
            {t.masthead.replace('{name}', profile[lang].name)}
          </p>
        </Reveal>

        {/* Progress as a run of ticks rather than a filled bar: this is a
            serial with a known length, and the ticks say so at a glance. */}
        <Reveal className="course__status">
          <p className="course__tally">
            <span className="course__tally-num display">{started ? publishedCount : total}</span>
            <span className="meta">
              {started ? t.tally.replace('{total}', total) : t.startedTally}
            </span>
          </p>
          <p
            className="course__gauge"
            role="img"
            aria-label={`${publishedCount} / ${total}`}
          >
            {/* The 发刊词 sits outside the numbered run but is published all
                the same; a half-strength tick in front says so. */}
            {opener && <span className="course__tick course__tick--opener" aria-hidden="true" />}
            {Array.from({ length: total }, (_, i) => (
              <span
                key={i}
                className={`course__tick${i < publishedCount ? ' is-done' : ''}`}
                aria-hidden="true"
              />
            ))}
          </p>
          <p className="meta course__cadence">{c.cadence}</p>
        </Reveal>

        <div className="course__contents">
          {opener && (
            <Reveal className="course__group course__group--opener">
              <LessonRow course={course} lesson={opener} lang={lang} t={t} />
            </Reveal>
          )}

          {course.stages.map((stage, i) => {
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
                    <LessonRow key={lesson.slug} course={course} lesson={lesson} lang={lang} t={t} />
                  ))}
                  {planned.map((item) => (
                    <PlannedRow key={item.number} item={item} lang={lang} t={t} />
                  ))}
                  {course.appendix && stage.key === lastStage.key && (
                    <PlannedRow item={course.appendix} lang={lang} t={t} />
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Only the course that actually runs on the WeChat account carries
            the QR. The other one states where it is published instead, under
            the colophon copy, so the column does not sit there empty. */}
        <Reveal className={`course__colophon${course.wechat ? '' : ' course__colophon--solo'}`}>
          <div className="course__why">
            <p className="meta course__why-label">{t.whyLabel}</p>
            <p>{c.why}</p>
            {!course.wechat && <p className="meta course__venue">{c.follow}</p>}
          </div>
          {course.wechat && (
            <div className="course__channel">
              <img
                className="course__qr"
                src={channel.qr}
                alt={channel.alt[lang]}
                width="240"
                height="240"
                loading="lazy"
              />
              <p className="meta">{c.follow}</p>
            </div>
          )}
        </Reveal>

        {/* The two serials are one publication; a reader who finished this
            contents page should not have to go back up to find the other. */}
        {other && (
          <Reveal>
            <Link
              className="course__sibling"
              to={`/${other.slug}`}
              style={{
                '--course-ink': `var(--${other.ink})`,
                '--course-ink-text': `var(--${other.ink}-ink)`,
              }}
            >
              <span className="course__sibling-label meta">{t.otherCourseLabel}</span>
              <span className="course__sibling-main">
                <span className="course__sibling-title display">{other[lang].title}</span>
                <span className="course__sibling-note muted">
                  {other[lang].tagline} · {other.total} {t.lessonsLabel}
                </span>
              </span>
              <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  )
}
