import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import { homeContent } from '../data/home'
import { ui } from '../i18n/strings'
import { useLanguage } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'
import { copyEmail } from '../lib/contact'

function SectionHead({ eyebrow, title, lead }) {
  return (
    <Reveal className="section__head home-section__head">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display section__title">{title}</h2>
      {lead && <p className="lead home-section__lead">{lead}</p>}
    </Reveal>
  )
}

function PendingButton({ children }) {
  return (
    <span className="btn btn--ghost is-disabled" aria-disabled="true" title="TODO">
      {children}
    </span>
  )
}

export default function Home() {
  const { lang, localizePath } = useLanguage()
  const t = ui[lang]
  const content = homeContent[lang]
  const email = profile.social.find((item) => item.label === 'Email')

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <p className="eyebrow hero__eyebrow hero-line" style={{ '--i': 0 }}>
              {content.hero.eyebrow}
            </p>
            <h1 id="hero-title" className="display hero__title hero-line" style={{ '--i': 1 }}>
              {content.hero.title}
            </h1>
            <p className="lead hero__intro hero-line" style={{ '--i': 2 }}>
              {content.hero.intro}
            </p>
            <ul className="hero__badges hero-line" style={{ '--i': 3 }} aria-label={t.home.quickFacts}>
              {content.hero.badges.map((badge) => <li key={badge}>{badge}</li>)}
            </ul>
            <div className="hero__actions hero-line" style={{ '--i': 4 }}>
              <Link to={localizePath('/projects/little-steps')} className="btn btn--primary">
                {t.heroCta.littleSteps} <span className="arrow" aria-hidden="true">→</span>
              </Link>
              <Link to={localizePath('/work')} className="btn btn--outline">{t.heroCta.work}</Link>
              {homeContent.resume.available ? (
                <a className="btn btn--ghost" href={homeContent.resume.href} download>
                  {t.heroCta.resume}
                </a>
              ) : (
                <PendingButton>{t.heroCta.resumePending}</PendingButton>
              )}
            </div>
          </div>

          <Reveal className="hero-proof" delay={80}>
            <div className="hero-proof__top">
              <div>
                <p className="meta">{t.home.buildingNow}</p>
                <p className="display hero-proof__name">{content.featured.title}</p>
              </div>
              <span className="status-pill status-pill--progress">{content.featured.eyebrow.split('·').at(-1).trim()}</span>
            </div>
            <div className="hero-proof__flow" aria-label={t.home.productFlow}>
              <div><span>01</span><strong>{t.home.flowInput}</strong></div>
              <div><span>02</span><strong>{t.home.flowDiagnose}</strong></div>
              <div><span>03</span><strong>{t.home.flowLearn}</strong></div>
              <div><span>04</span><strong>{t.home.flowResume}</strong></div>
            </div>
            <div className="hero-proof__terminal" aria-hidden="true">
              <span>agent.runtime</span>
              <p><i /> tool_call → record_diagnosis</p>
              <p><i /> state → confirmed</p>
              <p><i /> digest → profile + plan</p>
            </div>
            <p className="meta hero-proof__note">{content.featured.prototypeNote}</p>
          </Reveal>
        </div>
      </section>

      <section className="section home-section" id="capabilities">
        <div className="wrap">
          <SectionHead eyebrow={content.capabilities.eyebrow} title={content.capabilities.title} />
          <div className="capability-grid">
            {content.capabilities.items.map((item, index) => (
              <Reveal key={item.title} className="capability-card" delay={index * 60}>
                <span className="meta capability-card__index">{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-section featured-case" id="little-steps">
        <div className="wrap">
          <SectionHead eyebrow={content.featured.eyebrow} title={content.featured.title} lead={content.featured.lead} />

          <div className="featured-case__grid">
            <Reveal className="featured-case__story">
              {[
                [content.featured.problemLabel, content.featured.problem],
                [content.featured.usersLabel, content.featured.users],
                [content.featured.responsibilityLabel, content.featured.responsibility],
                [content.featured.statusLabel, content.featured.status],
              ].map(([label, body]) => (
                <div className="case-fact" key={label}>
                  <p className="meta case-fact__label">{label}</p>
                  <p>{body}</p>
                </div>
              ))}
            </Reveal>

            <Reveal className="featured-case__status" delay={80}>
              <div className="status-list">
                {content.featured.progress.map((item, index) => (
                  <div key={item.label} className="status-row">
                    <span className={`status-dot status-dot--${index}`} aria-hidden="true" />
                    <div>
                      <strong>{item.label}</strong>
                      <p>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <dl className="evidence-list">
                {content.featured.evidence.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal className="case-challenges">
            <h3 className="display">{content.featured.challengesTitle}</h3>
            <ol>
              {content.featured.challenges.map((challenge, index) => (
                <li key={challenge}><span>0{index + 1}</span><p>{challenge}</p></li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="case-actions">
            <Link to={localizePath('/projects/little-steps')} className="btn btn--primary">{t.home.caseComingSoon}</Link>
            <PendingButton>{t.home.demoPending}</PendingButton>
          </Reveal>
        </div>
      </section>

      <section className="section home-section" id="experience">
        <div className="wrap">
          <SectionHead eyebrow={content.experience.eyebrow} title={content.experience.title} />
          <div className="experience-list">
            {content.experience.items.map((item, index) => (
              <Reveal as="article" className="experience-case" key={item.title} delay={index * 60}>
                <div className="experience-case__head">
                  <span className="meta">0{index + 1}</span>
                  <h3 className="display">{item.title}</h3>
                </div>
                <dl>
                  <div><dt>{t.home.caseContext}</dt><dd>{item.context}</dd></div>
                  <div><dt>{t.home.caseComplexity}</dt><dd>{item.complexity}</dd></div>
                  <div><dt>{t.home.caseAction}</dt><dd>{item.action}</dd></div>
                  <div className="experience-case__result"><dt>{t.home.caseResult}</dt><dd>{item.result}</dd></div>
                </dl>
              </Reveal>
            ))}
          </div>
          <Reveal className="section__more"><Link to={localizePath('/work')} className="link">{t.home.allProjects}</Link></Reveal>
        </div>
      </section>

      <section className="section home-section skills-section" id="skills">
        <div className="wrap">
          <SectionHead eyebrow={content.skills.eyebrow} title={content.skills.title} />
          <div className="skill-matrix">
            {content.skills.groups.map((group, index) => (
              <Reveal className="skill-group" key={group.title} delay={index * 50}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <span>{item.name}</span>
                      <em className={`skill-level skill-level--${item.level}`}>{content.skills.levels[item.level]}</em>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-section opportunity" id="opportunity">
        <div className="wrap opportunity__grid">
          <Reveal>
            <p className="eyebrow">{content.opportunity.eyebrow}</p>
            <h2 className="display opportunity__title">{content.opportunity.title}</h2>
          </Reveal>
          <Reveal delay={60}>
            <p className="lead">{content.opportunity.body}</p>
            <ul className="role-tags">
              {content.opportunity.roles.map((role) => <li key={role}>{role}</li>)}
            </ul>
            <ul className="availability-list">
              {content.opportunity.availability.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section home-section home-contact" id="contact">
        <div className="wrap home-contact__grid">
          <Reveal>
            <p className="eyebrow">{content.contact.eyebrow}</p>
            <h2 className="display home-contact__title">{content.contact.title}</h2>
          </Reveal>
          <Reveal className="home-contact__actions" delay={60}>
            {email && (
              <button type="button" className="btn btn--primary" onClick={() => copyEmail(email.display, t.emailCopied)}>
                {t.home.copyEmail}
              </button>
            )}
            <a className="btn btn--outline" href={profile.social.find((item) => item.label === 'GitHub')?.href} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <PendingButton>{t.heroCta.resumePending}</PendingButton>
            <p className="meta home-contact__note">{content.contact.note}</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
