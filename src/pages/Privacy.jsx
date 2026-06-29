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
        description="How Safari Typing Services In Ajman Collects, Uses And Protects The Personal Information You Share With Us."
        path="/privacy-policy"
      />

      <section className="mx-auto max-w-[760px] px-5 pb-6 pt-20 text-center sm:px-7">
        <div data-hero>
          <Eyebrow className="mb-5">Privacy</Eyebrow>
          <h1 className="mb-6 text-[40px] font-medium sm:text-[52px]">
            Your Information, <em className="italic text-gradient-brand">Handled With Care.</em>
          </h1>
          <AccentLine className="mx-auto" />
        </div>
      </section>

      <section
        data-reveal
        className="mx-auto max-w-[760px] px-5 pb-24 font-body text-[16px] leading-[1.7] text-soft sm:px-7"
      >
        <p className="mb-7">
          Safari Typing Services (“We”, “Us”) Is A Government Typing &amp; Document-services Centre At{' '}
          {CONTACT.address.full}. This Page Explains What Personal Information We Collect And How We Use
          It. We Keep It Short And Honest. <em>Last Updated: June 2026.</em>
        </p>

        <PolicyBlock title="What We Collect">
          When You Contact Us — By WhatsApp, Phone, Email Or The Enquiry Form On This Site — We Receive
          Your Name, Phone Number And The Details Of Your Request. To Process A Government Transaction On
          Your Behalf You May Also Share Documents Such As Your Passport, Emirates ID Or Certificates.
        </PolicyBlock>

        <PolicyBlock title="How We Use It">
          We Use Your Information Only To Respond To Your Enquiry And To Prepare, Submit And Follow Up On
          The Specific Service You Ask Us To Handle. We Do Not Sell Your Data Or Use It For Unrelated
          Marketing.
        </PolicyBlock>

        <PolicyBlock title="Who We Share It With">
          We Submit Transactions Through The Relevant Official Government Channels (For Example ICP,
          Tasheel/MOHRE, Amer, FEWA And Ajman Sewerage) Strictly As Needed To Complete Your Request. We Do
          Not Share Your Information With Anyone Else Except Where The Law Requires It.
        </PolicyBlock>

        <PolicyBlock title="How We Protect &amp; Keep It">
          Documents Are Handled Confidentially And Kept Only For As Long As Needed To Complete Your
          Transaction And Meet Our Record-keeping Obligations, After Which They Are Securely Disposed Of.
          {' '}[CONFIRM] Exact Retention Period.
        </PolicyBlock>

        <PolicyBlock title="Your Rights">
          Under The UAE Personal Data Protection Law You May Ask Us To Access, Correct Or Delete The
          Personal Information We Hold About You. To Make A Request, Or If You Have Any Question About
          Your Privacy, Contact Us:
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
