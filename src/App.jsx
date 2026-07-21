import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Work from './pages/Work'
import Lab from './pages/Lab'
import Life from './pages/Life'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import LittleSteps from './pages/LittleSteps'
import { useLanguage } from './i18n/LanguageContext'
import './styles/app.css'
import { pageForPath, seoFor } from './data/seo'

export default function App() {
  const { lang } = useLanguage()
  const { pathname } = useLocation()
  const prefixes = ['', '/zh', '/en']

  // Keep the document title in sync with the active language.
  useEffect(() => {
    const page = pageForPath(pathname)
    const suffix = pathname.replace(/^\/(zh|en)/, '').replace(/^\/+|\/+$/g, '')
    const seo = seoFor(page, lang, suffix)
    document.title = seo.title
    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', seo.description)
  }, [lang, pathname])

  return (
    <Layout>
      <Routes>
        {prefixes.map((prefix) => <Route key={`${prefix}-home`} path={`${prefix}/`} element={<Home />} />)}
        {prefixes.map((prefix) => <Route key={`${prefix}-work`} path={`${prefix}/work/`} element={<Work />} />)}
        {prefixes.map((prefix) => <Route key={`${prefix}-lab`} path={`${prefix}/lab/`} element={<Lab />} />)}
        {prefixes.map((prefix) => <Route key={`${prefix}-life`} path={`${prefix}/life/`} element={<Life />} />)}
        {prefixes.map((prefix) => <Route key={`${prefix}-about`} path={`${prefix}/about/`} element={<About />} />)}
        {prefixes.map((prefix) => <Route key={`${prefix}-contact`} path={`${prefix}/contact/`} element={<Contact />} />)}
        {prefixes.map((prefix) => <Route key={`${prefix}-little-steps`} path={`${prefix}/projects/little-steps/`} element={<LittleSteps />} />)}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
