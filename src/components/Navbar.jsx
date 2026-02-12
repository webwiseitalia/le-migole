import { useState, useEffect } from 'react'
import logo from '../assets/logo.webp'

const navLinks = [
  { label: 'La Nostra Storia', href: '#storia' },
  { label: 'Il Locale', href: '#locale' },
  { label: 'La Cucina', href: '#cucina' },
  { label: 'Prenota', href: '#prenota' },
  { label: 'Contatti', href: '#contatti' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Le Migole" className="h-10 sm:h-12 w-auto" />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-gold-light text-sm font-sans font-medium tracking-wide uppercase transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#prenota"
            className="ml-4 px-6 py-2.5 bg-gold text-charcoal text-sm font-semibold uppercase tracking-wider rounded-sm hover:bg-gold-light transition-colors duration-300"
          >
            Prenota un Tavolo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-charcoal/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-5 right-5 p-2 text-white"
          aria-label="Chiudi menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img src={logo} alt="Le Migole" className="h-16 w-auto mb-4" />
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-white/90 hover:text-gold text-xl font-serif tracking-widest uppercase transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#prenota"
          onClick={() => setMobileOpen(false)}
          className="mt-4 px-8 py-3 bg-gold text-charcoal font-semibold uppercase tracking-wider rounded-sm hover:bg-gold-light transition-colors"
        >
          Prenota un Tavolo
        </a>
      </div>
    </nav>
  )
}
