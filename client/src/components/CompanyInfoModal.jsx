import React from 'react';
import {
  X,
  Building2,
  Briefcase,
  Newspaper,
  BookOpen,
  ShieldCheck,
  Award,
  PhoneCall,
  CheckCircle,
  ExternalLink,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Download,
  Users
} from 'lucide-react';

export default function CompanyInfoModal({ item, onClose }) {
  if (!item) return null;

  const key = (item.id || item.title || '').toLowerCase().replace(/[^a-z0-9]/g, '');

  const getContent = () => {
    if (key.includes('about')) {
      return {
        title: 'About PaisaGo',
        badge: 'Corporate Overview',
        icon: Building2,
        subtitle: 'Driving Financial Inclusion Across Bharat',
        content: (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
              PaisaGo is India’s premier fintech platform revolutionizing digital payments, investments, mutual funds, gold, and insurance for over <strong>500 Million registered users</strong> and <strong>40 Million merchant partners</strong>.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', margin: '8px 0' }}>
              <div style={{ backgroundColor: '#f8fafc', padding: '14px', borderRadius: '14px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#059669' }}>500M+</div>
                <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600 }}>Registered Users</div>
              </div>
              <div style={{ backgroundColor: '#f8fafc', padding: '14px', borderRadius: '14px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#00baf2' }}>40M+</div>
                <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600 }}>Merchant Stores</div>
              </div>
              <div style={{ backgroundColor: '#f8fafc', padding: '14px', borderRadius: '14px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#16a34a' }}>99.99%</div>
                <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600 }}>UPI Uptime</div>
              </div>
            </div>
            <div style={{ backgroundColor: '#f0fdf4', padding: '16px', borderRadius: '16px', border: '1.5px solid #a7f3d0' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#059669', margin: '0 0 6px' }}>Our Mission</h4>
              <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
                To empower every Indian citizen and enterprise with frictionless, transparent, and ultra-secure digital financial rails, bridging the rural-urban economic divide.
              </p>
            </div>
          </div>
        )
      };
    }

    if (key.includes('career')) {
      return {
        title: 'Careers at PaisaGo',
        badge: "We're Hiring!",
        icon: Briefcase,
        subtitle: 'Build the Future of Fintech with Us',
        content: (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
              Join a team of passionate engineers, designers, data scientists, and product thinkers shaping the financial architecture for 1.4 billion people.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { role: 'Staff Frontend Engineer (React/TypeScript)', location: 'Bengaluru, KA', dept: 'Consumer App' },
                { role: 'Senior Backend Engineer (Go/Distributed Systems)', location: 'Bengaluru, KA', dept: 'UPI Switch Core' },
                { role: 'Staff Product Manager - Merchant Lending', location: 'Bengaluru, KA', dept: 'Credit & Lending' },
                { role: 'Security Architect (ISO 27001 / Cloud Security)', location: 'Bengaluru, KA', dept: 'InfraSec' }
              ].map((pos) => (
                <div key={pos.role} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', borderRadius: '12px', border: '1px solid #e2e8f0', backgroundColor: '#ffffff' }}>
                  <div>
                    <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#070d1e' }}>{pos.role}</div>
                    <div style={{ fontSize: '11.5px', color: '#64748b' }}>{pos.dept} • {pos.location}</div>
                  </div>
                  <button
                    onClick={() => alert(`Application submitted for ${pos.role}! Our talent team will review your profile.`)}
                    style={{ backgroundColor: '#059669', color: '#fff', border: 'none', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        )
      };
    }

    if (key.includes('press') || key.includes('media')) {
      return {
        title: 'Press & Media Kit',
        badge: 'Newsroom',
        icon: Newspaper,
        subtitle: 'Official Announcements & Brand Resources',
        content: (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.5, margin: 0 }}>
              Official brand guidelines, high-resolution logos, executive bios, and recent press statements.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ padding: '14px', borderRadius: '14px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#070d1e' }}>PaisaGo Master Brand Kit (SVG & PNG)</div>
                  <div style={{ fontSize: '11.5px', color: '#64748b' }}>Includes Hindi 'पै' emblem, wordmarks & color codes</div>
                </div>
                <button
                  onClick={() => alert('Downloading official PaisaGo Brand Kit package...')}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: '#ffffff', border: '1.5px solid #059669', color: '#059669', padding: '6px 12px', borderRadius: '16px', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}
                >
                  <Download size={14} /> Download
                </button>
              </div>
              <div style={{ padding: '12px', borderRadius: '12px', backgroundColor: '#f0fdf4', fontSize: '12.5px', color: '#059669', fontWeight: 600 }}>
                For press inquiries, contact: <strong>press@paisago.in</strong>
              </div>
            </div>
          </div>
        )
      };
    }

    if (key.includes('trust') || key.includes('safety') || key.includes('security')) {
      return {
        title: 'Trust & Safety at PaisaGo',
        badge: 'Enterprise Security',
        icon: ShieldCheck,
        subtitle: 'Bank-Grade Security for Every Transaction',
        content: (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.5, margin: 0 }}>
              We deploy multi-layered defensive infrastructure, AI-driven fraud anomaly detection, and end-to-end hardware encryption.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
              {[
                { title: 'PCI-DSS Level 1', desc: 'Global payment card security standard' },
                { title: 'ISO 27001 Certified', desc: 'Highest standard for data management' },
                { title: '256-Bit SSL Encryption', desc: 'Military-grade end-to-end encryption' },
                { title: 'NPCI & RBI Compliant', desc: 'Certified UPI rail distribution partner' }
              ].map((c) => (
                <div key={c.title} style={{ padding: '12px', borderRadius: '12px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: '#166534' }}>
                    <CheckCircle size={15} color="#16a34a" /> {c.title}
                  </div>
                  <div style={{ fontSize: '11px', color: '#15803d', marginTop: '3px' }}>{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )
      };
    }

    if (key.includes('contact') || key.includes('support')) {
      return {
        title: 'Contact PaisaGo Support',
        badge: '24/7 Assistance',
        icon: PhoneCall,
        subtitle: 'We Are Here to Help You Round the Clock',
        content: (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ padding: '14px', borderRadius: '14px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <PhoneCall size={18} color="#059669" />
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#070d1e' }}>Toll-Free Customer Care</div>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: '#059669' }}>1800-200-1947 / 080-6872-7374</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} color="#00baf2" />
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#070d1e' }}>Email Support</div>
                  <div style={{ fontSize: '13px', color: '#475569' }}>support@paisago.in / grievance@paisago.in</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={18} color="#e11d48" />
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#070d1e' }}>Corporate Headquarters</div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>PaisaGo Tech Park, Outer Ring Road, Bellandur, Bengaluru 560103</div>
                </div>
              </div>
            </div>
          </div>
        )
      };
    }

    // Default Informational Card
    return {
      title: item.title,
      badge: 'Information',
      icon: Building2,
      subtitle: item.subtitle || item.description || 'PaisaGo Official Platform',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
            {item.description || item.subtitle || 'Learn more about PaisaGo fintech ecosystem and solutions.'}
          </p>
          <div style={{ backgroundColor: '#f0fdf4', padding: '16px', borderRadius: '16px', border: '1px solid #a7f3d0' }}>
            <p style={{ fontSize: '13px', color: '#059669', margin: 0, fontWeight: 600 }}>
              Explore comprehensive documentation, safety notices, and financial product terms directly inside the PaisaGo App.
            </p>
          </div>
        </div>
      )
    };
  };

  const data = getContent();
  const Icon = data.icon;

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
            background: 'linear-gradient(135deg, #059669 0%, #0b132b 100%)',
            padding: '24px 28px',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                backgroundColor: 'rgba(255,255,255,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
              }}
            >
              <Icon size={24} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, backgroundColor: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '12px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {data.badge}
                </span>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, margin: '4px 0 0', color: '#ffffff' }}>
                {data.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.15)',
              border: 'none',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ padding: '24px 28px' }}>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#059669', marginBottom: '12px' }}>
            {data.subtitle}
          </div>

          {data.content}

          <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={onClose}
              style={{
                backgroundColor: '#059669',
                color: '#ffffff',
                border: 'none',
                padding: '10px 24px',
                borderRadius: '24px',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
