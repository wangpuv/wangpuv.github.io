import { useEffect, useState } from 'react'

/**
 * Section rail for a lesson. A hairline with a short accent segment marking
 * the section you are in, rather than a filled block: the page is a reading
 * surface, and the rail should stay quieter than the prose beside it.
 *
 * `ready` flips once the article HTML is in the DOM — the headings do not
 * exist before that, so the listener has nothing to measure.
 */
export default function LessonToc({ toc, label, ready }) {
  const [active, setActive] = useState(toc[0]?.id)

  useEffect(() => {
    if (!ready || toc.length === 0) return undefined

    const headings = toc
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)
    if (headings.length === 0) return undefined

    let frame
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        // The heading last crossed above the sticky nav is the one being read.
        let current = headings[0].id
        for (const heading of headings) {
          if (heading.getBoundingClientRect().top > 120) break
          current = heading.id
        }
        setActive(current)
      })
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [toc, ready])

  if (toc.length === 0) return null

  return (
    <nav className="lesson-toc" aria-label={label}>
      <p className="lesson-toc__label meta">{label}</p>
      <ol className="lesson-toc__list">
        {toc.map(({ id, text }) => (
          <li key={id} className={`lesson-toc__item${active === id ? ' is-active' : ''}`}>
            <a href={`#${id}`} aria-current={active === id ? 'true' : undefined}>
              {text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
