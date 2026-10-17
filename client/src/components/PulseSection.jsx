import React, { useState, useEffect } from 'react';
import { Activity, ArrowUpRight, Globe, TrendingUp, ShieldCheck, Zap, Radio, MapPin } from 'lucide-react';
import { fetchPulseMetrics, fetchLivePulseStream } from '../services/api';

export default function PulseSection() {
  const [pulseStats, setPulseStats] = useState({
    registeredUsers: '73+ Crore*',
    postalCodesCovered: '98%*',
    activeMerchants: '5+ Crore*',
    annualTpv: '₹120+ Lakh Cr*'
  });

  const [tickerCount, setTickerCount] = useState(148920412);
  const [activeCityPulse, setActiveCityPulse] = useState('Bengaluru');

  const [liveEvents, setLiveEvents] = useState([
    { id: 1, city: 'Bengaluru', category: 'SmartSpeaker QR', amount: 320, time: 'Just now', type: 'UPI QR' },
    { id: 2, city: 'Mumbai', category: 'Metro Recharge', amount: 60, time: '2s ago', type: 'Instant Transit' },
    { id: 3, city: 'Delhi NCR', category: 'Grocery Supermarket', amount: 1450, time: '4s ago', type: 'POS EDC' },
    { id: 4, city: 'Hyderabad', category: 'Pharmacy Bill', amount: 480, time: '6s ago', type: 'UPI Lite' },
    { id: 5, city: 'Pune', category: 'Coffee Shop', amount: 180, time: '8s ago', type: 'SmartSpeaker QR' }
  ]);

  const metroNodes = [
    { city: 'Delhi NCR', x: '42%', y: '28%', txns: '4.2k/sec' },
    { city: 'Mumbai', x: '32%', y: '58%', txns: '6.8k/sec' },
    { city: 'Bengaluru', x: '44%', y: '78%', txns: '7.1k/sec' },
    { city: 'Hyderabad', x: '48%', y: '64%', txns: '3.9k/sec' },
    { city: 'Kolkata', x: '68%', y: '48%', txns: '3.2k/sec' },
    { city: 'Chennai', x: '50%', y: '84%', txns: '3.5k/sec' }
  ];

  useEffect(() => {
    async function loadStats() {
      const metrics = await fetchPulseMetrics();
      if (metrics) setPulseStats(metrics);
    }
    loadStats();

    // Live continuous transaction counter ticking up
    const counterTimer = setInterval(() => {
      setTickerCount(prev => prev + Math.floor(Math.random() * 8) + 3);
    }, 900);

    // Poll live stream every 3.5 seconds to animate Bharat's pulse
    const interval = setInterval(async () => {
      const cities = ['Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Indore', 'Patna', 'Chennai', 'Bengaluru', 'Mumbai', 'Delhi NCR', 'Hyderabad'];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      setActiveCityPulse(randomCity);

      const stream = await fetchLivePulseStream();
      if (stream && stream.length > 0) {
        setLiveEvents(stream);
      } else {
        const types = ['SmartSpeaker QR', 'UPI Lite', 'Card POS', 'FASTag Netc'];
        const newEvent = {
          id: Date.now(),
          city: randomCity,
          category: 'Retail Store',
          amount: Math.floor(Math.random() * 2000) + 50,
          time: 'Just now',
          type: types[Math.floor(Math.random() * types.length)]
        };
        setLiveEvents(prev => [newEvent, ...prev.slice(0, 4)]);
      }
    }, 3200);

    return () => {
      clearInterval(interval);
      clearInterval(counterTimer);
    };
  }, []);

  return (
    <section id="pulse" style={{ padding: '80px 0', backgroundColor: '#131127', color: '#ffffff', position: 'relative', overflow: 'hidden' }}>
      {/* Background radial accent glow */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(5, 150, 105,  0.45) 0%, rgba(19, 17, 39, 0) 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Top 100% Secure Security Banner matching official PaisaGo */}
        <div
          style={{
            background: 'linear-gradient(135deg, #2b1055 0%, #064e3b 50%, #059669 100%)',
            borderRadius: '24px',
            padding: '24px 36px',
            marginBottom: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            border: '1.5px solid rgba(255, 209, 59, 0.25)',
            boxShadow: '0 12px 30px rgba(0,0,0,0.3)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                backgroundColor: '#00baf2',
                color: '#131127',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                boxShadow: '0 6px 16px rgba(0, 186, 242, 0.4)'
              }}
            >
              <span style={{ fontSize: '18px', lineHeight: 1 }}>100%</span>
              <span style={{ fontSize: '9px', letterSpacing: '0.04em' }}>SECURE</span>
            </div>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', margin: '0 0 4px' }}>
                Your money stays safe.
              </h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', margin: 0 }}>
                PaisaGo protects your money with security systems that help minimize frauds.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '6px 14px', borderRadius: '12px', fontSize: '12px', fontWeight: 700, color: '#ffd13b', border: '1px solid rgba(255,209,59,0.3)' }}>
              ✔ PCI DSS COMPLIANT
            </div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '6px 14px', borderRadius: '12px', fontSize: '12px', fontWeight: 700, color: '#34d399', border: '1px solid rgba(52,211,153,0.3)' }}>
              ✔ ISO 27001 CERTIFIED
            </div>
          </div>
        </div>

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(255,209,59,0.15)', color: '#ffd13b', padding: '6px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '14px' }}>
            <Activity size={16} />
            PAISAGO PULSE: THE BEAT OF PROGRESS
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: '#ffffff', marginBottom: '14px', lineHeight: 1.2 }}>
            Every transaction tells a story.<br />Together, they tell India's.
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)' }}>
            PaisaGo Pulse tracks Bharat's digital payments evolution in real time. From tier-1 metropolises to the remotest corners of Northeast and Ladakh.
          </p>

          {/* Real-time Ticking Counter */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', backgroundColor: 'rgba(255,255,255,0.08)', padding: '10px 24px', borderRadius: '30px', marginTop: '20px', border: '1px solid rgba(255,255,255,0.15)' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22c55e', animation: 'pulseGlow 1.5s infinite' }} />
            <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>Transactions Today:</span>
            <span style={{ fontSize: '20px', fontWeight: 900, color: '#ffd13b', fontFamily: 'monospace' }}>
              {tickerCount.toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        {/* 4 Big Numbers */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            marginBottom: '48px'
          }}
        >
          <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '28px 24px', textAlign: 'center' }}>
            <div style={{ fontSize: 'clamp(32px, 3.5vw, 46px)', fontWeight: 900, color: '#ffd13b', fontFamily: "'Outfit', sans-serif" }}>
              {pulseStats.registeredUsers}
            </div>
            <div style={{ fontSize: '15px', fontWeight: 600, color: '#ffffff', marginTop: '4px' }}>Registered Users</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '2px' }}>1 in every 3 Indians</div>
          </div>

          <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '28px 24px', textAlign: 'center' }}>
            <div style={{ fontSize: 'clamp(32px, 3.5vw, 46px)', fontWeight: 900, color: '#2ebbd1', fontFamily: "'Outfit', sans-serif" }}>
              {pulseStats.postalCodesCovered}
            </div>
            <div style={{ fontSize: '15px', fontWeight: 600, color: '#ffffff', marginTop: '4px' }}>Postal Codes Covered</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '2px' }}>Pan-India Pin Codes</div>
          </div>

          <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '28px 24px', textAlign: 'center' }}>
            <div style={{ fontSize: 'clamp(32px, 3.5vw, 46px)', fontWeight: 900, color: '#ff6584', fontFamily: "'Outfit', sans-serif" }}>
              {pulseStats.activeMerchants}
            </div>
            <div style={{ fontSize: '15px', fontWeight: 600, color: '#ffffff', marginTop: '4px' }}>Accepted Merchants</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '2px' }}>Stores, Apps & Websites</div>
          </div>

          <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '28px 24px', textAlign: 'center' }}>
            <div style={{ fontSize: 'clamp(32px, 3.5vw, 46px)', fontWeight: 900, color: '#34d399', fontFamily: "'Outfit', sans-serif" }}>
              {pulseStats.annualTpv}
            </div>
            <div style={{ fontSize: '15px', fontWeight: 600, color: '#ffffff', marginTop: '4px' }}>Annualized TPV</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '2px' }}>Total Payment Volume</div>
          </div>
        </div>

        {/* Live Transaction Ticker & Metro Radar Simulation */}
        <div
          style={{
            backgroundColor: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '24px',
            padding: '30px',
            backdropFilter: 'blur(12px)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22c55e', boxShadow: '0 0 10px #22c55e' }} />
              <span style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Radio size={16} color="#22c55e" /> LIVE BHARAT TRANSACTION STREAM
              </span>
            </div>
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>
              Active Metro Pulse: <strong style={{ color: '#ffd13b' }}>{activeCityPulse}</strong>
            </span>
          </div>

          {/* Interactive Metro Radar Dots */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
            {metroNodes.map((node) => (
              <div
                key={node.city}
                style={{
                  backgroundColor: activeCityPulse === node.city ? 'rgba(255, 209, 59, 0.15)' : 'rgba(255,255,255,0.05)',
                  border: '1px solid ' + (activeCityPulse === node.city ? '#ffd13b' : 'rgba(255,255,255,0.1)'),
                  borderRadius: '12px',
                  padding: '8px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '12px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: activeCityPulse === node.city ? '#ffd13b' : '#00baf2', animation: activeCityPulse === node.city ? 'pulseGlow 1s infinite' : 'none' }} />
                <span style={{ fontWeight: 700, color: activeCityPulse === node.city ? '#ffd13b' : '#ffffff' }}>{node.city}</span>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px' }}>{node.txns}</span>
              </div>
            ))}
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '14px'
            }}
          >
            {liveEvents.map((evt) => (
              <div
                key={evt.id}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '14px',
                  padding: '14px 16px',
                  animation: 'fadeIn 0.35s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#ffd13b' }}>{evt.city}</span>
                  <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>{evt.time}</span>
                </div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff' }}>₹{evt.amount}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px', fontSize: '11px' }}>
                  <span style={{ color: 'rgba(255,255,255,0.7)' }}>{evt.category}</span>
                  <span style={{ color: '#2ebbd1', fontWeight: 600 }}>{evt.type}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '28px' }}>
            <a
              href="https://www.paisago.com/pulse/"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'var(--pp-purple)',
                color: '#ffffff',
                padding: '12px 28px',
                borderRadius: '30px',
                fontWeight: 700,
                fontSize: '14px',
                boxShadow: '0 6px 20px rgba(5, 150, 105,  0.4)'
              }}
            >
              <span>Explore Interactive Map on PaisaGo Pulse</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
