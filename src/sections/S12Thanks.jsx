import { images } from '../data/images.js'
import Reveal from '../components/Reveal.jsx'
import { Caustics, Condensation, FloatingDrops } from '../components/Decor.jsx'
import { scrollToSection } from '../data/sections.js'

/* Canva page 12 — closing slide. */
export default function S12Thanks() {
  return (
    <section id="thanks" className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-mist via-powder to-ice px-5 pb-14 pt-24 text-center">
      <FloatingDrops items={[{ x: '8%', y: '14%', s: 32 }, { x: '86%', y: '20%', s: 24 }, { x: '78%', y: '76%', s: 38, o: 0.45 }, { x: '12%', y: '70%', s: 22 }]} />

      <Reveal fade className="relative">
        <h2 className="font-display text-[clamp(88px,10vw,150px)] font-light leading-[0.8] tracking-[-0.03em] text-deep">glacé</h2>
      </Reveal>
      <Reveal delay={300}>
        <p className="mt-12 font-sans text-[clamp(16px,1.6vw,22px)] font-medium uppercase tracking-[0.6em] text-steel">Stay icy.</p>
      </Reveal>

      <Reveal delay={500} className="relative mt-10 w-full max-w-[230px] sm:max-w-[250px]">
        {/* bottle with a water reflection beneath it */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-[999px_999px_40px_40px] shadow-[0_50px_90px_-50px_rgba(37,63,102,.6)]" data-image-slot="glace-closing-bottle">
          <img src={images['glace-closing-bottle']} alt="The glacé ice-cube moisturiser bottle on ice" className="h-full w-full scale-110 object-cover object-[52%_60%]" loading="lazy" />
          <Caustics id="thanks-caustics" opacity={0.4} />
          <Condensation density={14} seed={31} />
        </div>
        <div className="relative mx-auto -mt-1 h-14 w-[86%] overflow-hidden rounded-b-[40px] opacity-40 blur-[2px]" aria-hidden="true" style={{ WebkitMaskImage: 'linear-gradient(#000, transparent)', maskImage: 'linear-gradient(#000, transparent)' }}>
          <img src={images['glace-closing-bottle']} alt="" className="h-[300%] w-full -scale-y-100 object-cover object-[52%_60%]" />
        </div>
      </Reveal>

      <Reveal delay={700}>
        <p className="mt-1 font-display text-[clamp(40px,4.4vw,58px)] font-light italic text-deep">Thank you.</p>
      </Reveal>
      <Reveal delay={900}>
        <button onClick={() => scrollToSection('home')} className="btn-ice mt-6">
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
            <path d="M8 14V2M3 7l5-5 5 5" />
          </svg>
          Back to top
        </button>
      </Reveal>

      <p className="absolute bottom-5 left-0 right-0 font-sans text-[11px] uppercase tracking-[0.3em] text-slate/70">glacé · Cooling facial moisturiser SPF 30 · A university marketing project</p>
    </section>
  )
}
