import Seo from '../components/Seo.jsx'
import Contact from '../sections/Contact.jsx'

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        description="Visit or message Safari Typing Services in Sharjah — Nazir Plaza Building, Shop 4. Call or WhatsApp us for any government typing or document service."
        path="/contact"
      />
      <Contact asPage />
    </>
  )
}
