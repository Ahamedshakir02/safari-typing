/**
 * Brand mark — the Safari Typing Services badge (served from /public).
 * Used standalone in the 404 page and composed into <Brand /> for the
 * header/footer lockup.
 */
export default function Logo({ size = 40, className = '', eager = false }) {
  return (
    <img
      src="/safari-mark.svg"
      width={size}
      height={size}
      style={{ height: size, width: 'auto' }}
      alt="Safari Typing Services"
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
    />
  )
}
