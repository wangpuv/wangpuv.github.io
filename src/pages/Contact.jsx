import { profile } from '../data/profile'
import Reveal from '../components/Reveal'

export default function Contact() {
  const email = profile.social.find((s) => s.label === 'Email')

  return (
    <section className="section page-top contact">
      <div className="wrap">
        <Reveal className="page-head">
          <p className="eyebrow">Contact</p>
          <h1 className="display contact__title">
            Have a project in mind?<br />Let’s talk.
          </h1>
          <p className="lead">
            I’m open to freelance work, collaborations, and the occasional good conversation.
            The fastest way to reach me is by email.
          </p>
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
                    <span className="meta">{s.label}</span>
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
