import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { ui } from '../i18n/strings'

/**
 * Personal-work row that expands in place to reveal details and a link
 * out to the App Store / GitHub. Shares the `.proj` styling with
 * ProjectItem; opens on hover (mouse) and toggles on click / Enter.
 */
export default function LabItem({ item, index }) {
  const { lang } = useLanguage()
  const t = ui[lang]
  const c = item[lang]
  const [open, setOpen] = useState(false)
  const cta = item.kind === 'app' ? t.lab.viewApp : t.lab.viewRepo

  return (
    <div className={`proj${open ? ' is-open' : ''}`} style={{ '--row-accent': item.accent }}>
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
          <span className="meta">{item.year}</span>
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
              <p className="meta proj__label">{t.lab.highlights}</p>
              <ul className="proj__contrib">
                {c.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>

            <div className="proj__meta-row">
              <div className="proj__block">
                <p className="meta proj__label">{t.project.stack}</p>
                <p className="proj__stack">{c.stack.join(' · ')}</p>
              </div>
              <div className="proj__block proj__block--cta">
                <a
                  className="link proj__cta"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {cta} <span className="arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
