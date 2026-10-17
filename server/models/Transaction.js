const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  txnId: { type: String, required: true, unique: true },
  serviceType: { type: String, required: true },
  accountIdentifier: { type: String, required: true },
  operator: { type: String, default: '' },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['SUCCESS', 'PROCESSING', 'FAILED'], default: 'SUCCESS' },
  paymentMode: { type: String, default: 'UPI' },
  referenceId: { type: String, required: true },
  metadata: { type: Object, default: {} }
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionSchema);
