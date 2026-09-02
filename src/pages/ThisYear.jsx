import { Link } from 'react-router'
import Reveal from '../components/Reveal'
import { thisyear } from '../data/thisyear'
import { useLanguage } from '../i18n/LanguageContext'

export default function ThisYear() {
  const { lang } = useLanguage()
  const content = thisyear[lang]

  return (
    <article className="section page-top thisyear">
      <div className="wrap">
        <Reveal className="page-head thisyear__head">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 className="display page-title">{content.title}</h1>
        </Reveal>

        <div className="thisyear__body stack">
          {content.sections.map((section, si) => (
            <Reveal key={si} className="thisyear__section" delay={si * 40}>
              {section.paragraphs.map((para, pi) => (
                <p key={pi}>{para}</p>
              ))}
            </Reveal>
          ))}
        </div>

        <Reveal>
          <hr className="rule thisyear__sep" />
        </Reveal>

        <Reveal className="thisyear__closing">
          <p>{content.closing}</p>
        </Reveal>

        <Reveal className="thisyear__back" delay={40}>
          <Link className="link" to="/">
            <span aria-hidden="true">←</span> {content.backLabel}
          </Link>
        </Reveal>
      </div>
    </article>
  )
}
