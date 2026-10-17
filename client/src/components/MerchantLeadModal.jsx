import React, { useState } from 'react';
import { X, CheckCircle, Store, Send, ShieldCheck } from 'lucide-react';
import { submitMerchantLead } from '../services/api';

export default function MerchantLeadModal({ defaultSolution = 'SmartSpeaker', onClose }) {
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    phone: '',
    email: '',
    city: 'Bengaluru',
    solutionInterest: defaultSolution,
    monthlyVolume: 'Below ₹1 Lakh'
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.businessName || !formData.phone) {
      alert('Please fill in your Business Name and Phone Number.');
      return;
    }
    setLoading(true);
    const res = await submitMerchantLead(formData);
    setLoading(false);
    if (res && res.success) {
      setSuccess(true);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(18, 19, 26, 0.75)',
        backdropFilter: 'blur(6px)',
        zIndex: 2100,
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
          maxWidth: '520px',
          width: '100%',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
          animation: 'fadeIn 0.25s ease'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: 'var(--pp-purple)',
            color: '#ffffff',
            padding: '22px 26px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Store size={22} />
            </div>
            <div>
              <div style={{ fontSize: '11px', opacity: 0.85, textTransform: 'uppercase', letterSpacing: '0.06em' }}>PaisaGo Business Solutions</div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, margin: 0 }}>Get PaisaGo for Your Business</h3>
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

        {/* Form Body */}
        <div style={{ padding: '26px' }}>
          {!success ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ fontSize: '13.5px', color: 'var(--pp-gray-600)', margin: 0 }}>
                Fill out the details below. Our field officer will visit your store within 24 hours with your merchant kit.
              </p>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--pp-gray-800)', marginBottom: '5px' }}>
                  Business / Store Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sharma Supermarket & Cafe"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '10px',
                    border: '1.5px solid var(--pp-gray-300)',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--pp-purple)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--pp-gray-300)'}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--pp-gray-800)', marginBottom: '5px' }}>
                    Contact Person
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      border: '1.5px solid var(--pp-gray-300)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--pp-gray-800)', marginBottom: '5px' }}>
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength="10"
                    placeholder="10-digit number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      border: '1.5px solid var(--pp-gray-300)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--pp-gray-800)', marginBottom: '5px' }}>
                    Solution Required
                  </label>
                  <select
                    value={formData.solutionInterest}
                    onChange={(e) => setFormData({ ...formData, solutionInterest: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      border: '1.5px solid var(--pp-gray-300)',
                      fontSize: '13.5px',
                      backgroundColor: '#ffffff'
                    }}
                  >
                    <option value="SmartSpeaker">SmartSpeaker (Voice Box)</option>
                    <option value="Smart POD">PaisaGo SMART POD</option>
                    <option value="EDC Machine">POS EDC Machine</option>
                    <option value="Payment Gateway">Payment Gateway (Online PG)</option>
                    <option value="Payment Links">Payment Links</option>
                    <option value="Merchant Lending">Merchant Business Loan</option>
                    <option value="Partner Program">Distributor Partner Program</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--pp-gray-800)', marginBottom: '5px' }}>
                    City / Pin Code
                  </label>
                  <input
                    type="text"
                    placeholder="City / Pin Code"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      border: '1.5px solid var(--pp-gray-300)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{ width: '100%', padding: '13px', fontSize: '15px', marginTop: '8px' }}
              >
                {loading ? 'Submitting to PaisaGo...' : 'Submit Application'}
              </button>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '20px 0', animation: 'fadeIn 0.25s ease' }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--pp-green-light)',
                  color: 'var(--pp-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px'
                }}
              >
                <CheckCircle size={36} />
              </div>

              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--pp-gray-900)', marginBottom: '8px' }}>
                Application Received!
              </h3>

              <p style={{ fontSize: '14px', color: 'var(--pp-gray-600)', lineHeight: 1.5, marginBottom: '24px' }}>
                Thank you for choosing PaisaGo Business. Your merchant onboarding executive will contact <strong>+91 {formData.phone}</strong> within 24 business hours.
              </p>

              <button
                onClick={onClose}
                className="btn-primary"
                style={{ width: '100%', padding: '12px' }}
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
