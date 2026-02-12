import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import heroImg from '../assets/foto/foto-15.webp'
import dishImg from '../assets/foto/foto-49.webp'

export default function Hero() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Images reveal
      tl.fromTo('.hero-img-main', { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 1.6, ease: 'power4.inOut' })
        .fromTo('.hero-img-accent', { clipPath: 'inset(0 0 100% 0)', opacity: 0 }, { clipPath: 'inset(0 0 0% 0)', opacity: 1, duration: 1.2, ease: 'power4.inOut' }, 0.6)
        // Text
        .fromTo('.hero-kicker', { opacity: 0, x: -15 }, { opacity: 1, x: 0, duration: 0.7 }, 1.0)
        .fromTo('.hero-title .word', { yPercent: 120, rotateZ: 4 }, { yPercent: 0, rotateZ: 0, duration: 1.4, stagger: 0.1, ease: 'power4.out' }, 1.1)
        .fromTo('.hero-sub', { opacity: 0 }, { opacity: 1, duration: 0.9 }, 2.2)
        .fromTo('.hero-cta', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, 2.6)
        .fromTo('.hero-score', { opacity: 0 }, { opacity: 1, duration: 0.4, stagger: 0.07 }, 3.0)
        .fromTo('.hero-scroll', { scaleY: 0 }, { scaleY: 1, duration: 0.8, ease: 'power2.inOut' }, 3.2)
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden" style={{ minHeight: '100svh', background: 'var(--color-charcoal)' }}>
      {/* === SPLIT LAYOUT: text left, images right === */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2 min-h-[100svh]"
        style={{ gap: 0 }}
      >
        {/* LEFT — text content, vertically centered */}
        <div
          className="relative z-10 flex flex-col justify-center order-2 lg:order-1"
          style={{
            padding: 'clamp(6rem, 10vh, 8rem) clamp(1.5rem, 5vw, 5rem) clamp(3rem, 6vh, 5rem)',
          }}
        >
          <p
            className="hero-kicker label"
            style={{ color: 'var(--color-gold)', fontSize: '0.6rem', marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)', opacity: 0 }}
          >
            Food &amp; Passion — Val di Fiemme
          </p>

          <h1 className="fluid-h1 text-white" style={{ marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            <span className="overflow-hidden block">
              <span className="word inline-block">Briciole</span>
            </span>
            <span className="overflow-hidden block">
              <span className="word inline-block" style={{ color: 'var(--color-gold)' }}>di vita</span>
            </span>
          </h1>

          <p
            className="hero-sub font-serif"
            style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: 'clamp(1rem, 1.5vw, 1.3rem)',
              fontStyle: 'italic',
              maxWidth: '28ch',
              lineHeight: 1.55,
              marginBottom: 'clamp(2rem, 4vw, 3.5rem)',
              opacity: 0,
            }}
          >
            Un percorso di esperienze nel cuore della Val di Fiemme.
            Cucina, passione, incontri.
          </p>

          <div className="flex flex-wrap gap-4" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <a
              href="#prenota"
              className="hero-cta inline-block px-7 py-3 transition-all duration-300 hover:scale-[1.03]"
              style={{
                background: 'var(--color-gold)', color: 'var(--color-charcoal)',
                fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 600,
                letterSpacing: '0.25em', textTransform: 'uppercase', opacity: 0,
              }}
            >
              Prenota un tavolo
            </a>
            <a
              href="#cucina"
              className="hero-cta inline-block px-7 py-3 text-white/70 border border-white/25 transition-all duration-300 hover:border-white/50 hover:text-white"
              style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 500,
                letterSpacing: '0.25em', textTransform: 'uppercase', opacity: 0,
              }}
            >
              Scopri il menu
            </a>
          </div>

          {/* Scores — horizontal, bottom of text column */}
          <div className="flex gap-8">
            {[
              { score: '5.0', label: 'TripAdvisor' },
              { score: '4.8', label: 'Google' },
              { score: '9.8', label: 'TheFork' },
            ].map((item, i) => (
              <div key={i} className="hero-score" style={{ opacity: 0 }}>
                <span className="font-serif text-white/80" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.3rem)', fontWeight: 300 }}>
                  {item.score}
                </span>
                <span className="label text-white/40 ml-1.5" style={{ fontSize: '0.45rem' }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — images, stacked/overlapping */}
        <div className="relative order-1 lg:order-2" style={{ minHeight: 'clamp(20rem, 50vh, 35rem)' }}>
          {/* Main image — fills the right side */}
          <div className="hero-img-main absolute inset-0 overflow-hidden">
            <img
              src={heroImg}
              alt="Interno ristorante Le Migole"
              className="w-full h-full object-cover"
              style={{ objectPosition: '60% center' }}
            />
            {/* Gradient fade on left edge for text bleed */}
            <div
              className="absolute inset-0 hidden lg:block"
              style={{ background: 'linear-gradient(to right, var(--color-charcoal) 0%, transparent 25%)' }}
            />
            {/* Gradient fade on bottom for mobile */}
            <div
              className="absolute inset-0 lg:hidden"
              style={{ background: 'linear-gradient(to top, var(--color-charcoal) 0%, transparent 40%)' }}
            />
          </div>

          {/* Accent image — small dish photo overlapping bottom-left */}
          <div
            className="hero-img-accent absolute hidden lg:block overflow-hidden z-10"
            style={{
              bottom: 'clamp(2rem, 5vh, 4rem)',
              left: '-3rem',
              width: 'clamp(9rem, 14vw, 13rem)',
              aspectRatio: '3/4',
              boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
            }}
          >
            <img src={dishImg} alt="Piatto Le Migole" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Scroll indicator — absolute, bottom center */}
      <div
        className="hero-scroll absolute left-1/2 -translate-x-1/2 z-20"
        style={{ bottom: 'clamp(1rem, 2vh, 2rem)', transformOrigin: 'top' }}
      >
        <div style={{ width: '1px', height: '3rem', background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)' }} />
      </div>
    </section>
  )
}
