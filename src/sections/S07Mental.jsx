import ImageSlot from '../components/ImageSlot.jsx'
import Reveal from '../components/Reveal.jsx'
import { Condensation, FloatingDrops, SlideTag, WaterDrop } from '../components/Decor.jsx'

const CEPS = [
  {
    title: 'Hot & Humid Weather',
    when: 'When traditional moisturisers feel too heavy or sticky.',
    answer: 'glacé offers lightweight cooling hydration designed for tropical conditions.',
  },
  {
    title: 'Shiny Skin',
    when: 'When consumers want to stay hydrated without a greasy appearance.',
    answer: 'glacé combines hydration with shine control.',
  },
  {
    title: 'Daily Morning Routine',
    when: 'When consumers need comfortable skincare before work, university or applying makeup.',
    answer: 'glacé offers a lightweight daily moisturiser with SPF 30.',
  },
]

const EXTRA = [
  { title: 'From Air Conditioning to Heat', text: 'For moments when consumers step outdoors into Singapore’s humidity.' },
  { title: 'After Outdoor Activity', text: 'For moments when consumers want a refreshing skincare experience after heat exposure.' },
]

/* Canva page 7 — heading left, tall ice image centre, entry points right. */
export default function S07Mental() {
  return (
    <section id="mental" className="relative overflow-hidden bg-mist px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <FloatingDrops items={[{ x: '3%', y: '6%', s: 30 }, { x: '95%', y: '88%', s: 26, o: 0.45 }]} />
      <div className="relative mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1fr_0.9fr_1.1fr] lg:gap-14">
        <div className="lg:pt-6">
          <Reveal>
            <SlideTag id="mental">Mental availability</SlideTag>
          </Reveal>
          <Reveal delay={100} as="h2" className="display mt-8 text-[clamp(48px,5.4vw,88px)]">
            When Consumers <em className="italic text-steel">Think of glacé</em>
          </Reveal>
          <Reveal delay={200} className="mt-10 body-copy max-w-[380px]">
            <p>Mental availability means making glacé easy to remember when consumers experience a relevant skincare need.</p>
          </Reveal>
          <Reveal delay={300} className="mt-12 hidden border-l border-steel/30 pl-6 lg:block">
            <p className="label">Category entry points</p>
            <p className="mt-3 font-display text-[24px] italic leading-snug text-steel">The moments and needs that should bring glacé to mind.</p>
          </Reveal>
        </div>

        <Reveal delay={150} className="group relative h-[64vh] min-h-[420px] overflow-hidden rounded-[999px_999px_36px_36px] lg:h-auto lg:min-h-[640px]">
          <ImageSlot name="glace-mental-availability" alt="The glacé bottle surrounded by ice cubes" className="h-full" position="52% center" />
          <Condensation density={16} seed={9} />
        </Reveal>

        <ul className="flex flex-col justify-center gap-4">
          {CEPS.map((c, i) => (
            <Reveal as="li" key={c.title} delay={200 + i * 140}>
              <div className="group card-lift flex gap-5 rounded-[26px] bg-white/55 p-6 ring-1 ring-white/80 transition-colors duration-500 hover:bg-white/85">
                <WaterDrop className="mt-1 h-9 w-7 shrink-0 text-steel transition-transform duration-700 group-hover:-translate-y-1" />
                <div>
                  <h3 className="font-sans text-[15px] font-medium uppercase tracking-[0.24em] text-deep">{c.title}</h3>
                  <p className="mt-2 font-sans text-[16px] font-light leading-relaxed text-deep/75">{c.when}</p>
                  <p className="mt-3 font-display text-[21px] leading-snug text-deep">{c.answer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>

      <div className="relative mx-auto mt-14 grid max-w-[1440px] gap-4 sm:grid-cols-2 lg:mt-20">
        {EXTRA.map((e, i) => (
          <Reveal key={e.title} delay={i * 140}>
            <div className="card-lift flex h-full items-start gap-5 rounded-[26px] border border-steel/15 bg-powder/80 p-6 sm:p-8">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/70">
                <WaterDrop className="h-6 w-5 text-steel" filled />
              </span>
              <div>
                <p className="label !text-steel/80">Additional entry point</p>
                <h3 className="mt-2 font-display text-[28px] font-normal uppercase leading-tight tracking-[0.03em] text-deep">{e.title}</h3>
                <p className="mt-2 font-sans text-[16px] font-light text-deep/75">{e.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
