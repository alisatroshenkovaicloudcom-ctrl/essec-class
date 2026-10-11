import { useState } from 'react'
import ImageSlot from '../components/ImageSlot.jsx'
import Reveal from '../components/Reveal.jsx'
import { FloatingDrops, SlideTag, Snowflake } from '../components/Decor.jsx'

const PRODUCTS = [
  {
    id: '50',
    size: '50 ml',
    price: 39,
    slot: 'glace-50ml-product',
    role: 'Core product',
    copy: 'Our core product for daily skincare. Designed for regular use and offering better value per ml.',
    uses: ['Daily use', 'Better value per ml'],
  },
  {
    id: '15',
    size: '15 ml',
    price: 15,
    slot: 'glace-15ml-product',
    role: 'Trial & travel size',
    copy: 'Our smaller product, designed for:',
    uses: ['Travel', 'Gym bags', 'Handbags', 'Trial', 'Convenience'],
  },
]

const FUTURE = ['Cooling facial mist', 'Night gel', 'Tinted SPF', 'Additional SPF variants']

/* Canva page 9 — large heading left, two rounded image panels. */
export default function S09Portfolio() {
  const [sel, setSel] = useState('50')
  const perMl = (p) => (p.price / parseInt(p.size, 10)).toFixed(2)

  return (
    <section id="portfolio" className="relative overflow-hidden bg-gradient-to-br from-powder via-mist to-frost px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <FloatingDrops items={[{ x: '46%', y: '4%', s: 28 }, { x: '2%', y: '70%', s: 22, o: 0.4 }]} />
      <Snowflake className="absolute bottom-[6%] right-[4%] w-24 text-white" />
      <div className="relative mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <Reveal>
            <SlideTag id="portfolio">Product portfolio</SlideTag>
          </Reveal>
          <Reveal delay={100} as="h2" className="display mt-8 text-[clamp(56px,6.8vw,112px)]">
            One Formula.
            <br />
            <em className="italic text-steel">Two Sizes.</em>
          </Reveal>
          <Reveal delay={200} className="mt-10 max-w-[440px] space-y-4 body-copy">
            <p>Launching one formula in two sizes keeps the product range simple.</p>
            <p>
              The <strong className="font-medium text-deep">50 ml</strong> version is our main product. The <strong className="font-medium text-deep">15 ml</strong> version lowers the initial purchase commitment and encourages first-time trials.
            </p>
          </Reveal>

          {/* Interactive comparison */}
          <Reveal delay={300} className="mt-10 max-w-[460px] rounded-[28px] frosted p-6">
            <div className="flex items-center justify-between">
              <p className="label">Compare</p>
              <div className="flex rounded-full bg-powder p-1" role="tablist" aria-label="Choose a size">
                {PRODUCTS.map((p) => (
                  <button
                    key={p.id}
                    role="tab"
                    aria-selected={sel === p.id}
                    onClick={() => setSel(p.id)}
                    className={`rounded-full px-4 py-1.5 font-sans text-[13px] font-medium tracking-wide transition-all duration-500 ${sel === p.id ? 'bg-deep text-frost shadow' : 'text-slate hover:text-deep'}`}
                  >
                    {p.size}
                  </button>
                ))}
              </div>
            </div>
            <dl className="mt-6 divide-y divide-steel/15 font-sans text-[15px]">
              {[
                ['Price', (p) => `S$${p.price}`],
                ['Price per ml', (p) => `S$${perMl(p)}`],
                ['Role', (p) => p.role],
                ['Formula', () => 'Cooling moisturiser, SPF 30'],
              ].map(([k, f]) => (
                <div key={k} className="grid grid-cols-[1fr_1fr_1fr] items-center gap-3 py-3">
                  <dt className="font-light text-slate">{k}</dt>
                  {PRODUCTS.map((p) => (
                    <dd key={p.id} className={`transition-all duration-500 ${sel === p.id ? 'font-medium text-deep' : 'font-light text-deep/40'}`}>
                      {f(p)}
                    </dd>
                  ))}
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 sm:items-end">
          {PRODUCTS.map((p, i) => {
            const active = sel === p.id
            return (
              <Reveal key={p.id} delay={150 + i * 150}>
                <button
                  onClick={() => setSel(p.id)}
                  aria-pressed={active}
                  className={`group block w-full overflow-hidden rounded-[36px] text-left ring-1 transition-all duration-700 ${
                    active ? 'bg-white/80 shadow-[0_40px_80px_-40px_rgba(37,63,102,.55)] ring-deep/30' : 'bg-white/40 ring-white/80 hover:bg-white/60'
                  }`}
                >
                  <ImageSlot
                    name={p.slot}
                    alt={`glacé ${p.size} moisturiser`}
                    className={`m-3 rounded-[28px] transition-all duration-700 ${i === 0 ? 'aspect-[4/5]' : 'aspect-[4/4.2]'}`}
                    position="52% center"
                    hint={`Original ${p.size} mockup from Canva page 9`}
                  >
                    <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-deep backdrop-blur">
                      {p.size}
                    </span>
                  </ImageSlot>
                  <div className="px-6 pb-7 pt-3">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-[30px] font-normal uppercase leading-none tracking-[0.04em] text-deep">glacé {p.size}</h3>
                      <span className="font-display text-[32px] font-light text-steel">S${p.price}</span>
                    </div>
                    <p className="mt-3 font-sans text-[15px] font-light leading-relaxed text-deep/75">{p.copy}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {p.uses.map((u) => (
                        <li key={u} className="rounded-full bg-powder px-3 py-1 font-sans text-[12px] tracking-wide text-deep">
                          {u}
                        </li>
                      ))}
                    </ul>
                  </div>
                </button>
              </Reveal>
            )
          })}
        </div>
      </div>

      <Reveal className="relative mx-auto mt-20 max-w-[1440px] border-t border-steel/20 pt-10">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="label">Future possibilities</p>
            <p className="mt-3 font-sans text-[15px] font-light text-deep/70">These products would only be introduced after evaluating consumer demand and profitability.</p>
          </div>
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {FUTURE.map((f) => (
              <li key={f} className="card-lift rounded-[20px] border border-dashed border-steel/35 bg-white/30 p-4 font-display text-[21px] leading-tight text-deep/80">
                {f}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
