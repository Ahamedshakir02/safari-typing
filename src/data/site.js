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
    city: 'Ajman',
    region: 'Ajman',
    country: 'United Arab Emirates',
    full: 'Nazir Plaza Building, Shop 4, Ajman, UAE',
  },

  // [CONFIRM] exact pin — Ajman placeholder coordinates near Nazir Plaza.
  geo: { lat: 25.4052, lng: 55.4525 },

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
  mapsQuery: 'Safari Typing Services, Nazir Plaza, Ajman, UAE',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=Safari+Typing+Services+Nazir+Plaza+Ajman+UAE',

  // Real social profiles.
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/safariajman/', icon: 'instagram' },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61586441787823', icon: 'facebook' },
  ],
}

// Primary navigation — real multi-page routes. (Services opens a mega-menu in
// the header; see SERVICE_GROUPS in content.js.)
export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
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
    title: 'Affordable Ajman rates',
    body: 'Clear, honest pricing that suits Ajman families and businesses.',
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
    text: 'Helpful team for tenancy attestation and Ajman Sewerage registration. Friendly and patient with all my questions.',
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
    addressLocality: 'Ajman',
    addressRegion: 'Ajman',
    addressCountry: 'AE',
    // postalCode: '', // [CONFIRM] add the shop's P.O. Box / postal code
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: CONTACT.geo.lat,
    longitude: CONTACT.geo.lng,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '08:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '14:00',
      closes: '21:00',
    },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: CONTACT.whatsapp.display,
      contactType: 'customer service',
      availableLanguage: ['English', 'Arabic', 'Urdu', 'Hindi', 'Malayalam'],
    },
  ],
  areaServed: { '@type': 'City', name: 'Ajman' },
  sameAs: [
    'https://www.instagram.com/safariajman/',
    'https://www.facebook.com/profile.php?id=61586441787823',
  ],
}
