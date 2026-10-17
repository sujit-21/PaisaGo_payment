import React from 'react';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

export default function SmartSavingsStadium({ onSelectSavings }) {
  const savingsItems = [
    {
      id: 'gold-sip',
      title: 'Monthly Gold SIP',
      desc: 'Invest in 24K pure gold every month, starting from just ₹100. Set up a Gold SIP and grow your savings effortlessly.',
      badge: '99.99% Pure 24K',
      accentColor: '#ffd13b',
      iconIllustration: (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          {/* Festive Gift Bag */}
          <path d="M26 38 H74 L68 84 H32 L26 38 Z" fill="url(#bagGrad)" filter="drop-shadow(0 6px 12px rgba(5, 150, 105, 0.25))" />
          <path d="M26 38 C26 38 35 44 50 44 C65 44 74 38 74 38 L72 48 C72 48 63 52 50 52 C37 52 28 48 28 48 Z" fill="#064e3b" />
          
          {/* Bag Handles */}
          <path d="M38 38 C38 24 62 24 62 38" stroke="#ffd13b" strokeWidth="4" strokeLinecap="round" fill="none" />
          
          {/* Gold Bars Stack sticking out of bag */}
          <rect x="36" y="28" width="28" height="10" rx="2" transform="rotate(-6 36 28)" fill="url(#goldGrad1)" stroke="#b8860b" strokeWidth="1" />
          <rect x="42" y="24" width="26" height="9" rx="2" transform="rotate(4 42 24)" fill="url(#goldGrad2)" stroke="#b8860b" strokeWidth="1" />
          
          {/* Gold Coins */}
          <ellipse cx="28" cy="74" rx="10" ry="7" fill="url(#goldGrad1)" stroke="#d97706" strokeWidth="1" />
          <text x="28" y="77" fontSize="8" fontWeight="bold" fill="#78350f" textAnchor="middle">₹</text>
          
          <ellipse cx="36" cy="80" rx="10" ry="7" fill="url(#goldGrad2)" stroke="#d97706" strokeWidth="1" />
          <text x="36" y="83" fontSize="8" fontWeight="bold" fill="#78350f" textAnchor="middle">₹</text>

          {/* Sparkles */}
          <polygon points="76,22 78,28 84,30 78,32 76,38 74,32 68,30 74,28" fill="#ffd13b" />
          <polygon points="20,40 21,44 25,45 21,46 20,50 19,46 15,45 19,44" fill="#ffd13b" />
          
          <defs>
            <linearGradient id="bagGrad" x1="26" y1="38" x2="74" y2="84" gradientUnits="userSpaceOnUse">
              <stop stopColor="#047857" />
              <stop offset="1" stopColor="#0b132b" />
            </linearGradient>
            <linearGradient id="goldGrad1" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#fef08a" />
              <stop offset="0.5" stopColor="#eab308" />
              <stop offset="1" stopColor="#ca8a04" />
            </linearGradient>
            <linearGradient id="goldGrad2" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#fef9c3" />
              <stop offset="0.5" stopColor="#facc15" />
              <stop offset="1" stopColor="#d97706" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      id: 'recurring-deposit',
      title: 'Recurring Deposit',
      desc: 'Save smartly with a Recurring Deposit. Start small, earn interest and build a secure future with easy monthly contributions.',
      badge: 'Up to 7.5% p.a.',
      accentColor: '#00baf2',
      iconIllustration: (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          {/* Glass Jar Body */}
          <path d="M34 32 C34 30 38 28 50 28 C62 28 66 30 66 32 V36 H34 V32 Z" fill="#93c5fd" opacity="0.8" />
          <rect x="36" y="24" width="28" height="6" rx="2" fill="#d97706" stroke="#b45309" strokeWidth="1" />
          
          <path d="M32 36 C32 36 28 44 28 68 C28 82 38 88 50 88 C62 88 72 82 72 68 C72 44 68 36 68 36 Z" fill="url(#glassGrad)" stroke="#60a5fa" strokeWidth="1.5" />
          
          {/* Glass Specular Reflection Highlight */}
          <path d="M34 44 C34 44 32 54 32 68 C32 76 34 82 36 84" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />

          {/* Stacks of coins inside jar */}
          <ellipse cx="50" cy="78" rx="14" ry="5" fill="#f59e0b" stroke="#d97706" />
          <ellipse cx="50" cy="74" rx="14" ry="5" fill="#fbbf24" stroke="#d97706" />
          <ellipse cx="50" cy="70" rx="14" ry="5" fill="#fde047" stroke="#d97706" />
          
          {/* Falling Coin Floating into jar */}
          <g transform="translate(42, 14)">
            <ellipse cx="8" cy="8" rx="8" ry="8" fill="url(#coinGradJar)" stroke="#b45309" strokeWidth="1" />
            <text x="8" y="11" fontSize="9" fontWeight="bold" fill="#78350f" textAnchor="middle">₹</text>
          </g>

          {/* Large Floating Front Coin */}
          <g transform="translate(18, 64)" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.15))">
            <circle cx="14" cy="14" r="14" fill="url(#coinGradJar)" stroke="#d97706" strokeWidth="1.5" />
            <text x="14" y="19" fontSize="15" fontWeight="900" fill="#78350f" textAnchor="middle">₹</text>
          </g>

          <defs>
            <linearGradient id="glassGrad" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#e0f2fe" stopOpacity="0.85" />
              <stop offset="0.6" stopColor="#bae6fd" stopOpacity="0.5" />
              <stop offset="1" stopColor="#7dd3fc" stopOpacity="0.75" />
            </linearGradient>
            <linearGradient id="coinGradJar" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#fef08a" />
              <stop offset="0.5" stopColor="#facc15" />
              <stop offset="1" stopColor="#d97706" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      id: 'nps-contribution',
      title: 'NPS Contribution',
      desc: 'Secure your retirement with NPS. Contribute flexibly, enjoy tax benefits, and grow your wealth for a worry free future.',
      badge: 'Tax Benefit u/s 80CCD',
      accentColor: '#10b981',
      iconIllustration: (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          {/* Rising Green Growth Arrow */}
          <path d="M38 68 Q54 44 76 34" stroke="#10b981" strokeWidth="4" strokeLinecap="round" fill="none" />
          <polygon points="76,30 84,33 78,40" fill="#10b981" />
          
          {/* Left stack of coins */}
          <ellipse cx="44" cy="80" rx="12" ry="4.5" fill="#f59e0b" stroke="#d97706" />
          <ellipse cx="44" cy="76" rx="12" ry="4.5" fill="#fbbf24" stroke="#d97706" />
          <ellipse cx="44" cy="72" rx="12" ry="4.5" fill="#fde047" stroke="#d97706" />
          <ellipse cx="44" cy="68" rx="12" ry="4.5" fill="#fef08a" stroke="#d97706" />

          {/* Right taller stack of coins */}
          <ellipse cx="64" cy="80" rx="12" ry="4.5" fill="#f59e0b" stroke="#d97706" />
          <ellipse cx="64" cy="76" rx="12" ry="4.5" fill="#fbbf24" stroke="#d97706" />
          <ellipse cx="64" cy="72" rx="12" ry="4.5" fill="#fde047" stroke="#d97706" />
          <ellipse cx="64" cy="68" rx="12" ry="4.5" fill="#fef08a" stroke="#d97706" />
          <ellipse cx="64" cy="64" rx="12" ry="4.5" fill="#fef9c3" stroke="#d97706" />
          <ellipse cx="64" cy="60" rx="12" ry="4.5" fill="#facc15" stroke="#d97706" />

          {/* Front big coin badge */}
          <g transform="translate(20, 56)" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.15))">
            <circle cx="15" cy="15" r="15" fill="url(#coinGradNps)" stroke="#d97706" strokeWidth="1.5" />
            <text x="15" y="21" fontSize="16" fontWeight="900" fill="#78350f" textAnchor="middle">₹</text>
          </g>

          <defs>
            <linearGradient id="coinGradNps" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#fef08a" />
              <stop offset="0.5" stopColor="#facc15" />
              <stop offset="1" stopColor="#d97706" />
            </linearGradient>
          </defs>
        </svg>
      )
    }
  ];

  return (
    <section style={{ padding: '70px 0 90px', backgroundColor: '#fcfaff', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2
            style={{
              fontSize: 'clamp(30px, 4vw, 44px)',
              fontWeight: 800,
              color: '#070d1e',
              letterSpacing: '-0.02em',
              margin: 0
            }}
          >
            Smart savings start here
          </h2>
        </div>

        {/* Stadium Capsule Cards Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {savingsItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectSavings && onSelectSavings(item)}
              style={{
                backgroundColor: '#ffffff',
                border: '1.5px solid #e2d9f3',
                borderRadius: '9999px',
                padding: '14px 44px 14px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '36px',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 4px 20px rgba(5, 150, 105,  0.04)',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#059669';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(5, 150, 105,  0.12)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2d9f3';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(5, 150, 105,  0.04)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              className="stadium-capsule-card"
            >
              {/* Left Oval Stadium Capsule */}
              <div
                style={{
                  minWidth: '320px',
                  height: '140px',
                  borderRadius: '9999px',
                  backgroundColor: '#f6f1fc',
                  border: '1.5px solid #e9dff7',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '10px 24px',
                  textAlign: 'center',
                  flexShrink: 0,
                  transition: 'background-color 0.25s ease'
                }}
                className="stadium-inner-pill"
              >
                <div style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.iconIllustration}
                </div>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 800,
                    color: '#0b132b',
                    margin: '4px 0 0',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {item.title}
                </h3>
              </div>

              {/* Right Description Text */}
              <div style={{ flex: 1, paddingRight: '20px' }} className="stadium-desc-col">
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: '#ecfdf5', color: '#059669', padding: '3px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 700, marginBottom: '8px' }}>
                  <Sparkles size={12} />
                  {item.badge}
                </div>
                <p
                  style={{
                    fontSize: '16.5px',
                    color: '#475569',
                    lineHeight: 1.6,
                    margin: 0,
                    fontWeight: 450
                  }}
                >
                  {item.desc}
                </p>
              </div>

              {/* Right Arrow Action */}
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#f6f1fc',
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'all 0.2s ease'
                }}
                className="stadium-arrow-circle"
              >
                <ArrowRight size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .stadium-capsule-card {
            border-radius: 28px !important;
            flex-direction: column !important;
            padding: 24px !important;
            text-align: center;
            gap: 18px !important;
          }
          .stadium-inner-pill {
            min-width: 100% !important;
            width: 100% !important;
            height: 120px !important;
          }
          .stadium-desc-col {
            padding-right: 0 !important;
          }
          .stadium-arrow-circle {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
