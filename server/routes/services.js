const express = require('express');
const router = express.Router();
const Service = require('../models/Service');
const { servicesData } = require('../seed');

// GET all services with fallback to seed data if db not populated
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    let services = await Service.find(filter);
    if (!services || services.length === 0) {
      services = category ? servicesData.filter(s => s.category === category) : servicesData;
    }
    res.json({ success: true, count: services.length, data: services });
  } catch (err) {
    res.json({ success: true, count: servicesData.length, data: servicesData });
  }
});

// GET single service by id
router.get('/:id', async (req, res) => {
  try {
    let service = await Service.findOne({ id: req.params.id });
    if (!service) {
      service = servicesData.find(s => s.id === req.params.id);
    }
    if (!service) {
      return res.status(404).json({ success: false, message: 'Service not found' });
    }
    res.json({ success: true, data: service });
  } catch (err) {
    const service = servicesData.find(s => s.id === req.params.id);
    if (service) return res.json({ success: true, data: service });
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
