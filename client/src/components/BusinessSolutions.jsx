import React, { useState, useEffect } from 'react';
import {
  Store,
  CreditCard,
  Link2,
  HandCoins,
  Megaphone,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Heart,
  MessageCircle,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function BusinessSolutions({ onOpenLeadModal }) {
  const [activeTab, setActiveTab] = useState('offline');
  const [isPaused, setIsPaused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100%

  const tabs = [
    { id: 'offline', label: 'Offline Payments', icon: Store },
    { id: 'gateway', label: 'Payment Gateway', icon: CreditCard },
    { id: 'links', label: 'Payment Links', icon: Link2 },
    { id: 'lending', label: 'Merchant Lending', icon: HandCoins },
    { id: 'ads', label: 'PaisaGo Ads', icon: Megaphone }
  ];

  const DURATION = 5000; // 5 seconds per tab
  const TICK_INTERVAL = 50; // smooth 50ms tick

  // 5-second automatic tab change with accurate resume on unhover
  useEffect(() => {
    if (isPaused || userPaused) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveTab((curr) => {
            const idx = tabs.findIndex((t) => t.id === curr);
            return tabs[(idx + 1) % tabs.length].id;
          });
          return 0;
        }
        return prev + (TICK_INTERVAL / DURATION) * 100;
      });
    }, TICK_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, userPaused, tabs]);

  const handleSelectTab = (tabId) => {
    setActiveTab(tabId);
    setProgress(0); // Reset countdown on click so user gets full 5 seconds
  };

  const handleNextTab = () => {
    setActiveTab((curr) => {
      const idx = tabs.findIndex((t) => t.id === curr);
      return tabs[(idx + 1) % tabs.length].id;
    });
    setProgress(0);
  };

  const handlePrevTab = () => {
    setActiveTab((curr) => {
      const idx = tabs.findIndex((t) => t.id === curr);
      return tabs[(idx - 1 + tabs.length) % tabs.length].id;
    });
    setProgress(0);
  };

  return (
    <section id="business-solutions" style={{ padding: '80px 0 90px', backgroundColor: '#fcfaff', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1160px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <div style={{ fontSize: '18px', fontWeight: 700, color: '#0b132b', marginBottom: '8px', letterSpacing: '-0.01em' }}>
            Comprehensive business solutions
          </div>
          <h2
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              fontWeight: 800,
              color: '#070d1e',
              letterSpacing: '-0.02em',
              margin: '0 0 16px',
              lineHeight: 1.15
            }}
          >
            Empowering your business with PaisaGo
          </h2>
        </div>

        {/* Category Pill Tabs with 5s Progress Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '36px'
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleSelectTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 22px',
                  borderRadius: '30px',
                  border: isActive ? '2px solid #059669' : '1.5px solid #cbd5e1',
                  backgroundColor: isActive ? '#059669' : '#ffffff',
                  color: isActive ? '#ffffff' : '#334155',
                  fontWeight: 700,
                  fontSize: '14.5px',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
                  boxShadow: isActive ? '0 8px 20px rgba(5, 150, 105, 0.28)' : '0 2px 6px rgba(0,0,0,0.03)'
                }}
              >
                <Icon size={18} style={{ color: isActive ? '#ffffff' : '#059669' }} />
                <span>{tab.label}</span>
                {isActive && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '3.5px',
                      backgroundColor: 'rgba(255, 255, 255, 0.25)',
                      overflow: 'hidden'
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: `${progress}%`,
                        backgroundColor: '#ffffff',
                        borderRadius: '99px',
                        boxShadow: '0 0 8px rgba(255, 255, 255, 0.9)',
                        transition: isPaused || userPaused ? 'none' : 'width 60ms linear'
                      }}
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Stadium Arched Card Stage (Stable Frame - No Flickering) */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '2px solid #e2e8f0',
            borderRadius: '9999px',
            padding: '48px 64px',
            boxShadow: '0 16px 40px rgba(11, 19, 43, 0.06)',
            minHeight: '440px',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
          }}
          className="business-stadium-card"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Animated Tab Content Container */}
          <div
            key={activeTab}
            className="biz-tab-content-anim"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              minHeight: '344px'
            }}
          >
            {/* TAB 1: Offline Payments */}
            {activeTab === 'offline' && (
            <>
              <div style={{ maxWidth: '440px' }} className="biz-content-col">
                <h3 style={{ fontSize: '36px', fontWeight: 800, color: '#070d1e', marginBottom: '16px' }}>
                  Offline Payments
                </h3>
                <p style={{ fontSize: '17px', color: '#475569', lineHeight: 1.6, marginBottom: '28px' }}>
                  Accept payments effortlessly at your store with SmartSpeakers for real-time alerts, secure QR codes, and EDC machines for card payments.
                </p>
                <button
                  onClick={() => onOpenLeadModal('Offline Payments')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '17px',
                    fontWeight: 800,
                    color: '#059669',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  <span>Know More</span>
                  <ArrowRight size={22} />
                </button>
              </div>

              {/* Graphic Mockup for Offline Payments */}
              <div style={{ position: 'relative', width: '380px', height: '320px' }} className="biz-graphic-col">
                {/* 3D EDC machine and phone illustration */}
                <div
                  style={{
                    position: 'absolute',
                    right: '30px',
                    top: '20px',
                    width: '180px',
                    height: '240px',
                    backgroundColor: '#ffffff',
                    border: '3px solid #059669',
                    borderRadius: '24px',
                    boxShadow: '0 20px 40px rgba(5, 150, 105,  0.25)',
                    transform: 'rotate(-6deg)',
                    padding: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    zIndex: 2
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#059669' }}>PaisaGo</span>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                  </div>
                  <div style={{ backgroundColor: '#f1f5f9', borderRadius: '12px', height: '110px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '34px', height: '34px', borderRadius: '50%', backgroundColor: '#22c55e', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4px' }}>
                      ✓
                    </div>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#070d1e' }}>Payment Options</span>
                    <span style={{ fontSize: '9px', color: '#64748b' }}>PaisaGo QR & more</span>
                  </div>
                  <div style={{ fontSize: '10px', fontWeight: 700, color: '#475569', textAlign: 'center' }}>
                    Bank - 9921
                  </div>
                </div>

                {/* Floating Notification Pill: Rs.2000 Received */}
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '110px',
                    backgroundColor: '#ffffff',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '20px',
                    padding: '12px 18px',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    zIndex: 5,
                    animation: 'floatToken 3s ease-in-out infinite alternate'
                  }}
                >
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                    ✓
                  </div>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 900, color: '#070d1e' }}>Rs.2000</div>
                    <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600 }}>Received</div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* TAB 2: Payment Gateway */}
          {activeTab === 'gateway' && (
            <>
              <div style={{ maxWidth: '440px' }} className="biz-content-col">
                <h3 style={{ fontSize: '36px', fontWeight: 800, color: '#070d1e', marginBottom: '16px' }}>
                  Payment Gateway
                </h3>
                <p style={{ fontSize: '17px', color: '#475569', lineHeight: 1.6, marginBottom: '28px' }}>
                  Collect payments for your online business with zero-cost integration and multiple payment methods for your customers.
                </p>
                <button
                  onClick={() => onOpenLeadModal('Payment Gateway')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '17px',
                    fontWeight: 800,
                    color: '#059669',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  <span>Know More</span>
                  <ArrowRight size={22} />
                </button>
              </div>

              {/* Graphic Mockup for Payment Gateway */}
              <div style={{ position: 'relative', width: '380px', height: '320px' }} className="biz-graphic-col">
                <div
                  style={{
                    position: 'absolute',
                    right: '30px',
                    top: '10px',
                    width: '200px',
                    height: '290px',
                    backgroundColor: '#070d1e',
                    borderRadius: '28px',
                    padding: '14px',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
                    color: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    zIndex: 2
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800 }}>PaisaGo PG</span>
                    <span style={{ fontSize: '10px', color: '#ffd13b' }}>Verified</span>
                  </div>
                  <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', padding: '10px' }}>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>Online Store</div>
                    <div style={{ fontSize: '16px', fontWeight: 800 }}>₹6,490</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11px' }}>
                    <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '6px 8px', borderRadius: '8px' }}>UPI ID (Google Pay, PaisaGo)</div>
                    <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '6px 8px', borderRadius: '8px' }}>Net Banking (50+ Banks)</div>
                    <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '6px 8px', borderRadius: '8px' }}>Credit & Debit Cards</div>
                  </div>
                  <button style={{ backgroundColor: '#00baf2', color: '#ffffff', border: 'none', padding: '8px', borderRadius: '12px', fontWeight: 800, fontSize: '12px' }}>
                    Buy Now
                  </button>
                </div>

                {/* Floating Store Pill */}
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '110px',
                    backgroundColor: '#ffffff',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '16px',
                    padding: '10px 16px',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                    zIndex: 4
                  }}
                >
                  <div style={{ fontSize: '11px', color: '#64748b' }}>ABC Online Store</div>
                  <div style={{ fontSize: '16px', fontWeight: 900, color: '#070d1e' }}>₹5,000</div>
                </div>
              </div>
            </>
          )}

          {/* TAB 3: Payment Links */}
          {activeTab === 'links' && (
            <>
              <div style={{ maxWidth: '440px' }} className="biz-content-col">
                <h3 style={{ fontSize: '36px', fontWeight: 800, color: '#070d1e', marginBottom: '16px' }}>
                  Payment Links
                </h3>
                <p style={{ fontSize: '17px', color: '#475569', lineHeight: 1.6, marginBottom: '28px' }}>
                  Generate secure payment links to collect money effortlessly. Share over WhatsApp, SMS or social channels and get paid instantly.
                </p>
                <button
                  onClick={() => onOpenLeadModal('Payment Links')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '17px',
                    fontWeight: 800,
                    color: '#059669',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  <span>Know More</span>
                  <ArrowRight size={22} />
                </button>
              </div>

              {/* Graphic Mockup for Payment Links */}
              <div style={{ position: 'relative', width: '380px', height: '320px' }} className="biz-graphic-col">
                <div
                  style={{
                    position: 'absolute',
                    right: '30px',
                    top: '20px',
                    width: '230px',
                    height: '240px',
                    backgroundColor: '#ffffff',
                    borderRadius: '24px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                    overflow: 'hidden',
                    border: '1.5px solid #e2e8f0',
                    zIndex: 2
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=400&q=80"
                    alt="Boutique"
                    style={{ width: '100%', height: '140px', objectFit: 'cover' }}
                  />
                  <div style={{ padding: '14px', textAlign: 'center' }}>
                    <div style={{ fontSize: '13px', fontWeight: 800, color: '#070d1e' }}>
                      Where can I pay for this?
                    </div>
                    <div style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>
                      Link generated: pay.paisago.com/b/9821
                    </div>
                  </div>
                </div>

                {/* Floating WhatsApp pill */}
                <div
                  style={{
                    position: 'absolute',
                    right: '10px',
                    bottom: '50px',
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: '#22c55e',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 20px rgba(34, 197, 94, 0.4)',
                    zIndex: 5
                  }}
                >
                  <MessageCircle size={26} />
                </div>
              </div>
            </>
          )}

          {/* TAB 4: Merchant Lending */}
          {activeTab === 'lending' && (
            <>
              <div style={{ maxWidth: '440px' }} className="biz-content-col">
                <h3 style={{ fontSize: '36px', fontWeight: 800, color: '#070d1e', marginBottom: '16px' }}>
                  Merchant Lending
                </h3>
                <p style={{ fontSize: '17px', color: '#475569', lineHeight: 1.6, marginBottom: '28px' }}>
                  Fuel your growth with quick and flexible loans tailored for businesses. Zero collateral and automatic daily micro-repayments.
                </p>
                <button
                  onClick={() => onOpenLeadModal('Merchant Lending')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '17px',
                    fontWeight: 800,
                    color: '#059669',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  <span>Know More</span>
                  <ArrowRight size={22} />
                </button>
              </div>

              {/* Graphic Mockup for Merchant Lending */}
              <div style={{ position: 'relative', width: '380px', height: '320px' }} className="biz-graphic-col">
                {/* Store Stock Bags SVG */}
                <div style={{ position: 'absolute', left: '20px', bottom: '20px' }}>
                  <svg width="180" height="180" viewBox="0 0 100 100">
                    <path d="M20 90 L25 45 C25 40 35 38 50 38 C65 38 75 40 75 45 L80 90 Z" fill="#047857" opacity="0.85" />
                    <ellipse cx="50" cy="42" rx="22" ry="7" fill="#8b5cf6" />
                    <rect x="42" y="32" width="16" height="8" rx="2" fill="#ffd13b" />
                  </svg>
                </div>

                {/* Overall Sales Donut Card */}
                <div
                  style={{
                    position: 'absolute',
                    right: '30px',
                    top: '40px',
                    backgroundColor: '#ffffff',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '22px',
                    padding: '20px',
                    boxShadow: '0 20px 45px rgba(0,0,0,0.12)',
                    textAlign: 'center',
                    width: '180px',
                    zIndex: 4
                  }}
                >
                  <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Overall Sales</div>
                  {/* Teal Donut Progress */}
                  <div style={{ margin: '10px auto', width: '60px', height: '60px', position: 'relative' }}>
                    <svg width="60" height="60" viewBox="0 0 36 36">
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f1f5f9" strokeWidth="4" />
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="#00baf2" strokeWidth="4" strokeDasharray="75, 100" />
                    </svg>
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: 900, color: '#0b132b' }}>₹50,000</div>
                  <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600 }}>Today</div>
                </div>

                {/* Floating Coin badge */}
                <div
                  style={{
                    position: 'absolute',
                    right: '15px',
                    top: '25px',
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: '#f43f5e',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    fontWeight: 900,
                    boxShadow: '0 6px 16px rgba(244, 63, 94, 0.4)',
                    zIndex: 6
                  }}
                >
                  ₹
                </div>
              </div>
            </>
          )}

          {/* TAB 5: PaisaGo Ads */}
          {activeTab === 'ads' && (
            <>
              <div style={{ maxWidth: '440px' }} className="biz-content-col">
                <h3 style={{ fontSize: '36px', fontWeight: 800, color: '#070d1e', marginBottom: '16px' }}>
                  PaisaGo Ads
                </h3>
                <p style={{ fontSize: '17px', color: '#475569', lineHeight: 1.6, marginBottom: '28px' }}>
                  Advertise your brand to millions on the PaisaGo app. Reach high-intent transacting shoppers with measurable ROI.
                </p>
                <button
                  onClick={() => onOpenLeadModal('PaisaGo Ads')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '17px',
                    fontWeight: 800,
                    color: '#059669',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  <span>Know More</span>
                  <ArrowRight size={22} />
                </button>
              </div>

              {/* Graphic Mockup for PaisaGo Ads */}
              <div style={{ position: 'relative', width: '380px', height: '320px' }} className="biz-graphic-col">
                <div
                  style={{
                    position: 'absolute',
                    right: '20px',
                    top: '20px',
                    width: '260px',
                    height: '265px',
                    background: 'linear-gradient(145deg, #0b132b 0%, #162447 100%)',
                    borderRadius: '24px',
                    padding: '22px',
                    boxShadow: '0 20px 45px rgba(11, 19, 43, 0.25)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: '1.5px solid rgba(16, 185, 129, 0.3)',
                    zIndex: 3
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          fontSize: '11px',
                          fontWeight: 900
                        }}
                      >
                        P
                      </div>
                      <span style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff' }}>EcoTech Store</span>
                    </div>
                    <span
                      style={{
                        fontSize: '10px',
                        color: '#10b981',
                        fontWeight: 700,
                        backgroundColor: 'rgba(16, 185, 129, 0.15)',
                        padding: '2px 8px',
                        borderRadius: '10px'
                      }}
                    >
                      Live Ad
                    </span>
                  </div>

                  <div style={{ textAlign: 'center', padding: '6px 0' }}>
                    <div style={{ fontSize: '24px', fontWeight: 900, color: '#ffffff', lineHeight: 1.15 }}>
                      UP TO 70% OFF
                    </div>
                    <div style={{ fontSize: '12px', color: '#a7f3d0', fontWeight: 600, marginTop: '4px' }}>
                      on Electronics & Accessories
                    </div>
                    <div style={{ fontSize: '10.5px', color: '#94a3b8', marginTop: '6px' }}>
                      Seen by 50M+ verified buyers
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span
                      style={{
                        backgroundColor: '#059669',
                        color: '#ffffff',
                        padding: '5px 12px',
                        borderRadius: '14px',
                        fontSize: '11px',
                        fontWeight: 800
                      }}
                    >
                      Sponsored
                    </span>
                    <span style={{ color: '#00d2ff', fontSize: '12px', fontWeight: 700 }}>
                      4.8x ROI Avg →
                    </span>
                  </div>
                </div>

                {/* Floating Impression Metric */}
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '160px',
                    backgroundColor: '#ffffff',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '16px',
                    padding: '10px 16px',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                    zIndex: 5
                  }}
                >
                  <div style={{ fontSize: '10px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Impressions</div>
                  <div style={{ fontSize: '16px', fontWeight: 900, color: '#059669' }}>2.4M+ Views</div>
                </div>
              </div>
            </>
          )}
          </div>
        </div>

        {/* Carousel Navigation & Status Indicator */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '22px'
          }}
        >
          <button
            onClick={handlePrevTab}
            aria-label="Previous solution"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '1.5px solid #cbd5e1',
              backgroundColor: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#334155',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
            }}
            title="Previous solution"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Indicator Step Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleSelectTab(tab.id)}
                  style={{
                    width: isActive ? '26px' : '8px',
                    height: '8px',
                    borderRadius: '99px',
                    backgroundColor: isActive ? '#059669' : '#cbd5e1',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  title={tab.label}
                />
              );
            })}
          </div>

          <button
            onClick={handleNextTab}
            aria-label="Next solution"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '1.5px solid #cbd5e1',
              backgroundColor: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#334155',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
            }}
            title="Next solution"
          >
            <ChevronRight size={18} />
          </button>

          {/* Pause / Play 5s status toggle */}
          <button
            onClick={() => setUserPaused(!userPaused)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '20px',
              border: userPaused ? '1.5px solid #059669' : '1.5px solid #e2e8f0',
              backgroundColor: userPaused ? '#ecfdf5' : '#ffffff',
              fontSize: '12px',
              fontWeight: 700,
              color: userPaused ? '#059669' : '#64748b',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              marginLeft: '8px'
            }}
            title={userPaused ? 'Click to resume 5s auto-change' : 'Click to pause'}
          >
            {userPaused ? <Play size={12} fill="#059669" /> : <Pause size={12} fill="#64748b" />}
            <span>{userPaused ? 'Paused (Resume)' : 'Auto (5s)'}</span>
          </button>
        </div>

        {/* Bottom Partner Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #0b132b 0%, #059669 100%)',
            borderRadius: '28px',
            padding: '36px 44px',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            boxShadow: '0 16px 36px rgba(5, 150, 105,  0.25)',
            marginTop: '44px'
          }}
        >
          <div>
            <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '6px' }}>
              Want to partner with PaisaGo as a distributor or merchant agent?
            </h3>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', margin: 0 }}>
              Join PaisaGo's offline partner program and earn high recurring commissions on every soundbox and merchant onboarded.
            </p>
          </div>

          <button
            onClick={() => onOpenLeadModal('Partner Program')}
            style={{
              backgroundColor: '#ffd13b',
              color: '#0b132b',
              padding: '14px 28px',
              borderRadius: '30px',
              fontWeight: 800,
              fontSize: '15px',
              boxShadow: '0 6px 18px rgba(0,0,0,0.18)',
              cursor: 'pointer',
              border: 'none'
            }}
          >
            Join Partner Network
          </button>
        </div>
      </div>

      <style>{`
        /* Smooth stage card transition */
        .biz-tab-content-anim {
          animation: bizContentFadeSlide 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes bizContentFadeSlide {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 860px) {
          .business-stadium-card {
            border-radius: 28px !important;
            padding: 32px 20px !important;
          }
          .biz-tab-content-anim {
            flex-direction: column !important;
            text-align: center;
          }
          .biz-content-col {
            max-width: 100% !important;
            margin-bottom: 30px;
          }
          .biz-graphic-col {
            width: 100% !important;
            height: 260px !important;
          }
        }
      `}</style>
    </section>
  );
}
