import { useRef, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { ui } from '../i18n/strings'

// Phone screenshots are the common case, so they keep the default size; a wide
// plate (a desktop screen, a diagram) carries its own, and a shot with no dark
// variant shows the same file in both themes.
const sizeOf = (shot) => ({
  width: shot.width ?? 720,
  height: shot.height ?? 1565,
  dark: shot.dark ?? shot.light,
})

/**
 * Screenshot plates for a shipped app, in the site's editorial "图版" language:
 * a mounting board with a hairline border, the raw screenshot inset, and a
 * numbered caption beneath — no device bezel, no glow. Each plate opens a
 * lightbox at a size where the interface is actually readable.
 *
 * Both theme variants stay in the DOM and are swapped in CSS rather than
 * chosen in JS: `useTheme` is a per-component hook, not shared context, so a
 * second consumer would never re-render on toggle. CSS also keeps the swap
 * instant instead of leaving an empty frame while the other file downloads.
 */
export default function AppShots({ shots, labels, appName, className = '', label }) {
  const { lang } = useLanguage()
  const t = ui[lang].shots
  const dialogRef = useRef(null)
  const [active, setActive] = useState(null)

  const open = (shot) => {
    setActive(shot)
    dialogRef.current?.showModal()
  }

  return (
    <>
      <ol className={`shots${className ? ` ${className}` : ''}`} aria-label={label}>
        {shots.map((shot, index) => {
          const { width, height, dark } = sizeOf(shot)
          return (
            <li className="shots__item" key={shot.key}>
              <button
                type="button"
                className="shots__open"
                aria-label={`${labels[shot.key]} — ${t.zoom}`}
                onClick={() => open(shot)}
              >
                <span className="shots__plate">
                  <img
                    className="shots__img shots__img--light"
                    src={shot.light}
                    alt=""
                    width={width}
                    height={height}
                    style={{ aspectRatio: `${width} / ${height}` }}
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    className="shots__img shots__img--dark"
                    src={dark}
                    alt=""
                    width={width}
                    height={height}
                    style={{ aspectRatio: `${width} / ${height}` }}
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span className="shots__caption">
                  <span className="shots__num" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="shots__label">{labels[shot.key]}</span>
                </span>
              </button>
            </li>
          )
        })}
      </ol>

      <dialog
        className={`shotbox${active && active.width > active.height ? ' shotbox--wide' : ''}`}
        ref={dialogRef}
        aria-label={active ? `${appName} · ${labels[active.key]}` : appName}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close()
        }}
        onClose={() => setActive(null)}
      >
        {active && (
          <div className="shotbox__panel">
            <p className="shotbox__title">
              <span className="shotbox__app">{appName}</span>
              <span className="shotbox__screen">{labels[active.key]}</span>
            </p>
            <button
              className="shotbox__close"
              type="button"
              aria-label={t.close}
              onClick={() => dialogRef.current?.close()}
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="shotbox__media">
              <img
                className="shots__img--light"
                src={active.light}
                alt={`${appName} · ${labels[active.key]}`}
                width={sizeOf(active).width}
                height={sizeOf(active).height}
              />
              <img
                className="shots__img--dark"
                src={sizeOf(active).dark}
                alt=""
                aria-hidden="true"
                width={sizeOf(active).width}
                height={sizeOf(active).height}
              />
            </div>
          </div>
        )}
      </dialog>
    </>
  )
}
