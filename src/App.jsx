import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Work from './pages/Work'
import Lab from './pages/Lab'
import Life from './pages/Life'
import Course from './pages/Course'
import Lesson from './pages/Lesson'
import About from './pages/About'
import Contact from './pages/Contact'
import ThisYear from './pages/ThisYear'
import NotFound from './pages/NotFound'
import { useLanguage } from './i18n/LanguageContext'
import { profile } from './data/profile'
import './styles/app.css'

export default function App() {
  const { lang } = useLanguage()
  const { pathname } = useLocation()

  // Keep the document title in sync with the active language.
  // Parent effects run after child effects, so this would overwrite any title
  // a page set for itself on mount. The course pages name their own lesson,
  // so hand the title to them and leave it alone here.
  useEffect(() => {
    if (pathname.startsWith('/claude-code')) return
    const p = profile[lang]
    document.title = `${p.name} — ${p.role}`
  }, [lang, pathname])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/life" element={<Life />} />
        <Route path="/claude-code" element={<Course />} />
        <Route path="/claude-code/:slug" element={<Lesson />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/this-year" element={<ThisYear />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
