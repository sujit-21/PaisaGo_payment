import React, { useState } from 'react';
import {
  Plane,
  Bus,
  Train,
  Hotel,
  ShieldCheck,
  Ticket,
  Clock,
  MapPin,
  Star,
  ExternalLink,
  Search,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Wifi,
  Coffee,
  Tv
} from 'lucide-react';

export default function TravelCommute({ onBookTravel }) {
  const [activeTab, setActiveTab] = useState('flights');
  const [pnrInput, setPnrInput] = useState('');
  const [pnrResult, setPnrResult] = useState(null);

  const tabs = [
    { id: 'flights', label: 'Flights', icon: Plane, offer: 'Up to ₹1,500 off on Domestic & International flights' },
    { id: 'bus', label: 'Bus Tickets', icon: Bus, offer: 'Zero cancellation fee & instant refunds on 10,000+ routes' },
    { id: 'train', label: 'IRCTC Trains', icon: Train, offer: 'Official IRCTC Partner: Zero gateway surcharge on UPI' },
    { id: 'hotels', label: 'Stays & Hotels', icon: Hotel, offer: 'Exclusive member prices across 50,000+ premium properties' }
  ];

  // Multiple Flight Companies
  const flightCompanies = [
    {
      company: 'IndiGo Airlines',
      code: '6E 2045',
      route: 'Delhi (DEL) → Mumbai (BOM)',
      departure: '06:15 AM',
      arrival: '08:25 AM',
      duration: '2h 10m Non-stop',
      price: 4299,
      tag: 'Best Seller',
      perk: 'Instant ₹500 off via PaisaGo UPI'
    },
    {
      company: 'Air India',
      code: 'AI 887',
      route: 'Mumbai (BOM) → Bengaluru (BLR)',
      departure: '09:30 AM',
      arrival: '11:15 AM',
      duration: '1h 45m Non-stop',
      price: 3850,
      tag: 'Free Meals',
      perk: 'Complimentary hot meal & 25kg luggage'
    },
    {
      company: 'Vistara',
      code: 'UK 995',
      route: 'Delhi (DEL) → Goa (GOX)',
      departure: '11:40 AM',
      arrival: '02:15 PM',
      duration: '2h 35m Non-stop',
      price: 5499,
      tag: 'Premium Economy',
      perk: 'Gourmet dining & extra legroom'
    },
    {
      company: 'Akasa Air',
      code: 'QP 1302',
      route: 'Bengaluru (BLR) → Hyderabad (HYD)',
      departure: '02:20 PM',
      arrival: '03:35 PM',
      duration: '1h 15m Non-stop',
      price: 2499,
      tag: 'Lowest Fare',
      perk: 'Fast check-in & USB charging ports'
    },
    {
      company: 'SpiceJet',
      code: 'SG 8169',
      route: 'Kolkata (CCU) → Delhi (DEL)',
      departure: '05:45 PM',
      arrival: '08:05 PM',
      duration: '2h 20m Non-stop',
      price: 3699,
      tag: 'SpiceMax Option',
      perk: 'Priority baggage & seat selection'
    },
    {
      company: 'Air India Express',
      code: 'IX 1132',
      route: 'Chennai (MAA) → Kochi (COK)',
      departure: '07:10 PM',
      arrival: '08:20 PM',
      duration: '1h 10m Non-stop',
      price: 2199,
      tag: 'Express Direct',
      perk: 'Direct express with zero cancellation fee'
    }
  ];

  // Multiple Bus Companies
  const busCompanies = [
    {
      company: 'IntrCity SmartBus',
      type: 'AC Sleeper (2+1) Luxury',
      route: 'Delhi (Kashmere Gate) → Manali',
      departure: '06:00 PM',
      arrival: '07:30 AM',
      duration: '13h 30m',
      rating: '4.9',
      reviews: '12.4k',
      price: 1250,
      tag: 'Smart Bus Lounge',
      amenities: ['Washroom', 'WiFi', 'Blanket', 'Live GPS']
    },
    {
      company: 'Zingbus Express',
      type: 'Bharat Benz Premium AC Sleeper',
      route: 'Delhi (ISBT) → Jaipur (Sindhi Camp)',
      departure: '07:30 AM',
      arrival: '01:00 PM',
      duration: '5h 30m',
      rating: '4.8',
      reviews: '9.2k',
      price: 699,
      tag: 'On-Time Guarantee',
      amenities: ['Water Bottle', 'Charging Point', 'Air Suspension']
    },
    {
      company: 'KSRTC (Airavat Club Class)',
      type: 'Multi-Axle Volvo 9600 AC',
      route: 'Bengaluru (Majestic) → Hyderabad (MGBS)',
      departure: '10:00 PM',
      arrival: '06:45 AM',
      duration: '8h 45m',
      rating: '4.8',
      reviews: '28k',
      price: 950,
      tag: 'State Luxury',
      amenities: ['Govt Certified', 'Emergency Assist', 'Extra Legroom']
    },
    {
      company: 'VRL Travels',
      type: 'I-Shift Multi-Axle Sleeper',
      route: 'Mumbai (Borivali) → Goa (Panaji)',
      departure: '05:30 PM',
      arrival: '05:00 AM',
      duration: '11h 30m',
      rating: '4.7',
      reviews: '18k',
      price: 1100,
      tag: 'Most Reliable',
      amenities: ['Blanket & Pillow', 'Reading Light', 'Personal TV']
    },
    {
      company: 'Orange Travels',
      type: 'Scania AC Semi-Sleeper',
      route: 'Hyderabad (Ameerpet) → Chennai (Koyambedu)',
      departure: '08:45 PM',
      arrival: '06:15 AM',
      duration: '9h 30m',
      rating: '4.8',
      reviews: '11k',
      price: 890,
      tag: 'Direct Express',
      amenities: ['Live Tracking', 'Water Bottle', 'Sanitized']
    },
    {
      company: 'TSRTC (Garuda Plus)',
      type: 'Volvo B9R AC Multi-Axle',
      route: 'Hyderabad (JBS) → Vijayawada (PNBS)',
      departure: '06:00 AM',
      arrival: '11:00 AM',
      duration: '5h 00m',
      rating: '4.7',
      reviews: '14k',
      price: 650,
      tag: 'Fast Highway',
      amenities: ['Punctual', 'AC Climate Control', 'Govt Safety']
    }
  ];

  // IRCTC Trains
  const irctcTrains = [
    {
      trainNumber: '22436',
      name: 'Vande Bharat Express',
      route: 'New Delhi (NDLS) → Varanasi (BSB)',
      departure: '06:00 AM',
      arrival: '02:00 PM',
      duration: '8h 00m',
      speed: 'Semi High-Speed (160 km/h)',
      classes: 'CC / EC',
      price: 1750,
      tag: 'Flagship Train',
      food: 'Catering Included'
    },
    {
      trainNumber: '12952',
      name: 'Mumbai Rajdhani Express',
      route: 'New Delhi (NDLS) → Mumbai Central (MMCT)',
      departure: '04:55 PM',
      arrival: '08:35 AM',
      duration: '15h 40m',
      speed: 'Superfast Rajdhani',
      classes: '3A / 2A / 1A',
      price: 2410,
      tag: 'Complimentary Dinner',
      food: 'Gourmet Indian Meals'
    },
    {
      trainNumber: '22692',
      name: 'Bengaluru Rajdhani',
      route: 'Hazrat Nizamuddin (NZM) → KSR Bengaluru (SBC)',
      departure: '07:50 PM',
      arrival: '05:45 AM (Day 3)',
      duration: '33h 55m',
      speed: 'Premier Superfast',
      classes: '3A / 2A / 1A',
      price: 2890,
      tag: 'Daily Express',
      food: 'All Meals Included'
    },
    {
      trainNumber: '12005',
      name: 'Kalka Shatabdi Express',
      route: 'New Delhi (NDLS) → Chandigarh / Kalka',
      departure: '05:15 PM',
      arrival: '09:20 PM',
      duration: '4h 05m',
      speed: 'Fast Intercity',
      classes: 'CC / EC',
      price: 915,
      tag: 'Executive Class',
      food: 'Breakfast & Snacks'
    },
    {
      trainNumber: '82502',
      name: 'Lucknow Tejas Express',
      route: 'New Delhi (NDLS) → Lucknow Jn (LJN)',
      departure: '03:40 PM',
      arrival: '10:05 PM',
      duration: '6h 25m',
      speed: 'Corporate Express',
      classes: 'CC / EC',
      price: 1280,
      tag: 'Hostess Service',
      food: 'Onboard Dining & Free Tea'
    },
    {
      trainNumber: '12302',
      name: 'Howrah Rajdhani Express',
      route: 'New Delhi (NDLS) → Howrah Jn (HWH)',
      departure: '04:50 PM',
      arrival: '09:55 AM',
      duration: '17h 05m',
      speed: 'Via Gaya Superfast',
      classes: '3A / 2A / 1A',
      price: 2620,
      tag: 'Daily Premier',
      food: 'Full Pantry Service'
    }
  ];

  // Multiple Hotel Companies & Chains
  const hotelCompanies = [
    {
      company: 'Taj Hotels & Resorts (IHCL)',
      property: 'Taj Mahal Palace & Tower / Taj Exotica',
      rating: '5.0 ★ Luxury',
      location: 'Mumbai, Delhi, Jaipur, Goa, Udaipur',
      price: 9999,
      tag: 'Heritage Luxury',
      perk: '15% off with PaisaGo UPI + Complimentary Breakfast',
      amenities: ['Infinity Pool', 'Fine Dining', 'Spa', 'Butler Service']
    },
    {
      company: 'Marriott Bonvoy',
      property: 'JW Marriott / Sheraton / Courtyard',
      rating: '4.9 ★ International',
      location: 'Bengaluru, Mumbai, Delhi NCR, Hyderabad',
      price: 7499,
      tag: 'Bonvoy Exclusive',
      perk: 'Earn 2x Marriott Bonvoy points + Late 4 PM checkout',
      amenities: ['Executive Lounge', 'Fitness Center', 'WiFi 6']
    },
    {
      company: 'ITC Hotels',
      property: 'ITC Grand Chola / ITC Maurya',
      rating: '4.9 ★ Responsible Luxury',
      location: 'Chennai, New Delhi, Kolkata, Agra',
      price: 8200,
      tag: 'Michelin Dining',
      perk: '₹1,500 complimentary dining credit at Bukhara',
      amenities: ['LEED Platinum', 'Wellness Spa', 'Valet Parking']
    },
    {
      company: 'Radisson Blu & Park Plaza',
      property: 'Radisson Blu Resort & Convention Center',
      rating: '4.6 ★ Upscale',
      location: 'Udaipur, Amritsar, Pune, Kochi, Alibaug',
      price: 4500,
      tag: '20% Flat Discount',
      perk: 'Complimentary room upgrade subject to availability',
      amenities: ['Lake View', 'Swimming Pool', 'Buffet Breakfast']
    },
    {
      company: 'Lemon Tree Premier',
      property: 'Lemon Tree Premier Business Suites',
      rating: '4.4 ★ Business Comfort',
      location: 'Gurgaon, Hyderabad, Ahmedabad, Indore',
      price: 3200,
      tag: 'Corporate Pick',
      perk: 'Free airport shuttle & 24/7 high-speed WiFi',
      amenities: ['Citrus Cafe', 'Gym', 'Business Center']
    },
    {
      company: 'Treebo & FabHotels Premium',
      property: 'Verified Boutique Stays',
      rating: '4.2 ★ Smart Budget',
      location: '100+ Cities Across India',
      price: 1499,
      tag: 'Pocket Friendly',
      perk: '100% sanitized rooms with AC & free breakfast',
      amenities: ['AC Rooms', 'Daily Housekeeping', 'Free Breakfast']
    }
  ];

  const handlePnrCheck = (e) => {
    e.preventDefault();
    if (!pnrInput || pnrInput.length < 10) {
      alert('Please enter a valid 10-digit IRCTC PNR number.');
      return;
    }
    setPnrResult({
      pnr: pnrInput,
      train: '22436 - Vande Bharat Express',
      route: 'NDLS → BSB',
      date: '25 Oct 2026',
      status: 'CNF (Confirmed)',
      coach: 'C4',
      seat: 'Seat 28 (Window)'
    });
  };

  return (
    <section id="travel" style={{ padding: '60px 0', backgroundColor: '#ffffff' }}>
      <div className="container">
        <div
          style={{
            background: 'linear-gradient(135deg, #10213b 0%, #1e4585 100%)',
            borderRadius: '24px',
            padding: '40px 44px',
            color: '#ffffff',
            boxShadow: '0 20px 45px rgba(16, 33, 59, 0.2)'
          }}
          className="travel-box-inner"
        >
          {/* Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginBottom: '28px' }}>
            <div>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#40c1d3', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                TRAVEL & COMMUTE ON PAISAGO
              </span>
              <h3 style={{ fontSize: '28px', fontWeight: 800, margin: '6px 0', letterSpacing: '-0.3px' }}>
                Flights, Buses, IRCTC Trains & Hotels
              </h3>
              <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', maxWidth: '640px', margin: 0, lineHeight: 1.5 }}>
                Book with top airlines, premier bus operators, official IRCTC rail, and world-class luxury hotels. Enjoy 0% gateway fee with PaisaGo UPI.
              </p>
            </div>

            {/* Travel Category Pills */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {tabs.map((t) => {
                const Icon = t.icon;
                const isActive = activeTab === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 18px',
                      borderRadius: '24px',
                      fontSize: '13.5px',
                      fontWeight: 700,
                      backgroundColor: isActive ? '#ffffff' : 'rgba(255,255,255,0.12)',
                      color: isActive ? '#10213b' : '#ffffff',
                      border: '1px solid ' + (isActive ? '#ffffff' : 'rgba(255,255,255,0.2)'),
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: isActive ? '0 4px 15px rgba(0,0,0,0.15)' : 'none'
                    }}
                  >
                    <Icon size={16} />
                    <span>{t.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ACTIVE OFFER BANNER */}
          <div
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              padding: '16px 22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '14px',
              marginBottom: '28px',
              border: '1px solid rgba(255,255,255,0.18)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#40c1d3', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10213b' }}>
                <Ticket size={20} />
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff' }}>
                  {tabs.find(t => t.id === activeTab)?.offer}
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)' }}>
                  Use code <strong style={{ color: '#ffd13b' }}>PAISAGOFLY</strong> or <strong style={{ color: '#ffd13b' }}>PAISAGOTRIP</strong> for instant checkout discount
                </div>
              </div>
            </div>

            {activeTab === 'train' && (
              <a
                href="https://www.irctc.co.in"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#ffffff',
                  color: '#10213b',
                  padding: '10px 20px',
                  borderRadius: '30px',
                  fontSize: '13px',
                  fontWeight: 800,
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }}
              >
                <span>Visit Official IRCTC Portal</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>

          {/* TAB CONTENT: 1. FLIGHTS */}
          {activeTab === 'flights' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <h4 style={{ fontSize: '17px', fontWeight: 800, margin: 0, color: '#ffffff' }}>
                  Available Flight Airlines & Direct Routes
                </h4>
                <span style={{ fontSize: '12px', color: '#40c1d3', fontWeight: 700 }}>
                  Showing 6 Direct Airlines
                </span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
                  gap: '16px'
                }}
              >
                {flightCompanies.map((flight, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: '16px',
                      padding: '18px',
                      border: '1px solid rgba(255,255,255,0.15)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '14px',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ fontSize: '14px', fontWeight: 800, color: '#ffffff' }}>
                          {flight.company}
                        </span>
                        <span style={{ fontSize: '10.5px', fontWeight: 800, backgroundColor: '#40c1d3', color: '#10213b', padding: '2px 8px', borderRadius: '10px' }}>
                          {flight.tag}
                        </span>
                      </div>

                      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>
                        Flight {flight.code} • {flight.duration}
                      </div>

                      <div style={{ fontSize: '15px', fontWeight: 700, color: '#e2e8f0', marginBottom: '6px' }}>
                        {flight.route}
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'rgba(255,255,255,0.85)' }}>
                        <Clock size={13} color="#40c1d3" />
                        <span>{flight.departure} → {flight.arrival}</span>
                      </div>
                    </div>

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.65)' }}>Starting from</div>
                        <div style={{ fontSize: '18px', fontWeight: 800, color: '#ffd13b' }}>
                          ₹{flight.price.toLocaleString('en-IN')}
                        </div>
                      </div>

                      <button
                        onClick={() => onBookTravel({
                          type: 'flight',
                          company: flight.company,
                          title: `${flight.company} (${flight.code})`,
                          route: flight.route,
                          time: `${flight.departure} - ${flight.arrival}`,
                          price: flight.price
                        })}
                        style={{
                          backgroundColor: '#40c1d3',
                          color: '#10213b',
                          border: 'none',
                          padding: '9px 18px',
                          borderRadius: '20px',
                          fontSize: '12.5px',
                          fontWeight: 800,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <span>Book Flight</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB CONTENT: 2. BUS TICKETS */}
          {activeTab === 'bus' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <h4 style={{ fontSize: '17px', fontWeight: 800, margin: 0, color: '#ffffff' }}>
                  Top Bus Operators & Intercity Fleets
                </h4>
                <span style={{ fontSize: '12px', color: '#40c1d3', fontWeight: 700 }}>
                  Zero Cancellation Fee Guarantee
                </span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
                  gap: '16px'
                }}
              >
                {busCompanies.map((bus, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: '16px',
                      padding: '18px',
                      border: '1px solid rgba(255,255,255,0.15)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '14px'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                        <span style={{ fontSize: '14.5px', fontWeight: 800, color: '#ffffff' }}>
                          {bus.company}
                        </span>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', backgroundColor: '#15803d', color: '#ffffff', padding: '2px 7px', borderRadius: '8px', fontSize: '11px', fontWeight: 800 }}>
                          <Star size={11} fill="#ffffff" />
                          <span>{bus.rating}</span>
                        </div>
                      </div>

                      <div style={{ fontSize: '12px', color: '#40c1d3', fontWeight: 600, marginBottom: '8px' }}>
                        {bus.type}
                      </div>

                      <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#e2e8f0', marginBottom: '6px' }}>
                        {bus.route}
                      </div>

                      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', marginBottom: '10px' }}>
                        {bus.departure} → {bus.arrival} ({bus.duration})
                      </div>

                      {/* Amenities Pills */}
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {bus.amenities.map((am, i) => (
                          <span key={i} style={{ fontSize: '10px', backgroundColor: 'rgba(255,255,255,0.12)', padding: '2px 8px', borderRadius: '8px', color: 'rgba(255,255,255,0.9)' }}>
                            {am}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.65)' }}>Seat from</div>
                        <div style={{ fontSize: '18px', fontWeight: 800, color: '#ffd13b' }}>
                          ₹{bus.price.toLocaleString('en-IN')}
                        </div>
                      </div>

                      <button
                        onClick={() => onBookTravel({
                          type: 'bus',
                          company: bus.company,
                          title: `${bus.company} (${bus.type})`,
                          route: bus.route,
                          time: `${bus.departure} - ${bus.arrival}`,
                          price: bus.price
                        })}
                        style={{
                          backgroundColor: '#40c1d3',
                          color: '#10213b',
                          border: 'none',
                          padding: '9px 18px',
                          borderRadius: '20px',
                          fontSize: '12.5px',
                          fontWeight: 800,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <span>Select Seats</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB CONTENT: 3. IRCTC TRAINS & DIRECT LINK */}
          {activeTab === 'train' && (
            <div>
              {/* IRCTC Official Partner Box */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '22px',
                  color: '#10213b',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '20px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.12)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '14px',
                      backgroundColor: '#eff6ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#1d4ed8',
                      flexShrink: 0,
                      fontWeight: 900,
                      fontSize: '16px',
                      border: '2px solid #bfdbfe'
                    }}
                  >
                    IRCTC
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 800, backgroundColor: '#dbeafe', color: '#1e40af', padding: '2px 8px', borderRadius: '10px' }}>
                        OFFICIAL PARTNER
                      </span>
                      <span style={{ fontSize: '11.5px', color: '#16a34a', fontWeight: 700 }}>
                        ✓ 100% Refund Guarantee on Tatkal Waitlist
                      </span>
                    </div>
                    <h4 style={{ fontSize: '18px', fontWeight: 800, margin: '4px 0 2px', color: '#070d1e' }}>
                      IRCTC Indian Railway Ticketing on PaisaGo
                    </h4>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
                      Book Vande Bharat, Rajdhani, Shatabdi & Express train tickets at ₹0 payment gateway fee. Or visit official website directly.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a
                    href="https://www.irctc.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      backgroundColor: '#1d4ed8',
                      color: '#ffffff',
                      padding: '11px 22px',
                      borderRadius: '30px',
                      fontSize: '13.5px',
                      fontWeight: 800,
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(29, 78, 216, 0.3)'
                    }}
                  >
                    <span>irctc.co.in Official Link</span>
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>

              {/* Live PNR Status Check Widget */}
              <div
                style={{
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '16px',
                  padding: '18px 22px',
                  marginBottom: '24px',
                  border: '1px solid rgba(255,255,255,0.15)'
                }}
              >
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#40c1d3', marginBottom: '8px' }}>
                  Check Live IRCTC PNR Status
                </div>
                <form onSubmit={handlePnrCheck} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <input
                    type="text"
                    maxLength={10}
                    placeholder="Enter 10-Digit PNR Number (e.g. 2458901234)"
                    value={pnrInput}
                    onChange={(e) => setPnrInput(e.target.value.replace(/\D/g, ''))}
                    style={{
                      flex: 1,
                      minWidth: '240px',
                      padding: '10px 16px',
                      borderRadius: '12px',
                      border: '1px solid rgba(255,255,255,0.25)',
                      backgroundColor: 'rgba(255,255,255,0.95)',
                      color: '#10213b',
                      fontSize: '14px',
                      fontWeight: 600,
                      outline: 'none'
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#40c1d3',
                      color: '#10213b',
                      border: 'none',
                      padding: '10px 22px',
                      borderRadius: '12px',
                      fontSize: '13.5px',
                      fontWeight: 800,
                      cursor: 'pointer'
                    }}
                  >
                    Check Status
                  </button>
                </form>

                {pnrResult && (
                  <div
                    style={{
                      marginTop: '14px',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      backgroundColor: '#ffffff',
                      color: '#10213b',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '10px',
                      animation: 'fadeIn 0.2s ease'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 800, color: '#070d1e' }}>
                        {pnrResult.train} ({pnrResult.route})
                      </div>
                      <div style={{ fontSize: '11.5px', color: '#64748b' }}>
                        PNR: {pnrResult.pnr} • Date: {pnrResult.date}
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 800, backgroundColor: '#dcfce7', color: '#15803d', padding: '4px 10px', borderRadius: '10px' }}>
                        {pnrResult.status}
                      </span>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: '#059669' }}>
                        {pnrResult.coach} - {pnrResult.seat}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Trains Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
                  gap: '16px'
                }}
              >
                {irctcTrains.map((train, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: '16px',
                      padding: '18px',
                      border: '1px solid rgba(255,255,255,0.15)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '14px'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                        <span style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff' }}>
                          {train.name}
                        </span>
                        <span style={{ fontSize: '10.5px', fontWeight: 800, backgroundColor: '#ffd13b', color: '#12131a', padding: '2px 8px', borderRadius: '10px' }}>
                          #{train.trainNumber}
                        </span>
                      </div>

                      <div style={{ fontSize: '12px', color: '#40c1d3', marginBottom: '8px' }}>
                        {train.speed} • {train.classes}
                      </div>

                      <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#e2e8f0', marginBottom: '6px' }}>
                        {train.route}
                      </div>

                      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', marginBottom: '8px' }}>
                        {train.departure} → {train.arrival} ({train.duration})
                      </div>

                      <div style={{ fontSize: '11px', color: '#40c1d3', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Coffee size={12} />
                        <span>{train.food}</span>
                      </div>
                    </div>

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.65)' }}>Fare from</div>
                        <div style={{ fontSize: '18px', fontWeight: 800, color: '#ffd13b' }}>
                          ₹{train.price.toLocaleString('en-IN')}
                        </div>
                      </div>

                      <button
                        onClick={() => onBookTravel({
                          type: 'train',
                          company: `IRCTC - ${train.name}`,
                          title: `${train.name} (#${train.trainNumber})`,
                          route: train.route,
                          time: `${train.departure} - ${train.arrival}`,
                          price: train.price
                        })}
                        style={{
                          backgroundColor: '#40c1d3',
                          color: '#10213b',
                          border: 'none',
                          padding: '9px 18px',
                          borderRadius: '20px',
                          fontSize: '12.5px',
                          fontWeight: 800,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <span>Book Train</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB CONTENT: 4. STAYS & HOTELS */}
          {activeTab === 'hotels' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <h4 style={{ fontSize: '17px', fontWeight: 800, margin: 0, color: '#ffffff' }}>
                  Luxury Chains, Resorts & Boutique Hotels
                </h4>
                <span style={{ fontSize: '12px', color: '#40c1d3', fontWeight: 700 }}>
                  Exclusive PaisaGo Member Tariffs
                </span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
                  gap: '16px'
                }}
              >
                {hotelCompanies.map((hotel, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: '16px',
                      padding: '18px',
                      border: '1px solid rgba(255,255,255,0.15)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '14px'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                        <span style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff' }}>
                          {hotel.company}
                        </span>
                        <span style={{ fontSize: '10.5px', fontWeight: 800, backgroundColor: '#ffd13b', color: '#12131a', padding: '2px 8px', borderRadius: '10px' }}>
                          {hotel.rating}
                        </span>
                      </div>

                      <div style={{ fontSize: '12.5px', color: '#e2e8f0', fontWeight: 600, marginBottom: '6px' }}>
                        {hotel.property}
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11.5px', color: 'rgba(255,255,255,0.75)', marginBottom: '8px' }}>
                        <MapPin size={13} color="#40c1d3" />
                        <span>{hotel.location}</span>
                      </div>

                      <div style={{ fontSize: '11.5px', color: '#40c1d3', fontWeight: 600, marginBottom: '10px' }}>
                        {hotel.perk}
                      </div>

                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {hotel.amenities.map((am, i) => (
                          <span key={i} style={{ fontSize: '10px', backgroundColor: 'rgba(255,255,255,0.12)', padding: '2px 8px', borderRadius: '8px', color: 'rgba(255,255,255,0.9)' }}>
                            {am}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.65)' }}>Per Night From</div>
                        <div style={{ fontSize: '18px', fontWeight: 800, color: '#ffd13b' }}>
                          ₹{hotel.price.toLocaleString('en-IN')}
                        </div>
                      </div>

                      <button
                        onClick={() => onBookTravel({
                          type: 'hotel',
                          company: hotel.company,
                          title: `${hotel.company} - ${hotel.property}`,
                          location: hotel.location,
                          price: hotel.price
                        })}
                        style={{
                          backgroundColor: '#40c1d3',
                          color: '#10213b',
                          border: 'none',
                          padding: '9px 18px',
                          borderRadius: '20px',
                          fontSize: '12.5px',
                          fontWeight: 800,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <span>Reserve Room</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .travel-box-inner {
            padding: 24px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
