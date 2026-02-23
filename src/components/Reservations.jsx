import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import terrazaImg from '../assets/foto/foto-34.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Reservations() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.res-bg', { scale: 1.08 }, {
        scale: 1, ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: true },
      })

      gsap.fromTo('.res-h2 .line', { yPercent: 110 }, {
        yPercent: 0, duration: 1.2, stagger: 0.1, ease: 'power4.out',
        scrollTrigger: { trigger: '.res-h2', start: 'top 85%' },
      })

      gsap.fromTo('.res-card', { x: -40, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.res-card', start: 'top 82%' },
      })

      gsap.fromTo('.res-hour', { opacity: 0, x: 15 }, {
        opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: '.res-hours', start: 'top 84%' },
      })

      gsap.fromTo('.res-cta', { opacity: 0, y: 10 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.1,
        scrollTrigger: { trigger: '.res-ctas', start: 'top 88%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="prenota"
      className="relative overflow-hidden"
      style={{ minHeight: 'clamp(38rem, 85vh, 52rem)' }}
    >
      {/* Full-bleed background — terrazza sul lago */}
      <div className="absolute inset-0">
        <img
          src={terrazaImg}
          alt="Terrazza Le Migole sul lago"
          className="res-bg w-full h-full object-cover will-change-transform"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.2) 100%)' }}
        />
      </div>

      {/* Content — left column overlaid */}
      <div
        className="relative z-10 flex items-center"
        style={{
          minHeight: 'clamp(38rem, 85vh, 52rem)',
          padding: 'clamp(6rem, 10vh, 8rem) clamp(1.5rem, 5vw, 5rem) clamp(3rem, 5vh, 5rem)',
        }}
      >
        <div style={{ maxWidth: '34rem' }}>
          <p className="label" style={{ color: 'var(--color-gold)', marginBottom: 'var(--space-md)', fontSize: '0.6rem' }}>
            Prenota
          </p>

          <h2 className="res-h2 fluid-h2" style={{ color: 'white', marginBottom: 'var(--space-lg)' }}>
            <span className="overflow-hidden block"><span className="line block">Benvenuti</span></span>
            <span className="overflow-hidden block"><span className="line block">a casa</span></span>
            <span className="overflow-hidden block"><span className="line block" style={{ color: 'var(--color-gold)' }}>nostra</span></span>
          </h2>

          {/* Card panel — dark card overlaid on the image */}
          <div
            className="res-card"
            style={{
              background: 'rgba(0,0,0,0.85)',
              backdropFilter: 'blur(12px)',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            }}
          >
            <p
              className="font-serif"
              style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(0.95rem, 1.3vw, 1.15rem)', fontStyle: 'italic', lineHeight: 1.6, marginBottom: 'var(--space-md)' }}
            >
              Solo 9 tavoli per un&rsquo;esperienza esclusiva e personale.
              Prenotazione consigliata.
            </p>

            {/* Hours */}
            <div className="res-hours" style={{ marginBottom: 'var(--space-md)', paddingBottom: 'var(--space-md)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              {[
                { day: 'Lun — Mer', time: '19:00 — 21:30' },
                { day: 'Giovedì', time: 'Chiuso', closed: true },
                { day: 'Ven — Dom', time: '12:00 — 13:30 · 19:00 — 21:30' },
              ].map((row, i) => (
                <div key={i} className="res-hour flex justify-between py-1">
                  <span style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-sans)', fontSize: '0.8rem' }}>
                    {row.day}
                  </span>
                  <span style={{
                    color: row.closed ? 'var(--color-gold)' : 'rgba(255,255,255,0.45)',
                    fontFamily: 'var(--font-sans)', fontSize: '0.8rem',
                  }}>
                    {row.time}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="res-ctas flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.thefork.it"
                target="_blank"
                rel="noopener noreferrer"
                className="res-cta inline-block px-6 py-2.5 transition-all duration-300 hover:scale-[1.03] text-center"
                style={{
                  background: 'var(--color-gold)', color: 'var(--color-charcoal)',
                  fontFamily: 'var(--font-sans)', fontSize: '0.65rem', fontWeight: 600,
                  letterSpacing: '0.25em', textTransform: 'uppercase',
                }}
              >
                Prenota su TheFork
              </a>
              <a
                href="https://wa.me/393335344922"
                target="_blank"
                rel="noopener noreferrer"
                className="res-cta inline-block px-6 py-2.5 text-white/70 border border-white/25 transition-all duration-300 hover:border-white/50 hover:text-white text-center"
                style={{
                  fontFamily: 'var(--font-sans)', fontSize: '0.65rem', fontWeight: 500,
                  letterSpacing: '0.25em', textTransform: 'uppercase',
                }}
              >
                Scrivi su WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
