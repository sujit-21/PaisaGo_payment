import React, { useState } from 'react';
import { Landmark, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

export default function CrispBannerView({ onExplore }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const funds = {
    left: [
      {
        id: 'acb-flexi',
        name: 'ACB Flexi Cap Fund',
        hasBadge: true,
        iconBg: '#ede7f6',
        iconColor: '#059669',
        return3Y: '28.6%',
        minAmount: '200',
        fundSize: '87 Cr'
      },
      {
        id: 'pqr-mid',
        name: 'PQR Mid Cap Fund',
        hasBadge: false,
        iconBg: '#ede7f6',
        iconColor: '#059669',
        return3Y: '34.2%',
        minAmount: '200',
        fundSize: '87 Cr'
      }
    ],
    center: [
      {
        id: 'sft-large',
        name: 'SFT Large Cap Fund',
        hasBadge: true,
        iconBg: '#fce4ec',
        iconColor: '#c2185b',
        return3Y: '21.4%',
        minAmount: '100',
        fundSize: '75 Cr'
      },
      {
        id: 'lkh-value',
        name: 'LKH Value Fund',
        hasBadge: true,
        iconBg: '#ffebee',
        iconColor: '#e53935',
        return3Y: '24.9%',
        minAmount: '200',
        fundSize: '87 Cr'
      }
    ],
    right: [
      {
        id: 'yxz-multi',
        name: 'YXZ Multi Cap Fund',
        hasBadge: false,
        iconBg: '#ede7f6',
        iconColor: '#059669',
        return3Y: '31.8%',
        minAmount: '200',
        fundSize: '87 Cr'
      },
      {
        id: 'jlk-tax',
        name: 'JLK Tax Save Fund',
        hasBadge: true,
        iconBg: '#ede7f6',
        iconColor: '#059669',
        return3Y: '25.3%',
        minAmount: '200',
        fundSize: '87 Cr'
      }
    ]
  };

  const renderFundCard = (fund, staggerDelay = '0s') => {
    const isHovered = hoveredCard === fund.id;
    return (
      <div
        key={fund.id}
        onMouseEnter={() => setHoveredCard(fund.id)}
        onMouseLeave={() => setHoveredCard(null)}
        onClick={() => onExplore && onExplore(fund.name)}
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '14px',
          padding: '16px 18px',
          width: '240px',
          boxShadow: isHovered
            ? '0 16px 36px rgba(5, 150, 105,  0.22)'
            : '0 8px 24px rgba(5, 150, 105,  0.08)',
          border: isHovered
            ? '1.5px solid var(--pp-purple)'
            : '1px solid rgba(220, 210, 240, 0.8)',
          position: 'relative',
          cursor: 'pointer',
          transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: isHovered ? 'translateY(-6px) scale(1.02)' : 'translateY(0)',
          animation: `floatGentle 4s ease-in-out infinite ${staggerDelay}`,
          backdropFilter: 'blur(8px)',
          zIndex: 5
        }}
      >
        {/* CRISP Top Pick Badge */}
        {fund.hasBadge && (
          <div
            style={{
              position: 'absolute',
              top: '-10px',
              left: '16px',
              backgroundColor: '#3b1261',
              color: '#ffffff',
              padding: '3px 10px',
              borderRadius: '20px',
              fontSize: '10px',
              fontWeight: 800,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              boxShadow: '0 4px 10px rgba(59, 18, 97, 0.3)'
            }}
          >
            <span style={{ color: '#00baf2', fontWeight: 900, letterSpacing: '0.04em' }}>CRISP</span>
            <span style={{ opacity: 0.9 }}>Top Pick</span>
          </div>
        )}

        {/* Card Header: Name & Bank Icon */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: fund.hasBadge ? '4px' : '0', marginBottom: '14px' }}>
          <h4 style={{ fontSize: '13.5px', fontWeight: 800, color: '#1e1435', margin: 0, lineHeight: 1.3, maxWidth: '160px' }}>
            {fund.name}
          </h4>
          <div
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '8px',
              backgroundColor: fund.iconBg,
              color: fund.iconColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <Landmark size={16} />
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', textAlign: 'left', borderTop: '1px solid #f0ecf8', paddingTop: '10px' }}>
          <div>
            <div style={{ fontSize: '10px', color: '#7a708c', fontWeight: 600 }}>3Y return</div>
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#118c4f', marginTop: '2px' }}>{fund.return3Y}</div>
          </div>
          <div>
            <div style={{ fontSize: '10px', color: '#7a708c', fontWeight: 600 }}>Min. amount</div>
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#2b1b4d', marginTop: '2px' }}>₹{fund.minAmount}</div>
          </div>
          <div>
            <div style={{ fontSize: '10px', color: '#7a708c', fontWeight: 600 }}>Fund Size</div>
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#2b1b4d', marginTop: '2px' }}>{fund.fundSize}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '620px',
        background: 'radial-gradient(ellipse at 50% 60%, rgba(162, 89, 255, 0.22) 0%, rgba(246, 240, 255, 0.85) 45%, #ffffff 100%)',
        borderRadius: '28px',
        padding: '50px 20px 40px',
        overflow: 'hidden',
        boxShadow: '0 20px 50px rgba(5, 150, 105,  0.08)',
        border: '1px solid rgba(5, 150, 105,  0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
      className="crisp-banner-wrapper"
    >
      {/* Background Radiating Curved Fiber Lines SVG */}
      <svg
        style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1100px',
          height: '420px',
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 0.7
        }}
        viewBox="0 0 1100 420"
        fill="none"
      >
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8a4beb" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#8a4beb" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#8a4beb" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="fiberGradLeft" x1="100%" y1="50%" x2="0%" y2="50%">
            <stop offset="0%" stopColor="#8a4beb" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#cbb1f8" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="fiberGradRight" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#8a4beb" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#cbb1f8" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Central Radial Aura */}
        <ellipse cx="550" cy="210" rx="200" ry="160" fill="url(#centerGlow)" />

        {/* Radiating Left Fiber Lines */}
        <path d="M 550 210 C 450 200, 300 120, 80 140" stroke="url(#fiberGradLeft)" strokeWidth="1.5" />
        <path d="M 550 210 C 440 210, 280 160, 50 180" stroke="url(#fiberGradLeft)" strokeWidth="1.5" />
        <path d="M 550 210 C 430 220, 260 210, 40 220" stroke="url(#fiberGradLeft)" strokeWidth="1.5" />
        <path d="M 550 210 C 440 230, 280 260, 60 270" stroke="url(#fiberGradLeft)" strokeWidth="1.5" />
        <path d="M 550 210 C 460 240, 320 310, 90 320" stroke="url(#fiberGradLeft)" strokeWidth="1.5" />
        <path d="M 550 210 C 470 170, 340 70, 140 80" stroke="url(#fiberGradLeft)" strokeWidth="1.2" strokeDasharray="3 3" />
        <path d="M 550 210 C 470 250, 350 360, 150 370" stroke="url(#fiberGradLeft)" strokeWidth="1.2" strokeDasharray="3 3" />

        {/* Radiating Right Fiber Lines */}
        <path d="M 550 210 C 650 200, 800 120, 1020 140" stroke="url(#fiberGradRight)" strokeWidth="1.5" />
        <path d="M 550 210 C 660 210, 820 160, 1050 180" stroke="url(#fiberGradRight)" strokeWidth="1.5" />
        <path d="M 550 210 C 670 220, 840 210, 1060 220" stroke="url(#fiberGradRight)" strokeWidth="1.5" />
        <path d="M 550 210 C 660 230, 820 260, 1040 270" stroke="url(#fiberGradRight)" strokeWidth="1.5" />
        <path d="M 550 210 C 640 240, 780 310, 1010 320" stroke="url(#fiberGradRight)" strokeWidth="1.5" />
        <path d="M 550 210 C 630 170, 760 70, 960 80" stroke="url(#fiberGradRight)" strokeWidth="1.2" strokeDasharray="3 3" />
        <path d="M 550 210 C 630 250, 750 360, 950 370" stroke="url(#fiberGradRight)" strokeWidth="1.2" strokeDasharray="3 3" />

        {/* Glowing Ambient Particles along fibers */}
        <circle cx="120" cy="140" r="4" fill="#8a4beb" opacity="0.6" style={{ animation: 'pulseGlow 2.5s infinite' }} />
        <circle cx="280" cy="180" r="3" fill="#ffd13b" opacity="0.8" style={{ animation: 'pulseGlow 3s infinite 0.5s' }} />
        <circle cx="80" cy="270" r="3.5" fill="#8a4beb" opacity="0.7" style={{ animation: 'pulseGlow 2.8s infinite 1s' }} />
        <circle cx="980" cy="140" r="4" fill="#8a4beb" opacity="0.6" style={{ animation: 'pulseGlow 2.5s infinite 0.3s' }} />
        <circle cx="820" cy="180" r="3" fill="#ffd13b" opacity="0.8" style={{ animation: 'pulseGlow 3s infinite 0.8s' }} />
        <circle cx="1020" cy="270" r="3.5" fill="#8a4beb" opacity="0.7" style={{ animation: 'pulseGlow 2.8s infinite 1.2s' }} />
      </svg>

      {/* Top Header */}
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 10, maxWidth: '700px' }}>
        <h2
          style={{
            fontSize: 'clamp(28px, 3.8vw, 42px)',
            fontWeight: 800,
            color: '#28174a',
            lineHeight: 1.18,
            marginBottom: '8px',
            fontFamily: "'Outfit', 'Inter', sans-serif"
          }}
        >
          Top picks shortlisted from<br />1000+ Mutual Funds
        </h2>

        <p
          style={{
            fontSize: '17px',
            color: '#65587f',
            margin: '0 0 16px',
            fontWeight: 500
          }}
        >
          Analysed using <span style={{ color: '#059669', fontWeight: 800, letterSpacing: '0.04em' }}>CRISP</span>
        </p>

        <button
          onClick={() => onExplore && onExplore('CRISP Mutual Funds')}
          style={{
            backgroundColor: '#4d148c',
            color: '#ffffff',
            padding: '11px 32px',
            borderRadius: '9999px',
            fontSize: '15px',
            fontWeight: 700,
            boxShadow: '0 6px 18px rgba(77, 20, 140, 0.35)',
            transition: 'all 0.2s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.backgroundColor = '#3b0e6e'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.backgroundColor = '#4d148c'; }}
        >
          <span>Explore Now</span>
        </button>
      </div>

      {/* Visual Canvas: 3 Columns with Golden Medal in the Center */}
      <div
        style={{
          width: '100%',
          maxWidth: '1080px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          zIndex: 5,
          marginTop: '24px',
          gap: '20px'
        }}
        className="crisp-canvas-grid"
      >
        {/* Left Column (2 Cards) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', alignItems: 'center' }}>
          {funds.left.map((fund, idx) => renderFundCard(fund, `${idx * 0.5}s`))}
        </div>

        {/* Center Column: Golden Medal + Ribbon + 2 Cards below */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
          {/* Golden Medal with Red Ribbon */}
          <div
            style={{
              position: 'relative',
              width: '140px',
              height: '140px',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 8
            }}
          >
            {/* Red Ribbons */}
            <div
              style={{
                position: 'absolute',
                bottom: '-24px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '90px',
                height: '70px',
                display: 'flex',
                justifyContent: 'center',
                zIndex: 1,
                pointerEvents: 'none'
              }}
            >
              {/* Left Ribbon Tail */}
              <div
                style={{
                  width: '32px',
                  height: '65px',
                  background: 'linear-gradient(135deg, #a80a22 0%, #c41230 50%, #7d0416 100%)',
                  transform: 'rotate(18deg) skewY(-10deg)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.25)',
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 82%, 0% 100%)'
                }}
              />
              {/* Right Ribbon Tail */}
              <div
                style={{
                  width: '32px',
                  height: '65px',
                  background: 'linear-gradient(225deg, #a80a22 0%, #c41230 50%, #7d0416 100%)',
                  transform: 'rotate(-18deg) skewY(10deg)',
                  marginLeft: '-10px',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.25)',
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 82%, 0% 100%)'
                }}
              />
            </div>

            {/* Circular Medal Outer Ring */}
            <div
              style={{
                width: '124px',
                height: '124px',
                borderRadius: '50%',
                background: 'linear-gradient(145deg, #ffe082 0%, #ffb300 45%, #b27b00 100%)',
                padding: '6px',
                boxShadow: '0 14px 35px rgba(218, 147, 0, 0.4), inset 0 2px 4px rgba(255,255,255,0.8)',
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'float 3.5s ease-in-out infinite'
              }}
            >
              {/* Medal Inner Face */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: 'linear-gradient(145deg, #ffd54f 0%, #ffa000 70%, #d48800 100%)',
                  border: '3px solid #ffecb3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: 'inset 0 4px 10px rgba(0,0,0,0.2)'
                }}
              >
                {/* 3 Rising Golden Bar Chart Bars */}
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '48px', paddingBottom: '6px' }}>
                  <div style={{ width: '13px', height: '24px', background: 'linear-gradient(180deg, #ffffff 0%, #fff3e0 100%)', borderRadius: '3px', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }} />
                  <div style={{ width: '13px', height: '36px', background: 'linear-gradient(180deg, #ffffff 0%, #fff3e0 100%)', borderRadius: '3px', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }} />
                  <div style={{ width: '13px', height: '48px', background: 'linear-gradient(180deg, #ffffff 0%, #fff3e0 100%)', borderRadius: '3px', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }} />
                </div>

                {/* Shimmer Light Reflection Sweep */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '35px',
                    height: '100%',
                    background: 'rgba(255,255,255,0.45)',
                    animation: 'shimmerSweep 3s infinite'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Center 2 Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', alignItems: 'center', marginTop: '12px' }}>
            {funds.center.map((fund, idx) => renderFundCard(fund, `${0.3 + idx * 0.5}s`))}
          </div>
        </div>

        {/* Right Column (2 Cards) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', alignItems: 'center' }}>
          {funds.right.map((fund, idx) => renderFundCard(fund, `${0.6 + idx * 0.5}s`))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .crisp-canvas-grid {
            flex-direction: column !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </div>
  );
}
