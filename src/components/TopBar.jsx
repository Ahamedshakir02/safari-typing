import UaeFlag from './UaeFlag.jsx'
import Arabic from './Arabic.jsx'
import ServiceIcon from './ServiceIcon.jsx'
import { CONTACT } from '../data/site.js'
import { telLink, mailLink } from '../lib/wa.js'

/**
 * Slim utility bar above the main nav. Carries the UAE flag (the way UAE
 * government-service sites do) on the left and quick contact links on the right.
 */
export default function TopBar() {
  return (
    <div className="bg-navy text-offwhite">
      <div className="mx-auto flex max-w-content items-center justify-between gap-3 px-5 py-1.5 sm:px-8">
        <span className="flex items-center gap-2">
          <UaeFlag height={14} />
          <span className="font-body text-xs font-medium tracking-wide text-offwhite/85">
            United Arab Emirates
          </span>
          <Arabic className="hidden text-xs text-offwhite/55 sm:inline">الإمارات العربية المتحدة</Arabic>
        </span>

        <span className="flex items-center gap-4">
          <a
            href={telLink(CONTACT.phones[0].e164)}
            className="flex items-center gap-1.5 font-body text-xs text-offwhite/85 transition-colors hover:text-white"
          >
            <ServiceIcon name="phone" size={13} />
            <span>{CONTACT.phones[0].display}</span>
          </a>
          <a
            href={mailLink()}
            className="hidden items-center gap-1.5 font-body text-xs text-offwhite/85 transition-colors hover:text-white sm:flex"
          >
            <ServiceIcon name="mail" size={13} />
            <span>{CONTACT.email}</span>
          </a>
        </span>
      </div>
    </div>
  )
}
