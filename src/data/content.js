// ---------------------------------------------------------------------------
// Page content for the editorial Safari Typing Services site, taken directly
// from the approved designs (Home / Services / About / Pricing / FAQ).
// Plain ES module — no imports, tree-shaken into the bundle.
// ---------------------------------------------------------------------------

// The ten service areas. `blurb` is the short Home-list line; `desc` + `tags`
// power the Services page blocks.
export const SERVICES = [
  {
    n: '01',
    title: 'Tasheel & MOHRE labour',
    titleLong: 'Tasheel & MOHRE labour services',
    blurb: 'Work permits, labour contracts, offer letters and renewals.',
    desc: 'All Ministry of Human Resources & Emiratisation transactions, processed through the official Tasheel system — from a new hire’s first permit to final settlement.',
    tags: [
      'Work permits',
      'Labour contracts',
      'Employee offer letters',
      'Quota approval',
      'Wage Protection (WPS)',
      'Absconding reports',
      'Renewals & cancellations',
    ],
  },
  {
    n: '02',
    title: 'Amer & immigration',
    titleLong: 'Amer & immigration services',
    blurb: 'Residence visas, entry permits, status change and family sponsorship.',
    desc: 'Residency and visa transactions through the Amer system — for individuals, families and company sponsors, including stamping and fine settlement.',
    tags: [
      'Residence visas',
      'Entry permits',
      'Change of status',
      'Visa stamping',
      'Family sponsorship',
      'Visa cancellation',
      'Overstay fine settlement',
    ],
  },
  {
    n: '03',
    title: 'Emirates ID & document typing',
    titleLong: 'Emirates ID & document typing',
    blurb: 'New IDs, renewals, replacements and accurate typing of any form.',
    desc: 'Fast, error-free typing of any official application, plus full Emirates ID processing through the ICP system.',
    tags: [
      'New Emirates ID',
      'ID renewals',
      'Lost & replacement',
      'Mobile number update',
      'Data correction',
      'Application typing',
    ],
  },
  {
    n: '04',
    title: 'Attestation & translation',
    titleLong: 'Attestation & translation',
    blurb: 'Certificate attestation, MOFA, embassy services and legal translation.',
    desc: 'Certificate attestation, apostille and certified legal translation for personal, educational and business documents.',
    tags: [
      'MOFA attestation',
      'Apostille',
      'Educational certificates',
      'Embassy services',
      'Legal & medical translation',
      'Power of attorney',
    ],
  },
  {
    n: '05',
    title: 'Business setup & trade licence',
    titleLong: 'Business setup & trade licence',
    blurb: 'Mainland and free-zone formation, amendments and renewals.',
    desc: 'From first licence to renewal — mainland and free-zone company formation, fully managed, including local sponsor arrangement.',
    tags: [
      'Trade licence',
      'Mainland formation',
      'Free-zone setup',
      'LLC formation',
      'Local sponsor arrangement',
      'Licence renewals',
    ],
  },
  {
    n: '06',
    title: 'Tenancy, Ejari & PRO',
    titleLong: 'Tenancy, Ejari & PRO services',
    blurb: 'Ejari registration, tenancy contracts and ongoing PRO support.',
    desc: 'Ejari registration, tenancy contracts, utility connections and ongoing PRO support so your home or company stays compliant.',
    tags: [
      'Ejari registration',
      'Tenancy contracts',
      'FEWA connection',
      'Ajman Sewerage registration',
      'Civil Defence',
      'Dedicated PRO support',
    ],
  },
  {
    n: '07',
    title: 'Printing, photocopy & online forms',
    titleLong: 'Printing, photocopy & online forms',
    blurb: 'Printing, scanning, insurance and online government submissions.',
    desc: 'Everyday office services and online registrations — printing, scanning, insurance and government form submissions.',
    tags: [
      'Printing & scanning',
      'Photocopy',
      'Online form submission',
      'Health, home & vehicle insurance',
    ],
  },
  {
    n: '08',
    title: 'Medical applications',
    titleLong: 'Medical applications',
    blurb: 'Medical fitness, family medical, health card and pre-marriage tests.',
    desc: 'Medical fitness bookings for visas, family applications and marriage — typed and submitted, ready for your appointment.',
    tags: ['Medical fitness test', 'Family medical', 'Health card', 'Pre-marriage medical'],
  },
  {
    n: '09',
    title: 'Vehicle & driving licence',
    titleLong: 'Vehicle & driving licence',
    blurb: 'RTA transactions, driving licence, fine payment and registration.',
    desc: 'RTA and traffic department transactions — from licence paperwork to fine settlement and vehicle registration.',
    tags: ['Driving licence', 'RTA transactions', 'Traffic fine payment', 'Vehicle registration'],
  },
  {
    n: '10',
    title: 'Passport services',
    titleLong: 'Passport services',
    blurb: 'New, renewal, amendment and home-country document applications.',
    desc: 'Passport and home-country document applications, prepared accurately and submitted on your behalf.',
    tags: ['New & renewal', 'Amendments', 'Lost passport', 'Home-country ID cards'],
  },
]

// Home — trust strip. [CONFIRM] every figure before launch — no invented numbers.
export const HOME_STATS = [
  { value: '12+', label: 'Years of service' },
  { value: '15,000+', label: 'Applications handled' },
  { value: '5', label: 'Languages spoken' },
  { value: 'Same day', label: 'On most documents' },
]

// Icon name (see Icon.jsx) for each service area, keyed by its number. Keeps the
// SERVICES data above presentation-free while letting the home/services grids
// show a glyph per area.
export const SERVICE_ICONS = {
  '01': 'building',
  '02': 'shield',
  '03': 'doc',
  '04': 'globe',
  '05': 'layers',
  '06': 'wallet',
  '07': 'image',
  '08': 'check',
  '09': 'car',
  '10': 'passport',
}

// Home — "official channels" credentials strip. Defensible (these are the
// systems we submit through), not unqualified "government authorised" claims.
export const CREDENTIALS = [
  { label: 'ICP e-Channel', icon: 'globe' },
  { label: 'Tasheel · MOHRE', icon: 'doc' },
  { label: 'Amer immigration', icon: 'shield' },
  { label: 'MOFA attestation', icon: 'check' },
]

// Home — section copy, rewritten for a more confident, premium voice. Keep
// claims accurate; [CONFIRM] anything not yet verified by the client.
export const HOME = {
  hero: {
    eyebrow: 'NAZIR PLAZA · AJMAN, UNITED ARAB EMIRATES',
    subline:
      'Visas, Emirates ID, attestation, business licences and PRO services — typed correctly, submitted through the right channel and followed up until they’re done. So you never have to think about the queue again.',
    trustLine: 'Serving Ajman’s residents & businesses in five languages', // [CONFIRM] scale wording
  },
  credentialsLabel: 'We work through the official government channels',
  services: {
    eyebrow: 'WHAT WE DO',
    title: 'Every formality, under one calm roof.',
    intro:
      'From a first residence visa to a full trade licence — we manage the forms, the fees and the follow-ups on your behalf.',
    allLabel: 'View all services',
  },
  why: {
    eyebrow: 'WHY SAFARI',
    title: 'Quiet competence, every single time.',
    intro: 'The reasons residents and businesses keep coming back to Shop 4.',
  },
  process: {
    eyebrow: 'THE PROCESS',
    title: 'Three unhurried steps.',
    intro: 'No appointment, no jargon. Tell us what you need and we take it from there.',
  },
  languages: {
    eyebrow: 'SPOKEN HERE',
    title: 'We’ll explain it in your language.',
    intro: 'Deal with the same friendly team in whichever of these you’re most comfortable speaking.',
  },
  testimonials: {
    eyebrow: 'IN THEIR WORDS',
    title: 'Trusted across the community.',
  },
  faq: {
    eyebrow: 'GOOD TO KNOW',
    title: 'A few things people ask.',
    allLabel: 'See all FAQs',
  },
}

// Home — three-step process (roman numerals).
export const PROCESS = [
  {
    numeral: 'i.',
    title: 'Tell us what you need',
    body: 'Call or WhatsApp. We confirm the documents and exact government fees up front.',
  },
  {
    numeral: 'ii.',
    title: 'Share your papers',
    body: 'Visit Shop 4 or send documents digitally. We type and submit everything for you.',
  },
  {
    numeral: 'iii.',
    title: 'Collect & carry on',
    body: 'We track the application and let you know the moment it’s ready.',
  },
]

// About — stats band + values.
export const ABOUT_STATS = [
  { value: '12+', label: 'Years in service' }, // [CONFIRM]
  { value: '15k+', label: 'Applications' }, // [CONFIRM]
  { value: '10', label: 'Service areas' },
  { value: '100%', label: 'Confidential', accent: true },
]

export const VALUES = [
  {
    title: 'Accuracy',
    body: 'A single typo can mean a rejected application. We check every detail before it’s submitted.',
  },
  {
    title: 'Honesty',
    body: 'Government fees plus a clear service charge. No hidden costs — you’ll know before we begin.',
  },
  {
    title: 'Presence',
    body: 'Call, WhatsApp or walk in. We keep you updated at every stage, so you’re never left guessing.',
  },
]

// Pricing — three tiers (middle is featured).
export const PRICING = [
  {
    name: 'Document typing',
    note: 'Single forms & quick jobs',
    from: 'AED 25',
    featured: false,
    features: [
      'Application & form typing',
      'Emirates ID forms',
      'Printing & photocopy',
      'Online form submission',
    ],
  },
  {
    name: 'Visa & labour',
    note: 'Tasheel, Amer & immigration',
    from: 'AED 75',
    featured: true,
    badge: 'POPULAR',
    features: [
      'Residence visa processing',
      'Work permits & contracts',
      'Status change & cancellation',
      'Family sponsorship',
      'WhatsApp status updates',
    ],
  },
  {
    name: 'Business & PRO',
    note: 'Licences & ongoing support',
    from: 'AED 250',
    featured: false,
    features: [
      'Trade licence & formation',
      'Ejari & tenancy contracts',
      'Attestation & translation',
      'Dedicated PRO support',
    ],
  },
]

export const PRICING_NOTE =
  'Prices shown are indicative service charges and exclude official government fees, which vary by transaction and are charged at cost. Contact us for an exact quote for your specific case.'

// Contact — enquiry form service options.
export const ENQUIRY_SERVICES = [
  'Tasheel / MOHRE labour',
  'Amer / immigration & visa',
  'Emirates ID & document typing',
  'Attestation & translation',
  'Business setup / trade licence',
  'Tenancy, Ejari & PRO',
  'Printing & online forms',
  'Something else',
]

// FAQ — accordion.
export const FAQS = [
  {
    q: 'What documents do I need to bring?',
    a: 'It depends on the transaction, but usually your passport, Emirates ID and any related certificates. Message us first and we’ll send you an exact checklist so you only make one trip.',
  },
  {
    q: 'How long does a typical application take?',
    a: 'Most typing and form submissions are done same day. Visa and labour transactions depend on government processing times, but we submit immediately and keep you updated throughout.',
  },
  {
    q: 'Are the prices on your website final?',
    a: 'The listed prices are our service charges. Official government fees are separate and charged at cost — we always confirm the full amount before starting any work.',
  },
  {
    q: 'Can I send documents without visiting the shop?',
    a: 'Yes. Send clear photos or scans on WhatsApp and we can begin many transactions remotely, then arrange collection or delivery of any originals.',
  },
  {
    q: 'Do you handle both individual and company work?',
    a: 'We do. From a single Emirates ID renewal to full company formation and ongoing PRO support, residents and businesses are both welcome.',
  },
  {
    q: 'What are your opening hours?',
    a: 'Saturday to Thursday, 8:00 AM to 9:00 PM, and Friday from 2:00 PM to 9:00 PM. Walk-ins are welcome, but a quick call ahead helps us prepare.',
  },
]
