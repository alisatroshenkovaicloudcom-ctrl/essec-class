import ImageSlot from '../components/ImageSlot.jsx'
import Reveal from '../components/Reveal.jsx'
import { FloatingDrops, SlideTag } from '../components/Decor.jsx'

// Benefits exactly as listed in the presentation — no additional claims.
const BRANDS = [
  { name: 'Evereden', slot: 'competitor-evereden', benefits: ['Cooling', 'Hydration', 'SPF'] },
  { name: 'Suu Balm', slot: 'competitor-suu-balm', benefits: ['Cooling', 'Moisturisation', 'Itch relief'] },
  { name: 'Eucerin', slot: 'competitor-eucerin', benefits: ['Oil control', 'SPF'] },
  { name: 'Laneige', slot: 'competitor-laneige', benefits: ['Lightweight', 'Refreshing hydration'] },
]

/* Canva page 3 — four rounded pale-blue competitor cards in a 2×2 grid. */
export default function S03Benchmark() {
  return (
    <section id="benchmark" className="relative overflow-hidden bg-gradient-to-b from-mist to-powder px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <FloatingDrops />
      <div className="relative mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <SlideTag id="benchmark">Competitive landscape</SlideTag>
          </Reveal>
          <Reveal delay={100} as="h2" className="display mt-8 text-[clamp(52px,6.4vw,104px)]">
            Our Benchmark <em className="italic text-steel">Set</em>
          </Reveal>
          <Reveal delay={200} className="mt-10 space-y-5 body-copy max-w-[440px]">
            <p>These brands demonstrate that individual benefits such as cooling, hydration, oil control and SPF already exist in the skincare market.</p>
            <p className="font-display text-[26px] font-normal leading-snug text-deep">
              glacé aims to combine these benefits into one lightweight moisturiser designed for hot and humid conditions.
            </p>
          </Reveal>
          <Reveal delay={300} className="mt-10 flex flex-wrap gap-2">
            {['Cooling', 'Hydration', 'Oil control', 'SPF', 'Lightweight'].map((b) => (
              <span key={b} className="rounded-full bg-deep px-4 py-2 font-sans text-[12px] uppercase tracking-[0.18em] text-frost">
                {b}
              </span>
            ))}
            <span className="basis-full pt-2 font-display text-[22px] italic text-steel">— all in one glacé.</span>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          {BRANDS.map((b, i) => (
            <Reveal key={b.name} delay={i * 120}>
              <article className="group card-lift flex h-full flex-col overflow-hidden rounded-[32px] border border-white/80 bg-ice/70 p-3 shadow-[0_20px_50px_-35px_rgba(37,63,102,.5)]">
                <ImageSlot name={b.slot} alt={`${b.name} product`} className="aspect-[4/3] rounded-[24px]" hint={`${b.name} product photo from Canva page 3`} />
                <div className="flex flex-1 flex-col px-4 pb-4 pt-6">
                  <h3 className="font-display text-[34px] font-normal uppercase leading-none tracking-[0.06em] text-deep">{b.name}</h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {b.benefits.map((x) => (
                      <li key={x} className="rounded-full border border-steel/30 bg-white/60 px-3.5 py-1.5 font-sans text-[13px] tracking-wide text-deep transition-colors duration-500 group-hover:border-steel/60">
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
