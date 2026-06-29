/**
 * Per-service flat-vector illustration for the service-card header. Each scene
 * shares a backdrop + a simple person figure (people-illustration vibe, à la
 * sarmat) and swaps in the category's emblematic object, so all 15 read as one
 * cohesive set in the brand blue. Keyed by service `slug`; slices to cover the
 * card header like a photo.
 */

// Shared backdrop: soft blue panel, a large pale circle, a floor band + dots.
const Backdrop = (
  <>
    <rect width="400" height="250" fill="#e8eef8" />
    <circle cx="332" cy="54" r="118" fill="#dce5f6" />
    <rect y="198" width="400" height="52" fill="#dde6f4" />
    <rect y="198" width="400" height="5" fill="#cad7ef" />
    <circle cx="56" cy="46" r="5" fill="#c4d2ed" />
    <circle cx="360" cy="176" r="6" fill="#c4d2ed" />
    <circle cx="40" cy="150" r="3.5" fill="#c4d2ed" />
  </>
)

// Shared person (bottom-left), kept small so the object reads as the subject.
const Person = (
  <g>
    <path d="M58 250 V224 a30 30 0 0 1 60 0 V250 Z" fill="#1f54a6" />
    <path d="M88 232 l-9 8 9 18 9-18 Z" fill="#ffffff" />
    <path d="M88 238 l-4.5 5 4.5 13 4.5-13 Z" fill="#3a6cbf" />
    <rect x="80" y="184" width="16" height="14" rx="4" fill="#eac39c" />
    <circle cx="88" cy="170" r="19" fill="#f1cca4" />
    <path d="M69 169 a19 19 0 0 1 38 0 q-19 -14 -38 0 Z" fill="#37302b" />
  </g>
)

// Per-service object, drawn around the centre-right (x≈210–340, y≈70–190).
const OBJECTS = {
  // 01 — Business setup & PRO: office towers
  'business-setup-pro': (
    <g>
      <rect x="214" y="84" width="58" height="106" rx="4" fill="#1f54a6" />
      <rect x="276" y="116" width="48" height="74" rx="4" fill="#3a6cbf" />
      <g fill="#dce6f7">
        <rect x="224" y="96" width="14" height="12" /><rect x="248" y="96" width="14" height="12" />
        <rect x="224" y="118" width="14" height="12" /><rect x="248" y="118" width="14" height="12" />
        <rect x="224" y="140" width="14" height="12" /><rect x="248" y="140" width="14" height="12" />
        <rect x="286" y="128" width="12" height="10" /><rect x="304" y="128" width="12" height="10" />
        <rect x="286" y="148" width="12" height="10" /><rect x="304" y="148" width="12" height="10" />
      </g>
    </g>
  ),
  // 02 — Visa & immigration: passport + approval check
  'visa-immigration': (
    <g>
      <rect x="226" y="80" width="92" height="118" rx="10" fill="#1f54a6" />
      <rect x="238" y="80" width="10" height="118" fill="#18437f" />
      <circle cx="284" cy="126" r="22" fill="#dce6f7" />
      <path d="M276 118h16M276 134h16" stroke="#9fb8e2" strokeWidth="3" strokeLinecap="round" />
      <circle cx="312" cy="170" r="20" fill="#0E9B7C" />
      <path d="M303 170l6 6 12-13" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),
  // 03 — Emirates ID: ID card
  'emirates-id': (
    <g>
      <rect x="208" y="92" width="134" height="86" rx="10" fill="#3a6cbf" />
      <rect x="208" y="92" width="134" height="20" rx="10" fill="#1f54a6" />
      <rect x="222" y="124" width="34" height="40" rx="5" fill="#dce6f7" />
      <path d="M270 128h56M270 142h56M270 156h36" stroke="#dce6f7" strokeWidth="6" strokeLinecap="round" />
    </g>
  ),
  // 04 — Tasheel & MOHRE: contract + pen
  'tasheel-mohre': (
    <g>
      <rect x="226" y="74" width="96" height="124" rx="9" fill="#ffffff" stroke="#cdd9ef" strokeWidth="2" />
      <rect x="244" y="70" width="60" height="14" rx="4" fill="#1f54a6" />
      <path d="M242 104h64M242 122h64M242 140h44" stroke="#c6d0e2" strokeWidth="6" strokeLinecap="round" />
      <circle cx="262" cy="166" r="14" fill="#0E9B7C" />
      <path d="M256 166l4.5 4.5 8.5-9" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M300 150l34-34 12 12-34 34-16 4 4-16Z" fill="#1f54a6" />
    </g>
  ),
  // 05 — Medical: clipboard + red cross
  'medical-services': (
    <g>
      <rect x="230" y="80" width="92" height="118" rx="10" fill="#ffffff" stroke="#cdd9ef" strokeWidth="2" />
      <rect x="262" y="72" width="28" height="16" rx="5" fill="#1f54a6" />
      <path d="M268 120h16v14h14v16h-14v14h-16v-14h-14v-16h14Z" fill="#ce1126" />
    </g>
  ),
  // 06 — Documentation & attestation: stamped document
  'documentation-attestation': (
    <g>
      <rect x="222" y="78" width="92" height="120" rx="10" fill="#ffffff" stroke="#cdd9ef" strokeWidth="2" />
      <path d="M236 100h64M236 118h64M236 136h40" stroke="#c6d0e2" strokeWidth="6" strokeLinecap="round" />
      <circle cx="300" cy="158" r="26" fill="#ce1126" />
      <circle cx="300" cy="158" r="20" fill="none" stroke="#fff" strokeWidth="2.5" />
      <path d="M290 158l7 7 14-15" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),
  // 07 — Translation & court: scales of justice
  'translation-court': (
    <g stroke="#1f54a6" strokeWidth="6" strokeLinecap="round" fill="none">
      <path d="M268 74v116M236 196h64" />
      <path d="M226 104h84" />
    </g>
  ),
  // 08 — Vehicle & driving licence: car
  'vehicle-driving-licence': (
    <g>
      <path d="M214 150l12-34a16 16 0 0 1 15-11h44a16 16 0 0 1 15 11l12 34Z" fill="#3a6cbf" />
      <rect x="208" y="150" width="120" height="34" rx="9" fill="#1f54a6" />
      <circle cx="232" cy="186" r="11" fill="#18437f" />
      <circle cx="304" cy="186" r="11" fill="#18437f" />
      <path d="M236 148l8-22h48l8 22Z" fill="#dce6f7" />
    </g>
  ),
  // 09 — Passport
  'passport-services': (
    <g>
      <rect x="236" y="74" width="92" height="120" rx="10" fill="#1f54a6" />
      <circle cx="282" cy="120" r="24" fill="none" stroke="#dce6f7" strokeWidth="4" />
      <path d="M282 96v48M258 120h48" stroke="#dce6f7" strokeWidth="3" />
      <path d="M266 160h32" stroke="#dce6f7" strokeWidth="5" strokeLinecap="round" />
    </g>
  ),
  // 10 — Online registrations & utilities: bolt in a circle
  'online-registrations-utilities': (
    <g>
      <circle cx="278" cy="132" r="60" fill="#1f54a6" />
      <path d="M286 96l-30 44h20l-6 32 30-46h-20Z" fill="#ffd66b" />
    </g>
  ),
  // 11 — Insurance: umbrella
  'insurance': (
    <g>
      <path d="M222 132a56 56 0 0 1 112 0Z" fill="#1f54a6" />
      <path d="M222 132h112" stroke="#18437f" strokeWidth="4" />
      <path d="M278 132v44a14 14 0 0 0 24 10" fill="none" stroke="#3a6cbf" strokeWidth="6" strokeLinecap="round" />
    </g>
  ),
  // 12 — Travel: paper plane
  'travel-services': (
    <g>
      <path d="M210 96l128 26-92 22-6 40-22-30Z" fill="#1f54a6" />
      <path d="M338 122l-92 22 92-22Z" fill="#18437f" />
      <path d="M246 144l92-22-70 58" fill="#3a6cbf" opacity=".55" />
    </g>
  ),
  // 13 — Tax & accounting: calculator + percent coin
  'tax-accounting': (
    <g>
      <rect x="214" y="74" width="84" height="120" rx="10" fill="#1f54a6" />
      <rect x="226" y="86" width="60" height="26" rx="4" fill="#dce6f7" />
      <path d="M234 100h44" stroke="#9fb8e2" strokeWidth="3" strokeLinecap="round" />
      <g fill="#3a6cbf">
        <rect x="226" y="122" width="14" height="14" rx="3" />
        <rect x="249" y="122" width="14" height="14" rx="3" />
        <rect x="272" y="122" width="14" height="14" rx="3" />
        <rect x="226" y="144" width="14" height="14" rx="3" />
        <rect x="249" y="144" width="14" height="14" rx="3" />
        <rect x="272" y="144" width="14" height="14" rx="3" />
        <rect x="226" y="166" width="14" height="14" rx="3" />
        <rect x="249" y="166" width="14" height="14" rx="3" />
      </g>
      <rect x="272" y="166" width="14" height="14" rx="3" fill="#0E9B7C" />
      <circle cx="320" cy="84" r="18" fill="#0E9B7C" />
      <path d="M313 91l14-14" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="315" cy="79" r="2.4" fill="#fff" />
      <circle cx="325" cy="89" r="2.4" fill="#fff" />
    </g>
  ),
  // 14 — Digital marketing & IT: monitor with a rising chart
  'digital-marketing-it': (
    <g>
      <rect x="210" y="78" width="128" height="92" rx="8" fill="#1f54a6" />
      <rect x="210" y="78" width="128" height="20" rx="8" fill="#18437f" />
      <g fill="#dce6f7">
        <circle cx="222" cy="88" r="3" /><circle cx="232" cy="88" r="3" /><circle cx="242" cy="88" r="3" />
      </g>
      <rect x="222" y="108" width="104" height="50" rx="4" fill="#dce6f7" />
      <g fill="#3a6cbf">
        <rect x="234" y="138" width="14" height="14" />
        <rect x="256" y="128" width="14" height="24" />
        <rect x="278" y="118" width="14" height="34" />
      </g>
      <path d="M234 134l22-10 22-12" fill="none" stroke="#0E9B7C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M248 184h52M274 170v14" stroke="#18437f" strokeWidth="6" strokeLinecap="round" />
    </g>
  ),
  // 15 — Everyday & other: printer
  'everyday-other': (
    <g>
      <rect x="240" y="78" width="72" height="34" rx="4" fill="#dce6f7" />
      <rect x="220" y="108" width="112" height="48" rx="9" fill="#1f54a6" />
      <rect x="244" y="150" width="64" height="40" rx="4" fill="#ffffff" stroke="#cdd9ef" strokeWidth="2" />
      <path d="M256 164h40M256 176h28" stroke="#c6d0e2" strokeWidth="5" strokeLinecap="round" />
      <circle cx="316" cy="124" r="4" fill="#0E9B7C" />
    </g>
  ),
}

// Scales need both stroke beams and filled pans — add them on top of the stroke group.
const SCALE_PANS = (
  <g key="pans" fill="#3a6cbf">
    <path d="M210 104l16 30h-32Z" />
    <path d="M310 104l16 30h-32Z" />
    <circle cx="268" cy="72" r="7" fill="#1f54a6" />
  </g>
)

export default function ServiceArt({ slug, className = '' }) {
  const object = OBJECTS[slug] ?? OBJECTS['everyday-other']
  return (
    <svg
      viewBox="0 0 400 250"
      role="img"
      aria-label="Service Illustration"
      className={`h-full w-full ${className}`}
      preserveAspectRatio="xMidYMid slice"
    >
      {Backdrop}
      {object}
      {slug === 'translation-court' && SCALE_PANS}
      {Person}
    </svg>
  )
}
