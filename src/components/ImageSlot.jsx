import { images } from '../data/images.js'

/**
 * Renders the image registered under `name` in src/data/images.js.
 * If no image is registered yet, renders a frosted, clearly labelled
 * placeholder so the right Canva export can be dropped in later.
 */
export default function ImageSlot({ name, alt, className = '', imgClassName = '', position = 'center', hint, children }) {
  const src = images[name]
  return (
    <div className={`${/\b(absolute|fixed)\b/.test(className) ? '' : 'relative'} overflow-hidden ${className}`} data-image-slot={name}>
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`zoom-img h-full w-full object-cover ${imgClassName}`}
          style={{ objectPosition: position }}
        />
      ) : (
        <Placeholder name={name} alt={alt} hint={hint} />
      )}
      {children}
    </div>
  )
}

function Placeholder({ name, alt, hint }) {
  return (
    <div
      role="img"
      aria-label={`Image placeholder: ${alt}`}
      className="relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden bg-gradient-to-br from-frost via-powder to-ice p-6 text-center"
    >
      <svg viewBox="0 0 120 120" className="w-[38%] max-w-[120px] text-steel/30" aria-hidden="true">
        <defs>
          <linearGradient id={`ph-${name}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity=".9" />
            <stop offset="1" stopColor="#A9CBE8" stopOpacity=".5" />
          </linearGradient>
        </defs>
        <path d="M60 10 L104 34 L104 86 L60 110 L16 86 L16 34 Z" fill={`url(#ph-${name})`} stroke="currentColor" strokeWidth="1.2" />
        <path d="M60 10 L60 60 M16 34 L60 60 L104 34 M60 60 L60 110" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
      <span className="label !text-[10px] !text-steel">Image placeholder</span>
      <code className="rounded-full border border-steel/25 bg-white/60 px-3 py-1 font-sans text-[12px] tracking-wide text-deep">
        {name}
      </code>
      {hint && <span className="max-w-[220px] font-sans text-[13px] font-light text-slate">{hint}</span>}
    </div>
  )
}
