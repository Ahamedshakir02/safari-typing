// ---------------------------------------------------------------------------
// Page content for Safari Typing Services (Ajman). Plain ES module — no imports,
// tree-shaken into the bundle. Single source of truth for the 15 service
// categories, the home/menu grids, About, FAQ and the contact form.
//
// Arabic fields (titleAr / introAr / whatToBringAr + per-subservice titleAr /
// tagsAr) cover the category *headers*; long English `desc` lines stay English
// (see the chosen Arabic depth). Arabic copy is original MSA — [AR review]
// recommended by a native speaker before launch.
// ---------------------------------------------------------------------------

// The 15 service categories. Each is self-describing enough to render its own
// page (`/services/<slug>`), a home tile, a mega-menu column and a footer link.
//   slug        → route param + sitemap entry + anchor base
//   icon        → glyph name in Icon.jsx
//   keyword     → SEO phrase (always includes "Ajman")
//   blurb       → short home/menu descriptor
//   intro       → category-page intro paragraph
//   subservices → [{ id (in-page anchor), title, desc, tags }]
//   whatToBring → "what to bring" note
export const SERVICES = [
  {
    n: '01',
    slug: 'business-setup-pro',
    icon: 'building',
    title: 'Business Setup & PRO',
    titleAr: 'تأسيس الأعمال وخدمات العلاقات الحكومية (PRO)',
    keyword: 'Business Setup & PRO Services Ajman',
    blurb: 'Trade Licences, Company Formation & PRO Support.',
    photo: '/photos/service-business-setup-pro.jpg',
    photoAlt: 'A Safari Typing Services Advisor Handing Completed Paperwork To A Client',
    intro:
      'Start, License And Run A UAE Company From One Desk — Mainland Or Free Zone — With A Dedicated PRO Handling Every Government Touchpoint.',
    introAr:
      'ابدأ شركتك ورخّصها وأدِرها من مكان واحد — في البر الرئيسي أو المناطق الحرة — مع مسؤول علاقات عامة يتولى كل تعامل حكومي.',
    subservices: [
      {
        id: 'mainland-formation',
        title: 'Mainland Company Formation',
        titleAr: 'تأسيس شركة في البر الرئيسي',
        desc: 'Full Mainland Setup With The Department Of Economic Development — Name Reservation, Initial Approval, MOA And Trade-licence Issuance.',
        tags: ['DED Registration', 'Name Reservation', 'Initial Approval', 'MOA Drafting'],
        tagsAr: ['التسجيل في دائرة التنمية الاقتصادية', 'حجز الاسم التجاري', 'الموافقة المبدئية', 'عقد التأسيس'],
      },
      {
        id: 'freezone-formation',
        title: 'Free-zone Formation',
        titleAr: 'التأسيس في المناطق الحرة',
        desc: 'Company Formation In Ajman And UAE Free Zones — Package Selection, Licensing And Visa Allocation.',
        tags: ['Free-zone Licence', 'Package Selection', 'Visa Allocation', 'Flexi-desk'],
        tagsAr: ['رخصة منطقة حرة', 'اختيار الباقة', 'تخصيص التأشيرات', 'مكتب مرن'],
      },
      {
        id: 'trade-licence',
        title: 'Trade Licence (New / Renewal / Amendment)',
        titleAr: 'الرخصة التجارية (جديدة / تجديد / تعديل)',
        desc: 'New Trade Licences Plus Renewals And Amendments — Activity Changes, Partner Changes And Address Updates.',
        tags: ['New Licence', 'Licence Renewal', 'Activity Amendment', 'Partner Change'],
        tagsAr: ['رخصة جديدة', 'تجديد الرخصة', 'تعديل النشاط', 'تغيير الشركاء'],
      },
      {
        id: 'local-sponsor',
        title: 'Local Sponsor Arrangement',
        titleAr: 'ترتيب الكفيل المحلي',
        desc: 'Reliable Local Service-agent And Sponsor Arrangements Where Your Activity Still Requires One.',
        tags: ['Local Service Agent', 'Sponsor Arrangement'],
        tagsAr: ['وكيل خدمات محلي', 'ترتيب الكفالة'],
      },
      {
        id: 'business-consultancy',
        title: 'Business Consultancy',
        titleAr: 'الاستشارات التجارية',
        desc: 'Practical Guidance On The Right Structure, Jurisdiction And Activities Before You Commit.',
        tags: ['Structure Advice', 'Jurisdiction Choice', 'Activity Selection'],
        tagsAr: ['استشارة الهيكل', 'اختيار الولاية القضائية', 'اختيار النشاط'],
      },
      {
        id: 'pro-services',
        title: 'PRO Services & Government Liaison',
        titleAr: 'خدمات العلاقات العامة والتخليص الحكومي',
        desc: 'Ongoing Public-relations-officer Support — Document Clearing And Government Liaison So Your Company Stays Compliant.',
        tags: ['Document Clearing', 'Government Liaison', 'Compliance Follow-up'],
        tagsAr: ['تخليص المستندات', 'التنسيق الحكومي', 'متابعة الامتثال'],
      },
    ],
    whatToBring:
      'Passport Copies Of All Shareholders, The Proposed Trade Name And Business Activities, And Any Existing Licence If Renewing Or Amending.',
    whatToBringAr:
      'صور جوازات سفر جميع الشركاء، والاسم التجاري المقترح والأنشطة، والرخصة الحالية في حال التجديد أو التعديل.',
  },
  {
    n: '02',
    slug: 'visa-immigration',
    icon: 'shield',
    title: 'Visa & Immigration',
    titleAr: 'التأشيرات والهجرة',
    keyword: 'Visa Typing & Immigration Services Ajman',
    blurb: 'Family & Employment Visas, ICP And Amer.',
    photo: '/photos/service-visa-immigration.jpg',
    photoAlt: 'A Family Reviewing Their Residency Visa Paperwork With A Safari Typing Services Advisor',
    intro:
      'Residency And Immigration Handled End To End Through The Federal ICP System And Amer — For Families And Companies Across Ajman And The Northern Emirates.',
    introAr:
      'إنجاز معاملات الإقامة والهجرة من البداية للنهاية عبر نظام الهوية والجنسية الاتحادي (ICP) و«أمر» — للعائلات والشركات في عجمان والإمارات الشمالية.',
    subservices: [
      {
        id: 'family-visa',
        title: 'Family Visa',
        titleAr: 'تأشيرة عائلية',
        desc: 'Sponsor Your Spouse, Children Or Parents — Entry Permit, Status Change, Medical, Emirates ID And Stamping, Plus Renewals And Cancellation.',
        tags: ['Entry Permit', 'Status Change', 'Renewal', 'Cancellation'],
        tagsAr: ['تصريح دخول', 'تغيير الوضع', 'تجديد', 'إلغاء'],
      },
      {
        id: 'company-visa',
        title: 'Company / Employment Visa',
        titleAr: 'تأشيرة عمل / شركة',
        desc: 'Employee Residence Visas From Entry Permit To Stamping, Including Employee Insurance And Cancellation.',
        tags: ['Employee Visa', 'Employee Insurance', 'Entry Permit', 'Cancellation'],
        tagsAr: ['تأشيرة موظف', 'تأمين الموظف', 'تصريح دخول', 'إلغاء'],
      },
      {
        id: 'golden-visa',
        title: 'Golden Visa Assistance',
        titleAr: 'المساعدة في الإقامة الذهبية',
        desc: 'Eligibility Check And Full Application Support For The UAE 5- And 10-Year Golden Visa.',
        tags: ['Golden Visa', 'Eligibility', '5 & 10 Year'],
        tagsAr: ['الإقامة الذهبية', 'الأهلية', '5 و10 سنوات'],
      },
      {
        id: 'amer-services',
        title: 'Amer Services',
        titleAr: 'خدمات أمر',
        desc: 'Amer Immigration Transactions Where Applicable To Your Case.',
        tags: ['Amer Typing', 'Immigration Status'],
        tagsAr: ['طباعة أمر', 'حالة الهجرة'],
      },
      {
        id: 'icp-echannel',
        title: 'ICP e-Channel Submissions',
        titleAr: 'تقديم عبر القناة الإلكترونية (ICP)',
        desc: 'Establishment And Individual Submissions Through The ICP e-Channel System.',
        tags: ['ICP e-Channel', 'Establishment Card', 'Individual File'],
        tagsAr: ['القناة الإلكترونية ICP', 'بطاقة منشأة', 'ملف فردي'],
      },
      {
        id: 'overstay-fines',
        title: 'Overstay Fine Settlement',
        titleAr: 'تسوية غرامات تجاوز الإقامة',
        desc: 'Calculation And Settlement Of Overstay And Immigration Fines, With Guidance On Regularising Status.',
        tags: ['Fine Calculation', 'Fine Payment', 'Status Regularisation'],
        tagsAr: ['احتساب الغرامة', 'دفع الغرامة', 'تصحيح الوضع'],
      },
    ],
    whatToBring:
      'Sponsor’s Passport, Visa And Emirates ID, The Applicant’s Passport And Photo, And Any Existing Visa Or Entry Permit For Renewals And Cancellations.',
    whatToBringAr:
      'جواز سفر الكفيل وتأشيرته وهويته الإماراتية، وجواز سفر مقدّم الطلب وصورته، والتأشيرة الحالية عند التجديد أو الإلغاء.',
  },
  {
    n: '03',
    slug: 'emirates-id',
    icon: 'idcard',
    title: 'Emirates ID',
    titleAr: 'الهوية الإماراتية',
    keyword: 'Emirates ID Renewal Ajman',
    blurb: 'New, Renewal, Replacement & Data Fixes.',
    photo: '/photos/service-emirates-id.jpg',
    photoAlt: 'A Customer Holding His New Emirates ID At The Counter',
    intro:
      'Every Emirates ID Transaction Through The ICP System — New Applications, Renewals, Replacements And Quick Data Fixes — Typed Correctly The First Time.',
    introAr:
      'جميع معاملات الهوية الإماراتية عبر نظام ICP — طلبات جديدة وتجديد واستبدال وتصحيح بيانات سريع — مطبوعة بدقة من أول مرة.',
    subservices: [
      {
        id: 'new-id',
        title: 'New Emirates ID',
        titleAr: 'هوية إماراتية جديدة',
        desc: 'First-time Emirates ID Applications Typed And Submitted Alongside Your Visa Process.',
        tags: ['New Application', 'ICP Submission'],
        tagsAr: ['طلب جديد', 'تقديم ICP'],
      },
      {
        id: 'id-renewal',
        title: 'Renewal',
        titleAr: 'تجديد الهوية',
        desc: 'Emirates ID Renewals Before Or After Expiry, With Fine Guidance Where Needed.',
        tags: ['ID Renewal', 'Expiry Check'],
        tagsAr: ['تجديد الهوية', 'فحص الانتهاء'],
      },
      {
        id: 'id-replacement',
        title: 'Replacement (Lost / Damaged)',
        titleAr: 'استبدال (فقدان / تلف)',
        desc: 'Fast Replacement Of A Lost Or Damaged Emirates ID, Including The Report And Reissue.',
        tags: ['Lost ID', 'Damaged ID', 'Reissue'],
        tagsAr: ['هوية مفقودة', 'هوية تالفة', 'إعادة إصدار'],
      },
      {
        id: 'mobile-update',
        title: 'Mobile-number Update',
        titleAr: 'تحديث رقم الهاتف',
        desc: 'Update The Mobile Number Linked To Your Emirates ID Record.',
        tags: ['Number Update'],
        tagsAr: ['تحديث الرقم'],
      },
      {
        id: 'data-correction',
        title: 'Data Correction',
        titleAr: 'تصحيح البيانات',
        desc: 'Correct Name, Date-of-birth Or Other Details On Your Emirates ID Record.',
        tags: ['Name Correction', 'Data Update'],
        tagsAr: ['تصحيح الاسم', 'تحديث البيانات'],
      },
    ],
    whatToBring:
      'Passport, Current Or Expired Emirates ID, And Your Residence Visa. For Replacements, Bring Any Lost/police Report You Already Have.',
    whatToBringAr:
      'جواز السفر، والهوية الإماراتية الحالية أو المنتهية، وتأشيرة الإقامة. وعند الاستبدال أحضر بلاغ الفقدان إن وُجد.',
  },
  {
    n: '04',
    slug: 'tasheel-mohre',
    icon: 'briefcase',
    title: 'Tasheel & MOHRE',
    titleAr: 'تسهيل ووزارة الموارد البشرية والتوطين',
    keyword: 'Tasheel & MOHRE Labour Services Ajman',
    blurb: 'Work Permits, Labour Contracts & WPS.',
    photo: '/photos/service-tasheel-mohre.jpg',
    photoAlt: 'A Consultant Reviewing A Labour Contract And Offer Letter With A Worker',
    intro:
      'All Ministry Of Human Resources & Emiratisation (MOHRE) Work Through The Official Tasheel System — From A New Hire’s First Permit To Final Settlement.',
    introAr:
      'كل معاملات وزارة الموارد البشرية والتوطين عبر نظام «تسهيل» الرسمي — من أول تصريح عمل لموظف جديد حتى التسوية النهائية.',
    subservices: [
      {
        id: 'tasheel-typing',
        title: 'Tasheel Services',
        titleAr: 'خدمات تسهيل',
        desc: 'Tasheel Typing And Submission For The Full Range Of MOHRE Labour Transactions.',
        tags: ['Tasheel Typing', 'MOHRE Submission'],
        tagsAr: ['طباعة تسهيل', 'تقديم للوزارة'],
      },
      {
        id: 'labour-contracts',
        title: 'Labour Contracts',
        titleAr: 'عقود العمل',
        desc: 'New Labour Contracts, Renewals And Amendments Registered With MOHRE.',
        tags: ['New Contract', 'Contract Renewal', 'Amendment'],
        tagsAr: ['عقد جديد', 'تجديد العقد', 'تعديل'],
      },
      {
        id: 'offer-letters',
        title: 'Offer Letters',
        titleAr: 'عروض العمل',
        desc: 'MOHRE Offer Letters Prepared And Submitted For New Employees.',
        tags: ['Offer Letter', 'Employee Onboarding'],
        tagsAr: ['عرض عمل', 'استقدام الموظف'],
      },
      {
        id: 'work-permits',
        title: 'Work Permits & Quota',
        titleAr: 'تصاريح العمل والحصص',
        desc: 'Work Permits, Labour Quota Approvals And Establishment Requirements.',
        tags: ['Work Permit', 'Quota Approval', 'Establishment Card'],
        tagsAr: ['تصريح عمل', 'اعتماد الحصة', 'بطاقة منشأة'],
      },
      {
        id: 'wps',
        title: 'Wage Protection System (WPS)',
        titleAr: 'نظام حماية الأجور (WPS)',
        desc: 'WPS Registration And Salary Processing To Keep Your Establishment Compliant.',
        tags: ['WPS Registration', 'Salary Processing'],
        tagsAr: ['تسجيل حماية الأجور', 'صرف الرواتب'],
      },
      {
        id: 'absconding',
        title: 'Absconding Cases',
        titleAr: 'بلاغات التغيّب',
        desc: 'Filing And Removal Of Absconding Reports With The Correct Documentation.',
        tags: ['Absconding Report', 'Report Removal'],
        tagsAr: ['بلاغ تغيّب', 'إلغاء البلاغ'],
      },
      {
        id: 'labour-renewals',
        title: 'Renewals & Cancellations',
        titleAr: 'التجديد والإلغاء',
        desc: 'Work-permit And Labour-card Renewals And Cancellations With Final Settlement.',
        tags: ['Permit Renewal', 'Cancellation', 'Final Settlement'],
        tagsAr: ['تجديد التصريح', 'إلغاء', 'تسوية نهائية'],
      },
    ],
    whatToBring:
      'Establishment Labour Card And Trade Licence, The Employee’s Passport, Photo And Visa Details, And Any Existing Contract For Renewals.',
    whatToBringAr:
      'بطاقة منشأة العمل والرخصة التجارية، وجواز سفر الموظف وصورته وبيانات تأشيرته، والعقد الحالي عند التجديد.',
  },
  {
    n: '05',
    slug: 'medical-services',
    icon: 'health',
    title: 'Medical Services',
    titleAr: 'الخدمات الطبية',
    keyword: 'Medical Fitness Test Typing Ajman',
    blurb: 'Fitness Tests, Health Cards & Family Medicals.',
    intro:
      'Medical Fitness Applications Typed And Booked So You Arrive At The Centre Ready — For Visas, Family Files And Marriage.',
    introAr:
      'طلبات اللياقة الطبية مطبوعة ومحجوزة لتصل إلى المركز جاهزاً — للتأشيرات وملفات العائلة والزواج.',
    subservices: [
      {
        id: 'medical-fitness',
        title: 'Medical Fitness Test',
        titleAr: 'فحص اللياقة الطبية',
        desc: 'Medical Fitness Application And Appointment Booking For Residence-visa Processing.',
        tags: ['Visa Medical', 'Appointment Booking'],
        tagsAr: ['الفحص الطبي للتأشيرة', 'حجز الموعد'],
      },
      {
        id: 'family-medical',
        title: 'Family Medical',
        titleAr: 'الفحص الطبي للعائلة',
        desc: 'Medical Fitness Applications For Family-sponsorship Members.',
        tags: ['Family Medical', 'Dependants'],
        tagsAr: ['فحص العائلة', 'المعالون'],
      },
      {
        id: 'health-card',
        title: 'Health Card',
        titleAr: 'البطاقة الصحية',
        desc: 'Health-card Applications And Renewals Where Required.',
        tags: ['Health Card', 'Renewal'],
        tagsAr: ['بطاقة صحية', 'تجديد'],
      },
      {
        id: 'marriage-medical',
        title: 'Pre-marriage Medical',
        titleAr: 'فحص ما قبل الزواج',
        desc: 'Pre-marriage Medical Screening Applications For Couples.',
        tags: ['Pre-marriage Screening'],
        tagsAr: ['فحص ما قبل الزواج'],
      },
    ],
    whatToBring:
      'Passport Copy, Photo, Visa Or Entry-permit Details, And The Sponsor’s Details For Family Applications.',
    whatToBringAr:
      'صورة جواز السفر وصورة شخصية وبيانات التأشيرة أو تصريح الدخول، وبيانات الكفيل لطلبات العائلة.',
  },
  {
    n: '06',
    slug: 'documentation-attestation',
    icon: 'stamp',
    title: 'Documentation & Attestation',
    titleAr: 'توثيق وتصديق المستندات',
    keyword: 'Certificate & MOFA Attestation Ajman',
    blurb: 'MOFA, Apostille & Embassy Attestation.',
    photo: '/photos/service-documentation-attestation.jpg',
    photoAlt: 'A Consultant Stamping And Attesting A Customer\'s Document',
    intro:
      'Certificates And Legal Papers Attested And Ready To Use In The UAE — MOFA, Apostille, Embassy And The Full Chain In Between.',
    introAr:
      'تصديق الشهادات والأوراق القانونية لتكون جاهزة للاستخدام في الإمارات — تصديق وزارة الخارجية والأبوستيل والسفارات وكل خطوة بينهما.',
    subservices: [
      {
        id: 'certificate-attestation',
        title: 'Certificate Attestation',
        titleAr: 'تصديق الشهادات',
        desc: 'End-to-end Attestation Of Personal, Educational And Commercial Certificates.',
        tags: ['Personal', 'Commercial', 'Full Chain'],
        tagsAr: ['شخصية', 'تجارية', 'السلسلة الكاملة'],
      },
      {
        id: 'mofa-attestation',
        title: 'MOFA Attestation',
        titleAr: 'تصديق وزارة الخارجية',
        desc: 'Ministry Of Foreign Affairs Attestation Of Documents For Use Inside The UAE.',
        tags: ['MOFA', 'UAE Use'],
        tagsAr: ['وزارة الخارجية', 'الاستخدام داخل الإمارات'],
      },
      {
        id: 'apostille',
        title: 'Apostille',
        titleAr: 'الأبوستيل',
        desc: 'Apostille Processing For Documents Used In Hague-convention Countries.',
        tags: ['Apostille', 'Overseas Use'],
        tagsAr: ['أبوستيل', 'الاستخدام الخارجي'],
      },
      {
        id: 'educational-certificates',
        title: 'Educational Certificates',
        titleAr: 'الشهادات الدراسية',
        desc: 'Attestation Of Degrees, Diplomas And School Certificates For Visas And Jobs.',
        tags: ['Degree', 'Diploma', 'School Certificate'],
        tagsAr: ['شهادة جامعية', 'دبلوم', 'شهادة مدرسية'],
      },
      {
        id: 'legal-documents',
        title: 'Legal Documents',
        titleAr: 'المستندات القانونية',
        desc: 'Attestation Of Contracts, Affidavits And Other Legal Documents.',
        tags: ['Contracts', 'Affidavits'],
        tagsAr: ['عقود', 'إقرارات'],
      },
      {
        id: 'embassy-services',
        title: 'Embassy Services',
        titleAr: 'خدمات السفارات',
        desc: 'Embassy And Consulate Attestation Steps Coordinated On Your Behalf.',
        tags: ['Embassy', 'Consulate'],
        tagsAr: ['سفارة', 'قنصلية'],
      },
    ],
    whatToBring:
      'The Original Certificate Or Document Plus A Clear Copy, Your Passport Copy, And Details Of The Country Where The Document Will Be Used.',
    whatToBringAr:
      'المستند الأصلي مع نسخة واضحة، وصورة جواز سفرك، وبيان الدولة التي سيُستخدم فيها المستند.',
  },
  {
    n: '07',
    slug: 'translation-court',
    icon: 'scale',
    title: 'Translation & Court Works',
    titleAr: 'الترجمة وأعمال المحاكم',
    keyword: 'Legal Translation Services Ajman',
    blurb: 'Legal Translation, POA & Court Documents.',
    photo: '/photos/service-translation-court.jpg',
    photoAlt: 'A Legal Translator Preparing Certified Court And Translation Documents',
    intro:
      'Legally Recognised Translation And Court Documentation — Accurate, Certified And Accepted By UAE Authorities.',
    introAr: 'ترجمة معتمدة ومستندات محاكم دقيقة ومقبولة لدى الجهات الرسمية في الإمارات.',
    subservices: [
      {
        id: 'legal-translation',
        title: 'Legal Translation',
        titleAr: 'الترجمة القانونية',
        desc: 'Certified Legal Translation Between Arabic And English For Official Use.',
        tags: ['Arabic–English', 'Certified'],
        tagsAr: ['عربي–إنجليزي', 'معتمدة'],
      },
      {
        id: 'medical-translation',
        title: 'Medical Translation',
        titleAr: 'الترجمة الطبية',
        desc: 'Translation Of Medical Reports And Records For Treatment, Insurance And Visas.',
        tags: ['Medical Reports', 'Records'],
        tagsAr: ['تقارير طبية', 'سجلات'],
      },
      {
        id: 'power-of-attorney',
        title: 'Power Of Attorney',
        titleAr: 'الوكالة القانونية',
        desc: 'Drafting And Processing Of Power-of-attorney Documents For Notarisation.',
        tags: ['POA Drafting', 'Notary'],
        tagsAr: ['صياغة الوكالة', 'التوثيق'],
      },
      {
        id: 'court-documentation',
        title: 'Court Documentation',
        titleAr: 'مستندات المحاكم',
        desc: 'Preparation And Typing Of Court Submissions And Case Documents.',
        tags: ['Case Documents', 'Court Typing'],
        tagsAr: ['مستندات القضية', 'طباعة للمحكمة'],
      },
    ],
    whatToBring:
      'The Original Document To Be Translated, Your Passport Or Emirates ID, And Any Reference Spelling Of Names As They Appear On Official IDs.',
    whatToBringAr:
      'المستند الأصلي المراد ترجمته، وهويتك الإماراتية أو جواز سفرك، وطريقة كتابة الأسماء كما في الوثائق الرسمية.',
  },
  {
    n: '08',
    slug: 'vehicle-driving-licence',
    icon: 'car',
    title: 'Vehicle & Driving Licence',
    titleAr: 'المركبات ورخص القيادة',
    keyword: 'Driving Licence & Vehicle Services Ajman',
    blurb: 'Licences, EVG, Fines & Registration.',
    photo: '/photos/service-vehicle-driving-licence.jpg',
    photoAlt: 'A Driver Holding Her UAE Driving Licence Outside The Safari Typing Services Office',
    intro:
      'Driving-licence And Vehicle Paperwork For Ajman And Beyond — Transport Department, EVG And Traffic Transactions In One Visit.',
    introAr:
      'معاملات رخص القيادة والمركبات لعجمان وغيرها — دائرة النقل وبوابة المركبات (EVG) ومعاملات المرور في زيارة واحدة.',
    subservices: [
      {
        id: 'driving-licence',
        title: 'Driving Licence Services',
        titleAr: 'خدمات رخصة القيادة',
        desc: 'Driving-licence Applications, Renewals And File Openings, Plus International Permits.',
        tags: ['New Licence', 'Renewal', 'International Permit'],
        tagsAr: ['رخصة جديدة', 'تجديد', 'رخصة دولية'],
      },
      {
        id: 'ajman-transport',
        title: 'Ajman Transport / RTA Transactions',
        titleAr: 'دائرة النقل / معاملات المرور',
        desc: 'Transport-department Transactions For Ajman And Other Emirates.',
        tags: ['Transport Dept', 'Inter-emirate'],
        tagsAr: ['دائرة النقل', 'بين الإمارات'],
      },
      {
        id: 'evg-services',
        title: 'EVG (Emirates Vehicle Gate) Services',
        titleAr: 'خدمات بوابة المركبات (EVG)',
        desc: 'EVG Transactions Including Registration Renewal, Transfer And Insurance Updates.',
        tags: ['EVG', 'Registration Renewal', 'Transfer'],
        tagsAr: ['EVG', 'تجديد التسجيل', 'نقل الملكية'],
      },
      {
        id: 'traffic-fines',
        title: 'Traffic Fine Payment',
        titleAr: 'دفع المخالفات المرورية',
        desc: 'Check And Settle Traffic Fines Across The Emirates.',
        tags: ['Fine Enquiry', 'Fine Payment'],
        tagsAr: ['استعلام المخالفات', 'دفع المخالفات'],
      },
      {
        id: 'vehicle-registration',
        title: 'Vehicle Registration',
        titleAr: 'تسجيل المركبات',
        desc: 'New Vehicle Registration, Renewal And Ownership-transfer Support.',
        tags: ['New Registration', 'Renewal', 'Ownership Transfer'],
        tagsAr: ['تسجيل جديد', 'تجديد', 'نقل ملكية'],
      },
    ],
    whatToBring:
      'Emirates ID, Existing Driving Licence Or Learner File, Vehicle Registration Card (Mulkiya) And Valid Insurance For Vehicle Transactions.',
    whatToBringAr:
      'الهوية الإماراتية، ورخصة القيادة الحالية أو ملف المتعلّم، وملكية المركبة (الملكية) وتأمين ساري لمعاملات المركبات.',
  },
  {
    n: '09',
    slug: 'passport-services',
    icon: 'passport',
    title: 'Passport Services',
    titleAr: 'خدمات جوازات السفر',
    keyword: 'Passport Services Ajman',
    blurb: 'New, Renewal, Amendments & Lost Passports.',
    photo: '/photos/service-passport-services.jpg',
    photoAlt: 'A Couple Collecting Their Passports And Boarding Passes',
    intro:
      'Passport And Home-country Document Applications Prepared Accurately And Submitted On Your Behalf.',
    introAr: 'طلبات جوازات السفر ووثائق بلدك الأم تُجهّز بدقة وتُقدَّم نيابةً عنك.',
    subservices: [
      {
        id: 'new-passport',
        title: 'New Passport',
        titleAr: 'جواز سفر جديد',
        desc: 'First-time And Child Passport Applications For Your Home Country.',
        tags: ['New Passport', 'Child Passport'],
        tagsAr: ['جواز جديد', 'جواز للأطفال'],
      },
      {
        id: 'passport-renewal',
        title: 'Renewal',
        titleAr: 'تجديد الجواز',
        desc: 'Passport Renewals Before Or After Expiry, With Photo And Form Support.',
        tags: ['Renewal', 'Re-issue'],
        tagsAr: ['تجديد', 'إعادة إصدار'],
      },
      {
        id: 'passport-amendments',
        title: 'Amendments',
        titleAr: 'تعديلات الجواز',
        desc: 'Corrections And Amendments To Passport Details.',
        tags: ['Name Change', 'Detail Correction'],
        tagsAr: ['تغيير الاسم', 'تصحيح البيانات'],
      },
      {
        id: 'lost-passport',
        title: 'Lost Passport',
        titleAr: 'الجواز المفقود',
        desc: 'Lost-passport Reporting And Emergency Travel-document Support.',
        tags: ['Lost Report', 'Emergency Document'],
        tagsAr: ['بلاغ فقدان', 'وثيقة سفر طارئة'],
      },
      {
        id: 'national-id',
        title: 'Home-country National ID Services',
        titleAr: 'خدمات الهوية الوطنية للبلد الأم',
        desc: 'National ID Card And Home-country Document Applications.',
        tags: ['National ID', 'Home-country Docs'],
        tagsAr: ['الهوية الوطنية', 'وثائق البلد الأم'],
      },
    ],
    whatToBring:
      'Your Current Or Expired Passport, Emirates ID And Visa, Recent Photographs, And Any Supporting Documents Your Embassy Requires.',
    whatToBringAr:
      'جواز سفرك الحالي أو المنتهي، والهوية الإماراتية والتأشيرة، وصور حديثة، وأي مستندات تطلبها سفارتك.',
  },
  {
    n: '10',
    slug: 'online-registrations-utilities',
    icon: 'bolt',
    title: 'Online Registrations & Utilities',
    titleAr: 'التسجيلات الإلكترونية والمرافق',
    keyword: 'FEWA & Utility Registration Ajman',
    blurb: 'FEWA, Ajman Sewerage & Tenancy Registration.',
    intro:
      'Get Connected And Registered The Ajman Way — FEWA, Ajman Sewerage, Ajman Municipality Tenancy And Civil Defence, Without The Queues.',
    introAr:
      'وصِّل وسجّل بطريقة عجمان — الكهرباء والماء الاتحادية (FEWA) وصرف صحي عجمان وتسجيل الإيجار في بلدية عجمان والدفاع المدني، بلا طوابير.',
    subservices: [
      {
        id: 'fewa-connection',
        title: 'FEWA Connection',
        titleAr: 'توصيل الكهرباء والماء (FEWA)',
        desc: 'FEWA (Federal Electricity & Water Authority) Connection, Transfer And Clearance For Your Home Or Premises.',
        tags: ['New Connection', 'Transfer', 'Final Clearance'],
        tagsAr: ['توصيل جديد', 'نقل', 'إخلاء طرف'],
      },
      {
        id: 'ajman-sewerage',
        title: 'Ajman Sewerage Registration',
        titleAr: 'تسجيل صرف صحي عجمان',
        desc: 'Ajman Sewerage Account Registration And Updates.',
        tags: ['Sewerage Account', 'Registration'],
        tagsAr: ['حساب الصرف الصحي', 'تسجيل'],
      },
      {
        id: 'tenancy-registration',
        title: 'Tenancy Contract Registration (Ajman Municipality)',
        titleAr: 'تسجيل عقد الإيجار (بلدية عجمان)',
        desc: 'Tenancy-contract Registration Through The Ajman Municipality System.',
        tags: ['Tenancy Registration', 'Ajman Municipality'],
        tagsAr: ['تسجيل الإيجار', 'بلدية عجمان'],
      },
      {
        id: 'civil-defence',
        title: 'Civil Defence',
        titleAr: 'الدفاع المدني',
        desc: 'Civil Defence Registrations And Approvals For Homes And Businesses.',
        tags: ['Civil Defence', 'Approvals'],
        tagsAr: ['الدفاع المدني', 'الموافقات'],
      },
      {
        id: 'ministry-services',
        title: 'Ministry Services',
        titleAr: 'خدمات الوزارات',
        desc: 'Online Submissions And Registrations Across UAE Ministry Portals.',
        tags: ['Online Submission', 'Ministry Portals'],
        tagsAr: ['تقديم إلكتروني', 'بوابات الوزارات'],
      },
    ],
    whatToBring:
      'Emirates ID, Tenancy Contract Or Title Deed, A Recent FEWA Bill Or Premises Number, And The Trade Licence For Business Connections.',
    whatToBringAr:
      'الهوية الإماراتية، وعقد الإيجار أو سند الملكية، وفاتورة FEWA حديثة أو رقم العقار، والرخصة التجارية لتوصيلات الأعمال.',
  },
  {
    n: '11',
    slug: 'insurance',
    icon: 'umbrella',
    title: 'Insurance',
    titleAr: 'التأمين',
    keyword: 'Health & Vehicle Insurance Ajman',
    blurb: 'Health, Motor & Home Cover.',
    photo: '/photos/service-insurance.jpg',
    photoAlt: 'Advisors Reviewing Insurance Documents With A Customer On A Laptop',
    intro:
      'Straightforward Cover Arranged At The Counter — Health, Motor And Home Insurance From Trusted UAE Providers.',
    introAr: 'تأمين سهل يُرتَّب عند المكتب — صحي ومركبات ومنزل من مزوّدين موثوقين في الإمارات.',
    subservices: [
      {
        id: 'health-insurance',
        title: 'Health Insurance',
        titleAr: 'التأمين الصحي',
        desc: 'Individual And Family Health-insurance Plans That Meet UAE Visa Requirements.',
        tags: ['Individual', 'Family', 'Visa-compliant'],
        tagsAr: ['فردي', 'عائلي', 'مطابق للتأشيرة'],
      },
      {
        id: 'vehicle-insurance',
        title: 'Vehicle Insurance',
        titleAr: 'تأمين المركبات',
        desc: 'Comprehensive And Third-party Motor Insurance, Including Renewal.',
        tags: ['Comprehensive', 'Third-party', 'Renewal'],
        tagsAr: ['شامل', 'ضد الغير', 'تجديد'],
      },
      {
        id: 'home-insurance',
        title: 'Home Insurance',
        titleAr: 'تأمين المنزل',
        desc: 'Home And Contents Insurance For Tenants And Owners.',
        tags: ['Contents', 'Property'],
        tagsAr: ['المحتويات', 'الممتلكات'],
      },
    ],
    whatToBring:
      'Emirates ID, Passport And Visa For Health Cover; Vehicle Registration Card (Mulkiya) And Driving Licence For Motor Cover.',
    whatToBringAr:
      'الهوية الإماراتية وجواز السفر والتأشيرة للتأمين الصحي؛ وملكية المركبة ورخصة القيادة لتأمين المركبات.',
  },
  {
    n: '12',
    slug: 'travel-services',
    icon: 'plane',
    title: 'Travel Services',
    titleAr: 'خدمات السفر',
    keyword: 'Visit Visa & Travel Services Ajman',
    blurb: 'Visit Visas, Tickets & Desert Safari.',
    photo: '/photos/service-travel-services.jpg',
    photoAlt: 'A Safari Typing Services Agent Handing Over A Passport And Boarding Pass At The Travel Counter',
    intro: 'Visit Visas, Tickets And Getaways — Plan The Trip And The Paperwork In One Place.',
    introAr: 'تأشيرات زيارة وتذاكر ورحلات — خطّط للرحلة وأوراقها في مكان واحد.',
    subservices: [
      {
        id: 'visit-visa',
        title: 'Visit Visa (30 / 60 / 90 Days)',
        titleAr: 'تأشيرة زيارة (30 / 60 / 90 يوماً)',
        desc: 'Tourist And Visit-visa Applications For Family And Friends, With Extensions.',
        tags: ['30 Days', '60 Days', '90 Days', 'Extension'],
        tagsAr: ['30 يوماً', '60 يوماً', '90 يوماً', 'تمديد'],
      },
      {
        id: 'air-tickets',
        title: 'Air-ticket Booking',
        titleAr: 'حجز تذاكر الطيران',
        desc: 'Flight Bookings And Reissues At Competitive Fares.',
        tags: ['Flights', 'Reissue'],
        tagsAr: ['رحلات', 'إعادة إصدار'],
      },
      {
        id: 'tour-packages',
        title: 'Tour Packages',
        titleAr: 'باقات سياحية',
        desc: 'Holiday And Tour Packages For Popular Destinations, With Hotel Reservations Arranged.',
        tags: ['Holiday Packages', 'Hotel Booking', 'Destinations'],
        tagsAr: ['باقات عطلات', 'حجز الفنادق', 'وجهات'],
      },
      {
        id: 'desert-safari',
        title: 'Desert Safari',
        titleAr: 'رحلات السفاري الصحراوية',
        desc: 'Desert-safari And Local Experience Bookings.',
        tags: ['Desert Safari', 'Experiences'],
        tagsAr: ['سفاري صحراوي', 'تجارب'],
      },
      {
        id: 'travel-insurance',
        title: 'Travel Insurance',
        titleAr: 'تأمين السفر',
        desc: 'Travel And Schengen-compliant Insurance For Visa Applications And Trips Abroad.',
        tags: ['Travel Cover', 'Schengen', 'Trips'],
        tagsAr: ['تأمين السفر', 'شنغن', 'الرحلات'],
      },
    ],
    whatToBring:
      'Passport Copy Of Each Traveller, A Photo For Visit-visa Applicants, And The Sponsor’s Emirates ID And Visa Where Required.',
    whatToBringAr:
      'صورة جواز سفر كل مسافر، وصورة شخصية لطالبي تأشيرة الزيارة، وهوية الكفيل وتأشيرته عند الحاجة.',
  },
  {
    n: '13',
    slug: 'tax-accounting',
    icon: 'calculator',
    title: 'Tax & Accounting',
    titleAr: 'الضرائب والمحاسبة',
    keyword: 'VAT & Corporate Tax Registration Ajman',
    blurb: 'VAT, Corporate Tax, Filing & Bookkeeping.',
    intro:
      'Stay Compliant With The Federal Tax Authority — VAT And Corporate-tax Registration, Return Filing And Day-to-day Bookkeeping, Handled By People Who Do It Every Week.',
    introAr:
      'حافظ على امتثالك لدى الهيئة الاتحادية للضرائب — تسجيل ضريبة القيمة المضافة وضريبة الشركات وتقديم الإقرارات ومسك الدفاتر اليومي، على يد فريق متمرّس.',
    subservices: [
      {
        id: 'vat-registration',
        title: 'VAT Registration',
        titleAr: 'تسجيل ضريبة القيمة المضافة',
        desc: 'VAT Registration With The Federal Tax Authority And Issuance Of Your Tax Registration Number (TRN).',
        tags: ['VAT Registration', 'TRN', 'FTA Portal'],
        tagsAr: ['تسجيل القيمة المضافة', 'الرقم الضريبي', 'بوابة الهيئة'],
      },
      {
        id: 'vat-deregistration',
        title: 'VAT Deregistration',
        titleAr: 'إلغاء تسجيل القيمة المضافة',
        desc: 'De-registration From VAT When Your Business No Longer Meets The Registration Threshold.',
        tags: ['Deregistration', 'Threshold Review'],
        tagsAr: ['إلغاء التسجيل', 'مراجعة الحد'],
      },
      {
        id: 'vat-returns',
        title: 'VAT Return Filing',
        titleAr: 'تقديم الإقرارات الضريبية',
        desc: 'Periodic VAT-return Preparation And Filing — Reconciled And Submitted On Time.',
        tags: ['Return Filing', 'Reconciliation', 'On Time'],
        tagsAr: ['تقديم الإقرار', 'المطابقة', 'في الموعد'],
      },
      {
        id: 'corporate-tax',
        title: 'Corporate Tax Registration',
        titleAr: 'تسجيل ضريبة الشركات',
        desc: 'Corporate-tax Registration With Guidance On The UAE Corporate-tax Rules And Your Obligations.',
        tags: ['Corporate Tax', 'Registration', 'Compliance'],
        tagsAr: ['ضريبة الشركات', 'التسجيل', 'الامتثال'],
      },
      {
        id: 'accounting-bookkeeping',
        title: 'Accounting & Bookkeeping',
        titleAr: 'المحاسبة ومسك الدفاتر',
        desc: 'Monthly Bookkeeping, Ledgers And Financial Statements To Keep Small Businesses Tidy And Audit-ready.',
        tags: ['Bookkeeping', 'Ledgers', 'Statements'],
        tagsAr: ['مسك الدفاتر', 'السجلات', 'القوائم المالية'],
      },
    ],
    whatToBring:
      'Your Trade Licence, The Owner’s Emirates ID And Passport, Any Existing TRN, And Recent Invoices Or Bank Statements For Bookkeeping.',
    whatToBringAr:
      'الرخصة التجارية، وهوية المالك وجواز سفره، والرقم الضريبي إن وُجد، وأحدث الفواتير أو كشوف الحساب لمسك الدفاتر.',
  },
  {
    n: '14',
    slug: 'digital-marketing-it',
    icon: 'monitor',
    title: 'Digital Marketing & IT',
    titleAr: 'التسويق الرقمي وتقنية المعلومات',
    keyword: 'Website Design & Digital Marketing Ajman',
    blurb: 'Websites, E-commerce, Branding & Social Media.',
    intro:
      'Put Your Business Online And Keep It Growing — Websites, Online Stores, Branding And Social Media, Built And Managed From The Same Trusted Desk That Handles Your Paperwork.',
    introAr:
      'انقل أعمالك إلى الإنترنت واجعلها تنمو — مواقع إلكترونية ومتاجر وهوية بصرية وإدارة لوسائل التواصل، تُصمَّم وتُدار من المكتب نفسه الذي يتولى معاملاتك.',
    subservices: [
      {
        id: 'website-design',
        title: 'Website Design & Development',
        titleAr: 'تصميم وتطوير المواقع',
        desc: 'Modern, Mobile-friendly Business Websites — Designed, Built And Launched For You.',
        tags: ['Web Design', 'Development', 'Responsive'],
        tagsAr: ['تصميم المواقع', 'التطوير', 'متجاوب'],
      },
      {
        id: 'ecommerce',
        title: 'E-commerce Development',
        titleAr: 'تطوير المتاجر الإلكترونية',
        desc: 'Online Stores With Product Catalogues, Online Payments And Order Management.',
        tags: ['Online Store', 'Payments', 'Catalogue'],
        tagsAr: ['متجر إلكتروني', 'المدفوعات', 'كتالوج'],
      },
      {
        id: 'social-media',
        title: 'Social Media Management',
        titleAr: 'إدارة وسائل التواصل',
        desc: 'Content, Scheduling And Audience Growth Across Instagram, Facebook And Beyond.',
        tags: ['Content', 'Scheduling', 'Growth'],
        tagsAr: ['المحتوى', 'الجدولة', 'النمو'],
      },
      {
        id: 'branding-logo',
        title: 'Logo Design & Branding',
        titleAr: 'تصميم الشعار والهوية',
        desc: 'Logos, Brand Colours And A Visual Identity That Make Your Business Memorable.',
        tags: ['Logo Design', 'Brand Identity', 'Visuals'],
        tagsAr: ['تصميم الشعار', 'الهوية التجارية', 'التصاميم'],
      },
      {
        id: 'seo',
        title: 'SEO Services',
        titleAr: 'تحسين محركات البحث',
        desc: 'Search-engine Optimisation So Customers In The UAE Find Your Business First.',
        tags: ['SEO', 'Local Search', 'Keywords'],
        tagsAr: ['تحسين محركات البحث', 'البحث المحلي', 'الكلمات المفتاحية'],
      },
      {
        id: 'business-email',
        title: 'Business Email Setup',
        titleAr: 'إعداد البريد الإلكتروني للأعمال',
        desc: 'Professional Business Email On Your Own Domain, Set Up And Ready To Use.',
        tags: ['Business Email', 'Domain', 'Setup'],
        tagsAr: ['بريد الأعمال', 'النطاق', 'الإعداد'],
      },
    ],
    whatToBring:
      'Your Business Name And Logo (If You Have One), Any Existing Website Or Social Accounts, And A Short Description Of What You Offer.',
    whatToBringAr:
      'اسم نشاطك وشعارك (إن وُجد)، وأي موقع أو حسابات تواصل حالية، ووصف موجز لما تقدّمه.',
  },
  {
    n: '15',
    slug: 'everyday-other',
    icon: 'printer',
    title: 'Everyday & Other Services',
    titleAr: 'خدمات يومية وأخرى',
    keyword: 'Printing, PCC & Typing Services Ajman',
    blurb: 'Maid Visas, PCC, Printing & Online Forms.',
    photo: '/photos/service-everyday-other.jpg',
    photoAlt: 'The Safari Typing Services Reception Desk Welcoming A Customer',
    intro:
      'The Day-to-day Errands A Typing Centre Should Just Handle — Printing, Clearances And The Small Things, Done While You Wait.',
    introAr:
      'المهام اليومية التي يجب أن يتولاها مركز الطباعة ببساطة — طباعة وشهادات وأمور صغيرة تُنجز أثناء انتظارك.',
    subservices: [
      {
        id: 'maid-visa',
        title: 'Domestic Worker (Maid) Visa Services',
        titleAr: 'خدمات تأشيرة العمالة المنزلية',
        desc: 'Domestic-worker Visa Processing — Entry Permit, Medical, Emirates ID And Stamping.',
        tags: ['Maid Visa', 'Entry Permit', 'Renewal'],
        tagsAr: ['تأشيرة خادمة', 'تصريح دخول', 'تجديد'],
      },
      {
        id: 'pcc',
        title: 'Police Clearance Certificate (Good Conduct)',
        titleAr: 'شهادة حسن السيرة والسلوك',
        desc: 'Police Clearance / Good Conduct Certificate Applications For UAE And Overseas Use.',
        tags: ['Good Conduct', 'PCC', 'Overseas Use'],
        tagsAr: ['حسن السيرة', 'شهادة عدم محكومية', 'للاستخدام الخارجي'],
      },
      {
        id: 'printing',
        title: 'Printing, Photocopy & Scanning',
        titleAr: 'طباعة ونسخ ومسح ضوئي',
        desc: 'Everyday Printing, Colour Copies, Scanning And Document Handling.',
        tags: ['Printing', 'Photocopy', 'Scanning'],
        tagsAr: ['طباعة', 'نسخ', 'مسح ضوئي'],
      },
      {
        id: 'online-forms',
        title: 'Online Government Form Submission',
        titleAr: 'تقديم النماذج الحكومية إلكترونياً',
        desc: 'Filling And Submitting Government And Service Forms Online On Your Behalf.',
        tags: ['Form Filling', 'Online Submission'],
        tagsAr: ['تعبئة النماذج', 'تقديم إلكتروني'],
      },
      {
        id: 'courier',
        title: 'Courier & Document Delivery',
        titleAr: 'الشحن وتوصيل المستندات',
        desc: 'Local And International Courier For Your Documents And Parcels.',
        tags: ['Courier', 'Document Delivery', 'International'],
        tagsAr: ['شحن', 'توصيل المستندات', 'دولي'],
      },
      {
        id: 'utility-bills',
        title: 'Utility Bill Payments',
        titleAr: 'دفع فواتير الخدمات',
        desc: 'Pay FEWA, Telecom And Other Utility Bills Quickly At The Counter.',
        tags: ['Bill Payment', 'FEWA', 'Telecom'],
        tagsAr: ['دفع الفواتير', 'FEWA', 'الاتصالات'],
      },
    ],
    whatToBring:
      'Your Emirates ID And Passport, Plus Any Specific Documents Or Photos The Application Needs — Message Us First For The Exact Checklist.',
    whatToBringAr:
      'هويتك الإماراتية وجواز سفرك، وأي مستندات أو صور يحتاجها الطلب — راسلنا أولاً لقائمة دقيقة.',
  },
]

// Look up a category by its slug (used by the dynamic /services/:slug route).
export const getServiceBySlug = (slug) => SERVICES.find((s) => s.slug === slug)

// Mega-menu / footer grouping of the 15 categories (by slug).
export const SERVICE_GROUPS = [
  {
    label: 'Government & Visas',
    labelAr: 'الحكومة والتأشيرات',
    slugs: ['visa-immigration', 'emirates-id', 'tasheel-mohre', 'passport-services'],
  },
  {
    label: 'Business & Documents',
    labelAr: 'الأعمال والمستندات',
    slugs: [
      'business-setup-pro',
      'tax-accounting',
      'documentation-attestation',
      'translation-court',
      'digital-marketing-it',
    ],
  },
  {
    label: 'Personal & Everyday',
    labelAr: 'شخصية ويومية',
    slugs: [
      'medical-services',
      'vehicle-driving-licence',
      'online-registrations-utilities',
      'insurance',
      'travel-services',
      'everyday-other',
    ],
  },
]

// ---------------------------------------------------------------------------
// Brand photos (client-supplied, in /public/photos). To update the imagery,
// just drop a replacement file at the same path. All are transparent cut-out
// figures, rendered `object-contain` on a soft blue `.photo-panel` (defined in
// index.css, no border) so the figures show in full and read as an intentional
// graphic. (Don't render them object-cover or they crop heads/bodies.)
// ---------------------------------------------------------------------------
export const PHOTOS = {
  aboutBand: '/photos/team-four.png',
  servicesBand: '/photos/services-visa-team.png',
  homeBand: '/photos/team-duo.png',
  step1: '/photos/step-welcome-tablet.png',
  step2: '/photos/step-documents.png',
  step3: '/photos/step-collect.png',
}

// Home — trust strip. [CONFIRM] every figure before launch — no invented numbers.
export const HOME_STATS = [
  { value: '18+', label: 'Years Of Service' },
  { value: '15,000+', label: 'Applications Handled' }, // owner-confirmed 2026-06-27
  { value: '5', label: 'Languages Spoken' },
  { value: 'Same Day', label: 'On Most Documents' },
]

// Home — "official channels" credentials strip. Defensible (these are the
// systems we submit through), not unqualified "government authorised" claims.
// `box` tunes each logo's size by its shape so they read at the same optical
// weight on the uniform cards: 'tall' (square/portrait) get more height,
// 'ultrawide' (long wordmarks) are capped by width. See Credentials.jsx.
export const CREDENTIALS = [
  { label: 'ICP e-Channel', icon: 'globe', logo: '/logos/icp.png', box: 'ultrawide' },
  { label: 'Emirates Identity Authority', icon: 'shield', logo: '/logos/eida.png', box: 'wide' },
  { label: 'Tasheel · MOHRE', icon: 'doc', logo: '/logos/tasheel.png', box: 'tall' },
  { label: 'Amer Immigration', icon: 'shield', logo: '/logos/amer.png', box: 'tall' },
  { label: 'MOFA Attestation', icon: 'check', logo: '/logos/mofa.png', box: 'ultrawide' },
  { label: 'Ajman Dept. Of Economic Development', icon: 'building', logo: '/logos/ded-ajman.png', box: 'wide', cls: 'max-h-16 max-w-[150px]' },
  { label: 'Ajman Sewerage', icon: 'globe', logo: '/logos/ajman-sewerage.png', box: 'tall' },
  { label: 'Tasdeeq Attestation', icon: 'check', logo: '/logos/tasdeeq.png', box: 'wide' },
  { label: 'Laiq Medical Fitness', icon: 'shield', logo: '/logos/laiq.png', box: 'tall' },
  // Cross-emirate & federal channels — owner confirmed (2026-06-29) the centre
  // handles transactions across these systems, so their marks belong on the strip.
  // (Logos were background-removed, trimmed and resized for uniform optical weight.)
  { label: 'Ministry Of Interior', icon: 'shield', logo: '/logos/moi.png', box: 'tall' },
  { label: 'Ministry Of Education', icon: 'doc', logo: '/logos/moe.png', box: 'ultrawide' },
  { label: 'UAE PASS', icon: 'globe', logo: '/logos/uae-pass.png', box: 'ultrawide' },
  { label: 'Tawjeeh', icon: 'doc', logo: '/logos/tawjeeh.png', box: 'tall' },
  { label: 'Tadbeer', icon: 'doc', logo: '/logos/tadbeer.png', box: 'tall' },
  { label: 'Government Of Abu Dhabi', icon: 'building', logo: '/logos/gov-abu-dhabi.png', box: 'tall' },
  { label: 'TAMM — Abu Dhabi Government Services', icon: 'globe', logo: '/logos/tamm.png', box: 'tall' },
  { label: 'Government Of Ras Al Khaimah', icon: 'building', logo: '/logos/gov-rak.png', box: 'tall' },
  { label: 'Government Of Fujairah', icon: 'building', logo: '/logos/gov-fujairah.png', box: 'tall' },
  { label: 'Dubai Police', icon: 'shield', logo: '/logos/dubai-police.png', box: 'wide' },
  { label: 'Dubai Courts', icon: 'check', logo: '/logos/dubai-courts.png', box: 'ultrawide' },
  { label: 'Dubai Municipality', icon: 'building', logo: '/logos/dubai-municipality.png', box: 'ultrawide' },
  { label: 'Dubai Customs', icon: 'shield', logo: '/logos/dubai-customs.png', box: 'tall' },
  { label: 'Dubai Health Authority', icon: 'shield', logo: '/logos/dha.png', box: 'wide' },
  { label: 'Dubai Land Department', icon: 'building', logo: '/logos/dubai-land-department.png', box: 'tall' },
  { label: 'Roads & Transport Authority (RTA)', icon: 'globe', logo: '/logos/rta.png', box: 'wide' },
  { label: 'The Emirates', icon: 'globe', logo: '/logos/the-emirates.png', box: 'tall' },
]

// Home — section copy. Keep claims accurate; [CONFIRM] anything not yet verified.
export const HOME = {
  hero: {
    eyebrow: 'Nazir Plaza · Ajman',
    subline:
      'Visas, Emirates ID, Attestation, Business Licences And PRO Services — Typed Correctly, Submitted Through The Right Channel And Followed Up Until They’re Done. So You Never Have To Think About The Queue Again.',
    trustLine: 'Serving Ajman’s Residents & Businesses In Five Languages', // [CONFIRM] scale wording
  },
  credentialsLabel: 'We Work Through The Official Government Channels',
  services: {
    eyebrow: 'What We Do',
    title: 'Every Formality, Under One Calm Roof.',
    intro:
      'Fifteen Service Areas — From A First Residence Visa To A Full Trade Licence, VAT And Your Business Website. We Manage The Forms, The Fees And The Follow-ups On Your Behalf.',
    allLabel: 'View All Services',
  },
  why: {
    eyebrow: 'Why Safari',
    title: 'Quiet Competence, Every Single Time.',
    intro: 'The Reasons Residents And Businesses Keep Coming Back To Shop 4.',
  },
  process: {
    eyebrow: 'The Process',
    title: 'Three Unhurried Steps.',
    intro: 'No Appointment, No Jargon. Tell Us What You Need And We Take It From There.',
  },
  languages: {
    eyebrow: 'Spoken Here',
    title: 'We’ll Explain It In Your Language.',
    intro: 'Deal With The Same Friendly Team In Whichever Of These You’re Most Comfortable Speaking.',
  },
  testimonials: {
    eyebrow: 'In Their Words',
    title: 'Trusted Across The Community.',
  },
  faq: {
    eyebrow: 'Good To Know',
    title: 'A Few Things People Ask.',
    allLabel: 'See All FAQs',
  },
}

// Home — three-step process (roman numerals).
export const PROCESS = [
  {
    numeral: 'i.',
    title: 'Tell Us What You Need',
    body: 'Call Or WhatsApp. We Confirm The Documents And Exact Government Fees Up Front.',
  },
  {
    numeral: 'ii.',
    title: 'Share Your Papers',
    body: 'Visit Shop 4 Or Send Documents Digitally. We Type And Submit Everything For You.',
  },
  {
    numeral: 'iii.',
    title: 'Collect & Carry On',
    body: 'We Track The Application And Let You Know The Moment It’s Ready.',
  },
]

// About — stats band + values.
export const ABOUT_STATS = [
  { value: '18+', label: 'Years In Service' },
  { value: '15k+', label: 'Applications' }, // owner-confirmed 2026-06-27
  { value: '15', label: 'Service Areas' },
  { value: '100%', label: 'Confidential' }, // ink, not brand-blue (owner request)
]

export const VALUES = [
  {
    title: 'Accuracy',
    body: 'A Single Typo Can Mean A Rejected Application. We Check Every Detail Before It’s Submitted.',
  },
  {
    title: 'Honesty',
    body: 'Government Fees Plus A Clear Service Charge. No Hidden Costs — You’ll Know Before We Begin.',
  },
  {
    title: 'Presence',
    body: 'Call, WhatsApp Or Walk In. We Keep You Updated At Every Stage, So You’re Never Left Guessing.',
  },
]

// About — "Our journey" roadmap (vertical timeline). Phase-based milestones,
// deliberately undated — keep these qualitative unless the owner confirms real
// years. Figures used (18+ years, 15 service areas, five languages) are the
// owner-confirmed ones already shown elsewhere on the site.
export const ABOUT_JOURNEY = [
  {
    phase: 'The Beginning',
    title: 'A Single Typing Desk',
    body: 'Safari Typing Services Opens At Nazir Plaza, Ajman — A Small Desk Typing Documents For Neighbours And Nearby Businesses.',
  },
  {
    phase: 'Finding Our Feet',
    title: 'More Of The Paperwork',
    body: 'As Word Spreads, We Take On Visa Processing, Emirates ID, And Labour And Immigration Work — Handling Each Family’s File From Start To Finish.',
  },
  {
    phase: 'A Full Service Centre',
    title: 'Everything Under One Roof',
    body: 'Fifteen Service Areas Grow Around That Desk — Business Setup And PRO, Attestation, Tax, Insurance And Travel — All From One Calm Counter.',
  },
  {
    phase: 'Today & Ahead',
    title: 'Trusted Across The UAE',
    body: 'Eighteen Years On, We Serve Thousands Of Residents And Businesses — In Five Languages, In Person Or Online, Wherever You Are In The Emirates.',
  },
]

// About — "Why choose us" checklist.
export const ABOUT_WHY = [
  'Over 18 Years Of Experience',
  'Comprehensive Document Processing',
  'Fast And Reliable Service',
  'Experienced, Professional Team',
  'Support For Individuals And Businesses',
  'UAE-wide Service Coverage',
  'Customer-centric Approach',
]

// Contact — enquiry form service options (mirrors the 15 categories).
export const ENQUIRY_SERVICES = [
  'Business Setup & PRO',
  'Tax & Accounting',
  'Visa & Immigration',
  'Emirates ID',
  'Tasheel & MOHRE Labour',
  'Medical Services',
  'Documentation & Attestation',
  'Translation & Court Works',
  'Vehicle & Driving Licence',
  'Passport Services',
  'Online Registrations & Utilities',
  'Insurance',
  'Travel Services',
  'Website & Digital Marketing',
  'Everyday & Other Services',
  'Something Else',
]

// FAQ — accordion (feeds FAQPage JSON-LD on /faq).
export const FAQS = [
  {
    q: 'What Documents Do I Need To Bring?',
    a: 'It Depends On The Transaction, But Usually Your Passport, Emirates ID And Any Related Certificates. Message Us First And We’ll Send You An Exact Checklist So You Only Make One Trip.',
  },
  {
    q: 'How Long Does A Typical Application Take?',
    a: 'Most Typing And Form Submissions Are Done The Same Day. Visa And Labour Transactions Depend On Government Processing Times, But We Submit Immediately And Keep You Updated Throughout.',
  },
  {
    q: 'How Do Your Charges Work?',
    a: 'You Pay A Clear Service Charge For Our Work, Plus The Official Government Fees, Which We Charge At Cost. The Government Portion Varies By Transaction, So We Always Confirm The Full Amount On WhatsApp Before We Start — There Are No Hidden Costs And No Surprises.',
  },
  {
    q: 'Can I Send Documents Without Visiting The Shop?',
    a: 'Yes. Send Clear Photos Or Scans On WhatsApp And We Can Begin Many Transactions Remotely, Then Arrange Collection Or Delivery Of Any Originals.',
  },
  {
    q: 'Do You Handle Both Individual And Company Work?',
    a: 'We Do. From A Single Emirates ID Renewal To Full Company Formation And Ongoing PRO Support, Residents And Businesses Are Both Welcome.',
  },
  {
    q: 'Do I Need An Appointment?',
    a: 'No Appointment Is Needed — Walk In Any Time During Opening Hours. A Quick Call Or WhatsApp Ahead Just Helps Us Prepare Your Documents So You’re In And Out Faster.',
  },
  {
    q: 'Which Languages Do You Speak?',
    a: 'Our Counter Team Serves You In English, Arabic, Hindi, Malayalam And Urdu, So You Can Explain What You Need In The Language You’re Most Comfortable With.',
  },
  {
    q: 'Is My Personal Information Kept Private?',
    a: 'Yes. We Only Use Your Documents And Details To Complete The Service You Ask For, In Line With The UAE Personal Data Protection Law. We Don’t Sell Or Share Your Information — See Our Privacy Policy For The Full Detail.',
  },
  {
    q: 'Which Areas Do You Serve?',
    a: 'We’re Based At Nazir Plaza, Shop 4 In Ajman, And Handle Transactions For Clients Across Ajman And The Northern Emirates. Many Services — Typing, Attestation, Visa Follow-ups — Can Be Done Remotely Wherever You Are In The UAE.',
  },
  {
    q: 'What Are Your Opening Hours?',
    a: 'We Open In Two Sessions A Day — Mornings And Evenings. Monday To Thursday: 8:00 AM–2:00 PM And 5:00 PM–10:00 PM. Friday: 8:00 AM–12:00 PM And 5:00 PM–10:00 PM. Saturday: 9:00 AM–2:00 PM And 5:00 PM–10:00 PM. We Are Closed On Sundays. Walk-ins Are Welcome, But A Quick Call Ahead Helps Us Prepare.',
  },
]
