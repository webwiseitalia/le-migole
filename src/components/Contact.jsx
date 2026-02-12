export default function Contact() {
  return (
    <section id="contatti" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-sans font-medium mb-3">Dove Siamo</p>
          <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-charcoal">
            Vieni a trovarci
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="aspect-[4/3] lg:aspect-auto lg:min-h-[400px] rounded-sm overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2758.8!2d11.5095!3d46.2938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4782f8b0a2c7f3a1%3A0x1234567890abcdef!2sVia%20Tresselume%2C%2010%2FA%2C%2038038%20Tesero%20TN!5e0!3m2!1sit!2sit!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Le Migole - Mappa"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-charcoal rounded-sm flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-charcoal mb-1">Indirizzo</h3>
                  <p className="text-charcoal/60">Via Tresselume, 10/A</p>
                  <p className="text-charcoal/60">38038 Lago di Tesero (TN)</p>
                  <p className="text-charcoal/40 text-sm mt-1 italic">
                    Lungo la ciclabile del Centro Fondo Fiemme
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-charcoal rounded-sm flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-charcoal mb-1">Telefono & WhatsApp</h3>
                  <a href="tel:+393335344922" className="text-charcoal/60 hover:text-gold transition-colors">
                    +39 333 534 4922
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-charcoal rounded-sm flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-charcoal mb-1">Email</h3>
                  <a href="mailto:info@lemigole.it" className="text-charcoal/60 hover:text-gold transition-colors">
                    info@lemigole.it
                  </a>
                </div>
              </div>

              {/* Distances */}
              <div className="pt-6 border-t border-charcoal/10">
                <h3 className="font-serif text-lg text-charcoal mb-3">Come raggiungerci</h3>
                <div className="grid grid-cols-2 gap-3 text-sm text-charcoal/50">
                  <span>Cavalese ~ 5 km</span>
                  <span>Predazzo ~ 8 km</span>
                  <span>Moena ~ 15 km</span>
                  <span>Trento ~ 55 km</span>
                  <span>Bolzano ~ 55 km</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
