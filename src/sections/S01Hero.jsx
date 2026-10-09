import { images } from '../data/images.js'
import { scrollToSection } from '../data/sections.js'
import { Caustics, Condensation, Snowflake } from '../components/Decor.jsx'

/* Canva page 1 — cover. Wordmark left, the ice-cube bottle right. */
export default function S01Hero() {
  return (
    <section id="home" className="grain relative flex min-h-[100svh] flex-col overflow-hidden lg:flex-row lg:items-stretch bg-gradient-to-br from-frost via-mist to-ice">
      <div className="absolute inset-y-0 left-0 z-[1] hidden w-[46%] bg-gradient-to-r from-frost via-frost/80 to-transparent lg:block" />

      <Condensation density={22} seed={3} className="z-[2] opacity-70" />
      <Snowflake className="absolute left-[44%] top-[16%] z-[2] hidden w-12 animate-spin-slow text-white/80 lg:block" />
      <Snowflake className="absolute bottom-[14%] left-[6%] w-8 animate-spin-slow text-steel/25" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-col justify-start px-5 pb-6 pt-32 sm:px-8 lg:justify-center lg:pb-16 lg:px-12 lg:pt-24">
        <div className="max-w-[560px]">
          <h1 className="hero-in font-display text-[clamp(104px,19vw,232px)] font-light leading-[0.78] tracking-[-0.03em] text-deep" style={{ '--d': '150ms' }}>
            glacé
          </h1>
          <p className="hero-in label mt-12 !text-[13px] !tracking-[0.5em] !text-steel lg:mt-16" style={{ '--d': '450ms' }}>
            Facial Moisturizer
          </p>
          <div className="hero-in mt-8 h-px w-24 bg-steel/40" style={{ '--d': '600ms' }} />
          <p className="hero-in mt-8 font-display text-[clamp(30px,3.4vw,46px)] font-light uppercase leading-[1.02] tracking-[0.04em] text-deep" style={{ '--d': '750ms' }}>
            Hydration made
            <br /> for heat.
          </p>
          <p className="hero-in body-copy mt-5 max-w-[360px]" style={{ '--d': '900ms' }}>
            A new skincare brand created for hot and humid climates.
          </p>
          <div className="hero-in mt-10 flex flex-wrap items-center gap-5" style={{ '--d': '1100ms' }}>
            <button onClick={() => scrollToSection('brand')} className="btn-ice">
              Discover glacé
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                <path d="M8 2v12M3 9l5 5 5-5" />
              </svg>
            </button>
            <span className="label !text-steel">SPF 30 · Singapore</span>
          </div>
        </div>
      </div>

      {/* Bottle photograph — right side on desktop, below the text on mobile */}
      <div className="relative -mt-20 h-[64vh] min-h-[380px] sm:-mt-28 lg:absolute lg:inset-y-0 lg:left-[30%] lg:right-0 lg:mt-0 lg:h-auto">
        <div className="hero-img-in absolute inset-0" data-image-slot="glace-hero-image">
          <img
            src={images['glace-hero-image']}
            alt="glacé facial moisturiser: a frosted icy-blue bottle with a transparent ice-cube cap, standing on wet ice between ice cubes"
            className="hero-mask h-full w-full object-cover object-[58%_center] lg:object-right"
          />
        </div>
        <Caustics id="hero-caustics" opacity={0.45} />
        <div className="light-sweep absolute inset-0 overflow-hidden" />
      </div>

      <div className="absolute bottom-6 right-6 z-10 hidden items-center gap-3 sm:flex lg:right-14">
        <span className="font-display text-[22px] italic text-white drop-shadow-[0_1px_8px_rgba(37,63,102,.5)]">Stay icy.</span>
      </div>
    </section>
  )
}
