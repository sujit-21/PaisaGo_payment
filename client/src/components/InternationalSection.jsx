import React, { useState } from 'react';
import {
  Globe,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  QrCode,
  Sparkles,
  Plane,
  ChevronRight,
  MapPin
} from 'lucide-react';

export default function InternationalSection({ onActivateInternational }) {
  const [selectedCountry, setSelectedCountry] = useState('AE');

  const destinations = [
    {
      code: 'AE',
      name: 'United Arab Emirates',
      city: 'Dubai',
      flag: '🇦🇪',
      currency: 'AED',
      rate: 22.65,
      route: 'DEL ✈ DXB',
      sampleMerchant: 'Dubai Duty Free, Terminal 3',
      sampleAmount: '150.00',
      sampleInr: '3,397.50',
      network: 'Neopay & Mashreq Bank',
      whereToUse: 'Dubai Mall, Burj Khalifa, Lulu Hypermarket, taxis and retail stores nationwide',
      mapPos: { x: 210, y: 130 },
      curveControl: '310, 70'
    },
    {
      code: 'SG',
      name: 'Singapore',
      city: 'Singapore City',
      flag: '🇸🇬',
      currency: 'SGD',
      rate: 63.40,
      route: 'DEL ✈ SIN',
      sampleMerchant: 'Changi Jewel Food Hall',
      sampleAmount: '24.50',
      sampleInr: '1,553.30',
      network: 'NETS QR Network',
      whereToUse: 'Hawker centres, MRT stations, Orchard Road shopping malls and Changi Airport',
      mapPos: { x: 680, y: 210 },
      curveControl: '560, 130'
    },
    {
      code: 'NP',
      name: 'Nepal',
      city: 'Kathmandu',
      flag: '🇳🇵',
      currency: 'NPR',
      rate: 0.625,
      route: 'DEL ✈ KTM',
      sampleMerchant: 'Thamel Handicrafts, Kathmandu',
      sampleAmount: '1,800.00',
      sampleInr: '1,125.00',
      network: 'Fonepay Network',
      whereToUse: 'Supermarkets, hotels, restaurants, pharmacies and local shops across Nepal',
      mapPos: { x: 480, y: 75 },
      curveControl: '445, 45'
    },
    {
      code: 'LK',
      name: 'Sri Lanka',
      city: 'Colombo',
      flag: '🇱🇰',
      currency: 'LKR',
      rate: 0.28,
      route: 'DEL ✈ CMB',
      sampleMerchant: 'Colombo City Centre Retail',
      sampleAmount: '4,500.00',
      sampleInr: '1,260.00',
      network: 'LankaQR System',
      whereToUse: 'Supermarkets, department stores, hotels and restaurants across Sri Lanka',
      mapPos: { x: 430, y: 245 },
      curveControl: '425, 195'
    },
    {
      code: 'BT',
      name: 'Bhutan',
      city: 'Thimphu',
      flag: '🇧🇹',
      currency: 'BTN',
      rate: 1.0,
      route: 'DEL ✈ PBH',
      sampleMerchant: 'Thimphu Heritage Cafe',
      sampleAmount: '650.00',
      sampleInr: '650.00',
      network: 'Royal Monetary Authority (RMA)',
      whereToUse: 'Hotels, souvenir shops, supermarkets and local cafes in Thimphu and Paro',
      mapPos: { x: 550, y: 85 },
      curveControl: '485, 55'
    },
    {
      code: 'MU',
      name: 'Mauritius',
      city: 'Port Louis',
      flag: '🇲🇺',
      currency: 'MUR',
      rate: 1.84,
      route: 'DEL ✈ MRU',
      sampleMerchant: 'Grand Baie Beach Resort',
      sampleAmount: '820.00',
      sampleInr: '1,508.80',
      network: 'Bank of Mauritius (MauCAS)',
      whereToUse: 'Beachfront resorts, tourist hubs, duty-free stores and local supermarkets',
      mapPos: { x: 270, y: 250 },
      curveControl: '330, 195'
    }
  ];

  const current = destinations.find(d => d.code === selectedCountry) || destinations[0];

  return (
    <section id="international" style={{ padding: '75px 0', backgroundColor: '#ffffff', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 36px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#ecfdf5',
              color: '#059669',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              marginBottom: '12px',
              boxShadow: '0 2px 8px rgba(5, 150, 105, 0.1)'
            }}
          >
            <Globe size={14} />
            <span>PAISAGO UPI INTERNATIONAL</span>
          </div>

          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', color: '#0b132b', fontWeight: 800, letterSpacing: '-0.4px', marginBottom: '12px' }}>
            Travel Abroad. Pay in Rupees.
          </h2>

          <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
            Scan local merchant QR codes in UAE, Singapore, Nepal, Sri Lanka, Bhutan & Mauritius. Direct from your Indian bank account with real-time conversion and zero hidden markup.
          </p>
        </div>

        {/* =========================================================================
            CLEAN HUMAN-DESIGNED MAP ANIMATION CANVAS
            ========================================================================= */}
        <div
          style={{
            background: 'linear-gradient(135deg, #0b132b 0%, #111e38 50%, #0d1a33 100%)',
            borderRadius: '24px',
            border: '1.5px solid rgba(255, 255, 255, 0.1)',
            padding: '24px 28px',
            color: '#ffffff',
            marginBottom: '36px',
            boxShadow: '0 16px 40px rgba(11, 19, 43, 0.18)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Header inside Map */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="live-pulse-dot" />
              <span style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '0.04em', color: '#10b981', textTransform: 'uppercase' }}>
                LIVE UPI PAYMENT CORRIDORS
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'rgba(255,255,255,0.75)' }}>
              <span>Click on any country pin to preview</span>
            </div>
          </div>

          {/* Clean Map SVG Canvas */}
          <div style={{ width: '100%', height: '300px', position: 'relative' }}>
            <svg width="100%" height="100%" viewBox="0 0 850 300" fill="none" style={{ overflow: 'visible' }}>
              <defs>
                {/* Subtle Grid Pattern */}
                <pattern id="mapGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <circle cx="15" cy="15" r="1" fill="rgba(255,255,255,0.06)" />
                </pattern>

                <linearGradient id="activeFlightPath" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#00d2ff" />
                </linearGradient>
              </defs>

              {/* Background Dots Grid */}
              <rect width="100%" height="100%" fill="url(#mapGrid)" />

              {/* Subtle Stylized Continents Outlines (Clean Vector) */}
              {/* Middle East & Arabian Peninsula */}
              <path
                d="M 160 110 C 180 100 230 110 240 140 C 230 170 190 180 170 150 Z"
                fill="rgba(255,255,255,0.03)"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="1"
              />
              {/* Indian Subcontinent Silhouette */}
              <path
                d="M 370 70 C 440 60 480 80 500 110 C 480 160 440 230 420 250 C 400 230 360 160 370 70 Z"
                fill="rgba(255,255,255,0.04)"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1"
              />
              {/* Southeast Asia Coastline */}
              <path
                d="M 640 160 C 670 170 720 200 700 240 C 670 230 650 190 640 160 Z"
                fill="rgba(255,255,255,0.03)"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="1"
              />

              {/* Inactive & Active Flight Transfer Curves */}
              {destinations.map((d) => {
                const isSelected = d.code === selectedCountry;
                const pathD = `M 420 150 Q ${d.curveControl} ${d.mapPos.x} ${d.mapPos.y}`;

                return (
                  <g key={d.code}>
                    {/* Track Line */}
                    <path
                      d={pathD}
                      stroke={isSelected ? 'url(#activeFlightPath)' : 'rgba(255, 255, 255, 0.12)'}
                      strokeWidth={isSelected ? '2.5' : '1.2'}
                      strokeDasharray={isSelected ? 'none' : '4 6'}
                      style={{ transition: 'stroke 0.3s ease' }}
                    />

                    {/* Animated Gliding Airplane along Active Corridor */}
                    {isSelected && (
                      <g>
                        <path
                          d={pathD}
                          stroke="#10b981"
                          strokeWidth="2.5"
                          strokeDasharray="16 120"
                          style={{ animation: 'dashFly 2s linear infinite' }}
                        />
                        <circle r="4" fill="#00d2ff">
                          <animateMotion
                            dur="2.2s"
                            repeatCount="indefinite"
                            path={pathD}
                          />
                        </circle>
                      </g>
                    )}
                  </g>
                );
              })}

              {/* India Origin Hub (420, 150) */}
              <g transform="translate(420, 150)">
                <circle cx="0" cy="0" r="18" stroke="#10b981" strokeWidth="1.5" opacity="0.3" className="hub-ripple" />
                <circle cx="0" cy="0" r="10" fill="#0b132b" stroke="#10b981" strokeWidth="2.5" />
                <circle cx="0" cy="0" r="4" fill="#ffffff" />

                {/* Hub Label */}
                <rect x="-42" y="14" width="84" height="20" rx="10" fill="#0b132b" stroke="#10b981" strokeWidth="1" />
                <text x="0" y="28" fill="#ffffff" fontSize="10" fontWeight="800" textAnchor="middle">
                  🇮🇳 INDIA
                </text>
              </g>

              {/* Destination Pins on Map */}
              {destinations.map((d) => {
                const isSelected = d.code === selectedCountry;
                const { x, y } = d.mapPos;

                return (
                  <g
                    key={d.code}
                    transform={`translate(${x}, ${y})`}
                    onClick={() => setSelectedCountry(d.code)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Pulse Ripple when selected */}
                    {isSelected && (
                      <circle cx="0" cy="0" r="16" stroke="#00d2ff" strokeWidth="1.5" fill="rgba(0, 210, 255, 0.15)" />
                    )}

                    {/* Pin Circle */}
                    <circle
                      cx="0"
                      cy="0"
                      r={isSelected ? 9 : 7}
                      fill={isSelected ? '#00d2ff' : '#0b132b'}
                      stroke={isSelected ? '#ffffff' : '#10b981'}
                      strokeWidth="2"
                    />

                    {/* Tooltip Pill */}
                    <g transform={`translate(${x > 420 ? 12 : -12}, ${y > 150 ? 14 : -16})`}>
                      <rect
                        x={x > 420 ? 0 : -80}
                        y="-10"
                        width="80"
                        height="20"
                        rx="10"
                        fill={isSelected ? '#10b981' : '#1e293b'}
                        stroke={isSelected ? '#ffffff' : 'rgba(255,255,255,0.2)'}
                        strokeWidth="1"
                      />
                      <text
                        x={x > 420 ? 40 : -40}
                        y="4"
                        fill="#ffffff"
                        fontSize="10"
                        fontWeight="700"
                        textAnchor="middle"
                      >
                        {d.flag} {d.name.split(' ')[0]}
                      </text>
                    </g>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Quick Active Flight Corridor Strip */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '14px',
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              fontSize: '13px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Plane size={15} color="#10b981" />
              <span>Active Corridor: <strong style={{ color: '#ffffff' }}>India to {current.name}</strong> ({current.route})</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ color: '#00d2ff', fontWeight: 700 }}>1 {current.currency} = ₹{current.rate} INR</span>
              <span style={{ backgroundColor: '#10b981', color: '#0b132b', padding: '2px 8px', borderRadius: '10px', fontSize: '11px', fontWeight: 800 }}>
                0% MARKUP
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            HUMAN-CENTERED PAYMENT PREVIEW + BENEFITS (CLEAN & PRACTICAL)
            ========================================================================= */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            marginBottom: '40px'
          }}
        >
          {/* Card 1: Live Payment Screen Preview */}
          <div
            style={{
              backgroundColor: '#f8fafc',
              border: '1.5px solid #e2e8f0',
              borderRadius: '24px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '20px',
              boxShadow: '0 6px 24px rgba(0,0,0,0.03)'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                  Country Selector
                </span>
                <span style={{ fontSize: '11.5px', color: '#059669', fontWeight: 700 }}>
                  Live Forex Conversion
                </span>
              </div>

              {/* Country Selector Tabs */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                {destinations.map((d) => {
                  const isSelected = selectedCountry === d.code;
                  return (
                    <button
                      key={d.code}
                      onClick={() => setSelectedCountry(d.code)}
                      className="country-tab-btn"
                      style={{
                        padding: '8px 14px',
                        borderRadius: '12px',
                        fontSize: '13px',
                        fontWeight: 700,
                        backgroundColor: isSelected ? '#0b132b' : '#ffffff',
                        color: isSelected ? '#ffffff' : '#334155',
                        border: '1px solid ' + (isSelected ? '#0b132b' : '#cbd5e1'),
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        cursor: 'pointer',
                        transform: isSelected ? 'scale(1.03)' : 'scale(1)',
                        boxShadow: isSelected ? '0 4px 12px rgba(11, 19, 43, 0.2)' : 'none'
                      }}
                    >
                      <span style={{ fontSize: '16px' }}>{d.flag}</span>
                      <span>{d.code}</span>
                    </button>
                  );
                })}
              </div>

              {/* Realistic Simulated UPI Screen with FadeSlide Animation */}
              <div
                key={current.code}
                className="payment-card-anim"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '18px',
                  padding: '20px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600 }}>MERCHANT AT CHECKOUT</div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#0b132b' }}>{current.sampleMerchant}</div>
                    <div style={{ fontSize: '11.5px', color: '#059669', fontWeight: 600, marginTop: '2px' }}>
                      Partner: {current.network}
                    </div>
                  </div>
                  <span className="shimmer-badge" style={{ fontSize: '11px', fontWeight: 800, padding: '4px 10px', borderRadius: '8px' }}>
                    0% Forex Markup
                  </span>
                </div>

                <div style={{ borderTop: '1px dashed #e2e8f0', paddingTop: '12px', marginBottom: '14px' }}>
                  <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600 }}>AMOUNT IN LOCAL CURRENCY</div>
                  <div style={{ fontSize: '24px', fontWeight: 800, color: '#0b132b', margin: '2px 0 6px' }}>
                    {current.sampleAmount} {current.currency}
                  </div>
                  <div style={{ fontSize: '13px', color: '#64748b' }}>
                    Debited from Bank: <strong style={{ color: '#059669' }}>₹{current.sampleInr} INR</strong>
                    <span style={{ fontSize: '11px', color: '#94a3b8', marginLeft: '6px' }}>(1 {current.currency} = ₹{current.rate})</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#166534', backgroundColor: '#f0fdf4', padding: '8px 12px', borderRadius: '10px' }}>
                  <CheckCircle2 size={15} color="#16a34a" />
                  <span>Direct debit from your regular Indian savings account</span>
                </div>
              </div>
            </div>

            <button
              onClick={onActivateInternational}
              className="action-btn-hover"
              style={{
                backgroundColor: '#059669',
                color: '#ffffff',
                border: 'none',
                padding: '13px 20px',
                borderRadius: '14px',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(5, 150, 105, 0.25)'
              }}
            >
              <span>Activate UPI for {current.name}</span>
              <ArrowRight size={16} className="btn-arrow" />
            </button>
          </div>

          {/* Card 2: 3 Simple Human Benefits */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1.5px solid #e2e8f0',
              borderRadius: '24px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '20px',
              boxShadow: '0 6px 24px rgba(0,0,0,0.03)'
            }}
          >
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#059669', textTransform: 'uppercase', marginBottom: '8px' }}>
                WHY USE PAISAGO ABROAD
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0b132b', margin: '0 0 20px' }}>
                Built to Save Travelers Money & Hassle
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div className="benefit-item-card">
                  <div className="benefit-icon-box">
                    <CreditCard size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14.5px', fontWeight: 700, color: '#0b132b', margin: '0 0 3px' }}>
                      No Need for a Forex Card
                    </h4>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: 1.45 }}>
                      Skip visiting currency exchange kiosks or loading expensive prepaid travel cards. Use your existing bank account directly.
                    </p>
                  </div>
                </div>

                <div className="benefit-item-card">
                  <div className="benefit-icon-box">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14.5px', fontWeight: 700, color: '#0b132b', margin: '0 0 3px' }}>
                      Zero Hidden Markup (Save 3.5%)
                    </h4>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: 1.45 }}>
                      Traditional credit cards charge a 3.5% markup plus 18% GST. PaisaGo provides transparent real-time bank conversion with ₹0 markup.
                    </p>
                  </div>
                </div>

                <div className="benefit-item-card">
                  <div className="benefit-icon-box">
                    <QrCode size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14.5px', fontWeight: 700, color: '#0b132b', margin: '0 0 3px' }}>
                      Scan Any Local Merchant QR
                    </h4>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: 1.45 }}>
                      Just point your phone camera and scan local merchant QR codes at checkout counters, restaurants, shopping malls, and taxis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '14px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#64748b' }}>
              <ShieldCheck size={16} color="#059669" />
              <span>Approved by National Payments Corporation of India (NPCI) & RBI guidelines.</span>
            </div>
          </div>
        </div>

        {/* Supported Destinations Grid */}
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0b132b', marginBottom: '16px' }}>
            Where You Can Pay With PaisaGo
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '14px'
            }}
          >
            {destinations.map((d) => {
              const isSelected = selectedCountry === d.code;
              return (
                <div
                  key={d.code}
                  onClick={() => setSelectedCountry(d.code)}
                  className="dest-card-hover"
                  style={{
                    backgroundColor: '#ffffff',
                    border: isSelected ? '1.5px solid #059669' : '1px solid #e2e8f0',
                    borderRadius: '16px',
                    padding: '16px',
                    cursor: 'pointer',
                    boxShadow: isSelected ? '0 8px 20px rgba(5, 150, 105, 0.12)' : '0 1px 3px rgba(0,0,0,0.03)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span className="dest-flag" style={{ fontSize: '24px' }}>{d.flag}</span>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 700, color: '#0b132b' }}>{d.name}</div>
                        <div style={{ fontSize: '11px', color: '#059669', fontWeight: 600 }}>{d.network}</div>
                      </div>
                    </div>
                    <ChevronRight size={16} color={isSelected ? '#059669' : '#cbd5e1'} className="dest-arrow" />
                  </div>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0, lineHeight: 1.4 }}>
                    {d.whereToUse}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3 Simple Activation Steps (Clear & Human) */}
        <div
          style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            padding: '24px 30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >
          <div>
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
              QUICK ACTIVATION IN PAISAGO APP
            </div>
            <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#0b132b', margin: '0 0 6px' }}>
              How to enable UPI International before your trip:
            </h4>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '13px', color: '#475569', fontWeight: 600 }}>
              <span>1. Open PaisaGo App & tap Profile</span>
              <span style={{ color: '#059669' }}>→</span>
              <span>2. Select 'UPI International'</span>
              <span style={{ color: '#059669' }}>→</span>
              <span>3. Set your trip dates & enter UPI PIN</span>
            </div>
          </div>

          <button
            onClick={onActivateInternational}
            className="action-btn-hover"
            style={{
              backgroundColor: '#0b132b',
              color: '#ffffff',
              border: 'none',
              padding: '11px 24px',
              borderRadius: '24px',
              fontSize: '13.5px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>Scan QR to Activate</span>
            <ArrowRight size={14} className="btn-arrow" />
          </button>
        </div>
      </div>

      {/* Modern, Tasteful CSS Animations */}
      <style>{`
        /* Payment details fade-in on country switch */
        .payment-card-anim {
          animation: cardPopIn 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes cardPopIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Flight dash trajectory */
        @keyframes dashFly {
          to {
            stroke-dashoffset: -136;
          }
        }

        /* Hub ripple */
        .hub-ripple {
          animation: hubSonar 2.5s infinite;
        }
        @keyframes hubSonar {
          0% {
            r: 10;
            opacity: 0.8;
          }
          100% {
            r: 28;
            opacity: 0;
          }
        }

        /* Shimmer on 0% Forex badge */
        .shimmer-badge {
          background: linear-gradient(90deg, #ecfdf5 0%, #d1fae5 50%, #ecfdf5 100%);
          background-size: 200% 100%;
          animation: shimmerSweep 3s infinite;
          color: #059669;
        }
        @keyframes shimmerSweep {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        /* Live dot pulse */
        .live-pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #10b981;
          display: inline-block;
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          animation: livePulse 2s infinite;
        }
        @keyframes livePulse {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
          }
        }

        /* Benefit item card hover */
        .benefit-item-card {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          padding: 10px;
          border-radius: 14px;
          transition: all 0.22s ease;
        }
        .benefit-item-card:hover {
          background-color: #f0fdf4;
          transform: translateX(4px);
        }
        .benefit-icon-box {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background-color: #ecfdf5;
          color: #059669;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }
        .benefit-item-card:hover .benefit-icon-box {
          transform: scale(1.1);
        }

        /* Destination card hover */
        .dest-card-hover {
          transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .dest-card-hover:hover {
          border-color: #059669 !important;
          transform: translateY(-4px);
          box-shadow: 0 10px 22px rgba(5, 150, 105, 0.12) !important;
        }
        .dest-card-hover:hover .dest-arrow {
          transform: translateX(3px);
          color: #059669 !important;
        }
        .dest-card-hover:hover .dest-flag {
          display: inline-block;
          transform: scale(1.15);
          transition: transform 0.2s ease;
        }

        /* Action button hover */
        .action-btn-hover {
          transition: all 0.2s ease;
        }
        .action-btn-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(5, 150, 105, 0.35) !important;
        }
        .action-btn-hover:hover .btn-arrow {
          transform: translateX(3px);
          transition: transform 0.2s ease;
        }
      `}</style>
    </section>
  );
}
