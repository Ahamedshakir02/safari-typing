// Small uppercase section label ("WHAT WE DO", "PRICING", …).
export default function Eyebrow({ children, className = '' }) {
  return (
    <div className={`font-body text-[12.5px] font-semibold tracking-[0.18em] text-gold ${className}`}>
      {children}
    </div>
  )
}
