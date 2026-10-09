import Reveal, { useInView } from '../components/Reveal.jsx'
import { FloatingDrops, SlideTag, Snowflake } from '../components/Decor.jsx'

const STAGES = [
  {
    stage: 'Introduction',
    goal: 'Build brand recognition.',
    points: ['Introduce glacé’s distinctive assets.', 'Test whether consumers recognise the logo, ice-cube bottle and brand colours.'],
  },
  {
    stage: 'Expansion',
    goal: 'Reach new customers.',
    points: ['Expand retail and digital availability.', 'Focus on increasing brand penetration and recruiting new buyers.'],
  },
  {
    stage: 'Tracking',
    goal: 'Collect customer feedback.',
    points: [
      'Target 50 verified customer reviews.',
      'Identify purchase barriers related to price, convenience, product experience and availability.',
      'Use customer feedback to improve the brand.',
    ],
  },
]

const EASY = ['Easy to remember.', 'Easy to find.', 'Easy to try.', 'Easy to buy again.']

/* Canva page 11 — pale blue, water drops, three-stage launch timeline. */
export default function S11Launch() {
  const [lineRef, lineIn] = useInView({ threshold: 0.3 })
  return (
    <section id="launch" className="relative overflow-hidden bg-gradient-to-b from-powder to-mist px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <FloatingDrops items={[{ x: '5%', y: '10%', s: 36 }, { x: '90%', y: '8%', s: 24 }, { x: '84%', y: '62%', s: 40, o: 0.4 }, { x: '8%', y: '74%', s: 20 }]} />
      <Snowflake className="absolute -left-10 top-[40%] w-48 text-white/70" />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="text-center">
          <Reveal className="flex justify-center">
            <SlideTag n={11}>Launch strategy</SlideTag>
          </Reveal>
          <Reveal delay={100} as="h2" className="display mx-auto mt-8 text-[clamp(52px,7vw,116px)]">
            From Launch <em className="italic text-steel">to Growth</em>
          </Reveal>
        </div>

        <div ref={lineRef} className="relative mt-20">
          {/* timeline line that "freezes" across as it scrolls in */}
          <div className="absolute left-[16.6%] right-[16.6%] top-7 hidden h-px bg-steel/15 lg:block" aria-hidden="true">
            <div className="h-full origin-left bg-steel/60 transition-transform duration-[2400ms] ease-out" style={{ transform: `scaleX(${lineIn ? 1 : 0})` }} />
          </div>

          <ol className="grid gap-6 lg:grid-cols-3">
            {STAGES.map((s, i) => (
              <Reveal as="li" key={s.stage} delay={300 + i * 450} className="flex flex-col items-center">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-deep font-display text-[22px] italic text-frost shadow-[0_0_0_8px_rgba(242,248,253,.9)]">{i + 1}</span>
                <article className="card-lift mt-6 flex w-full flex-1 flex-col rounded-[34px] bg-white/65 p-8 ring-1 ring-white backdrop-blur-sm">
                  <p className="label">Stage {i + 1}</p>
                  <h3 className="mt-3 font-display text-[44px] font-light uppercase leading-none tracking-[0.03em] text-deep">{s.stage}</h3>
                  <p className="mt-5 font-display text-[24px] italic text-steel">{s.goal}</p>
                  <ul className="mt-5 space-y-3 border-t border-steel/15 pt-5">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-3 font-sans text-[16px] font-light leading-relaxed text-deep/80">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={200} className="mx-auto mt-24 max-w-[1100px] rounded-[40px] frosted px-6 py-12 text-center sm:px-12">
          <p className="label">Our strategy is to make glacé</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {EASY.map((e, i) => (
              <Reveal as="li" key={e} delay={300 + i * 180} className="font-display text-[clamp(28px,2.6vw,38px)] font-light leading-tight text-deep">
                {e}
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
