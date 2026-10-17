import React from 'react';
import {
  X,
  ShieldCheck,
  Sparkles,
  CheckCircle,
  ArrowRight,
  QrCode,
  Zap,
  TrendingUp,
  Shield,
  Banknote,
  Award,
  CreditCard,
  PieChart
} from 'lucide-react';

export default function FeatureDetailModal({ feature, onClose, onOpenQr }) {
  if (!feature) return null;

  const getIcon = () => {
    const text = (feature.title + ' ' + (feature.category || '')).toLowerCase();
    if (text.includes('gold') || text.includes('invest') || text.includes('sip') || text.includes('fund')) return TrendingUp;
    if (text.includes('insurance') || text.includes('cover') || text.includes('policy')) return Shield;
    if (text.includes('loan') || text.includes('credit') || text.includes('borrow')) return Banknote;
    if (text.includes('card')) return CreditCard;
    return Zap;
  };

  const Icon = getIcon();

  const getBulletPoints = () => {
    const text = (feature.title || '').toLowerCase();
    if (text.includes('sip') || text.includes('mutual')) {
      return [
        'Start investing from just ₹10/day with automated UPI autopay.',
        'Zero commission & zero broker fees with direct mutual fund schemes.',
        'Track daily compounding and NAV updates in real-time.',
        'Withdraw funds anytime directly to your verified bank account.'
      ];
    }
    if (text.includes('gold')) {
      return [
        '24K 99.99% pure gold certified by MMTC-PAMP.',
        'Insured in world-class grade vaults (Brinks) with free storage.',
        'Buy gold starting at just ₹1 or setup automated Daily Gold SIP.',
        '100% door-step insured physical delivery across all Indian pin codes.'
      ];
    }
    if (text.includes('insurance') || text.includes('bike') || text.includes('car') || text.includes('health')) {
      return [
        'Instant digital policy issuance in less than 2 minutes.',
        'Over 5,000+ cashless network garages and 10,000+ cashless hospitals.',
        'Zero paperwork: No prior inspection or physical medical checkup required.',
        'Dedicated 24/7 dedicated PaisaGo claims assistance desk.'
      ];
    }
    if (text.includes('loan') || text.includes('credit')) {
      return [
        'Pre-approved instant paperless approval up to ₹10 Lakhs.',
        'Direct disbursement into your bank account within minutes.',
        'Flexible EMI tenures ranging from 3 to 60 months.',
        'Transparent low interest rates with no hidden processing fees.'
      ];
    }
    return [
      'Bank-grade 256-bit encryption backed by NPCI & RBI guidelines.',
      'Instant transaction updates with real-time audio voice notifications.',
      'Accepted at over 40+ Million retail stores and websites across India.',
      'Zero convenience fees and zero payment gateway surcharges.'
    ];
  };

  const bullets = getBulletPoints();

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(18, 19, 26, 0.75)',
        backdropFilter: 'blur(6px)',
        zIndex: 2200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        animation: 'fadeIn 0.2s ease'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          maxWidth: '520px',
          width: '100%',
          boxShadow: '0 25px 60px rgba(0,0,0,0.25)',
          overflow: 'hidden',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            background: 'linear-gradient(135deg, #0b132b 0%, #059669 100%)',
            color: '#ffffff',
            padding: '24px',
            position: 'relative'
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '18px',
              right: '18px',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.18)',
              border: 'none',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '14px',
                backgroundColor: 'rgba(255,255,255,0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffd13b'
              }}
            >
              <Icon size={24} />
            </div>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#ffd13b', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                PAISAGO FINANCIAL SOLUTIONS
              </span>
              <h3 style={{ fontSize: '20px', fontWeight: 800, margin: '4px 0 0', color: '#ffffff' }}>
                {feature.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: 1.5, margin: 0 }}>
            {feature.desc || feature.copy || feature.description || 'Access verified financial products with seamless 1-tap activation on PaisaGo.'}
          </p>

          <div
            style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}
          >
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Key Benefits & Eligibility
            </div>
            {bullets.map((b, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#334155' }}>
                <CheckCircle size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{b}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#64748b' }}>
            <ShieldCheck size={16} color="#059669" />
            <span>Regulated by RBI, SEBI & IRDAI. 100% bank-grade data security.</span>
          </div>

          <button
            onClick={() => {
              onClose();
              if (onOpenQr) onOpenQr();
            }}
            style={{
              backgroundColor: '#059669',
              color: '#ffffff',
              border: 'none',
              padding: '13px 20px',
              borderRadius: '14px',
              fontSize: '14.5px',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 8px 20px rgba(5, 150, 105,  0.25)'
            }}
          >
            <QrCode size={18} />
            <span>Scan QR to Apply on PaisaGo App</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
