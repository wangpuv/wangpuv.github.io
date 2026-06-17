import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { ui } from '../i18n/strings'
import { useLanguage } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  const { lang } = useLanguage()
  const t = ui[lang]
  const p = profile[lang]
  const featured = projects.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow hero__eyebrow hero-line" style={{ '--i': 0 }}>
            {p.role} · {p.location}
          </p>
          <h1 className="display hero__title">
            {p.heroLines.map((line, i) => (
              <span className="hero__line" key={i}>
                <span className="hero-line" style={{ '--i': i + 1 }}>{line}</span>
              </span>
            ))}
          </h1>
          <p className="lead hero__intro hero-line" style={{ '--i': p.heroLines.length + 1 }}>
            {p.heroIntro}
          </p>
          <div className="hero__actions hero-line" style={{ '--i': p.heroLines.length + 2 }}>
            <Link to="/work" className="btn btn--primary">
              {t.heroCta.primary} <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <Link to="/contact" className="btn btn--ghost">{t.heroCta.secondary}</Link>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section__head">
            <p className="eyebrow">{t.home.selectedWorkEyebrow}</p>
            <h2 className="display section__title">{t.home.selectedWorkTitle}</h2>
          </Reveal>

          <div className="work-list">
            {featured.map((proj, i) => (
              <Reveal key={proj.slug} delay={i * 80}>
                <ProjectCard project={proj} index={i} />
              </Reveal>
            ))}
          </div>

          <Reveal className="section__more">
            <Link to="/work" className="link">{t.home.allProjects}</Link>
          </Reveal>
        </div>
      </section>

      {/* About teaser */}
      <section className="section section--tight about-teaser">
        <div className="wrap about-teaser__grid">
          <Reveal>
            <p className="eyebrow">{t.home.aboutEyebrow}</p>
          </Reveal>
          <Reveal delay={60}>
            <p className="display about-teaser__text">
              {p.about[0]}
            </p>
            <Link to="/about" className="link about-teaser__link">{t.home.moreAbout}</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
