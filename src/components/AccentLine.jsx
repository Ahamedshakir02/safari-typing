// A slim UAE tricolour divider — a tasteful national accent placed under some
// section headings. Purely decorative. Width via className (default w-16).
export default function AccentLine({ className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex h-[3px] w-16 overflow-hidden rounded-full ring-1 ring-line ${className}`}
    >
      <span className="w-1/4 bg-uae-red" />
      <span className="flex-1 bg-uae-green" />
      <span className="flex-1 bg-white" />
      <span className="flex-1 bg-uae-black" />
    </span>
  )
}
