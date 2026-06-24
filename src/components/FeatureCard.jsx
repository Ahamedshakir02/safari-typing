import Icon from './Icon.jsx'

// Icon + title + body card used for value props ("Why Safari") and similar
// grids. Subtle hover lift to match the site's premium micro-interactions.
export default function FeatureCard({ icon, title, body, className = '' }) {
  return (
    <div
      className={`group rounded-[20px] border border-line bg-cream-50 p-7 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-sage/40 hover:shadow-soft ${className}`}
    >
      <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-tag-bg text-sage transition-colors duration-300 group-hover:bg-sage group-hover:text-paper">
        {icon && <Icon name={icon} size={22} strokeWidth={1.7} />}
      </span>
      <h3 className="mb-2 text-[21px] font-medium">{title}</h3>
      <p className="font-body text-[15px] leading-[1.6] text-soft">{body}</p>
    </div>
  )
}
