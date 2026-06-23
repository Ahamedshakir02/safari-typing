import Reveal from '../components/Reveal.jsx'
import Arabic from '../components/Arabic.jsx'
import Button from '../components/Button.jsx'
import ContactForm from '../components/ContactForm.jsx'
import ContactInfo from '../components/ContactInfo.jsx'
import Map from '../components/Map.jsx'
import { CONTACT, CONTACT_CTA } from '../data/site.js'
import { waLink, telLink } from '../lib/wa.js'

/**
 * Full contact section — used on the homepage (#contact) and reused as the
 * /contact route. WhatsApp is the primary path; the form just pre-fills it.
 */
export default function Contact({ asPage = false }) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className={`px-5 sm:px-8 ${asPage ? 'pt-28 pb-20 sm:pt-32' : 'py-20 sm:py-28'}`}
    >
      <div className="mx-auto max-w-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-red">
            <span className="h-px w-6 bg-red" aria-hidden="true" />
            Contact
          </span>
          <h2 id="contact-heading" className="font-display text-3xl text-navy sm:text-4xl md:text-5xl">
            {CONTACT_CTA.heading}
          </h2>
          <Arabic className="mt-2 block text-xl text-muted sm:text-2xl">{CONTACT_CTA.headingAr}</Arabic>
          <p className="mt-4 font-body text-base leading-relaxed text-muted">{CONTACT_CTA.body}</p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button as="a" href={waLink()} target="_blank" rel="noopener noreferrer" variant="primary" size="lg" icon="whatsapp">
              WhatsApp Us
            </Button>
            <Button as="a" href={telLink(CONTACT.phones[0].e164)} variant="ghost" size="lg" icon="phone">
              Call {CONTACT.phones[0].display}
            </Button>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <ContactForm />
          <div className="space-y-6">
            <ContactInfo />
            <Map />
          </div>
        </div>
      </div>
    </section>
  )
}
