/* Ice, water and condensation ornaments shared by every section. */
import { SECTIONS } from '../data/sections.js'

/** Pale blue water-drop shape (used as icon and as large background ornament). */
export function WaterDrop({ className = '', filled = false, strokeWidth = 1.2 }) {
  return (
    <svg viewBox="0 0 24 32" className={className} aria-hidden="true">
      <path
        d="M12 1.5C12 1.5 2 13.2 2 20.2C2 25.9 6.5 30.5 12 30.5C17.5 30.5 22 25.9 22 20.2C22 13.2 12 1.5 12 1.5Z"
        fill={filled ? 'currentColor' : 'none'}
        stroke={filled ? 'none' : 'currentColor'}
        strokeWidth={strokeWidth}
      />
      {!filled && <path d="M7 20.5c0 2.8 2 5 4.6 5.4" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />}
    </svg>
  )
}

/** Fine-line snowflake. */
export function Snowflake({ className = '' }) {
  const arm = 'M50 50 L50 8 M50 20 L42 12 M50 20 L58 12 M50 32 L44 26 M50 32 L56 26'
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
      {[0, 60, 120, 180, 240, 300].map((r) => (
        <path key={r} d={arm} transform={`rotate(${r} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="3" />
    </svg>
  )
}

/** Large decorative pale water drops floating in a section background. */
export function FloatingDrops({ items = DEFAULT_DROPS, className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {items.map((d, i) => (
        <div
          key={i}
          className="absolute animate-float-slow"
          style={{ left: d.x, top: d.y, width: d.s, animationDelay: `${i * -1.7}s`, animationDuration: `${8 + i}s`, opacity: d.o ?? 0.55 }}
        >
          <svg viewBox="0 0 24 32" className="w-full">
            <defs>
              <radialGradient id={`fd-${i}`} cx="35%" cy="60%" r="70%">
                <stop offset="0" stopColor="#FFFFFF" />
                <stop offset=".55" stopColor="#DDEBF7" />
                <stop offset="1" stopColor="#A9CBE8" />
              </radialGradient>
            </defs>
            <path d="M12 1.5C12 1.5 2 13.2 2 20.2C2 25.9 6.5 30.5 12 30.5C17.5 30.5 22 25.9 22 20.2C22 13.2 12 1.5 12 1.5Z" fill={`url(#fd-${i})`} />
            <ellipse cx="8.5" cy="19" rx="2" ry="3.4" fill="#fff" opacity=".8" />
          </svg>
        </div>
      ))}
    </div>
  )
}
const DEFAULT_DROPS = [
  { x: '6%', y: '12%', s: 26 },
  { x: '88%', y: '18%', s: 40 },
  { x: '78%', y: '78%', s: 22 },
  { x: '14%', y: '82%', s: 34, o: 0.4 },
]

/** Scattered condensation beads with a few running droplets. */
export function Condensation({ density = 34, className = '', seed = 7 }) {
  const rand = mulberry(seed)
  const beads = Array.from({ length: density }, () => ({
    x: rand() * 100,
    y: rand() * 100,
    r: 2 + Math.pow(rand(), 2.4) * 9,
    run: rand() > 0.88,
  }))
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {beads.map((b, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${b.x}%`,
            top: `${b.y}%`,
            width: b.r * 2,
            height: b.r * 2.15,
            background: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,.95) 0 18%, rgba(255,255,255,.25) 35%, rgba(169,203,232,.35) 70%, rgba(62,95,140,.25) 100%)',
            boxShadow: '0 1px 2px rgba(37,63,102,.18), inset 0 -1px 2px rgba(255,255,255,.6)',
            animation: b.run ? `droplet-run ${7 + (i % 5)}s ease-in ${i * 0.6}s infinite` : undefined,
            '--run': `${80 + (i % 4) * 40}px`,
          }}
        />
      ))}
    </div>
  )
}

/** Animated water caustics overlay (SVG turbulence). */
export function Caustics({ className = '', opacity = 0.35, id = 'caustics', speed = 22 }) {
  return (
    <svg className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} style={{ opacity, mixBlendMode: 'soft-light' }} aria-hidden="true" preserveAspectRatio="none">
      <filter id={id} x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.008 0.02" numOctaves="2" seed="3" result="t">
          <animate attributeName="baseFrequency" dur={`${speed}s`} values="0.008 0.02;0.012 0.026;0.008 0.02" repeatCount="indefinite" />
        </feTurbulence>
        <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 9 -4.2" />
      </filter>
      <rect width="100%" height="100%" filter={`url(#${id})`} />
    </svg>
  )
}

/** Slide index label: "03 — Our benchmark set". The number follows the section order. */
export function SlideTag({ id, children, light = false, className = '' }) {
  const n = SECTIONS.findIndex((s) => s.id === id) + 1
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className={`font-display text-[15px] italic ${light ? 'text-frost/80' : 'text-steel'}`}>{String(n).padStart(2, '0')}</span>
      <span className={`h-px w-10 ${light ? 'bg-frost/50' : 'bg-steel/40'}`} />
      <span className={`label ${light ? '!text-frost/85' : ''}`}>{children}</span>
    </div>
  )
}

function mulberry(a) {
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
