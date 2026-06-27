import Seo from '../components/Seo.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import AccentLine from '../components/AccentLine.jsx'
import { CONTACT } from '../data/site.js'
import { mailLink, telLink } from '../lib/wa.js'
import { usePageMotion } from '../lib/usePageMotion.js'

// Short, plain-language privacy notice. Aligned with the UAE Personal Data
// Protection Law (PDPL). [CONFIRM] the specifics (retention period, any
// processors) with the business before launch.
export default function Privacy() {
  const root = usePageMotion()

  return (
    <div ref={root}>
      <Seo
        title="Privacy Policy"
        description="How Safari Typing Services in Ajman collects, uses and protects the personal information you share with us."
        path="/privacy-policy"
      />

      <section className="mx-auto max-w-[760px] px-5 pb-6 pt-20 text-center sm:px-7">
        <div data-hero>
          <Eyebrow className="mb-5">Privacy</Eyebrow>
          <h1 className="mb-6 text-[40px] font-medium sm:text-[52px]">
            Your information, <em className="italic text-sage">Handled with care.</em>
          </h1>
          <AccentLine className="mx-auto" />
        </div>
      </section>

      <section
        data-reveal
        className="mx-auto max-w-[760px] px-5 pb-24 font-body text-[16px] leading-[1.7] text-soft sm:px-7"
      >
        <p className="mb-7">
          Safari Typing Services (“we”, “us”) is a government typing &amp; document-services centre at{' '}
          {CONTACT.address.full}. This page explains what personal information we collect and how we use
          it. We keep it short and honest. <em>Last updated: June 2026.</em>
        </p>

        <PolicyBlock title="What we collect">
          When you contact us — by WhatsApp, phone, email or the enquiry form on this site — we receive
          your name, phone number and the details of your request. To process a government transaction on
          your behalf you may also share documents such as your passport, Emirates ID or certificates.
        </PolicyBlock>

        <PolicyBlock title="How we use it">
          We use your information only to respond to your enquiry and to prepare, submit and follow up on
          the specific service you ask us to handle. We do not sell your data or use it for unrelated
          marketing.
        </PolicyBlock>

        <PolicyBlock title="Who we share it with">
          We submit transactions through the relevant official government channels (for example ICP,
          Tasheel/MOHRE, Amer, FEWA and Ajman Sewerage) strictly as needed to complete your request. We do
          not share your information with anyone else except where the law requires it.
        </PolicyBlock>

        <PolicyBlock title="How we protect &amp; keep it">
          Documents are handled confidentially and kept only for as long as needed to complete your
          transaction and meet our record-keeping obligations, after which they are securely disposed of.
          {' '}[CONFIRM] exact retention period.
        </PolicyBlock>

        <PolicyBlock title="Your rights">
          Under the UAE Personal Data Protection Law you may ask us to access, correct or delete the
          personal information we hold about you. To make a request, or if you have any question about
          your privacy, contact us:
          <span className="mt-3 block">
            <a href={mailLink()} className="font-medium text-ink transition-colors hover:text-sage">
              {CONTACT.email}
            </a>
            {' · '}
            <a
              href={telLink(CONTACT.phones[0].e164)}
              className="font-medium text-ink transition-colors hover:text-sage"
            >
              {CONTACT.phones[0].display}
            </a>
          </span>
        </PolicyBlock>
      </section>
    </div>
  )
}

function PolicyBlock({ title, children }) {
  return (
    <div className="mb-7">
      <h2 className="mb-2 font-display text-[24px] font-medium text-ink">{title}</h2>
      <p>{children}</p>
    </div>
  )
}
