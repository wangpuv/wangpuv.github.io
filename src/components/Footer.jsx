import { Link } from 'react-router-dom'
import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="wrap">
        <hr className="rule" />
        <div className="footer__grid">
          <div className="footer__lead">
            <p className="eyebrow">Get in touch</p>
            <Link to="/contact" className="footer__cta display">
              Let’s work together
              <span className="arrow" aria-hidden="true"> →</span>
            </Link>
          </div>

          <nav className="footer__cols" aria-label="Footer">
            <div>
              <p className="meta footer__col-title">Sitemap</p>
              <ul className="footer__list">
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link className="link" to="/work">Work</Link></li>
                <li><Link className="link" to="/about">About</Link></li>
                <li><Link className="link" to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="meta footer__col-title">Elsewhere</p>
              <ul className="footer__list">
                {profile.social.map((s) => (
                  <li key={s.label}>
                    <a className="link" href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer__base">
          <span className="meta">© {year} {profile.name}</span>
          <span className="meta">{profile.location}</span>
        </div>
      </div>
    </footer>
  )
}
