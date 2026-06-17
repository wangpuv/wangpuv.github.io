import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import { ui } from '../i18n/strings'
import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { lang } = useLanguage()
  const t = ui[lang]
  const p = profile[lang]
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="wrap">
        <hr className="rule" />
        <div className="footer__grid">
          <div className="footer__lead">
            <p className="eyebrow">{t.footer.getInTouch}</p>
            <Link to="/contact" className="footer__cta display">
              {t.footer.cta}
              <span className="arrow" aria-hidden="true"> →</span>
            </Link>
          </div>

          <nav className="footer__cols" aria-label="Footer">
            <div>
              <p className="meta footer__col-title">{t.footer.sitemap}</p>
              <ul className="footer__list">
                <li><Link className="link" to="/">{t.footer.home}</Link></li>
                <li><Link className="link" to="/work">{t.footer.work}</Link></li>
                <li><Link className="link" to="/about">{t.footer.about}</Link></li>
                <li><Link className="link" to="/contact">{t.footer.contact}</Link></li>
              </ul>
            </div>
            <div>
              <p className="meta footer__col-title">{t.footer.elsewhere}</p>
              <ul className="footer__list">
                {profile.social.map((s) => (
                  <li key={s.label}>
                    <a className="link" href={s.href} target="_blank" rel="noreferrer">
                      {t.social[s.label] || s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer__base">
          <span className="meta">© {year} {p.name}</span>
          <span className="meta">{p.location}</span>
        </div>
      </div>
    </footer>
  )
}
