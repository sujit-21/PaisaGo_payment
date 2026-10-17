import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import ServiceTabs from './components/ServiceTabs';
import SecureTransactions from './components/SecureTransactions';
import BillRechargeGrid from './components/BillRechargeGrid';
import TravelCommute from './components/TravelCommute';
import SmartDevices from './components/SmartDevices';
import PulseSection from './components/PulseSection';
import InternationalSection from './components/InternationalSection';
import BusinessSolutions from './components/BusinessSolutions';
import AppDownloadBanner from './components/AppDownloadBanner';
import Footer from './components/Footer';
import RechargeModal from './components/RechargeModal';
import MerchantLeadModal from './components/MerchantLeadModal';
import CompanyInfoModal from './components/CompanyInfoModal';
import TravelBookingModal from './components/TravelBookingModal';
import FeatureDetailModal from './components/FeatureDetailModal';
import SafePaymentsSection from './components/SafePaymentsSection';
import SmartSavingsStadium from './components/SmartSavingsStadium';
import PaisaGoGroupOrbit from './components/PaisaGoGroupOrbit';
import { X, QrCode } from 'lucide-react';

export default function App() {
  const [rechargeService, setRechargeService] = useState(null);
  const [companyModalItem, setCompanyModalItem] = useState(null);
  const [travelBookingItem, setTravelBookingItem] = useState(null);
  const [featureDetailItem, setFeatureDetailItem] = useState(null);
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [leadDefaultSolution, setLeadDefaultSolution] = useState('SmartSpeaker');
  const [qrModalOpen, setQrModalOpen] = useState(false);

  const handleOpenLeadModal = (solutionTitle = 'SmartSpeaker') => {
    setLeadDefaultSolution(solutionTitle);
    setLeadModalOpen(true);
  };

  // Universal handler that correctly identifies the type of service clicked
  const handleOpenGeneralItem = (titleOrItem, section = '') => {
    const item = typeof titleOrItem === 'string' ? { title: titleOrItem } : titleOrItem;
    const titleLower = (item.title || '').toLowerCase();
    const idLower = (item.id || '').toLowerCase();

    // 1. Company, Corporate & Legal Information (About Us, Careers, Press, Trust, etc.)
    if (
      section === 'general' ||
      section === 'legal' ||
      titleLower.includes('about') ||
      titleLower.includes('career') ||
      titleLower.includes('press') ||
      titleLower.includes('media') ||
      titleLower.includes('blog') ||
      titleLower.includes('trust') ||
      titleLower.includes('safety') ||
      titleLower.includes('investor') ||
      titleLower.includes('contact') ||
      titleLower.includes('terms') ||
      titleLower.includes('privacy') ||
      titleLower.includes('grievance') ||
      titleLower.includes('policy') ||
      titleLower.includes('ethics') ||
      titleLower.includes('e-waste') ||
      titleLower.includes('notice')
    ) {
      setCompanyModalItem(item);
      return;
    }

    // 2. Business & Merchant Solutions (POS, SmartSpeaker, Gateway, etc.)
    if (
      section === 'business' ||
      idLower.includes('smart-speaker') ||
      idLower.includes('smart-pod') ||
      idLower.includes('pos') ||
      idLower.includes('edc') ||
      idLower.includes('gateway') ||
      idLower.includes('aggregator') ||
      titleLower.includes('merchant') ||
      titleLower.includes('pos') ||
      titleLower.includes('speaker') ||
      titleLower.includes('pod') ||
      titleLower.includes('gateway') ||
      titleLower.includes('aggregator') ||
      titleLower.includes('advertise')
    ) {
      handleOpenLeadModal(item.title);
      return;
    }

    // 3. Travel & Commute (Flights, Bus, IRCTC Trains, Hotels)
    if (
      titleLower.includes('flight') ||
      titleLower.includes('bus') ||
      titleLower.includes('train') ||
      titleLower.includes('irctc') ||
      titleLower.includes('hotel') ||
      titleLower.includes('stay')
    ) {
      const travelEl = document.getElementById('travel');
      if (travelEl) {
        travelEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        setTravelBookingItem(item);
      }
      return;
    }

    // 4. Financial Products (Cards, Mutual Funds, Gold, Insurance, Loans)
    if (
      section === 'insurance' ||
      section === 'investments' ||
      titleLower.includes('insurance') ||
      titleLower.includes('sip') ||
      titleLower.includes('fund') ||
      titleLower.includes('gold') ||
      titleLower.includes('silver') ||
      titleLower.includes('loan') ||
      titleLower.includes('credit') ||
      titleLower.includes('card') ||
      titleLower.includes('nps') ||
      titleLower.includes('deposit')
    ) {
      setFeatureDetailItem(item);
      return;
    }

    // 5. Utility recharges & Bill payments (BBPS)
    setRechargeService(item);
  };

  const handleSelectSlideCta = (slide) => {
    if (slide.illustrationType === 'pos' || slide.illustrationType === 'pg') {
      handleOpenLeadModal(slide.category || 'Business Solutions');
    } else if (slide.illustrationType === 'personal-loan') {
      setFeatureDetailItem({
        title: 'Instant Personal Loan',
        desc: 'Pre-approved digital personal loan up to ₹10 Lakhs with instant direct bank transfer.'
      });
    } else if (slide.illustrationType === 'sbi-card') {
      setFeatureDetailItem({
        title: 'PaisaGo SBI Card',
        desc: '10% Reward Points* on PaisaGo spends. Apply now for Select Black or Pulse card.'
      });
    } else if (slide.illustrationType === 'sip') {
      setFeatureDetailItem({
        title: 'Daily Mutual Fund SIP',
        desc: 'Start investing in top-performing mutual funds starting at just ₹10/day with automated daily compounding.'
      });
    } else {
      handleOpenGeneralItem({
        title: slide.title,
        desc: slide.subtitle
      });
    }
  };

  return (
    <div className="paisago-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Notification Announcement Bar */}
      <div
        style={{
          background: 'linear-gradient(90deg, #070d1e 0%, #0b132b 50%, #064e3b 100%)',
          color: '#ffffff',
          fontSize: '13px',
          fontWeight: 600,
          textAlign: 'center',
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          borderBottom: '1px solid rgba(0, 210, 255, 0.2)'
        }}
      >
        <span style={{ backgroundColor: '#10b981', color: '#ffffff', padding: '2px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: 800 }}>
          NEW
        </span>
        <span>PaisaGo International is now live across UAE, Singapore, Nepal, Sri Lanka, Bhutan & Mauritius!</span>
        <a href="#international" style={{ color: '#00d2ff', textDecoration: 'underline', marginLeft: '6px', fontWeight: 700 }}>
          Know More
        </a>
      </div>

      {/* Main Navbar */}
      <Navbar
        onOpenQr={() => setQrModalOpen(true)}
        onOpenService={(srv) => handleOpenGeneralItem(srv)}
        onOpenCompanyInfo={(info) => setCompanyModalItem(info)}
        onOpenTravel={(travel) => setTravelBookingItem(travel)}
        onOpenBusiness={(biz) => handleOpenLeadModal(biz)}
        onOpenFeature={(feat) => setFeatureDetailItem(feat)}
      />

      {/* Main Page Sections */}
      <main style={{ flex: 1 }}>
        {/* 1. Hero Carousel - 7 slides */}
        <HeroCarousel onSelectSlideCta={handleSelectSlideCta} />

        {/* 2. Four Pillar Cards: Payments, Investments, Insurance, Lending */}
        <ServiceTabs onSelectFeature={(feature) => setFeatureDetailItem(feature)} />

        {/* 3. Simple, fast & secure transactions */}
        <SecureTransactions />

        {/* 4. Convenience at your fingertips - scrolling bill payment marquee (Recharges only) */}
        <BillRechargeGrid onSelectService={(srv) => setRechargeService(srv)} />

        {/* 5. Travel, stays & commute (Flights, Bus, IRCTC, Hotels) */}
        <TravelCommute onBookTravel={(booking) => setTravelBookingItem(booking)} />

        {/* 6. PaisaGo International */}
        <InternationalSection onActivateInternational={() => setQrModalOpen(true)} />

        {/* 7. Payments on PaisaGo are safe, reliable, and quick */}
        <SafePaymentsSection onWatchVideo={(title) => alert('Playing PaisaGo Safety Story: ' + title)} />

        {/* 8. Smart savings start here - Gold, Gold SIP, RD, NPS */}
        <SmartSavingsStadium onSelectSavings={(item) => setFeatureDetailItem(item)} />

        {/* 9. PaisaGo QR and devices - SmartSpeaker, SMART POD, EDC Machine, QR Standee */}
        <SmartDevices onOrderDevice={(device) => handleOpenLeadModal(device.name)} />

        {/* 10. Empowering your business with PaisaGo */}
        <BusinessSolutions onOpenLeadModal={handleOpenLeadModal} />

        {/* 11. PaisaGo Group - Driving Innovation Across India */}
        <PaisaGoGroupOrbit />

        {/* 12. PaisaGo Pulse - Security badge + transaction counter */}
        <PulseSection />

        {/* 13. App Download Banner */}
        <AppDownloadBanner />
      </main>

      {/* Footer */}
      <Footer onOpenFooterLink={handleOpenGeneralItem} />

      {/* 1. Recharge / Utility Payment Simulation Modal (Only for genuine bill payments) */}
      {rechargeService && (
        <RechargeModal
          service={rechargeService}
          onClose={() => setRechargeService(null)}
        />
      )}

      {/* 2. Company / Informational Modal (About Us, Careers, Press, Trust, Contact) */}
      {companyModalItem && (
        <CompanyInfoModal
          item={companyModalItem}
          onClose={() => setCompanyModalItem(null)}
        />
      )}

      {/* 3. Travel Booking Modal (Flights, Bus, IRCTC Trains, Hotels) */}
      {travelBookingItem && (
        <TravelBookingModal
          booking={travelBookingItem}
          onClose={() => setTravelBookingItem(null)}
        />
      )}

      {/* 4. Financial Product Feature Detail Modal (SIP, Gold, Insurance, Loans) */}
      {featureDetailItem && (
        <FeatureDetailModal
          feature={featureDetailItem}
          onClose={() => setFeatureDetailItem(null)}
          onOpenQr={() => setQrModalOpen(true)}
        />
      )}

      {/* 5. Merchant Lead Modal (Devices & Business Solutions) */}
      {leadModalOpen && (
        <MerchantLeadModal
          defaultSolution={leadDefaultSolution}
          onClose={() => setLeadModalOpen(false)}
        />
      )}

      {/* 6. Download App QR Code Modal */}
      {qrModalOpen && (
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
            padding: '16px'
          }}
          onClick={() => setQrModalOpen(false)}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              padding: '32px',
              maxWidth: '380px',
              width: '100%',
              textAlign: 'center',
              boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setQrModalOpen(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#f1f5f9',
                color: '#334155',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>

            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <QrCode size={26} />
            </div>

            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0b132b', marginBottom: '6px' }}>
              Scan to Download PaisaGo
            </h3>

            <p style={{ fontSize: '13.5px', color: '#64748b', marginBottom: '20px' }}>
              Point your smartphone camera at this QR code to download the official PaisaGo app.
            </p>

            <div
              style={{
                backgroundColor: '#f8fafc',
                border: '1.5px solid #e2e8f0',
                borderRadius: '16px',
                padding: '16px',
                display: 'inline-block',
                marginBottom: '16px'
              }}
            >
              <svg width="180" height="180" viewBox="0 0 100 100">
                <rect x="5" y="5" width="28" height="28" rx="4" fill="#059669" />
                <rect x="9" y="9" width="20" height="20" rx="2" fill="#ffffff" />
                <rect x="13" y="13" width="12" height="12" rx="2" fill="#059669" />

                <rect x="67" y="5" width="28" height="28" rx="4" fill="#059669" />
                <rect x="71" y="9" width="20" height="20" rx="2" fill="#ffffff" />
                <rect x="75" y="13" width="12" height="12" rx="2" fill="#059669" />

                <rect x="5" y="67" width="28" height="28" rx="4" fill="#059669" />
                <rect x="9" y="71" width="20" height="20" rx="2" fill="#ffffff" />
                <rect x="13" y="75" width="12" height="12" rx="2" fill="#059669" />

                <rect x="38" y="10" width="8" height="8" fill="#059669" />
                <rect x="50" y="10" width="8" height="8" fill="#059669" />
                <rect x="38" y="24" width="8" height="8" fill="#059669" />
                <rect x="50" y="24" width="8" height="8" fill="#059669" />
                <rect x="10" y="38" width="8" height="8" fill="#059669" />
                <rect x="24" y="38" width="8" height="8" fill="#059669" />

                <circle cx="50" cy="50" r="12" fill="#06b6d4" />
                <text x="50" y="55" fontSize="13" fontWeight="bold" fill="#ffffff" textAnchor="middle" fontFamily="sans-serif">पै</text>

                <rect x="68" y="38" width="8" height="8" fill="#059669" />
                <rect x="82" y="38" width="8" height="8" fill="#059669" />
                <rect x="38" y="68" width="8" height="8" fill="#059669" />
                <rect x="52" y="68" width="8" height="8" fill="#059669" />
                <rect x="68" y="68" width="8" height="8" fill="#059669" />
                <rect x="82" y="68" width="8" height="8" fill="#059669" />
                <rect x="52" y="82" width="8" height="8" fill="#059669" />
                <rect x="68" y="82" width="8" height="8" fill="#059669" />
              </svg>
            </div>

            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#334155', backgroundColor: '#f1f5f9', padding: '4px 10px', borderRadius: '8px' }}>Android</span>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#334155', backgroundColor: '#f1f5f9', padding: '4px 10px', borderRadius: '8px' }}>iOS</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
