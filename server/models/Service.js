const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  category: { type: String, required: true }, // 'recharge', 'utility', 'financial', 'travel'
  icon: { type: String, required: true },
  badge: { type: String, default: '' },
  description: { type: String, default: '' },
  fields: [
    {
      name: { type: String, required: true },
      label: { type: String, required: true },
      type: { type: String, default: 'text' },
      placeholder: { type: String, default: '' },
      options: [String]
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);
