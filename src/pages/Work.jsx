import { projects } from '../data/projects'
import { ui } from '../i18n/strings'
import { useLanguage } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'

export default function Work() {
  const { lang } = useLanguage()
  const t = ui[lang]

  return (
    <section className="section page-top">
      <div className="wrap">
        <Reveal className="page-head">
          <p className="eyebrow">{t.work.eyebrow}</p>
          <h1 className="display page-title">{t.work.title}</h1>
          <p className="lead">{t.work.lead}</p>
        </Reveal>

        <div className="work-list work-list--full">
          {projects.map((proj, i) => (
            <Reveal key={proj.slug} delay={i * 70}>
              <ProjectCard project={proj} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
