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
      {/* Glyph icon (not SVG): older iOS Safari (16.1) fails to render the
          inline SVG here, but text glyphs render reliably. U+FE0E forces the
          monochrome text presentation instead of a color emoji. */}
      <span className="theme-toggle__icon" aria-hidden="true">
        {isDark ? '☀︎' : '☾︎'}
      </span>
    </button>
  )
}
