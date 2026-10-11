import { useEffect, useState } from 'react'
import { images } from '../data/images.js'
import ImageSlot from '../components/ImageSlot.jsx'
import Reveal, { useInView } from '../components/Reveal.jsx'
import { Condensation, SlideTag, WaterDrop } from '../components/Decor.jsx'

const CHANNELS = ['glacé official website', 'Lazada', 'Sephora online', 'Guardian and Watsons online']
const KEYWORDS = ['Cooling moisturiser', 'Lightweight moisturiser', 'Moisturiser for humid weather', 'Non-sticky moisturiser', 'SPF moisturiser']

/* Canva page 10 — two large rounded image panels on top, heading and content below. */
export default function S10Digital() {
  return (
    <section id="digital" className="relative overflow-hidden bg-frost px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-5 lg:grid-cols-[1.45fr_0.55fr]">
          <Reveal>
            <ShopMockup />
          </Reveal>
          <Reveal delay={150} className="group relative min-h-[420px] overflow-hidden rounded-[36px]">
            <ImageSlot name="glace-texture-closeup" alt="Close-up of the glacé ice-cube cap and frosted bottle covered in condensation" className="absolute inset-0" />
            <Condensation density={14} seed={17} />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep/60 to-transparent p-7">
              <p className="label !text-white/85">Texture &amp; packaging</p>
              <p className="mt-2 font-display text-[28px] leading-tight text-white">Show the cooling sensation, up close.</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <SlideTag id="digital">Digital availability</SlideTag>
            </Reveal>
            <Reveal delay={100} as="h2" className="display mt-8 text-[clamp(52px,6.4vw,104px)]">
              glacé, <em className="italic text-steel">Wherever You Shop.</em>
            </Reveal>
            <Reveal delay={200} className="mt-8 max-w-[440px] body-copy">
              <p>Our digital strategy makes glacé easy to discover, understand and purchase online.</p>
            </Reveal>
            <Reveal delay={300} className="mt-10">
              <p className="label">Online channels</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {CHANNELS.map((c) => (
                  <li key={c} className="rounded-full border border-steel/25 bg-white px-4 py-2 font-sans text-[14px] text-deep">
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Tile delay={0} title="Online consumer" wide>
              Our target customer is mobile-first, discovers skincare through social media, checks reviews and expects convenient delivery.
            </Tile>
            <Tile delay={80} title="Search visibility" wide>
              <p>Optimise product pages around:</p>
              <SearchDemo />
            </Tile>
            <Tile delay={120} title="Customer reviews">
              <ReviewTarget />
              Aim for at least 50 verified customer reviews during the early launch period to build trust and credibility.
            </Tile>
            <Tile delay={160} title="Online product demonstrations">
              Use short videos, texture close-ups, samples and authentic customer experiences to communicate the product’s cooling sensation.
            </Tile>
            <Tile delay={200} title="Repeat purchases">
              Introduce future auto-reorder options and replenishment reminders.
            </Tile>
            <Tile delay={240} title="Delivery">
              Test the product formula and packaging for Singapore’s hot storage and delivery conditions.
            </Tile>
          </div>
        </div>
      </div>
    </section>
  )
}

function Tile({ title, children, delay, wide }) {
  return (
    <Reveal delay={delay} className={wide ? 'sm:col-span-2' : ''}>
      <div className="card-lift h-full rounded-[26px] bg-mist p-6 ring-1 ring-white">
        <div className="flex items-center gap-3">
          <WaterDrop className="h-6 w-[18px] text-steel" />
          <h3 className="font-sans text-[14px] font-medium uppercase tracking-[0.24em] text-deep">{title}</h3>
        </div>
        <div className="mt-3 font-sans text-[16px] font-light leading-relaxed text-deep/80">{children}</div>
      </div>
    </Reveal>
  )
}

/* Types each target search phrase into a mock search bar. */
function SearchDemo() {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const [k, setK] = useState(0)
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const word = KEYWORDS[k]
    const t = setTimeout(
      () => {
        if (n < word.length) setN(n + 1)
        else {
          setN(0)
          setK((k + 1) % KEYWORDS.length)
        }
      },
      n < word.length ? 55 : 1600,
    )
    return () => clearTimeout(t)
  }, [inView, k, n])
  return (
    <div ref={ref} className="mt-3">
      <div className="flex items-center gap-3 rounded-full border border-steel/20 bg-white px-4 py-2.5 shadow-sm">
        <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-slate" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <circle cx="9" cy="9" r="6" />
          <path d="M14 14l4 4" />
        </svg>
        <span className="font-sans text-[15px] text-deep" aria-hidden="true">
          {KEYWORDS[k].slice(0, n)}
          <span className="ml-px inline-block h-4 w-px translate-y-0.5 animate-pulse bg-deep" />
        </span>
      </div>
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {KEYWORDS.map((w, i) => (
          <li key={w} className={`rounded-full px-3 py-1 font-sans text-[13px] transition-colors duration-500 ${i === k ? 'bg-deep text-frost' : 'bg-white/70 text-deep/70'}`}>
            “{w}”
          </li>
        ))}
      </ul>
    </div>
  )
}

/* A target, not a result — shown as an empty ring with the goal. */
function ReviewTarget() {
  return (
    <div className="mb-3 flex items-center gap-4">
      <div className="relative h-16 w-16">
        <svg viewBox="0 0 64 64" className="h-full w-full -rotate-90" aria-hidden="true">
          <circle cx="32" cy="32" r="28" fill="none" stroke="#DDEBF7" strokeWidth="4" />
          <circle cx="32" cy="32" r="28" fill="none" stroke="#3E5F8C" strokeWidth="4" strokeDasharray="4 6" />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-display text-[24px] text-deep">50</span>
      </div>
      <span className="label">Launch target</span>
    </div>
  )
}

/* Realistic but non-transactional glacé online shop. */
function ShopMockup() {
  const [size, setSize] = useState('50')
  const [qty, setQty] = useState(1)
  const [cart, setCart] = useState(0)
  const [toast, setToast] = useState(false)
  const price = size === '50' ? 39 : 15

  const add = () => {
    setCart((c) => c + qty)
    setToast(true)
    setTimeout(() => setToast(false), 2600)
  }

  return (
    <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-powder to-ice p-3 sm:p-5" data-image-slot="glace-ecommerce-mockup">
      {/* browser chrome */}
      <div className="overflow-hidden rounded-[24px] bg-white shadow-[0_40px_80px_-40px_rgba(37,63,102,.55)]">
        <div className="flex items-center gap-3 border-b border-powder bg-frost px-4 py-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-silver" />
            <span className="h-2.5 w-2.5 rounded-full bg-silver" />
            <span className="h-2.5 w-2.5 rounded-full bg-silver" />
          </div>
          <div className="mx-auto flex w-full max-w-[340px] items-center justify-center gap-2 rounded-full bg-white px-4 py-1 font-sans text-[12px] text-slate ring-1 ring-powder">
            <svg viewBox="0 0 12 12" className="h-3 w-3" fill="currentColor" aria-hidden="true">
              <path d="M3.5 5V3.6a2.5 2.5 0 0 1 5 0V5H9a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h.5Zm1 0h3V3.6a1.5 1.5 0 0 0-3 0V5Z" />
            </svg>
            glace.sg/shop/cooling-moisturiser
          </div>
        </div>

        {/* store header */}
        <div className="flex items-center justify-between border-b border-powder/70 px-5 py-3.5 sm:px-8">
          <span className="font-display text-[24px] leading-none text-deep">glacé</span>
          <nav className="hidden gap-6 font-sans text-[11px] uppercase tracking-[0.2em] text-slate md:flex" aria-hidden="true">
            <span className="text-deep">Shop</span>
            <span>Ritual</span>
            <span>Reviews</span>
            <span>About</span>
          </nav>
          <span className="relative flex items-center gap-2 font-sans text-[12px] uppercase tracking-[0.16em] text-deep" aria-live="polite">
            <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
              <path d="M4 6h12l-1 11H5L4 6Z" />
              <path d="M7.5 8V5a2.5 2.5 0 0 1 5 0v3" />
            </svg>
            <span className="sr-only">Cart items:</span>
            <span key={cart} className={`flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[11px] ${cart ? 'hero-in bg-deep text-frost' : 'bg-powder text-slate'}`}>
              {cart}
            </span>
          </span>
        </div>

        {/* product page */}
        <div className="grid sm:grid-cols-[1fr_1.05fr]">
          <div className="relative aspect-square bg-mist sm:aspect-auto">
            <img src={images['glace-hero-image']} alt="glacé moisturiser product photo" className="absolute inset-0 h-full w-full object-cover object-[72%_center] sm:object-[60%_center]" loading="lazy" />
            <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-deep">New · SPF 30</span>
          </div>
          <div className="flex flex-col gap-4 p-5 sm:p-8">
            <p className="font-sans text-[11px] uppercase tracking-[0.24em] text-slate">Facial moisturiser</p>
            <h3 className="-mt-1 font-display text-[36px] font-normal leading-none text-deep">glacé Cooling Moisturiser SPF 30</h3>
            <p className="font-sans text-[14px] font-light leading-relaxed text-deep/75">Lightweight cooling hydration with shine control, made for hot and humid days.</p>
            <ul className="flex flex-wrap gap-1.5 font-sans text-[11px] uppercase tracking-[0.14em] text-deep">
              {['Cool', 'Hydrate', 'Control shine', 'Lightweight', 'Protect'].map((b) => (
                <li key={b} className="rounded-full bg-powder px-2.5 py-1">
                  {b}
                </li>
              ))}
            </ul>

            <div>
              <p className="mb-2 font-sans text-[11px] uppercase tracking-[0.22em] text-slate">Size</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  ['50', '50 ml', 39],
                  ['15', '15 ml', 15],
                ].map(([id, label, p]) => (
                  <button
                    key={id}
                    onClick={() => setSize(id)}
                    aria-pressed={size === id}
                    className={`rounded-2xl border px-3 py-2.5 text-left font-sans transition-all duration-300 ${size === id ? 'border-deep bg-frost' : 'border-powder hover:border-steel/50'}`}
                  >
                    <span className="block text-[14px] font-medium text-deep">{label}</span>
                    <span className="block text-[13px] text-slate">S${p}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-end justify-between">
              <span className="font-display text-[40px] leading-none text-deep">S${price * qty}.00</span>
              <div className="flex items-center rounded-full border border-powder font-sans text-[15px] text-deep">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="h-9 w-9" aria-label="Decrease quantity">
                  −
                </button>
                <span className="w-6 text-center" aria-live="polite">
                  {qty}
                </span>
                <button onClick={() => setQty((q) => Math.min(9, q + 1))} className="h-9 w-9" aria-label="Increase quantity">
                  +
                </button>
              </div>
            </div>

            <button onClick={add} className="rounded-full bg-deep py-3.5 font-sans text-[12px] font-medium uppercase tracking-[0.26em] text-frost transition-all duration-300 hover:bg-steel hover:shadow-lg active:scale-[0.98]">
              Add to cart
            </button>
            <div className="flex flex-wrap gap-x-4 gap-y-1 font-sans text-[12px] text-slate">
              <span>Delivery across Singapore</span>
              <span>·</span>
              <span>Auto-reorder coming soon</span>
            </div>
          </div>
        </div>
      </div>

      <div
        role="status"
        className={`pointer-events-none absolute bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-deep px-5 py-2.5 font-sans text-[13px] text-frost shadow-xl transition-all duration-500 ${toast ? 'opacity-100' : 'translate-y-3 opacity-0'}`}
      >
        Added to cart — demo only, no purchase is made
      </div>
    </div>
  )
}
