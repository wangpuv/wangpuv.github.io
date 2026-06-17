import { useLanguage } from '../i18n/LanguageContext'

export default function LanguageToggle() {
  const { lang, toggle } = useLanguage()
  // Show the language you would switch TO.
  const target = lang === 'zh' ? 'EN' : '中'
  const label = lang === 'zh' ? 'Switch to English' : '切换为中文'

  return (
    <button type="button" className="lang-toggle" onClick={toggle} aria-label={label} title={label}>
      {target}
    </button>
  )
}
