// Small uppercase section label ("WHAT WE DO", "PRICING", …).
export default function Eyebrow({ children, className = '', ...rest }) {
  return (
    <div
      className={`font-body text-[12.5px] font-semibold tracking-[0.08em] text-gold ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}
