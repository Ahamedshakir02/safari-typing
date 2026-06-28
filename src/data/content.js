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
    keyword: 'Business setup & PRO services Ajman',
    blurb: 'Trade licences, company formation & PRO support.',
    photo: '/photos/service-business-setup-pro.jpg',
    photoAlt: 'A Safari Typing Services advisor handing completed paperwork to a client',
    intro:
      'Start, license and run a UAE company from one desk — mainland or free zone — with a dedicated PRO handling every government touchpoint.',
    introAr:
      'ابدأ شركتك ورخّصها وأدِرها من مكان واحد — في البر الرئيسي أو المناطق الحرة — مع مسؤول علاقات عامة يتولى كل تعامل حكومي.',
    subservices: [
      {
        id: 'mainland-formation',
        title: 'Mainland company formation',
        titleAr: 'تأسيس شركة في البر الرئيسي',
        desc: 'Full mainland setup with the Department of Economic Development — name reservation, initial approval, MOA and trade-licence issuance.',
        tags: ['DED registration', 'Name reservation', 'Initial approval', 'MOA drafting'],
        tagsAr: ['التسجيل في دائرة التنمية الاقتصادية', 'حجز الاسم التجاري', 'الموافقة المبدئية', 'عقد التأسيس'],
      },
      {
        id: 'freezone-formation',
        title: 'Free-zone formation',
        titleAr: 'التأسيس في المناطق الحرة',
        desc: 'Company formation in Ajman and UAE free zones — package selection, licensing and visa allocation.',
        tags: ['Free-zone licence', 'Package selection', 'Visa allocation', 'Flexi-desk'],
        tagsAr: ['رخصة منطقة حرة', 'اختيار الباقة', 'تخصيص التأشيرات', 'مكتب مرن'],
      },
      {
        id: 'trade-licence',
        title: 'Trade licence (new / renewal / amendment)',
        titleAr: 'الرخصة التجارية (جديدة / تجديد / تعديل)',
        desc: 'New trade licences plus renewals and amendments — activity changes, partner changes and address updates.',
        tags: ['New licence', 'Licence renewal', 'Activity amendment', 'Partner change'],
        tagsAr: ['رخصة جديدة', 'تجديد الرخصة', 'تعديل النشاط', 'تغيير الشركاء'],
      },
      {
        id: 'local-sponsor',
        title: 'Local sponsor arrangement',
        titleAr: 'ترتيب الكفيل المحلي',
        desc: 'Reliable local service-agent and sponsor arrangements where your activity still requires one.',
        tags: ['Local service agent', 'Sponsor arrangement'],
        tagsAr: ['وكيل خدمات محلي', 'ترتيب الكفالة'],
      },
      {
        id: 'business-consultancy',
        title: 'Business consultancy',
        titleAr: 'الاستشارات التجارية',
        desc: 'Practical guidance on the right structure, jurisdiction and activities before you commit.',
        tags: ['Structure advice', 'Jurisdiction choice', 'Activity selection'],
        tagsAr: ['استشارة الهيكل', 'اختيار الولاية القضائية', 'اختيار النشاط'],
      },
      {
        id: 'pro-services',
        title: 'PRO services & government liaison',
        titleAr: 'خدمات العلاقات العامة والتخليص الحكومي',
        desc: 'Ongoing public-relations-officer support — document clearing and government liaison so your company stays compliant.',
        tags: ['Document clearing', 'Government liaison', 'Compliance follow-up'],
        tagsAr: ['تخليص المستندات', 'التنسيق الحكومي', 'متابعة الامتثال'],
      },
    ],
    whatToBring:
      'Passport copies of all shareholders, the proposed trade name and business activities, and any existing licence if renewing or amending.',
    whatToBringAr:
      'صور جوازات سفر جميع الشركاء، والاسم التجاري المقترح والأنشطة، والرخصة الحالية في حال التجديد أو التعديل.',
  },
  {
    n: '02',
    slug: 'visa-immigration',
    icon: 'shield',
    title: 'Visa & Immigration',
    titleAr: 'التأشيرات والهجرة',
    keyword: 'Visa typing & immigration services Ajman',
    blurb: 'Family & employment visas, ICP and Amer.',
    photo: '/photos/service-visa-immigration.jpg',
    photoAlt: 'A family reviewing their residency visa paperwork with a Safari Typing Services advisor',
    intro:
      'Residency and immigration handled end to end through the federal ICP system and Amer — for families and companies across Ajman and the northern emirates.',
    introAr:
      'إنجاز معاملات الإقامة والهجرة من البداية للنهاية عبر نظام الهوية والجنسية الاتحادي (ICP) و«أمر» — للعائلات والشركات في عجمان والإمارات الشمالية.',
    subservices: [
      {
        id: 'family-visa',
        title: 'Family visa',
        titleAr: 'تأشيرة عائلية',
        desc: 'Sponsor your spouse, children or parents — entry permit, status change, medical, Emirates ID and stamping, plus renewals and cancellation.',
        tags: ['Entry permit', 'Status change', 'Renewal', 'Cancellation'],
        tagsAr: ['تصريح دخول', 'تغيير الوضع', 'تجديد', 'إلغاء'],
      },
      {
        id: 'company-visa',
        title: 'Company / employment visa',
        titleAr: 'تأشيرة عمل / شركة',
        desc: 'Employee residence visas from entry permit to stamping, including employee insurance and cancellation.',
        tags: ['Employee visa', 'Employee insurance', 'Entry permit', 'Cancellation'],
        tagsAr: ['تأشيرة موظف', 'تأمين الموظف', 'تصريح دخول', 'إلغاء'],
      },
      {
        id: 'golden-visa',
        title: 'Golden Visa assistance',
        titleAr: 'المساعدة في الإقامة الذهبية',
        desc: 'Eligibility check and full application support for the UAE 5- and 10-year Golden Visa.',
        tags: ['Golden Visa', 'Eligibility', '5 & 10 year'],
        tagsAr: ['الإقامة الذهبية', 'الأهلية', '5 و10 سنوات'],
      },
      {
        id: 'amer-services',
        title: 'Amer services',
        titleAr: 'خدمات أمر',
        desc: 'Amer immigration transactions where applicable to your case.',
        tags: ['Amer typing', 'Immigration status'],
        tagsAr: ['طباعة أمر', 'حالة الهجرة'],
      },
      {
        id: 'icp-echannel',
        title: 'ICP e-Channel submissions',
        titleAr: 'تقديم عبر القناة الإلكترونية (ICP)',
        desc: 'Establishment and individual submissions through the ICP e-Channel system.',
        tags: ['ICP e-Channel', 'Establishment card', 'Individual file'],
        tagsAr: ['القناة الإلكترونية ICP', 'بطاقة منشأة', 'ملف فردي'],
      },
      {
        id: 'overstay-fines',
        title: 'Overstay fine settlement',
        titleAr: 'تسوية غرامات تجاوز الإقامة',
        desc: 'Calculation and settlement of overstay and immigration fines, with guidance on regularising status.',
        tags: ['Fine calculation', 'Fine payment', 'Status regularisation'],
        tagsAr: ['احتساب الغرامة', 'دفع الغرامة', 'تصحيح الوضع'],
      },
    ],
    whatToBring:
      'Sponsor’s passport, visa and Emirates ID, the applicant’s passport and photo, and any existing visa or entry permit for renewals and cancellations.',
    whatToBringAr:
      'جواز سفر الكفيل وتأشيرته وهويته الإماراتية، وجواز سفر مقدّم الطلب وصورته، والتأشيرة الحالية عند التجديد أو الإلغاء.',
  },
  {
    n: '03',
    slug: 'emirates-id',
    icon: 'idcard',
    title: 'Emirates ID',
    titleAr: 'الهوية الإماراتية',
    keyword: 'Emirates ID renewal Ajman',
    blurb: 'New, renewal, replacement & data fixes.',
    photo: '/photos/service-emirates-id.jpg',
    photoAlt: 'A customer holding his new Emirates ID at the counter',
    intro:
      'Every Emirates ID transaction through the ICP system — new applications, renewals, replacements and quick data fixes — typed correctly the first time.',
    introAr:
      'جميع معاملات الهوية الإماراتية عبر نظام ICP — طلبات جديدة وتجديد واستبدال وتصحيح بيانات سريع — مطبوعة بدقة من أول مرة.',
    subservices: [
      {
        id: 'new-id',
        title: 'New Emirates ID',
        titleAr: 'هوية إماراتية جديدة',
        desc: 'First-time Emirates ID applications typed and submitted alongside your visa process.',
        tags: ['New application', 'ICP submission'],
        tagsAr: ['طلب جديد', 'تقديم ICP'],
      },
      {
        id: 'id-renewal',
        title: 'Renewal',
        titleAr: 'تجديد الهوية',
        desc: 'Emirates ID renewals before or after expiry, with fine guidance where needed.',
        tags: ['ID renewal', 'Expiry check'],
        tagsAr: ['تجديد الهوية', 'فحص الانتهاء'],
      },
      {
        id: 'id-replacement',
        title: 'Replacement (lost / damaged)',
        titleAr: 'استبدال (فقدان / تلف)',
        desc: 'Fast replacement of a lost or damaged Emirates ID, including the report and reissue.',
        tags: ['Lost ID', 'Damaged ID', 'Reissue'],
        tagsAr: ['هوية مفقودة', 'هوية تالفة', 'إعادة إصدار'],
      },
      {
        id: 'mobile-update',
        title: 'Mobile-number update',
        titleAr: 'تحديث رقم الهاتف',
        desc: 'Update the mobile number linked to your Emirates ID record.',
        tags: ['Number update'],
        tagsAr: ['تحديث الرقم'],
      },
      {
        id: 'data-correction',
        title: 'Data correction',
        titleAr: 'تصحيح البيانات',
        desc: 'Correct name, date-of-birth or other details on your Emirates ID record.',
        tags: ['Name correction', 'Data update'],
        tagsAr: ['تصحيح الاسم', 'تحديث البيانات'],
      },
    ],
    whatToBring:
      'Passport, current or expired Emirates ID, and your residence visa. For replacements, bring any lost/police report you already have.',
    whatToBringAr:
      'جواز السفر، والهوية الإماراتية الحالية أو المنتهية، وتأشيرة الإقامة. وعند الاستبدال أحضر بلاغ الفقدان إن وُجد.',
  },
  {
    n: '04',
    slug: 'tasheel-mohre',
    icon: 'briefcase',
    title: 'Tasheel & MOHRE',
    titleAr: 'تسهيل ووزارة الموارد البشرية والتوطين',
    keyword: 'Tasheel & MOHRE labour services Ajman',
    blurb: 'Work permits, labour contracts & WPS.',
    photo: '/photos/service-tasheel-mohre.jpg',
    photoAlt: 'A consultant reviewing a labour contract and offer letter with a worker',
    intro:
      'All Ministry of Human Resources & Emiratisation (MOHRE) work through the official Tasheel system — from a new hire’s first permit to final settlement.',
    introAr:
      'كل معاملات وزارة الموارد البشرية والتوطين عبر نظام «تسهيل» الرسمي — من أول تصريح عمل لموظف جديد حتى التسوية النهائية.',
    subservices: [
      {
        id: 'tasheel-typing',
        title: 'Tasheel services',
        titleAr: 'خدمات تسهيل',
        desc: 'Tasheel typing and submission for the full range of MOHRE labour transactions.',
        tags: ['Tasheel typing', 'MOHRE submission'],
        tagsAr: ['طباعة تسهيل', 'تقديم للوزارة'],
      },
      {
        id: 'labour-contracts',
        title: 'Labour contracts',
        titleAr: 'عقود العمل',
        desc: 'New labour contracts, renewals and amendments registered with MOHRE.',
        tags: ['New contract', 'Contract renewal', 'Amendment'],
        tagsAr: ['عقد جديد', 'تجديد العقد', 'تعديل'],
      },
      {
        id: 'offer-letters',
        title: 'Offer letters',
        titleAr: 'عروض العمل',
        desc: 'MOHRE offer letters prepared and submitted for new employees.',
        tags: ['Offer letter', 'Employee onboarding'],
        tagsAr: ['عرض عمل', 'استقدام الموظف'],
      },
      {
        id: 'work-permits',
        title: 'Work permits & quota',
        titleAr: 'تصاريح العمل والحصص',
        desc: 'Work permits, labour quota approvals and establishment requirements.',
        tags: ['Work permit', 'Quota approval', 'Establishment card'],
        tagsAr: ['تصريح عمل', 'اعتماد الحصة', 'بطاقة منشأة'],
      },
      {
        id: 'wps',
        title: 'Wage Protection System (WPS)',
        titleAr: 'نظام حماية الأجور (WPS)',
        desc: 'WPS registration and salary processing to keep your establishment compliant.',
        tags: ['WPS registration', 'Salary processing'],
        tagsAr: ['تسجيل حماية الأجور', 'صرف الرواتب'],
      },
      {
        id: 'absconding',
        title: 'Absconding cases',
        titleAr: 'بلاغات التغيّب',
        desc: 'Filing and removal of absconding reports with the correct documentation.',
        tags: ['Absconding report', 'Report removal'],
        tagsAr: ['بلاغ تغيّب', 'إلغاء البلاغ'],
      },
      {
        id: 'labour-renewals',
        title: 'Renewals & cancellations',
        titleAr: 'التجديد والإلغاء',
        desc: 'Work-permit and labour-card renewals and cancellations with final settlement.',
        tags: ['Permit renewal', 'Cancellation', 'Final settlement'],
        tagsAr: ['تجديد التصريح', 'إلغاء', 'تسوية نهائية'],
      },
    ],
    whatToBring:
      'Establishment labour card and trade licence, the employee’s passport, photo and visa details, and any existing contract for renewals.',
    whatToBringAr:
      'بطاقة منشأة العمل والرخصة التجارية، وجواز سفر الموظف وصورته وبيانات تأشيرته، والعقد الحالي عند التجديد.',
  },
  {
    n: '05',
    slug: 'medical-services',
    icon: 'health',
    title: 'Medical Services',
    titleAr: 'الخدمات الطبية',
    keyword: 'Medical fitness test typing Ajman',
    blurb: 'Fitness tests, health cards & family medicals.',
    photo: '/photos/service-medical-services.jpg',
    photoAlt: 'A Safari Typing Services doctor reviewing a medical fitness report with a client',
    intro:
      'Medical fitness applications typed and booked so you arrive at the centre ready — for visas, family files and marriage.',
    introAr:
      'طلبات اللياقة الطبية مطبوعة ومحجوزة لتصل إلى المركز جاهزاً — للتأشيرات وملفات العائلة والزواج.',
    subservices: [
      {
        id: 'medical-fitness',
        title: 'Medical fitness test',
        titleAr: 'فحص اللياقة الطبية',
        desc: 'Medical fitness application and appointment booking for residence-visa processing.',
        tags: ['Visa medical', 'Appointment booking'],
        tagsAr: ['الفحص الطبي للتأشيرة', 'حجز الموعد'],
      },
      {
        id: 'family-medical',
        title: 'Family medical',
        titleAr: 'الفحص الطبي للعائلة',
        desc: 'Medical fitness applications for family-sponsorship members.',
        tags: ['Family medical', 'Dependants'],
        tagsAr: ['فحص العائلة', 'المعالون'],
      },
      {
        id: 'health-card',
        title: 'Health card',
        titleAr: 'البطاقة الصحية',
        desc: 'Health-card applications and renewals where required.',
        tags: ['Health card', 'Renewal'],
        tagsAr: ['بطاقة صحية', 'تجديد'],
      },
      {
        id: 'marriage-medical',
        title: 'Pre-marriage medical',
        titleAr: 'فحص ما قبل الزواج',
        desc: 'Pre-marriage medical screening applications for couples.',
        tags: ['Pre-marriage screening'],
        tagsAr: ['فحص ما قبل الزواج'],
      },
    ],
    whatToBring:
      'Passport copy, photo, visa or entry-permit details, and the sponsor’s details for family applications.',
    whatToBringAr:
      'صورة جواز السفر وصورة شخصية وبيانات التأشيرة أو تصريح الدخول، وبيانات الكفيل لطلبات العائلة.',
  },
  {
    n: '06',
    slug: 'documentation-attestation',
    icon: 'stamp',
    title: 'Documentation & Attestation',
    titleAr: 'توثيق وتصديق المستندات',
    keyword: 'Certificate & MOFA attestation Ajman',
    blurb: 'MOFA, apostille & embassy attestation.',
    photo: '/photos/service-documentation-attestation.jpg',
    photoAlt: 'A consultant stamping and attesting a customer\'s document',
    intro:
      'Certificates and legal papers attested and ready to use in the UAE — MOFA, apostille, embassy and the full chain in between.',
    introAr:
      'تصديق الشهادات والأوراق القانونية لتكون جاهزة للاستخدام في الإمارات — تصديق وزارة الخارجية والأبوستيل والسفارات وكل خطوة بينهما.',
    subservices: [
      {
        id: 'certificate-attestation',
        title: 'Certificate attestation',
        titleAr: 'تصديق الشهادات',
        desc: 'End-to-end attestation of personal, educational and commercial certificates.',
        tags: ['Personal', 'Commercial', 'Full chain'],
        tagsAr: ['شخصية', 'تجارية', 'السلسلة الكاملة'],
      },
      {
        id: 'mofa-attestation',
        title: 'MOFA attestation',
        titleAr: 'تصديق وزارة الخارجية',
        desc: 'Ministry of Foreign Affairs attestation of documents for use inside the UAE.',
        tags: ['MOFA', 'UAE use'],
        tagsAr: ['وزارة الخارجية', 'الاستخدام داخل الإمارات'],
      },
      {
        id: 'apostille',
        title: 'Apostille',
        titleAr: 'الأبوستيل',
        desc: 'Apostille processing for documents used in Hague-convention countries.',
        tags: ['Apostille', 'Overseas use'],
        tagsAr: ['أبوستيل', 'الاستخدام الخارجي'],
      },
      {
        id: 'educational-certificates',
        title: 'Educational certificates',
        titleAr: 'الشهادات الدراسية',
        desc: 'Attestation of degrees, diplomas and school certificates for visas and jobs.',
        tags: ['Degree', 'Diploma', 'School certificate'],
        tagsAr: ['شهادة جامعية', 'دبلوم', 'شهادة مدرسية'],
      },
      {
        id: 'legal-documents',
        title: 'Legal documents',
        titleAr: 'المستندات القانونية',
        desc: 'Attestation of contracts, affidavits and other legal documents.',
        tags: ['Contracts', 'Affidavits'],
        tagsAr: ['عقود', 'إقرارات'],
      },
      {
        id: 'embassy-services',
        title: 'Embassy services',
        titleAr: 'خدمات السفارات',
        desc: 'Embassy and consulate attestation steps coordinated on your behalf.',
        tags: ['Embassy', 'Consulate'],
        tagsAr: ['سفارة', 'قنصلية'],
      },
    ],
    whatToBring:
      'The original certificate or document plus a clear copy, your passport copy, and details of the country where the document will be used.',
    whatToBringAr:
      'المستند الأصلي مع نسخة واضحة، وصورة جواز سفرك، وبيان الدولة التي سيُستخدم فيها المستند.',
  },
  {
    n: '07',
    slug: 'translation-court',
    icon: 'scale',
    title: 'Translation & Court Works',
    titleAr: 'الترجمة وأعمال المحاكم',
    keyword: 'Legal translation services Ajman',
    blurb: 'Legal translation, POA & court documents.',
    photo: '/photos/service-translation-court.jpg',
    photoAlt: 'A legal translator preparing certified court and translation documents',
    intro:
      'Legally recognised translation and court documentation — accurate, certified and accepted by UAE authorities.',
    introAr: 'ترجمة معتمدة ومستندات محاكم دقيقة ومقبولة لدى الجهات الرسمية في الإمارات.',
    subservices: [
      {
        id: 'legal-translation',
        title: 'Legal translation',
        titleAr: 'الترجمة القانونية',
        desc: 'Certified legal translation between Arabic and English for official use.',
        tags: ['Arabic–English', 'Certified'],
        tagsAr: ['عربي–إنجليزي', 'معتمدة'],
      },
      {
        id: 'medical-translation',
        title: 'Medical translation',
        titleAr: 'الترجمة الطبية',
        desc: 'Translation of medical reports and records for treatment, insurance and visas.',
        tags: ['Medical reports', 'Records'],
        tagsAr: ['تقارير طبية', 'سجلات'],
      },
      {
        id: 'power-of-attorney',
        title: 'Power of attorney',
        titleAr: 'الوكالة القانونية',
        desc: 'Drafting and processing of power-of-attorney documents for notarisation.',
        tags: ['POA drafting', 'Notary'],
        tagsAr: ['صياغة الوكالة', 'التوثيق'],
      },
      {
        id: 'court-documentation',
        title: 'Court documentation',
        titleAr: 'مستندات المحاكم',
        desc: 'Preparation and typing of court submissions and case documents.',
        tags: ['Case documents', 'Court typing'],
        tagsAr: ['مستندات القضية', 'طباعة للمحكمة'],
      },
    ],
    whatToBring:
      'The original document to be translated, your passport or Emirates ID, and any reference spelling of names as they appear on official IDs.',
    whatToBringAr:
      'المستند الأصلي المراد ترجمته، وهويتك الإماراتية أو جواز سفرك، وطريقة كتابة الأسماء كما في الوثائق الرسمية.',
  },
  {
    n: '08',
    slug: 'vehicle-driving-licence',
    icon: 'car',
    title: 'Vehicle & Driving Licence',
    titleAr: 'المركبات ورخص القيادة',
    keyword: 'Driving licence & vehicle services Ajman',
    blurb: 'Licences, EVG, fines & registration.',
    photo: '/photos/service-vehicle-driving-licence.jpg',
    photoAlt: 'A driver holding her UAE driving licence outside the Safari Typing Services office',
    intro:
      'Driving-licence and vehicle paperwork for Ajman and beyond — transport department, EVG and traffic transactions in one visit.',
    introAr:
      'معاملات رخص القيادة والمركبات لعجمان وغيرها — دائرة النقل وبوابة المركبات (EVG) ومعاملات المرور في زيارة واحدة.',
    subservices: [
      {
        id: 'driving-licence',
        title: 'Driving licence services',
        titleAr: 'خدمات رخصة القيادة',
        desc: 'Driving-licence applications, renewals and file openings, plus international permits.',
        tags: ['New licence', 'Renewal', 'International permit'],
        tagsAr: ['رخصة جديدة', 'تجديد', 'رخصة دولية'],
      },
      {
        id: 'ajman-transport',
        title: 'Ajman transport / RTA transactions',
        titleAr: 'دائرة النقل / معاملات المرور',
        desc: 'Transport-department transactions for Ajman and other emirates.',
        tags: ['Transport dept', 'Inter-emirate'],
        tagsAr: ['دائرة النقل', 'بين الإمارات'],
      },
      {
        id: 'evg-services',
        title: 'EVG (Emirates Vehicle Gate) services',
        titleAr: 'خدمات بوابة المركبات (EVG)',
        desc: 'EVG transactions including registration renewal, transfer and insurance updates.',
        tags: ['EVG', 'Registration renewal', 'Transfer'],
        tagsAr: ['EVG', 'تجديد التسجيل', 'نقل الملكية'],
      },
      {
        id: 'traffic-fines',
        title: 'Traffic fine payment',
        titleAr: 'دفع المخالفات المرورية',
        desc: 'Check and settle traffic fines across the emirates.',
        tags: ['Fine enquiry', 'Fine payment'],
        tagsAr: ['استعلام المخالفات', 'دفع المخالفات'],
      },
      {
        id: 'vehicle-registration',
        title: 'Vehicle registration',
        titleAr: 'تسجيل المركبات',
        desc: 'New vehicle registration, renewal and ownership-transfer support.',
        tags: ['New registration', 'Renewal', 'Ownership transfer'],
        tagsAr: ['تسجيل جديد', 'تجديد', 'نقل ملكية'],
      },
    ],
    whatToBring:
      'Emirates ID, existing driving licence or learner file, vehicle registration card (mulkiya) and valid insurance for vehicle transactions.',
    whatToBringAr:
      'الهوية الإماراتية، ورخصة القيادة الحالية أو ملف المتعلّم، وملكية المركبة (الملكية) وتأمين ساري لمعاملات المركبات.',
  },
  {
    n: '09',
    slug: 'passport-services',
    icon: 'passport',
    title: 'Passport Services',
    titleAr: 'خدمات جوازات السفر',
    keyword: 'Passport services Ajman',
    blurb: 'New, renewal, amendments & lost passports.',
    photo: '/photos/service-passport-services.jpg',
    photoAlt: 'A couple collecting their passports and boarding passes',
    intro:
      'Passport and home-country document applications prepared accurately and submitted on your behalf.',
    introAr: 'طلبات جوازات السفر ووثائق بلدك الأم تُجهّز بدقة وتُقدَّم نيابةً عنك.',
    subservices: [
      {
        id: 'new-passport',
        title: 'New passport',
        titleAr: 'جواز سفر جديد',
        desc: 'First-time and child passport applications for your home country.',
        tags: ['New passport', 'Child passport'],
        tagsAr: ['جواز جديد', 'جواز للأطفال'],
      },
      {
        id: 'passport-renewal',
        title: 'Renewal',
        titleAr: 'تجديد الجواز',
        desc: 'Passport renewals before or after expiry, with photo and form support.',
        tags: ['Renewal', 'Re-issue'],
        tagsAr: ['تجديد', 'إعادة إصدار'],
      },
      {
        id: 'passport-amendments',
        title: 'Amendments',
        titleAr: 'تعديلات الجواز',
        desc: 'Corrections and amendments to passport details.',
        tags: ['Name change', 'Detail correction'],
        tagsAr: ['تغيير الاسم', 'تصحيح البيانات'],
      },
      {
        id: 'lost-passport',
        title: 'Lost passport',
        titleAr: 'الجواز المفقود',
        desc: 'Lost-passport reporting and emergency travel-document support.',
        tags: ['Lost report', 'Emergency document'],
        tagsAr: ['بلاغ فقدان', 'وثيقة سفر طارئة'],
      },
      {
        id: 'national-id',
        title: 'Home-country national ID services',
        titleAr: 'خدمات الهوية الوطنية للبلد الأم',
        desc: 'National ID card and home-country document applications.',
        tags: ['National ID', 'Home-country docs'],
        tagsAr: ['الهوية الوطنية', 'وثائق البلد الأم'],
      },
    ],
    whatToBring:
      'Your current or expired passport, Emirates ID and visa, recent photographs, and any supporting documents your embassy requires.',
    whatToBringAr:
      'جواز سفرك الحالي أو المنتهي، والهوية الإماراتية والتأشيرة، وصور حديثة، وأي مستندات تطلبها سفارتك.',
  },
  {
    n: '10',
    slug: 'online-registrations-utilities',
    icon: 'bolt',
    title: 'Online Registrations & Utilities',
    titleAr: 'التسجيلات الإلكترونية والمرافق',
    keyword: 'FEWA & utility registration Ajman',
    blurb: 'FEWA, Ajman Sewerage & tenancy registration.',
    intro:
      'Get connected and registered the Ajman way — FEWA, Ajman Sewerage, Ajman Municipality tenancy and Civil Defence, without the queues.',
    introAr:
      'وصِّل وسجّل بطريقة عجمان — الكهرباء والماء الاتحادية (FEWA) وصرف صحي عجمان وتسجيل الإيجار في بلدية عجمان والدفاع المدني، بلا طوابير.',
    subservices: [
      {
        id: 'fewa-connection',
        title: 'FEWA connection',
        titleAr: 'توصيل الكهرباء والماء (FEWA)',
        desc: 'FEWA (Federal Electricity & Water Authority) connection, transfer and clearance for your home or premises.',
        tags: ['New connection', 'Transfer', 'Final clearance'],
        tagsAr: ['توصيل جديد', 'نقل', 'إخلاء طرف'],
      },
      {
        id: 'ajman-sewerage',
        title: 'Ajman Sewerage registration',
        titleAr: 'تسجيل صرف صحي عجمان',
        desc: 'Ajman Sewerage account registration and updates.',
        tags: ['Sewerage account', 'Registration'],
        tagsAr: ['حساب الصرف الصحي', 'تسجيل'],
      },
      {
        id: 'tenancy-registration',
        title: 'Tenancy contract registration (Ajman Municipality)',
        titleAr: 'تسجيل عقد الإيجار (بلدية عجمان)',
        desc: 'Tenancy-contract registration through the Ajman Municipality system.',
        tags: ['Tenancy registration', 'Ajman Municipality'],
        tagsAr: ['تسجيل الإيجار', 'بلدية عجمان'],
      },
      {
        id: 'civil-defence',
        title: 'Civil Defence',
        titleAr: 'الدفاع المدني',
        desc: 'Civil Defence registrations and approvals for homes and businesses.',
        tags: ['Civil Defence', 'Approvals'],
        tagsAr: ['الدفاع المدني', 'الموافقات'],
      },
      {
        id: 'ministry-services',
        title: 'Ministry services',
        titleAr: 'خدمات الوزارات',
        desc: 'Online submissions and registrations across UAE ministry portals.',
        tags: ['Online submission', 'Ministry portals'],
        tagsAr: ['تقديم إلكتروني', 'بوابات الوزارات'],
      },
    ],
    whatToBring:
      'Emirates ID, tenancy contract or title deed, a recent FEWA bill or premises number, and the trade licence for business connections.',
    whatToBringAr:
      'الهوية الإماراتية، وعقد الإيجار أو سند الملكية، وفاتورة FEWA حديثة أو رقم العقار، والرخصة التجارية لتوصيلات الأعمال.',
  },
  {
    n: '11',
    slug: 'insurance',
    icon: 'umbrella',
    title: 'Insurance',
    titleAr: 'التأمين',
    keyword: 'Health & vehicle insurance Ajman',
    blurb: 'Health, motor & home cover.',
    photo: '/photos/service-insurance.jpg',
    photoAlt: 'Advisors reviewing insurance documents with a customer on a laptop',
    intro:
      'Straightforward cover arranged at the counter — health, motor and home insurance from trusted UAE providers.',
    introAr: 'تأمين سهل يُرتَّب عند المكتب — صحي ومركبات ومنزل من مزوّدين موثوقين في الإمارات.',
    subservices: [
      {
        id: 'health-insurance',
        title: 'Health insurance',
        titleAr: 'التأمين الصحي',
        desc: 'Individual and family health-insurance plans that meet UAE visa requirements.',
        tags: ['Individual', 'Family', 'Visa-compliant'],
        tagsAr: ['فردي', 'عائلي', 'مطابق للتأشيرة'],
      },
      {
        id: 'vehicle-insurance',
        title: 'Vehicle insurance',
        titleAr: 'تأمين المركبات',
        desc: 'Comprehensive and third-party motor insurance, including renewal.',
        tags: ['Comprehensive', 'Third-party', 'Renewal'],
        tagsAr: ['شامل', 'ضد الغير', 'تجديد'],
      },
      {
        id: 'home-insurance',
        title: 'Home insurance',
        titleAr: 'تأمين المنزل',
        desc: 'Home and contents insurance for tenants and owners.',
        tags: ['Contents', 'Property'],
        tagsAr: ['المحتويات', 'الممتلكات'],
      },
    ],
    whatToBring:
      'Emirates ID, passport and visa for health cover; vehicle registration card (mulkiya) and driving licence for motor cover.',
    whatToBringAr:
      'الهوية الإماراتية وجواز السفر والتأشيرة للتأمين الصحي؛ وملكية المركبة ورخصة القيادة لتأمين المركبات.',
  },
  {
    n: '12',
    slug: 'travel-services',
    icon: 'plane',
    title: 'Travel Services',
    titleAr: 'خدمات السفر',
    keyword: 'Visit visa & travel services Ajman',
    blurb: 'Visit visas, tickets & desert safari.',
    photo: '/photos/service-travel-services.jpg',
    photoAlt: 'A Safari Typing Services agent handing over a passport and boarding pass at the travel counter',
    intro: 'Visit visas, tickets and getaways — plan the trip and the paperwork in one place.',
    introAr: 'تأشيرات زيارة وتذاكر ورحلات — خطّط للرحلة وأوراقها في مكان واحد.',
    subservices: [
      {
        id: 'visit-visa',
        title: 'Visit visa (30 / 60 / 90 days)',
        titleAr: 'تأشيرة زيارة (30 / 60 / 90 يوماً)',
        desc: 'Tourist and visit-visa applications for family and friends, with extensions.',
        tags: ['30 days', '60 days', '90 days', 'Extension'],
        tagsAr: ['30 يوماً', '60 يوماً', '90 يوماً', 'تمديد'],
      },
      {
        id: 'air-tickets',
        title: 'Air-ticket booking',
        titleAr: 'حجز تذاكر الطيران',
        desc: 'Flight bookings and reissues at competitive fares.',
        tags: ['Flights', 'Reissue'],
        tagsAr: ['رحلات', 'إعادة إصدار'],
      },
      {
        id: 'tour-packages',
        title: 'Tour packages',
        titleAr: 'باقات سياحية',
        desc: 'Holiday and tour packages for popular destinations, with hotel reservations arranged.',
        tags: ['Holiday packages', 'Hotel booking', 'Destinations'],
        tagsAr: ['باقات عطلات', 'حجز الفنادق', 'وجهات'],
      },
      {
        id: 'desert-safari',
        title: 'Desert safari',
        titleAr: 'رحلات السفاري الصحراوية',
        desc: 'Desert-safari and local experience bookings.',
        tags: ['Desert safari', 'Experiences'],
        tagsAr: ['سفاري صحراوي', 'تجارب'],
      },
      {
        id: 'travel-insurance',
        title: 'Travel insurance',
        titleAr: 'تأمين السفر',
        desc: 'Travel and Schengen-compliant insurance for visa applications and trips abroad.',
        tags: ['Travel cover', 'Schengen', 'Trips'],
        tagsAr: ['تأمين السفر', 'شنغن', 'الرحلات'],
      },
    ],
    whatToBring:
      'Passport copy of each traveller, a photo for visit-visa applicants, and the sponsor’s Emirates ID and visa where required.',
    whatToBringAr:
      'صورة جواز سفر كل مسافر، وصورة شخصية لطالبي تأشيرة الزيارة، وهوية الكفيل وتأشيرته عند الحاجة.',
  },
  {
    n: '13',
    slug: 'tax-accounting',
    icon: 'calculator',
    title: 'Tax & Accounting',
    titleAr: 'الضرائب والمحاسبة',
    keyword: 'VAT & corporate tax registration Ajman',
    blurb: 'VAT, corporate tax, filing & bookkeeping.',
    intro:
      'Stay compliant with the Federal Tax Authority — VAT and corporate-tax registration, return filing and day-to-day bookkeeping, handled by people who do it every week.',
    introAr:
      'حافظ على امتثالك لدى الهيئة الاتحادية للضرائب — تسجيل ضريبة القيمة المضافة وضريبة الشركات وتقديم الإقرارات ومسك الدفاتر اليومي، على يد فريق متمرّس.',
    subservices: [
      {
        id: 'vat-registration',
        title: 'VAT registration',
        titleAr: 'تسجيل ضريبة القيمة المضافة',
        desc: 'VAT registration with the Federal Tax Authority and issuance of your Tax Registration Number (TRN).',
        tags: ['VAT registration', 'TRN', 'FTA portal'],
        tagsAr: ['تسجيل القيمة المضافة', 'الرقم الضريبي', 'بوابة الهيئة'],
      },
      {
        id: 'vat-deregistration',
        title: 'VAT deregistration',
        titleAr: 'إلغاء تسجيل القيمة المضافة',
        desc: 'De-registration from VAT when your business no longer meets the registration threshold.',
        tags: ['Deregistration', 'Threshold review'],
        tagsAr: ['إلغاء التسجيل', 'مراجعة الحد'],
      },
      {
        id: 'vat-returns',
        title: 'VAT return filing',
        titleAr: 'تقديم الإقرارات الضريبية',
        desc: 'Periodic VAT-return preparation and filing — reconciled and submitted on time.',
        tags: ['Return filing', 'Reconciliation', 'On time'],
        tagsAr: ['تقديم الإقرار', 'المطابقة', 'في الموعد'],
      },
      {
        id: 'corporate-tax',
        title: 'Corporate tax registration',
        titleAr: 'تسجيل ضريبة الشركات',
        desc: 'Corporate-tax registration with guidance on the UAE corporate-tax rules and your obligations.',
        tags: ['Corporate tax', 'Registration', 'Compliance'],
        tagsAr: ['ضريبة الشركات', 'التسجيل', 'الامتثال'],
      },
      {
        id: 'accounting-bookkeeping',
        title: 'Accounting & bookkeeping',
        titleAr: 'المحاسبة ومسك الدفاتر',
        desc: 'Monthly bookkeeping, ledgers and financial statements to keep small businesses tidy and audit-ready.',
        tags: ['Bookkeeping', 'Ledgers', 'Statements'],
        tagsAr: ['مسك الدفاتر', 'السجلات', 'القوائم المالية'],
      },
    ],
    whatToBring:
      'Your trade licence, the owner’s Emirates ID and passport, any existing TRN, and recent invoices or bank statements for bookkeeping.',
    whatToBringAr:
      'الرخصة التجارية، وهوية المالك وجواز سفره، والرقم الضريبي إن وُجد، وأحدث الفواتير أو كشوف الحساب لمسك الدفاتر.',
  },
  {
    n: '14',
    slug: 'digital-marketing-it',
    icon: 'monitor',
    title: 'Digital Marketing & IT',
    titleAr: 'التسويق الرقمي وتقنية المعلومات',
    keyword: 'Website design & digital marketing Ajman',
    blurb: 'Websites, e-commerce, branding & social media.',
    intro:
      'Put your business online and keep it growing — websites, online stores, branding and social media, built and managed from the same trusted desk that handles your paperwork.',
    introAr:
      'انقل أعمالك إلى الإنترنت واجعلها تنمو — مواقع إلكترونية ومتاجر وهوية بصرية وإدارة لوسائل التواصل، تُصمَّم وتُدار من المكتب نفسه الذي يتولى معاملاتك.',
    subservices: [
      {
        id: 'website-design',
        title: 'Website design & development',
        titleAr: 'تصميم وتطوير المواقع',
        desc: 'Modern, mobile-friendly business websites — designed, built and launched for you.',
        tags: ['Web design', 'Development', 'Responsive'],
        tagsAr: ['تصميم المواقع', 'التطوير', 'متجاوب'],
      },
      {
        id: 'ecommerce',
        title: 'E-commerce development',
        titleAr: 'تطوير المتاجر الإلكترونية',
        desc: 'Online stores with product catalogues, online payments and order management.',
        tags: ['Online store', 'Payments', 'Catalogue'],
        tagsAr: ['متجر إلكتروني', 'المدفوعات', 'كتالوج'],
      },
      {
        id: 'social-media',
        title: 'Social media management',
        titleAr: 'إدارة وسائل التواصل',
        desc: 'Content, scheduling and audience growth across Instagram, Facebook and beyond.',
        tags: ['Content', 'Scheduling', 'Growth'],
        tagsAr: ['المحتوى', 'الجدولة', 'النمو'],
      },
      {
        id: 'branding-logo',
        title: 'Logo design & branding',
        titleAr: 'تصميم الشعار والهوية',
        desc: 'Logos, brand colours and a visual identity that make your business memorable.',
        tags: ['Logo design', 'Brand identity', 'Visuals'],
        tagsAr: ['تصميم الشعار', 'الهوية التجارية', 'التصاميم'],
      },
      {
        id: 'seo',
        title: 'SEO services',
        titleAr: 'تحسين محركات البحث',
        desc: 'Search-engine optimisation so customers in the UAE find your business first.',
        tags: ['SEO', 'Local search', 'Keywords'],
        tagsAr: ['تحسين محركات البحث', 'البحث المحلي', 'الكلمات المفتاحية'],
      },
      {
        id: 'business-email',
        title: 'Business email setup',
        titleAr: 'إعداد البريد الإلكتروني للأعمال',
        desc: 'Professional business email on your own domain, set up and ready to use.',
        tags: ['Business email', 'Domain', 'Setup'],
        tagsAr: ['بريد الأعمال', 'النطاق', 'الإعداد'],
      },
    ],
    whatToBring:
      'Your business name and logo (if you have one), any existing website or social accounts, and a short description of what you offer.',
    whatToBringAr:
      'اسم نشاطك وشعارك (إن وُجد)، وأي موقع أو حسابات تواصل حالية، ووصف موجز لما تقدّمه.',
  },
  {
    n: '15',
    slug: 'everyday-other',
    icon: 'printer',
    title: 'Everyday & Other Services',
    titleAr: 'خدمات يومية وأخرى',
    keyword: 'Printing, PCC & typing services Ajman',
    blurb: 'Maid visas, PCC, printing & online forms.',
    photo: '/photos/service-everyday-other.jpg',
    photoAlt: 'The Safari Typing Services reception desk welcoming a customer',
    intro:
      'The day-to-day errands a typing centre should just handle — printing, clearances and the small things, done while you wait.',
    introAr:
      'المهام اليومية التي يجب أن يتولاها مركز الطباعة ببساطة — طباعة وشهادات وأمور صغيرة تُنجز أثناء انتظارك.',
    subservices: [
      {
        id: 'maid-visa',
        title: 'Domestic worker (maid) visa services',
        titleAr: 'خدمات تأشيرة العمالة المنزلية',
        desc: 'Domestic-worker visa processing — entry permit, medical, Emirates ID and stamping.',
        tags: ['Maid visa', 'Entry permit', 'Renewal'],
        tagsAr: ['تأشيرة خادمة', 'تصريح دخول', 'تجديد'],
      },
      {
        id: 'pcc',
        title: 'Police Clearance Certificate (Good Conduct)',
        titleAr: 'شهادة حسن السيرة والسلوك',
        desc: 'Police Clearance / Good Conduct certificate applications for UAE and overseas use.',
        tags: ['Good conduct', 'PCC', 'Overseas use'],
        tagsAr: ['حسن السيرة', 'شهادة عدم محكومية', 'للاستخدام الخارجي'],
      },
      {
        id: 'printing',
        title: 'Printing, photocopy & scanning',
        titleAr: 'طباعة ونسخ ومسح ضوئي',
        desc: 'Everyday printing, colour copies, scanning and document handling.',
        tags: ['Printing', 'Photocopy', 'Scanning'],
        tagsAr: ['طباعة', 'نسخ', 'مسح ضوئي'],
      },
      {
        id: 'online-forms',
        title: 'Online government form submission',
        titleAr: 'تقديم النماذج الحكومية إلكترونياً',
        desc: 'Filling and submitting government and service forms online on your behalf.',
        tags: ['Form filling', 'Online submission'],
        tagsAr: ['تعبئة النماذج', 'تقديم إلكتروني'],
      },
      {
        id: 'courier',
        title: 'Courier & document delivery',
        titleAr: 'الشحن وتوصيل المستندات',
        desc: 'Local and international courier for your documents and parcels.',
        tags: ['Courier', 'Document delivery', 'International'],
        tagsAr: ['شحن', 'توصيل المستندات', 'دولي'],
      },
      {
        id: 'utility-bills',
        title: 'Utility bill payments',
        titleAr: 'دفع فواتير الخدمات',
        desc: 'Pay FEWA, telecom and other utility bills quickly at the counter.',
        tags: ['Bill payment', 'FEWA', 'Telecom'],
        tagsAr: ['دفع الفواتير', 'FEWA', 'الاتصالات'],
      },
    ],
    whatToBring:
      'Your Emirates ID and passport, plus any specific documents or photos the application needs — message us first for the exact checklist.',
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
  homeBand: '/photos/home-typing-center.png',
  step1: '/photos/step-welcome-tablet.png',
  step2: '/photos/step-documents.png',
  step3: '/photos/step-collect.png',
}

// Home — trust strip. [CONFIRM] every figure before launch — no invented numbers.
export const HOME_STATS = [
  { value: '18+', label: 'Years of service' },
  { value: '15,000+', label: 'Applications handled' }, // owner-confirmed 2026-06-27
  { value: '5', label: 'Languages spoken' },
  { value: 'Same day', label: 'On most documents' },
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
  // [CONFIRM] "Government of Dubai" and "Government of Sharjah HRD" emblems were
  // removed: the centre is Ajman-based and showing other emirates' official
  // government marks implies endorsement (trademark risk) unless those services
  // are genuinely offered. Owner can re-add (logos still in /public/logos) if
  // confirmed — keep the strip Ajman-accurate (see README content checklist).
  { label: 'Ajman Dept. of Economic Development', icon: 'building', logo: '/logos/ded-ajman.png', box: 'wide', cls: 'max-h-16 max-w-[150px]' },
  { label: 'Ajman Sewerage', icon: 'globe', logo: '/logos/ajman-sewerage.png', box: 'tall' },
  { label: 'Tasdeeq attestation', icon: 'check', logo: '/logos/tasdeeq.png', box: 'wide' },
  { label: 'Laiq medical fitness', icon: 'shield', logo: '/logos/laiq.png', box: 'tall' },
]

// Home — section copy. Keep claims accurate; [CONFIRM] anything not yet verified.
export const HOME = {
  hero: {
    eyebrow: 'Nazir Plaza · Ajman',
    subline:
      'Visas, Emirates ID, attestation, business licences and PRO services — typed correctly, submitted through the right channel and followed up until they’re done. So you never have to think about the queue again.',
    trustLine: 'Serving Ajman’s residents & businesses in five languages', // [CONFIRM] scale wording
  },
  credentialsLabel: 'We work through the official government channels',
  services: {
    eyebrow: 'What We Do',
    title: 'Every formality, under one calm roof.',
    intro:
      'Fifteen service areas — from a first residence visa to a full trade licence, VAT and your business website. We manage the forms, the fees and the follow-ups on your behalf.',
    allLabel: 'View all services',
  },
  why: {
    eyebrow: 'Why Safari',
    title: 'Quiet competence, every single time.',
    intro: 'The reasons residents and businesses keep coming back to Shop 4.',
  },
  process: {
    eyebrow: 'The Process',
    title: 'Three unhurried steps.',
    intro: 'No appointment, no jargon. Tell us what you need and we take it from there.',
  },
  languages: {
    eyebrow: 'Spoken Here',
    title: 'We’ll explain it in your language.',
    intro: 'Deal with the same friendly team in whichever of these you’re most comfortable speaking.',
  },
  testimonials: {
    eyebrow: 'In Their Words',
    title: 'Trusted across the community.',
  },
  faq: {
    eyebrow: 'Good to Know',
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
  { value: '18+', label: 'Years in service' },
  { value: '15k+', label: 'Applications' }, // owner-confirmed 2026-06-27
  { value: '15', label: 'Service areas' },
  { value: '100%', label: 'Confidential' }, // ink, not brand-blue (owner request)
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

// About — "Our journey" roadmap (vertical timeline). Phase-based milestones,
// deliberately undated — keep these qualitative unless the owner confirms real
// years. Figures used (18+ years, 15 service areas, five languages) are the
// owner-confirmed ones already shown elsewhere on the site.
export const ABOUT_JOURNEY = [
  {
    phase: 'The beginning',
    title: 'A single typing desk',
    body: 'Safari Typing Services opens at Nazir Plaza, Ajman — a small desk typing documents for neighbours and nearby businesses.',
  },
  {
    phase: 'Finding our feet',
    title: 'More of the paperwork',
    body: 'As word spreads, we take on visa processing, Emirates ID, and labour and immigration work — handling each family’s file from start to finish.',
  },
  {
    phase: 'A full service centre',
    title: 'Everything under one roof',
    body: 'Fifteen service areas grow around that desk — business setup and PRO, attestation, tax, insurance and travel — all from one calm counter.',
  },
  {
    phase: 'Today & ahead',
    title: 'Trusted across the UAE',
    body: 'Eighteen years on, we serve thousands of residents and businesses — in five languages, in person or online, wherever you are in the Emirates.',
  },
]

// About — "Why choose us" checklist.
export const ABOUT_WHY = [
  'Over 18 years of experience',
  'Comprehensive document processing',
  'Fast and reliable service',
  'Experienced, professional team',
  'Support for individuals and businesses',
  'UAE-wide service coverage',
  'Customer-centric approach',
]

// Contact — enquiry form service options (mirrors the 15 categories).
export const ENQUIRY_SERVICES = [
  'Business setup & PRO',
  'Tax & accounting',
  'Visa & immigration',
  'Emirates ID',
  'Tasheel & MOHRE labour',
  'Medical services',
  'Documentation & attestation',
  'Translation & court works',
  'Vehicle & driving licence',
  'Passport services',
  'Online registrations & utilities',
  'Insurance',
  'Travel services',
  'Website & digital marketing',
  'Everyday & other services',
  'Something else',
]

// FAQ — accordion (feeds FAQPage JSON-LD on /faq).
export const FAQS = [
  {
    q: 'What documents do I need to bring?',
    a: 'It depends on the transaction, but usually your passport, Emirates ID and any related certificates. Message us first and we’ll send you an exact checklist so you only make one trip.',
  },
  {
    q: 'How long does a typical application take?',
    a: 'Most typing and form submissions are done the same day. Visa and labour transactions depend on government processing times, but we submit immediately and keep you updated throughout.',
  },
  {
    q: 'How do your charges work?',
    a: 'You pay a clear service charge for our work, plus the official government fees, which we charge at cost. The government portion varies by transaction, so we always confirm the full amount on WhatsApp before we start — there are no hidden costs and no surprises.',
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
    q: 'Do I need an appointment?',
    a: 'No appointment is needed — walk in any time during opening hours. A quick call or WhatsApp ahead just helps us prepare your documents so you’re in and out faster.',
  },
  {
    q: 'Which languages do you speak?',
    a: 'Our counter team serves you in English, Arabic, Hindi, Malayalam and Urdu, so you can explain what you need in the language you’re most comfortable with.',
  },
  {
    q: 'Is my personal information kept private?',
    a: 'Yes. We only use your documents and details to complete the service you ask for, in line with the UAE Personal Data Protection Law. We don’t sell or share your information — see our privacy policy for the full detail.',
  },
  {
    q: 'Which areas do you serve?',
    a: 'We’re based at Nazir Plaza, Shop 4 in Ajman, and handle transactions for clients across Ajman and the northern emirates. Many services — typing, attestation, visa follow-ups — can be done remotely wherever you are in the UAE.',
  },
  {
    q: 'What are your opening hours?',
    a: 'Saturday to Thursday, 8:00 AM to 9:00 PM, and Friday from 2:00 PM to 9:00 PM. Walk-ins are welcome, but a quick call ahead helps us prepare.',
  },
]
