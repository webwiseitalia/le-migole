import logo from '../assets/logo.webp'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & tagline */}
          <div>
            <img src={logo} alt="Le Migole" className="h-16 w-auto mb-4" />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Cucina fusion contemporanea nel cuore della Val di Fiemme.
              Tradizione trentina rivisitata con creatività e passione.
            </p>
            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/le_migole/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 rounded-sm flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href="mailto:info@lemigole.it"
                className="w-10 h-10 border border-white/20 rounded-sm flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-gold font-serif text-xl mb-4">Orari</h3>
            <div className="space-y-2 text-sm text-white/50">
              <div className="flex justify-between">
                <span>Lun — Mer</span>
                <span>19:00 — 21:30</span>
              </div>
              <div className="flex justify-between">
                <span>Giovedì</span>
                <span className="text-gold/80">Chiuso</span>
              </div>
              <div className="flex justify-between">
                <span>Ven — Dom</span>
                <span>12:00 — 13:30</span>
              </div>
              <div className="flex justify-between">
                <span></span>
                <span>19:00 — 21:30</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold font-serif text-xl mb-4">Contatti</h3>
            <div className="space-y-3 text-sm text-white/50">
              <p>Via Tresselume, 10/A</p>
              <p>38038 Lago di Tesero (TN)</p>
              <p className="pt-2">
                <a href="tel:+393335344922" className="hover:text-gold transition-colors">
                  +39 333 534 4922
                </a>
              </p>
              <p>
                <a href="mailto:info@lemigole.it" className="hover:text-gold transition-colors">
                  info@lemigole.it
                </a>
              </p>
            </div>

            {/* Awards */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-xs text-white/30 uppercase tracking-wider mb-2">Riconoscimenti</p>
              <p className="text-sm text-white/50">Guida Touring Club Italiano</p>
              <p className="text-sm text-white/50">TripAdvisor Travellers&rsquo; Choice 2022</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            &copy; 2026 Le Migole S.n.c. di Mich Danilo. Tutti i diritti riservati.
          </p>
          <div className="flex gap-4 text-xs text-white/30">
            <a href="#" className="hover:text-white/50 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white/50 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
