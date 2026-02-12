import venue1 from '../assets/foto/foto-28.webp'
import venue2 from '../assets/foto/foto-15.webp'
import lampImg from '../assets/foto/foto-36.webp'
import stoneImg from '../assets/foto/foto-38.webp'
import tableImg from '../assets/foto/foto-40.webp'
import grissiniImg from '../assets/foto/foto-30.webp'

export default function Venue() {
  return (
    <section id="locale" className="section-padding bg-charcoal text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-sans font-medium mb-3">Il Locale</p>
          <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-white">
            Un ambiente progettato<br className="hidden sm:block" /> con le nostre mani
          </h2>
        </div>

        {/* Main image */}
        <div className="mb-12">
          <div className="aspect-[16/7] overflow-hidden rounded-sm">
            <img
              src={venue1}
              alt="Sala del ristorante Le Migole - pietra, legno e ferro"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-serif text-xl sm:text-2xl text-white/80 italic leading-relaxed mb-6">
            Tutti gli arredi sono stati progettati e realizzati personalmente da Danilo
            con il supporto del padre falegname.
          </p>
          <p className="text-white/60 leading-relaxed">
            Un gusto raffinatissimo e una rara capacità di toccare con grazia i materiali.
            Pietra, legno e ferro si sposano in perfetta armonia. Solo 9 tavoli
            per un&rsquo;esperienza intima e personale, dove sentirsi a casa.
          </p>
        </div>

        {/* Detail gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="aspect-[3/4] overflow-hidden rounded-sm">
            <img src={venue2} alt="Interni - tavoli in legno e sedie in pelle" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="aspect-[3/4] overflow-hidden rounded-sm">
            <img src={lampImg} alt="Lampade di design" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="aspect-[3/4] overflow-hidden rounded-sm">
            <img src={stoneImg} alt="Dettaglio parete in pietra" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="aspect-[3/4] overflow-hidden rounded-sm">
            <img src={tableImg} alt="Centrotavola su legno naturale" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <p className="text-gold text-4xl font-serif font-bold mb-2">9</p>
            <p className="text-white/50 uppercase tracking-wider text-sm">Tavoli esclusivi</p>
          </div>
          <div>
            <p className="text-gold text-4xl font-serif font-bold mb-2">100%</p>
            <p className="text-white/50 uppercase tracking-wider text-sm">Arredi artigianali</p>
          </div>
          <div>
            <p className="text-gold text-4xl font-serif font-bold mb-2">3</p>
            <p className="text-white/50 uppercase tracking-wider text-sm">Materiali: Pietra, Legno, Ferro</p>
          </div>
        </div>
      </div>
    </section>
  )
}
