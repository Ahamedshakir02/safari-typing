/** First focusable element — lets keyboard users jump straight to content. */
export default function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only fixed left-4 top-4 z-[300] rounded-lg bg-navy px-4 py-2 font-body text-sm font-medium text-offwhite"
    >
      Skip To Content
    </a>
  )
}
