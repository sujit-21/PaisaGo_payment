const mongoose = require('mongoose');

const pulseStatSchema = new mongoose.Schema({
  registeredUsers: { type: String, default: '73+ Crore' },
  postalCodesCovered: { type: String, default: '98%' },
  activeMerchants: { type: String, default: '5+ Crore' },
  annualTpv: { type: String, default: '₹120+ Lakh Crore' },
  topCategories: [
    { name: String, percentage: Number, color: String }
  ],
  regionalBreakdown: [
    { state: String, volumeMillions: Number, growthPercentage: Number }
  ],
  quarterlyTrends: [
    { quarter: String, transactionsBillion: Number }
  ]
}, { timestamps: true });

module.exports = mongoose.model('PulseStat', pulseStatSchema);
