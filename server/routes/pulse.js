const express = require('express');
const router = express.Router();
const PulseStat = require('../models/PulseStat');
const { pulseData } = require('../seed');

// GET PaisaGo Pulse metrics
router.get('/metrics', async (req, res) => {
  try {
    let stat = await PulseStat.findOne().sort({ createdAt: -1 });
    if (!stat) {
      stat = pulseData;
    }
    res.json({ success: true, data: stat });
  } catch (err) {
    res.json({ success: true, data: pulseData });
  }
});

// GET simulated live transaction pulse (real-time stream of cities & UPI payments)
router.get('/live-stream', (req, res) => {
  const cities = ['Mumbai', 'Bengaluru', 'Delhi NCR', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Indore', 'Patna', 'Kochi', 'Chandigarh'];
  const categories = ['Grocery Store', 'Pharmacy', 'Petrol Pump', 'Coffee Shop', 'Electronics', 'Restaurant', 'Supermarket', 'Metro Ticket'];

  const liveEvents = Array.from({ length: 6 }, (_, i) => ({
    id: 'evt_' + (Date.now() - i * 3200),
    city: cities[Math.floor(Math.random() * cities.length)],
    category: categories[Math.floor(Math.random() * categories.length)],
    amount: Math.floor(Math.random() * 2500) + 40,
    time: `${i * 3 + 1}s ago`,
    type: Math.random() > 0.4 ? 'SmartSpeaker QR' : 'UPI Instant'
  }));

  res.json({ success: true, data: liveEvents });
});

module.exports = router;
