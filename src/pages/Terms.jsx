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
        title="Terms Of Service"
        description="The Terms On Which Safari Typing Services In Ajman Provides Government Typing, Document And PRO Services To Residents And Businesses."
        path="/terms"
      />

      <section className="mx-auto max-w-[760px] px-5 pb-6 pt-20 text-center sm:px-7">
        <div data-hero>
          <Eyebrow className="mb-5">Terms</Eyebrow>
          <h1 className="mb-6 text-[40px] font-medium sm:text-[52px]">
            Clear Terms, <em className="italic text-gradient-brand">No Surprises.</em>
          </h1>
          <AccentLine className="mx-auto" />
        </div>
      </section>

      <section
        data-reveal
        className="mx-auto max-w-[760px] px-5 pb-24 font-body text-[16px] leading-[1.7] text-soft sm:px-7"
      >
        <p className="mb-7">
          These Terms Apply When You Ask Safari Typing Services (&ldquo;We&rdquo;, &ldquo;Us&rdquo;) To
          Handle A Typing, Document Or Government Transaction For You At {CONTACT.address.full}. By
          Using Our Services You Agree To Them. We Keep Them Short And Honest.{' '}
          <em>Last Updated: June 2026.</em>
        </p>

        <TermsBlock title="What We Do">
          We Are A Typing And Document-services Centre. We Prepare, Type And Submit Applications And
          Transactions Through The Relevant Official Government Channels (For Example ICP,
          Tasheel/MOHRE, Amer, MOFA, FEWA And Ajman Municipality) On Your Behalf, And Follow Up Until
          They Are Completed. We Are An Independent Service Provider And Are Not A Government
          Department.
        </TermsBlock>

        <TermsBlock title="Government Decisions Are Not Ours">
          We Prepare And Submit Your Application Accurately, But The Approval, Rejection, Timing And
          Fees Of Any Government Transaction Are Decided By The Relevant Authority — Not By Us. We
          Cannot Guarantee A Particular Outcome Or Processing Time, And Government Fees And Rules Can
          Change Without Notice.
        </TermsBlock>

        <TermsBlock title="Fees &amp; Government Charges">
          Our Charge Is A Clear Service Fee For Our Work. Official Government Fees Are Separate And Are
          Charged At Cost. We Confirm The Full Amount — Our Service Fee Plus The Government Portion —
          Before We Begin, So There Are No Hidden Costs. Payments Made To Government Authorities Are
          Non-refundable Once A Transaction Has Been Submitted.
        </TermsBlock>

        <TermsBlock title="Your Responsibilities">
          You Are Responsible For Giving Us Accurate, Genuine And Complete Information And Documents.
          We Rely On What You Provide, And We Are Not Responsible For Delays Or Rejections Caused By
          Incorrect, Incomplete, Expired Or Fraudulent Documents. Please Review The Details We Prepare
          Before They Are Submitted.
        </TermsBlock>

        <TermsBlock title="Documents &amp; Turnaround">
          Most Typing And Form Submissions Are Completed The Same Day; Visa, Labour And Other
          Government Transactions Depend On The Authority&rsquo;s Processing Time. We Handle Your
          Original Documents With Care And Return Them To You, But We Recommend You Keep Your Own
          Copies Of Anything Important.
        </TermsBlock>

        <TermsBlock title="Liability">
          We Take Care To Do Our Work Accurately. To The Extent Permitted By Law, Our Responsibility
          For Any Single Transaction Is Limited To The Service Fee You Paid Us For That Transaction. We
          Are Not Liable For Government Fees, Third-party Charges, Or Losses Outside Our Control.
        </TermsBlock>

        <TermsBlock title="Privacy">
          We Handle Your Personal Information And Documents Confidentially. How We Collect, Use And
          Protect Your Data Is Explained In Our{' '}
          <Link to="/privacy-policy" className="font-medium text-ink transition-colors hover:text-sage">
            Privacy Policy
          </Link>
          .
        </TermsBlock>

        <TermsBlock title="Changes &amp; Contact">
          We May Update These Terms From Time To Time; The Current Version Always Applies. These Terms
          Are Governed By The Laws Of The United Arab Emirates. If You Have Any Question, Contact Us:
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
