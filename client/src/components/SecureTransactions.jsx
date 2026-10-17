import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/* 1. UPI Lite Card Graphic */
const UPILiteCard = () => (
  <div
    style={{
      background: 'linear-gradient(135deg, #fb7185 0%, #e11d48 100%)',
      borderRadius: '16px',
      padding: '12px 14px',
      width: '180px',
      height: '118px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0 10px 25px rgba(225, 29, 72, 0.4)',
      position: 'relative',
      overflow: 'hidden',
      userSelect: 'none'
    }}
  >
    {/* Wallet fold top overlay */}
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '64px',
        height: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '0 0 10px 10px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
      }}
    />

    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '10px' }}>
      <div
        style={{
          width: '26px',
          height: '26px',
          background: '#0064b0',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}
      >
        <span style={{ color: 'white', fontSize: '9px', fontWeight: 900 }}>UPI</span>
      </div>
      <div>
        <div style={{ color: '#ffffff', fontSize: '13px', fontWeight: 900, letterSpacing: '0.5px', lineHeight: 1 }}>
          UPI
        </div>
        <div style={{ color: '#ffffff', fontSize: '8.5px', opacity: 0.9, fontWeight: 700 }}>LITE</div>
      </div>
      <div
        style={{
          marginLeft: 'auto',
          backgroundColor: '#ff6600',
          borderRadius: '4px',
          padding: '3px 5px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            width: '0',
            height: '0',
            borderTop: '4px solid transparent',
            borderBottom: '4px solid transparent',
            borderLeft: '6px solid white'
          }}
        />
      </div>
    </div>

    <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '8px', letterSpacing: '0.4px', fontWeight: 700 }}>
      UNIFIED PAYMENTS INTERFACE
    </div>
  </div>
);

/* 2. Credit Line on UPI Card Graphic */
const CreditLineCard = () => (
  <div
    style={{
      background: '#ffffff',
      borderRadius: '16px',
      padding: '12px 14px',
      width: '180px',
      height: '118px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.18)',
      border: '1.5px solid rgba(226, 232, 240, 0.9)',
      userSelect: 'none'
    }}
  >
    {/* Bank Pillars Icon with Green Checkmark */}
    <div style={{ position: 'relative' }}>
      <svg width="38" height="28" viewBox="0 0 40 30" fill="none">
        <path d="M20 2L3 10H37L20 2Z" fill="#fb7185" />
        <rect x="6" y="11" width="4" height="13" fill="#fb7185" />
        <rect x="14" y="11" width="4" height="13" fill="#fb7185" />
        <rect x="22" y="11" width="4" height="13" fill="#fb7185" />
        <rect x="30" y="11" width="4" height="13" fill="#fb7185" />
        <rect x="2" y="24" width="36" height="4" fill="#fb7185" />
      </svg>
      <div
        style={{
          position: 'absolute',
          bottom: '-3px',
          right: '-7px',
          width: '15px',
          height: '15px',
          backgroundColor: '#10b981',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1.5px solid white'
        }}
      >
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    </div>

    <div style={{ textAlign: 'center' }}>
      <div style={{ color: '#475569', fontSize: '9.5px', fontWeight: 600 }}>Pre - Approved Credit on UPI</div>
      <div style={{ color: '#0f172a', fontSize: '18px', fontWeight: 900, lineHeight: 1.1, marginTop: '2px' }}>
        ₹50,000
      </div>
    </div>
  </div>
);

/* 3. RuPay CC on UPI Card Graphic */
const RuPayCard = () => (
  <div
    style={{
      background: 'linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)',
      borderRadius: '16px',
      padding: '12px 14px',
      width: '180px',
      height: '118px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0 10px 25px rgba(14, 116, 144, 0.4)',
      userSelect: 'none'
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
        <span style={{ color: '#ffffff', fontWeight: 900, fontSize: '16px' }}>RuPay</span>
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderBottom: '9px solid #ff6600'
          }}
        />
      </div>
      {/* EMV Chip */}
      <div
        style={{
          width: '24px',
          height: '18px',
          backgroundColor: '#fef08a',
          borderRadius: '3px',
          border: '1px solid #ca8a04',
          boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
        }}
      />
    </div>

    {/* Embossed Card Number Bars */}
    <div style={{ display: 'flex', gap: '6px' }}>
      <div style={{ width: '24px', height: '4px', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '2px' }} />
      <div style={{ width: '24px', height: '4px', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '2px' }} />
      <div style={{ width: '24px', height: '4px', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '2px' }} />
      <div style={{ width: '24px', height: '4px', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '2px' }} />
    </div>
  </div>
);

/* 4. UPI Circle Card Graphic */
const UPICircleCard = () => (
  <div
    style={{
      background: '#ffffff',
      borderRadius: '16px',
      padding: '10px 12px',
      width: '180px',
      height: '118px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0 10px 25px rgba(0,0,0,0.16)',
      position: 'relative',
      overflow: 'hidden',
      userSelect: 'none'
    }}
  >
    {/* Network of member avatars */}
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '66px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          backgroundColor: '#c084fc',
          border: '2px solid white',
          position: 'absolute',
          left: '14%',
          top: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 6px rgba(0,0,0,0.12)'
        }}
      >
        <span style={{ fontSize: '13px' }}>👦</span>
      </div>

      <div
        style={{
          width: '26px',
          height: '26px',
          borderRadius: '50%',
          backgroundColor: '#fb923c',
          border: '2px solid white',
          position: 'absolute',
          left: '38%',
          top: '2px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 6px rgba(0,0,0,0.12)'
        }}
      >
        <span style={{ fontSize: '12px' }}>👧</span>
      </div>

      <div
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: '#a855f7',
          border: '2px solid white',
          position: 'absolute',
          left: '46%',
          top: '26px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
          zIndex: 2
        }}
      >
        <span style={{ fontSize: '15px' }}>👩</span>
      </div>

      <div
        style={{
          width: '26px',
          height: '26px',
          borderRadius: '50%',
          backgroundColor: '#f472b6',
          border: '2px solid white',
          position: 'absolute',
          right: '12%',
          top: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 6px rgba(0,0,0,0.12)'
        }}
      >
        <span style={{ fontSize: '12px' }}>👱‍♀️</span>
      </div>

      <div
        style={{
          width: '26px',
          height: '26px',
          borderRadius: '50%',
          backgroundColor: '#ef4444',
          border: '2px solid white',
          position: 'absolute',
          right: '8%',
          bottom: '2px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 6px rgba(0,0,0,0.12)'
        }}
      >
        <span style={{ fontSize: '12px' }}>🧔</span>
      </div>

      {/* Floating Rupee Badge */}
      <div
        style={{
          position: 'absolute',
          left: '66%',
          top: '18px',
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          backgroundColor: '#22d3ee',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '8px',
          color: '#ffffff',
          fontWeight: 800,
          border: '1.5px solid white',
          zIndex: 3
        }}
      >
        ₹
      </div>
    </div>

    {/* Bottom: Official UPI CIRCLE Logo */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
        <div style={{ width: 0, height: 0, borderLeft: '4px solid transparent', borderRight: '4px solid transparent', borderBottom: '7px solid #16a34a' }} />
        <div style={{ width: 0, height: 0, borderLeft: '4px solid transparent', borderRight: '4px solid transparent', borderBottom: '7px solid #ea580c' }} />
      </div>
      <div>
        <div style={{ fontSize: '10px', fontWeight: 900, color: '#334155', lineHeight: 1 }}>UPI</div>
        <div style={{ fontSize: '7.5px', fontWeight: 800, color: '#64748b', letterSpacing: '0.5px' }}>CIRCLE</div>
      </div>
    </div>
  </div>
);

/* 5. Split Expenses Card Graphic */
const SplitCard = () => (
  <div
    style={{
      background: 'linear-gradient(135deg, #fc658d 0%, #c4a0ec 100%)',
      borderRadius: '16px',
      padding: '16px',
      width: '180px',
      height: '118px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 10px 25px rgba(196, 160, 236, 0.4)',
      position: 'relative',
      userSelect: 'none'
    }}
  >
    <div
      style={{
        width: '56px',
        height: '56px',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 6px 16px rgba(0,0,0,0.12)'
      }}
    >
      <span style={{ fontSize: '30px', fontWeight: 900, color: '#1e1e1e' }}>₹</span>
    </div>
  </div>
);

/* 6. PaisaGo Gift Card Graphic */
const GiftCard = () => (
  <div
    style={{
      background: 'linear-gradient(135deg, #4fc1c2 0%, #1c8788 100%)',
      borderRadius: '16px',
      padding: '14px',
      width: '180px',
      height: '118px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 10px 25px rgba(28, 135, 136, 0.4)',
      position: 'relative',
      overflow: 'hidden',
      userSelect: 'none'
    }}
  >
    {/* Diagonal stripe pattern */}
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 8px, transparent 8px, transparent 16px)'
      }}
    />

    {/* Ribbon horizontal & vertical cross */}
    <div style={{ position: 'absolute', top: 0, bottom: 0, left: '38%', width: '14px', backgroundColor: '#ffffff', opacity: 0.95 }} />
    <div style={{ position: 'absolute', left: 0, right: 0, top: '48%', height: '14px', backgroundColor: '#ffffff', opacity: 0.95 }} />

    {/* Center Bow / Gift Seal */}
    <div
      style={{
        position: 'relative',
        zIndex: 2,
        width: '42px',
        height: '42px',
        backgroundColor: '#ffffff',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
      }}
    >
      <div
        style={{
          width: '28px',
          height: '28px',
          backgroundColor: '#4fc1c2',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <span style={{ color: '#ffffff', fontSize: '13px', fontWeight: 900 }}>पै</span>
      </div>
    </div>
  </div>
);

const FEATURES = [
  {
    id: 'upi-lite',
    title: 'UPI Lite',
    desc: 'Make faster, low-value transactions with ease',
    Card: UPILiteCard
  },
  {
    id: 'credit-line',
    title: 'Credit Line on UPI',
    desc: 'Link pre-sanctioned bank credit lines to UPI',
    Card: CreditLineCard
  },
  {
    id: 'rupay',
    title: 'RuPay CC on UPI',
    desc: 'Use your RuPay credit card for UPI transactions',
    Card: RuPayCard
  },
  {
    id: 'split',
    title: 'Split Expenses',
    desc: 'Simplify group payments effortlessly',
    Card: SplitCard
  },
  {
    id: 'gift-card',
    title: 'PaisaGo Gift Card',
    desc: 'The perfect gift for every occasion',
    Card: GiftCard
  },
  {
    id: 'upi-circle',
    title: 'UPI Circle',
    desc: 'Delegate payments with spending limits and full control',
    Card: UPICircleCard
  }
];

export default function SecureTransactions() {
  const [activeIdx, setActiveIdx] = useState(1); // Default centered on Credit Line on UPI
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // Drag / touch tracking
  const touchStartX = useRef(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth auto-cycle every 4 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % FEATURES.length);
    }, 4200);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % FEATURES.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + FEATURES.length) % FEATURES.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches ? e.touches[0].clientX : e.clientX;
    isDragging.current = true;
  };

  const handleTouchEnd = (e) => {
    if (!isDragging.current || touchStartX.current === null) return;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const delta = endX - touchStartX.current;
    if (delta > 45) {
      handlePrev();
    } else if (delta < -45) {
      handleNext();
    }
    isDragging.current = false;
    touchStartX.current = null;
  };

  // Responsive scale factors
  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;
  const spreadX = isMobile ? 160 : isTablet ? 230 : 310;
  const spreadY = isMobile ? 26 : isTablet ? 36 : 46;

  return (
    <section
      id="payments-secure"
      style={{
        backgroundColor: '#ffffff',
        padding: '30px 20px 80px',
        overflow: 'visible',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative' }}>
        {/* Main Dark Card Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleTouchStart}
          onMouseUp={handleTouchEnd}
          style={{
            background: 'linear-gradient(180deg, #1f1435 0%, #160c28 100%)',
            borderRadius: '32px',
            padding: '50px 20px 85px',
            position: 'relative',
            overflow: 'hidden',
            minHeight: isMobile ? '520px' : '570px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.25)',
            userSelect: 'none'
          }}
        >
          {/* Concentric Circles Background Arc - perfectly aligned with the cards trajectory */}
          <svg
            style={{
              position: 'absolute',
              top: '-30px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '1400px',
              height: '750px',
              opacity: 0.22,
              pointerEvents: 'none',
              zIndex: 1
            }}
            viewBox="0 0 1400 750"
          >
            <defs>
              <radialGradient id="ringGlow" cx="50%" cy="0%" r="80%">
                <stop offset="0%" stopColor="#c084fc" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.05" />
              </radialGradient>
            </defs>
            {/* Multiple concentric orbital tracks */}
            {[180, 310, 450, 590, 740, 910, 1100].map((r, i) => (
              <circle
                key={i}
                cx="700"
                cy="-40"
                r={r}
                fill="none"
                stroke={i === 2 ? 'url(#ringGlow)' : '#c4b5fd'}
                strokeWidth={i === 2 ? '2' : '1.2'}
                strokeDasharray={i % 2 === 1 ? '6 6' : 'none'}
                opacity={i === 2 ? 0.75 : 0.4}
              />
            ))}
          </svg>

          {/* Section Title */}
          <div style={{ textAlign: 'center', marginBottom: '20px', position: 'relative', zIndex: 5 }}>
            <h2
              style={{
                fontSize: 'clamp(28px, 4.2vw, 44px)',
                fontWeight: 800,
                color: '#a7f3d0',
                lineHeight: 1.15,
                margin: 0,
                letterSpacing: '-0.5px'
              }}
            >
              Simple, fast &amp;
            </h2>
            <h2
              style={{
                fontSize: 'clamp(28px, 4.2vw, 44px)',
                fontWeight: 800,
                color: '#a7f3d0',
                lineHeight: 1.15,
                margin: 0,
                letterSpacing: '-0.5px'
              }}
            >
              secure transactions
            </h2>
          </div>

          {/* Curved Stage Carousel */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1040px',
              height: isMobile ? '310px' : '340px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 3
            }}
          >
            {/* Left Nav Arrow Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              style={{
                position: 'absolute',
                left: isMobile ? '4px' : '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 25,
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              }}
              aria-label="Previous Feature"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Orbiting Feature Cards */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {FEATURES.map((item, idx) => {
                const CardComponent = item.Card;
                const total = FEATURES.length;
                let diff = (idx - activeIdx) % total;
                if (diff > total / 2) diff -= total;
                if (diff < -total / 2) diff += total;

                const isCurrent = diff === 0;

                // Arc-based parabolic offsets: cards bend down as they spread left & right
                let posX = diff * spreadX;
                let posY = Math.pow(Math.abs(diff), 1.4) * spreadY;
                let rotDeg = diff * (isMobile ? 5 : 6.5);
                let scaleVal = isCurrent ? 1.08 : Math.max(0.72, 0.9 - Math.abs(diff) * 0.12);
                let opacityVal = isCurrent ? 1 : Math.abs(diff) === 1 ? 0.85 : Math.abs(diff) === 2 ? 0.35 : 0;
                let zIndexVal = isCurrent ? 15 : 10 - Math.abs(diff);

                if (Math.abs(diff) > 2) {
                  posX = (diff > 0 ? 1 : -1) * (spreadX * 2.2);
                  posY = spreadY * 3.5;
                  opacityVal = 0;
                }

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveIdx(idx)}
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '46%',
                      transform: `translate(-50%, -50%) translate3d(${posX}px, ${posY}px, 0) rotate(${rotDeg}deg) scale(${scaleVal})`,
                      transition: 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.65s ease',
                      opacity: opacityVal,
                      zIndex: zIndexVal,
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      width: '210px',
                      pointerEvents: opacityVal < 0.2 ? 'none' : 'auto'
                    }}
                  >
                    {/* 1. Title on TOP */}
                    <div
                      style={{
                        color: isCurrent ? '#ffffff' : '#e2e8f0',
                        fontSize: isCurrent ? '16px' : '14px',
                        fontWeight: 700,
                        marginBottom: '10px',
                        textAlign: 'center',
                        textShadow: isCurrent ? '0 2px 8px rgba(0,0,0,0.4)' : 'none',
                        transition: 'all 0.3s ease',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {item.title}
                    </div>

                    {/* 2. Card Graphic in the MIDDLE with Stage Frame if Active */}
                    <div
                      style={{
                        position: 'relative',
                        padding: isCurrent ? '6px' : '0px',
                        borderRadius: '22px',
                        transition: 'all 0.4s ease'
                      }}
                    >
                      {/* Luminous Spotlight Stage Frame for Active Card */}
                      {isCurrent && (
                        <div
                          style={{
                            position: 'absolute',
                            inset: '-10px -12px',
                            borderRadius: '26px',
                            background:
                              'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.25) 0%, rgba(139, 92, 246, 0.08) 70%, transparent 100%)',
                            border: '1.5px solid rgba(192, 132, 252, 0.6)',
                            boxShadow: '0 0 35px rgba(168, 85, 247, 0.4), inset 0 0 15px rgba(192, 132, 252, 0.2)',
                            pointerEvents: 'none',
                            zIndex: -1
                          }}
                        />
                      )}

                      <CardComponent />
                    </div>

                    {/* 3. Description at the BOTTOM */}
                    <div
                      style={{
                        color: isCurrent ? 'rgba(243, 232, 255, 0.95)' : 'rgba(216, 180, 254, 0.7)',
                        fontSize: isMobile ? '11.5px' : '12.5px',
                        lineHeight: 1.4,
                        textAlign: 'center',
                        maxWidth: '190px',
                        marginTop: '12px',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {item.desc}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Nav Arrow Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              style={{
                position: 'absolute',
                right: isMobile ? '4px' : '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 25,
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              }}
              aria-label="Next Feature"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '18px',
              zIndex: 10
            }}
          >
            {FEATURES.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIdx(i);
                }}
                style={{
                  width: activeIdx === i ? '24px' : '7px',
                  height: '7px',
                  borderRadius: '4px',
                  backgroundColor: activeIdx === i ? '#c084fc' : 'rgba(192, 132, 252, 0.35)',
                  boxShadow: activeIdx === i ? '0 0 10px rgba(192, 132, 252, 0.6)' : 'none',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0
                }}
                aria-label={`Go to feature ${i + 1}`}
              />
            ))}
          </div>

          {/* Overlapping QR Code Card at Bottom Center */}
          <div
            style={{
              position: 'absolute',
              bottom: '-44px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '12px',
              boxShadow: '0 14px 38px rgba(0, 0, 0, 0.25)',
              border: '1px solid #e2e8f0',
              zIndex: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateX(-50%) translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 18px 45px rgba(5, 150, 105,  0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateX(-50%) translateY(0)';
              e.currentTarget.style.boxShadow = '0 14px 38px rgba(0, 0, 0, 0.25)';
            }}
          >
            {/* PaisaGo QR Code Graphic */}
            <div
              style={{
                width: '82px',
                height: '82px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              <svg width="82" height="82" viewBox="0 0 100 100" fill="none">
                {/* 3 Corner Finder Squares */}
                <rect x="6" y="6" width="28" height="28" rx="4" fill="#0b132b" />
                <rect x="10" y="10" width="20" height="20" rx="2" fill="#ffffff" />
                <rect x="14" y="14" width="12" height="12" rx="2" fill="#0b132b" />

                <rect x="66" y="6" width="28" height="28" rx="4" fill="#0b132b" />
                <rect x="70" y="10" width="20" height="20" rx="2" fill="#ffffff" />
                <rect x="74" y="14" width="12" height="12" rx="2" fill="#0b132b" />

                <rect x="6" y="66" width="28" height="28" rx="4" fill="#0b132b" />
                <rect x="10" y="70" width="20" height="20" rx="2" fill="#ffffff" />
                <rect x="14" y="74" width="12" height="12" rx="2" fill="#0b132b" />

                {/* Data dots matrix */}
                {[
                  [38, 8], [44, 8], [50, 8], [56, 8],
                  [38, 14], [50, 14], [56, 14],
                  [44, 20], [50, 20],
                  [38, 26], [44, 26], [56, 26],
                  [8, 38], [14, 38], [26, 38], [44, 38], [56, 38], [70, 38], [80, 38], [90, 38],
                  [8, 44], [26, 44], [38, 44], [62, 44], [74, 44], [86, 44],
                  [8, 50], [20, 50], [44, 50], [56, 50], [68, 50], [80, 50],
                  [8, 56], [14, 56], [26, 56], [38, 56], [62, 56], [74, 56], [92, 56],
                  [38, 68], [50, 68], [62, 68], [74, 68], [86, 68],
                  [44, 74], [56, 74], [68, 74], [80, 74], [92, 74],
                  [38, 80], [50, 80], [62, 80], [74, 80], [86, 80],
                  [44, 86], [56, 86], [68, 86], [80, 86], [92, 86]
                ].map(([x, y], i) => (
                  <rect key={i} x={x} y={y} width="5" height="5" rx="1" fill="#0b132b" />
                ))}

                {/* Center PaisaGo 'पै' Icon Circle */}
                <circle cx="50" cy="50" r="11" fill="#059669" />
                <text
                  x="50"
                  y="55"
                  fill="#ffffff"
                  fontSize="11"
                  fontWeight="900"
                  textAnchor="middle"
                  fontFamily="'Segoe UI', 'Mukta', sans-serif"
                >
                  पै
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Text Below the Overlapping QR Card */}
        <div
          style={{
            marginTop: '58px',
            textAlign: 'center',
            fontSize: '13.5px',
            color: '#475569',
            fontWeight: 500,
            lineHeight: 1.5
          }}
        >
          Scan to download the<br />
          <strong style={{ color: '#059669', fontWeight: 800 }}>PaisaGo App</strong>
        </div>
      </div>
    </section>
  );
}
