import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext(null)

const SUPPORTED = ['zh', 'en']

// Default is Chinese. Only browsers that prefer English (and not Chinese)
// start in English. A stored manual choice always wins.
function detectInitial() {
  try {
    const stored = localStorage.getItem('lang')
    if (SUPPORTED.includes(stored)) return stored
  } catch (e) {
    /* ignore */
  }
  if (typeof navigator !== 'undefined') {
    const langs = navigator.languages || [navigator.language || '']
    const lower = langs.map((l) => l.toLowerCase())
    const prefersZh = lower.some((l) => l.startsWith('zh'))
    const prefersEn = lower.some((l) => l.startsWith('en'))
    if (prefersEn && !prefersZh) return 'en'
  }
  return 'zh'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitial)

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en')
    try {
      localStorage.setItem('lang', lang)
    } catch (e) {
      /* ignore private-mode write errors */
    }
  }, [lang])

  const toggle = () => setLang((l) => (l === 'zh' ? 'en' : 'zh'))

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
