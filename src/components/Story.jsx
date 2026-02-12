import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import chefImg from '../assets/foto/foto-11.webp'
import detailImg from '../assets/foto/foto-16.webp'
import grissiniImg from '../assets/foto/foto-30.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Story() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.story-h2 .line', { yPercent: 110 }, {
        yPercent: 0, duration: 1.2, stagger: 0.1, ease: 'power4.out',
        scrollTrigger: { trigger: '.story-h2', start: 'top 85%' },
      })

      gsap.fromTo('.story-img-chef', { clipPath: 'inset(0 100% 0 0)' }, {
        clipPath: 'inset(0 0% 0 0)', duration: 1.6, ease: 'power4.inOut',
        scrollTrigger: { trigger: '.story-img-chef', start: 'top 75%' },
      })

      gsap.fromTo('.story-img-detail', { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.story-img-detail', start: 'top 88%' },
      })

      gsap.fromTo('.story-p', { opacity: 0, y: 25 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.story-text', start: 'top 78%' },
      })

      gsap.fromTo('.story-quote-block', { opacity: 0, scale: 0.97 }, {
        opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.story-quote-block', start: 'top 82%' },
      })

      gsap.fromTo('.story-img-grissini', { clipPath: 'inset(100% 0 0 0)' }, {
        clipPath: 'inset(0% 0 0 0)', duration: 1.3, ease: 'power4.inOut',
        scrollTrigger: { trigger: '.story-img-grissini', start: 'top 80%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="storia" style={{ background: 'var(--color-cream)' }}>

      {/* === BLOCK 1: Big heading, wide, full-width padding === */}
      <div style={{ paddingTop: 'var(--space-xl)', paddingLeft: 'clamp(1.5rem, 5vw, 5rem)', paddingRight: 'clamp(1.5rem, 5vw, 5rem)', textAlign: 'center' }}>
        <p className="label" style={{ color: 'var(--color-gold)', marginBottom: 'var(--space-sm)', fontSize: '0.6rem' }}>
          La Nostra Storia
        </p>
        <h2 className="story-h2 fluid-h2" style={{ color: 'var(--color-charcoal)', margin: '0 auto' }}>
          <span className="overflow-hidden block"><span className="line block">&ldquo;Da domani si cambia</span></span>
          <span className="overflow-hidden block"><span className="line block" style={{ color: 'var(--color-gold)' }}>vita!&rdquo;</span></span>
        </h2>
      </div>

      {/* === BLOCK 2: Asymmetric — large chef image left (60%), text right (40%) === */}
      <div
        className="grid grid-cols-1 lg:grid-cols-5"
        style={{ marginTop: 'var(--space-md)', gap: 0 }}
      >
        {/* Chef image — 3 of 5 columns, no padding, edge-to-edge left */}
        <div className="lg:col-span-3 relative">
          <div className="story-img-chef overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <img src={chefImg} alt="Chef Danilo al lavoro" className="w-full h-full object-cover" />
          </div>
          {/* Detail image — overlaps bottom-right corner of chef image */}
          <div
            className="story-img-detail absolute hidden md:block overflow-hidden"
            style={{
              bottom: '-2.5rem',
              right: '-1.5rem',
              width: 'clamp(8rem, 16vw, 14rem)',
              aspectRatio: '4/5',
              boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
              zIndex: 2,
            }}
          >
            <img src={detailImg} alt="Preparazione in cucina" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Text — 2 of 5 columns, padded, vertically centered */}
        <div
          className="story-text lg:col-span-2 flex flex-col justify-center"
          style={{ padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3.5rem)' }}
        >
          <p className="story-p fluid-body-lg" style={{ color: 'var(--color-charcoal)', marginBottom: 'var(--space-md)' }}>
            Danilo, arredatore per 28 anni, e Luisa, proprietaria di negozi a Moena,
            hanno deciso un giorno di cambiare vita completamente.
          </p>
          <p className="story-p fluid-body" style={{ color: 'rgba(26,26,26,0.45)', marginBottom: 'var(--space-sm)' }}>
            Dopo la gavetta in Alto Adige, hanno aperto Le Migole a Tesero —
            un locale &ldquo;non consono&rdquo; per la valle: a metà strada tra l&rsquo;alta cucina
            e la serata informale tra amici.
          </p>
          <p className="story-p fluid-body" style={{ color: 'rgba(26,26,26,0.45)' }}>
            Il nome? &ldquo;Migole&rdquo; — briciole in dialetto trentino — nacque una sera: il tavolo
            pieno di briciole, un amico che scoppiò a ridere.
            Il nome del locale era deciso.
          </p>
        </div>
      </div>

      {/* === BLOCK 3: Quote — full-width dark strip === */}
      <div
        className="story-quote-block"
        style={{
          marginTop: 'clamp(2.5rem, 5vw, 4rem)',
          padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 5rem)',
          background: 'var(--color-charcoal)',
        }}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-8 lg:gap-16" style={{ maxWidth: '60rem' }}>
          <div
            className="story-img-grissini flex-shrink-0 overflow-hidden"
            style={{ width: 'clamp(5rem, 10vw, 9rem)', aspectRatio: '2/3' }}
          >
            <img src={grissiniImg} alt="Grissini artigianali" className="w-full h-full object-cover" />
          </div>

          <blockquote>
            <p className="fluid-h3 font-serif" style={{ color: 'white', fontStyle: 'italic', fontWeight: 300, maxWidth: '22ch' }}>
              &ldquo;Briciole di vita, un percorso di esperienze.&rdquo;
            </p>
            <footer style={{ marginTop: 'var(--space-sm)' }}>
              <span className="label" style={{ color: 'var(--color-gold)', fontSize: '0.6rem' }}>— Danilo &amp; Luisa</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
