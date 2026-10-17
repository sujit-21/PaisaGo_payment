export const carouselSlides = [
  {
    id: 1,
    illustrationType: 'personal-loan',
    preTitle: 'Get upto',
    title: '₹10 lakh Personal Loan',
    highlight: 'with zero paperwork',
    subtitle: 'One Loan. Endless Possibilities.',
    cta: 'Scan to apply on the PaisaGo app',
    category: 'Personal Loan',
    theme: 'light',
    accentColor: '#059669'
  },
  {
    id: 2,
    illustrationType: 'pos',
    title: 'One Device, One App',
    subtitle: 'Any Payment Method',
    cta: 'Get your PaisaGo POS',
    category: 'PaisaGo POS',
    theme: 'light',
    accentColor: '#00baf2'
  },
  {
    id: 3,
    illustrationType: 'pg',
    badge: '1.99% FREE',
    title: 'Accept payments for your online business at zero cost',
    subtitle: 'Sign up for PaisaGo Payment Aggregator',
    cta: 'Get Started',
    category: 'Payment Aggregator',
    theme: 'light',
    accentColor: '#10b981'
  },
  {
    id: 4,
    illustrationType: 'sip',
    title: 'Daily Mutual Fund SIP',
    subtitlePre: 'Starting at just ',
    subtitleHighlight: '₹10/day',
    cta: 'Invest Now',
    category: 'Mutual Funds',
    theme: 'light',
    accentColor: '#059669'
  },
  {
    id: 5,
    illustrationType: 'sbi-card',
    tag: 'INTRODUCING',
    title: 'THOUGHTFULLY CRAFTED FOR INDIA',
    subtitle: '10% Reward Points* on PaisaGo spends',
    cta: 'Explore',
    subtext: 'Available on RuPay & Visa',
    disclaimer: '*On select categories - T&C Apply',
    category: 'Credit Cards',
    theme: 'dark',
    accentColor: '#fac272'
  }
];

export const coreTabsData = {
  payments: {
    title: 'Payments',
    tagline: 'Simple, fast & secure transactions',
    description: 'One in three Indians uses PaisaGo to send money, recharge, pay bills, and split expenses effortlessly.',
    features: [
      {
        id: 'upi-lite',
        title: 'UPI Lite',
        tag: 'Fast Track',
        desc: 'Instant pin-less transactions up to ₹500. Zero server downtime and lightning speed.',
        icon: 'Zap'
      },
      {
        id: 'credit-line-upi',
        title: 'Credit Line on UPI',
        tag: 'New',
        desc: 'Link pre-sanctioned bank credit lines directly to your UPI ID without plastic cards.',
        icon: 'CreditCard'
      },
      {
        id: 'rupay-cc',
        title: 'RuPay CC on UPI',
        tag: 'Popular',
        desc: 'Scan any merchant QR code and pay directly from your RuPay credit card with reward points.',
        icon: 'ShieldCheck'
      },
      {
        id: 'split-expenses',
        title: 'Split Expenses',
        tag: 'Social',
        desc: 'Simplify group dinners, trips, and flat expenses with automatic split calculators.',
        icon: 'Users'
      },
      {
        id: 'gift-cards',
        title: 'PaisaGo Gift Card',
        tag: 'Gifting',
        desc: 'The perfect instant gift for weddings, birthdays, and festive seasons across 1000+ brands.',
        icon: 'Gift'
      },
      {
        id: 'upi-circle',
        title: 'UPI Circle',
        tag: 'Family',
        desc: 'Delegate payments to family members or staff with monthly spending limits & full control.',
        icon: 'CheckCircle'
      }
    ]
  },
  investments: {
    title: 'Investments',
    tagline: 'Build, manage & grow your wealth',
    description: 'Grow your savings systematically with 24K pure digital gold, silver, curated mutual funds, and government NPS.',
    features: [
      {
        id: 'gold-24k',
        title: '24K Digital Gold',
        tag: 'From ₹5',
        desc: 'Buy 99.99% certified 24K pure gold securely stored in MMTC-PAMP insured bank lockers.',
        icon: 'Coins'
      },
      {
        id: 'gold-sip',
        title: 'Monthly Gold SIP',
        tag: 'Automated',
        desc: 'Accumulate physical gold grams every month from ₹100 without timing the bullion market.',
        icon: 'TrendingUp'
      },
      {
        id: 'mutual-funds',
        title: 'Curated Mutual Funds',
        tag: 'Zero Commission',
        desc: 'Direct mutual funds across equity, debt, and index categories with CRISP risk ratings.',
        icon: 'PieChart'
      },
      {
        id: 'nps',
        title: 'NPS Retirement Fund',
        tag: 'Tax Saver',
        desc: 'Save additional tax under Section 80CCD(1B) and build an inflation-proof pension corpus.',
        icon: 'Shield'
      }
    ]
  },
  insurance: {
    title: 'Insurance',
    tagline: 'Protect, plan & secure your future',
    description: 'Comprehensive, paperless insurance plans with 24/7 dedicated claim assistance and zero physical paperwork.',
    features: [
      {
        id: 'bike-insurance',
        title: 'Bike Insurance',
        tag: 'Instant Policy',
        desc: 'Comprehensive & third-party two-wheeler coverage issued in less than 2 minutes.',
        icon: 'Bike'
      },
      {
        id: 'car-insurance',
        title: 'Car Insurance',
        tag: 'Cashless Garages',
        desc: 'Zero-depreciation covers with cashless settlement across 5000+ authorized service centers.',
        icon: 'Car'
      },
      {
        id: 'health-insurance',
        title: 'Health Insurance',
        tag: 'Up to ₹1 Cr',
        desc: 'Day-1 coverage, no pre-policy health checkups required, and monthly payment options.',
        icon: 'HeartHandshake'
      },
      {
        id: 'travel-insurance',
        title: 'Travel Insurance',
        tag: 'Worldwide',
        desc: 'Covers flight delays, baggage loss, emergency medical expenses abroad from ₹15/day.',
        icon: 'Plane'
      }
    ]
  },
  lending: {
    title: 'Lending',
    tagline: 'Access quick, transparent & secure loans',
    description: 'RBI-regulated lending partners offering fast credit with zero hidden charges and competitive interest rates.',
    features: [
      {
        id: 'personal-loan',
        title: 'Personal Loan',
        tag: 'Up to ₹10 Lakh',
        desc: 'Pre-approved digital loans with flexible EMIs from 3 to 60 months and direct bank transfer.',
        icon: 'Banknote'
      },
      {
        id: 'merchant-loan',
        title: 'Merchant Credit Line',
        tag: 'For Stores',
        desc: 'Daily settlement-based loans for shopkeepers to restock inventory without collateral.',
        icon: 'Store'
      },
      {
        id: 'credit-score',
        title: 'Free Credit Score',
        tag: 'Monthly Refresh',
        desc: 'Check your detailed Experian / CRIF score free anytime with personalized improvement tips.',
        icon: 'Activity'
      },
      {
        id: 'secured-loans',
        title: 'Loan Against Mutual Funds',
        tag: 'Low Interest',
        desc: 'Get instant liquidity against your existing MF portfolio without selling your units.',
        icon: 'Lock'
      }
    ]
  }
};

export const smartDevicesData = [
  {
    id: 'smart-pod',
    name: 'PaisaGo SMART POD',
    tag: 'Next-Gen All-in-One',
    desc: 'Combines real-time audio voice notifications with built-in NFC tap-and-pay card acceptance in a single compact device.',
    badge: 'Card + Voice',
    features: ['Accepts Debit/Credit cards', 'Loud instant audio confirmation', 'Built-in 4G SIM & WiFi', 'Up to 5 days battery']
  },
  {
    id: 'smartspeaker-2',
    name: 'SmartSpeaker 2nd Gen',
    tag: 'Made in India Companion',
    desc: 'Equipped with 4G connectivity, lightning-fast 75-minute fast charge, 7+ days battery life, and crystal-clear audio alerts in 21 Indian languages.',
    badge: '21 Languages',
    features: ['Real-time payment speech alerts', 'Noise-canceling speaker design', '4G all-network coverage', 'Splash & dust resistant']
  },
  {
    id: 'qr-standee',
    name: 'PaisaGo QR Standee',
    tag: 'Zero Setup Cost',
    desc: 'Accept payments from any UPI app (PaisaGo, GPay, Paytm, BHIM, Bank apps) with zero transaction charges and instant settlement.',
    badge: 'Universal UPI',
    features: ['Direct bank settlement', 'Custom business name printed', 'Anti-tamper laminated material', 'Instant merchant app alerts']
  },
  {
    id: 'pos-machine',
    name: 'PaisaGo POS EDC Machine',
    tag: 'Smart Merchant Terminal',
    desc: 'Android-powered touch POS with printer, barcode scanner, inventory management, and zero paper receipt options.',
    badge: 'POS Terminal',
    features: ['Thermal printer built-in', 'Supports swipe, dip & contactless', 'Digital ledger & Khata sync', 'All card networks supported']
  }
];

export const internationalCountries = [
  { name: 'UAE (United Arab Emirates)', code: 'AE', flag: '🇦🇪', merchants: 'Dubai Mall, Lulu Hypermarket, duty-free outlets & 100k+ terminals' },
  { name: 'Singapore', code: 'SG', flag: '🇸🇬', merchants: 'Changi Airport, hawker centres, Orchard Rd merchants via NETS QR' },
  { name: 'Nepal', code: 'NP', flag: '🇳🇵', merchants: 'Across Kathmandu, Pokhara, border trades via Fonepay network' },
  { name: 'Sri Lanka', code: 'LK', flag: '🇱🇰', merchants: 'Hotels, supermarkets & retail stores via LankaQR system' },
  { name: 'Bhutan', code: 'BT', flag: '🇧🇹', merchants: 'Hotels, souvenir shops and local cafes via RMA payment rails' },
  { name: 'Mauritius', code: 'MU', flag: '🇲🇺', merchants: 'Major tourist attractions, resorts and retail via MauCAS QR' }
];

export const footerSections = {
  businessSolutions: [
    { title: 'Payment Gateway', url: '#' },
    { title: 'E-commerce PG', url: '#' },
    { title: 'UPI Payment Gateway', url: '#' },
    { title: 'Express Checkout', url: '#' },
    { title: 'Offline Merchant Solutions', url: '#' },
    { title: 'SmartSpeaker Voice Box', url: '#' },
    { title: 'POS EDC Machine', url: '#' },
    { title: 'Payment Links', url: '#' },
    { title: 'Merchant Lending', url: '#' },
    { title: 'Advertise on PaisaGo', url: '#' }
  ],
  insurance: [
    { title: 'Motor Insurance', url: '#' },
    { title: 'Bike Insurance', url: '#' },
    { title: 'Car Insurance', url: '#' },
    { title: 'Health Insurance', url: '#' },
    { title: 'Term Life Insurance', url: '#' },
    { title: 'Personal Accident Cover', url: '#' },
    { title: 'Travel Insurance', url: '#' },
    { title: 'International Travel Insurance', url: '#' }
  ],
  investments: [
    { title: '24K Pure Gold', url: '#' },
    { title: 'Silver Bullion', url: '#' },
    { title: 'Mutual Funds', url: '#' },
    { title: 'Gold SIP', url: '#' },
    { title: 'Tax Saving ELSS Funds', url: '#' },
    { title: 'National Pension Scheme (NPS)', url: '#' },
    { title: 'Recurring Deposits', url: '#' }
  ],
  general: [
    { title: 'About Us', url: '#' },
    { title: 'Careers (We are hiring!)', url: '#' },
    { title: 'Investor Relations', url: '#' },
    { title: 'PaisaGo Pulse (Trends)', url: '#' },
    { title: 'Trust & Safety', url: '#' },
    { title: 'Press & Media Kit', url: '#' },
    { title: 'Engineering & Tech Blog', url: '#' },
    { title: 'Contact Us', url: '#' },
    { title: 'Ethics & Governance', url: '#' }
  ],
  legal: [
    { title: 'Terms & Conditions', url: '#' },
    { title: 'Privacy Policy', url: '#' },
    { title: 'Grievance Policy', url: '#' },
    { title: 'E-Waste Policy', url: '#' },
    { title: 'Anti-Corruption Policy', url: '#' },
    { title: 'RBI Account Aggregator Notice', url: '#' }
  ],
  paisaGoGroup: [
    { title: 'PaisaGo App', url: '#' },
    { title: 'Indus Appstore', url: '#' },
    { title: 'Share.Market (Stocks & F&O)', url: '#' },
    { title: 'Pincode (Hyperlocal Shopping)', url: '#' }
  ]
};
