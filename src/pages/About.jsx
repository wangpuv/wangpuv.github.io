import { profile } from '../data/profile'
import { ui } from '../i18n/strings'
import { useLanguage } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'

export default function About() {
  const { lang } = useLanguage()
  const t = ui[lang]
  const p = profile[lang]

  const title = p.aboutTitle

  return (
    <section className="section page-top about">
      <div className="wrap">
        <Reveal className="page-head">
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h1 className="display page-title">{title}</h1>
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__bio stack">
            {p.about.map((para, i) => (
              <p key={i} className={i === 0 ? 'lead' : ''}>{para}</p>
            ))}
          </Reveal>

          <Reveal className="about__skills" delay={80}>
            {p.skills.map((s) => (
              <div key={s.group} className="about__skill-group">
                <p className="meta about__skill-title">{s.group}</p>
                <ul className="about__skill-list">
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>

        <hr className="rule about__sep" />

        <Reveal>
          <p className="eyebrow">{t.about.achievements}</p>
        </Reveal>
        <div className="achievement-grid">
          {p.achievements.map((achievement, i) => (
            <Reveal key={`${achievement.metric}-${achievement.label}`} className="achievement" delay={i * 50}>
              <p className="achievement__metric display">{achievement.metric}</p>
              <p className="achievement__label">{achievement.label}</p>
              <p className="muted achievement__detail">{achievement.detail}</p>
            </Reveal>
          ))}
        </div>

        <hr className="rule about__sep" />

        <Reveal>
          <p className="eyebrow">{t.about.experience}</p>
        </Reveal>
        <ol className="timeline">
          {p.experience.map((e, i) => (
            <Reveal as="li" key={i} className="timeline__item" delay={i * 70}>
              <span className="timeline__period meta">{e.period}</span>
              <div className="timeline__body">
                <h3 className="timeline__role display">{e.role}</h3>
                <p className="timeline__org">{e.org}</p>
                <p className="muted">{e.note}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
