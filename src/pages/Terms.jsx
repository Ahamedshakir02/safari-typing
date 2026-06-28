import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import AccentLine from '../components/AccentLine.jsx'
import { CONTACT } from '../data/site.js'
import { mailLink, telLink } from '../lib/wa.js'
import { usePageMotion } from '../lib/usePageMotion.js'

// Plain-language terms of service for a UAE typing & document-services centre.
// [CONFIRM] specifics (cancellation/refund handling, governing emirate) with the
// business before launch.
export default function Terms() {
  const root = usePageMotion()

  return (
    <div ref={root}>
      <Seo
        title="Terms of Service"
        description="The terms on which Safari Typing Services in Ajman provides government typing, document and PRO services to residents and businesses."
        path="/terms"
      />

      <section className="mx-auto max-w-[760px] px-5 pb-6 pt-20 text-center sm:px-7">
        <div data-hero>
          <Eyebrow className="mb-5">Terms</Eyebrow>
          <h1 className="mb-6 text-[40px] font-medium sm:text-[52px]">
            Clear terms, <em className="italic text-gradient-brand">No surprises.</em>
          </h1>
          <AccentLine className="mx-auto" />
        </div>
      </section>

      <section
        data-reveal
        className="mx-auto max-w-[760px] px-5 pb-24 font-body text-[16px] leading-[1.7] text-soft sm:px-7"
      >
        <p className="mb-7">
          These terms apply when you ask Safari Typing Services (&ldquo;we&rdquo;, &ldquo;us&rdquo;) to
          handle a typing, document or government transaction for you at {CONTACT.address.full}. By
          using our services you agree to them. We keep them short and honest.{' '}
          <em>Last updated: June 2026.</em>
        </p>

        <TermsBlock title="What we do">
          We are a typing and document-services centre. We prepare, type and submit applications and
          transactions through the relevant official government channels (for example ICP,
          Tasheel/MOHRE, Amer, MOFA, FEWA and Ajman Municipality) on your behalf, and follow up until
          they are completed. We are an independent service provider and are not a government
          department.
        </TermsBlock>

        <TermsBlock title="Government decisions are not ours">
          We prepare and submit your application accurately, but the approval, rejection, timing and
          fees of any government transaction are decided by the relevant authority — not by us. We
          cannot guarantee a particular outcome or processing time, and government fees and rules can
          change without notice.
        </TermsBlock>

        <TermsBlock title="Fees &amp; government charges">
          Our charge is a clear service fee for our work. Official government fees are separate and are
          charged at cost. We confirm the full amount — our service fee plus the government portion —
          before we begin, so there are no hidden costs. Payments made to government authorities are
          non-refundable once a transaction has been submitted.
        </TermsBlock>

        <TermsBlock title="Your responsibilities">
          You are responsible for giving us accurate, genuine and complete information and documents.
          We rely on what you provide, and we are not responsible for delays or rejections caused by
          incorrect, incomplete, expired or fraudulent documents. Please review the details we prepare
          before they are submitted.
        </TermsBlock>

        <TermsBlock title="Documents &amp; turnaround">
          Most typing and form submissions are completed the same day; visa, labour and other
          government transactions depend on the authority&rsquo;s processing time. We handle your
          original documents with care and return them to you, but we recommend you keep your own
          copies of anything important.
        </TermsBlock>

        <TermsBlock title="Liability">
          We take care to do our work accurately. To the extent permitted by law, our responsibility
          for any single transaction is limited to the service fee you paid us for that transaction. We
          are not liable for government fees, third-party charges, or losses outside our control.
        </TermsBlock>

        <TermsBlock title="Privacy">
          We handle your personal information and documents confidentially. How we collect, use and
          protect your data is explained in our{' '}
          <Link to="/privacy-policy" className="font-medium text-ink transition-colors hover:text-sage">
            Privacy Policy
          </Link>
          .
        </TermsBlock>

        <TermsBlock title="Changes &amp; contact">
          We may update these terms from time to time; the current version always applies. These terms
          are governed by the laws of the United Arab Emirates. If you have any question, contact us:
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
        </TermsBlock>
      </section>
    </div>
  )
}

function TermsBlock({ title, children }) {
  return (
    <div className="mb-7">
      <h2 className="mb-2 font-display text-[24px] font-medium text-ink">{title}</h2>
      <p>{children}</p>
    </div>
  )
}
