const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const servicesRoute = require('./routes/services');
const transactionsRoute = require('./routes/transactions');
const leadsRoute = require('./routes/leads');
const pulseRoute = require('./routes/pulse');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/paisago';

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/services', servicesRoute);
app.use('/api/transactions', transactionsRoute);
app.use('/api/leads', leadsRoute);
app.use('/api/pulse', pulseRoute);

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ONLINE',
    service: 'PaisaGo MERN API',
    database: mongoose.connection.readyState === 1 ? 'CONNECTED' : 'DISCONNECTED / IN-MEMORY FALLBACK',
    timestamp: new Date().toISOString()
  });
});

// Connect to MongoDB & Start Server
async function startServer() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected to MongoDB successfully.');
  } catch (err) {
    console.warn('⚠️ MongoDB connection warning (will use resilient fallback):', err.message);
  }

  const server = app.listen(PORT, () => {
    console.log(`🚀 PaisaGo Backend Server running on port ${PORT}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`⚠️ Port ${PORT} is already in use by another process.`);
      console.log(`💡 You can either free port ${PORT} or change the PORT in .env.`);
      process.exit(1);
    } else {
      console.error('Server error:', err);
      process.exit(1);
    }
  });
}

startServer();
