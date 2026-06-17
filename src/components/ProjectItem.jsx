import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { ui } from '../i18n/strings'

/**
 * Editorial work row that expands in place to reveal the full case study.
 * Opens on hover (mouse) and toggles on click / Enter (touch + keyboard),
 * so there is no separate detail page.
 */
export default function ProjectItem({ project, index }) {
  const { lang } = useLanguage()
  const t = ui[lang]
  const c = project[lang]
  const [open, setOpen] = useState(false)

  return (
    <div className={`proj${open ? ' is-open' : ''}`} style={{ '--row-accent': project.accent }}>
      <button
        type="button"
        className="proj__head"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="proj__index meta">{String(index + 1).padStart(2, '0')}</span>

        <span className="proj__main">
          <span className="proj__title display">{c.title}</span>
          <span className="proj__summary muted">{c.summary}</span>
          <span className="proj__tags">
            {c.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </span>
        </span>

        <span className="proj__aside">
          <span className="meta">{project.year}</span>
          <span className="proj__icon" aria-hidden="true" />
        </span>
      </button>

      <div className="proj__reveal">
        <div className="proj__clip">
          <div className="proj__body">
            <div className="proj__block">
              <p className="meta proj__label">{t.project.overview}</p>
              <p>{c.overview}</p>
            </div>

            <div className="proj__block">
              <p className="meta proj__label">{t.project.whatIDid}</p>
              <ul className="proj__contrib">
                {c.contributions.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="proj__meta-row">
              <div className="proj__block">
                <p className="meta proj__label">{t.project.outcome}</p>
                <p>{c.outcome}</p>
              </div>
              {c.stack && (
                <div className="proj__block">
                  <p className="meta proj__label">{t.project.stack}</p>
                  <p className="proj__stack">{c.stack.join(' · ')}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
