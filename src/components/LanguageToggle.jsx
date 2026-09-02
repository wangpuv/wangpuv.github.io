import { useLanguage } from '../i18n/LanguageContext'
import { ui } from '../i18n/strings'

export default function LanguageToggle() {
  const { lang, toggle } = useLanguage()
  // Show the language you would switch TO.
  const target = lang === 'zh' ? 'EN' : '中'
  const label = lang === 'zh' ? ui[lang].a11y.switchToEnglish : ui[lang].a11y.switchToChinese

  return (
    <button type="button" className="lang-toggle" onClick={toggle} aria-label={label} title={label}>
      {target}
    </button>
  )
}
