// ---------------------------------------------------------------------------
// Site-wide content & configuration.
// Plain ES module — zero imports, tree-shaken into the bundle. No backend.
// Items marked [CONFIRM] are placeholders the client must verify before launch
// (see the README "Content to confirm" checklist).
// ---------------------------------------------------------------------------

export const SITE_URL = 'https://www.safaritypingservices.com'

export const CONTACT = {
  brand: 'Safari Typing Services',
  brandAr: 'سفاري لخدمات الطباعة',
  tagline: 'Government Typing & Document Services',
  taglineAr: 'خدمات الطباعة والمعاملات الحكومية',

  address: {
    line1: 'Nazir Plaza Building, Shop 4, Al Mowaihat 3',
    city: 'Ajman',
    region: 'Ajman',
    country: 'United Arab Emirates',
    full: 'Nazir Plaza Building, Shop 4, Al Mowaihat 3, Ajman, UAE',
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

  // [CONFIRM] move to a domain mailbox (e.g. info@safaritypingservices.com) once
  // it exists — a Gmail address reads as less official next to the rest of the site.
  email: 'safaritypingservices@gmail.com',

  // Opening days/times — from the Google Business Profile (split morning +
  // evening sessions; closed Sunday).
  hours: [
    { days: 'Monday – Thursday', time: '8:00 AM – 2:00 PM · 5:00 PM – 10:00 PM' },
    { days: 'Friday', time: '8:00 AM – 12:00 PM · 5:00 PM – 10:00 PM' },
    { days: 'Saturday', time: '9:00 AM – 2:00 PM · 5:00 PM – 10:00 PM' },
    { days: 'Sunday', time: 'Closed' },
  ],
  hoursShort: 'Mon–Sat · Mornings & Evenings · Closed Sunday',

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
    title: 'Fast Turnaround',
    body: 'Most Everyday Transactions Are Submitted The Same Day.',
  },
  {
    icon: 'shield',
    title: 'We Know The Process',
    body: 'ICP e-Channel And MOHRE / Tasheel Handled Correctly, Every Time.',
  },
  {
    icon: 'globe',
    title: 'Multilingual Staff',
    body: 'We Serve You In Arabic, English, Hindi, Malayalam And Urdu.',
  },
  {
    icon: 'layers',
    title: 'Everything Under One Roof',
    body: 'Visas, Emirates ID, Attestation, Translation, Insurance — One Centre.',
  },
  {
    icon: 'chat',
    title: 'WhatsApp From Home',
    body: 'Send Your Documents On WhatsApp — Skip The Queue And The Travel.',
  },
  {
    icon: 'wallet',
    title: 'Affordable Ajman Rates',
    body: 'Clear, Honest Pricing That Suits Ajman Families And Businesses.',
  },
]

// [PLACEHOLDER] — swap for real Google reviews before launch.
export const REVIEWS = [
  {
    name: 'Ahmed',
    lang: 'en',
    stars: 5,
    text: "Renewed My Family's Visas Through Them — Quick, Clear, And No Hidden Charges. Highly Recommend.",
    placeholder: true,
  },
  {
    name: 'Priya',
    lang: 'en',
    stars: 5,
    text: 'Got My Degree Attested And Emirates ID Done In One Visit. The Staff Explained Every Step In My Language.',
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
    text: 'Helpful Team For Tenancy Attestation And Ajman Sewerage Registration. Friendly And Patient With All My Questions.',
    placeholder: true,
  },
  {
    name: 'Rashid',
    lang: 'en',
    stars: 5,
    text: 'Sorted My Company Labour Contracts Through Tasheel Without Me Leaving The Office. Saved Me So Much Time.',
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
  // Split morning + evening sessions; Sunday omitted = closed.
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '08:00',
      closes: '14:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '17:00',
      closes: '22:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '08:00',
      closes: '12:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '17:00',
      closes: '22:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '14:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '17:00',
      closes: '22:00',
    },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: CONTACT.whatsapp.display,
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Arabic', 'Urdu', 'Hindi', 'Malayalam'],
    },
  ],
  areaServed: { '@type': 'City', name: 'Ajman' },
  sameAs: [
    'https://www.instagram.com/safariajman/',
    'https://www.facebook.com/profile.php?id=61586441787823',
  ],
}
