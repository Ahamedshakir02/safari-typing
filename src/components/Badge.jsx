import Icon from './Icon.jsx'

// Small credential / trust chip ("ICP e-Channel", "Tasheel (MOHRE)", …).
export default function Badge({ children, icon, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-tag-line bg-tag-bg px-4 py-2 font-body text-[13px] font-semibold text-tag-ink ${className}`}
    >
      {icon && <Icon name={icon} size={15} strokeWidth={1.8} />}
      {children}
    </span>
  )
}
