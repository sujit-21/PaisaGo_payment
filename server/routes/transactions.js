const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// Generate simulated UPI reference number & transaction ID
function generateTxnId() {
  const prefix = 'T26';
  const random = Math.floor(100000000000 + Math.random() * 900000000000);
  return `${prefix}${random}`;
}

function generateUpiRef() {
  return Math.floor(100000000000 + Math.random() * 900000000000).toString();
}

// POST process simulated transaction
router.post('/pay', async (req, res) => {
  try {
    const { serviceType, accountIdentifier, operator, amount, paymentMode, metadata } = req.body;

    if (!serviceType || !accountIdentifier || !amount) {
      return res.status(400).json({
        success: false,
        message: 'Missing required transaction fields (serviceType, accountIdentifier, amount)'
      });
    }

    const txnId = generateTxnId();
    const referenceId = generateUpiRef();

    const newTxn = {
      txnId,
      serviceType,
      accountIdentifier,
      operator: operator || '',
      amount: Number(amount),
      status: 'SUCCESS',
      paymentMode: paymentMode || 'PaisaGo UPI',
      referenceId,
      metadata: metadata || {},
      createdAt: new Date()
    };

    let savedTxn;
    try {
      savedTxn = await Transaction.create(newTxn);
    } catch (dbErr) {
      // If DB error, still return mock transaction object for demo
      savedTxn = newTxn;
    }

    res.json({
      success: true,
      message: 'Transaction processed successfully',
      data: savedTxn
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET transaction by ID
router.get('/:txnId', async (req, res) => {
  try {
    const txn = await Transaction.findOne({ txnId: req.params.txnId });
    if (!txn) {
      return res.status(404).json({ success: false, message: 'Transaction not found' });
    }
    res.json({ success: true, data: txn });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET recent simulated transactions for live ticker
router.get('/live/recent', async (req, res) => {
  try {
    const recent = await Transaction.find().sort({ createdAt: -1 }).limit(10);
    res.json({ success: true, data: recent });
  } catch (err) {
    res.json({ success: true, data: [] });
  }
});

module.exports = router;
