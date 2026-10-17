import React from 'react';
import { footerSections } from '../data/paisagoData';
import { ShieldCheck, Heart, ExternalLink } from 'lucide-react';

export default function Footer({ onOpenFooterLink }) {
  const handleClick = (e, title, section) => {
    e.preventDefault();
    if (onOpenFooterLink) {
      onOpenFooterLink(title, section);
    }
  };

  return (
    <footer style={{ backgroundColor: '#131127', color: '#ffffff', paddingTop: '70px', paddingBottom: '30px' }}>
      <div className="container">
        {/* 6 Columns Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: '32px',
            marginBottom: '50px'
          }}
        >
          {/* Col 1: Business Solutions */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>Business Solutions</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {footerSections.businessSolutions.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    onClick={(e) => handleClick(e, link.title, 'business')}
                    style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', transition: 'color 0.2s', textDecoration: 'none', cursor: 'pointer' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Insurance */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>Insurance</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {footerSections.insurance.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    onClick={(e) => handleClick(e, link.title, 'insurance')}
                    style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', transition: 'color 0.2s', textDecoration: 'none', cursor: 'pointer' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Investments */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>Investments</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {footerSections.investments.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    onClick={(e) => handleClick(e, link.title, 'investments')}
                    style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', transition: 'color 0.2s', textDecoration: 'none', cursor: 'pointer' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: General */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>General</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {footerSections.general.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    onClick={(e) => handleClick(e, link.title, 'general')}
                    style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', transition: 'color 0.2s', textDecoration: 'none', cursor: 'pointer' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Legal */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {footerSections.legal.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    onClick={(e) => handleClick(e, link.title, 'legal')}
                    style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', transition: 'color 0.2s', textDecoration: 'none', cursor: 'pointer' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 6: PaisaGo Group */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>PaisaGo Group</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {footerSections.paisaGoGroup.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    onClick={(e) => handleClick(e, link.title, 'group')}
                    style={{ fontSize: '13px', color: '#ffd13b', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none', cursor: 'pointer' }}
                  >
                    {link.title} <ExternalLink size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.12)', marginBottom: '30px' }} />

        {/* Bottom Bar: Logo, Copyright & Socials */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #059669 0%, #06b6d4 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 2px 10px rgba(5, 150, 105, 0.3)'
                }}
              >
                <span style={{ color: '#ffffff', fontFamily: "'Outfit', 'Mukta', sans-serif", fontSize: '18px', fontWeight: 900, lineHeight: 1 }}>पै</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline' }}>
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 900,
                    fontSize: '22px',
                    color: '#ffffff',
                    letterSpacing: '-0.3px',
                    lineHeight: 1
                  }}
                >
                  Paisa
                </span>
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 900,
                    fontSize: '22px',
                    color: '#10b981',
                    letterSpacing: '-0.3px',
                    lineHeight: 1
                  }}
                >
                  Go
                </span>
              </div>
            </div>
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
              © 2026 PaisaGo India Private Limited. All rights reserved.
            </span>
          </div>

          <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>
            <span>RBI Authorized PPI</span>
            <span>•</span>
            <span>ISO 27001 Certified</span>
            <span>•</span>
            <span>PCI-DSS Level 1</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
