import { projects } from '../data/projects'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'

export default function Work() {
  return (
    <section className="section page-top">
      <div className="wrap">
        <Reveal className="page-head">
          <p className="eyebrow">Work</p>
          <h1 className="display page-title">Selected projects, 2020 — 2025.</h1>
          <p className="lead">
            A mix of shipped products, design systems, and side projects. Each one taught me
            something I still use today.
          </p>
        </Reveal>

        <div className="work-list work-list--full">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
