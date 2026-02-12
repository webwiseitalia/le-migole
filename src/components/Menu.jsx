import { useState } from 'react'
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

const categories = ['Tutti', 'Antipasti', 'Primi', 'Secondi', 'Dolci']

const dishes = [
  { img: dish1, name: 'Tartare con avocado e wasabi', category: 'Antipasti' },
  { img: dish5, name: 'Tartare di Chianina con gelato alla cipolla', category: 'Antipasti' },
  { img: dish7, name: 'Canederli in tre versioni', category: 'Primi' },
  { img: dish10, name: 'Risotto verde con salmerino', category: 'Primi' },
  { img: dish3, name: 'Linguine alla barbabietola', category: 'Primi' },
  { img: dish12, name: 'Linguine allo zafferano con gamberi', category: 'Primi' },
  { img: dish9, name: 'Tortelli ripieni', category: 'Primi' },
  { img: dish6, name: 'Filetto con purè di zucca', category: 'Secondi' },
  { img: dish4, name: 'Risotto al radicchio con speck croccante', category: 'Primi' },
  { img: dish11, name: 'Gamberi in panatura croccante', category: 'Secondi' },
  { img: dish2, name: 'Capesante scottate con fiori eduli', category: 'Antipasti' },
  { img: dish8, name: 'Dessert al cioccolato con albicocca', category: 'Dolci' },
]

export default function Menu() {
  const [active, setActive] = useState('Tutti')
  const filtered = active === 'Tutti' ? dishes : dishes.filter(d => d.category === active)

  return (
    <section id="cucina" className="section-padding bg-warm">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-6">
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-sans font-medium mb-3">La Cucina</p>
          <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-charcoal">
            Creatività è la parola d&rsquo;ordine
          </h2>
        </div>

        <p className="max-w-2xl mx-auto text-center text-charcoal/60 leading-relaxed mb-12">
          Piatti non comuni, nati dall&rsquo;incontro della tradizione valligiana con tecniche e ingredienti
          provenienti da culture e paesi diversi. Materie prime eccellenti e prodotti locali selezionati:
          burro della Malga Sadole, birra Buio Pesto di Maso Alto, pasta Monograno Felicetti,
          zafferano di Fiemme.
        </p>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-sm font-sans font-medium uppercase tracking-wider rounded-sm transition-all duration-300 ${
                active === cat
                  ? 'bg-charcoal text-white'
                  : 'bg-transparent text-charcoal/60 hover:text-charcoal border border-charcoal/20 hover:border-charcoal/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dishes grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filtered.map((dish, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden rounded-sm bg-charcoal">
              <img
                src={dish.img}
                alt={dish.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-serif text-sm sm:text-base">{dish.name}</p>
                <p className="text-gold text-xs uppercase tracking-wider mt-1">{dish.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Menu note */}
        <div className="text-center mt-12">
          <p className="font-serif italic text-charcoal/50 mb-6">
            Il menu cambia stagionalmente per seguire la disponibilità dei migliori ingredienti.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-charcoal/40">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-600" />
              Opzioni vegetariane
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Opzioni vegane
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Gluten-free su richiesta
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
