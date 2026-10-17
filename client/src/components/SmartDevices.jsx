import React, { useState } from 'react';
import { Volume2, Check, ArrowRight, Store, Radio, X, Sparkles, Shield, Wifi, BatteryCharging } from 'lucide-react';

export default function SmartDevices({ onOrderDevice }) {
  const [playing, setPlaying] = useState(false);
  const [selectedLang, setSelectedLang] = useState('hi');
  const [activeModalDevice, setActiveModalDevice] = useState(null);

  const devices = [
    {
      id: 'smart-pod',
      name: 'SMART POD',
      badge: 'All-in-One NFC + QR',
      subtitle: 'Dynamic QR with Tap to Pay Card Machine',
      desc: 'India’s first smart display standee with built-in NFC tap-and-pay antenna, dynamic UPI QR display, and EMV chip card slot for complete merchant checkout.',
      specs: [
        'Supports Tap to Pay, RuPay, Visa, Mastercard',
        'Dynamic instant bill amount QR generation',
        'Built-in 4G SIM with multi-operator roaming',
        'Over 3 days continuous backup on single charge'
      ],
      price: '₹0 Setup Fee (Introductory Offer)'
    },
    {
      id: 'smartspeaker-2',
      name: 'SmartSpeaker 2ⁿᵈ Gen',
      badge: 'Bestseller',
      subtitle: 'Ultra-Loud 110dB Audio Alerts with QR Display',
      desc: 'The next generation audio confirmation device engineered for bustling Indian bazaars. Features instant vocal feedback in 21 Indian regional languages and dual high-gain antennas.',
      specs: [
        'Instant sub-second payment voice confirmation',
        'Clear voice in 21 Indian languages & dialects',
        '110dB dual high-efficiency sound chamber',
        'Extended 5-day lithium polymer standby battery'
      ],
      price: '₹125/month rental with instant setup'
    },
    {
      id: 'edc-machine',
      name: 'EDC Machine',
      badge: 'Enterprise POS',
      subtitle: 'Smart Handheld Android POS Terminal',
      desc: 'Sleek, ergonomic handheld card swiping terminal running custom Android OS with high-speed thermal receipt printer, barcode reader, and instant settlement to any bank account.',
      specs: [
        'Instant print thermal receipt under 2 seconds',
        'Accepts Debit, Credit, Amex & Sodexo cards',
        'Daily automatic zero-deduction settlement',
        'Full color 5.5" HD capacitive touchscreen'
      ],
      price: 'Zero deposit with custom transaction slabs'
    },
    {
      id: 'qr-standee',
      name: 'PaisaGo QR Standee',
      badge: 'Zero Maintenance',
      subtitle: 'Weather-Proof High Durability Standee',
      desc: 'High-grade polycarbonate standee with UV-resistant laser print that withstands direct sunlight, monsoons, and extreme weather without fading or peeling.',
      specs: [
        '100% interoperable with all UPI apps across India',
        'Anti-scratch, waterproof polymer surface',
        'Instant notification on Merchant App',
        'Custom merchant branding and shop name'
      ],
      price: 'Free delivery for all registered merchants'
    }
  ];

  const playVoiceSample = (lang = 'hi') => {
    setPlaying(true);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      let text = 'PaisaGo par ₹500 prapt hue!';
      if (lang === 'en') text = '₹500 received on PaisaGo!';
      if (lang === 'bn') text = 'PaisaGo-te ₹500 joma hoyechhe!';
      if (lang === 'ta') text = 'PaisaGo-yil ₹500 perappattathu!';

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.pitch = 1.05;
      utterance.onend = () => setPlaying(false);
      utterance.onerror = () => setPlaying(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setPlaying(false), 2400);
    }
  };

  // Generate 42 isometric golden token discs in perspective orbit
  const tokenCoins = [
    { x: 18, y: 35, s: 0.9, o: 0.65 }, { x: 24, y: 30, s: 0.85, o: 0.7 }, { x: 31, y: 26, s: 0.8, o: 0.6 },
    { x: 38, y: 23, s: 0.75, o: 0.5 }, { x: 50, y: 20, s: 0.7, o: 0.45 }, { x: 62, y: 23, s: 0.75, o: 0.5 },
    { x: 70, y: 26, s: 0.8, o: 0.6 }, { x: 76, y: 30, s: 0.85, o: 0.7 }, { x: 82, y: 36, s: 0.9, o: 0.65 },
    { x: 86, y: 44, s: 1.0, o: 0.8 }, { x: 88, y: 53, s: 1.05, o: 0.85 }, { x: 85, y: 63, s: 1.1, o: 0.9 },
    { x: 80, y: 72, s: 1.15, o: 0.95 }, { x: 73, y: 79, s: 1.2, o: 1.0 }, { x: 64, y: 84, s: 1.25, o: 1.0 },
    { x: 50, y: 86, s: 1.3, o: 1.0 }, { x: 36, y: 84, s: 1.25, o: 1.0 }, { x: 27, y: 79, s: 1.2, o: 0.95 },
    { x: 20, y: 72, s: 1.15, o: 0.9 }, { x: 15, y: 63, s: 1.1, o: 0.85 }, { x: 13, y: 53, s: 1.05, o: 0.8 },
    { x: 14, y: 44, s: 1.0, o: 0.75 },
    // Inner orbit ring
    { x: 28, y: 42, s: 0.85, o: 0.7 }, { x: 38, y: 35, s: 0.8, o: 0.6 }, { x: 50, y: 32, s: 0.75, o: 0.55 },
    { x: 62, y: 35, s: 0.8, o: 0.6 }, { x: 72, y: 42, s: 0.85, o: 0.7 }, { x: 76, y: 52, s: 0.95, o: 0.8 },
    { x: 72, y: 64, s: 1.05, o: 0.9 }, { x: 62, y: 72, s: 1.1, o: 0.95 }, { x: 38, y: 72, s: 1.1, o: 0.95 },
    { x: 28, y: 64, s: 1.05, o: 0.9 }, { x: 24, y: 52, s: 0.95, o: 0.8 }
  ];

  return (
    <section id="smart-devices" style={{ padding: '80px 0 90px', backgroundColor: '#ffffff', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'var(--pp-purple-light)', color: 'var(--pp-purple)', padding: '6px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '14px' }}>
            <Store size={16} />
            PAISAGO MERCHANT HARDWARE
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', fontWeight: 800, color: '#070d1e', marginBottom: '12px', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            PaisaGo QR and devices. Secure & reliable.
          </h2>
          <p style={{ fontSize: '16.5px', color: '#64748b', margin: 0 }}>
            Equipping more than 5 Crore offline shopkeepers and enterprises with real-time sound confirmations, smart touch POS, and secure tap-to-pay kiosks.
          </p>
        </div>

        {/* 3D Isometric Hardware Arena Showcase */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1080px',
            height: '620px',
            margin: '0 auto 60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            perspective: '1200px'
          }}
          className="isometric-hardware-arena"
        >
          {/* Isometric Golden Token Orbit Field */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none'
            }}
          >
            {tokenCoins.map((coin, index) => (
              <div
                key={index}
                style={{
                  position: 'absolute',
                  left: `${coin.x}%`,
                  top: `${coin.y}%`,
                  width: `${34 * coin.s}px`,
                  height: `${22 * coin.s}px`,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #fef08a 0%, #facc15 50%, #d97706 100%)',
                  boxShadow: '0 4px 10px rgba(217, 119, 6, 0.3)',
                  opacity: coin.o,
                  transform: 'translate(-50%, -50%) rotateX(60deg)',
                  animation: `floatToken 3s ease-in-out infinite alternate ${index * 0.1}s`
                }}
              />
            ))}
          </div>

          {/* Device 1: SMART POD (Left Front) */}
          <div
            style={{
              position: 'absolute',
              left: '14%',
              bottom: '12%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 10,
              transition: 'transform 0.3s ease'
            }}
            className="device-isometric-unit"
          >
            {/* 3D Rendered SMART POD Standee */}
            <div
              style={{
                width: '180px',
                height: '270px',
                backgroundColor: '#ffffff',
                border: '3px solid #059669',
                borderRadius: '24px',
                boxShadow: '-18px 25px 40px rgba(5, 150, 105,  0.22), 0 0 0 1px rgba(0,0,0,0.06)',
                transform: 'rotateY(16deg) rotateX(10deg) rotateZ(-4deg)',
                padding: '16px 14px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                background: 'linear-gradient(160deg, #ffffff 60%, #f8f5fd 100%)'
              }}
            >
              {/* PaisaGo Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#059669', color: '#fff', fontSize: '12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>पै</div>
                <span style={{ fontSize: '13px', fontWeight: 800, color: '#059669' }}>PaisaGo</span>
              </div>

              {/* NFC Wave Area */}
              <div style={{ textAlign: 'center', padding: '10px 0' }}>
                <svg width="68" height="68" viewBox="0 0 100 100" style={{ margin: '0 auto' }}>
                  <path d="M25 50 C25 36 36 25 50 25 C64 25 75 36 75 50 C75 64 64 75 50 75" stroke="#059669" strokeWidth="6" strokeLinecap="round" fill="none" />
                  <path d="M35 50 C35 42 42 35 50 35 C58 35 65 42 65 50 C65 58 58 65 50 65" stroke="#059669" strokeWidth="5" strokeLinecap="round" fill="none" />
                  <path d="M45 50 C45 47 47 45 50 45 C53 45 55 47 55 50" stroke="#059669" strokeWidth="4" strokeLinecap="round" fill="none" />
                </svg>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#0b132b', marginTop: '6px' }}>Cards Accepted</div>
                <div style={{ fontSize: '10px', color: '#64748b', fontWeight: 600 }}>Tap or Insert to Pay</div>
              </div>

              {/* Card Chip Slot */}
              <div style={{ width: '85%', height: '14px', backgroundColor: '#070d1e', borderRadius: '4px', margin: '0 auto', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.6)' }} />
            </div>

            {/* Interactive Plus Button */}
            <button
              onClick={() => setActiveModalDevice(devices[0])}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: '#0b132b',
                color: '#ffffff',
                border: '2.5px solid #ffffff',
                boxShadow: '0 6px 16px rgba(11, 19, 43,  0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px',
                fontWeight: 700,
                cursor: 'pointer',
                marginTop: '-18px',
                zIndex: 20,
                transition: 'transform 0.2s ease, background-color 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.15)'; e.currentTarget.style.backgroundColor = '#ffd13b'; e.currentTarget.style.color = '#0b132b'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.backgroundColor = '#0b132b'; e.currentTarget.style.color = '#ffffff'; }}
              title="View SMART POD details"
            >
              +
            </button>

            <div style={{ fontSize: '16px', fontWeight: 800, color: '#070d1e', marginTop: '10px' }}>
              SMART POD
            </div>
          </div>

          {/* Device 2: SmartSpeaker 2nd Gen (Top Center) */}
          <div
            style={{
              position: 'absolute',
              left: '42%',
              top: '8%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 8,
              transition: 'transform 0.3s ease'
            }}
            className="device-isometric-unit"
          >
            {/* 3D Cube Speaker */}
            <div
              style={{
                width: '160px',
                height: '145px',
                backgroundColor: '#059669',
                borderRadius: '20px',
                boxShadow: '-14px 20px 35px rgba(5, 150, 105,  0.3)',
                transform: 'rotateY(-14deg) rotateX(16deg) rotateZ(3deg)',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '3px solid #8b5cf6',
                background: 'linear-gradient(145deg, #047857 0%, #064e3b 100%)'
              }}
            >
              {/* Speaker Top Brand */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#ffffff' }}>PaisaGo</span>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e', boxShadow: '0 0 6px #22c55e' }} />
              </div>

              {/* QR Screen Display */}
              <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.2)' }}>
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <rect x="2" y="2" width="20" height="20" rx="3" fill="#059669" />
                  <rect x="5" y="5" width="14" height="14" rx="2" fill="#ffffff" />
                  <rect x="8" y="8" width="8" height="8" rx="1" fill="#059669" />

                  <rect x="38" y="2" width="20" height="20" rx="3" fill="#059669" />
                  <rect x="41" y="5" width="14" height="14" rx="2" fill="#ffffff" />
                  <rect x="44" y="8" width="8" height="8" rx="1" fill="#059669" />

                  <rect x="2" y="38" width="20" height="20" rx="3" fill="#059669" />
                  <rect x="5" y="41" width="14" height="14" rx="2" fill="#ffffff" />
                  <rect x="8" y="44" width="8" height="8" rx="1" fill="#059669" />

                  <rect x="25" y="10" width="6" height="6" fill="#059669" />
                  <rect x="25" y="26" width="10" height="10" fill="#059669" />
                  <rect x="40" y="26" width="6" height="6" fill="#059669" />
                  <rect x="25" y="44" width="8" height="8" fill="#059669" />
                  <rect x="40" y="44" width="8" height="8" fill="#059669" />
                </svg>
              </div>

              {/* Sound grill dots */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '4px' }}>
                {[...Array(6)].map((_, i) => (
                  <div key={i} style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.4)' }} />
                ))}
              </div>
            </div>

            {/* Interactive Plus Button */}
            <button
              onClick={() => setActiveModalDevice(devices[1])}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: '#0b132b',
                color: '#ffffff',
                border: '2.5px solid #ffffff',
                boxShadow: '0 6px 16px rgba(11, 19, 43,  0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px',
                fontWeight: 700,
                cursor: 'pointer',
                marginTop: '-16px',
                zIndex: 20,
                transition: 'transform 0.2s ease, background-color 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.15)'; e.currentTarget.style.backgroundColor = '#ffd13b'; e.currentTarget.style.color = '#0b132b'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.backgroundColor = '#0b132b'; e.currentTarget.style.color = '#ffffff'; }}
              title="View SmartSpeaker 2nd Gen details"
            >
              +
            </button>

            <div style={{ fontSize: '16px', fontWeight: 800, color: '#070d1e', marginTop: '10px' }}>
              SmartSpeaker 2ⁿᵈ Gen
            </div>
          </div>

          {/* Device 3: EDC Machine (Right Center) */}
          <div
            style={{
              position: 'absolute',
              right: '18%',
              bottom: '18%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 10,
              transition: 'transform 0.3s ease'
            }}
            className="device-isometric-unit"
          >
            {/* 3D Ergonomic EDC Terminal */}
            <div
              style={{
                width: '180px',
                height: '240px',
                backgroundColor: '#e2e8f0',
                borderRadius: '26px',
                boxShadow: '18px 25px 40px rgba(0, 0, 0, 0.22)',
                transform: 'rotateY(-20deg) rotateX(16deg) rotateZ(6deg)',
                padding: '14px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '3px solid #cbd5e1',
                background: 'linear-gradient(150deg, #f1f5f9 0%, #cbd5e1 100%)'
              }}
            >
              {/* Screen Display */}
              <div
                style={{
                  backgroundColor: '#1e293b',
                  borderRadius: '16px',
                  height: '130px',
                  padding: '12px 10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.5)',
                  background: 'linear-gradient(135deg, #fed7aa 0%, #f97316 50%, #431407 100%)'
                }}
              >
                {/* Checkmark in circle */}
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
                  <Check size={28} strokeWidth={3.5} />
                </div>
                <span style={{ fontSize: '13px', fontWeight: 800, marginTop: '8px', color: '#ffffff', textShadow: '0 1px 3px rgba(0,0,0,0.6)' }}>Payment</span>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.95)' }}>Successful</span>
              </div>

              {/* Physical Keypad Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px', padding: '4px 0' }}>
                {[1, 2, 3, 4, 5, 6].map((k) => (
                  <div key={k} style={{ height: '10px', backgroundColor: '#94a3b8', borderRadius: '2px' }} />
                ))}
              </div>
            </div>

            {/* Interactive Plus Button */}
            <button
              onClick={() => setActiveModalDevice(devices[2])}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: '#0b132b',
                color: '#ffffff',
                border: '2.5px solid #ffffff',
                boxShadow: '0 6px 16px rgba(11, 19, 43,  0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px',
                fontWeight: 700,
                cursor: 'pointer',
                marginTop: '-18px',
                zIndex: 20,
                transition: 'transform 0.2s ease, background-color 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.15)'; e.currentTarget.style.backgroundColor = '#ffd13b'; e.currentTarget.style.color = '#0b132b'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.backgroundColor = '#0b132b'; e.currentTarget.style.color = '#ffffff'; }}
              title="View EDC Machine details"
            >
              +
            </button>

            <div style={{ fontSize: '16px', fontWeight: 800, color: '#070d1e', marginTop: '10px' }}>
              EDC Machine
            </div>
          </div>

          {/* Device 4: PaisaGo QR Standee (Bottom Center) */}
          <div
            style={{
              position: 'absolute',
              left: '46%',
              bottom: '2%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 12,
              transition: 'transform 0.3s ease'
            }}
            className="device-isometric-unit"
          >
            {/* Isometric Tilted QR Standee */}
            <div
              style={{
                width: '140px',
                height: '170px',
                backgroundColor: '#ffffff',
                border: '2.5px solid #047857',
                borderRadius: '16px',
                boxShadow: '0 18px 30px rgba(5, 150, 105,  0.2)',
                transform: 'rotateX(24deg) rotateZ(-3deg)',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'linear-gradient(180deg, #047857 0%, #059669 30%, #ffffff 30.5%, #ffffff 100%)'
              }}
            >
              <div style={{ textAlign: 'center', color: '#ffffff', fontSize: '11px', fontWeight: 800, paddingBottom: '4px' }}>
                पै PaisaGo
              </div>

              <div style={{ padding: '6px', backgroundColor: '#ffffff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <rect x="2" y="2" width="18" height="18" rx="2" fill="#059669" />
                  <rect x="5" y="5" width="12" height="12" rx="1" fill="#ffffff" />
                  <rect x="8" y="8" width="6" height="6" fill="#059669" />

                  <rect x="40" y="2" width="18" height="18" rx="2" fill="#059669" />
                  <rect x="43" y="5" width="12" height="12" rx="1" fill="#ffffff" />
                  <rect x="46" y="8" width="6" height="6" fill="#059669" />

                  <rect x="2" y="40" width="18" height="18" rx="2" fill="#059669" />
                  <rect x="5" y="43" width="12" height="12" rx="1" fill="#ffffff" />
                  <rect x="8" y="46" width="6" height="6" fill="#059669" />

                  <circle cx="30" cy="30" r="7" fill="#059669" />
                  <text x="30" y="33" fontSize="8" fill="#ffffff" fontWeight="bold" textAnchor="middle">पै</text>
                </svg>
              </div>

              <div style={{ fontSize: '9px', textAlign: 'center', fontWeight: 700, color: '#0b132b' }}>
                Accepted Here
              </div>
            </div>

            {/* Interactive Plus Button */}
            <button
              onClick={() => setActiveModalDevice(devices[3])}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: '#0b132b',
                color: '#ffffff',
                border: '2.5px solid #ffffff',
                boxShadow: '0 6px 16px rgba(11, 19, 43,  0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px',
                fontWeight: 700,
                cursor: 'pointer',
                marginTop: '-16px',
                zIndex: 20,
                transition: 'transform 0.2s ease, background-color 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.15)'; e.currentTarget.style.backgroundColor = '#ffd13b'; e.currentTarget.style.color = '#0b132b'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.backgroundColor = '#0b132b'; e.currentTarget.style.color = '#ffffff'; }}
              title="View QR Standee details"
            >
              +
            </button>

            <div style={{ fontSize: '16px', fontWeight: 800, color: '#070d1e', marginTop: '10px' }}>
              PaisaGo QR Standee
            </div>
          </div>
        </div>

        {/* Interactive SoundBox Showcase with Live Audio Visualizer Animation */}
        <div
          style={{
            background: 'linear-gradient(135deg, #070d1e 0%, #064e3b 50%, #059669 100%)',
            borderRadius: '28px',
            padding: '40px 48px',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '30px',
            boxShadow: '0 25px 60px rgba(70, 27, 118, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}
          className="smartbox-showcase"
        >
          {/* Animated sound wave background rings */}
          {playing && (
            <>
              <div
                style={{
                  position: 'absolute',
                  left: '120px',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  border: '2px solid rgba(255, 209, 59, 0.6)',
                  animation: 'soundWaveOut 1.5s cubic-bezier(0.16, 1, 0.3, 1) infinite',
                  pointerEvents: 'none'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: '120px',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '260px',
                  height: '260px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(0, 186, 242, 0.5)',
                  animation: 'soundWaveOut 1.5s cubic-bezier(0.16, 1, 0.3, 1) infinite',
                  animationDelay: '0.4s',
                  pointerEvents: 'none'
                }}
              />
            </>
          )}

          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 800, color: '#ffd13b', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
              <Radio size={14} className={playing ? 'animate-pulse' : ''} />
              LIVE SMARTBOX AUDIO TESTER
            </div>
            <h3 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 800, marginTop: '2px', marginBottom: '10px' }}>
              Hear the iconic PaisaGo Soundbox in action
            </h3>
            <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', maxWidth: '540px', margin: 0, lineHeight: 1.5 }}>
              Instant voice alerts in 21 Indian languages so shopkeepers never miss a sale. Select language and click below to hear the voice.
            </p>

            {/* Active Equalizer Frequency Bars */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px', height: '40px', marginTop: '20px' }}>
              {[12, 28, 18, 36, 24, 40, 16, 32, 20, 38, 22, 34, 15, 26].map((h, i) => (
                <div
                  key={i}
                  style={{
                    width: '6px',
                    height: playing ? `${h}px` : '6px',
                    backgroundColor: i % 2 === 0 ? '#ffd13b' : '#00baf2',
                    borderRadius: '3px',
                    transition: 'height 0.15s ease',
                    animation: playing ? `audioBarMove 0.8s ease-in-out infinite alternate ${i * 0.08}s` : 'none'
                  }}
                />
              ))}
              <span style={{ fontSize: '12px', color: playing ? '#ffd13b' : 'rgba(255,255,255,0.6)', marginLeft: '10px', fontWeight: 600 }}>
                {playing ? 'Broadcasting Audio Alert...' : 'Idle (Ready)'}
              </span>
            </div>
          </div>

          {/* Controls & Tester Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <select
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value)}
              style={{
                padding: '12px 18px',
                borderRadius: '24px',
                border: '1.5px solid rgba(255,255,255,0.3)',
                backgroundColor: 'rgba(255,255,255,0.15)',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 700,
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="hi" style={{ color: '#000' }}>Hindi (हिंदी)</option>
              <option value="en" style={{ color: '#000' }}>English</option>
              <option value="bn" style={{ color: '#000' }}>Bengali (বাংলা)</option>
              <option value="ta" style={{ color: '#000' }}>Tamil (தமிழ்)</option>
            </select>

            <button
              onClick={() => playVoiceSample(selectedLang)}
              style={{
                backgroundColor: '#ffd13b',
                color: '#070d1e',
                padding: '13px 28px',
                borderRadius: '30px',
                fontWeight: 800,
                fontSize: '15px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 8px 24px rgba(255, 209, 59, 0.4)',
                transform: playing ? 'scale(0.98)' : 'scale(1)',
                transition: 'all 0.15s ease'
              }}
            >
              <Volume2 size={22} className={playing ? 'animate-bounce' : ''} />
              <span>{playing ? 'Playing ₹500...' : 'Test Sound Alert'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Device Detail Popup Modal */}
      {activeModalDevice && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(18, 7, 35, 0.75)',
            backdropFilter: 'blur(8px)',
            zIndex: 2200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setActiveModalDevice(null)}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '28px',
              padding: '36px',
              maxWidth: '480px',
              width: '100%',
              boxShadow: '0 25px 60px rgba(0,0,0,0.35)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalDevice(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: '#f1f5f9',
                color: '#475569',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={20} />
            </button>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: '#ecfdf5', color: '#059669', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 700, marginBottom: '10px' }}>
              <Sparkles size={14} />
              {activeModalDevice.badge}
            </div>

            <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#070d1e', margin: '0 0 4px' }}>
              {activeModalDevice.name}
            </h3>

            <div style={{ fontSize: '14px', fontWeight: 700, color: '#059669', marginBottom: '14px' }}>
              {activeModalDevice.subtitle}
            </div>

            <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: 1.55, marginBottom: '20px' }}>
              {activeModalDevice.desc}
            </p>

            <div style={{ backgroundColor: '#f8fafc', borderRadius: '16px', padding: '16px', marginBottom: '24px' }}>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#070d1e', marginBottom: '10px' }}>
                Key Technical Specifications:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {activeModalDevice.specs.map((spec, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#334155' }}>
                    <Check size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div>
                <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600 }}>PRICING</div>
                <div style={{ fontSize: '14.5px', fontWeight: 800, color: '#070d1e' }}>{activeModalDevice.price}</div>
              </div>
            </div>

            <button
              onClick={() => {
                setActiveModalDevice(null);
                onOrderDevice && onOrderDevice(activeModalDevice);
              }}
              style={{
                width: '100%',
                backgroundColor: '#059669',
                color: '#ffffff',
                padding: '14px',
                borderRadius: '24px',
                fontWeight: 800,
                fontSize: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 10px 25px rgba(5, 150, 105,  0.3)'
              }}
            >
              <span>Order Device for My Business</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes floatToken {
          0% { transform: translate(-50%, -50%) rotateX(60deg) translateY(0); }
          100% { transform: translate(-50%, -50%) rotateX(60deg) translateY(-8px); }
        }
        @media (max-width: 900px) {
          .isometric-hardware-arena {
            height: auto !important;
            flex-direction: column !important;
            gap: 40px !important;
            padding: 40px 0 !important;
          }
          .device-isometric-unit {
            position: relative !important;
            left: auto !important;
            right: auto !important;
            top: auto !important;
            bottom: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
