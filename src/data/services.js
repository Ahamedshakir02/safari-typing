// ---------------------------------------------------------------------------
// The 14 services. Each renders a card on the homepage grid AND a detail page
// at /services/:slug. Copy uses Sharjah-accurate UAE terminology
// (FEWA→SEWA, Ejari→Sharjah Municipality, RTA→SRTA/Sharjah Police, MOFA→MOFAIC).
//
// Shape: { slug, icon, name, nameAr, subline, intro, included[], documents[],
//          steps[], related[] }   (related = other slugs)
// ---------------------------------------------------------------------------

export const SERVICES = [
  {
    slug: 'business-setup',
    icon: 'briefcase',
    name: 'Business Setup & Consulting',
    nameAr: 'تأسيس الأعمال والاستشارات',
    subline: 'Mainland & Free Zone formation, local sponsor.',
    intro:
      'We help you start your business in the UAE the right way — Mainland or Free Zone — and guide you through licensing, ownership and approvals from start to finish.',
    included: [
      'Mainland company formation (Sharjah Economic Development Dept.)',
      'Free Zone setup (SAIF Zone, Hamriyah, SPC and more)',
      'Trade name reservation & initial approval',
      'Local service agent / sponsor arrangement where required',
      'Memorandum of Association (MOA) drafting & notarisation',
      'Trade licence issuance & bank-account guidance',
    ],
    documents: [
      'Passport copies of all shareholders',
      'Passport-size photographs',
      'Proposed trade names (2–3 options)',
      'Business activity details',
      'Tenancy contract for the premises (attested)',
      'No-objection letter from current sponsor (if a resident)',
    ],
    steps: [
      'Tell us your activity and preferred location (Mainland or Free Zone).',
      'We reserve the trade name, get initial approval and prepare your documents.',
      'We complete licence issuance and hand over your ready-to-use trade licence.',
    ],
    related: ['pro-services', 'company-visa', 'translation'],
  },

  {
    slug: 'pro-services',
    icon: 'users',
    name: 'PRO Services',
    nameAr: 'خدمات العلاقات العامة',
    subline: 'Visa processing, trade licence, labour.',
    intro:
      "Our Public Relations Officer (PRO) team handles your day-to-day government paperwork — visas, trade-licence renewals and labour transactions — so you don't have to queue.",
    included: [
      'Visa processing & renewals (ICP e-Channel)',
      'Trade licence renewal & amendments',
      'Labour transactions via Tasheel (MOHRE)',
      'Document collection, submission & follow-up',
      'Government fee payments on your behalf',
      'Typing & application form preparation',
    ],
    documents: [
      'Valid trade licence copy',
      'Establishment card / immigration card',
      'Passport & Emirates ID copies of applicants',
      'Authorisation letter from the company',
      'Supporting documents for the specific transaction',
    ],
    steps: [
      'Send us the task and the related documents.',
      'We prepare, submit and follow up with the right authority (ICP or MOHRE).',
      'We deliver the completed paperwork or approval.',
    ],
    related: ['business-setup', 'company-visa', 'tasheel'],
  },

  {
    slug: 'family-visa',
    icon: 'family',
    name: 'Family Visa Processing',
    nameAr: 'تأشيرات العائلة',
    subline: 'Entry permit, renewal, cancellation, status change.',
    intro:
      'Sponsor your spouse, children or parents with confidence. We handle entry permits, renewals, cancellations and status changes through the federal ICP e-Channel.',
    included: [
      'Family entry permit application (ICP)',
      'Residence visa stamping & renewal',
      'Visa cancellation',
      'Status change (e.g. visit to residence) where eligible',
      'Medical fitness & Emirates ID coordination',
      'Sponsorship eligibility & salary-certificate guidance',
    ],
    documents: [
      "Sponsor's passport, Emirates ID & residence visa",
      'Attested marriage certificate (for spouse)',
      'Attested birth certificate (for children)',
      'Salary certificate or labour contract',
      'Tenancy contract attested by Sharjah Municipality',
      'Passport copies & photos of family members',
    ],
    steps: [
      'Bring or send your documents and we check your sponsorship eligibility.',
      'We apply for the entry permit and arrange medical & Emirates ID.',
      'We complete visa stamping and return the documents to you.',
    ],
    related: ['emirates-id', 'medical-application', 'icp-immigration'],
  },

  {
    slug: 'company-visa',
    icon: 'building',
    name: 'Company Visa Processing',
    nameAr: 'تأشيرات الشركات',
    subline: 'Employee visa, insurance, cancellation.',
    intro:
      'Hire and onboard staff smoothly. We process employee visas, link them to the right insurance, and handle cancellations through ICP and MOHRE.',
    included: [
      'Employee entry permit & residence visa (ICP)',
      'Work permit / labour card via Tasheel (MOHRE)',
      'Medical insurance arrangement',
      'Visa cancellation & absconding clearance',
      'Establishment card issuance & renewal',
      'Quota & labour approval guidance',
    ],
    documents: [
      'Trade licence & establishment card copies',
      'Employee passport copy & photographs',
      'Signed MOHRE offer letter / labour contract',
      'Attested educational certificate (where required)',
      'Entry permit & medical fitness results',
    ],
    steps: [
      'Share the company file and employee details with us.',
      'We secure the work permit (MOHRE) and visa (ICP), plus medical & insurance.',
      'We complete Emirates ID and visa stamping for your employee.',
    ],
    related: ['pro-services', 'emirates-id', 'insurance'],
  },

  {
    slug: 'emirates-id',
    icon: 'idcard',
    name: 'Emirates ID',
    nameAr: 'الهوية الإماراتية',
    subline: 'New, renewal, lost, data update.',
    intro:
      'Your Emirates ID is your main identity card in the UAE. We handle new applications, renewals, replacements for lost cards and personal-data updates through ICP.',
    included: [
      'New Emirates ID application (ICP)',
      'Emirates ID renewal',
      'Replacement for lost or damaged card',
      'Personal-data correction & updates',
      'Biometrics appointment booking',
      'Urgent / fast-track processing where available',
    ],
    documents: [
      'Original passport / passport copy',
      'Valid residence visa (or entry permit for new applicants)',
      'Existing Emirates ID (for renewal or replacement)',
      'Recent passport-size photo (per ICP specs)',
      'Police report (for a lost card, if requested)',
    ],
    steps: [
      "Tell us whether it's new, a renewal, lost or an update.",
      'We submit the application via ICP and book biometrics if needed.',
      'We track the card and notify you when it is ready.',
    ],
    related: ['family-visa', 'icp-immigration', 'medical-application'],
  },

  {
    slug: 'medical-application',
    icon: 'medical',
    name: 'Medical Application',
    nameAr: 'الفحص الطبي',
    subline: 'Fitness, health card, marriage medical.',
    intro:
      'Book and prepare your government medical fitness test, health card or pre-marriage medical quickly, with every form typed correctly the first time.',
    included: [
      'Medical fitness test application (for residence visa)',
      'Health card application',
      'Pre-marriage medical examination booking',
      'VIP / fast-track medical scheduling',
      'Form typing & fee payment',
      'Result follow-up & coordination with visa stamping',
    ],
    documents: [
      'Passport copy',
      'Entry permit or residence visa copy',
      'Emirates ID or Emirates ID application copy',
      'Passport-size photographs',
      'Sponsor details (where applicable)',
    ],
    steps: [
      'Give us your visa details and preferred medical centre.',
      'We complete the application and book your appointment.',
      'We collect your results and pass them to the next visa step.',
    ],
    related: ['family-visa', 'emirates-id', 'company-visa'],
  },

  {
    slug: 'tasheel',
    icon: 'contract',
    name: 'Tasheel (MOHRE)',
    nameAr: 'تسهيل (وزارة الموارد البشرية)',
    subline: 'Offer letter, labour contract, complaints.',
    intro:
      'Tasheel is the official channel for the Ministry of Human Resources & Emiratisation (MOHRE). We prepare offer letters, labour contracts and complaints accurately.',
    included: [
      'MOHRE offer letter preparation',
      'Labour contract typing & submission',
      'Work permit / labour card transactions',
      'Contract renewal & amendments',
      'Labour complaint registration',
      'Wages Protection System (WPS) guidance',
    ],
    documents: [
      'Trade licence & establishment card',
      'Employee passport copy & photo',
      'Employee Emirates ID / visa copy',
      'Attested educational certificate (if required for the role)',
      'Signed offer letter / contract details',
    ],
    steps: [
      'Share the employer and employee details with us.',
      'We type and submit the offer letter or contract through Tasheel (MOHRE).',
      'We return the approved document or complaint reference.',
    ],
    related: ['company-visa', 'pro-services', 'business-setup'],
  },

  {
    slug: 'icp-immigration',
    icon: 'stamp',
    name: 'ICP / Immigration',
    nameAr: 'الهوية والجنسية (ICP)',
    subline: 'Entry permit, status change, residency.',
    intro:
      'The Federal Authority for Identity, Citizenship, Customs & Port Security (ICP) handles immigration and identity for Sharjah. We manage entry permits, status changes and residency through the ICP e-Channel.',
    included: [
      'Entry permit (visit, work, family) via ICP',
      'Status change inside the country',
      'Residence visa issuance & renewal',
      'Overstay / fine settlement',
      'Establishment-card immigration transactions',
      'Visa cancellation & exit coordination',
    ],
    documents: [
      'Passport copy (and original where required)',
      'Current visa / entry permit copy',
      'Emirates ID copy',
      'Sponsor documents (visa, Emirates ID, licence)',
      'Medical & insurance documents (for residency)',
    ],
    steps: [
      'Tell us the immigration transaction you need.',
      'We submit and follow up through the ICP e-Channel.',
      'We deliver your approved permit, visa or residency.',
    ],
    related: ['family-visa', 'emirates-id', 'passport-services'],
  },

  {
    slug: 'attestation',
    icon: 'certificate',
    name: 'Certificate Attestation',
    nameAr: 'تصديق الشهادات',
    subline: 'MOFAIC, MOJ, apostille, educational.',
    intro:
      'We attest your educational, marriage, birth and commercial certificates for use in the UAE — guiding you through MOFAIC, the Ministry of Justice and embassy steps in the correct order.',
    included: [
      'MOFAIC (Ministry of Foreign Affairs) attestation',
      'Ministry of Justice (MOJ) attestation for legal documents',
      'Educational certificate attestation',
      'Marriage & birth certificate attestation',
      'Embassy / consulate attestation coordination',
      'Apostille handling for home-country documents',
    ],
    documents: [
      'Original certificate to be attested',
      'Passport copy of the certificate holder',
      'Home-country attestation / apostille (if already done)',
      'Authorisation letter (where collection is on your behalf)',
      'Certified legal translation (if not in Arabic or English)',
    ],
    steps: [
      'Bring your original certificate and tell us its purpose.',
      'We complete the required chain (home-country / embassy → MOFAIC, plus MOJ if legal).',
      'We return your fully attested document ready for use in the UAE.',
    ],
    related: ['translation', 'passport-services', 'family-visa'],
  },

  {
    slug: 'translation',
    icon: 'translate',
    name: 'Translation & Court Works',
    nameAr: 'الترجمة وأعمال المحاكم',
    subline: 'Legal translation, power of attorney.',
    intro:
      'Get legally recognised translations and court documents prepared correctly. Our work uses Ministry of Justice–approved legal translation where required.',
    included: [
      'Legal translation (Arabic ⇄ English & other languages)',
      'MOJ-approved certified translation',
      'Power of Attorney (POA) drafting & notarisation',
      'Court case form typing & submission',
      'Memo & statement preparation',
      'Notary public coordination',
    ],
    documents: [
      'Original document to be translated',
      'Passport & Emirates ID copies of the parties',
      'Details of the recipient authority (court, ministry, etc.)',
      'Existing case or reference number (for court works)',
      'Authorisation letter where acting on your behalf',
    ],
    steps: [
      'Share your document and tell us where it will be submitted.',
      'We translate (MOJ-certified where needed) and prepare the legal paperwork.',
      'We arrange notarisation and submission, then return the finished document.',
    ],
    related: ['attestation', 'business-setup', 'icp-immigration'],
  },

  {
    slug: 'vehicle-license',
    icon: 'car',
    name: 'Vehicle & Driving License',
    nameAr: 'المركبات ورخص القيادة',
    subline: 'Sharjah Police / SRTA, renewal, fine payment.',
    intro:
      'We handle vehicle and driving-licence paperwork for Sharjah through Sharjah Police and SRTA — registration renewals, licence transactions and traffic-fine payments.',
    included: [
      'Vehicle registration (Mulkiya) renewal — Sharjah Police / SRTA',
      'Driving-licence renewal & replacement',
      'Vehicle ownership transfer',
      'Traffic-fine inquiry & payment',
      'Licence translation / opening a file for new drivers',
      'Vehicle insurance coordination',
    ],
    documents: [
      'Emirates ID copy',
      'Existing driving licence or vehicle registration card',
      'Vehicle insurance certificate (for registration)',
      'Vehicle test (passing) certificate where due',
      'Passport / visa copy (for new licence files)',
    ],
    steps: [
      'Tell us the vehicle or licence task and share your documents.',
      'We process it through Sharjah Police / SRTA and settle any fines.',
      'We return your renewed registration or licence.',
    ],
    related: ['insurance', 'online-registrations', 'pro-services'],
  },

  {
    slug: 'passport-services',
    icon: 'passport',
    name: 'Passport Services',
    nameAr: 'خدمات الجوازات',
    subline: 'New, renewal, amendments.',
    intro:
      'We assist with passport applications, renewals and amendments — coordinating with the relevant consulate or embassy and preparing your forms correctly.',
    included: [
      'New passport application support',
      'Passport renewal',
      'Name / data amendment forms',
      'Lost-passport reporting & replacement guidance',
      'Consulate / embassy appointment coordination',
      'Form typing & document checking',
    ],
    documents: [
      'Existing passport (or copy)',
      'Emirates ID copy',
      'Passport-size photographs (per consulate specs)',
      'Birth certificate or supporting ID (for new / amendments)',
      'Police report (for a lost passport)',
    ],
    steps: [
      'Tell us your nationality and the passport service you need.',
      'We prepare the forms and book the consulate / embassy appointment.',
      'We guide you through submission and collection.',
    ],
    related: ['icp-immigration', 'attestation', 'emirates-id'],
  },

  {
    slug: 'online-registrations',
    icon: 'online',
    name: 'Online Registrations',
    nameAr: 'التسجيلات الإلكترونية',
    subline: 'Tenancy attestation, SEWA, Civil Defence.',
    intro:
      'We complete your essential Sharjah registrations online — tenancy contract attestation, SEWA utilities and Civil Defence — without you visiting multiple offices.',
    included: [
      'Tenancy contract attestation (Sharjah Municipality)',
      'SEWA electricity, water & gas connection / transfer',
      'Civil Defence registration & approvals',
      'Utility account opening & clearance',
      'Trade-name & portal account setup',
      'Ejari registration (for clients with Dubai properties)',
    ],
    documents: [
      'Signed tenancy contract',
      'Emirates ID & passport copies',
      'Title deed or landlord details',
      'Trade licence (for commercial premises)',
      'Previous utility bill or account number (for transfers)',
    ],
    steps: [
      'Send us your tenancy contract and ID documents.',
      'We attest the contract with Sharjah Municipality and open your SEWA account.',
      'We complete any Civil Defence or portal registrations and confirm activation.',
    ],
    related: ['business-setup', 'insurance', 'vehicle-license'],
  },

  {
    slug: 'insurance',
    icon: 'umbrella',
    name: 'Insurance',
    nameAr: 'التأمين',
    subline: 'Health, vehicle, home.',
    intro:
      'Compare and arrange the right insurance for your needs — health, vehicle and home — with clear, honest guidance and quick issuance.',
    included: [
      'Health / medical insurance (individual & family)',
      'Vehicle / motor insurance (comprehensive & third-party)',
      'Home & contents insurance',
      'Visa-linked medical insurance',
      'Policy renewal & claims guidance',
      'Quote comparison across providers',
    ],
    documents: [
      'Emirates ID & passport copies',
      'Visa copy (for medical insurance)',
      'Vehicle registration card (for motor insurance)',
      'Tenancy contract or title deed (for home insurance)',
      'Existing policy details (for renewals)',
    ],
    steps: [
      'Tell us what you want to insure and share basic details.',
      'We compare quotes and recommend a suitable, honestly-priced policy.',
      'We issue the policy and send you the documents.',
    ],
    related: ['vehicle-license', 'company-visa', 'family-visa'],
  },
]

// Derived lookups — built once at module load. Import these, not the array.
export const SERVICE_MAP = Object.fromEntries(SERVICES.map((s) => [s.slug, s]))

export const getService = (slug) => SERVICE_MAP[slug] ?? null

export const getRelated = (service) =>
  (service?.related ?? []).map((slug) => SERVICE_MAP[slug]).filter(Boolean)
