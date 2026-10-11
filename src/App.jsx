import Nav from './components/Nav.jsx'
import S01Hero from './sections/S01Hero.jsx'
import S02Brand from './sections/S02Brand.jsx'
import S03Benchmark from './sections/S03Benchmark.jsx'
import S04Transition from './sections/S04Transition.jsx'
import S05Laws from './sections/S05Laws.jsx'
import S05aDoubleJeopardy from './sections/S05aDoubleJeopardy.jsx'
import S05bHeavyBuyer from './sections/S05bHeavyBuyer.jsx'
import S05cDuplication from './sections/S05cDuplication.jsx'
import S06Assets from './sections/S06Assets.jsx'
import S07Mental from './sections/S07Mental.jsx'
import S08Physical from './sections/S08Physical.jsx'
import S09Portfolio from './sections/S09Portfolio.jsx'
import S10Digital from './sections/S10Digital.jsx'
import S11Launch from './sections/S11Launch.jsx'
import S12Thanks from './sections/S12Thanks.jsx'

// One section per Canva slide, in presentation order.
export default function App() {
  return (
    <>
      <a href="#brand" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-deep focus:px-4 focus:py-2 focus:text-frost">
        Skip to content
      </a>
      <Nav />
      <main>
        <S01Hero />
        <S02Brand />
        <S03Benchmark />
        <S04Transition />
        <S05Laws />
        <S05aDoubleJeopardy />
        <S05bHeavyBuyer />
        <S05cDuplication />
        <S06Assets />
        <S07Mental />
        <S08Physical />
        <S09Portfolio />
        <S10Digital />
        <S11Launch />
        <S12Thanks />
      </main>
    </>
  )
}
