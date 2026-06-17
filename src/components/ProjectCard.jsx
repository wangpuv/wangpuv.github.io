import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

/**
 * Editorial work row: large index number, title, meta, tags.
 * Hover reveals the accent and nudges the title.
 */
export default function ProjectCard({ project, index }) {
  const { lang } = useLanguage()
  const c = project[lang]

  return (
    <Link
      to={`/work/${project.slug}`}
      className="work-row"
      style={{ '--row-accent': project.accent }}
    >
      <span className="work-row__index meta">{String(index + 1).padStart(2, '0')}</span>

      <div className="work-row__body">
        <h3 className="work-row__title display">{c.title}</h3>
        <p className="work-row__summary muted">{c.summary}</p>
        <ul className="work-row__tags">
          {c.tags.map((tag) => (
            <li key={tag} className="tag">{tag}</li>
          ))}
        </ul>
      </div>

      <div className="work-row__aside">
        <span className="meta">{project.year}</span>
        <span className="work-row__arrow" aria-hidden="true">→</span>
      </div>
    </Link>
  )
}
