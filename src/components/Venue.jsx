import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import venueWide from '../assets/foto/foto-15.webp'
import lampImg from '../assets/foto/foto-36.webp'
import stoneImg from '../assets/foto/foto-38.webp'
import tableImg from '../assets/foto/foto-40.webp'
import salaImg from '../assets/foto/foto-31.webp'
import traviImg from '../assets/foto/foto-33.webp'
import stueImg from '../assets/foto/foto-35.webp'

gsap.registerPlugin(ScrollTrigger)

const galleryItems = [
  { src: salaImg, alt: 'Sala con banchette e luci a sospensione', width: 'clamp(20rem, 38vw, 30rem)' },
  { src: stoneImg, alt: 'Parete in pietra naturale', width: 'clamp(16rem, 28vw, 24rem)' },
  { src: traviImg, alt: 'Sala con travi in legno a vista', width: 'clamp(22rem, 40vw, 32rem)' },
  { src: tableImg, alt: 'Centrotavola su legno naturale', width: 'clamp(17rem, 30vw, 25rem)' },
  { src: lampImg, alt: 'Lampade di design artigianale', width: 'clamp(14rem, 24vw, 20rem)' },
  { src: stueImg, alt: 'Stube tirolese con arredi in legno', width: 'clamp(20rem, 36vw, 28rem)' },
]

export default function Venue() {
  const sectionRef = useRef(null)
  const scrollWrapRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on wide image
      gsap.fromTo('.venue-wide-img', { yPercent: -6 }, {
        yPercent: 6, ease: 'none',
        scrollTrigger: { trigger: '.venue-wide', start: 'top bottom', end: 'bottom top', scrub: true },
      })

      // Heading
      gsap.fromTo('.venue-h2 .line', { yPercent: 110 }, {
        yPercent: 0, duration: 1.2, stagger: 0.1, ease: 'power4.out',
        scrollTrigger: { trigger: '.venue-h2', start: 'top 88%' },
      })

      // Text
      gsap.fromTo('.venue-text', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.venue-text', start: 'top 80%' },
      })

      // Horizontal scroll gallery
      const track = trackRef.current
      const scrollWrap = scrollWrapRef.current
      if (track && scrollWrap) {
        const scrollAmount = track.scrollWidth - scrollWrap.offsetWidth

        gsap.to(track, {
          x: -scrollAmount,
          ease: 'none',
          scrollTrigger: {
            trigger: scrollWrap,
            start: 'top top',
            end: () => `+=${scrollAmount}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })

        // Each gallery image fades in as it enters
        gsap.utils.toArray('.venue-slide').forEach((slide, i) => {
          gsap.fromTo(slide, { opacity: 0.3, scale: 0.94 }, {
            opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out',
            scrollTrigger: {
              trigger: slide,
              containerAnimation: gsap.getById?.('venue-hscroll') || undefined,
              start: 'left 80%',
              end: 'left 40%',
              scrub: true,
            },
          })
        })
      }

      // Stats
      gsap.fromTo('.venue-stat', { opacity: 0 }, {
        opacity: 1, duration: 0.5, stagger: 0.1,
        scrollTrigger: { trigger: '.venue-stats', start: 'top 90%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="locale" style={{ background: 'var(--color-charcoal)' }}>

      {/* === BLOCK 1: Full-bleed wide image with parallax === */}
      <div className="venue-wide relative overflow-hidden" style={{ height: 'clamp(22rem, 55vh, 38rem)' }}>
        <img
          src={venueWide}
          alt="Sala ristorante Le Migole"
          className="venue-wide-img absolute w-full h-[115%] object-cover will-change-transform"
          style={{ top: '-7%', objectPosition: 'center 40%' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--color-charcoal) 0%, transparent 40%)' }} />
      </div>

      {/* === BLOCK 2: Heading overlapping image === */}
      <div
        style={{
          marginTop: '-5rem',
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          paddingRight: 'clamp(1.5rem, 5vw, 5rem)',
          paddingLeft: 'clamp(1.5rem, 5vw, 5rem)',
        }}
      >
        <div style={{ maxWidth: '32rem', width: '100%' }}>
          <p className="label" style={{ color: 'var(--color-gold)', marginBottom: 'var(--space-sm)', fontSize: '0.6rem' }}>
            Il Locale
          </p>
          <h2 className="venue-h2 fluid-h2" style={{ color: 'white' }}>
            <span className="overflow-hidden block"><span className="line block">Progettato</span></span>
            <span className="overflow-hidden block"><span className="line block">con le</span></span>
            <span className="overflow-hidden block"><span className="line block" style={{ color: 'var(--color-gold)' }}>nostre mani</span></span>
          </h2>
        </div>
      </div>

      {/* === BLOCK 3: Text === */}
      <div
        className="venue-text"
        style={{
          marginTop: 'var(--space-md)',
          paddingLeft: 'clamp(1.5rem, 5vw, 5rem)',
          paddingRight: 'clamp(1.5rem, 5vw, 5rem)',
          maxWidth: '30rem',
        }}
      >
        <p className="fluid-body-lg" style={{ color: 'white', marginBottom: 'var(--space-md)' }}>
          Tutti gli arredi progettati e realizzati da Danilo con il supporto del padre falegname.
        </p>
        <p className="fluid-body" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Un gusto raffinatissimo e una rara capacità di toccare con grazia i materiali.
          Pietra, legno e ferro in perfetta armonia. Solo 9 tavoli
          per un&rsquo;esperienza intima e personale.
        </p>
      </div>

      {/* === BLOCK 4: Horizontal scroll gallery === */}
      <div
        ref={scrollWrapRef}
        className="venue-hscroll relative overflow-hidden"
        style={{ marginTop: 'var(--space-lg)', height: '100vh' }}
      >
        <div
          ref={trackRef}
          className="venue-track flex items-center gap-5 will-change-transform"
          style={{
            height: '100%',
            paddingLeft: 'clamp(1.5rem, 5vw, 5rem)',
            paddingRight: 'clamp(1.5rem, 5vw, 5rem)',
          }}
        >
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="venue-slide flex-shrink-0 overflow-hidden"
              style={{ width: item.width, height: '70vh' }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Scroll hint — fades on edges */}
        <div className="absolute top-0 left-0 w-16 h-full pointer-events-none" style={{ background: 'linear-gradient(to right, var(--color-charcoal), transparent)' }} />
        <div className="absolute top-0 right-0 w-16 h-full pointer-events-none" style={{ background: 'linear-gradient(to left, var(--color-charcoal), transparent)' }} />
      </div>

      {/* === BLOCK 5: Stats === */}
      <div
        className="venue-stats flex flex-wrap items-center gap-8"
        style={{ padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 5vw, 5rem)' }}
      >
        {[
          { value: '9', desc: 'Tavoli' },
          { value: '100%', desc: 'Artigianale' },
          { value: '3', desc: 'Materiali' },
        ].map((stat, i) => (
          <div key={i} className="venue-stat flex items-baseline gap-2">
            <span className="font-serif" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 300, color: 'var(--color-gold)' }}>
              {stat.value}
            </span>
            <span style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-sans)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              {stat.desc}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
