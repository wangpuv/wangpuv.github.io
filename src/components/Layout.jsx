import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import Toast from './Toast'
import { useLanguage } from '../i18n/LanguageContext'

export default function Layout({ children }) {
  const { pathname } = useLocation()
  const { lang } = useLanguage()

  // Scroll to top on route change.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <a className="skip-link" href="#main">{lang === 'zh' ? '跳到主要内容' : 'Skip to content'}</a>
      <Nav />
      <main id="main">{children}</main>
      <Footer />
      <Toast />
    </>
  )
}
