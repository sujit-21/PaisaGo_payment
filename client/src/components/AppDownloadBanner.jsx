import React, { useState } from 'react';
import { Smartphone, QrCode, ShieldCheck, Check, Send, Sparkles, Scan } from 'lucide-react';

export default function AppDownloadBanner() {
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  const handleSendLink = (e) => {
    e.preventDefault();
    if (phone.length < 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setPhone('');
    }, 4000);
  };

  return (
    <section id="download-app" style={{ padding: '80px 0', backgroundColor: '#f6f7fb', position: 'relative' }}>
      <div className="container">
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '28px',
            padding: '48px 56px',
            boxShadow: '0 15px 35px rgba(0,0,0,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '36px',
            border: '1px solid var(--pp-gray-200)'
          }}
          className="download-box-inner"
        >
          {/* Left Text & SMS Form */}
          <div style={{ maxWidth: '540px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--pp-purple)', fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '10px' }}>
              <Sparkles size={16} />
              INDIA'S #1 PAYMENTS APP
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', color: 'var(--pp-gray-900)', marginBottom: '12px', lineHeight: 1.25 }}>
              Scan to Download the PaisaGo App
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--pp-gray-600)', marginBottom: '24px' }}>
              Join 73+ Crore registered users enjoying seamless UPI money transfers, instant recharges, bill payments, and smart wealth creation.
            </p>

            {/* SMS Link Form */}
            <form onSubmit={handleSendLink} style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <div style={{ position: 'relative', flex: 1, minWidth: '220px' }}>
                <span style={{ position: 'absolute', left: '14px', top: '13px', fontSize: '14px', fontWeight: 700, color: 'var(--pp-gray-600)' }}>+91</span>
                <input
                  type="tel"
                  maxLength="10"
                  placeholder="Enter 10-digit mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  style={{
                    width: '100%',
                    padding: '13px 14px 13px 50px',
                    borderRadius: '12px',
                    border: '1.5px solid var(--pp-gray-300)',
                    fontSize: '15px',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--pp-purple)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--pp-gray-300)'}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ padding: '13px 24px', fontSize: '14px' }}
              >
                {sent ? (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Check size={16} /> Link Sent!</span>
                ) : (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Send size={16} /> Get App Link</span>
                )}
              </button>
            </form>

            {/* App Store Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href="https://play.google.com/store/apps/details?id=com.paisago.app"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  padding: '8px 18px',
                  borderRadius: '10px',
                  fontSize: '12px'
                }}
              >
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '10px', opacity: 0.8, textTransform: 'uppercase' }}>GET IT ON</div>
                  <div style={{ fontSize: '14px', fontWeight: 700 }}>Google Play</div>
                </div>
              </a>

              <a
                href="https://apps.apple.com/in/app/paisago-payments-bank-fastag/id1170055821"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  padding: '8px 18px',
                  borderRadius: '10px',
                  fontSize: '12px'
                }}
              >
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '10px', opacity: 0.8, textTransform: 'uppercase' }}>DOWNLOAD ON THE</div>
                  <div style={{ fontSize: '14px', fontWeight: 700 }}>App Store</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right QR Box with Animated Sweeping Laser Scanner Line */}
          <div
            style={{
              backgroundColor: 'var(--pp-gray-50)',
              border: '2px dashed var(--pp-purple-badge)',
              borderRadius: '24px',
              padding: '28px',
              textAlign: 'center',
              minWidth: '240px',
              position: 'relative'
            }}
          >
            {/* PaisaGo QR Art with Laser Scanner */}
            <div
              style={{
                width: '180px',
                height: '180px',
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '12px',
                margin: '0 auto 14px',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Sweeping Laser Scanner Bar */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, transparent, #00baf2, #059669, transparent)',
                  boxShadow: '0 0 12px #00baf2, 0 0 4px #059669',
                  zIndex: 10,
                  animation: 'laserSweep 2.5s ease-in-out infinite'
                }}
              />

              <svg width="156" height="156" viewBox="0 0 100 100">
                {/* Corner markers */}
                <rect x="5" y="5" width="28" height="28" rx="4" fill="#059669" />
                <rect x="9" y="9" width="20" height="20" rx="2" fill="#ffffff" />
                <rect x="13" y="13" width="12" height="12" rx="2" fill="#059669" />

                <rect x="67" y="5" width="28" height="28" rx="4" fill="#059669" />
                <rect x="71" y="9" width="20" height="20" rx="2" fill="#ffffff" />
                <rect x="75" y="13" width="12" height="12" rx="2" fill="#059669" />

                <rect x="5" y="67" width="28" height="28" rx="4" fill="#059669" />
                <rect x="9" y="71" width="20" height="20" rx="2" fill="#ffffff" />
                <rect x="13" y="75" width="12" height="12" rx="2" fill="#059669" />

                {/* Random QR bit patterns */}
                <rect x="38" y="10" width="8" height="8" fill="#059669" />
                <rect x="50" y="10" width="8" height="8" fill="#059669" />
                <rect x="38" y="24" width="8" height="8" fill="#059669" />
                <rect x="50" y="24" width="8" height="8" fill="#059669" />

                <rect x="10" y="38" width="8" height="8" fill="#059669" />
                <rect x="24" y="38" width="8" height="8" fill="#059669" />
                <rect x="38" y="38" width="24" height="24" rx="4" fill="#059669" />
                {/* Center PaisaGo 'Pe' letter */}
                <circle cx="50" cy="50" r="10" fill="#ffffff" />
                <text x="50" y="54" fontSize="11" fontWeight="bold" fill="#059669" textAnchor="middle" fontFamily="sans-serif">पै</text>

                <rect x="68" y="38" width="8" height="8" fill="#059669" />
                <rect x="82" y="38" width="8" height="8" fill="#059669" />
                <rect x="68" y="52" width="8" height="8" fill="#059669" />
                <rect x="82" y="52" width="8" height="8" fill="#059669" />

                <rect x="38" y="68" width="8" height="8" fill="#059669" />
                <rect x="52" y="68" width="8" height="8" fill="#059669" />
                <rect x="68" y="68" width="8" height="8" fill="#059669" />
                <rect x="82" y="68" width="8" height="8" fill="#059669" />
                <rect x="52" y="82" width="8" height="8" fill="#059669" />
                <rect x="68" y="82" width="8" height="8" fill="#059669" />
              </svg>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 800, color: 'var(--pp-purple-dark)' }}>
              <Scan size={14} color="var(--pp-purple)" />
              Point camera to install PaisaGo
            </div>
            <div style={{ fontSize: '11px', color: 'var(--pp-gray-500)', marginTop: '2px' }}>
              Instant download on Android & iOS
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .download-box-inner {
            padding: 32px 24px !important;
            flex-direction: column !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
