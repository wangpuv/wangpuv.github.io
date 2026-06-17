import { profile } from '../data/profile'
import Reveal from '../components/Reveal'

export default function About() {
  return (
    <section className="section page-top">
      <div className="wrap">
        <Reveal className="page-head">
          <p className="eyebrow">About</p>
          <h1 className="display page-title">{profile.name}, {profile.role.toLowerCase()}.</h1>
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__bio stack">
            {profile.about.map((para, i) => (
              <p key={i} className={i === 0 ? 'lead' : ''}>{para}</p>
            ))}
          </Reveal>

          <Reveal className="about__skills" delay={80}>
            {profile.skills.map((s) => (
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
          <p className="eyebrow">Experience</p>
        </Reveal>
        <ol className="timeline">
          {profile.experience.map((e, i) => (
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
