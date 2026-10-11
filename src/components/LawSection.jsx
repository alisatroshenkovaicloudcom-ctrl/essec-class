import Reveal from './Reveal.jsx'
import { SlideTag, Snowflake } from './Decor.jsx'

/*
 * Layout of the "Key learning from the 3 laws" slides:
 * small kicker, oversized serif title, bullet points with a bold lead,
 * and a tall visual on one side.
 */
export default function LawSection({ id, number, title, points, visual, takeaway, reverse = false, tone = 'bg-frost' }) {
  return (
    <section id={id} className={`relative overflow-hidden ${tone} px-5 py-24 sm:px-8 lg:px-12 lg:py-28`}>
      <Snowflake className={`absolute top-[-40px] w-56 text-ice/80 ${reverse ? '-left-16' : '-right-16'}`} />
      <Snowflake className="absolute bottom-[8%] left-[4%] w-28 text-ice/70" />
      <div className={`relative mx-auto grid max-w-[1440px] items-center gap-12 lg:gap-16 ${reverse ? 'lg:grid-cols-[0.8fr_1.2fr]' : 'lg:grid-cols-[1.2fr_0.8fr]'}`}>
        <div className={reverse ? 'lg:order-2' : ''}>
          <Reveal>
            <SlideTag id={id}>Key learning from the 3 laws · {number} / 03</SlideTag>
          </Reveal>
          <Reveal delay={100} as="h2" className="display mt-7 text-[clamp(46px,6vw,96px)]">
            {title}
          </Reveal>

          <ul className="mt-12 space-y-3">
            {points.map((p, i) => (
              <Reveal as="li" key={p.lead} delay={180 + i * 110}>
                <div className="group card-lift flex gap-5 rounded-[24px] border border-transparent p-4 transition-colors duration-500 hover:border-white hover:bg-white/60 sm:p-5">
                  <span className="mt-1 font-display text-[22px] italic leading-none text-glacier transition-colors duration-500 group-hover:text-steel">0{i + 1}</span>
                  <p className="font-sans text-[17px] font-light leading-relaxed text-deep/80">
                    <strong className="font-medium text-deep">{p.lead} :</strong> {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>

          {takeaway && (
            <Reveal delay={200} className="mt-10 rounded-[26px] bg-deep p-6 text-frost sm:p-8">
              <p className="font-sans text-[11px] font-medium uppercase tracking-label text-frost/70">What it means for glacé</p>
              <p className="mt-3 font-display text-[clamp(22px,2.2vw,30px)] leading-snug">{takeaway}</p>
            </Reveal>
          )}
        </div>

        <Reveal delay={200} className={`relative ${reverse ? 'lg:order-1' : ''}`}>
          {visual}
        </Reveal>
      </div>
    </section>
  )
}
