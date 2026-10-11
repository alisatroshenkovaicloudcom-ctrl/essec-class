import LawSection from '../components/LawSection.jsx'
import ImageSlot from '../components/ImageSlot.jsx'
import { Condensation } from '../components/Decor.jsx'

const POINTS = [
  {
    lead: 'Small brands are hit twice',
    text: 'Smaller brands generally have fewer buyers, and those buyers purchase them slightly less often. Size and loyalty move together.',
  },
  {
    lead: 'Low loyalty is normal for a new brand',
    text: 'As a new brand, glacé will start small. Lower repeat purchase at launch is expected under the law, not a sign of a weaker product.',
  },
  {
    lead: 'Growth comes from more buyers',
    text: 'The priority is to attract more customers rather than relying only on loyal users. Loyalty follows once the customer base grows.',
  },
]

export default function S05aDoubleJeopardy() {
  return (
    <LawSection
      id="double-jeopardy"
      number="01"
      title={
        <>
          Double <em className="italic text-steel">Jeopardy</em>
        </>
      }
      points={POINTS}
      takeaway="Recruit new buyers first: reach, availability and recognition come before loyalty."
      visual={
        <div className="group relative mx-auto h-[70vh] max-h-[760px] min-h-[480px] w-full max-w-[520px] overflow-hidden rounded-[32px] shadow-[0_50px_90px_-50px_rgba(37,63,102,.6)]">
          <ImageSlot name="glace-law-double-jeopardy" alt="An ice cube plunging into icy blue water" className="h-full" />
          <Condensation density={14} seed={51} />
          <JeopardyChart />
        </div>
      }
    />
  )
}

/* Conceptual illustration of the law — not market data. */
function JeopardyChart() {
  const rows = [
    { label: 'Number of buyers', big: 92, small: 30 },
    { label: 'Purchase frequency', big: 88, small: 74 },
  ]
  return (
    <figure className="absolute inset-x-5 bottom-5 rounded-[22px] border border-white/80 bg-white/75 p-5 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <p className="label">The double penalty</p>
        <div className="flex gap-3 font-sans text-[11px] text-deep">
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-steel" />Big brand</span>
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-glacier" />Small brand</span>
        </div>
      </div>
      <div className="mt-4 space-y-4">
        {rows.map((r) => (
          <div key={r.label}>
            <p className="font-sans text-[13px] text-deep/80">{r.label}</p>
            <div className="mt-1.5 space-y-1">
              <div className="h-2.5 origin-left rounded-full bg-steel transition-transform duration-1000 group-hover:scale-x-[1.02]" style={{ width: `${r.big}%` }} />
              <div className="h-2.5 rounded-full bg-glacier" style={{ width: `${r.small}%` }} />
            </div>
          </div>
        ))}
      </div>
      <figcaption className="mt-4 font-sans text-[11px] italic text-slate">Illustrative only — far fewer buyers, slightly lower frequency.</figcaption>
    </figure>
  )
}
