import { useState } from 'react'
import ImageSlot from '../components/ImageSlot.jsx'
import { images } from '../data/images.js'
import Reveal from '../components/Reveal.jsx'
import { Caustics, SlideTag, WaterDrop } from '../components/Decor.jsx'

const JOURNEY = [
  { step: 'Discover', text: 'Consumers notice the ice-cube bottle on shelf, online or on social media.' },
  { step: 'Experience', text: 'They try the cooling texture through a sample or the 15 ml trial size.' },
  { step: 'Purchase', text: 'They buy easily at a nearby retailer, on the glacé website or on a marketplace.' },
  { step: 'Reorder', text: 'They find glacé again quickly when it is time to replenish.' },
]

/* Canva page 8 — heading left, tall product image centre, three blocks right. */
export default function S08Physical() {
  const [step, setStep] = useState(0)
  return (
    <section id="physical" className="relative overflow-hidden bg-frost px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="relative mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1fr_0.85fr_1.15fr] lg:gap-14">
        <div className="lg:pt-6">
          <Reveal>
            <SlideTag n={8}>Physical availability</SlideTag>
          </Reveal>
          <Reveal delay={100} as="h2" className="display mt-8 text-[clamp(52px,5.8vw,96px)]">
            Easy to Find.
            <br />
            <em className="italic text-steel">Easy to Buy.</em>
          </Reveal>
          <Reveal delay={200} className="mt-10 max-w-[380px] space-y-4 body-copy">
            <p>Physical availability means making glacé easy for consumers to find, purchase and use.</p>
            <p>Our strategy combines retail distribution, digital accessibility and distinctive product presentation.</p>
          </Reveal>
        </div>

        <Reveal delay={150} className="relative">
          {/* icy-blue retail display */}
          <div className="group relative h-[64vh] min-h-[480px] overflow-hidden rounded-[36px] bg-gradient-to-b from-powder via-glacier to-sky lg:h-full lg:min-h-[640px]">
            {images['glace-retail-display'] ? (
              <ImageSlot name="glace-retail-display" alt="glacé retail display" className="h-full" />
            ) : (
              <RetailDisplay />
            )}
            <Caustics id="retail-caustics" opacity={0.3} />
          </div>
        </Reveal>

        <div className="flex flex-col justify-center gap-10">
          <Block delay={200} n="01" title="Retail Distribution">
            <p>Proposed retail partners:</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {['Guardian', 'Watsons', 'Sephora', 'Ksisters Singapore'].map((r) => (
                <li key={r} className="rounded-full border border-steel/30 bg-white px-3.5 py-1.5 font-sans text-[14px] text-deep">
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-3 flex items-center gap-2 font-sans text-[13px] italic text-slate">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky" />
              These are proposed channels, not confirmed partnerships.
            </p>
          </Block>
          <Block delay={300} n="02" title="Digital Availability">
            <p>glacé should be available through its own website and online marketplaces such as Shopee and Lazada, alongside online beauty retailers.</p>
            <p className="mt-2">Consumers should be able to discover and purchase the product conveniently.</p>
          </Block>
          <Block delay={400} n="03" title="Retail Prominence">
            <p>Our distinctive ice-cube packaging, icy-blue colour and frosted-glass visual identity help glacé stand out.</p>
          </Block>
        </div>
      </div>

      {/* Discover → Experience → Purchase → Reorder */}
      <Reveal delay={100} className="relative mx-auto mt-20 max-w-[1440px] rounded-[32px] bg-gradient-to-r from-powder via-mist to-powder p-6 sm:p-10">
        <p className="label">The path to purchase — tap a step</p>
        <ol className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-0">
          {JOURNEY.map((j, i) => (
            <li key={j.step} className="relative">
              {i < JOURNEY.length - 1 && <span className="absolute left-[calc(50%+34px)] right-[calc(-50%+34px)] top-7 hidden h-px bg-steel/30 md:block" aria-hidden="true" />}
              <button onClick={() => setStep(i)} aria-pressed={step === i} className="group flex w-full flex-col items-center gap-3 rounded-2xl py-2 text-center">
                <span className={`relative flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-500 ${step === i ? 'border-deep bg-deep text-frost' : 'border-steel/40 bg-white text-steel group-hover:border-deep'}`}>
                  {step === i && <span className="absolute inset-0 rounded-full border border-deep" style={{ animation: 'ripple 2.4s ease-out infinite' }} />}
                  <span className="font-display text-[20px] italic">{i + 1}</span>
                </span>
                <span className={`font-sans text-[13px] font-medium uppercase tracking-[0.26em] ${step === i ? 'text-deep' : 'text-slate'}`}>
                  {j.step}
                  {i < JOURNEY.length - 1 && <span className="ml-2 md:hidden">→</span>}
                </span>
              </button>
            </li>
          ))}
        </ol>
        <p key={step} className="hero-in mx-auto mt-8 max-w-[640px] text-center font-display text-[24px] leading-snug text-deep">
          {JOURNEY[step].text}
        </p>
      </Reveal>
    </section>
  )
}

function Block({ n, title, children, delay }) {
  return (
    <Reveal delay={delay} className="flex gap-5">
      <WaterDrop className="mt-0.5 h-8 w-6 shrink-0 text-steel" />
      <div className="font-sans text-[16px] font-light leading-relaxed text-deep/80">
        <h3 className="mb-2 font-sans text-[15px] font-medium uppercase tracking-[0.24em] text-deep">
          <span className="mr-2 font-display text-[16px] normal-case italic tracking-normal text-steel">{n}</span>
          {title}
        </h3>
        {children}
      </div>
    </Reveal>
  )
}

/* Icy-blue in-store display: a lit header and two frosted shelves of glacé. */
function RetailDisplay() {
  const Bottle = ({ big }) => (
    <div className={`relative overflow-hidden rounded-t-[18px] rounded-b-md shadow-[0_18px_30px_-16px_rgba(37,63,102,.7)] ${big ? 'h-full w-[42%]' : 'h-full w-[28%]'}`}>
      <img src={images['glace-hero-image']} alt="" className="zoom-img h-full w-full scale-[1.9] object-cover object-[54%_46%]" loading="lazy" />
    </div>
  )
  const Shelf = ({ children, h }) => (
    <div className="relative" style={{ height: h }}>
      <div className="flex h-full items-end justify-center gap-[4%] px-[8%] pb-3">{children}</div>
      <div className="absolute inset-x-[4%] bottom-0 h-3 rounded-full border border-white/80 bg-white/50 shadow-[0_10px_20px_-8px_rgba(37,63,102,.5)] backdrop-blur" />
    </div>
  )
  return (
    <div className="relative flex h-full flex-col justify-between p-5 pb-8" role="img" aria-label="Illustrated icy-blue retail display with glacé bottles on frosted shelves">
      <div className="rounded-[22px] border border-white/80 bg-white/55 px-5 py-5 text-center backdrop-blur-md">
        <p className="font-display text-[44px] font-light leading-none text-deep">glacé</p>
        <p className="mt-2 font-sans text-[10px] uppercase tracking-[0.45em] text-steel">Stay icy · SPF 30</p>
      </div>
      <Shelf h="38%">
        <Bottle big />
      </Shelf>
      <Shelf h="26%">
        <Bottle />
        <Bottle />
        <Bottle />
      </Shelf>
    </div>
  )
}
