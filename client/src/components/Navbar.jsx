import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  QrCode,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Store,
  Globe,
  Building2,
  Briefcase,
  Newspaper,
  BookOpen,
  PhoneCall,
  Sparkles,
  CreditCard,
  Link2,
  HandCoins,
  Megaphone,
  Code2,
  Zap,
  Coins,
  TrendingUp,
  Shield,
  Banknote,
  Users,
  PieChart,
  Bike,
  Heart,
  Activity,
  Award,
  Lock,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function Navbar({
  onOpenQr,
  onOpenService,
  onOpenCompanyInfo,
  onOpenTravel,
  onOpenBusiness,
  onOpenFeature
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [solutionsTab, setSolutionsTab] = useState('business');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Complete data for Company Dropdown
  const companyLinks = [
    {
      title: 'About Us',
      subtitle: 'Our mission, leadership & journey across India',
      icon: Building2,
      anchor: '#about-us'
    },
    {
      title: 'Careers',
      subtitle: 'Join our world-class engineering & product team',
      icon: Briefcase,
      tag: "We're Hiring!",
      anchor: '#careers'
    },
    {
      title: 'Press & Media Kit',
      subtitle: 'Official brand assets, news & press announcements',
      icon: Newspaper,
      anchor: '#press'
    },
    {
      title: 'PaisaGo Blog',
      subtitle: 'Tech architecture, fintech insights & stories',
      icon: BookOpen,
      anchor: '#blog'
    },
    {
      title: 'Trust & Safety',
      subtitle: 'ISO 27001 bank-grade data security & fraud shield',
      icon: ShieldCheck,
      anchor: '#trust'
    },
    {
      title: 'Investor Relations',
      subtitle: 'Financial statements, filings & ESG governance',
      icon: Award,
      anchor: '#investors'
    },
    {
      title: 'Contact Us',
      subtitle: '24/7 dedicated support & nodal grievance desk',
      icon: PhoneCall,
      anchor: '#contact'
    }
  ];

  // Complete data for Our Solutions (For Businesses)
  const businessSolutionsData = [
    {
      category: 'Offline Merchant Solutions',
      items: [
        {
          id: 'smart-speaker',
          title: 'SmartSpeaker Voice Box',
          subtitle: 'Real-time payment audio alerts in 21 Indian languages',
          tag: '4G + Voice',
          icon: Smartphone,
          anchor: '#smart-devices'
        },
        {
          id: 'smart-pod',
          title: 'PaisaGo SMART POD',
          subtitle: 'Built-in contactless tap-and-pay NFC + instant voice alert',
          tag: 'Tap & Pay',
          icon: Zap,
          anchor: '#smart-devices'
        },
        {
          id: 'pos-edc',
          title: 'POS EDC Machine',
          subtitle: 'Android-powered touch POS with thermal printer & scanner',
          tag: 'All Cards',
          icon: Store,
          anchor: '#smart-devices'
        },
        {
          id: 'qr-standee',
          title: 'PaisaGo QR Standee',
          subtitle: 'Universal merchant QR for all UPI apps at zero setup fee',
          tag: 'Zero Fee',
          icon: QrCode,
          anchor: '#smart-devices'
        }
      ]
    },
    {
      category: 'Online Merchant Solutions',
      items: [
        {
          id: 'payment-gateway',
          title: 'Payment Gateway',
          subtitle: 'Industry-best 99.99% success rate with 100+ payment methods',
          tag: 'Instant Live',
          icon: CreditCard,
          anchor: '#business-solutions'
        },
        {
          id: 'payment-aggregator',
          title: 'Payment Aggregator',
          subtitle: 'Accept online payments at 0% introductory fee on UPI & cards',
          tag: '1.99% Free',
          icon: Building2,
          anchor: '#business-solutions'
        },
        {
          id: 'payment-links',
          title: 'Payment Links & QR',
          subtitle: 'Collect customer payments via WhatsApp, SMS & social channels',
          tag: 'No Website Needed',
          icon: Link2,
          anchor: '#business-solutions'
        },
        {
          id: 'express-checkout',
          title: 'Express Checkout',
          subtitle: '1-click lightning checkout with auto-filled verified addresses',
          tag: 'High Conversion',
          icon: ArrowRight,
          anchor: '#business-solutions'
        }
      ]
    },
    {
      category: 'Enterprise & Growth',
      items: [
        {
          id: 'merchant-lending',
          title: 'Merchant Credit Line',
          subtitle: 'Instant working capital loans with automatic daily micro-deductions',
          tag: 'Zero Collateral',
          icon: HandCoins,
          anchor: '#business-solutions'
        },
        {
          id: 'paisago-ads',
          title: 'PaisaGo Ads Platform',
          subtitle: 'High-intent brand targeting across 500M+ active transacting users',
          tag: 'High ROI',
          icon: Megaphone,
          anchor: '#business-solutions'
        },
        {
          id: 'developer-apis',
          title: 'Developer APIs & Webhooks',
          subtitle: 'Robust SDKs and developer sandboxes for Web, Android & iOS',
          tag: 'Ready Docs',
          icon: Code2,
          anchor: '#business-solutions'
        },
        {
          id: 'partner-program',
          title: 'Partner Program',
          subtitle: 'Earn attractive recurring revenue shares as an authorized partner',
          tag: 'Rev-Share',
          icon: Users,
          anchor: '#business-solutions'
        }
      ]
    }
  ];

  // Complete data for Our Solutions (For Consumers)
  const consumerSolutionsData = [
    {
      category: 'Payments & Transfers',
      items: [
        {
          id: 'upi-transfer',
          title: 'UPI Money Transfer',
          subtitle: 'Instant 24/7 bank-to-bank transfers with zero hidden charges',
          tag: 'Instant',
          icon: Zap,
          anchor: '#core-tabs'
        },
        {
          id: 'upi-lite',
          title: 'UPI Lite & UPI Circle',
          subtitle: '0-second pin-less payments under ₹500 & family delegation limits',
          tag: 'Pin-less',
          icon: Users,
          anchor: '#core-tabs'
        },
        {
          id: 'rupay-cc',
          title: 'RuPay Credit Card on UPI',
          subtitle: 'Link your RuPay card and pay any merchant QR with reward points',
          tag: 'Rewards',
          icon: CreditCard,
          anchor: '#core-tabs'
        },
        {
          id: 'recharges-bills',
          title: 'Recharges & Bill Payments',
          subtitle: 'Mobile, DTH, FASTag, electricity, gas, water & credit card bills',
          tag: 'BBPS Approved',
          icon: Smartphone,
          anchor: '#convenience'
        }
      ]
    },
    {
      category: 'Wealth & Investments',
      items: [
        {
          id: 'digital-gold',
          title: '24K Pure Digital Gold',
          subtitle: '99.99% certified MMTC-PAMP insured gold stored in secure vaults',
          tag: 'From ₹5',
          icon: Coins,
          anchor: '#smart-savings'
        },
        {
          id: 'gold-sip',
          title: 'Monthly Gold SIP',
          subtitle: 'Accumulate physical gold automatically from ₹100 every month',
          tag: 'Automated',
          icon: TrendingUp,
          anchor: '#smart-savings'
        },
        {
          id: 'mutual-funds',
          title: 'Direct Mutual Funds',
          subtitle: 'CRISP-ranked direct mutual fund SIPs starting from ₹10/day',
          tag: 'Zero Commission',
          icon: PieChart,
          anchor: '#smart-savings'
        },
        {
          id: 'nps-retirement',
          title: 'NPS Retirement Corpus',
          subtitle: 'Government-backed pension scheme with extra ₹50k tax savings',
          tag: 'Tax Saver',
          icon: Shield,
          anchor: '#smart-savings'
        }
      ]
    },
    {
      category: 'Insurance & Loans',
      items: [
        {
          id: 'motor-insurance',
          title: 'Bike & Car Insurance',
          subtitle: 'Instant two-wheeler & car policies with 5000+ cashless garages',
          tag: 'In 2 Mins',
          icon: Bike,
          anchor: '#core-tabs'
        },
        {
          id: 'health-insurance',
          title: 'Health & Life Insurance',
          subtitle: 'Comprehensive ₹1 Crore hospitalization cover with no health checkups',
          tag: 'Up to ₹1 Cr',
          icon: Heart,
          anchor: '#core-tabs'
        },
        {
          id: 'personal-loan',
          title: 'Instant Personal Loan',
          subtitle: 'Pre-approved digital loans up to ₹10 Lakh with direct bank transfer',
          tag: 'Zero Paperwork',
          icon: Banknote,
          anchor: '#core-tabs'
        },
        {
          id: 'free-credit-score',
          title: 'Free Credit Score Check',
          subtitle: 'Monitor your detailed Experian & CRIF credit score with free tips',
          tag: 'Monthly Refresh',
          icon: Activity,
          anchor: '#core-tabs'
        }
      ]
    }
  ];

  const handleItemClick = (item) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    if (item.anchor) {
      const targetId = item.anchor.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    const titleLower = (item.title || '').toLowerCase();
    const idLower = (item.id || '').toLowerCase();

    // 1. Company & Informational
    if (
      titleLower.includes('about') ||
      titleLower.includes('career') ||
      titleLower.includes('press') ||
      titleLower.includes('blog') ||
      titleLower.includes('trust') ||
      titleLower.includes('investor') ||
      titleLower.includes('contact') ||
      titleLower.includes('terms') ||
      titleLower.includes('privacy') ||
      titleLower.includes('grievance') ||
      titleLower.includes('policy')
    ) {
      if (onOpenCompanyInfo) {
        onOpenCompanyInfo(item);
        return;
      }
    }

    // 2. Business & Merchant Solutions
    if (
      idLower.includes('speaker') ||
      idLower.includes('pod') ||
      idLower.includes('pos') ||
      idLower.includes('edc') ||
      idLower.includes('gateway') ||
      idLower.includes('aggregator') ||
      idLower.includes('merchant') ||
      titleLower.includes('business') ||
      titleLower.includes('gateway') ||
      titleLower.includes('edc') ||
      titleLower.includes('merchant')
    ) {
      if (onOpenBusiness) {
        onOpenBusiness(item.title);
        return;
      }
    }

    // 3. Travel & Commute
    if (
      idLower.includes('flight') ||
      idLower.includes('bus') ||
      idLower.includes('train') ||
      idLower.includes('hotel') ||
      idLower.includes('stay') ||
      idLower.includes('travel')
    ) {
      const travelEl = document.getElementById('travel');
      if (travelEl) {
        travelEl.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      if (onOpenTravel) {
        onOpenTravel(item);
        return;
      }
    }

    // 4. Financial Products (Cards, SIP, Insurance, Loans)
    if (
      idLower.includes('insurance') ||
      idLower.includes('loan') ||
      idLower.includes('sip') ||
      idLower.includes('mutual') ||
      idLower.includes('gold') ||
      idLower.includes('credit')
    ) {
      if (onOpenFeature) {
        onOpenFeature(item);
        return;
      }
    }

    // 5. Utility Recharges & BBPS
    if (onOpenService) {
      onOpenService({
        id: item.id || item.title.toLowerCase().replace(/\s+/g, '-'),
        title: item.title,
        description: item.subtitle
      });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: '#ffffff',
          boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : '0 1px 3px rgba(0,0,0,0.05)',
          transition: 'all 0.25s ease'
        }}
      >
        <div className="container navbar-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div
              className="navbar-logo-icon"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #059669 0%, #06b6d4 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 3px 12px rgba(5, 150, 105, 0.35)'
              }}
            >
              <span style={{ color: '#ffffff', fontFamily: "'Outfit', 'Mukta', sans-serif", fontSize: '20px', fontWeight: 900, lineHeight: 1 }}>पै</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
              <span
                className="navbar-logo-text"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 900,
                  fontSize: '26px',
                  color: '#0b132b',
                  letterSpacing: '-0.4px',
                  lineHeight: 1
                }}
              >
                Paisa
              </span>
              <span
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 900,
                  fontSize: '26px',
                  color: '#059669',
                  letterSpacing: '-0.4px',
                  lineHeight: 1
                }}
              >
                Go
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-nav">
            {/* 1. Company Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: activeDropdown === 'company' ? '#059669' : '#374151',
                  padding: '8px 4px',
                  border: 'none',
                  backgroundColor: 'transparent',
                  cursor: 'pointer'
                }}
              >
                Company <ChevronDown size={16} />
              </button>

              {activeDropdown === 'company' && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '320px',
                    backgroundColor: '#ffffff',
                    borderRadius: '18px',
                    boxShadow: '0 18px 45px rgba(5, 150, 105,  0.15)',
                    padding: '12px',
                    border: '1.5px solid rgba(5, 150, 105,  0.12)',
                    animation: 'fadeIn 0.2s ease',
                    zIndex: 1000
                  }}
                >
                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '6px 12px 10px' }}>
                    About PaisaGo
                  </div>
                  {companyLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        onClick={() => handleItemClick(item)}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          padding: '10px 12px',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          transition: 'all 0.18s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#f0fdf4';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        <div
                          style={{
                            width: '34px',
                            height: '34px',
                            borderRadius: '10px',
                            backgroundColor: '#ecfdf5',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#059669',
                            flexShrink: 0
                          }}
                        >
                          <Icon size={18} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ fontSize: '14px', fontWeight: 700, color: '#070d1e' }}>
                              {item.title}
                            </span>
                            {item.tag && (
                              <span style={{ fontSize: '9.5px', fontWeight: 800, backgroundColor: '#dcfce7', color: '#15803d', padding: '2px 6px', borderRadius: '10px' }}>
                                {item.tag}
                              </span>
                            )}
                          </div>
                          <p style={{ fontSize: '11.5px', color: '#64748b', margin: '2px 0 0', lineHeight: 1.35 }}>
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 2. Our Solutions Mega-Menu */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: activeDropdown === 'solutions' ? '#059669' : '#374151',
                  padding: '8px 4px',
                  border: 'none',
                  backgroundColor: 'transparent',
                  cursor: 'pointer'
                }}
              >
                Our Solutions <ChevronDown size={16} />
              </button>

              {activeDropdown === 'solutions' && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-260px',
                    width: '920px',
                    backgroundColor: '#ffffff',
                    borderRadius: '24px',
                    boxShadow: '0 25px 60px rgba(5, 150, 105,  0.18)',
                    padding: '24px 28px',
                    border: '1.5px solid rgba(5, 150, 105,  0.12)',
                    animation: 'fadeIn 0.2s ease',
                    zIndex: 1000
                  }}
                >
                  {/* Top Sub-Tabs Toggle: For Businesses vs For Consumers */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderBottom: '1px solid #f1f5f9',
                      paddingBottom: '16px',
                      marginBottom: '20px'
                    }}
                  >
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button
                        onClick={() => setSolutionsTab('business')}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '8px 18px',
                          borderRadius: '24px',
                          fontSize: '14px',
                          fontWeight: 700,
                          backgroundColor: solutionsTab === 'business' ? '#059669' : '#f8fafc',
                          color: solutionsTab === 'business' ? '#ffffff' : '#475569',
                          border: solutionsTab === 'business' ? '1.5px solid #059669' : '1.5px solid #e2e8f0',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          boxShadow: solutionsTab === 'business' ? '0 4px 12px rgba(5, 150, 105,  0.25)' : 'none'
                        }}
                      >
                        <Store size={16} />
                        <span>For Businesses</span>
                      </button>

                      <button
                        onClick={() => setSolutionsTab('consumer')}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '8px 18px',
                          borderRadius: '24px',
                          fontSize: '14px',
                          fontWeight: 700,
                          backgroundColor: solutionsTab === 'consumer' ? '#059669' : '#f8fafc',
                          color: solutionsTab === 'consumer' ? '#ffffff' : '#475569',
                          border: solutionsTab === 'consumer' ? '1.5px solid #059669' : '1.5px solid #e2e8f0',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          boxShadow: solutionsTab === 'consumer' ? '0 4px 12px rgba(5, 150, 105,  0.25)' : 'none'
                        }}
                      >
                        <Smartphone size={16} />
                        <span>For Consumers</span>
                      </button>
                    </div>

                    <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>
                      {solutionsTab === 'business'
                        ? 'Empowering 40M+ merchants pan-India'
                        : 'Powering 500M+ registered users'}
                    </div>
                  </div>

                  {/* 3-Column Solutions Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                    {(solutionsTab === 'business' ? businessSolutionsData : consumerSolutionsData).map(
                      (col) => (
                        <div key={col.category}>
                          <div
                            style={{
                              fontSize: '12px',
                              fontWeight: 800,
                              color: '#059669',
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em',
                              marginBottom: '12px',
                              paddingBottom: '6px',
                              borderBottom: '2px solid #ecfdf5'
                            }}
                          >
                            {col.category}
                          </div>

                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {col.items.map((item) => {
                              const ItemIcon = item.icon;
                              return (
                                <div
                                  key={item.title}
                                  onClick={() => handleItemClick(item)}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '12px',
                                    padding: '10px 10px',
                                    borderRadius: '14px',
                                    cursor: 'pointer',
                                    transition: 'all 0.18s ease',
                                    border: '1px solid transparent'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#f0fdf4';
                                    e.currentTarget.style.borderColor = '#a7f3d0';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.borderColor = 'transparent';
                                  }}
                                >
                                  <div
                                    style={{
                                      width: '36px',
                                      height: '36px',
                                      borderRadius: '10px',
                                      backgroundColor: '#ecfdf5',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      color: '#059669',
                                      flexShrink: 0
                                    }}
                                  >
                                    <ItemIcon size={18} />
                                  </div>
                                  <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                                      <span style={{ fontSize: '13.5px', fontWeight: 700, color: '#070d1e' }}>
                                        {item.title}
                                      </span>
                                      {item.tag && (
                                        <span
                                          style={{
                                            fontSize: '9px',
                                            fontWeight: 800,
                                            backgroundColor: '#f1f5f9',
                                            color: '#059669',
                                            padding: '1px 6px',
                                            borderRadius: '8px'
                                          }}
                                        >
                                          {item.tag}
                                        </span>
                                      )}
                                    </div>
                                    <p
                                      style={{
                                        fontSize: '11px',
                                        color: '#64748b',
                                        margin: '3px 0 0',
                                        lineHeight: 1.35,
                                        fontWeight: 500
                                      }}
                                    >
                                      {item.subtitle}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  {/* Mega-Menu Bottom Banner */}
                  <div
                    style={{
                      marginTop: '20px',
                      padding: '12px 18px',
                      borderRadius: '14px',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Sparkles size={16} color="#059669" />
                      <span style={{ fontSize: '12.5px', color: '#475569', fontWeight: 600 }}>
                        {solutionsTab === 'business'
                          ? 'Need custom enterprise payment rates or developer integration?'
                          : 'Download the official PaisaGo app for instant UPI payments & investments'}
                      </span>
                    </div>

                    <a
                      href={solutionsTab === 'business' ? '#business-solutions' : '#download'}
                      onClick={() => setActiveDropdown(null)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12.5px',
                        fontWeight: 700,
                        color: '#059669',
                        textDecoration: 'none'
                      }}
                    >
                      <span>{solutionsTab === 'business' ? 'Contact Sales' : 'Get PaisaGo App'}</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <a
              href="#pulse"
              style={{
                fontSize: '15px',
                fontWeight: 600,
                color: '#374151',
                transition: 'color 0.2s',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#059669')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#374151')}
            >
              PaisaGo Pulse
            </a>

            <a
              href="#international"
              style={{
                fontSize: '15px',
                fontWeight: 600,
                color: '#374151',
                transition: 'color 0.2s',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#059669')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#374151')}
            >
              International UPI
            </a>

            <a
              href="#trust"
              style={{
                fontSize: '15px',
                fontWeight: 600,
                color: '#374151',
                transition: 'color 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#059669')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#374151')}
            >
              <ShieldCheck size={16} color="#16a34a" /> Trust & Safety
            </a>
          </nav>

          {/* Right Action: Download App Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button
              onClick={onOpenQr}
              className="btn-primary navbar-download-btn"
              style={{ fontSize: '14px', padding: '10px 22px' }}
            >
              <QrCode size={18} />
              <span>Download App</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ display: 'none', padding: '8px', color: '#1e293b' }}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              backgroundColor: '#ffffff',
              borderTop: '1px solid #e2e8f0',
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              boxShadow: '0 12px 24px rgba(0,0,0,0.08)',
              maxHeight: '80vh',
              overflowY: 'auto'
            }}
          >
            {/* Mobile Accordion: For Businesses */}
            <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '10px' }}>
              <button
                onClick={() =>
                  setMobileExpandedSection(mobileExpandedSection === 'business' ? null : 'business')
                }
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#070d1e',
                  padding: '8px 0',
                  border: 'none',
                  backgroundColor: 'transparent'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Store size={18} color="#059669" />
                  <span>For Businesses</span>
                </div>
                <ChevronDown
                  size={16}
                  style={{
                    transform: mobileExpandedSection === 'business' ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.2s'
                  }}
                />
              </button>
              {mobileExpandedSection === 'business' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '8px 0 8px 12px' }}>
                  {businessSolutionsData.flatMap((c) => c.items).map((item) => (
                    <div
                      key={item.title}
                      onClick={() => handleItemClick(item)}
                      style={{ fontSize: '13.5px', color: '#475569', padding: '4px 0', fontWeight: 600, cursor: 'pointer' }}
                    >
                      {item.title}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Accordion: For Consumers */}
            <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '10px' }}>
              <button
                onClick={() =>
                  setMobileExpandedSection(mobileExpandedSection === 'consumer' ? null : 'consumer')
                }
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#070d1e',
                  padding: '8px 0',
                  border: 'none',
                  backgroundColor: 'transparent'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Smartphone size={18} color="#059669" />
                  <span>For Consumers</span>
                </div>
                <ChevronDown
                  size={16}
                  style={{
                    transform: mobileExpandedSection === 'consumer' ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.2s'
                  }}
                />
              </button>
              {mobileExpandedSection === 'consumer' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '8px 0 8px 12px' }}>
                  {consumerSolutionsData.flatMap((c) => c.items).map((item) => (
                    <div
                      key={item.title}
                      onClick={() => handleItemClick(item)}
                      style={{ fontSize: '13.5px', color: '#475569', padding: '4px 0', fontWeight: 600, cursor: 'pointer' }}
                    >
                      {item.title}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Accordion: Company */}
            <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '10px' }}>
              <button
                onClick={() =>
                  setMobileExpandedSection(mobileExpandedSection === 'company' ? null : 'company')
                }
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#070d1e',
                  padding: '8px 0',
                  border: 'none',
                  backgroundColor: 'transparent'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Building2 size={18} color="#059669" />
                  <span>Company</span>
                </div>
                <ChevronDown
                  size={16}
                  style={{
                    transform: mobileExpandedSection === 'company' ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.2s'
                  }}
                />
              </button>
              {mobileExpandedSection === 'company' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '8px 0 8px 12px' }}>
                  {companyLinks.map((item) => (
                    <div
                      key={item.title}
                      onClick={() => handleItemClick(item)}
                      style={{ fontSize: '13.5px', color: '#475569', padding: '4px 0', fontWeight: 600, cursor: 'pointer' }}
                    >
                      {item.title}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <a href="#pulse" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, fontSize: '15px', color: '#334155' }}>PaisaGo Pulse Insights</a>
            <a href="#international" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, fontSize: '15px', color: '#334155' }}>International UPI</a>
            <a href="#trust" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, fontSize: '15px', color: '#334155' }}>Trust & Safety</a>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenQr(); }}
              className="btn-primary"
              style={{ width: '100%', marginTop: '8px' }}
            >
              <QrCode size={18} /> Download App
            </button>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 960px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </>
  );
}
