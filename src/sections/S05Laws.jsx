import { useState } from 'react'
import ImageSlot from '../components/ImageSlot.jsx'
import Reveal from '../components/Reveal.jsx'
import { scrollToSection } from '../data/sections.js'
import { Condensation, SlideTag } from '../components/Decor.jsx'

const LAWS = [
  {
    title: 'Double Jeopardy',
    section: 'double-jeopardy',
    law: 'Smaller brands generally have fewer buyers and slightly lower purchase frequency.',
    implication: 'For glacé, the priority is to attract more customers rather than relying only on loyal users.',
  },
  {
    title: 'Heavy Buyer Fallacy',
    section: 'heavy-buyer',
    law: 'Heavy buyers are not always consistently heavy buyers.',
    implication: 'glacé should reach occasional skincare buyers and new customers rather than focusing exclusively on frequent users.',
  },
  {
    title: 'Duplication of Purchase',
    section: 'duplication',
    law: 'Consumers purchase multiple moisturiser brands.',
    implication: 'Our goal is to become one of the brands consumers regularly consider, not necessarily the only one they buy.',
  },
]

/* Canva page 5 — three numbered principles left, ice photograph right. */
export default function S05Laws() {
  const [open, setOpen] = useState(0)
  return (
    <section id="laws" className="relative grid min-h-[100svh] bg-frost lg:grid-cols-[1.15fr_0.85fr]">
      <div className="px-5 py-24 sm:px-10 lg:px-16 lg:py-32 xl:px-24">
        <Reveal>
          <SlideTag id="laws">The 3 laws of marketing</SlideTag>
        </Reveal>
        <Reveal delay={100} as="h2" className="display mt-8 text-[clamp(48px,6vw,96px)]">
          Key Learnings
          <br />
          <em className="italic text-steel">from the 3 Laws</em>
        </Reveal>

        <ol className="mt-14 border-t border-steel/20">
          {LAWS.map((l, i) => {
            const isOpen = open === i
            return (
              <Reveal as="li" key={l.title} delay={150 + i * 100} className="border-b border-steel/20">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`law-${i}`}
                  className="group flex w-full items-center gap-6 py-7 text-left sm:gap-10"
                >
                  <span className={`font-display text-[64px] font-light leading-none transition-colors duration-500 sm:text-[84px] ${isOpen ? 'text-deep' : 'text-glacier group-hover:text-sky'}`}>
                    0{i + 1}
                  </span>
                  <span className="flex-1">
                    <span className="block font-sans text-[15px] font-medium uppercase tracking-[0.28em] text-deep sm:text-[17px]">{l.title}</span>
                    <span className="mt-2 block body-copy !text-[16px]">{l.law}</span>
                  </span>
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-steel/30 transition-all duration-500 ${isOpen ? 'rotate-45 bg-deep text-frost' : 'text-deep group-hover:border-deep'}`} aria-hidden="true">
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.4">
                      <path d="M8 2v12M2 8h12" />
                    </svg>
                  </span>
                </button>
                <div id={`law-${i}`} className={`grid transition-all duration-700 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="mb-8 ml-0 rounded-[22px] bg-powder/70 p-6 sm:ml-[124px]">
                      <p className="label">What it means for glacé</p>
                      <p className="mt-3 font-display text-[24px] leading-snug text-deep">{l.implication}</p>
                      <button onClick={() => scrollToSection(l.section)} className="mt-4 font-sans text-[12px] font-medium uppercase tracking-[0.24em] text-steel underline-offset-4 hover:text-deep hover:underline">
                        Explore this law →
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </ol>

        <Reveal delay={200} className="mt-14">
          <p className="label">Strategic conclusion — glacé’s growth focuses on</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {['Reaching more buyers.', 'Building brand recognition.', 'Making the product easy to find and purchase.'].map((t, i) => (
              <div key={t} className="card-lift rounded-[22px] frosted p-5">
                <span className="font-display text-[15px] italic text-steel">{['i', 'ii', 'iii'][i]}</span>
                <p className="mt-2 font-display text-[22px] leading-tight text-deep">{t}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="relative h-[70vh] lg:sticky lg:top-0 lg:h-[100svh]">
        <ImageSlot name="glace-ice-photo" alt="A clear ice cube plunging into icy blue water surrounded by bubbles" className="h-full" position="center 45%" />
        <Condensation density={18} seed={21} />
        <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
          <p className="font-display text-[clamp(40px,4vw,64px)] font-light leading-none text-white drop-shadow-[0_2px_20px_rgba(37,63,102,.4)]">
            0{Math.max(open, 0) + 1}
            <span className="text-[0.6em] text-white/80"> / 03</span>
          </p>
        </div>
      </div>
    </section>
  )
}
