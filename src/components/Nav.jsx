import { useEffect, useState } from 'react'
import { SECTIONS, scrollToSection } from '../data/sections.js'

/** Tracks which section is currently in the middle of the viewport. */
function useActiveSection() {
  const [active, setActive] = useState(SECTIONS[0].id)
  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-45% 0px -54% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return active
}

export default function Nav() {
  const active = useActiveSection()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const activeIndex = SECTIONS.findIndex((s) => s.id === active)
  // Highlight the menu item of the chapter the active slide belongs to
  const activeNav = [...SECTIONS.slice(0, activeIndex + 1)].reverse().find((s) => s.nav)?.id

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Presenter keys: → / ↓ / PageDown / Space = next slide, ← / ↑ / PageUp = previous
  useEffect(() => {
    const onKey = (e) => {
      if (e.target.closest('input, textarea, select, [contenteditable]') || e.metaKey || e.ctrlKey || e.altKey) return
      if (e.key === ' ' && e.target.closest('button, a')) return
      const next = ['ArrowRight', 'PageDown', ' '].includes(e.key) || (e.key === 'ArrowDown' && e.shiftKey)
      const prev = ['ArrowLeft', 'PageUp'].includes(e.key) || (e.key === 'ArrowUp' && e.shiftKey)
      if (e.key === 'Escape') setOpen(false)
      if (!next && !prev) return
      e.preventDefault()
      const i = Math.max(0, Math.min(SECTIONS.length - 1, activeIndex + (next ? 1 : -1)))
      scrollToSection(SECTIONS[i].id)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeIndex])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const go = (id) => {
    setOpen(false)
    scrollToSection(id)
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled ? 'border-b border-white/70 bg-frost/70 py-3 shadow-[0_10px_40px_-30px_rgba(37,63,102,.5)] backdrop-blur-xl' : 'py-5'
        }`}
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
          <button onClick={() => go('home')} className={`font-display text-[30px] font-normal leading-none tracking-tight text-deep`} aria-label="glacé — back to top">
            glacé
          </button>

          <nav aria-label="Sections" className="hidden xl:block">
            <ul className="flex items-center gap-7">
              {SECTIONS.filter((s) => s.nav).map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => go(s.id)}
                    className={`group relative py-1 font-sans text-[11px] font-medium uppercase tracking-[0.22em] transition-colors ${
                      activeNav === s.id ? 'text-deep' : 'text-slate hover:text-deep'
                    }`}
                    aria-current={activeNav === s.id ? 'true' : undefined}
                  >
                    {s.nav}
                    <span className={`absolute -bottom-0.5 left-0 h-px bg-deep transition-all duration-500 ${activeNav === s.id ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-5">
            <span className="hidden font-display text-[17px] italic text-steel sm:inline" aria-live="polite">
              {String(activeIndex + 1).padStart(2, '0')} <span className="text-steel/50">/ 12</span>
            </span>
            <button
              onClick={() => setOpen((o) => !o)}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-steel/30 bg-white/40 backdrop-blur xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              <span className={`absolute h-px w-5 bg-deep transition-transform duration-500 ${open ? 'rotate-45' : '-translate-y-[4px]'}`} />
              <span className={`absolute h-px w-5 bg-deep transition-transform duration-500 ${open ? '-rotate-45' : 'translate-y-[4px]'}`} />
            </button>
          </div>
        </div>
        {/* scroll progress, like ice melting along the edge */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-glacier via-sky to-steel" style={{ width: `${progress * 100}%` }} />
      </header>

      {/* Mobile / tablet menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col bg-gradient-to-b from-frost via-mist to-powder px-6 pb-10 pt-28 transition-all duration-700 xl:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1">
          {SECTIONS.filter((s) => s.nav).map((s, i) => (
            <li
              key={s.id}
              className="transition-all duration-700"
              style={{ transitionDelay: open ? `${80 + i * 50}ms` : '0ms', opacity: open ? 1 : 0, transform: open ? 'none' : 'translateY(12px)' }}
            >
              <button onClick={() => go(s.id)} className="flex w-full items-baseline gap-4 border-b border-steel/15 py-3.5 text-left">
                <span className="w-7 font-display text-[15px] italic text-steel">{String(SECTIONS.indexOf(s) + 1).padStart(2, '0')}</span>
                <span className={`font-display text-[32px] font-light leading-none ${activeNav === s.id ? 'text-deep' : 'text-deep/70'}`}>{s.nav}</span>
              </button>
            </li>
          ))}
        </ul>
        <p className="label mt-auto">Stay icy.</p>
      </div>

      {/* Slide dots — all 12 sections, for the live presentation */}
      <nav aria-label="Slides" className="fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 lg:block">
        <ul className="flex flex-col items-end gap-3">
          {SECTIONS.map((s, i) => (
            <li key={s.id}>
              <button onClick={() => go(s.id)} className="group flex items-center justify-end gap-3" aria-label={`Slide ${i + 1}: ${s.title}`}>
                <span className="pointer-events-none translate-x-2 whitespace-nowrap rounded-full bg-white/80 px-3 py-1 font-sans text-[11px] tracking-wide text-deep opacity-0 shadow-sm backdrop-blur transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  {s.title}
                </span>
                <span
                  className={`block rounded-full transition-all duration-500 ${
                    active === s.id ? 'h-5 w-[6px] bg-deep' : 'h-[6px] w-[6px] bg-steel/35 group-hover:bg-steel'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
