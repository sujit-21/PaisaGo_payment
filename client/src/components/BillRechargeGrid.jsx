import React, { useState, useEffect } from 'react';
import {
  Smartphone,
  Car,
  Tv,
  Zap,
  CreditCard,
  Home,
  Flame,
  Droplets,
  Wifi,
  Fuel,
  BadgePercent,
  Building2,
  Sparkles,
  ChevronRight,
  LayoutGrid,
  SlidersHorizontal
} from 'lucide-react';
import { fetchServices } from '../services/api';

const iconMap = {
  Smartphone,
  Car,
  Tv,
  Zap,
  CreditCard,
  Home,
  Flame,
  Droplets,
  Wifi,
  Fuel,
  BadgePercent,
  Building2
};

const defaultServices = [
  { id: 'mobile-recharge', title: 'Mobile Recharge', icon: 'Smartphone', badge: 'Popular' },
  { id: 'fastag-recharge', title: 'FASTag Recharge', icon: 'Car', badge: 'Instant' },
  { id: 'dth-recharge', title: 'DTH Recharge', icon: 'Tv', badge: '' },
  { id: 'electricity-bill', title: 'Electricity', icon: 'Zap', badge: 'BBPS' },
  { id: 'credit-card-payment', title: 'Credit Card Payment', icon: 'CreditCard', badge: 'Zero Fee' },
  { id: 'rent-payment', title: 'Rent Payment', icon: 'Home', badge: 'Earn Rewards' },
  { id: 'piped-gas', title: 'Piped Gas', icon: 'Flame', badge: '' },
  { id: 'water-bill', title: 'Water Bill', icon: 'Droplets', badge: '' },
  { id: 'broadband-landline', title: 'Broadband / Landline', icon: 'Wifi', badge: '' },
  { id: 'book-cylinder', title: 'Book a Cylinder', icon: 'Fuel', badge: '' },
  { id: 'loan-repayment', title: 'Loan Repayment', icon: 'BadgePercent', badge: '' },
  { id: 'municipal-tax', title: 'Municipal Tax', icon: 'Building2', badge: '' }
];

export default function BillRechargeGrid({ onSelectService }) {
  const [services, setServices] = useState(defaultServices);
  const [viewMode, setViewMode] = useState('marquee'); // 'marquee' or 'grid'

  useEffect(() => {
    async function load() {
      const data = await fetchServices();
      if (data && data.length > 0) {
        setServices(data);
      }
    }
    load();
  }, []);

  // Split into 2 rows for infinite ticker
  const row1 = services.slice(0, Math.ceil(services.length / 2));
  const row2 = services.slice(Math.ceil(services.length / 2));

  // Duplicate for seamless looping
  const loopRow1 = [...row1, ...row1, ...row1, ...row1];
  const loopRow2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <section id="convenience" style={{ padding: '70px 0', backgroundColor: '#fcfaff', borderTop: '1px solid var(--pp-gray-200)', borderBottom: '1px solid var(--pp-gray-200)', overflow: 'hidden' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--pp-purple)', fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
              <Sparkles size={16} />
              Bharat BillPay (BBPS) & Quick Recharges
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', color: 'var(--pp-gray-900)' }}>
              Convenience at your fingertips
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--pp-gray-600)', marginTop: '4px' }}>
              Recharge mobile & FASTag, clear electricity and water bills, pay credit cards, or book LPG cylinder with zero surcharge.
            </p>
          </div>

          {/* Toggle between Marquee and Full Grid */}
          <div style={{ display: 'flex', gap: '8px', backgroundColor: '#ffffff', padding: '4px', borderRadius: '24px', border: '1px solid var(--pp-gray-200)' }}>
            <button
              onClick={() => setViewMode('marquee')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '18px',
                fontSize: '13px',
                fontWeight: 600,
                backgroundColor: viewMode === 'marquee' ? 'var(--pp-purple)' : 'transparent',
                color: viewMode === 'marquee' ? '#ffffff' : 'var(--pp-gray-700)',
                transition: 'all 0.2s'
              }}
            >
              <SlidersHorizontal size={14} /> Auto-Scroll
            </button>
            <button
              onClick={() => setViewMode('grid')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '18px',
                fontSize: '13px',
                fontWeight: 600,
                backgroundColor: viewMode === 'grid' ? 'var(--pp-purple)' : 'transparent',
                color: viewMode === 'grid' ? '#ffffff' : 'var(--pp-gray-700)',
                transition: 'all 0.2s'
              }}
            >
              <LayoutGrid size={14} /> View All
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Auto-Scrolling Double Marquee View */}
      {viewMode === 'marquee' ? (
        <div style={{ width: '100%' }}>
          {/* Row 1: Left */}
          <div className="marquee-container">
            <div className="marquee-track-left">
              {loopRow1.map((srv, idx) => {
                const Icon = iconMap[srv.icon] || Zap;
                return (
                  <div
                    key={`${srv.id}-${idx}`}
                    className="marquee-pill"
                    onClick={() => onSelectService(srv)}
                  >
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '12px',
                        backgroundColor: 'var(--pp-purple-light)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--pp-purple)',
                        flexShrink: 0
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--pp-gray-900)' }}>
                      {srv.title}
                    </span>
                    {srv.badge && (
                      <span className="badge badge-purple" style={{ fontSize: '9px', padding: '2px 6px' }}>
                        {srv.badge}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Row 2: Right */}
          <div className="marquee-container" style={{ marginTop: '8px' }}>
            <div className="marquee-track-right">
              {loopRow2.map((srv, idx) => {
                const Icon = iconMap[srv.icon] || Zap;
                return (
                  <div
                    key={`${srv.id}-${idx}`}
                    className="marquee-pill"
                    onClick={() => onSelectService(srv)}
                  >
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '12px',
                        backgroundColor: 'var(--pp-cyan-light)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--pp-cyan)',
                        flexShrink: 0
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--pp-gray-900)' }}>
                      {srv.title}
                    </span>
                    {srv.badge && (
                      <span className="badge badge-cyan" style={{ fontSize: '9px', padding: '2px 6px' }}>
                        {srv.badge}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '14px', fontSize: '12.5px', color: 'var(--pp-gray-500)' }}>
            Hover to pause • Click any service to test instant simulated payment
          </div>
        </div>
      ) : (
        /* Full Grid View */
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
              gap: '16px'
            }}
          >
            {services.map((srv) => {
              const Icon = iconMap[srv.icon] || Zap;
              return (
                <div
                  key={srv.id}
                  onClick={() => onSelectService(srv)}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--pp-gray-200)',
                    borderRadius: '16px',
                    padding: '20px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'all 0.22s ease',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--pp-purple)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 10px 24px rgba(5, 150, 105,  0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--pp-gray-200)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  }}
                >
                  {srv.badge && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        fontSize: '9.5px',
                        fontWeight: 800,
                        backgroundColor: srv.badge === 'Popular' ? '#fef3c7' : '#e0e7ff',
                        color: srv.badge === 'Popular' ? '#b45309' : '#3730a3',
                        padding: '2px 6px',
                        borderRadius: '10px',
                        textTransform: 'uppercase'
                      }}
                    >
                      {srv.badge}
                    </span>
                  )}

                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '16px',
                      backgroundColor: 'var(--pp-purple-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--pp-purple)',
                      marginBottom: '12px'
                    }}
                  >
                    <Icon size={24} />
                  </div>

                  <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--pp-gray-900)' }}>
                    {srv.title}
                  </div>

                  <div style={{ fontSize: '11px', color: 'var(--pp-purple)', fontWeight: 600, marginTop: '8px', display: 'flex', alignItems: 'center', gap: '2px' }}>
                    <span>Pay Now</span>
                    <ChevronRight size={12} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
