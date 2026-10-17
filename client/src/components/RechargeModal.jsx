import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, ArrowRight, Smartphone, Volume2, Download, RefreshCw } from 'lucide-react';
import { processPayment } from '../services/api';

export default function RechargeModal({ service, onClose }) {
  const [formData, setFormData] = useState({
    identifier: '',
    operator: '',
    amount: '299',
    paymentMode: 'PaisaGo UPI'
  });
  const [loading, setLoading] = useState(false);
  const [receipt, setReceipt] = useState(null);

  if (!service) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.identifier) {
      alert('Please enter your account details or mobile number.');
      return;
    }

    setLoading(true);

    const paymentPayload = {
      serviceType: service.title,
      accountIdentifier: formData.identifier,
      operator: formData.operator || 'National Operator',
      amount: Number(formData.amount) || 299,
      paymentMode: formData.paymentMode,
      metadata: {
        billerName: service.title,
        bbpsCompliant: true
      }
    };

    const res = await processPayment(paymentPayload);
    setLoading(false);

    if (res && res.success) {
      setReceipt(res.data);
      // Play simulated SmartSpeaker audio announcement
      playVoiceAlert(res.data.amount);
    }
  };

  const playVoiceAlert = (amt) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(`PaisaGo par ${amt} rupaye prapt hue.`);
      utterance.rate = 0.95;
      utterance.pitch = 1.05;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(18, 19, 26, 0.75)',
        backdropFilter: 'blur(6px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          maxWidth: '480px',
          width: '100%',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
          animation: 'fadeIn 0.25s ease'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            backgroundColor: 'var(--pp-purple)',
            color: '#ffffff',
            padding: '20px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Smartphone size={20} />
            </div>
            <div>
              <div style={{ fontSize: '12px', opacity: 0.85, textTransform: 'uppercase', letterSpacing: '0.05em' }}>PaisaGo Quick Pay</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: 0 }}>{service.title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.2)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px' }}>
          {!receipt ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ fontSize: '13.5px', color: 'var(--pp-gray-600)', margin: 0 }}>
                {service.description || 'Enter details below to process instant bill payment via PaisaGo UPI rails.'}
              </p>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--pp-gray-800)', marginBottom: '6px' }}>
                  {service.id.includes('mobile') ? 'Mobile Number' : service.id.includes('fastag') ? 'Vehicle Registration Number' : 'Account / Consumer Number'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={service.id.includes('mobile') ? 'Enter 10-digit mobile number' : 'e.g. MH 02 AB 1234 or CA-Number'}
                  value={formData.identifier}
                  onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1.5px solid var(--pp-gray-300)',
                    fontSize: '15px',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--pp-purple)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--pp-gray-300)'}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--pp-gray-800)', marginBottom: '6px' }}>
                  Select Operator / Circle
                </label>
                <select
                  value={formData.operator}
                  onChange={(e) => setFormData({ ...formData, operator: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1.5px solid var(--pp-gray-300)',
                    fontSize: '14px',
                    backgroundColor: '#ffffff'
                  }}
                >
                  <option value="Jio Prepaid - National">Jio Prepaid - National</option>
                  <option value="Airtel - National">Airtel - National</option>
                  <option value="Vodafone Idea (Vi)">Vodafone Idea (Vi)</option>
                  <option value="BSNL Mobile">BSNL Mobile</option>
                  <option value="Tata Power / BSES Electricity">Tata Power / BSES Electricity</option>
                  <option value="ICICI / SBI Bank FASTag">ICICI / SBI Bank FASTag</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--pp-gray-800)', marginBottom: '6px' }}>
                  Amount (₹)
                </label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '14px', top: '12px', fontSize: '16px', fontWeight: 700, color: 'var(--pp-gray-600)' }}>₹</span>
                  <input
                    type="number"
                    min="1"
                    required
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px 12px 32px',
                      borderRadius: '10px',
                      border: '1.5px solid var(--pp-gray-300)',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'var(--pp-gray-900)'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                {['299', '479', '719', '1000'].map(val => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setFormData({ ...formData, amount: val })}
                    style={{
                      flex: 1,
                      padding: '8px 0',
                      borderRadius: '8px',
                      backgroundColor: formData.amount === val ? 'var(--pp-purple-light)' : 'var(--pp-gray-100)',
                      color: formData.amount === val ? 'var(--pp-purple)' : 'var(--pp-gray-700)',
                      fontSize: '13px',
                      fontWeight: 700,
                      border: '1px solid ' + (formData.amount === val ? 'var(--pp-purple)' : 'transparent')
                    }}
                  >
                    ₹{val}
                  </button>
                ))}
              </div>

              <div style={{ backgroundColor: 'var(--pp-purple-light)', padding: '12px 16px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={18} color="var(--pp-purple)" />
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--pp-purple-dark)' }}>Paying via PaisaGo UPI</span>
                </div>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--pp-green)', backgroundColor: '#ffffff', padding: '2px 8px', borderRadius: '10px' }}>0% CHARGE</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{ width: '100%', padding: '14px', fontSize: '16px', marginTop: '6px' }}
              >
                {loading ? (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <RefreshCw size={18} className="animate-spin" /> Verifying Bank Rails...
                  </span>
                ) : (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    Pay ₹{formData.amount} <ArrowRight size={18} />
                  </span>
                )}
              </button>
            </form>
          ) : (
            /* Digital Receipt */
            <div style={{ textAlign: 'center', animation: 'fadeIn 0.3s ease', position: 'relative' }}>
              {/* Confetti Particles */}
              <div style={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', width: '120px', height: '120px', pointerEvents: 'none' }}>
                {[
                  { dx: '-40px', dy: '-30px', color: '#ffd13b' },
                  { dx: '45px', dy: '-25px', color: '#00baf2' },
                  { dx: '-50px', dy: '20px', color: '#ff6584' },
                  { dx: '50px', dy: '25px', color: '#22c55e' },
                  { dx: '0px', dy: '-45px', color: '#059669' }
                ].map((p, idx) => (
                  <div
                    key={idx}
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: p.color,
                      '--dx': p.dx,
                      '--dy': p.dy,
                      animation: 'popParticle 1s ease-out forwards'
                    }}
                  />
                ))}
              </div>

              {/* Animated SVG Checkmark */}
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--pp-green)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  boxShadow: '0 10px 25px rgba(17, 140, 79, 0.4)',
                  animation: 'pulseGlow 2s infinite'
                }}
              >
                <svg width="42" height="42" viewBox="0 0 52 52">
                  <path
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="60"
                    strokeDashoffset="60"
                    style={{ animation: 'drawCheck 0.5s ease-out 0.2s forwards' }}
                    d="M14 27 l8 8 l16 -16"
                  />
                </svg>
              </div>

              <div style={{ fontSize: '14px', color: 'var(--pp-green)', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Payment Successful
              </div>

              <div style={{ fontSize: '36px', fontWeight: 900, color: 'var(--pp-gray-900)', margin: '6px 0 16px' }}>
                ₹{receipt.amount}
              </div>

              <div
                style={{
                  backgroundColor: 'var(--pp-gray-50)',
                  border: '1px solid var(--pp-gray-200)',
                  borderRadius: '16px',
                  padding: '16px',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  marginBottom: '20px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                  <span style={{ color: 'var(--pp-gray-600)' }}>Service</span>
                  <span style={{ fontWeight: 600, color: 'var(--pp-gray-900)' }}>{receipt.serviceType}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                  <span style={{ color: 'var(--pp-gray-600)' }}>Account / Number</span>
                  <span style={{ fontWeight: 600, color: 'var(--pp-gray-900)' }}>{receipt.accountIdentifier}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                  <span style={{ color: 'var(--pp-gray-600)' }}>Transaction ID</span>
                  <span style={{ fontWeight: 600, fontFamily: 'monospace', color: 'var(--pp-purple)' }}>{receipt.txnId}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                  <span style={{ color: 'var(--pp-gray-600)' }}>UPI Reference ID</span>
                  <span style={{ fontWeight: 600, fontFamily: 'monospace' }}>{receipt.referenceId}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                  <span style={{ color: 'var(--pp-gray-600)' }}>Payment Mode</span>
                  <span style={{ fontWeight: 600 }}>{receipt.paymentMode}</span>
                </div>
              </div>

              {/* Play Audio Alert Again */}
              <div style={{ display: 'flex', gap: '10px', marginBottom: '14px' }}>
                <button
                  type="button"
                  onClick={() => playVoiceAlert(receipt.amount)}
                  style={{
                    flex: 1,
                    padding: '10px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--pp-purple-light)',
                    color: 'var(--pp-purple)',
                    fontSize: '13px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <Volume2 size={16} /> Replay Voice Alert
                </button>
              </div>

              <button
                onClick={() => setReceipt(null)}
                className="btn-primary"
                style={{ width: '100%', padding: '12px', fontSize: '15px' }}
              >
                Make Another Payment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
