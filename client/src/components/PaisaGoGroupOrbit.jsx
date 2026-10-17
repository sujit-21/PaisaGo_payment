import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Compass, ShoppingBag, TrendingUp, Smartphone } from 'lucide-react';

export default function PaisaGoGroupOrbit() {
  const [activeEntity, setActiveEntity] = useState(null);

  const ventures = [
    {
      id: 'share-market',
      name: 'share.market',
      tag: 'Stock Broking & Wealth',
      desc: 'PaisaGo’s flagship discount broker delivering intelligence, factor investing baskets, F&O and stocks with zero delivery brokerage.',
      color: '#059669',
      url: 'https://share.market'
    },
    {
      id: 'indus-appstore',
      name: 'Indus Appstore',
      tag: 'India’s Android Store',
      desc: 'The indigenous Android marketplace offering zero commission on in-app purchases, supporting 12 Indian regional languages.',
      color: '#00baf2',
      url: 'https://www.indusappstore.com'
    },
    {
      id: 'pincode',
      name: 'Pincode',
      tag: 'Hyperlocal Shopping on ONDC',
      desc: 'Connecting neighborhood kirana stores, pharmacies and restaurants with Indian consumers over the open network.',
      color: '#10b981',
      url: 'https://pincode.com'
    }
  ];

  return (
    <section style={{ padding: '90px 0 100px', backgroundColor: '#ffffff', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
          <div
            style={{
              fontSize: '13px',
              fontWeight: 800,
              color: '#f43f5e',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '10px'
            }}
          >
            INNOVATION
          </div>
          <h2
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              fontWeight: 800,
              color: '#070d1e',
              letterSpacing: '-0.02em',
              margin: '0 0 10px',
              lineHeight: 1.15
            }}
          >
            PaisaGo Group
          </h2>
          <div style={{ fontSize: '18px', color: '#64748b', fontWeight: 500 }}>
            Driving Innovation Across India
          </div>
        </div>

        {/* Concentric Orbiting Universe */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '680px',
            height: '520px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          className="paisago-orbit-universe"
        >
          {/* Outer Orbit Track */}
          <div
            style={{
              position: 'absolute',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              border: '1.5px solid #e2d9f3',
              pointerEvents: 'none'
            }}
          />

          {/* Middle Orbit Track */}
          <div
            style={{
              position: 'absolute',
              width: '360px',
              height: '360px',
              borderRadius: '50%',
              border: '1.5px solid #ede7f6',
              pointerEvents: 'none'
            }}
          />

          {/* Inner Orbit Track */}
          <div
            style={{
              position: 'absolute',
              width: '240px',
              height: '240px',
              borderRadius: '50%',
              border: '1.5px solid #ecfdf5',
              pointerEvents: 'none'
            }}
          />

          {/* Orbiting Rotating Container for Outer Track */}
          <div
            style={{
              position: 'absolute',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              animation: 'spinClockwise 36s linear infinite'
            }}
            className="orbit-ring-outer"
          >
            {/* Satellite 1: share.market pill */}
            <div
              style={{
                position: 'absolute',
                top: '-24px',
                left: '210px',
                animation: 'counterSpin 36s linear infinite',
                cursor: 'pointer'
              }}
              onClick={() => setActiveEntity(ventures[0])}
            >
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '2px solid #059669',
                  borderRadius: '50%',
                  width: '84px',
                  height: '84px',
                  boxShadow: '0 8px 24px rgba(5, 150, 105,  0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '6px',
                  textAlign: 'center',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.12)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div style={{ fontSize: '11px', fontWeight: 900, color: '#0b132b', lineHeight: 1.1 }}>
                  share.
                </div>
                <div style={{ fontSize: '11px', fontWeight: 900, color: '#00baf2', lineHeight: 1.1 }}>
                  market
                </div>
              </div>
            </div>

            {/* Satellite 2: Coral Planet Dot */}
            <div
              style={{
                position: 'absolute',
                right: '-10px',
                top: '240px',
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                backgroundColor: '#f43f5e',
                boxShadow: '0 0 14px rgba(244, 63, 94, 0.6)'
              }}
            />

            {/* Satellite 3: Pincode */}
            <div
              style={{
                position: 'absolute',
                bottom: '-24px',
                left: '210px',
                animation: 'counterSpin 36s linear infinite',
                cursor: 'pointer'
              }}
              onClick={() => setActiveEntity(ventures[2])}
            >
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '2px solid #10b981',
                  borderRadius: '50%',
                  width: '76px',
                  height: '76px',
                  boxShadow: '0 8px 24px rgba(16, 185, 129, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: '12px',
                  color: '#065f46',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.12)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                pincode
              </div>
            </div>
          </div>

          {/* Orbiting Rotating Container for Middle Track */}
          <div
            style={{
              position: 'absolute',
              width: '360px',
              height: '360px',
              borderRadius: '50%',
              animation: 'spinCounterClockwise 28s linear infinite'
            }}
            className="orbit-ring-middle"
          >
            {/* Satellite 4: Indus Appstore */}
            <div
              style={{
                position: 'absolute',
                top: '20px',
                right: '40px',
                animation: 'counterSpinReverse 28s linear infinite',
                cursor: 'pointer'
              }}
              onClick={() => setActiveEntity(ventures[1])}
            >
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '2px solid #00baf2',
                  borderRadius: '30px',
                  padding: '8px 16px',
                  boxShadow: '0 8px 24px rgba(0, 186, 242, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '12px',
                  fontWeight: 800,
                  color: '#0369a1',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.12)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <Smartphone size={14} color="#00baf2" />
                <span>Indus</span>
              </div>
            </div>

            {/* Satellite 5: Cyan Planet Dot */}
            <div
              style={{
                position: 'absolute',
                bottom: '40px',
                right: '50px',
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                backgroundColor: '#00baf2',
                boxShadow: '0 0 16px rgba(0, 186, 242, 0.6)'
              }}
            />
          </div>

          {/* Central Glowing PaisaGo Logo Nucleus */}
          <div
            style={{
              position: 'relative',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #070d1e 0%, #064e3b 50%, #059669 100%)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 16px 40px rgba(5, 150, 105,  0.45)',
              zIndex: 10
            }}
          >
            {/* Concentric Radiating Wave Ripple Rings */}
            <div
              style={{
                position: 'absolute',
                inset: '-20px',
                borderRadius: '50%',
                border: '2px solid rgba(5, 150, 105,  0.25)',
                animation: 'radarWave 3s cubic-bezier(0.16, 1, 0.3, 1) infinite'
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: '-40px',
                borderRadius: '50%',
                border: '1.5px solid rgba(255, 209, 59, 0.2)',
                animation: 'radarWave 3s cubic-bezier(0.16, 1, 0.3, 1) infinite',
                animationDelay: '1.2s'
              }}
            />

            <span
              style={{
                fontSize: '48px',
                fontWeight: 900,
                fontFamily: 'sans-serif',
                transform: 'translateY(-2px)'
              }}
            >
              पै
            </span>
          </div>
        </div>

        {/* Venture Details Popover Card */}
        {activeEntity && (
          <div
            style={{
              maxWidth: '520px',
              margin: '30px auto 0',
              backgroundColor: '#f8fafc',
              border: `2px solid ${activeEntity.color}`,
              borderRadius: '20px',
              padding: '24px 28px',
              boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
              animation: 'fadeIn 0.3s ease',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '11px', fontWeight: 800, color: activeEntity.color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
              {activeEntity.tag}
            </div>
            <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#070d1e', margin: '0 0 8px' }}>
              {activeEntity.name}
            </h4>
            <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: 1.55, margin: '0 0 16px' }}>
              {activeEntity.desc}
            </p>
            <a
              href={activeEntity.url}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: activeEntity.color,
                color: '#ffffff',
                padding: '8px 20px',
                borderRadius: '20px',
                fontWeight: 700,
                fontSize: '13px',
                textDecoration: 'none'
              }}
            >
              <span>Explore {activeEntity.name}</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        )}
      </div>

      <style>{`
        @keyframes spinClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counterSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes spinCounterClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes counterSpinReverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 680px) {
          .paisago-orbit-universe {
            transform: scale(0.7);
            height: 400px;
          }
        }
      `}</style>
    </section>
  );
}
