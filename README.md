# PaisaGo Web Application - Full-Stack MERN

An authentic, production-grade application inspired by the official [PaisaGo Website](https://www.paisago.com/) built using the **MERN (MongoDB, Express, React, Node.js)** stack.

---

## 🌟 Key Features

### 1. Authentic PaisaGo Design System & Branding
- **Color Palette:** Obsidian Midnight Navy (`#0b132b`), Electric Emerald Green (`#059669`), Mint (`#10b981`), and High-Tech Cyan (`#00d2ff`).
- **Typography:** Modern Google Fonts (`Inter` & `Outfit`).
- **Interactive Header:** PaisaGo SVG logo (with Hindi **पै** emblem), Company dropdown, Solutions Mega-Menu ("For Businesses" & "For Consumers"), and Download App trigger.

### 2. Hero Promotional Carousel (7 Authentic Banners)
- **PaisaGo Pulse:** "The Beat of Progress — Every transaction tells a story."
- **Paperless Loans:** "Get upto ₹10 Lakh Personal Loan with zero paperwork."
- **Merchant POS & SmartSpeaker:** "One Device, One App, Any Payment Method."
- **0% Payment Aggregator:** "Accept payments for your online business at zero cost."
- **CRISP Mutual Funds:** "Top picks shortlisted from 1000+ mutual funds."
- **Daily Mutual Fund SIP:** Starting from ₹10/day.
- **Co-Branded Credit Cards:** "10% Reward Points* on PaisaGo spends."

### 3. Core Financial Verticals (Interactive Tabs)
- **Payments:** UPI Lite, Credit Line on UPI, RuPay CC on UPI, Split Expenses, Gift Cards, UPI Circle.
- **Investments:** 24K Pure Digital Gold, Monthly Gold SIP, Mutual Funds, NPS.
- **Insurance:** Bike Insurance, Car Insurance, Health Insurance, Travel Insurance.
- **Lending:** Personal Loans up to ₹10 Lakh, Merchant Credit Lines, Free Credit Score.

### 4. Interactive Utility Bill & Recharge Hub (BBPS)
- 12 real services: Mobile Recharge, FASTag, DTH, Electricity, Credit Card, Rent, Gas, Water, Broadband, Book Cylinder, Loan EMI, Municipal Tax.
- **Live MERN Payment Simulator:** Enter mobile or account details, select plans, and process simulated UPI transactions with backend MongoDB persistence.
- **Digital Receipt:** Displays authentic green success badge, Txn ID (`T26...`), 12-digit UPI reference ID, and payment timestamp.

### 5. Smart Devices & Soundbox Voice Alert Simulator
- **SmartSpeaker 2nd Gen:** Includes working voice alert audio synthesizer ("PaisaGo par ₹500 prapt hue!") in Hindi, English, Bengali, and Tamil.
- **SMART POD, QR Standee & POS EDC Machine** showcases.
- **Merchant Onboarding Form:** Submits shopkeeper partner leads to MongoDB.

### 6. PaisaGo Pulse Live Stream
- 73+ Crore Registered Users
- 98% Postal Codes Covered
- 5+ Crore Merchants
- Real-time animated ticker showing simulated live UPI transactions across Indian cities (Bengaluru, Mumbai, Delhi NCR, Hyderabad, Pune, etc.).

### 7. PaisaGo International
- Global UPI acceptance in UAE, Singapore, Nepal, Sri Lanka, Bhutan, and Mauritius.

---

## 🛠️ Tech Stack Architecture

- **Frontend:** React 19, Vite, Lucide Icons, Vanilla CSS Design System.
- **Backend:** Node.js, Express.js, Mongoose ODM, CORS, Dotenv.
- **Database:** MongoDB (Running locally on `mongodb://127.0.0.1:27017/paisago`).

---

## 🚀 How to Run Locally

### 1. Start MongoDB
Ensure MongoDB is running locally:
```bash
net start MongoDB
```

### 2. Start Backend Server
```bash
cd server
npm install
npm run seed     # Seeds 12 services and Pulse metrics
npm start        # Runs on http://localhost:5000
```

### 3. Start Frontend Client
```bash
cd client
npm install
npm run dev      # Runs on http://127.0.0.1:3000
```
