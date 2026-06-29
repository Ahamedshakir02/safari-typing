import Icon from './Icon.jsx'
import { CONTACT } from '../data/site.js'

/**
 * Round social icon buttons (Instagram, Facebook) wired to the real profiles in
 * CONTACT.socials. Shared by the footer and the contact page so the set stays
 * consistent. `tone="dark"` recolours the buttons for the dark ink panels.
 */
export default function SocialLinks({ className = '', size = 19, tone = 'light' }) {
  const styles =
    tone === 'dark'
      ? 'border-ink-line bg-transparent text-paper hover:border-sage-light hover:text-sage-light'
      : 'border-line bg-cream-50 text-soft hover:border-sage hover:text-sage'

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {CONTACT.socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Safari Typing Services on ${s.label}`}
          className={`flex h-11 w-11 items-center justify-center rounded-full border transition-[color,border-color,transform] duration-300 ease-out hover:-translate-y-0.5 ${styles}`}
        >
          <Icon name={s.icon} size={size} />
        </a>
      ))}
    </div>
  )
}
