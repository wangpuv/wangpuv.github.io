import { labs } from '../data/labs'
import { ui } from '../i18n/strings'
import { useLanguage } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'
import LabItem from '../components/LabItem'

export default function Lab() {
  const { lang } = useLanguage()
  const t = ui[lang]

  return (
    <section className="section page-top work-page">
      <div className="wrap">
        <Reveal className="page-head">
          <p className="eyebrow">{t.lab.eyebrow}</p>
          <h1 className="display page-title">{t.lab.title}</h1>
          <p className="lead">{t.lab.lead}</p>
        </Reveal>

        <div className="work-list work-list--full">
          {labs.map((item, i) => (
            <Reveal key={item.slug} delay={i * 70}>
              <LabItem item={item} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
