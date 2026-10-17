import React, { useState } from 'react';
import {
  X,
  Plane,
  Bus,
  Train,
  Hotel,
  ShieldCheck,
  CheckCircle,
  Clock,
  MapPin,
  Calendar,
  Users,
  CreditCard,
  ExternalLink,
  Sparkles,
  Ticket,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

export default function TravelBookingModal({ booking, onClose }) {
  if (!booking) return null;

  const [step, setStep] = useState('details'); // 'details' | 'success'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    passengers: '1',
    seatPref: 'Window',
    berthPref: 'Lower Berth',
    irctcId: '',
    date: '2026-10-25',
    checkin: '2026-10-25',
    checkout: '2026-10-27',
    guests: '2'
  });

  const travelType = booking.type || (
    booking.title?.toLowerCase().includes('flight') ? 'flight' :
    booking.title?.toLowerCase().includes('bus') ? 'bus' :
    booking.title?.toLowerCase().includes('train') || booking.title?.toLowerCase().includes('irctc') ? 'train' :
    booking.title?.toLowerCase().includes('hotel') || booking.title?.toLowerCase().includes('stay') ? 'hotel' : 'flight'
  );

  const getIcon = () => {
    switch (travelType) {
      case 'flight': return Plane;
      case 'bus': return Bus;
      case 'train': return Train;
      case 'hotel': return Hotel;
      default: return Plane;
    }
  };

  const Icon = getIcon();
  const basePrice = booking.price || (travelType === 'flight' ? 4299 : travelType === 'bus' ? 899 : travelType === 'train' ? 1750 : 4999);
  const discount = travelType === 'hotel' ? 800 : travelType === 'flight' ? 500 : travelType === 'train' ? 150 : 100;
  const finalPrice = Math.max(0, basePrice - discount);

  const handleBookSubmit = (e) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.78)',
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
          maxWidth: '560px',
          width: '100%',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.28)',
          overflow: 'hidden',
          position: 'relative',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #10213b 0%, #1e4585 100%)',
            color: '#ffffff',
            padding: '22px 24px',
            position: 'relative'
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '18px',
              right: '18px',
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.18)',
              border: 'none',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <X size={18} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '14px',
                backgroundColor: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(4px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#40c1d3'
              }}
            >
              <Icon size={24} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#40c1d3', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {travelType === 'train' ? 'IRCTC Rail Authorized' : `${travelType.toUpperCase()} BOOKING`}
                </span>
                <span style={{ fontSize: '10px', backgroundColor: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '10px', fontWeight: 700 }}>
                  0% Payment Surcharge
                </span>
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 800, margin: '4px 0 0', color: '#ffffff' }}>
                {booking.company || booking.title || 'Travel Booking'}
              </h3>
            </div>
          </div>

          {/* Quick Route / Destination Summary */}
          {(booking.route || booking.location) && (
            <div
              style={{
                marginTop: '14px',
                padding: '10px 14px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '12px',
                fontSize: '13px',
                fontWeight: 600,
                color: '#e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{booking.route || booking.location}</span>
              {booking.time && <span style={{ color: '#40c1d3', fontWeight: 700 }}>{booking.time}</span>}
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px', overflowY: 'auto', flex: 1 }}>
          {step === 'details' ? (
            <form onSubmit={handleBookSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              
              {/* IRCTC Direct Portal Notice (For Trains) */}
              {travelType === 'train' && (
                <div
                  style={{
                    backgroundColor: '#eff6ff',
                    border: '1.5px solid #bfdbfe',
                    borderRadius: '14px',
                    padding: '14px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#1e40af' }}>
                      Official IRCTC Rail Link
                    </div>
                    <div style={{ fontSize: '11.5px', color: '#3b82f6', marginTop: '2px' }}>
                      PaisaGo is an official authorized IRCTC ticketing partner with instant Tatkal refunds.
                    </div>
                  </div>
                  <a
                    href="https://www.irctc.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      backgroundColor: '#1d4ed8',
                      color: '#ffffff',
                      padding: '8px 12px',
                      borderRadius: '10px',
                      fontSize: '11.5px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    irctc.co.in <ExternalLink size={12} />
                  </a>
                </div>
              )}

              {/* Form Input Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    Primary Traveller / Guest Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name as per Govt. ID"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '12px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '14px',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '12px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '14px',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    Travel Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '12px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '14px',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {travelType === 'train' && (
                  <div style={{ gridColumn: 'span 2' }}>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                      IRCTC User ID (Required for train ticket issuance)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. sujit_irctc"
                      value={formData.irctcId}
                      onChange={(e) => setFormData({ ...formData, irctcId: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '12px',
                        border: '1.5px solid #cbd5e1',
                        fontSize: '14px',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                    <div style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>
                      Don't have an IRCTC account?{' '}
                      <a href="https://www.irctc.co.in/nget/profile/user-registration" target="_blank" rel="noreferrer" style={{ color: '#2563eb', fontWeight: 600 }}>
                        Create free on IRCTC
                      </a>
                    </div>
                  </div>
                )}

                {travelType === 'flight' && (
                  <div>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                      Seat Choice
                    </label>
                    <select
                      value={formData.seatPref}
                      onChange={(e) => setFormData({ ...formData, seatPref: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '12px',
                        border: '1.5px solid #cbd5e1',
                        fontSize: '14px',
                        outline: 'none',
                        backgroundColor: '#ffffff',
                        boxSizing: 'border-box'
                      }}
                    >
                      <option value="Window">Window Seat</option>
                      <option value="Aisle">Aisle Seat</option>
                      <option value="ExtraLegroom">Extra Legroom (XL)</option>
                    </select>
                  </div>
                )}

                {travelType === 'bus' && (
                  <div>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                      Berth Preference
                    </label>
                    <select
                      value={formData.berthPref}
                      onChange={(e) => setFormData({ ...formData, berthPref: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '12px',
                        border: '1.5px solid #cbd5e1',
                        fontSize: '14px',
                        outline: 'none',
                        backgroundColor: '#ffffff',
                        boxSizing: 'border-box'
                      }}
                    >
                      <option value="Lower Berth">Lower Sleeper</option>
                      <option value="Upper Berth">Upper Sleeper</option>
                      <option value="Single Lady Berth">Single Lady Berth</option>
                    </select>
                  </div>
                )}

                {travelType === 'hotel' && (
                  <div>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                      Guests Count
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '12px',
                        border: '1.5px solid #cbd5e1',
                        fontSize: '14px',
                        outline: 'none',
                        backgroundColor: '#ffffff',
                        boxSizing: 'border-box'
                      }}
                    >
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults (1 Room)</option>
                      <option value="3">3 Adults (Extra Bed)</option>
                      <option value="Family">Family (2 Adults + 2 Kids)</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Price Calculation Card */}
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  padding: '14px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#64748b' }}>
                  <span>Base Fare / Tariff</span>
                  <span>₹{basePrice.toLocaleString('en-IN')}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#16a34a', fontWeight: 600 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Sparkles size={14} /> PaisaGo Instant UPI Offer
                  </span>
                  <span>- ₹{discount}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#64748b' }}>
                  <span>Convenience Fee (Zero with PaisaGo UPI)</span>
                  <span style={{ color: '#16a34a', fontWeight: 700 }}>FREE (₹0)</span>
                </div>
                <div
                  style={{
                    borderTop: '1px dashed #cbd5e1',
                    paddingTop: '8px',
                    marginTop: '2px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '16px',
                    fontWeight: 800,
                    color: '#070d1e'
                  }}
                >
                  <span>Total Payable</span>
                  <span style={{ color: '#059669' }}>₹{finalPrice.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Trust Badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#64748b' }}>
                <ShieldCheck size={16} color="#16a34a" />
                <span>100% Instant Refund guarantee in case of train chart unconfirmed or cancellation.</span>
              </div>

              {/* Action Button */}
              <button
                type="submit"
                style={{
                  backgroundColor: '#059669',
                  color: '#ffffff',
                  border: 'none',
                  padding: '14px',
                  borderRadius: '14px',
                  fontSize: '15px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 20px rgba(5, 150, 105,  0.25)',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>Pay ₹{finalPrice.toLocaleString('en-IN')} via PaisaGo UPI</span>
                <ArrowRight size={18} />
              </button>
            </form>
          ) : (
            /* Success Confirmation Screen */
            <div style={{ textAlign: 'center', padding: '20px 10px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: '#dcfce7',
                  color: '#16a34a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px'
                }}
              >
                <CheckCircle size={38} />
              </div>

              <span style={{ fontSize: '11px', fontWeight: 800, backgroundColor: '#dcfce7', color: '#166534', padding: '3px 10px', borderRadius: '12px' }}>
                CONFIRMED ON PAISAGO
              </span>

              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#070d1e', margin: '10px 0 6px' }}>
                Booking Successful!
              </h3>

              <p style={{ fontSize: '14px', color: '#64748b', maxWidth: '380px', margin: '0 auto 20px', lineHeight: 1.5 }}>
                Your {travelType} ticket has been confirmed. E-ticket and SMS with PNR details sent to <strong>{formData.phone || '9876543210'}</strong>.
              </p>

              <div
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '16px',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  marginBottom: '24px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                  <span style={{ color: '#64748b' }}>Operator / Airline</span>
                  <span style={{ fontWeight: 700, color: '#070d1e' }}>{booking.company || booking.title}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                  <span style={{ color: '#64748b' }}>Booking Reference / PNR</span>
                  <span style={{ fontWeight: 800, color: '#059669', letterSpacing: '0.05em' }}>
                    PSG{Math.floor(10000000 + Math.random() * 90000000)}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                  <span style={{ color: '#64748b' }}>Passenger Name</span>
                  <span style={{ fontWeight: 700, color: '#070d1e' }}>{formData.name || 'Sujit Kumar'}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                  <span style={{ color: '#64748b' }}>Amount Paid</span>
                  <span style={{ fontWeight: 800, color: '#16a34a' }}>₹{finalPrice.toLocaleString('en-IN')} via PaisaGo UPI</span>
                </div>
              </div>

              <button
                onClick={onClose}
                style={{
                  backgroundColor: '#059669',
                  color: '#ffffff',
                  border: 'none',
                  padding: '12px 30px',
                  borderRadius: '30px',
                  fontSize: '14.5px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
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
