import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Work from './pages/Work'
import ProjectDetail from './pages/ProjectDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { useLanguage } from './i18n/LanguageContext'
import { profile } from './data/profile'
import './styles/app.css'

export default function App() {
  const { lang } = useLanguage()

  // Keep the document title in sync with the active language.
  useEffect(() => {
    const p = profile[lang]
    document.title = `${p.name} — ${p.role}`
  }, [lang])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
