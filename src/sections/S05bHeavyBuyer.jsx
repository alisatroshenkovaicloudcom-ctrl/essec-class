import LawSection from '../components/LawSection.jsx'
import ImageSlot from '../components/ImageSlot.jsx'
import { Condensation } from '../components/Decor.jsx'

const POINTS = [
  {
    lead: 'Heavy buyers don’t stay heavy',
    text: 'Heavy buyers are not always consistently heavy buyers. Many of today’s heaviest buyers buy less in the next period, while some light buyers buy more.',
  },
  {
    lead: 'Light buyers matter',
    text: 'Occasional buyers make up a large share of any brand’s customers, so ignoring them means ignoring most of the market.',
  },
  {
    lead: 'Reach beyond frequent users',
    text: 'glacé should reach occasional skincare buyers and new customers rather than focusing exclusively on frequent users.',
  },
]

export default function S05bHeavyBuyer() {
  return (
    <LawSection
      id="heavy-buyer"
      number="02"
      reverse
      tone="bg-gradient-to-bl from-powder via-mist to-frost"
      title={
        <>
          Heavy Buyer <em className="italic text-steel">Fallacy</em>
        </>
      }
      points={POINTS}
      takeaway="Broad reach over narrow targeting: talk to every moisturiser buyer in Singapore, not only the skincare enthusiasts."
      visual={
        <div className="group relative mx-auto h-[70vh] max-h-[760px] min-h-[480px] w-full max-w-[520px] overflow-hidden rounded-[32px] shadow-[0_50px_90px_-50px_rgba(37,63,102,.6)]">
          <ImageSlot name="glace-law-heavy-buyer" alt="Close-up of the glacé ice-cube cap covered in condensation" className="h-full" />
          <Condensation density={14} seed={61} />
          <BuyerShift />
        </div>
      }
    />
  )
}

/* Conceptual illustration: buyers drift toward the average between periods. */
function BuyerShift() {
  const rows = [
    { label: 'Heavy buyers', from: 'Buy a lot', to: 'Buy less', dir: '↘' },
    { label: 'Light buyers', from: 'Buy a little', to: 'Buy more', dir: '↗' },
  ]
  return (
    <figure className="absolute inset-x-5 bottom-5 rounded-[22px] border border-white/80 bg-white/75 p-5 backdrop-blur-md">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-3 font-sans text-[11px] uppercase tracking-[0.2em] text-slate">
        <span>This year</span>
        <span />
        <span className="text-right">Next year</span>
      </div>
      <ul className="mt-3 space-y-3">
        {rows.map((r) => (
          <li key={r.label} className="rounded-2xl bg-white/80 p-3">
            <p className="label !text-[10px]">{r.label}</p>
            <div className="mt-1 grid grid-cols-[1fr_auto_1fr] items-center gap-x-3 font-display text-[20px] text-deep">
              <span>{r.from}</span>
              <span className="text-[24px] text-sky transition-transform duration-700 group-hover:translate-x-1">{r.dir}</span>
              <span className="text-right italic text-steel">{r.to}</span>
            </div>
          </li>
        ))}
      </ul>
      <figcaption className="mt-3 font-sans text-[11px] italic text-slate">Illustrative only — buying levels drift toward the average.</figcaption>
    </figure>
  )
}
