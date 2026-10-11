import LawSection from '../components/LawSection.jsx'
import ImageSlot from '../components/ImageSlot.jsx'
import { Condensation } from '../components/Decor.jsx'

// Text as on the Canva slide "The Duplication of Purchase".
const POINTS = [
  {
    lead: 'Sharing is proportional to size, not positioning',
    text: 'glacé’s customers will inevitably buy other moisturizers. They will mostly share their purchases with the biggest market leaders (like CeraVe or Clinique), regardless of our specific positioning.',
  },
  {
    lead: 'Customer bases are similar across the category',
    text: 'Competitive brands have similar customer bases. We should not try to target a radically different niche audience, as our buyer profile will closely match the average customer profile for facial moisturizers.',
  },
  {
    lead: 'Enter the buyer’s “portfolio”',
    text: 'Even the heaviest buyers settle into a shortlist. We are not trying to be their one-and-only moisturizer, we are competing to win a spot in their regular rotation.',
  },
  {
    lead: 'Differentiation does not prevent duplication',
    text: 'While our formula created for hot and humid climates is a great asset, real partitions are rare. Our buyers will still purchase from competitors with different features.',
  },
]

export default function S05cDuplication() {
  return (
    <LawSection
      id="duplication"
      number="03"
      title={
        <>
          The Duplication <em className="italic text-steel">of Purchase</em>
        </>
      }
      points={POINTS}
      tone="bg-gradient-to-br from-frost via-mist to-powder"
      visual={
        <div className="group relative mx-auto h-[70vh] max-h-[760px] min-h-[460px] w-full max-w-[520px] overflow-hidden rounded-[32px] shadow-[0_50px_90px_-50px_rgba(37,63,102,.6)]">
          <ImageSlot name="glace-law-duplication" alt="A pile of clear ice cubes" className="h-full" />
          <Condensation density={16} seed={41} />
          {/* the buyer's shortlist: glacé as one of several cubes */}
          <div className="absolute inset-x-5 bottom-5 rounded-[22px] border border-white/80 bg-white/70 p-5 backdrop-blur-md">
            <p className="label">A buyer’s moisturiser rotation</p>
            <ul className="mt-3 flex flex-wrap gap-2 font-sans text-[13px] text-deep">
              <li className="rounded-full bg-white px-3 py-1.5 ring-1 ring-steel/20">Market leader</li>
              <li className="rounded-full bg-white px-3 py-1.5 ring-1 ring-steel/20">Market leader</li>
              <li className="rounded-full bg-deep px-3 py-1.5 text-frost">glacé</li>
              <li className="rounded-full bg-white px-3 py-1.5 ring-1 ring-steel/20">Other brand</li>
            </ul>
          </div>
        </div>
      }
    />
  )
}
