import { useEffect, useRef, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { profile } from '../data/profile'
import { ui } from '../i18n/strings'
import { useLanguage } from '../i18n/LanguageContext'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'

export default function Nav() {
  const { lang } = useLanguage()
  const t = ui[lang]
  const p = profile[lang]
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuButtonRef = useRef(null)
  const { pathname, hash } = useLocation()

  const links = [
    { to: '/#flagship', label: t.nav.agent, hash: '#flagship' },
    { to: '/work', label: t.nav.work },
    { to: '/lab', label: t.nav.lab },
    { to: '/life', label: t.nav.life },
    { to: '/about', label: t.nav.about },
  ]
  const contact = { to: '/contact', label: t.nav.contact }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname, hash])

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      window.requestAnimationFrame(() => menuButtonRef.current?.focus())
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1001px)')
    const onChange = (event) => {
      if (event.matches) setOpen(false)
    }
    desktop.addEventListener('change', onChange)
    return () => desktop.removeEventListener('change', onChange)
  }, [])

  const renderLink = (link, sheet = false) => {
    const base = sheet ? 'nav__sheet-link display' : 'nav__link'
    if (link.hash) {
      const active = pathname === '/' && hash === link.hash
      return (
        <Link
          key={link.to}
          to={link.to}
          className={`${base} ${active ? 'is-active' : ''}`.trim()}
          onClick={() => setOpen(false)}
          tabIndex={sheet && !open ? -1 : undefined}
        >
          {link.label}
        </Link>
      )
    }
    return (
      <NavLink
        key={link.to}
        to={link.to}
        end
        className={({ isActive }) => `${base} ${isActive ? 'is-active' : ''}`}
        onClick={() => setOpen(false)}
        tabIndex={sheet && !open ? -1 : undefined}
      >
        {link.label}
      </NavLink>
    )
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="wrap nav__inner">
        <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__mark">{profile.initials}</span>
          <span className="nav__name">{p.name}</span>
        </Link>

        <nav className="nav__links" aria-label={t.a11y.primaryNav}>
          {links.map((link) => renderLink(link))}
        </nav>

        <div className="nav__actions">
          <LanguageToggle />
          <ThemeToggle />
          <NavLink
            to={contact.to}
            className={({ isActive }) => `nav__contact ${isActive ? 'is-active' : ''}`}
          >
            {contact.label}
          </NavLink>
          <button
            ref={menuButtonRef}
            type="button"
            className={`nav__burger ${open ? 'is-open' : ''}`}
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span />
          </button>
        </div>
      </div>

      <nav
        id="site-menu"
        className={`nav__sheet ${open ? 'is-open' : ''}`}
        aria-label={t.a11y.mobileNav}
        aria-hidden={!open}
      >
        {links.map((link) => renderLink(link, true))}
        {renderLink(contact, true)}
      </nav>
    </header>
  )
}
