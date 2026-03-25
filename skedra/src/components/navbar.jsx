import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'Servicios',  href: '#servicios' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Nosotros',   href: '#nosotros' },
  { label: 'Contacto',   href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo} onClick={(e) => scrollTo(e, '#hero')}>
        SKE<span>DRA</span>
      </a>

      <ul className={styles.links}>
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <a href={href} onClick={(e) => scrollTo(e, href)}>{label}</a>
          </li>
        ))}
      </ul>

      <button className={styles.cta} onClick={(e) => scrollTo(e, '#contacto')}>
        Trabajemos Juntos
      </button>

      <button
        className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menú"
      >
        <span /><span /><span />
      </button>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <a key={href} href={href} onClick={(e) => scrollTo(e, href)}>{label}</a>
        ))}
        <button className={styles.cta} onClick={(e) => scrollTo(e, '#contacto')}>
          Trabajemos Juntos
        </button>
      </div>
    </nav>
  )
}