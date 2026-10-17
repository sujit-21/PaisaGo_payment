const mongoose = require('mongoose');

const merchantLeadSchema = new mongoose.Schema({
  businessName: { type: String, required: true },
  contactPerson: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  city: { type: String, required: true },
  solutionInterest: {
    type: String,
    enum: ['Payment Gateway', 'SmartSpeaker', 'Smart POD', 'EDC Machine', 'Payment Links', 'Merchant Lending', 'PaisaGo Ads'],
    default: 'SmartSpeaker'
  },
  monthlyVolume: { type: String, default: 'Below ₹1 Lakh' },
  status: { type: String, default: 'NEW' }
}, { timestamps: true });

module.exports = mongoose.model('MerchantLead', merchantLeadSchema);
