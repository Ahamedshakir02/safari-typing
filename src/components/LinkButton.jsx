import { Link } from 'react-router-dom'

// Pill button used across the site. Renders a router <Link> for `to`, an <a>
// for `href` (external/tel/wa), or a <button> otherwise.
const VARIANTS = {
  solid: 'bg-sage text-paper hover:bg-sage-dark',
  outline: 'border border-[#c9bda6] text-ink hover:border-sage hover:text-sage',
  onDarkSolid: 'bg-sage text-paper hover:bg-sage-light',
  onDarkOutline: 'border border-ink-line text-paper hover:bg-white/[0.06]',
}

const SIZES = {
  md: 'px-[22px] py-[11px] text-sm',
  lg: 'px-[30px] py-4 text-base',
}

export default function LinkButton({
  to,
  href,
  variant = 'solid',
  size = 'lg',
  className = '',
  children,
  ...rest
}) {
  const cls = `inline-flex items-center justify-center gap-2.5 rounded-full font-body font-semibold transition-colors ${SIZES[size]} ${VARIANTS[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  )
}
