import { Fragment, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import Reveal from '../components/Reveal'
import AppShots from '../components/AppShots'
import { home } from '../data/home'
import { littlesteps } from '../data/labs'
import { courseMeta, publishedCount } from '../data/course'
import { useLanguage } from '../i18n/LanguageContext'

// Keep the character before Chinese closing punctuation in the same inline
// box. `overflow-wrap: break-word` may ignore Unicode word joiners during an
// emergency wrap, while an explicit nowrap pair remains reliable.
function PunctuationSafeText({ text }) {
  return text.split(/(.[，。！？；：、）》】”’]+)/g).map((chunk, index) => (
    /[，。！？；：、）》】”’]+$/.test(chunk)
      ? <span className="home-punctuation" key={index}>{chunk}</span>
      : chunk
  ))
}

// A `nowrap` segment carries no break opportunity of its own, and two of them
// sit flush against each other in the DOM. Blink happens to break at that
// element boundary; WebKit does not, so on Safari the whole headline stayed on
// one line and everything past the viewport was cut off by `overflow: clip`.
// The `<wbr>` lives in the heading's own normal-wrapping context, which both
// engines honour, and it restores exactly the break points the parts describe.
function RichText({ parts }) {
  return parts.map((part, index) => {
    const text = <PunctuationSafeText text={part.text} />
    let piece
    if (part.emphasis) {
      piece = <em className={part.nowrap ? 'home-nowrap' : undefined}>{text}</em>
    } else if (part.nowrap) {
      piece = <span className="home-nowrap">{text}</span>
    } else {
      piece = <span>{text}</span>
    }

    return (
      <Fragment key={index}>
        {index > 0 && <wbr />}
        {piece}
      </Fragment>
    )
  })
}

function SectionMarker({ number, label }) {
  return (
    <div className="home-marker">
      <span className="home-marker__num" aria-hidden="true">{number}</span>
      <span className="home-marker__rule" aria-hidden="true" />
      <span className="home-marker__label">{label}</span>
    </div>
  )
}

function HomeProjectLink({ children, target, ...props }) {
  if (target.startsWith('http')) {
    return (
      <a href={target} target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    )
  }

  return <Link to={target} {...props}>{children}</Link>
}

function useCompactDecisions() {
  const [isCompact, setIsCompact] = useState(
    () => typeof window !== 'undefined'
      && window.matchMedia('(max-width: 640px)').matches,
  )

  useEffect(() => {
    const media = window.matchMedia('(max-width: 640px)')
    const sync = () => setIsCompact(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  return isCompact
}

function DecisionDetails({ decision, index, choiceLabel, whyLabel, collapsible }) {
  const number = String(index + 1).padStart(2, '0')
  const explanation = (
    <dl>
      <div>
        <dt>{choiceLabel}</dt>
        <dd>{decision.choice}</dd>
      </div>
      <div>
        <dt>{whyLabel}</dt>
        <dd>{decision.why}</dd>
      </div>
    </dl>
  )

  if (collapsible) {
    return (
      <details className="home-decision home-decision--collapsible">
        <summary className="home-decision__summary">
          <span className="home-decision__index" aria-hidden="true">{number}</span>
          <h4>{decision.question}</h4>
          <span className="home-decision__toggle" aria-hidden="true" />
        </summary>
        {explanation}
      </details>
    )
  }

  return (
    <section className="home-decision">
      <span className="home-decision__index" aria-hidden="true">{number}</span>
      <h4>{decision.question}</h4>
      {explanation}
    </section>
  )
}

export default function Home() {
  const { lang } = useLanguage()
  const content = home[lang]
  const heroLightboxRef = useRef(null)
  const compactDecisions = useCompactDecisions()
  // The three screens that carry the most product signal; the rewards screen
  // is nearly empty by design, so it stays for the full gallery on /lab.
  const homeShots = ['today', 'achievements', 'manage']
    .map((key) => littlesteps.shots.find((shot) => shot.key === key))

  const projectTargets = {
    littleStep: home.links.littleStepRepo,
    aiComparison: home.links.aiComparison,
    acl: home.links.acl,
  }

  return (
    <div className="recruit-home">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="wrap home-hero__grid">
          <p className="eyebrow home-hero__eyebrow">{content.hero.eyebrow}</p>
          <h1 className="home-hero__title" id="home-title">
            <RichText parts={content.hero.title} />
          </h1>

          <div className="home-hero__copy">
            <p className="home-hero__lead">{content.hero.lead}</p>

            <div className="home-actions">
              <a
                className="btn btn--primary"
                href={home.links.resume}
                download="wangpu-resume.pdf"
              >
                {content.hero.actions.resume}
                <span className="arrow arrow--down" aria-hidden="true">↓</span>
              </a>
              <Link className="btn btn--outline" to={home.links.contact}>
                {content.hero.actions.contact}
              </Link>
            </div>

            <p className="home-status">
              <span className="home-status__dot" aria-hidden="true" />
              <span>{content.hero.status}</span>
            </p>
          </div>

          <ul className="home-hero__proof">
            {content.hero.proof.map((item) => (
              <li key={item.label}>
                <span className="home-hero__proof-value">{item.value}</span>
                <span className="home-hero__proof-label">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home-section" id="year" aria-labelledby="year-title">
        <div className="wrap">
          <Reveal>
            <SectionMarker number="01" label={content.year.marker} />
          </Reveal>

          <Reveal as="header" className="home-agent-origin">
            <div>
              <p className="eyebrow">{content.year.eyebrow}</p>
              <h2 className="home-heading" id="year-title">
                <PunctuationSafeText text={content.year.title} />
              </h2>
            </div>
            <div className="home-agent-origin__copy">
              {content.year.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="home-agent-origin__aside">
                <Link className="link home-gap-link" to={home.links.thisYear}>
                  {content.year.link}
                  <span className="arrow" aria-hidden="true"> →</span>
                </Link>
              </p>
            </div>
          </Reveal>

          <Reveal as="aside" className="home-shipped" aria-labelledby="shipped-title">
            <div className="home-shipped__label">
              <span>{content.year.shipped.eyebrow}</span>
              <span>{content.year.shipped.store}</span>
            </div>

            <div className="home-shipped__grid">
              <div className="home-shipped__copy">
                <div className="home-shipped__id">
                  <img
                    className="home-shipped__icon"
                    src={littlesteps.icon}
                    alt=""
                    width="128"
                    height="128"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="home-shipped__title" id="shipped-title">
                      {content.year.shipped.title}
                    </h3>
                    <p className="home-shipped__subtitle">
                      {content.year.shipped.subtitle}
                    </p>
                  </div>
                </div>

                <p className="home-shipped__body">{content.year.shipped.body}</p>

                <dl className="home-definitions home-shipped__facts">
                  {content.year.shipped.facts.map((fact) => (
                    <div className="home-definitions__row" key={fact.label}>
                      <dt>{fact.label}</dt>
                      <dd>{fact.value}</dd>
                    </div>
                  ))}
                </dl>

              </div>

              <AppShots
                className="shots--home"
                shots={homeShots}
                labels={littlesteps[lang].shots}
                appName={littlesteps[lang].title}
                label={content.year.shipped.galleryLabel}
              />

              <a
                className="link home-shipped__cta"
                href={littlesteps.link}
                target="_blank"
                rel="noreferrer"
              >
                {content.year.shipped.cta}
                <span className="arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>

          <Reveal as="p" className="home-handoff">{content.year.handoff}</Reveal>
        </div>
      </section>

      <section
        className="home-section"
        id="flagship"
        aria-labelledby="flagship-title"
      >
        <div className="wrap">
          <Reveal>
            <SectionMarker number="02" label={content.flagship.marker} />
          </Reveal>

          <div className="home-agent-problem-grid">
            <Reveal as="article" className="home-agent-problem">
              <p className="eyebrow">{content.flagship.problemEyebrow}</p>
              <h2 className="home-agent-problem__heading" id="flagship-title">
                <PunctuationSafeText text={content.flagship.problemTitle} />
              </h2>
              <p className="home-agent-problem__body">{content.flagship.problemBody}</p>
            </Reveal>

            <Reveal>
              <figure className="home-plate">
                <div className="home-plate__label">
                  <span>{content.flagship.product.label}</span>
                  <span>{content.flagship.product.kind}</span>
                </div>
                <div className="home-plate__intro">
                  <p className="home-plate__title">{content.flagship.product.title}</p>
                  <p className="home-plate__description">
                    {content.flagship.product.description}
                  </p>
                </div>
                <button
                  className="home-plate__frame home-plate__open"
                  type="button"
                  aria-label={content.flagship.product.zoomLabel}
                  onClick={() => heroLightboxRef.current?.showModal()}
                >
                  <img
                    src={home.assets.today}
                    alt={content.flagship.product.alt}
                    width="1440"
                    height="900"
                    loading="lazy"
                  />
                </button>
                <figcaption className="home-plate__caption">
                  <span className="home-chips">
                    {content.flagship.product.chips.map((chip) => (
                      <span
                        className={`home-chip ${chip.agent ? 'home-chip--agent' : ''}`}
                        key={chip.text}
                      >
                        {chip.text}
                      </span>
                    ))}
                  </span>
                </figcaption>

                <dialog
                  className="home-lightbox"
                  ref={heroLightboxRef}
                  aria-label={content.flagship.product.title}
                  onClick={(event) => {
                    if (event.target === event.currentTarget) event.currentTarget.close()
                  }}
                >
                  <div className="home-lightbox__panel">
                    <p className="home-lightbox__title">
                      {content.flagship.product.title}
                    </p>
                    <button
                      className="home-lightbox__close"
                      type="button"
                      aria-label={content.flagship.product.closeLabel}
                      onClick={() => heroLightboxRef.current?.close()}
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                    <div className="home-lightbox__media">
                      <img
                        src={home.assets.today}
                        alt={content.flagship.product.alt}
                        width="1440"
                        height="900"
                      />
                    </div>
                  </div>
                </dialog>
              </figure>
            </Reveal>
          </div>

          <Reveal as="header" className="home-agent-principle">
            <p className="eyebrow">{content.flagship.principleEyebrow}</p>
            <div className="home-flag-head">
              <h3 className="home-heading">
                <RichText parts={content.flagship.title} />
              </h3>
              <p className="home-lead">{content.flagship.lead}</p>
            </div>
          </Reveal>

          <div className="home-flag-grid">
            <Reveal>
              <figure className="home-flag-media">
                <div className="home-flag-media__frame">
                  <img
                    src={home.assets.session}
                    alt={content.flagship.mediaAlt}
                    width="1440"
                    height="900"
                    loading="lazy"
                  />
                </div>
                <figcaption className="home-flag-media__caption">
                  {content.flagship.mediaCaption}
                </figcaption>
              </figure>
            </Reveal>

            <Reveal as="article" className="home-flag-copy" delay={60}>
              <p className="home-flag-copy__name">{content.flagship.name}</p>
              <h3 className="home-flag-copy__heading">
                <PunctuationSafeText text={content.flagship.heading} />
              </h3>
              <p className="home-flag-copy__body">{content.flagship.body}</p>

              <dl className="home-definitions">
                {content.flagship.definitions.map((item) => (
                  <div className="home-definitions__row" key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>

              <a
                className="link home-flag-copy__cta"
                href={home.links.littleStepRepo}
                target="_blank"
                rel="noreferrer"
              >
                {content.flagship.repoCta}
                <span className="arrow" aria-hidden="true"> →</span>
              </a>
            </Reveal>
          </div>

          <Reveal className="home-agent-proof">
            <p className="eyebrow">{content.flagship.capabilitiesEyebrow}</p>
            <ol className="home-agent-proof__grid">
              {content.flagship.capabilities.map((capability, index) => (
                <li className="home-agent-proof__item" key={capability.title}>
                  <span className="home-agent-proof__index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3>{capability.title}</h3>
                  <p>{capability.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="home-section" id="bridge" aria-labelledby="bridge-title">
        <div className="wrap">
          <Reveal>
            <SectionMarker number="03" label={content.bridge.marker} />
          </Reveal>

          <div className="home-bridge-grid">
            <Reveal as="header" className="home-section-head home-bridge-head">
              <h2 className="home-heading" id="bridge-title">
                <PunctuationSafeText text={content.bridge.title} />
              </h2>
              <p className="home-lead">{content.bridge.support}</p>
            </Reveal>

            <Reveal as="ol" className="home-capabilities">
              {content.bridge.capabilities.map((capability, index) => (
                <li className="home-capability" key={capability.title}>
                  <span className="home-capability__index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3>{capability.title}</h3>
                  <p>{capability.body}</p>
                </li>
              ))}
            </Reveal>
          </div>

          <Reveal as="p" className="home-ledger-intro">
            {content.bridge.ledgerLead}
          </Reveal>

          <Reveal>
            <dl className="home-ledger" aria-label={content.bridge.ledgerLabel}>
              {content.bridge.metrics.map((metric) => (
                <div className="home-ledger__row" key={metric.value}>
                  <dt className="home-ledger__value">{metric.value}</dt>
                  <dd className="home-ledger__label">{metric.label}</dd>
                  <dd className="home-ledger__note">{metric.note}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal as="p" className="home-ledger-close">
            {content.bridge.close}
          </Reveal>
        </div>
      </section>

      <section className="home-section" id="proof" aria-labelledby="proof-title">
        <div className="wrap">
          <Reveal>
            <SectionMarker number="04" label={content.proof.marker} />
          </Reveal>

          <Reveal as="header" className="home-section-head home-proof-head">
            <h2 className="home-heading" id="proof-title">
              <PunctuationSafeText text={content.proof.title} />
            </h2>
            <p className="home-lead">{content.proof.lead}</p>
          </Reveal>

          <Reveal className="home-projects">
            {content.proof.projects.map((project, index) => (
              <HomeProjectLink
                className="home-project"
                target={projectTargets[project.key]}
                aria-label={`${content.proof.projectLabel}: ${project.name}`}
                key={project.key}
              >
                <span className="home-project__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="home-project__main">
                  <span className="home-project__name">{project.name}</span>
                  <span className="home-project__role">{project.role}</span>
                </span>
                <span className="home-project__evidence">
                  <span>
                    <span className="home-project__label">{content.proof.problemLabel}</span>
                    {project.problem}
                  </span>
                  <span>
                    <span className="home-project__label">{content.proof.decisionLabel}</span>
                    {project.decision}
                  </span>
                </span>
                <span className="home-project__result">{project.result}</span>
                <span className="home-project__arrow" aria-hidden="true">→</span>
              </HomeProjectLink>
            ))}
          </Reveal>

          <Reveal className="home-workflow-marker">
            <SectionMarker number="05" label={content.proof.workflow.marker} />
          </Reveal>

          <Reveal as="article" className="home-workflow">
            <div className="home-workflow__intro">
              <h3 className="home-workflow__heading">
                <PunctuationSafeText text={content.proof.workflow.heading} />
              </h3>
              <p className="home-workflow__quote">{content.proof.workflow.quote}</p>
              <p className="home-workflow__body">{content.proof.workflow.body}</p>

              <ol className="home-steps" aria-label={content.proof.workflow.label}>
                {content.proof.workflow.steps.map((step, index) => (
                  <li className="home-step" key={step}>
                    <span className="home-step__index" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="home-decisions">
              <p className="eyebrow">{content.proof.workflow.decisionEyebrow}</p>
              {content.proof.workflow.decisions.map((decision, index) => (
                <DecisionDetails
                  choiceLabel={content.proof.workflow.choiceLabel}
                  collapsible={compactDecisions}
                  decision={decision}
                  index={index}
                  key={decision.question}
                  whyLabel={content.proof.workflow.whyLabel}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-section home-closing" id="current" aria-labelledby="current-title">
        <div className="wrap">
          <Reveal as="article" className="home-contact">
            <p className="eyebrow">{content.closing.eyebrow}</p>
            <h2 className="home-contact__heading" id="current-title">
              <PunctuationSafeText text={content.closing.title} />
            </h2>
            <p className="home-contact__body">{content.closing.body}</p>
            <div className="home-actions">
              <Link className="btn btn--primary" to={home.links.contact}>
                {content.closing.contact}
                <span className="arrow" aria-hidden="true">→</span>
              </Link>
              <a className="btn btn--outline" href={home.links.resume} download="wangpu-resume.pdf">
                {content.closing.resume}
              </a>
            </div>
            <p className="home-writing">
              {content.closing.writing
                .replace('{n}', publishedCount)
                .replace('{total}', courseMeta.total)}{' '}
              <Link className="link home-writing__cta" to="/claude-code">
                {content.closing.writingCta}
                <span className="arrow" aria-hidden="true"> →</span>
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
