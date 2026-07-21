import { useTheme } from '../hooks/useTheme'
import { useLanguage } from '../i18n/LanguageContext'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const { lang } = useLanguage()
  const isDark = theme === 'dark'
  const label = lang === 'zh'
    ? (isDark ? '切换到浅色主题' : '切换到深色主题')
    : (isDark ? 'Switch to light theme' : 'Switch to dark theme')

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
