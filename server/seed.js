const mongoose = require('mongoose');
const Service = require('./models/Service');
const PulseStat = require('./models/PulseStat');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/paisago';

const servicesData = [
  {
    id: 'mobile-recharge',
    title: 'Mobile Recharge',
    category: 'recharge',
    icon: 'Smartphone',
    badge: 'Popular',
    description: 'Instant recharge for Jio, Airtel, Vi & BSNL with cashbacks & offers',
    fields: [
      { name: 'phone', label: 'Mobile Number', type: 'tel', placeholder: '10-digit mobile number' },
      { name: 'operator', label: 'Operator & Circle', type: 'select', options: ['Jio - National', 'Airtel - National', 'Vi - National', 'BSNL - GSM'] },
      { name: 'plan', label: 'Select Plan', type: 'select', options: ['₹299 - 1.5 GB/day, 28 Days', '₹719 - 1.5 GB/day, 84 Days', '₹399 - 2.5 GB/day, 28 Days', '₹155 - 1 GB total, 24 Days'] }
    ]
  },
  {
    id: 'fastag-recharge',
    title: 'FASTag Recharge',
    category: 'recharge',
    icon: 'Car',
    badge: 'Instant',
    description: 'Recharge NETC FASTag across 30+ issuer banks smoothly',
    fields: [
      { name: 'vehicleNumber', label: 'Vehicle Registration Number', type: 'text', placeholder: 'e.g. DL 01 AB 1234' },
      { name: 'bank', label: 'Select Bank', type: 'select', options: ['ICICI Bank FASTag', 'SBI FASTag', 'HDFC Bank FASTag', 'Paytm Payments Bank FASTag', 'Kotak FASTag'] },
      { name: 'amount', label: 'Amount (₹)', type: 'number', placeholder: 'Min ₹100' }
    ]
  },
  {
    id: 'dth-recharge',
    title: 'DTH Recharge',
    category: 'recharge',
    icon: 'Tv',
    badge: '',
    description: 'Tata Play, Airtel Digital TV, Dish TV, Sun Direct & D2H',
    fields: [
      { name: 'subscriberId', label: 'Subscriber ID / VC Number', type: 'text', placeholder: 'Enter your 10 or 11 digit ID' },
      { name: 'operator', label: 'DTH Operator', type: 'select', options: ['Tata Play', 'Airtel Digital TV', 'Dish TV', 'Sun Direct', 'D2H'] },
      { name: 'amount', label: 'Amount (₹)', type: 'number', placeholder: 'Enter amount' }
    ]
  },
  {
    id: 'electricity-bill',
    title: 'Electricity',
    category: 'utility',
    icon: 'Zap',
    badge: 'BBPS',
    description: 'Pay electricity bills across 80+ state electricity boards',
    fields: [
      { name: 'state', label: 'State', type: 'select', options: ['Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'Uttar Pradesh', 'West Bengal'] },
      { name: 'board', label: 'Electricity Board', type: 'select', options: ['Tata Power', 'BSES Rajdhani', 'BESCOM', 'MSEDCL - Mahavitaran', 'UPPCL (Urban)'] },
      { name: 'caNumber', label: 'Consumer Account Number', type: 'text', placeholder: 'e.g. 100234567' }
    ]
  },
  {
    id: 'credit-card-payment',
    title: 'Credit Card Payment',
    category: 'financial',
    icon: 'CreditCard',
    badge: 'Zero Fee',
    description: 'Pay Visa, Mastercard, RuPay & Amex card bills instantly',
    fields: [
      { name: 'cardNumber', label: 'Card Last 4 Digits', type: 'text', placeholder: 'Last 4 digits of card' },
      { name: 'bank', label: 'Bank Name', type: 'select', options: ['HDFC Bank', 'SBI Card', 'ICICI Bank', 'Axis Bank', 'PaisaGo SBI Card'] },
      { name: 'amount', label: 'Bill Amount (₹)', type: 'number', placeholder: 'Amount to pay' }
    ]
  },
  {
    id: 'rent-payment',
    title: 'Rent Payment',
    category: 'utility',
    icon: 'Home',
    badge: 'Earn Rewards',
    description: 'Pay house rent, office rent, security deposit using credit cards or UPI',
    fields: [
      { name: 'landlordName', label: "Landlord's Name", type: 'text', placeholder: 'Full Name' },
      { name: 'landlordUpi', label: "Landlord's UPI ID / Account", type: 'text', placeholder: 'e.g. landlord@upi' },
      { name: 'amount', label: 'Rent Amount (₹)', type: 'number', placeholder: 'Rent in INR' }
    ]
  },
  {
    id: 'piped-gas',
    title: 'Piped Gas',
    category: 'utility',
    icon: 'Flame',
    badge: '',
    description: 'IGL, Mahanagar Gas, Adani Gas, Gujarat Gas bill payment',
    fields: [
      { name: 'provider', label: 'Gas Provider', type: 'select', options: ['Indraprastha Gas (IGL)', 'Mahanagar Gas (MGL)', 'Adani Total Gas', 'Gujarat Gas Ltd'] },
      { name: 'bpNumber', label: 'BP / Customer Number', type: 'text', placeholder: 'Enter BP number' }
    ]
  },
  {
    id: 'water-bill',
    title: 'Water Bill',
    category: 'utility',
    icon: 'Droplets',
    badge: '',
    description: 'Municipal corporation water bill payment',
    fields: [
      { name: 'board', label: 'Water Board', type: 'select', options: ['Delhi Jal Board', 'Bangalore Water (BWSSB)', 'MCGM - Mumbai Water', 'Hyderabad (HMWSSB)'] },
      { name: 'kNo', label: 'K Number / RR Number', type: 'text', placeholder: 'Consumer ID' }
    ]
  },
  {
    id: 'broadband-landline',
    title: 'Broadband / Landline',
    category: 'utility',
    icon: 'Wifi',
    badge: '',
    description: 'JioFiber, Airtel Xstream, ACT Fibernet, BSNL FTTH',
    fields: [
      { name: 'provider', label: 'Broadband Provider', type: 'select', options: ['Airtel Broadband', 'JioFiber', 'ACT Fibernet', 'Hathway', 'Tata Play Fiber'] },
      { name: 'telephoneNumber', label: 'Landline Number / User ID', type: 'text', placeholder: 'STD code + number or User ID' }
    ]
  },
  {
    id: 'book-cylinder',
    title: 'Book a Cylinder',
    category: 'utility',
    icon: 'Fuel',
    badge: '',
    description: 'Bharat Gas, HP Gas, Indane LPG cylinder refill booking',
    fields: [
      { name: 'distributor', label: 'LPG Provider', type: 'select', options: ['Indane Gas (Indian Oil)', 'HP Gas', 'Bharat Gas'] },
      { name: 'mobileOrConsumerId', label: 'Registered Mobile or 17-digit LPG ID', type: 'text', placeholder: 'Enter registered mobile' }
    ]
  },
  {
    id: 'loan-repayment',
    title: 'Loan Repayment',
    category: 'financial',
    icon: 'BadgePercent',
    badge: '',
    description: 'Pay EMI for Bajaj Finserv, Home Credit, Muthoot, DMI and 100+ NBFCs',
    fields: [
      { name: 'lender', label: 'Lender / NBFC', type: 'select', options: ['Bajaj Finance', 'Home Credit', 'Muthoot Finance', 'Tata Capital', 'DMI Finance', 'PaisaGo Lending'] },
      { name: 'loanAccount', label: 'Loan Account Number (LAN)', type: 'text', placeholder: 'e.g. LAN12984920' }
    ]
  },
  {
    id: 'municipal-tax',
    title: 'Municipal Tax',
    category: 'utility',
    icon: 'Building2',
    badge: '',
    description: 'Property tax payment for BBMP, MCD, BMC, GHMC & municipalities',
    fields: [
      { name: 'corporation', label: 'Municipal Corporation', type: 'select', options: ['MCD Delhi', 'BBMP Bengaluru', 'BMC Mumbai', 'Pune Municipal Corp', 'Chennai Corp'] },
      { name: 'propertyId', label: 'Property Tax Identification Number', type: 'text', placeholder: 'PTIN / Assessment No.' }
    ]
  }
];

const pulseData = {
  registeredUsers: '73+ Crore',
  postalCodesCovered: '98%',
  activeMerchants: '5+ Crore',
  annualTpv: '₹120+ Lakh Crore',
  topCategories: [
    { name: 'Peer-to-Peer (P2P UPI)', percentage: 46, color: '#5f259f' },
    { name: 'Merchant QR Payments (P2M)', percentage: 34, color: '#2ebbd1' },
    { name: 'Bill & Recharges (BBPS)', percentage: 12, color: '#ffd13b' },
    { name: 'Investments & Insurance', percentage: 8, color: '#ff6584' }
  ],
  regionalBreakdown: [
    { state: 'Maharashtra', volumeMillions: 1420, growthPercentage: 28 },
    { state: 'Karnataka', volumeMillions: 1180, growthPercentage: 32 },
    { state: 'Uttar Pradesh', volumeMillions: 1310, growthPercentage: 44 },
    { state: 'Tamil Nadu', volumeMillions: 980, growthPercentage: 24 },
    { state: 'Delhi NCR', volumeMillions: 910, growthPercentage: 21 },
    { state: 'Telangana', volumeMillions: 840, growthPercentage: 36 },
    { state: 'Gujarat', volumeMillions: 790, growthPercentage: 29 },
    { state: 'West Bengal', volumeMillions: 620, growthPercentage: 38 }
  ],
  quarterlyTrends: [
    { quarter: 'Q1 2024', transactionsBillion: 14.2 },
    { quarter: 'Q2 2024', transactionsBillion: 16.8 },
    { quarter: 'Q3 2024', transactionsBillion: 19.4 },
    { quarter: 'Q4 2024', transactionsBillion: 22.1 },
    { quarter: 'Q1 2025', transactionsBillion: 25.6 },
    { quarter: 'Q2 2025', transactionsBillion: 29.8 },
    { quarter: 'Q3 2025', transactionsBillion: 34.2 },
    { quarter: 'Q4 2025', transactionsBillion: 39.0 }
  ]
};

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB for seeding...');

    await Service.deleteMany({});
    await Service.insertMany(servicesData);
    console.log(`Seeded ${servicesData.length} PaisaGo services.`);

    await PulseStat.deleteMany({});
    await PulseStat.create(pulseData);
    console.log('Seeded PaisaGo Pulse statistics.');

    console.log('Seed completed successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
}

if (require.main === module) {
  seed();
}

module.exports = { servicesData, pulseData };
