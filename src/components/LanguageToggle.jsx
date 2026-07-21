import { useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  // Show the language you would switch TO.
  const target = lang === 'zh' ? 'EN' : '中'
  const label = lang === 'zh' ? 'Switch to English' : '切换为中文'

  const switchLanguage = () => {
    const next = lang === 'zh' ? 'en' : 'zh'
    const suffix = pathname.replace(/^\/(zh|en)(?=\/|$)/, '') || '/'
    setLang(next)
    navigate(`/${next}${suffix}`.replace(/\/+$/, '/') || `/${next}/`)
  }

  return (
    <button type="button" className="lang-toggle" onClick={switchLanguage} aria-label={label} title={label}>
      {target}
    </button>
  )
}
