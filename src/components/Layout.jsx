import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import Toast from './Toast'

export default function Layout({ children }) {
  const { pathname, hash, key } = useLocation()

  // Scroll to top on route changes, or to a real in-page target when a hash is
  // present. Target elements carry scroll-margin-top for the sticky nav.
  // `key` is in the deps because clicking a link to the location we are already
  // on leaves pathname and hash untouched; without it those clicks do nothing.
  useEffect(() => {
    let cancelled = false
    let frame

    const scrollToLocation = () => {
      if (cancelled) return

      frame = window.requestAnimationFrame(() => {
        if (cancelled) return

        if (!hash) {
          window.scrollTo(0, 0)
          return
        }

        let id = hash.slice(1)
        try {
          id = decodeURIComponent(id)
        } catch {
          // Keep the raw fragment when malformed encoding is supplied.
        }
        const target = document.getElementById(id)
        if (target) target.scrollIntoView({ block: 'start' })
        else window.scrollTo(0, 0)
      })
    }

    scrollToLocation()
    document.fonts?.ready.then(scrollToLocation)

    return () => {
      cancelled = true
      window.cancelAnimationFrame(frame)
    }
  }, [pathname, hash, key])

  return (
    <>
      <Nav />
      <main id="main">{children}</main>
      <Footer />
      <Toast />
    </>
  )
}
