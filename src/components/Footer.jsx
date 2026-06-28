import { Link } from 'react-router-dom'
import UaeFlag from './UaeFlag.jsx'
import { NAV_LINKS, CONTACT } from '../data/site.js'
import { SERVICES } from '../data/content.js'
import { telLink, mailLink } from '../lib/wa.js'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-x-6 gap-y-10 px-5 pb-8 pt-14 sm:px-7 md:grid-cols-[1.4fr_1.6fr_1fr_1.2fr] md:gap-11 md:pt-16">
        {/* Brand + hours */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" aria-label="Safari Typing Services — home" className="mb-[18px] flex items-center gap-[13px]">
            <img src="/safari-mark.svg" alt="Safari Typing Services" className="h-14 w-auto" loading="lazy" decoding="async" />
            <span className="flex flex-col leading-[1.05]">
              <span className="font-display text-[28px] font-semibold text-ink">Safari</span>
              <span className="font-body text-[12.5px] font-semibold tracking-[0.24em] text-sage">
                TYPING SERVICES
              </span>
            </span>
          </Link>
          <p className="mb-6 max-w-[280px] font-body text-[14.5px] text-soft">
            A trusted typing centre for government, immigration and business formalities across Ajman
            and the northern emirates.
          </p>
          <h4 className="mb-2 font-body text-[12.5px] font-bold tracking-[0.12em] text-ink">HOURS</h4>
          <div className="font-body text-[14px] leading-[1.7] text-soft">
            <div>Sat – Thu · <span className="text-ink">8:00 AM – 9:00 PM</span></div>
            <div>Friday · <span className="text-ink">2:00 PM – 9:00 PM</span></div>
          </div>
        </div>

        {/* Services */}
        <div className="col-span-2 border-t border-line pt-9 md:col-span-1 md:border-t-0 md:pt-0">
          <h4 className="mb-[18px] font-body text-[12.5px] font-bold tracking-[0.12em] text-ink">SERVICES</h4>
          <div className="grid grid-cols-2 gap-x-6 gap-y-[10px] font-body text-[14px] text-soft">
            {SERVICES.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="transition-colors hover:text-sage">
                {s.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Pages + legal */}
        <div>
          <h4 className="mb-[18px] font-body text-[12.5px] font-bold tracking-[0.12em] text-ink">PAGES</h4>
          <div className="flex flex-col gap-[11px] font-body text-[14.5px] text-soft">
            {NAV_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className="transition-colors hover:text-sage">
                {link.label}
              </Link>
            ))}
            <Link to="/privacy-policy" className="transition-colors hover:text-sage">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-sage">
              Terms of Service
            </Link>
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
        <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1">
          © {year} Safari Typing Services.
          <Link to="/privacy-policy" className="underline-offset-2 transition-colors hover:text-sage hover:underline">
            Privacy
          </Link>
          <Link to="/terms" className="underline-offset-2 transition-colors hover:text-sage hover:underline">
            Terms
          </Link>
        </span>
        <span className="inline-flex items-center gap-2">
          <UaeFlag className="w-4 shrink-0" />
          Nazir Plaza Building, Shop 4 · Ajman, UAE
        </span>
      </div>
    </footer>
  )
}
