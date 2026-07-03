// Small uppercase section label ("WHAT WE DO", "PRICING", …).
// `as` lets a hero promote this label to the real <h1> for SEO (the page's
// biggest headline stays a styled non-heading element) without changing how
// it looks — see Home.jsx / CategoryPage.jsx.
export default function Eyebrow({ as: Tag = 'div', children, className = '', ...rest }) {
  return (
    <Tag
      className={`font-body text-[14px] font-semibold tracking-[0.08em] text-gold ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
