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
      {/* SVG wrapped in a span: older iOS Safari fails to render an inline SVG
          placed directly inside a <button>. */}
      <span className="theme-toggle__icon" aria-hidden="true">
        {isDark ? (
          // sun — filled so it renders reliably on older WebKit
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="4.5" />
            <g>
              <rect x="11.1" y="1" width="1.8" height="3.8" rx="0.9" />
              <rect x="11.1" y="1" width="1.8" height="3.8" rx="0.9" transform="rotate(45 12 12)" />
              <rect x="11.1" y="1" width="1.8" height="3.8" rx="0.9" transform="rotate(90 12 12)" />
              <rect x="11.1" y="1" width="1.8" height="3.8" rx="0.9" transform="rotate(135 12 12)" />
              <rect x="11.1" y="1" width="1.8" height="3.8" rx="0.9" transform="rotate(180 12 12)" />
              <rect x="11.1" y="1" width="1.8" height="3.8" rx="0.9" transform="rotate(225 12 12)" />
              <rect x="11.1" y="1" width="1.8" height="3.8" rx="0.9" transform="rotate(270 12 12)" />
              <rect x="11.1" y="1" width="1.8" height="3.8" rx="0.9" transform="rotate(315 12 12)" />
            </g>
          </svg>
        ) : (
          // moon — filled crescent
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
          </svg>
        )}
      </span>
    </button>
  )
}
