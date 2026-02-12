import heroImg from '../assets/foto/foto-28.webp'
import logo from '../assets/logo.webp'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Ristorante Le Migole - interni"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <img
          src={logo}
          alt="Le Migole - Food & Passion"
          className="w-40 sm:w-48 md:w-56 mx-auto mb-8 drop-shadow-2xl"
        />

        <p className="font-serif text-lg sm:text-xl md:text-2xl text-white/90 italic leading-relaxed max-w-2xl mx-auto mb-10">
          &ldquo;Briciole di vita, un percorso di esperienze che ci ha portati fino a qui
          attraverso incontri, amicizie, amore e la passione per il buon cibo&hellip;
          semplicemente questo.&rdquo;
        </p>

        <p className="text-gold-light font-serif text-xl sm:text-2xl tracking-widest mb-12">
          Benvenuti a casa nostra
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#prenota"
            className="px-8 py-3.5 bg-gold text-charcoal font-semibold uppercase tracking-wider text-sm rounded-sm hover:bg-gold-light transition-all duration-300 shadow-lg"
          >
            Prenota un Tavolo
          </a>
          <a
            href="#cucina"
            className="px-8 py-3.5 border border-white/40 text-white font-semibold uppercase tracking-wider text-sm rounded-sm hover:bg-white/10 transition-all duration-300"
          >
            Scopri il Menu
          </a>
        </div>

        {/* Rating badges */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-14">
          <div className="text-center">
            <p className="text-gold text-2xl font-serif font-bold">5.0</p>
            <p className="text-white/60 text-xs uppercase tracking-wider mt-1">TripAdvisor</p>
          </div>
          <div className="w-px h-10 bg-white/20" />
          <div className="text-center">
            <p className="text-gold text-2xl font-serif font-bold">4.8</p>
            <p className="text-white/60 text-xs uppercase tracking-wider mt-1">Google</p>
          </div>
          <div className="w-px h-10 bg-white/20" />
          <div className="text-center">
            <p className="text-gold text-2xl font-serif font-bold">9.8</p>
            <p className="text-white/60 text-xs uppercase tracking-wider mt-1">TheFork</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
