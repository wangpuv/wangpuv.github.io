import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import Reveal from '../components/Reveal'

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]

  if (!project) {
    return (
      <section className="section page-top">
        <div className="wrap stack">
          <h1 className="display page-title">Project not found.</h1>
          <Link to="/work" className="link">← Back to work</Link>
        </div>
      </section>
    )
  }

  const next = projects[(index + 1) % projects.length]

  return (
    <article className="project" style={{ '--row-accent': project.accent }}>
      <header className="section page-top project__header">
        <div className="wrap">
          <Reveal>
            <Link to="/work" className="link project__back">← Work</Link>
          </Reveal>
          <Reveal delay={60}>
            <p className="eyebrow project__year">{project.year} · {project.role}</p>
            <h1 className="display project__title">{project.title}</h1>
            <p className="lead">{project.summary}</p>
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
            <h2 className="display project__h2">Overview</h2>
            <p>{project.overview}</p>

            <h2 className="display project__h2">What I did</h2>
            <ul className="project__contrib">
              {project.contributions.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="project__aside" delay={80}>
            <div className="project__facts">
              <div>
                <p className="meta">Role</p>
                <p>{project.role}</p>
              </div>
              <div>
                <p className="meta">Year</p>
                <p>{project.year}</p>
              </div>
              <div>
                <p className="meta">Focus</p>
                <p>{project.tags.join(', ')}</p>
              </div>
              <div>
                <p className="meta">Outcome</p>
                <p>{project.outcome}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="wrap"><hr className="rule" /></div>
      <section className="section--tight">
        <div className="wrap project__next">
          <span className="eyebrow">Next project</span>
          <Link to={`/work/${next.slug}`} className="project__next-link display">
            {next.title}
            <span className="arrow" aria-hidden="true"> →</span>
          </Link>
        </div>
      </section>
    </article>
  )
}
