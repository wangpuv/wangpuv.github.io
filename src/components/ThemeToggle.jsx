import { useTheme } from '../hooks/useTheme'
import { ui } from '../i18n/strings'
import { useLanguage } from '../i18n/LanguageContext'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const { lang } = useLanguage()
  const isDark = theme === 'dark'
  const label = isDark ? ui[lang].a11y.switchToLight : ui[lang].a11y.switchToDark

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={label}
      title={label}
    >
      {/* The icon is drawn with a CSS mask rather than an inline SVG: older
          iOS Safari (16.1) fails to render an inline <svg> here, but mask-image
          renders reliably and still tints with currentColor. */}
      <span
        className={`theme-toggle__icon ${isDark ? 'is-sun' : 'is-moon'}`}
        aria-hidden="true"
      />
    </button>
  )
}
