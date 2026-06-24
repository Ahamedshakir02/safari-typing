/**
 * Brand mark — the actual circular Safari Typing Services logo (served from
 * /public). Used in the header, footer, mobile menu and 404. The source image
 * has a white circular badge, so `rounded-full` keeps it clean on dark surfaces
 * (e.g. the navy footer) too.
 */
export default function Logo({ size = 44, className = '', eager = false }) {
  return (
    <img
      src="/safari-logo.jpeg"
      width={size}
      height={size}
      style={{ width: size, height: size }}
      alt="Safari Typing Services"
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={`rounded-full object-cover ${className}`}
    />
  )
}
