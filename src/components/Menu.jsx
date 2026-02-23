import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import dish1 from '../assets/foto/foto-9.webp'
import dish2 from '../assets/foto/foto-49.webp'
import dish3 from '../assets/foto/foto-12.webp'
import dish4 from '../assets/foto/foto-50.webp'
import dish5 from '../assets/foto/foto-6.webp'
import dish6 from '../assets/foto/foto-10.webp'
import dish7 from '../assets/foto/foto-21.webp'
import dish8 from '../assets/foto/foto-13.webp'
import dish9 from '../assets/foto/foto-37.webp'
import dish10 from '../assets/foto/foto-22.webp'
import dish11 from '../assets/foto/foto-48.webp'
import dish12 from '../assets/foto/foto-20.webp'

gsap.registerPlugin(ScrollTrigger)

const dishes = [
  { img: dish1, name: 'Tartare con avocado e wasabi', category: 'Antipasti' },
  { img: dish5, name: 'Tartare di Chianina con gelato alla cipolla', category: 'Antipasti' },
  { img: dish2, name: 'Capesante scottate con fiori eduli', category: 'Antipasti' },
  { img: dish7, name: 'Canederli in tre versioni', category: 'Primi' },
  { img: dish10, name: 'Risotto verde con salmerino', category: 'Primi' },
  { img: dish3, name: 'Linguine alla barbabietola', category: 'Primi' },
  { img: dish12, name: 'Linguine allo zafferano con gamberi', category: 'Primi' },
  { img: dish9, name: 'Tortelli ripieni', category: 'Primi' },
  { img: dish4, name: 'Risotto al radicchio con speck croccante', category: 'Primi' },
  { img: dish6, name: 'Filetto con purè di zucca', category: 'Secondi' },
  { img: dish11, name: 'Gamberi in panatura croccante', category: 'Secondi' },
  { img: dish8, name: 'Dessert al cioccolato con albicocca', category: 'Dolci' },
]

export default function Menu() {
  const sectionRef = useRef(null)
  const [hoveredDish, setHoveredDish] = useState(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.menu-label', { opacity: 0, x: -30 }, {
        opacity: 1, x: 0, duration: 0.8,
        scrollTrigger: { trigger: '.menu-label', start: 'top 85%' },
      })

      gsap.fromTo('.menu-heading .m-line', { yPercent: 120 }, {
        yPercent: 0, duration: 1.2, stagger: 0.1, ease: 'power4.out',
        scrollTrigger: { trigger: '.menu-heading', start: 'top 80%' },
      })

      gsap.fromTo('.menu-intro', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8,
        scrollTrigger: { trigger: '.menu-intro', start: 'top 85%' },
      })

      gsap.fromTo('.menu-dish-row', { opacity: 0, x: -40 }, {
        opacity: 1, x: 0, duration: 0.7, stagger: 0.06, ease: 'power3.out',
        scrollTrigger: { trigger: '.menu-list', start: 'top 75%' },
      })

      gsap.fromTo('.menu-featured', { clipPath: 'inset(100% 0 0 0)' }, {
        clipPath: 'inset(0% 0 0 0)', duration: 1.5, ease: 'power4.inOut',
        scrollTrigger: { trigger: '.menu-featured', start: 'top 75%' },
      })

      gsap.fromTo('.menu-note', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.6,
        scrollTrigger: { trigger: '.menu-note', start: 'top 90%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (hoveredDish !== null && imgRef.current) {
      gsap.to(imgRef.current, { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' })
    } else if (imgRef.current) {
      gsap.to(imgRef.current, { opacity: 0, scale: 0.95, duration: 0.3, ease: 'power2.in' })
    }
  }, [hoveredDish])

  return (
    <section ref={sectionRef} id="cucina" style={{ padding: 'var(--space-xl) 0', background: 'var(--color-warm)' }}>
      <div style={{ padding: '0 clamp(1.5rem, 5vw, 5rem)' }}>
        <p className="menu-label label" style={{ color: 'var(--color-gold)', marginBottom: 'var(--space-sm)' }}>
          La Cucina
        </p>
        <h2 className="menu-heading fluid-h2" style={{ maxWidth: '20ch', color: 'var(--color-charcoal)' }}>
          <span className="overflow-hidden block"><span className="m-line block">Creatività è</span></span>
          <span className="overflow-hidden block"><span className="m-line block">la parola</span></span>
          <span className="overflow-hidden block"><span className="m-line block" style={{ color: 'var(--color-gold)' }}>d&rsquo;ordine</span></span>
        </h2>
      </div>

      {/* Two-column: dish list left, floating image right */}
      <div
        className="grid grid-cols-1 lg:grid-cols-12 relative"
        style={{ marginTop: 'var(--space-lg)', padding: '0 clamp(1.5rem, 5vw, 5rem)' }}
      >
        {/* Left: intro text + dish list */}
        <div className="lg:col-span-7">
          <p
            className="menu-intro fluid-body"
            style={{ color: 'rgba(26,26,26,0.55)', maxWidth: '42ch', marginBottom: 'var(--space-lg)' }}
          >
            Piatti non comuni, nati dall&rsquo;incontro della tradizione valligiana con tecniche
            e ingredienti provenienti da culture e paesi diversi. Materie prime eccellenti
            e prodotti locali selezionati.
          </p>

          {/* Dish list - editorial style, not cards */}
          <div className="menu-list">
            {dishes.map((dish, i) => (
              <div
                key={i}
                className="menu-dish-row group flex items-baseline justify-between py-4 cursor-default"
                style={{ borderBottom: '1px solid rgba(26,26,26,0.08)' }}
                onMouseEnter={() => setHoveredDish(i)}
                onMouseLeave={() => setHoveredDish(null)}
              >
                <div className="flex items-baseline gap-4">
                  <span
                    className="font-serif transition-colors duration-300"
                    style={{
                      fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                      color: hoveredDish === i ? 'var(--color-gold)' : 'var(--color-charcoal)',
                      fontStyle: 'italic',
                    }}
                  >
                    {dish.name}
                  </span>
                </div>
                <span
                  className="label flex-shrink-0 ml-4 transition-colors duration-300"
                  style={{
                    fontSize: '0.55rem',
                    color: hoveredDish === i ? 'var(--color-gold)' : 'rgba(26,26,26,0.3)',
                  }}
                >
                  {dish.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: floating image that changes on hover */}
        <div className="hidden lg:block lg:col-span-5 relative">
          <div className="sticky" style={{ top: 'clamp(6rem, 15vh, 10rem)' }}>
            <div
              ref={imgRef}
              className="overflow-hidden"
              style={{
                width: 'clamp(16rem, 22vw, 24rem)',
                aspectRatio: '4/5',
                marginLeft: 'auto',
                opacity: 0,
                transform: 'rotate(-2deg)',
                boxShadow: '0 40px 80px rgba(0,0,0,0.15)',
              }}
            >
              {hoveredDish !== null && (
                <img
                  src={dishes[hoveredDish].img}
                  alt={dishes[hoveredDish].name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Featured dish - full bleed */}
      <div
        className="menu-featured relative overflow-hidden"
        style={{ marginTop: 'var(--space-xl)', height: 'clamp(16rem, 35vh, 28rem)' }}
      >
        <img src={dish7} alt="Canederli in tre versioni" className="w-full h-full object-cover" />
        <div
          className="absolute inset-0 flex items-end"
          style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.6) 0%, transparent 60%)', padding: 'clamp(1.5rem, 3vw, 3rem)' }}
        >
          <div>
            <p className="label" style={{ color: 'var(--color-gold)', marginBottom: '0.5rem', fontSize: '0.6rem' }}>
              Signature
            </p>
            <p className="font-serif text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontStyle: 'italic' }}>
              Canederli in tre versioni
            </p>
          </div>
        </div>
      </div>

      {/* Note + dietary info */}
      <div style={{ padding: '0 clamp(1.5rem, 5vw, 5rem)', marginTop: 'var(--space-lg)', textAlign: 'center' }}>
        <p
          className="menu-note font-serif"
          style={{ color: 'rgba(26,26,26,0.4)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 1.8vw, 1.6rem)', maxWidth: '60ch', margin: '0 auto' }}
        >
          Il menu cambia stagionalmente per seguire la disponibilità dei migliori ingredienti.
          Opzioni vegetariane, vegane e gluten-free su richiesta.
        </p>
      </div>
    </section>
  )
}
