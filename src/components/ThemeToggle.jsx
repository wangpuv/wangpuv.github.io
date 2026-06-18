import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Light mode' : 'Dark mode'}
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
