// ---------------------------------------------------------------------------
// Site-wide content & configuration.
// Plain ES module — zero imports, tree-shaken into the bundle. No backend.
// Items marked [CONFIRM] are placeholders the client must verify before launch
// (see the README "Content to confirm" checklist).
// ---------------------------------------------------------------------------

export const SITE_URL = 'https://www.safaritypingservices.ae' // [CONFIRM] final domain

export const CONTACT = {
  brand: 'Safari Typing Services',
  brandAr: 'سفاري لخدمات الطباعة',
  tagline: 'Government typing & document services',
  taglineAr: 'خدمات الطباعة والمعاملات الحكومية',

  address: {
    line1: 'Nazir Plaza Building, Shop 4',
    city: 'Sharjah',
    country: 'United Arab Emirates',
    full: 'Nazir Plaza Building, Shop 4, Sharjah, UAE',
  },

  // [CONFIRM] exact pin — Sharjah city placeholder coordinates.
  geo: { lat: 25.3463, lng: 55.4209 },

  // Phones in display + E.164 (tel:) form. First entry = primary "Call".
  phones: [
    { label: 'Landline', display: '+971 6 544 7665', e164: '+97165447665' },
    { label: 'Mobile', display: '+971 50 405 7575', e164: '+971504057575' },
    { label: 'Mobile', display: '+971 56 632 2299', e164: '+971566322299' },
  ],

  // wa.me requires the number WITHOUT the leading '+'.  [CONFIRM] WhatsApp line.
  whatsapp: { display: '+971 50 405 7575', number: '971504057575' },

  email: 'safaritypingservices@gmail.com',

  // [CONFIRM] actual opening days/times.
  hours: [
    { days: 'Saturday – Thursday', time: '8:00 AM – 9:00 PM' },
    { days: 'Friday', time: '2:00 PM – 9:00 PM' },
  ],
  hoursShort: 'Sat–Thu 8AM–9PM · Fri 2PM–9PM',

  // Google Maps embed query (no API key needed via &output=embed).
  mapsQuery: 'Nazir Plaza Building, Sharjah, UAE',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=Nazir+Plaza+Building+Sharjah+UAE',

  // Social placeholders — drop in real handles or remove.
  socials: [
    { label: 'Instagram', href: '#', icon: 'instagram' },
    { label: 'Facebook', href: '#', icon: 'facebook' },
    { label: 'TikTok', href: '#', icon: 'tiktok' },
  ],
}

// Primary navigation — real multi-page routes.
export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

// Languages the centre serves in.
export const LANGUAGES = [
  { label: 'English', dir: 'ltr' },
  { label: 'العربية', dir: 'rtl' },
  { label: 'हिन्दी', dir: 'ltr' },
  { label: 'മലയാളം', dir: 'ltr' },
  { label: 'اردو', dir: 'rtl' },
]

// Trust strip badges — accurate, defensible claims (no unqualified
// "Government Authorised").
export const TRUST_BADGES = [
  'ICP e-Channel Submissions',
  'Tasheel (MOHRE) Services',
  'Attestation & Translation',
  'Years of Experience',
]

// Count-up stats. [CONFIRM] all values — no awards invented.
export const STATS = [
  { value: 14, suffix: '+', label: 'Government services' },
  { value: 5, suffix: '', label: 'Languages spoken' },
  { value: 10, suffix: '+', label: 'Years serving Sharjah' },
  { value: 5000, suffix: '+', label: 'Happy customers' },
]

export const WHY_US = [
  {
    icon: 'clock',
    title: 'Fast turnaround',
    body: 'Most everyday transactions are submitted the same day.',
  },
  {
    icon: 'shield',
    title: 'We know the process',
    body: 'ICP e-Channel and MOHRE / Tasheel handled correctly, every time.',
  },
  {
    icon: 'globe',
    title: 'Multilingual staff',
    body: 'We serve you in Arabic, English, Hindi, Malayalam and Urdu.',
  },
  {
    icon: 'layers',
    title: 'Everything under one roof',
    body: 'Visas, Emirates ID, attestation, translation, insurance — one centre.',
  },
  {
    icon: 'chat',
    title: 'WhatsApp from home',
    body: 'Send your documents on WhatsApp — skip the queue and the travel.',
  },
  {
    icon: 'wallet',
    title: 'Affordable Sharjah rates',
    body: 'Clear, honest pricing that suits Sharjah families and businesses.',
  },
]

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Send or Visit',
    body: 'Message your documents on WhatsApp or visit our Sharjah office.',
  },
  {
    step: 2,
    title: 'We Process',
    body: 'We type and submit through the right channel — ICP e-Channel or Tasheel (MOHRE) — and follow up.',
  },
  {
    step: 3,
    title: 'Done',
    body: 'Collect your completed visa, Emirates ID or attested document — or we send it to you.',
  },
]

// [PLACEHOLDER] — swap for real Google reviews before launch.
export const REVIEWS = [
  {
    name: 'Ahmed',
    lang: 'en',
    stars: 5,
    text: "Renewed my family's visas through them — quick, clear, and no hidden charges. Highly recommend.",
    placeholder: true,
  },
  {
    name: 'Priya',
    lang: 'en',
    stars: 5,
    text: 'Got my degree attested and Emirates ID done in one visit. The staff explained every step in my language.',
    placeholder: true,
  },
  {
    name: 'محمد',
    lang: 'ar',
    stars: 5,
    text: 'خدمة سريعة وموظفون متعاونون. أنجزوا معاملتي في وقت قصير.',
    placeholder: true,
  },
  {
    name: 'Anjali',
    lang: 'en',
    stars: 4,
    text: 'Helpful team for tenancy attestation and SEWA registration. Friendly and patient with all my questions.',
    placeholder: true,
  },
  {
    name: 'Rashid',
    lang: 'en',
    stars: 5,
    text: 'Sorted my company labour contracts through Tasheel without me leaving the office. Saved me so much time.',
    placeholder: true,
  },
]

// Homepage hero + positioning copy.
export const HERO = {
  headline: 'All your government paperwork. One trusted centre in Sharjah.',
  sublineAr: 'كل معاملاتك الحكومية في مكان واحد',
  sublineEn: 'Visas, Emirates ID, Tasheel, attestation and more — handled for you.',
}

export const ABOUT = {
  heading: 'One centre for almost everything.',
  headingAr: 'مركز واحد لكل خدماتك',
  lines: [
    'Safari Typing Services brings nearly every government and document service under one roof in Sharjah — from visas and Emirates ID to attestation, Tasheel and translation.',
    'Sharjah residents trust us because we know the federal ICP e-Channel and MOHRE processes inside out, type every form correctly the first time, and follow up until the job is done.',
    'Whether you visit us or message us on WhatsApp, you deal with the same friendly, multilingual team every time.',
  ],
}

export const CONTACT_CTA = {
  heading: 'Get your paperwork done today.',
  headingAr: 'أنجز معاملاتك اليوم',
  body: "Message us on WhatsApp and we'll tell you exactly what to bring. No appointment needed.",
}

// LocalBusiness structured data for local SEO / trust (embedded on Home).
export const LOCAL_BUSINESS_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: CONTACT.brand,
  image: `${SITE_URL}/safari-banner.jpeg`,
  url: SITE_URL,
  email: CONTACT.email,
  telephone: CONTACT.phones[0].e164,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT.address.line1,
    addressLocality: 'Sharjah',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: CONTACT.geo.lat,
    longitude: CONTACT.geo.lng,
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: CONTACT.whatsapp.display,
      contactType: 'customer service',
      availableLanguage: ['English', 'Arabic', 'Urdu', 'Hindi', 'Malayalam'],
    },
  ],
  areaServed: { '@type': 'City', name: 'Sharjah' },
  sameAs: [],
}
