import Reveal from '../components/Reveal.jsx'
import { Caustics, Condensation, Snowflake } from '../components/Decor.jsx'

/* Canva page 4 — flowing icy-blue background, used as a chapter break. */
export default function S04Transition() {
  return (
    <section id="growth" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#BFD8EE] px-5 text-center">
      {/* abstract frozen water: drifting soft-blue gradient fields */}
      <div className="absolute inset-[-20%] animate-drift" aria-hidden="true">
        <div className="absolute left-[10%] top-[8%] h-[60%] w-[55%] rounded-full bg-[radial-gradient(closest-side,#F2F8FD,transparent)] blur-2xl" />
        <div className="absolute right-[6%] top-[30%] h-[70%] w-[50%] rounded-full bg-[radial-gradient(closest-side,#6F97C4,transparent)] opacity-60 blur-3xl" />
        <div className="absolute bottom-[0%] left-[25%] h-[50%] w-[60%] rounded-full bg-[radial-gradient(closest-side,#DDEBF7,transparent)] blur-2xl" />
        <div className="absolute left-[-5%] top-[45%] h-[45%] w-[40%] rounded-full bg-[radial-gradient(closest-side,#A9CBE8,transparent)] blur-2xl" />
      </div>
      <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            d={`M-50 ${330 + i * 70} C 300 ${230 + i * 80}, 520 ${470 + i * 50}, 820 ${360 + i * 60} S 1300 ${260 + i * 70}, 1500 ${380 + i * 60}`}
            fill="none"
            stroke="#fff"
            strokeOpacity={0.5 - i * 0.07}
            strokeWidth={1}
          >
            <animate attributeName="stroke-dasharray" values="0 2400;2400 0" dur={`${10 + i * 2}s`} repeatCount="indefinite" />
          </path>
        ))}
      </svg>
      <Caustics id="transition-caustics" opacity={0.3} speed={30} />
      <Condensation density={40} seed={11} className="opacity-80" />
      <Snowflake className="absolute right-[12%] top-[18%] w-16 animate-spin-slow text-white/70" />
      <Snowflake className="absolute bottom-[16%] left-[10%] w-10 animate-spin-slow text-white/60" />

      <div className="relative z-10 max-w-[1100px]">
        <Reveal fade>
          <p className="label !text-deep/70">Chapter two</p>
        </Reveal>
        <Reveal delay={200} as="h2" className="mt-8 font-display text-[clamp(56px,10vw,156px)] font-light uppercase leading-[0.9] tracking-[0.02em] text-deep">
          How glacé
          <br /> will grow
        </Reveal>
        <Reveal delay={500} className="mt-10 flex items-center justify-center gap-5">
          <span className="h-px w-12 bg-deep/40" />
          <p className="font-display text-[clamp(22px,2.4vw,32px)] italic text-deep/80">Our marketing strategy.</p>
          <span className="h-px w-12 bg-deep/40" />
        </Reveal>
      </div>
    </section>
  )
}
