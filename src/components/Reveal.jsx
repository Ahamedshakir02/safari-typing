import { useInView } from '../lib/useInView.js'

/**
 * Generic scroll-reveal wrapper. CSS-driven (see `.reveal` in index.css): the
 * element fades + rises into place once it enters the viewport. Reduced-motion
 * users get the visible state immediately, so content is never trapped hidden.
 * `delay` is in milliseconds (applied as transition-delay).
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
