import { Link } from 'react-router-dom'
import ServiceIcon from './ServiceIcon.jsx'

// Variants:
//   primary -> solid red (the #1 action, e.g. WhatsApp)
//   navy    -> solid navy
//   ghost   -> navy outline on transparent
//   white   -> white/translucent on dark backgrounds
const VARIANTS = {
  primary: 'bg-red text-white hover:bg-red-600 shadow-card',
  navy: 'bg-navy text-offwhite hover:bg-navy-800 shadow-card',
  ghost: 'bg-transparent text-navy ring-1 ring-inset ring-navy/25 hover:ring-navy/60 hover:bg-navy/[0.03]',
  white: 'bg-white/12 text-white ring-1 ring-inset ring-white/30 hover:bg-white/20',
}

const SIZES = {
  md: 'px-5 py-3 text-sm',
  lg: 'px-7 py-4 text-base',
}

/**
 * One button/link primitive. Renders a router <Link> (`to`), an <a> (`href`) or
 * a <button>. Always meets the 44px tap target. Optional leading/trailing icon.
 */
export default function Button({
  as,
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  className = '',
  children,
  ...rest
}) {
  const classes = `tap group inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold tracking-tight transition-all duration-300 ${VARIANTS[variant]} ${SIZES[size]} ${className}`

  const inner = (
    <>
      {icon && <ServiceIcon name={icon} size={18} className="shrink-0" />}
      <span>{children}</span>
      {iconRight && (
        <ServiceIcon
          name={iconRight}
          size={18}
          className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
        />
      )}
    </>
  )

  const Tag = as || (to ? 'route' : href ? 'a' : 'button')

  if (Tag === 'route') {
    return (
      <Link to={to} className={classes} {...rest}>
        {inner}
      </Link>
    )
  }
  if (Tag === 'a') {
    return (
      <a href={href} className={classes} {...rest}>
        {inner}
      </a>
    )
  }
  return (
    <button className={classes} {...rest}>
      {inner}
    </button>
  )
}
