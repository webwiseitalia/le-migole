import storyImg from '../assets/foto/foto-11.webp'
import detailImg from '../assets/foto/foto-16.webp'

export default function Story() {
  return (
    <section id="storia" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-sans font-medium mb-3">La Nostra Storia</p>
          <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-charcoal">
            &ldquo;Da domani si cambia vita!&rdquo;
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={storyImg}
                alt="Lo chef Danilo al lavoro - impiattamento curato"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-right-8 w-40 sm:w-52 aspect-square overflow-hidden rounded-sm shadow-2xl border-4 border-cream">
              <img
                src={detailImg}
                alt="Preparazione in cucina - risotto e pasta"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="lg:pl-4 pt-8 lg:pt-0">
            <p className="font-serif text-xl sm:text-2xl text-charcoal/80 italic leading-relaxed mb-8">
              Danilo, arredatore per 28 anni, e Luisa, proprietaria di negozi di articoli regalo a Moena,
              hanno deciso un giorno di cambiare vita completamente.
            </p>

            <div className="space-y-6 text-charcoal/70 leading-relaxed">
              <p>
                Dopo una gavetta nella ristorazione in Alto Adige, hanno aperto insieme Le Migole a Tesero,
                portando in valle un locale &ldquo;non consono&rdquo;: a metà strada tra il ristorante di alto livello
                e il locale informale per serate tra amici.
              </p>
              <p>
                Il nome &ldquo;Migole&rdquo; — briciole in dialetto trentino — nacque durante una cena con un amico
                dall&rsquo;appetito prodigioso. Dopo cena il tavolo era pieno di briciole e lo rimproverarono
                bonariamente. L&rsquo;amico trovò il termine così divertente che decisero di battezzare così il locale.
              </p>
              <p>
                La cucina di Danilo è nata dall&rsquo;incontro della tradizione valligiana con tecniche e ingredienti
                provenienti da culture e paesi diversi. Una fusione di sapori che sappia stupire ed emozionare.
              </p>
            </div>

            {/* Signature quote */}
            <div className="mt-10 pt-8 border-t border-charcoal/10">
              <blockquote className="font-serif italic text-lg text-gold">
                &ldquo;Le Migole&hellip; briciole di vita, un percorso di esperienze.
                Benvenuti a casa nostra.&rdquo;
              </blockquote>
              <p className="mt-3 text-sm text-charcoal/50 uppercase tracking-wider">
                — Danilo &amp; Luisa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
