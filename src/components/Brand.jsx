import { Link } from 'react-router-dom'

/**
 * Header/footer brand lockup: the circular mark beside the two-line wordmark
 * ("Safari" in EB Garamond, "TYPING SERVICES" letter-spaced in Figtree).
 */
export default function Brand({ markSize = 40, eager = false }) {
  return (
    <Link to="/" aria-label="Safari Typing Services — home" className="flex shrink-0 items-center gap-[13px]">
      <img
        src="/safari-mark.svg"
        alt="Safari Typing Services"
        style={{ height: markSize, width: 'auto' }}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
      <span className="flex flex-col leading-[1.05]">
        <span className="font-display text-[20px] font-semibold tracking-[0.01em] text-ink">Safari</span>
        <span className="font-body text-[8.5px] font-semibold tracking-[0.26em] text-sage">
          TYPING SERVICES
        </span>
      </span>
    </Link>
  )
}
