import { Link } from 'react-router-dom'
import UaeFlag from './UaeFlag.jsx'
import { NAV_LINKS, CONTACT } from '../data/site.js'
import { telLink, mailLink } from '../lib/wa.js'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-content gap-11 px-5 pb-8 pt-16 sm:px-7 md:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
        {/* Brand */}
        <div>
          <Link to="/" aria-label="Safari Typing Services — home" className="mb-[18px] flex items-center gap-[13px]">
            <img src="/safari-mark.svg" alt="Safari Typing Services" className="h-11 w-auto" loading="lazy" decoding="async" />
            <span className="flex flex-col leading-[1.05]">
              <span className="font-display text-[20px] font-semibold text-ink">Safari</span>
              <span className="font-body text-[8.5px] font-semibold tracking-[0.26em] text-sage">
                TYPING SERVICES
              </span>
            </span>
          </Link>
          <p className="max-w-[280px] font-body text-[14.5px] text-soft">
            A trusted typing centre for government, immigration and business formalities across the UAE.
          </p>
        </div>

        {/* Pages */}
        <div>
          <h4 className="mb-[18px] font-body text-[12.5px] font-bold tracking-[0.12em] text-ink">PAGES</h4>
          <div className="flex flex-col gap-[11px] font-body text-[14.5px] text-soft">
            {NAV_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className="transition-colors hover:text-sage">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 className="mb-[18px] font-body text-[12.5px] font-bold tracking-[0.12em] text-ink">HOURS</h4>
          <div className="font-body text-[14.5px] leading-[1.9] text-soft">
            <div>Sat – Thu</div>
            <div className="mb-2 text-ink">8:00 AM – 9:00 PM</div>
            <div>Friday</div>
            <div className="text-ink">2:00 PM – 9:00 PM</div>
          </div>
        </div>

        {/* Get in touch */}
        <div>
          <h4 className="mb-[18px] font-body text-[12.5px] font-bold tracking-[0.12em] text-ink">GET IN TOUCH</h4>
          <div className="flex flex-col gap-2 font-body text-[14.5px] leading-[1.8] text-soft">
            <span>{CONTACT.address.line1}</span>
            {CONTACT.phones.map((p) => (
              <a key={p.e164} href={telLink(p.e164)} className="transition-colors hover:text-sage">
                {p.display}
              </a>
            ))}
            <a href={mailLink()} className="break-all transition-colors hover:text-sage">
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-content flex-wrap justify-between gap-2.5 border-t border-line px-5 py-[22px] font-body text-[13px] text-gold sm:px-7">
        <span>© {year} Safari Typing Services. All rights reserved.</span>
        <span className="inline-flex items-center gap-2">
          <UaeFlag className="w-4 shrink-0" />
          Nazir Plaza Building, Shop 4 · United Arab Emirates
        </span>
      </div>
    </footer>
  )
}
