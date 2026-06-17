import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  const featured = projects.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow hero__eyebrow hero-line" style={{ '--i': 0 }}>
            {profile.role} · {profile.location}
          </p>
          <h1 className="display hero__title">
            {profile.heroLines.map((line, i) => (
              <span className="hero__line" key={i}>
                <span className="hero-line" style={{ '--i': i + 1 }}>{line}</span>
              </span>
            ))}
          </h1>
          <p className="lead hero__intro hero-line" style={{ '--i': profile.heroLines.length + 1 }}>
            {profile.heroIntro}
          </p>
          <div className="hero__actions hero-line" style={{ '--i': profile.heroLines.length + 2 }}>
            <Link to="/work" className="btn btn--primary">
              View work <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <Link to="/contact" className="btn btn--ghost">Get in touch</Link>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section__head">
            <p className="eyebrow">Selected work</p>
            <h2 className="display section__title">A few things I’m proud of.</h2>
          </Reveal>

          <div className="work-list">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <ProjectCard project={p} index={i} />
              </Reveal>
            ))}
          </div>

          <Reveal className="section__more">
            <Link to="/work" className="link">All projects →</Link>
          </Reveal>
        </div>
      </section>

      {/* About teaser */}
      <section className="section section--tight about-teaser">
        <div className="wrap about-teaser__grid">
          <Reveal>
            <p className="eyebrow">About</p>
          </Reveal>
          <Reveal delay={60}>
            <p className="display about-teaser__text">
              {profile.about[0]}
            </p>
            <Link to="/about" className="link about-teaser__link">More about me →</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
