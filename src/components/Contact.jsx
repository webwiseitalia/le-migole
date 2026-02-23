import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-h2 .line', { yPercent: 110 }, {
        yPercent: 0, duration: 1.2, stagger: 0.1, ease: 'power4.out',
        scrollTrigger: { trigger: '.contact-h2', start: 'top 88%' },
      })

      gsap.fromTo('.contact-info-item', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-info', start: 'top 80%' },
      })

      gsap.fromTo('.contact-map-wrap', { clipPath: 'inset(0 0 0 100%)' }, {
        clipPath: 'inset(0 0 0 0%)', duration: 1.4, ease: 'power4.inOut',
        scrollTrigger: { trigger: '.contact-map-wrap', start: 'top 75%' },
      })

      gsap.fromTo('.contact-dist', { opacity: 0 }, {
        opacity: 1, duration: 0.4, stagger: 0.06,
        scrollTrigger: { trigger: '.contact-distances', start: 'top 90%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="contatti" style={{ background: 'var(--color-cream)', paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-xl)' }}>

      {/* === Two-column: info left, map right === */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2"
        style={{ minHeight: 'clamp(28rem, 50vh, 40rem)', gap: 0 }}
      >
        {/* LEFT — heading + contact info */}
        <div
          className="contact-info flex flex-col justify-center"
          style={{ padding: 'clamp(2rem, 4vw, 4rem) clamp(1.5rem, 5vw, 5rem)' }}
        >
          <p className="label" style={{ color: 'var(--color-gold)', marginBottom: 'var(--space-sm)', fontSize: '0.65rem' }}>
            Dove Siamo
          </p>
          <h2 className="contact-h2 fluid-h2" style={{ color: 'var(--color-charcoal)', marginBottom: 'var(--space-lg)' }}>
            <span className="overflow-hidden block"><span className="line block">Vieni a</span></span>
            <span className="overflow-hidden block"><span className="line block" style={{ color: 'var(--color-gold)' }}>trovarci</span></span>
          </h2>

          {/* Contact details */}
          <div className="flex flex-col gap-5">
            <div className="contact-info-item" style={{ paddingBottom: 'var(--space-sm)', borderBottom: '1px solid rgba(26,26,26,0.08)' }}>
              <p className="label" style={{ color: 'var(--color-gold)', marginBottom: '0.4rem', fontSize: '0.6rem' }}>Indirizzo</p>
              <p className="font-serif" style={{ fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)', color: 'var(--color-charcoal)', lineHeight: 1.4 }}>
                Via Tresselume, 10/A
              </p>
              <p className="font-serif" style={{ fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)', color: 'var(--color-charcoal)', lineHeight: 1.4 }}>
                38038 Lago di Tesero (TN)
              </p>
            </div>

            <div className="contact-info-item" style={{ paddingBottom: 'var(--space-sm)', borderBottom: '1px solid rgba(26,26,26,0.08)' }}>
              <p className="label" style={{ color: 'var(--color-gold)', marginBottom: '0.4rem', fontSize: '0.6rem' }}>Telefono &amp; WhatsApp</p>
              <a
                href="tel:+393335344922"
                className="font-serif block hover:text-[var(--color-gold)] transition-colors duration-300"
                style={{ fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)', color: 'var(--color-charcoal)' }}
              >
                +39 333 534 4922
              </a>
            </div>

            <div className="contact-info-item" style={{ paddingBottom: 'var(--space-sm)', borderBottom: '1px solid rgba(26,26,26,0.08)' }}>
              <p className="label" style={{ color: 'var(--color-gold)', marginBottom: '0.4rem', fontSize: '0.6rem' }}>Email</p>
              <a
                href="mailto:info@lemigole.it"
                className="font-serif block hover:text-[var(--color-gold)] transition-colors duration-300"
                style={{ fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)', color: 'var(--color-charcoal)' }}
              >
                info@lemigole.it
              </a>
            </div>

            {/* Distances */}
            <div className="contact-info-item contact-distances">
              <p className="label" style={{ color: 'var(--color-gold)', marginBottom: '0.5rem', fontSize: '0.6rem' }}>
                Come raggiungerci
              </p>
              <p className="font-serif" style={{ color: 'rgba(26,26,26,0.55)', fontStyle: 'italic', fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)', marginBottom: '0.75rem' }}>
                Lungo la ciclabile del Centro Fondo Fiemme
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {[
                  'Cavalese ~ 5 km',
                  'Predazzo ~ 8 km',
                  'Moena ~ 15 km',
                  'Trento ~ 55 km',
                  'Bolzano ~ 55 km',
                ].map((d, i) => (
                  <span
                    key={i}
                    className="contact-dist"
                    style={{ color: 'rgba(26,26,26,0.6)', fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.9rem, 1.1vw, 1rem)' }}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — map */}
        <div className="contact-map-wrap overflow-hidden" style={{ minHeight: 'clamp(20rem, 45vh, 35rem)' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2758.8!2d11.5095!3d46.2938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4782f8b0a2c7f3a1%3A0x1234567890abcdef!2sVia%20Tresselume%2C%2010%2FA%2C%2038038%20Tesero%20TN!5e0!3m2!1sit!2sit!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 'clamp(20rem, 45vh, 35rem)', filter: 'grayscale(0.2) contrast(1.05)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Le Migole - Mappa"
          />
        </div>
      </div>
    </section>
  )
}
