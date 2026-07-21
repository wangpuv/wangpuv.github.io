import { Link } from 'react-router-dom'
import { littleStepsCase } from '../data/littleSteps'
import { useLanguage } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'

function CaseSection({ id, title, intro, children, className = '' }) {
  return (
    <section id={id} className={`case-study__section ${className}`.trim()}>
      <Reveal className="case-study__section-head">
        <p className="meta case-study__section-index">{id}</p>
        <h2 className="display">{title}</h2>
        {intro && <p className="lead">{intro}</p>}
      </Reveal>
      {children}
    </section>
  )
}

export default function LittleSteps() {
  const { lang, localizePath } = useLanguage()
  const c = littleStepsCase[lang]

  return (
    <article className="case-study page-top">
      <header className="case-study__hero">
        <div className="wrap case-study__hero-grid">
          <Reveal>
            <p className="eyebrow">{c.meta.eyebrow}</p>
            <h1 className="display case-study__title">{c.meta.title}</h1>
            <p className="case-study__subtitle">{c.meta.subtitle}</p>
            <p className="lead case-study__intro">{c.intro}</p>
            <div className="case-study__meta">
              <span className="status-pill status-pill--progress">{c.meta.status}</span>
              <span className="meta">{c.meta.updated}</span>
            </div>
          </Reveal>
          <Reveal className="case-study__hero-card" delay={80}>
            <p className="meta">CASE / 01</p>
            <dl>
              {c.facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
            </dl>
          </Reveal>
        </div>
      </header>

      <div className="wrap case-study__body">
        <nav className="case-study__toc" aria-label="Case study sections">
          {[c.problem.title, c.solution.title, c.whyAgent.title, c.architecture.title, c.state.title, c.tools.title, c.safety.title, c.reliability.title, c.progress.title, c.next.title, c.demo.title, c.contribution.title].map((label, index) => (
            <a key={label} href={`#${String(index + 1).padStart(2, '0')}`}>{String(index + 1).padStart(2, '0')} {label}</a>
          ))}
        </nav>

        <CaseSection id="01" title={c.problem.title} intro={c.problem.body}>
          <Reveal as="ul" className="case-study__point-grid">
            {c.problem.points.map((point, index) => <li key={point}><span>0{index + 1}</span><p>{point}</p></li>)}
          </Reveal>
        </CaseSection>

        <CaseSection id="02" title={c.solution.title} intro={c.solution.body}>
          <Reveal className="case-study__stage-grid">
            {c.solution.stages.map(([title, body], index) => <div key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></div>)}
          </Reveal>
          <Reveal as="figure" className="case-study__diagram">
            <img src={littleStepsCase.shared.diagrams.flow} alt={lang === 'zh' ? '小步学习伙伴错题驱动学习闭环图' : 'Little Step wrong-question-driven learning loop'} />
          </Reveal>
        </CaseSection>

        <CaseSection id="03" title={c.whyAgent.title} intro={c.whyAgent.body}>
          <Reveal className="case-study__comparison">
            {c.whyAgent.comparisons.map(([name, ...items]) => <div key={name}><h3>{name}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}
          </Reveal>
        </CaseSection>

        <CaseSection id="04" title={c.architecture.title} intro={c.architecture.body}>
          <Reveal as="figure" className="case-study__diagram case-study__diagram--wide">
            <img src={littleStepsCase.shared.diagrams.architecture} alt={lang === 'zh' ? '小步学习伙伴技术架构图' : 'Little Step technical architecture'} />
          </Reveal>
        </CaseSection>

        <CaseSection id="05" title={c.state.title} intro={c.state.body}>
          <Reveal className="case-study__layer-list">
            {c.state.layers.map(([name, body], index) => <div key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{body}</p></div>)}
          </Reveal>
        </CaseSection>

        <CaseSection id="06" title={c.tools.title} intro={c.tools.body}>
          <Reveal as="ul" className="case-study__tools">
            {c.tools.names.map((name) => <li key={name}><code>{name}</code></li>)}
          </Reveal>
        </CaseSection>

        <CaseSection id="07" title={c.safety.title}>
          <Reveal className="case-study__safety-grid">
            {c.safety.items.map(([name, body], index) => <div key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{body}</p></div>)}
          </Reveal>
        </CaseSection>

        <CaseSection id="08" title={c.reliability.title} intro={c.reliability.body}>
          <Reveal as="dl" className="case-study__reliability">
            {c.reliability.items.map(([name, body]) => <div key={name}><dt>{name}</dt><dd>{body}</dd></div>)}
          </Reveal>
        </CaseSection>

        <CaseSection id="09" title={c.progress.title}>
          <Reveal className="case-study__progress">
            {c.progress.columns.map((column, index) => <div key={column.status} className={`case-study__progress-column case-study__progress-column--${index}`}><h3>{column.status}</h3><ul>{column.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}
          </Reveal>
        </CaseSection>

        <CaseSection id="10" title={c.next.title}>
          <Reveal as="ol" className="case-study__next">
            {c.next.items.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></li>)}
          </Reveal>
        </CaseSection>

        <CaseSection id="11" title={c.demo.title} intro={c.demo.body} className="case-study__todo-section">
          <Reveal className="case-study__todo"><span>TODO</span><p>{c.demo.todo}</p></Reveal>
        </CaseSection>

        <CaseSection id="12" title={c.contribution.title} intro={c.contribution.body} />

        <Reveal className="case-study__actions">
          <Link className="btn btn--ghost" to={localizePath('/')}>← {c.cta.back}</Link>
          <Link className="btn btn--outline" to={localizePath('/work')}>{c.cta.work}</Link>
          <Link className="btn btn--primary" to={localizePath('/contact')}>{c.cta.contact}</Link>
          <span className="btn btn--ghost is-disabled" aria-disabled="true">{c.cta.demo}</span>
        </Reveal>
      </div>
    </article>
  )
}
