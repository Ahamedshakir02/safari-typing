import { useInView } from '../lib/useInView.js'
import LinkButton from './LinkButton.jsx'
import FlagRibbon from './FlagRibbon.jsx'
import { CONTACT } from '../data/site.js'
import { waLink, telLink } from '../lib/wa.js'

/**
 * The dark ink "call to action" panel that closes most pages. Defaults to the
 * WhatsApp + Call pairing from the designs; pass a custom `secondary` to swap
 * the second button (e.g. a link to the Contact page).
 */
export default function CtaBlock({
  heading,
  body,
  primaryLabel = `WhatsApp ${CONTACT.whatsapp.display}`,
  secondary,
  ribbon = true,
  className = '',
}) {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className={`reveal ${inView ? 'is-visible' : ''} mx-auto max-w-content px-5 sm:px-7 ${className}`}>
      <div className="relative overflow-hidden rounded-[32px] bg-ink px-6 py-16 text-center sm:px-12 sm:py-[72px]">
        {ribbon && (
          <FlagRibbon className="pointer-events-none absolute -bottom-8 -left-6 z-0 hidden w-28 opacity-90 sm:block sm:w-36 lg:w-44" />
        )}
        <div className="relative z-10">
          <h2 className="text-[34px] font-medium text-paper sm:text-[44px] md:text-[50px]">{heading}</h2>
          <p className="mx-auto mt-[18px] max-w-[480px] font-body text-[17px] text-ink-soft sm:text-lg">{body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <LinkButton href={waLink()} target="_blank" rel="noopener noreferrer" variant="onDarkSolid">
              {primaryLabel}
            </LinkButton>
            {secondary ?? (
              <LinkButton href={telLink(CONTACT.phones[0].e164)} variant="onDarkOutline">
                Call {CONTACT.phones[0].display}
              </LinkButton>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
