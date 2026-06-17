import { Link } from 'react-router-dom'
import { ui } from '../i18n/strings'
import { useLanguage } from '../i18n/LanguageContext'

export default function NotFound() {
  const { lang } = useLanguage()
  const t = ui[lang]

  return (
    <section className="section page-top">
      <div className="wrap stack notfound">
        <p className="eyebrow">404</p>
        <h1 className="display page-title">{t.notFound.title}</h1>
        <p className="lead">{t.notFound.lead}</p>
        <Link to="/" className="btn btn--primary">
          {t.notFound.backHome} <span className="arrow" aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}
