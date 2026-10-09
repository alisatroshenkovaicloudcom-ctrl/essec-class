import { useEffect, useRef, useState } from 'react'

/** Returns [ref, inView]. Fires once when the element enters the viewport. */
export function useInView({ threshold = 0.18, rootMargin = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold, rootMargin },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, rootMargin])
  return [ref, inView]
}

/** Fades + lifts children in as they scroll into view. */
export default function Reveal({ as: Tag = 'div', delay = 0, fade = false, className = '', style, children, ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`${fade ? 'reveal-fade' : 'reveal'} ${inView ? 'is-in' : ''} ${className}`}
      style={{ '--d': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/** Counts a number up from 0 when it scrolls into view. */
export function CountUp({ to, duration = 1600, className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.5 })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setVal(to)
      return
    }
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration)
      setVal(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])
  return (
    <span ref={ref} className={className}>
      {val}
    </span>
  )
}
