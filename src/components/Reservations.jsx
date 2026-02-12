import reserveImg from '../assets/foto/foto-49.webp'

export default function Reservations() {
  return (
    <section id="prenota" className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={reserveImg}
          alt="Atmosfera del ristorante Le Migole"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/85 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-sans font-medium mb-3">Prenota</p>
          <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Benvenuti a casa nostra
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-12">
            Solo 9 tavoli per un&rsquo;esperienza esclusiva e personale.
            Prenotazione consigliata.
          </p>

          {/* Hours */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-sm p-8 sm:p-10 mb-10 max-w-lg mx-auto">
            <h3 className="text-gold font-serif text-2xl mb-6">Orari di Apertura</h3>
            <div className="space-y-4 text-white/80">
              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <span className="font-medium">Lunedì — Mercoledì</span>
                <span className="text-white/60">19:00 — 21:30</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <span className="font-medium">Giovedì</span>
                <span className="text-gold">Chiuso</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <span className="font-medium">Venerdì — Domenica</span>
                <div className="text-right">
                  <p className="text-white/60">12:00 — 13:30</p>
                  <p className="text-white/60">19:00 — 21:30</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://www.thefork.it"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-charcoal font-semibold uppercase tracking-wider text-sm rounded-sm hover:bg-gold-light transition-all duration-300 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Prenota su TheFork
            </a>
            <a
              href="https://wa.me/393335344922"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/30 text-white font-semibold uppercase tracking-wider text-sm rounded-sm hover:bg-white/10 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Scrivi su WhatsApp
            </a>
          </div>

          {/* Phone and email */}
          <div className="flex flex-wrap justify-center gap-6 text-white/50 text-sm">
            <a href="tel:+393335344922" className="hover:text-gold transition-colors">
              Tel: +39 333 534 4922
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:info@lemigole.it" className="hover:text-gold transition-colors">
              info@lemigole.it
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
