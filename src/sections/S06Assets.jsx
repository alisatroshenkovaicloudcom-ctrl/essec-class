import ImageSlot from '../components/ImageSlot.jsx'
import { images } from '../data/images.js'
import Reveal from '../components/Reveal.jsx'
import { Condensation, SlideTag, Snowflake } from '../components/Decor.jsx'

const PANELS = [
  { key: 'wordmark', title: 'The Wordmark', note: 'Elongated lowercase serif with an accented é.' },
  { key: 'glace-asset-ice-cube', title: 'The Ice Cube', note: 'The geometric, frozen-glass cap.', alt: 'Close-up of the transparent ice-cube cap of the glacé bottle covered in water droplets', pos: 'center' },
  { key: 'glace-asset-product', title: 'The Product', note: 'Frosted icy-blue body, ice-cube cap.', alt: 'The complete glacé moisturiser bottle on ice', pos: '52% center' },
  { key: 'glace-asset-frost', title: 'The Frost', note: 'Ice, condensation and frozen water.', alt: 'Ice cube and bubbles in clear blue water', pos: 'center' },
]

/* Canva page 6 — four tall editorial image panels in one row. */
export default function S06Assets() {
  return (
    <section id="assets" className="relative overflow-hidden bg-gradient-to-b from-powder via-mist to-frost px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <Snowflake className="absolute right-[6%] top-[8%] w-20 animate-spin-slow text-white" />
      <Snowflake className="absolute left-[3%] top-[44%] w-10 text-steel/20" />
      <div className="relative mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal>
              <SlideTag id="assets">Brand identity</SlideTag>
            </Reveal>
            <Reveal delay={100} as="h2" className="display mt-8 text-[clamp(48px,6.4vw,104px)]">
              Key Distinctive
              <br />
              <em className="italic text-steel">Brand Assets</em>
            </Reveal>
          </div>
          <Reveal delay={200} className="max-w-[420px] space-y-4 body-copy">
            <p>Our distinctive brand assets help consumers recognise glacé across advertising, packaging, retail and digital channels.</p>
            <p>The goal is to make the brand memorable even when the logo is not immediately visible.</p>
          </Reveal>
        </div>

        <div className="no-scrollbar -mx-5 mt-16 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4 lg:gap-5">
          {PANELS.map((p, i) => (
            <Reveal key={p.key} delay={i * 130} className="w-[78vw] shrink-0 snap-center sm:w-auto">
              <figure className="group card-lift relative aspect-[9/16] overflow-hidden rounded-[30px] bg-ice sm:aspect-[3/5]">
                {p.key === 'wordmark' && !images['glace-wordmark'] ? (
                  <Wordmark />
                ) : (
                  <ImageSlot name={p.key === 'wordmark' ? 'glace-wordmark' : p.key} alt={p.alt || 'The glacé wordmark'} className="h-full" position={p.pos} />
                )}
                <div className={`absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t to-transparent ${p.key === 'wordmark' ? 'from-deep/25' : 'from-deep/60'}`} />
                <figcaption className="absolute inset-x-0 bottom-0 p-6">
                  <span className="font-display text-[15px] italic text-white/80">0{i + 1}</span>
                  <p className="mt-1 font-sans text-[14px] font-medium uppercase tracking-[0.28em] text-white">{p.title}</p>
                  <p className="mt-2 max-h-0 overflow-hidden font-sans text-[14px] font-light text-white/90 opacity-0 transition-all duration-700 group-hover:max-h-16 group-hover:opacity-100">{p.note}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Panel 1 — the wordmark itself, set in type so it stays crisp. */
function Wordmark() {
  return (
    <div className="zoom-img relative flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-frost via-powder to-glacier">
      <Condensation density={26} seed={5} />
      <span className="relative font-display text-[clamp(64px,7vw,104px)] font-light leading-none text-deep">glacé</span>
      <span className="relative mt-4 font-sans text-[10px] uppercase tracking-[0.5em] text-steel">Facial Moisturizer</span>
    </div>
  )
}
