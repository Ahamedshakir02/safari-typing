import Seo from '../components/Seo.jsx'
import Hero from '../sections/Hero.jsx'
import TrustStrip from '../sections/TrustStrip.jsx'
import About from '../sections/About.jsx'
import Services from '../sections/Services.jsx'
import WhyUs from '../sections/WhyUs.jsx'
import HowItWorks from '../sections/HowItWorks.jsx'
import Reviews from '../sections/Reviews.jsx'
import Languages from '../sections/Languages.jsx'
import Contact from '../sections/Contact.jsx'
import { LOCAL_BUSINESS_JSONLD } from '../data/site.js'

export default function Home() {
  return (
    <>
      <Seo
        title=""
        description="All your government paperwork, one trusted centre in Sharjah, UAE — Emirates ID, visas, Tasheel (MOHRE), ICP e-Channel, attestation, translation and more. WhatsApp us today."
        path="/"
        jsonLd={LOCAL_BUSINESS_JSONLD}
      />
      <Hero />
      <TrustStrip />
      <About />
      <Services />
      <WhyUs />
      <HowItWorks />
      <Reviews />
      <Languages />
      <Contact />
    </>
  )
}
