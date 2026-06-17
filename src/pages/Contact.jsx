import { profile } from '../data/profile'
import { ui } from '../i18n/strings'
import { useLanguage } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'

export default function Contact() {
  const { lang } = useLanguage()
  const t = ui[lang]
  const email = profile.social.find((s) => s.label === 'Email')

  return (
    <section className="section page-top contact">
      <div className="wrap">
        <Reveal className="page-head">
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h1 className="display contact__title">
            {t.contact.title[0]}<br />{t.contact.title[1]}
          </h1>
          <p className="lead">{t.contact.lead}</p>
        </Reveal>

        {email && (
          <Reveal delay={60}>
            <a href={email.href} className="contact__email display">
              {email.display}
            </a>
          </Reveal>
        )}

        <Reveal delay={120}>
          <ul className="contact__links">
            {profile.social
              .filter((s) => s.label !== 'Email')
              .map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="contact__link" target="_blank" rel="noreferrer">
                    <span className="meta">{t.social[s.label] || s.label}</span>
                    <span className="link">{s.display}</span>
                  </a>
                </li>
              ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
