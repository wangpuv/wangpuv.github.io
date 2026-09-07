import { Fragment, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Work from './pages/Work'
import Lab from './pages/Lab'
import Life from './pages/Life'
import Writing from './pages/Writing'
import Course from './pages/Course'
import Lesson from './pages/Lesson'
import About from './pages/About'
import Contact from './pages/Contact'
import ThisYear from './pages/ThisYear'
import NotFound from './pages/NotFound'
import { useLanguage } from './i18n/LanguageContext'
import { courses, coursePaths } from './data/course'
import { profile } from './data/profile'
import './styles/app.css'

// Every path whose page owns document.title for itself.
const writingPaths = ['/writing', ...coursePaths]

export default function App() {
  const { lang } = useLanguage()
  const { pathname } = useLocation()

  // Keep the document title in sync with the active language.
  // Parent effects run after child effects, so this would overwrite any title
  // a page set for itself on mount. The writing spread and the course pages
  // name their own serial and lesson, so leave the title alone there.
  useEffect(() => {
    if (writingPaths.some((path) => pathname.startsWith(path))) return
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
        <Route path="/writing" element={<Writing />} />
        {/* One contents page and one article route per serial, derived from
            the registry so a third course needs no change here. */}
        {courses.map((course) => (
          <Fragment key={course.slug}>
            <Route path={`/${course.slug}`} element={<Course course={course} />} />
            <Route path={`/${course.slug}/:slug`} element={<Lesson course={course} />} />
          </Fragment>
        ))}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/this-year" element={<ThisYear />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
