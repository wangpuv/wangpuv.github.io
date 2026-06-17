import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { ui } from '../i18n/strings'
import { useLanguage } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'

export default function ProjectDetail() {
  const { lang } = useLanguage()
  const t = ui[lang]
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]

  if (!project) {
    return (
      <section className="section page-top">
        <div className="wrap stack">
          <h1 className="display page-title">{t.project.notFound}</h1>
          <Link to="/work" className="link">{t.project.backToWork}</Link>
        </div>
      </section>
    )
  }

  const c = project[lang]
  const next = projects[(index + 1) % projects.length]
  const nextContent = next[lang]

  return (
    <article className="project" style={{ '--row-accent': project.accent }}>
      <header className="section page-top project__header">
        <div className="wrap">
          <Reveal>
            <Link to="/work" className="link project__back">← {t.project.back}</Link>
          </Reveal>
          <Reveal delay={60}>
            <p className="eyebrow project__year">{project.year} · {c.role}</p>
            <h1 className="display project__title">{c.title}</h1>
            <p className="lead">{c.summary}</p>
          </Reveal>
        </div>
      </header>

      {/* Accent banner stands in for a hero image */}
      <Reveal className="wrap">
        <div className="project__banner" />
      </Reveal>

      <div className="section">
        <div className="wrap project__grid">
          <Reveal className="project__main stack">
            <h2 className="display project__h2">{t.project.overview}</h2>
            <p>{c.overview}</p>

            <h2 className="display project__h2">{t.project.whatIDid}</h2>
            <ul className="project__contrib">
              {c.contributions.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="project__aside" delay={80}>
            <div className="project__facts">
              <div>
                <p className="meta">{t.project.role}</p>
                <p>{c.role}</p>
              </div>
              <div>
                <p className="meta">{t.project.year}</p>
                <p>{project.year}</p>
              </div>
              <div>
                <p className="meta">{t.project.focus}</p>
                <p>{c.tags.join(lang === 'zh' ? '、' : ', ')}</p>
              </div>
              <div>
                <p className="meta">{t.project.outcome}</p>
                <p>{c.outcome}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="wrap"><hr className="rule" /></div>
      <section className="section--tight">
        <div className="wrap project__next">
          <span className="eyebrow">{t.project.next}</span>
          <Link to={`/work/${next.slug}`} className="project__next-link display">
            {nextContent.title}
            <span className="arrow" aria-hidden="true"> →</span>
          </Link>
        </div>
      </section>
    </article>
  )
}
