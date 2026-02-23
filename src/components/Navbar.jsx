import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.webp'

const navLinks = [
  { label: 'Storia', href: '#storia' },
  { label: 'Locale', href: '#locale' },
  { label: 'Cucina', href: '#cucina' },
  { label: 'Prenota', href: '#prenota' },
  { label: 'Contatti', href: '#contatti' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
        style={{
          background: scrolled ? 'rgba(26,26,26,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
        }}
      >
        <div className="flex items-center justify-between" style={{ padding: '0 clamp(1.5rem, 5vw, 5rem)' }}>
          <a href="#">
            <img
              src={logo}
              alt="Le Migole"
              className="transition-all duration-500"
              style={{ height: scrolled ? '32px' : '40px', width: 'auto', mixBlendMode: 'lighten' }}
            />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/60 hover:text-[var(--color-gold)] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#prenota"
              className="ml-4 px-5 py-2 transition-all duration-300 hover:scale-[1.03]"
              style={{
                background: 'var(--color-gold)',
                color: 'var(--color-charcoal)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
              }}
            >
              Riserva
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-[60] w-10 h-10 flex items-center justify-center"
            aria-label="Menu"
          >
            <div className="flex flex-col gap-[5px]">
              <span
                className="block w-6 h-[1.5px] bg-white transition-all duration-400 origin-center"
                style={{ transform: mobileOpen ? 'rotate(45deg) translateY(3.25px)' : 'none' }}
              />
              <span
                className="block w-6 h-[1.5px] bg-white transition-all duration-400 origin-center"
                style={{ transform: mobileOpen ? 'rotate(-45deg) translateY(-3.25px)' : 'none' }}
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[55] flex flex-col justify-end"
            style={{ background: 'var(--color-charcoal)' }}
          >
            <div style={{ padding: 'clamp(1.5rem, 5vw, 5rem)', paddingBottom: 'clamp(3rem, 8vh, 6rem)' }}>
              <div className="flex flex-col gap-1 mb-12">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="text-white/85 hover:text-[var(--color-gold)] transition-colors duration-300 font-serif"
                    style={{ fontSize: 'clamp(2.2rem, 7vw, 3.5rem)', lineHeight: 1.15, fontWeight: 300 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="flex flex-col gap-2"
                style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-sans)', fontSize: '0.8rem' }}
              >
                <span>Via Tresselume, 10/A — Tesero (TN)</span>
                <span>+39 333 534 4922</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
