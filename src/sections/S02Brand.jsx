import ImageSlot from '../components/ImageSlot.jsx'
import Reveal, { CountUp } from '../components/Reveal.jsx'
import { FloatingDrops, SlideTag, Snowflake } from '../components/Decor.jsx'

const BENEFITS = ['Cool', 'Hydrate', 'Control Shine', 'Lightweight', 'Protect']

/* Canva page 2 — Singapore photograph left, pale-blue climate panel right. */
export default function S02Brand() {
  return (
    <section id="brand" className="relative grid min-h-[100svh] bg-powder lg:grid-cols-[0.92fr_1.08fr]">
      <div className="relative h-[62vh] lg:sticky lg:top-0 lg:h-[100svh]">
        <ImageSlot name="singapore-skyline" alt="Singapore's Marina Bay skyline reflected in the water on a bright, hazy day" className="h-full" position="center 40%" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep/45 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-6 right-6 sm:left-10">
          <p className="label !text-frost/90">Launch market</p>
          <p className="mt-2 font-display text-[44px] font-light leading-none text-frost sm:text-[56px]">Singapore</p>
        </div>
      </div>

      <div className="relative overflow-hidden px-5 py-20 sm:px-10 lg:px-16 lg:py-28 xl:px-24">
        <FloatingDrops items={[{ x: '88%', y: '6%', s: 34 }, { x: '92%', y: '58%', s: 20, o: 0.4 }]} />
        <Snowflake className="absolute -right-10 top-[38%] w-44 text-white/70" />

        <Reveal>
          <SlideTag n={2}>Why we’re launching glacé</SlideTag>
        </Reveal>
        <Reveal delay={100} as="h2" className="display mt-8 text-[clamp(44px,5.6vw,84px)]">
          Introducing glacé: <em className="font-display italic text-steel">Made for Singapore’s Climate</em>
        </Reveal>

        <div className="mt-14 grid gap-12 border-t border-steel/20 pt-12 md:grid-cols-[1fr_auto_1fr] md:gap-10">
          <Reveal delay={150}>
            <p className="font-display text-[30px] font-normal uppercase leading-[1.05] tracking-[0.03em] text-deep">
              A moisturizer
              <br />
              made for the heat.
            </p>
            <ul className="mt-8 space-y-0">
              {BENEFITS.map((b, i) => (
                <li key={b} className="group flex items-center gap-5 border-b border-steel/15 py-3.5 transition-colors hover:border-steel/50">
                  <span className="font-display text-[14px] italic text-steel/70">0{i + 1}</span>
                  <span className="font-display text-[26px] font-light leading-none text-deep transition-transform duration-500 group-hover:translate-x-2">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* vertical separation, as on the Canva slide */}
          <div className="hidden w-px bg-gradient-to-b from-transparent via-steel/35 to-transparent md:block" />

          <div className="space-y-9">
            <Stat delay={200} icon={<ThermoIcon />} value={<><CountUp to={30} />–<CountUp to={33} />°C</>} label="Typical daytime highs" />
            <Stat delay={320} icon={<HumidityIcon />} value={<>~<CountUp to={82} />%</>} label="Average annual humidity" />
            <Stat delay={440} icon={<SunIcon />} value="Year-round" label="Hot and humid climate" small />
          </div>
        </div>

        <Reveal delay={200} className="mt-16 rounded-[28px] frosted p-7 sm:p-10">
          <p className="label">The problem we solve</p>
          <div className="mt-5 space-y-4 body-copy">
            <p>glacé was created to address a common skincare problem in tropical climates. Traditional moisturisers can feel heavy, sticky or uncomfortable in hot and humid weather.</p>
            <p>Our product combines cooling hydration, shine control, lightweight comfort and SPF 30 protection.</p>
            <p>Singapore is our initial launch market because its year-round climate makes these benefits particularly relevant.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Stat({ icon, value, label, delay, small }) {
  return (
    <Reveal delay={delay} className="flex items-start gap-5">
      <span className="mt-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-steel/30 text-steel">{icon}</span>
      <div>
        <p className={`font-display font-light leading-none text-deep whitespace-nowrap ${small ? 'text-[clamp(30px,2.6vw,40px)] uppercase tracking-[0.02em]' : 'text-[clamp(40px,3.6vw,54px)]'}`}>{value}</p>
        <p className="label mt-2">{label}</p>
      </div>
    </Reveal>
  )
}

const iconProps = { viewBox: '0 0 24 24', className: 'h-5 w-5', fill: 'none', stroke: 'currentColor', strokeWidth: 1.2, strokeLinecap: 'round', 'aria-hidden': true }
function ThermoIcon() {
  return (
    <svg {...iconProps}>
      <path d="M10 14.5V4.5a2 2 0 0 1 4 0v10a4 4 0 1 1-4 0Z" />
      <path d="M12 9v7.5" />
    </svg>
  )
}
function HumidityIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 3s-6 6.8-6 11a6 6 0 0 0 12 0c0-4.2-6-11-6-11Z" />
      <path d="M9.5 15.5l5-5M10 11h.01M14 15h.01" />
    </svg>
  )
}
function SunIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
    </svg>
  )
}
