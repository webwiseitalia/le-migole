import logo from '../assets/logo.webp'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-charcoal)' }}>
      {/* Main row — logo left, info right, NOT a grid */}
      <div
        className="flex flex-col lg:flex-row lg:items-start lg:justify-between"
        style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 5rem)' }}
      >
        {/* Logo + tagline */}
        <div className="flex-shrink-0" style={{ marginBottom: 'clamp(2rem, 4vw, 0px)' }}>
          <img
            src={logo}
            alt="Le Migole"
            style={{ height: 'clamp(2.5rem, 4vw, 3.5rem)', width: 'auto', mixBlendMode: 'lighten', marginBottom: '1rem' }}
          />
          <p
            className="font-serif"
            style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem', fontStyle: 'italic', maxWidth: '22ch', lineHeight: 1.5 }}
          >
            Cucina fusion contemporanea nel cuore della Val di Fiemme.
          </p>
          <div className="flex gap-4 mt-5">
            <a
              href="https://www.instagram.com/le_migole/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[var(--color-gold)] transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right side: two clusters, NOT equal columns */}
        <div className="flex flex-col sm:flex-row gap-12 lg:gap-20">
          {/* Hours */}
          <div>
            <p className="label" style={{ color: 'var(--color-gold)', marginBottom: '0.75rem', fontSize: '0.55rem' }}>Orari</p>
            {[
              { day: 'Lun — Mer', time: '19:00 — 21:30' },
              { day: 'Giovedì', time: 'Chiuso', closed: true },
              { day: 'Ven — Dom', time: '12:00 — 13:30' },
              { day: '', time: '19:00 — 21:30' },
            ].map((row, i) => (
              <div key={i} className="flex justify-between gap-6 py-0.5" style={{ fontSize: '0.8rem', minWidth: '14rem' }}>
                <span style={{ color: 'rgba(255,255,255,0.55)' }}>{row.day}</span>
                <span style={{ color: row.closed ? 'var(--color-gold)' : 'rgba(255,255,255,0.4)' }}>{row.time}</span>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p className="label" style={{ color: 'var(--color-gold)', marginBottom: '0.75rem', fontSize: '0.55rem' }}>Contatti</p>
            <div className="flex flex-col gap-1" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)' }}>
              <span>Via Tresselume, 10/A</span>
              <span>38038 Lago di Tesero (TN)</span>
              <a href="tel:+393335344922" className="hover:text-[var(--color-gold)] transition-colors duration-300 mt-2">
                +39 333 534 4922
              </a>
              <a href="mailto:info@lemigole.it" className="hover:text-[var(--color-gold)] transition-colors duration-300">
                info@lemigole.it
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar — thin, minimal */}
      <div
        className="flex flex-col sm:flex-row justify-between items-center gap-2"
        style={{ padding: 'var(--space-sm) clamp(1.5rem, 5vw, 5rem)', borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        <p style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-sans)', fontSize: '0.65rem' }}>
          &copy; 2026 Le Migole S.n.c. di Mich Danilo
        </p>
        <div className="flex gap-4" style={{ fontSize: '0.65rem' }}>
          <a href="#" className="text-white/30 hover:text-white/25 transition-colors duration-300" style={{ fontFamily: 'var(--font-sans)' }}>Privacy</a>
          <a href="#" className="text-white/30 hover:text-white/25 transition-colors duration-300" style={{ fontFamily: 'var(--font-sans)' }}>Cookie</a>
        </div>
      </div>
    </footer>
  )
}
