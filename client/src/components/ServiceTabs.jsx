import React, { useState, useRef } from 'react';
import {
  CreditCard,
  Zap,
  ShieldCheck,
  Users,
  Gift,
  CheckCircle,
  Coins,
  TrendingUp,
  PieChart,
  Shield,
  Bike,
  Car,
  HeartHandshake,
  Plane,
  Banknote,
  Store,
  Activity,
  Lock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Calendar,
  BadgePercent
} from 'lucide-react';

export default function ServiceTabs({ onSelectFeature }) {
  const [activeTab, setActiveTab] = useState('payments');
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  // The 4 official PaisaGo Wealth Cards
  const wealthCards = [
    {
      id: 'payments',
      title: 'Payments',
      subtitle: 'Manage all your payments seamlessly',
      iconBg: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
      icon: Zap
    },
    {
      id: 'investments',
      title: 'Investments',
      subtitle: 'Build, manage & grow your wealth',
      iconBg: 'linear-gradient(135deg, #2ebbd1 0%, #00baf2 100%)',
      icon: TrendingUp
    },
    {
      id: 'insurance',
      title: 'Insurance',
      subtitle: 'Protect, plan & secure your future',
      iconBg: 'linear-gradient(135deg, #f5a623 0%, #ffd13b 100%)',
      icon: ShieldCheck
    },
    {
      id: 'lending',
      title: 'Lending',
      subtitle: 'Access quick, transparent & secure loans',
      iconBg: 'linear-gradient(135deg, #0b132b 0%, #68185c 100%)',
      icon: Banknote
    }
  ];

  // Tab detailed data with exact copy and micro-visual types
  const tabsContent = {
    payments: {
      headline: 'Simple, fast &\nsecure transactions',
      description: 'One in three Indians uses PaisaGo to send money, recharge, pay bills, and split expenses effortlessly.',
      exploreCta: 'Explore all Payments',
      cards: [
        {
          id: 'upi-lite',
          title: 'UPI Lite',
          copy: 'Make faster, low-value transactions with ease',
          tag: '0s Delay',
          visualType: 'upilite'
        },
        {
          id: 'credit-line',
          title: 'Credit Line on UPI',
          copy: 'Link pre-sanctioned bank credit lines to UPI',
          tag: 'Pre-Approved',
          visualType: 'creditline'
        },
        {
          id: 'rupay-cc',
          title: 'RuPay CC on UPI',
          copy: 'Use your RuPay credit card for UPI transactions',
          tag: 'Earn Rewards',
          visualType: 'rupay'
        },
        {
          id: 'split-expense',
          title: 'Split Expenses',
          copy: 'Simplify group payments effortlessly',
          tag: 'Instant Settle',
          visualType: 'split'
        },
        {
          id: 'gift-card',
          title: 'PaisaGo Gift Card',
          copy: 'The perfect gift for every occasion',
          tag: 'Instant Delivery',
          visualType: 'giftcard'
        },
        {
          id: 'upi-circle',
          title: 'UPI Circle',
          copy: 'Delegate payments with spending limits and full control',
          tag: 'Family Control',
          visualType: 'upicircle'
        }
      ]
    },
    investments: {
      headline: 'Smart savings\nstart here',
      description: 'Grow your wealth steadily with 24K pure digital gold, automated gold SIPs, high-growth mutual funds and government NPS.',
      exploreCta: 'Explore Investments',
      cards: [
        {
          id: 'gold-24k',
          title: 'Gold',
          copy: 'Buy 24K pure gold securely, starting from just ₹5. Manage, sell, or gift gold digitally anytime.',
          tag: '99.99% Pure',
          visualType: 'gold'
        },
        {
          id: 'gold-sip',
          title: 'Monthly Gold SIP',
          copy: 'Invest in 24K pure gold every month, starting from just ₹100. Set up a Gold SIP and grow your savings effortlessly.',
          tag: 'From ₹100/mo',
          visualType: 'goldsip'
        },
        {
          id: 'recurring-deposit',
          title: 'Recurring Deposit',
          copy: 'Save smartly with a Recurring Deposit. Start small, earn interest and build a secure future with easy monthly contributions.',
          tag: 'Guaranteed Yield',
          visualType: 'rd'
        },
        {
          id: 'nps-contrib',
          title: 'NPS Contribution',
          copy: 'Secure your retirement with NPS. Contribute flexibly, enjoy tax benefits, and grow your wealth for a worry free future.',
          tag: 'Save ₹50k Tax',
          visualType: 'nps'
        }
      ]
    },
    insurance: {
      headline: 'Protect what\nmatters most to you',
      description: 'Comprehensive, paperless insurance plans with 24/7 dedicated claim assistance and zero physical paperwork.',
      exploreCta: 'Explore Insurance',
      cards: [
        {
          id: 'bike-insurance',
          title: 'Bike Insurance',
          copy: 'Instant two-wheeler protection with zero paperwork, instant policy delivery & roadside help.',
          tag: 'In 2 Minutes',
          visualType: 'bike'
        },
        {
          id: 'car-insurance',
          title: 'Car Insurance',
          copy: 'Zero depreciation plans with cashless repairs at 5000+ network garages pan-India.',
          tag: 'Cashless Garages',
          visualType: 'car'
        },
        {
          id: 'health-insurance',
          title: 'Health Insurance',
          copy: 'Comprehensive health plans with no medical checkups, cashless hospitalization & instant approvals.',
          tag: 'Up to ₹1 Crore',
          visualType: 'health'
        },
        {
          id: 'travel-insurance',
          title: 'Travel Insurance',
          copy: 'International and domestic travel protection from ₹15/day covering delays and lost baggage.',
          tag: 'Worldwide Cover',
          visualType: 'travel'
        }
      ]
    },
    lending: {
      headline: 'Quick, transparent &\ninstant loans',
      description: 'RBI-regulated lending partners offering fast credit with zero hidden charges and competitive interest rates.',
      exploreCta: 'Explore Lending Solutions',
      cards: [
        {
          id: 'personal-loan',
          title: 'Personal Loan',
          copy: 'Get upto ₹10 Lakh with zero paperwork, 100% digital KYC and instant disbursal into your bank account.',
          tag: 'Zero Paperwork',
          visualType: 'loan'
        },
        {
          id: 'merchant-credit',
          title: 'Merchant Credit Line',
          copy: 'Fuel your retail business growth with collateral-free working capital loans with automatic daily micro-repayments.',
          tag: 'Daily Auto-Pay',
          visualType: 'merchantloan'
        },
        {
          id: 'free-credit-score',
          title: 'Free Credit Score',
          copy: 'Check your detailed Experian / CRIF score free anytime with personalized improvement tips.',
          tag: 'Monthly Refresh',
          visualType: 'score'
        },
        {
          id: 'loan-against-mf',
          title: 'Loan Against Mutual Funds',
          copy: 'Get instant liquidity against your existing MF portfolio without selling your units.',
          tag: 'Zero Tax Impact',
          visualType: 'mfloan'
        }
      ]
    }
  };

  const currentContent = tabsContent[activeTab];

  // Render bespoke animated visuals for each card
  const renderVisual = (type) => {
    switch (type) {
      case 'upilite':
        return (
          <div style={{ textAlign: 'center', position: 'relative' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--pp-purple)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', boxShadow: '0 8px 20px rgba(5, 150, 105,  0.3)' }}>
              <Zap size={30} className="animate-bounce" />
            </div>
            <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--pp-purple)' }}>₹500</div>
            <div style={{ fontSize: '11px', color: 'var(--pp-green)', fontWeight: 700, backgroundColor: 'var(--pp-green-light)', padding: '2px 8px', borderRadius: '10px', display: 'inline-block', marginTop: '4px' }}>
              Instant PIN-less
            </div>
          </div>
        );

      case 'creditline':
        return (
          <div style={{ width: '85%', textAlign: 'center' }}>
            <div style={{ fontSize: '11px', color: 'var(--pp-gray-600)', fontWeight: 600, marginBottom: '6px' }}>Bank Credit Limit</div>
            <div style={{ fontSize: '24px', fontWeight: 900, color: '#10213b', letterSpacing: '-0.02em' }}>₹50,000</div>
            <div style={{ height: '8px', backgroundColor: 'var(--pp-gray-200)', borderRadius: '4px', overflow: 'hidden', margin: '8px 0' }}>
              <div style={{ width: '70%', height: '100%', background: 'linear-gradient(90deg, #059669, #2ebbd1)', borderRadius: '4px' }} />
            </div>
            <div style={{ fontSize: '11px', color: 'var(--pp-purple)', fontWeight: 700 }}>Linked to @paisago UPI</div>
          </div>
        );

      case 'rupay':
        return (
          <div style={{ width: '180px', height: '110px', borderRadius: '12px', background: 'linear-gradient(135deg, #1f1240 0%, #3e1b73 100%)', padding: '12px', position: 'relative', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.15)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ width: '22px', height: '18px', backgroundColor: '#ffd13b', borderRadius: '3px' }} />
              <span style={{ fontSize: '12px', fontWeight: 900, color: '#ffffff' }}>RuPay</span>
            </div>
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)', letterSpacing: '1px' }}>•••• 4920</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '10px', color: '#2ebbd1', fontWeight: 700 }}>Scan QR & Pay</span>
              <span style={{ fontSize: '10px', color: '#ffd13b', fontWeight: 800 }}>5X Rewards</span>
            </div>
            {/* Shimmer light sweep */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '40px', height: '100%', background: 'rgba(255,255,255,0.15)', animation: 'shimmerSweep 3s infinite' }} />
          </div>
        );

      case 'split':
        return (
          <div style={{ width: '85%', textAlign: 'center' }}>
            <div style={{ fontSize: '11px', color: 'var(--pp-gray-600)', marginBottom: '4px' }}>Group Trip Bill: ₹1,500</div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', margin: '8px 0' }}>
              {['A', 'B', 'C'].map((initial, i) => (
                <div key={i} style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: i === 0 ? 'var(--pp-purple)' : 'var(--pp-cyan)', color: '#ffffff', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {initial}
                </div>
              ))}
            </div>
            <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--pp-purple)' }}>₹500 / person</div>
            <span style={{ fontSize: '10px', color: 'var(--pp-green)', fontWeight: 700 }}>Settled Instantly</span>
          </div>
        );

      case 'giftcard':
        return (
          <div style={{ width: '170px', height: '105px', borderRadius: '14px', background: 'linear-gradient(135deg, #a82d8c 0%, #059669 100%)', padding: '12px', position: 'relative', color: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 10px 22px rgba(168, 45, 140, 0.25)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Gift size={20} color="#ffd13b" />
              <span style={{ fontSize: '10px', fontWeight: 800, backgroundColor: 'rgba(255,255,255,0.2)', padding: '2px 6px', borderRadius: '8px' }}>PaisaGo Gift</span>
            </div>
            <div style={{ fontSize: '20px', fontWeight: 900, color: '#ffd13b' }}>₹1,000</div>
            <div style={{ fontSize: '10px', opacity: 0.85 }}>For Birthdays & Festivals</div>
          </div>
        );

      case 'upicircle':
        return (
          <div style={{ position: 'relative', width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', width: '90px', height: '90px', borderRadius: '50%', border: '2px dashed var(--pp-purple)', animation: 'orbitRing 10s linear infinite' }} />
            <div style={{ position: 'absolute', width: '65px', height: '65px', borderRadius: '50%', border: '2px solid var(--pp-cyan)' }} />
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--pp-purple)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Users size={20} />
            </div>
          </div>
        );

      case 'gold':
        return (
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '130px', height: '70px', borderRadius: '8px', background: 'linear-gradient(135deg, #f5d061 0%, #e6a117 50%, #ffd97d 100%)', boxShadow: '0 8px 20px rgba(230, 161, 23, 0.35)', margin: '0 auto 8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#3d2503', border: '1px solid #ffe9a6', position: 'relative', overflow: 'hidden' }}>
              <span style={{ fontSize: '16px', fontWeight: 900 }}>24K 99.99%</span>
              <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '1px' }}>MMTC-PAMP</span>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '30px', height: '100%', background: 'rgba(255,255,255,0.4)', animation: 'shimmerSweep 2.5s infinite' }} />
            </div>
            <div style={{ fontSize: '12px', color: '#b87a00', fontWeight: 700 }}>Starts from ₹5 • Insured Vaults</div>
          </div>
        );

      case 'goldsip':
        return (
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: '#fef8e7', border: '2px solid #ffd13b', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px', color: '#b87a00' }}>
              <Calendar size={28} />
            </div>
            <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--pp-gray-900)' }}>Every 1st of Month</div>
            <div style={{ fontSize: '11px', color: 'var(--pp-purple)', fontWeight: 700 }}>Auto-invest ₹100/mo</div>
          </div>
        );

      case 'rd':
        return (
          <div style={{ width: '80%', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '8px', height: '60px', marginBottom: '8px' }}>
              <div style={{ width: '18px', height: '30%', backgroundColor: 'var(--pp-purple-light)', borderRadius: '4px' }} />
              <div style={{ width: '18px', height: '50%', backgroundColor: 'var(--pp-purple-badge)', borderRadius: '4px' }} />
              <div style={{ width: '18px', height: '75%', backgroundColor: 'var(--pp-purple)', borderRadius: '4px' }} />
              <div style={{ width: '18px', height: '100%', backgroundColor: 'var(--pp-green)', borderRadius: '4px' }} />
            </div>
            <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--pp-green)' }}>Up to 7.5% p.a.</div>
            <div style={{ fontSize: '11px', color: 'var(--pp-gray-600)' }}>Safe Bank Recurring Deposit</div>
          </div>
        );

      case 'nps':
        return (
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--pp-purple-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px', color: 'var(--pp-purple)' }}>
              <Shield size={28} />
            </div>
            <div style={{ fontSize: '17px', fontWeight: 800, color: 'var(--pp-gray-900)' }}>Sec 80CCD (1B)</div>
            <div style={{ fontSize: '11px', color: 'var(--pp-green)', fontWeight: 700 }}>Save ₹50,000 extra tax</div>
          </div>
        );

      case 'bike':
        return (
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#e6f9fd', color: '#00baf2', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
              <Bike size={32} />
            </div>
            <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--pp-gray-900)' }}>Instant 2 Mins</div>
            <div style={{ fontSize: '11px', color: 'var(--pp-green)', fontWeight: 700 }}>No Inspection Needed</div>
          </div>
        );

      case 'car':
        return (
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#fef8e7', color: '#f5a623', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
              <Car size={32} />
            </div>
            <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--pp-gray-900)' }}>5000+ Garages</div>
            <div style={{ fontSize: '11px', color: 'var(--pp-purple)', fontWeight: 700 }}>Cashless Settlement</div>
          </div>
        );

      case 'health':
        return (
          <div style={{ textAlign: 'center', width: '85%' }}>
            <div style={{ height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '6px' }}>
              <svg width="140" height="30" viewBox="0 0 140 30" fill="none">
                <path d="M0 15 H40 L45 5 L55 25 L65 5 L75 25 L80 15 H140" stroke="#ff6584" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div style={{ fontSize: '17px', fontWeight: 900, color: 'var(--pp-gray-900)' }}>₹1 Crore Cover</div>
            <div style={{ fontSize: '11px', color: 'var(--pp-green)', fontWeight: 700 }}>Day 1 Pre-existing Covered</div>
          </div>
        );

      case 'travel':
        return (
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#e6f9fc', color: '#2ebbd1', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
              <Plane size={30} />
            </div>
            <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--pp-gray-900)' }}>Worldwide Trip</div>
            <div style={{ fontSize: '11px', color: 'var(--pp-gray-600)' }}>From ₹15 / day</div>
          </div>
        );

      case 'loan':
        return (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '11px', color: 'var(--pp-purple)', fontWeight: 700, textTransform: 'uppercase' }}>100% Digital Disbursal</div>
            <div style={{ fontSize: '28px', fontWeight: 900, color: 'var(--pp-gray-900)', margin: '4px 0' }}>₹10,00,000</div>
            <div style={{ fontSize: '11px', color: 'var(--pp-green)', fontWeight: 700 }}>Direct to Bank Account in 2 Mins</div>
          </div>
        );

      case 'merchantloan':
        return (
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--pp-purple-light)', color: 'var(--pp-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
              <Store size={28} />
            </div>
            <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--pp-gray-900)' }}>Daily Auto-Settlement</div>
            <div style={{ fontSize: '11px', color: 'var(--pp-purple)', fontWeight: 700 }}>Zero Collateral Required</div>
          </div>
        );

      case 'score':
        return (
          <div style={{ textAlign: 'center' }}>
            <div style={{ position: 'relative', width: '90px', height: '50px', overflow: 'hidden', margin: '0 auto' }}>
              <div style={{ width: '90px', height: '90px', borderRadius: '50%', border: '8px solid var(--pp-gray-200)', borderTopColor: 'var(--pp-green)', borderRightColor: 'var(--pp-green)', transform: 'rotate(-45deg)' }} />
            </div>
            <div style={{ fontSize: '24px', fontWeight: 900, color: 'var(--pp-green)', marginTop: '4px' }}>825</div>
            <div style={{ fontSize: '11px', color: 'var(--pp-gray-600)', fontWeight: 600 }}>Excellent Score • Free Refresh</div>
          </div>
        );

      case 'mfloan':
        return (
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#e6f9fd', color: '#00baf2', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
              <Lock size={26} />
            </div>
            <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--pp-gray-900)' }}>Zero Tax Penalty</div>
            <div style={{ fontSize: '11px', color: 'var(--pp-gray-600)' }}>Keep Earning MF Dividends</div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="core-tabs" style={{ padding: '36px 0 30px', backgroundColor: '#fcfaff' }}>
      <div className="container" style={{ maxWidth: '1220px' }}>
        {/* PaisaGo 4 Wealth Cards Grid (Exact ppHomeWealthWrapper match) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px'
          }}
        >
          {wealthCards.map((card) => {
            const CardIcon = card.icon;
            const isActive = activeTab === card.id;
            return (
              <div
                key={card.id}
                onClick={() => setActiveTab(card.id)}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  padding: '20px 22px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: isActive
                    ? '0 10px 25px rgba(5, 150, 105,  0.16)'
                    : '0 2px 14px rgba(0, 0, 0, 0.05)',
                  border: isActive
                    ? '2px solid #059669'
                    : '1.5px solid rgba(226, 232, 240, 0.8)',
                  background: isActive
                    ? 'linear-gradient(180deg, #ffffff 0%, #f7f1fe 100%)'
                    : '#ffffff',
                  cursor: 'pointer',
                  transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
                  transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(5, 150, 105,  0.14)';
                    e.currentTarget.style.borderColor = '#c4b5fd';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 14px rgba(0, 0, 0, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.8)';
                  }
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: card.iconBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      flexShrink: 0,
                      boxShadow: '0 6px 14px rgba(0,0,0,0.12)'
                    }}
                  >
                    <CardIcon size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#070d1e', margin: 0 }}>
                      {card.title}
                    </h3>
                    <p style={{ fontSize: '12.5px', color: '#64748b', margin: '3px 0 0', lineHeight: 1.35, fontWeight: 500 }}>
                      {card.subtitle}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: isActive ? '#059669' : '#ecfdf5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isActive ? '#ffffff' : '#059669',
                    flexShrink: 0,
                    marginLeft: '8px',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <ArrowRight size={16} />
                </div>

                {/* Subtle Active Pill Indicator at Bottom */}
                {isActive && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: '24px',
                      right: '24px',
                      height: '3px',
                      backgroundColor: '#059669',
                      borderRadius: '3px 3px 0 0'
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Active Tab Showcase Box with Left Panel & Cards Carousel Track */}
        {currentContent && (
          <div
            className="anim-showcase-box"
            style={{
              marginTop: '28px',
              background: 'linear-gradient(135deg, #f0fdf4 0%, #f4ecfd 50%, #f8f1fe 100%)',
              border: '1.5px solid rgba(5, 150, 105,  0.15)',
              borderRadius: '28px',
              padding: '40px 44px',
              display: 'flex',
              alignItems: 'center',
              gap: '36px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 16px 40px rgba(5, 150, 105,  0.08)'
            }}
          >
            {/* Left Panel */}
            <div style={{ flex: '0 0 320px', minWidth: '280px' }} className="anim-left-panel">
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#ecfdf5',
                  color: '#059669',
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  marginBottom: '14px'
                }}
              >
                <Sparkles size={14} />
                <span>PaisaGo {wealthCards.find((c) => c.id === activeTab)?.title}</span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(28px, 3.2vw, 36px)',
                  fontWeight: 800,
                  color: '#070d1e',
                  lineHeight: 1.2,
                  margin: '0 0 14px',
                  whiteSpace: 'pre-line'
                }}
              >
                {currentContent.headline}
              </h2>

              <p
                style={{
                  fontSize: '15px',
                  color: '#64748b',
                  lineHeight: 1.55,
                  margin: '0 0 24px',
                  fontWeight: 500
                }}
              >
                {currentContent.description}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <button
                  onClick={() => {
                    onSelectFeature({
                      id: activeTab,
                      title: `PaisaGo ${wealthCards.find((c) => c.id === activeTab)?.title}`,
                      desc: currentContent.description
                    });
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: '#059669',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '14.5px',
                    padding: '12px 22px',
                    borderRadius: '24px',
                    boxShadow: '0 6px 18px rgba(5, 150, 105,  0.25)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#4e1e82';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#059669';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span>{currentContent.exploreCta}</span>
                  <ArrowRight size={17} />
                </button>

                {/* Prev / Next Slider Arrows */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={scrollLeft}
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: '#ffffff',
                      border: '1.5px solid #e2e8f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0b132b',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#059669')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#e2e8f0')}
                    aria-label="Previous cards"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={scrollRight}
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: '#ffffff',
                      border: '1.5px solid #e2e8f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0b132b',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#059669')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#e2e8f0')}
                    aria-label="Next cards"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Panel: Cards Carousel Track */}
            <div
              ref={sliderRef}
              className="anim-cards-slider"
              style={{
                flex: 1,
                display: 'flex',
                gap: '20px',
                overflowX: 'auto',
                scrollBehavior: 'smooth',
                padding: '10px 4px 16px',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {currentContent.cards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => onSelectFeature({ id: card.id, title: card.title, desc: card.copy })}
                  className="anim-slide-card"
                  style={{
                    flex: '0 0 280px',
                    backgroundColor: '#ffffff',
                    borderRadius: '22px',
                    padding: '24px 20px',
                    border: '1.5px solid rgba(5, 150, 105,  0.12)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 16px 36px rgba(5, 150, 105,  0.18)';
                    e.currentTarget.style.borderColor = '#059669';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(5, 150, 105,  0.12)';
                  }}
                >
                  <div>
                    {/* Card Top Tag Badge */}
                    {card.tag && (
                      <div style={{ marginBottom: '14px' }}>
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            fontSize: '11px',
                            fontWeight: 800,
                            letterSpacing: '0.04em',
                            textTransform: 'uppercase',
                            padding: '4px 10px',
                            borderRadius: '16px',
                            backgroundColor: '#ecfdf5',
                            color: '#059669'
                          }}
                        >
                          {card.tag}
                        </span>
                      </div>
                    )}

                    {/* Interactive Bespoke Visual Display */}
                    <div
                      style={{
                        height: '140px',
                        backgroundColor: '#f0fdf4',
                        borderRadius: '16px',
                        border: '1px solid rgba(5, 150, 105,  0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '18px',
                        padding: '12px',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      {renderVisual(card.visualType)}
                    </div>

                    {/* Title */}
                    <h4
                      style={{
                        fontSize: '17px',
                        fontWeight: 800,
                        color: '#070d1e',
                        margin: '0 0 6px',
                        lineHeight: 1.3
                      }}
                    >
                      {card.title}
                    </h4>

                    {/* Copy */}
                    <p
                      style={{
                        fontSize: '13px',
                        color: '#64748b',
                        margin: 0,
                        lineHeight: 1.5,
                        fontWeight: 500
                      }}
                    >
                      {card.copy}
                    </p>
                  </div>

                  {/* Card Footer Link */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      marginTop: '18px',
                      paddingTop: '12px',
                      borderTop: '1px solid #f1f5f9',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#059669'
                    }}
                  >
                    <span>Get Started</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
