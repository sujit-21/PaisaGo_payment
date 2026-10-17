import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  QrCode,
  Umbrella,
  Home,
  Heart,
  GraduationCap,
  Backpack,
  Plane,
  CheckCircle2,
  Check,
  CreditCard,
  Landmark,
  Smartphone,
  ExternalLink,
  Wifi
} from 'lucide-react';
import { carouselSlides } from '../data/paisagoData';

export default function HeroCarousel({ onSelectSlideCta }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = carouselSlides[currentSlide];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '560px',
        overflow: 'hidden',
        userSelect: 'none',
        backgroundColor: slide.theme === 'dark' ? '#080314' : '#ffffff',
        transition: 'background-color 0.4s ease'
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Dynamic Slide Background */}
      {slide.illustrationType === 'personal-loan' && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 28% 46%, rgba(206, 147, 250, 0.38) 0%, rgba(235, 209, 255, 0.18) 35%, rgba(255, 255, 255, 0) 65%), linear-gradient(180deg, #ffffff 0%, #fbf9fd 100%)',
            pointerEvents: 'none'
          }}
        />
      )}

      {slide.illustrationType === 'pos' && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 50% 68%, rgba(207, 250, 254, 0.7) 0%, rgba(240, 253, 255, 0.3) 45%, rgba(255, 255, 255, 1) 75%), #ffffff',
            pointerEvents: 'none'
          }}
        />
      )}

      {slide.illustrationType === 'pg' && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 12% 45%, rgba(186, 230, 253, 0.5) 0%, rgba(255, 255, 255, 0) 50%), radial-gradient(circle at 88% 45%, rgba(254, 215, 170, 0.45) 0%, rgba(255, 255, 255, 0) 50%), radial-gradient(circle at 50% 25%, rgba(233, 213, 255, 0.45) 0%, rgba(255, 255, 255, 0) 55%), #ffffff',
            pointerEvents: 'none'
          }}
        />
      )}

      {slide.illustrationType === 'sip' && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 50% 65%, rgba(216, 180, 254, 0.42) 0%, rgba(243, 232, 255, 0.25) 45%, rgba(255, 255, 255, 1) 75%), #ffffff',
            pointerEvents: 'none'
          }}
        >
          {/* Subtle Isometric Grid Lines */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(to right, rgba(168, 85, 247, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(168, 85, 247, 0.08) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              maskImage: 'radial-gradient(ellipse at 50% 65%, black 20%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(ellipse at 50% 65%, black 20%, transparent 70%)'
            }}
          />
        </div>
      )}

      {slide.illustrationType === 'sbi-card' && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 50% 45%, rgba(68, 18, 120, 0.9) 0%, rgba(25, 7, 48, 0.98) 55%, #080314 100%)',
            pointerEvents: 'none'
          }}
        >
          {/* Elegant Royal Damask / Mandala Wallpaper Pattern */}
          <svg
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              opacity: 0.12,
              mixBlendMode: 'screen'
            }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="damask" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path
                  d="M40 0 C45 15, 60 20, 80 20 C60 20, 55 35, 40 40 C35 35, 20 20, 0 20 C20 20, 35 15, 40 0 Z M40 40 C45 55, 60 60, 80 60 C60 60, 55 75, 40 80 C35 75, 20 60, 0 60 C20 60, 35 55, 40 40 Z"
                  fill="none"
                  stroke="#c084fc"
                  strokeWidth="0.8"
                />
                <circle cx="40" cy="40" r="3" fill="#c084fc" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#damask)" />
          </svg>

          {/* Bottom misty spotlight glow */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '140px',
              background: 'linear-gradient(to top, rgba(255,255,255,0.18), transparent)',
              filter: 'blur(20px)'
            }}
          />
        </div>
      )}

      {/* Main Slide Content Canvas */}
      <div
        style={{
          position: 'relative',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '40px 24px 30px',
          minHeight: '540px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 2
        }}
      >
        {/* ========================================================
            SLIDE 1: PERSONAL LOAN (Newton's Cradle)
            ======================================================== */}
        {slide.illustrationType === 'personal-loan' && (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Top Text Header */}
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div
                style={{
                  fontSize: '15px',
                  color: '#059669',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  marginBottom: '2px'
                }}
              >
                {slide.preTitle}
              </div>
              <h1
                style={{
                  fontSize: 'clamp(30px, 4.2vw, 44px)',
                  fontWeight: 800,
                  color: '#2d0c5a',
                  lineHeight: 1.15,
                  margin: '0 0 2px'
                }}
              >
                {slide.title}
              </h1>
              <div
                style={{
                  fontSize: 'clamp(24px, 3.4vw, 38px)',
                  fontWeight: 700,
                  color: '#059669',
                  marginBottom: '8px'
                }}
              >
                {slide.highlight}
              </div>
              <p style={{ fontSize: '15px', color: '#64748b', fontWeight: 500, margin: 0 }}>
                {slide.subtitle}
              </p>
            </div>

            {/* Newton's Cradle Visual */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '820px',
                height: '240px',
                margin: '10px 0 25px',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center'
              }}
            >
              {/* Top Suspension Bar (Subtle) */}
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '12%',
                  right: '12%',
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, rgba(5, 150, 105, 0.2) 20%, rgba(5, 150, 105, 0.2) 80%, transparent)'
                }}
              />

              {/* Cradle Container */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  gap: 'clamp(12px, 2.2vw, 24px)',
                  paddingTop: '2px'
                }}
              >
                {/* 1. Left Swinging PaisaGo Coin Pendulum */}
                <div
                  style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    transformOrigin: 'top center',
                    animation: 'cradleBall0 3.2s infinite linear',
                    marginRight: '2px'
                  }}
                >
                  {/* Suspension Strings */}
                  <div
                    style={{
                      width: '1px',
                      height: '110px',
                      background: 'linear-gradient(to bottom, rgba(147, 51, 234, 0.4), rgba(147, 51, 234, 0.8))'
                    }}
                  />

                  {/* Glowing 3D PaisaGo Coin */}
                  <div
                    style={{
                      width: '74px',
                      height: '74px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle at 35% 30%, #a855f7 0%, #7e22ce 50%, #4a157d 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 35px rgba(168, 85, 247, 0.85), inset 0 2px 4px rgba(255,255,255,0.6)',
                      border: '2.5px solid #d8b4fe',
                      cursor: 'pointer'
                    }}
                    onClick={() => onSelectSlideCta(slide)}
                  >
                    {/* PaisaGo Hindi 'पै' Logo */}
                    <span
                      style={{
                        color: '#ffffff',
                        fontSize: '34px',
                        fontWeight: 900,
                        fontFamily: "'Segoe UI', 'Mukta', 'Noto Sans Devanagari', sans-serif",
                        lineHeight: 1,
                        textShadow: '0 2px 6px rgba(0,0,0,0.35)'
                      }}
                    >
                      पै
                    </span>
                  </div>
                </div>

                {/* 2. Row of 6 Pearl Spheres with Strings & Labels */}
                {[
                  { id: 'emergency', label: 'Emergency', icon: Umbrella, color: '#3b82f6' },
                  { id: 'home', label: 'Home', icon: Home, color: '#ec4899' },
                  { id: 'medical', label: 'Medical', icon: Heart, color: '#ef4444' },
                  { id: 'upskilling', label: 'Upskilling', icon: GraduationCap, color: '#8b5cf6' },
                  { id: 'education', label: 'Education', icon: Backpack, color: '#f59e0b' },
                  { id: 'travel', label: 'Travel', icon: Plane, color: '#06b6d4' }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  const isLast = idx === 5;
                  return (
                    <div
                      key={item.id}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: 'clamp(58px, 8vw, 76px)',
                        position: 'relative'
                      }}
                    >
                      {/* Swinging Pendulum Unit (String + Pearl Sphere) */}
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          transformOrigin: 'top center',
                          animation: `cradleBall${idx + 1} 3.2s infinite linear`
                        }}
                      >
                        {/* String */}
                        <div
                          style={{
                            width: '1px',
                            height: '110px',
                            backgroundColor: 'rgba(203, 213, 225, 0.85)'
                          }}
                        />

                        {/* 3D Iridescent Pearl Sphere */}
                        <div
                          style={{
                            width: 'clamp(54px, 6.5vw, 68px)',
                            height: 'clamp(54px, 6.5vw, 68px)',
                            borderRadius: '50%',
                            background:
                              'radial-gradient(circle at 35% 30%, #ffffff 0%, #f0fdf4 40%, #a7f3d0 75%, #c084fc 100%)',
                            boxShadow:
                              '0 8px 18px rgba(147, 51, 234, 0.15), inset 0 -4px 8px rgba(147, 51, 234, 0.25), inset 0 2px 5px rgba(255,255,255,0.9)',
                            border: '1px solid rgba(255,255,255,0.8)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'transform 0.2s ease',
                            cursor: 'pointer'
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px) scale(1.06)')}
                          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0) scale(1)')}
                          onClick={() => onSelectSlideCta(slide)}
                        >
                          <Icon size={26} color="#4a157d" strokeWidth={1.8} />
                        </div>
                      </div>

                      {/* Sphere Label */}
                      <span
                        style={{
                          marginTop: '10px',
                          fontSize: '12px',
                          color: '#64748b',
                          fontWeight: 500,
                          textAlign: 'center'
                        }}
                      >
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Floating QR Card */}
            <div
              onClick={() => onSelectSlideCta(slide)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                backgroundColor: '#ffffff',
                padding: '8px 18px',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(5, 150, 105, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)';
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <QrCode size={24} color="#0b132b" />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#0b132b', lineHeight: 1.2 }}>
                  Scan to apply on
                </div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#0b132b', lineHeight: 1.2 }}>
                  the PaisaGo app
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            SLIDE 2: PAISAGO POS (One Device, One App)
            ======================================================== */}
        {slide.illustrationType === 'pos' && (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Top Text Header */}
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
              <h1
                style={{
                  fontSize: 'clamp(30px, 4.2vw, 44px)',
                  fontWeight: 800,
                  color: '#2d0c5a',
                  lineHeight: 1.15,
                  margin: '0 0 4px'
                }}
              >
                {slide.title}
              </h1>
              <p
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#00baf2',
                  margin: '0 0 16px'
                }}
              >
                {slide.subtitle}
              </p>
              <button
                onClick={() => onSelectSlideCta(slide)}
                style={{
                  backgroundColor: '#059669',
                  color: '#ffffff',
                  padding: '10px 24px',
                  borderRadius: '30px',
                  fontSize: '14px',
                  fontWeight: 700,
                  boxShadow: '0 6px 18px rgba(5, 150, 105,  0.25)',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#4e1c84';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#059669';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {slide.cta}
              </button>
            </div>

            {/* Central Stage Visual with Concentric Ripples */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '680px',
                height: '280px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '10px'
              }}
            >
              {/* Concentric Cyan Stage Rings */}
              <div
                style={{
                  position: 'absolute',
                  width: '580px',
                  height: '200px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(0, 186, 242, 0.25)',
                  background: 'radial-gradient(ellipse at center, rgba(165, 243, 252, 0.35) 0%, transparent 70%)',
                  transform: 'rotateX(60deg)',
                  pointerEvents: 'none'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  width: '420px',
                  height: '140px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(0, 186, 242, 0.35)',
                  transform: 'rotateX(60deg)',
                  pointerEvents: 'none'
                }}
              />

              {/* 3D PaisaGo POS Machine */}
              <div
                style={{
                  position: 'relative',
                  width: '120px',
                  height: '190px',
                  borderRadius: '16px',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 16px 36px rgba(0,0,0,0.14), 0 2px 6px rgba(0,0,0,0.06)',
                  border: '2px solid #e2e8f0',
                  padding: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  transform: 'perspective(600px) rotateY(-8deg) rotateX(4deg)',
                  zIndex: 3
                }}
              >
                {/* Top Printer / Scanner bar */}
                <div
                  style={{
                    backgroundColor: '#f1f5f9',
                    borderRadius: '8px 8px 4px 4px',
                    padding: '6px 4px',
                    textAlign: 'center',
                    marginBottom: '6px'
                  }}
                >
                  <div style={{ fontSize: '9px', fontWeight: 800, color: '#059669' }}>पै PaisaGo</div>
                </div>

                {/* POS Screen */}
                <div
                  style={{
                    flex: 1,
                    backgroundColor: '#1e0836',
                    borderRadius: '8px',
                    padding: '8px 6px',
                    color: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '8px', color: '#00baf2', fontWeight: 600 }}>Payment Options</div>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#ffffff',
                      borderRadius: '4px',
                      margin: '2px auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <QrCode size={30} color="#1e0836" />
                  </div>
                  <div style={{ fontSize: '8px', color: '#ffffff', fontWeight: 700 }}>PaisaGo QR & more</div>
                </div>

                {/* Bottom Card Slot */}
                <div
                  style={{
                    height: '14px',
                    backgroundColor: '#e2e8f0',
                    borderRadius: '4px',
                    marginTop: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div style={{ width: '50px', height: '2px', backgroundColor: '#94a3b8' }} />
                </div>
              </div>

              {/* Floating Pill: "Rs.2000 Received" */}
              <div
                style={{
                  position: 'absolute',
                  left: '18%',
                  top: '32%',
                  backgroundColor: '#ffffff',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  zIndex: 4,
                  animation: 'floatSlow 4s ease-in-out infinite'
                }}
              >
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Check size={12} color="#ffffff" strokeWidth={3} />
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#1e293b', lineHeight: 1.1 }}>Rs.2000</div>
                  <div style={{ fontSize: '10px', color: '#64748b' }}>Received</div>
                </div>
              </div>

              {/* Strawberry Cake Slice Graphic */}
              <div
                style={{
                  position: 'absolute',
                  left: '26%',
                  bottom: '12%',
                  zIndex: 2,
                  textAlign: 'center'
                }}
              >
                <svg width="70" height="54" viewBox="0 0 80 60" fill="none">
                  {/* Plate */}
                  <ellipse cx="40" cy="52" rx="36" ry="7" fill="#e2e8f0" />
                  <ellipse cx="40" cy="50" rx="34" ry="6" fill="#f8fafc" />
                  {/* Cake body */}
                  <path d="M16 46 L40 18 L64 46 Z" fill="#f43f5e" />
                  <path d="M16 46 L40 18 L40 46 Z" fill="#fb7185" />
                  {/* Cream layers */}
                  <rect x="22" y="38" width="36" height="4" rx="2" fill="#ffffff" />
                  <rect x="28" y="28" width="24" height="3" rx="1.5" fill="#ffffff" />
                  {/* Whipped topping & strawberry */}
                  <ellipse cx="40" cy="18" rx="8" ry="5" fill="#ffffff" />
                  <polygon points="40,10 36,16 44,16" fill="#e11d48" />
                </svg>
              </div>

              {/* Cyan Floating Credit Card */}
              <div
                style={{
                  position: 'absolute',
                  left: '38%',
                  bottom: '22%',
                  width: '90px',
                  height: '56px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #00baf2 0%, #0284c7 100%)',
                  boxShadow: '0 8px 18px rgba(0, 186, 242, 0.35)',
                  padding: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transform: 'rotate(-12deg)',
                  zIndex: 4
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ width: '12px', height: '9px', backgroundColor: '#ffd13b', borderRadius: '2px' }} />
                  <Wifi size={10} color="#ffffff" />
                </div>
                <div style={{ fontSize: '7px', color: 'rgba(255,255,255,0.9)', letterSpacing: '1px' }}>
                  •••• 9421
                </div>
              </div>

              {/* Purple Over-Ear Headphones Graphic */}
              <div
                style={{
                  position: 'absolute',
                  right: '22%',
                  top: '24%',
                  zIndex: 3
                }}
              >
                <svg width="90" height="90" viewBox="0 0 100 100" fill="none">
                  {/* Headband */}
                  <path
                    d="M20 55 C20 25, 80 25, 80 55"
                    stroke="#059669"
                    strokeWidth="8"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Left Earcup */}
                  <rect x="12" y="50" width="16" height="30" rx="8" fill="#f97316" />
                  <circle cx="20" cy="65" r="10" fill="#ffffff" />
                  <circle cx="20" cy="65" r="5" fill="#059669" />
                  {/* Right Earcup */}
                  <rect x="72" y="50" width="16" height="30" rx="8" fill="#f97316" />
                  <circle cx="80" cy="65" r="10" fill="#ffffff" />
                  <circle cx="80" cy="65" r="5" fill="#059669" />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            SLIDE 3: PAYMENT AGGREGATOR (Online Business)
            ======================================================== */}
        {slide.illustrationType === 'pg' && (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Top Text Header */}
            <div style={{ textAlign: 'center', marginBottom: '14px' }}>
              <div
                style={{
                  fontSize: '18px',
                  fontWeight: 800,
                  color: '#059669',
                  marginBottom: '2px',
                  letterSpacing: '0.04em'
                }}
              >
                {slide.badge}
              </div>
              <h1
                style={{
                  fontSize: 'clamp(28px, 4vw, 42px)',
                  fontWeight: 800,
                  color: '#2d0c5a',
                  lineHeight: 1.15,
                  margin: '0 0 4px'
                }}
              >
                {slide.title}
              </h1>
              <p style={{ fontSize: '15px', color: '#64748b', margin: '0 0 14px' }}>
                {slide.subtitle}
              </p>
              <button
                onClick={() => onSelectSlideCta(slide)}
                style={{
                  backgroundColor: '#059669',
                  color: '#ffffff',
                  padding: '10px 28px',
                  borderRadius: '30px',
                  fontSize: '14px',
                  fontWeight: 700,
                  boxShadow: '0 6px 18px rgba(5, 150, 105,  0.25)',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#4e1c84';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#059669';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {slide.cta}
              </button>
            </div>

            {/* Central Phone Mockup & Floating Cards */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '680px',
                height: '290px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '6px'
              }}
            >
              {/* Center Smartphone */}
              <div
                style={{
                  width: '150px',
                  height: '255px',
                  borderRadius: '24px',
                  backgroundColor: '#1e293b',
                  boxShadow: '0 18px 40px rgba(0,0,0,0.18)',
                  padding: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '3px solid #334155',
                  zIndex: 3
                }}
              >
                {/* Screen */}
                <div
                  style={{
                    flex: 1,
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    padding: '8px 7px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    overflow: 'hidden'
                  }}
                >
                  {/* Top Store bar */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                      <span style={{ fontSize: '9px', fontWeight: 800, color: '#059669' }}>पै PaisaGo PG</span>
                    </div>
                    <div
                      style={{
                        backgroundColor: '#f8fafc',
                        borderRadius: '6px',
                        padding: '4px 6px',
                        marginBottom: '6px'
                      }}
                    >
                      <div style={{ fontSize: '8px', color: '#64748b' }}>Online Store • 2 items</div>
                      <div style={{ fontSize: '11px', fontWeight: 800, color: '#0f172a' }}>₹6,490</div>
                    </div>

                    {/* Payment Radios */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '8px',
                          padding: '3px 4px',
                          backgroundColor: '#f1f5f9',
                          borderRadius: '4px',
                          color: '#0f172a',
                          fontWeight: 600
                        }}
                      >
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#00baf2' }} />
                        <span>UPI ID (Instant)</span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '8px',
                          padding: '3px 4px',
                          color: '#475569'
                        }}
                      >
                        <Landmark size={8} />
                        <span>Net Banking</span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '8px',
                          padding: '3px 4px',
                          color: '#475569'
                        }}
                      >
                        <CreditCard size={8} />
                        <span>Credit & Debit Cards</span>
                      </div>
                    </div>
                  </div>

                  {/* Buy Now Button */}
                  <div
                    style={{
                      backgroundColor: '#00baf2',
                      color: '#ffffff',
                      textAlign: 'center',
                      padding: '5px',
                      borderRadius: '6px',
                      fontSize: '9px',
                      fontWeight: 700
                    }}
                  >
                    Buy now
                  </div>
                </div>
              </div>

              {/* Floating Element 1: Left Pink Credit Card */}
              <div
                style={{
                  position: 'absolute',
                  left: '14%',
                  top: '38%',
                  width: '115px',
                  height: '70px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)',
                  boxShadow: '0 10px 24px rgba(244, 63, 94, 0.28)',
                  padding: '8px',
                  color: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transform: 'rotate(-8deg)',
                  zIndex: 4,
                  animation: 'floatSlow 4s ease-in-out infinite'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ width: '14px', height: '10px', backgroundColor: '#fef08a', borderRadius: '2px' }} />
                  <Wifi size={12} />
                </div>
                <div style={{ fontSize: '8px', letterSpacing: '1px' }}>•••• •••• 6798</div>
              </div>

              {/* Cyan floating check bubble over pink card */}
              <div
                style={{
                  position: 'absolute',
                  left: '28%',
                  top: '36%',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: '#00baf2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 10px rgba(0, 186, 242, 0.4)',
                  zIndex: 5
                }}
              >
                <Check size={14} color="#ffffff" strokeWidth={3} />
              </div>

              {/* Floating Element 2: Top-Left ABC Online Store Pill */}
              <div
                style={{
                  position: 'absolute',
                  left: '24%',
                  top: '12%',
                  backgroundColor: '#ffffff',
                  padding: '6px 12px',
                  borderRadius: '10px',
                  boxShadow: '0 8px 18px rgba(0,0,0,0.08)',
                  border: '1px solid #e2e8f0',
                  textAlign: 'center',
                  zIndex: 2
                }}
              >
                <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#f97316', margin: '0 auto 2px' }} />
                <div style={{ fontSize: '8px', color: '#64748b' }}>ABC Online Store</div>
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#1e293b' }}>₹5,000</div>
              </div>

              {/* Floating Element 3: Top-Right Bank Card */}
              <div
                style={{
                  position: 'absolute',
                  right: '18%',
                  top: '18%',
                  backgroundColor: '#ffffff',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  boxShadow: '0 10px 24px rgba(0,0,0,0.08)',
                  border: '1px solid #e2e8f0',
                  textAlign: 'center',
                  zIndex: 2
                }}
              >
                <Landmark size={24} color="#f43f5e" style={{ margin: '0 auto 4px' }} />
                <div style={{ fontSize: '9px', fontWeight: 700, color: '#64748b' }}>NET BANKING</div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#1e293b' }}>₹50,000</div>
              </div>

              {/* Floating Element 4: Bottom-Right Sky High Invoice Card */}
              <div
                style={{
                  position: 'absolute',
                  right: '16%',
                  bottom: '18%',
                  backgroundColor: '#ffffff',
                  padding: '8px 14px',
                  borderRadius: '10px',
                  boxShadow: '0 8px 18px rgba(0,0,0,0.08)',
                  border: '1px solid #e2e8f0',
                  zIndex: 2
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#059669' }} />
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#334155' }}>Sky High Pvt Ltd.</span>
                </div>
                <div style={{ width: '90px', height: '4px', backgroundColor: '#e2e8f0', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '65%', height: '100%', backgroundColor: '#00baf2' }} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            SLIDE 4: DAILY MUTUAL FUND SIP (Glass Jar)
            ======================================================== */}
        {slide.illustrationType === 'sip' && (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Top Text Header */}
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
              <h1
                style={{
                  fontSize: 'clamp(30px, 4.2vw, 44px)',
                  fontWeight: 800,
                  color: '#2d0c5a',
                  lineHeight: 1.15,
                  margin: '0 0 4px'
                }}
              >
                {slide.title}
              </h1>
              <p
                style={{
                  fontSize: '18px',
                  color: '#64748b',
                  margin: '0 0 16px'
                }}
              >
                {slide.subtitlePre}
                <strong style={{ color: '#059669', fontWeight: 800 }}>{slide.subtitleHighlight}</strong>
              </p>
              <button
                onClick={() => onSelectSlideCta(slide)}
                style={{
                  backgroundColor: '#059669',
                  color: '#ffffff',
                  padding: '10px 28px',
                  borderRadius: '30px',
                  fontSize: '14px',
                  fontWeight: 700,
                  boxShadow: '0 6px 18px rgba(5, 150, 105,  0.25)',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#4e1c84';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#059669';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {slide.cta}
              </button>
            </div>

            {/* Central 3D Glass Jar with Indian Rupee Banknotes */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '460px',
                height: '280px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '10px'
              }}
            >
              {/* Radiant Warm & Purple Glow behind the jar */}
              <div
                style={{
                  position: 'absolute',
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(250, 204, 21, 0.45) 0%, rgba(168, 85, 247, 0.3) 50%, transparent 75%)',
                  filter: 'blur(20px)',
                  pointerEvents: 'none'
                }}
              />

              {/* Realistic Glass Jar SVG */}
              <svg width="200" height="250" viewBox="0 0 200 250" fill="none">
                <defs>
                  {/* Glass Gradient */}
                  <linearGradient id="glassSide" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
                    <stop offset="15%" stopColor="#c084fc" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.05" />
                    <stop offset="85%" stopColor="#c084fc" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.75" />
                  </linearGradient>

                  {/* Chrome Lid Rim */}
                  <linearGradient id="chromeRim" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#cbd5e1" />
                    <stop offset="100%" stopColor="#94a3b8" />
                  </linearGradient>

                  {/* Green Rupee Note */}
                  <linearGradient id="noteGreen" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#86efac" />
                    <stop offset="50%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#15803d" />
                  </linearGradient>

                  {/* Purple Rupee Note */}
                  <linearGradient id="notePurple" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#d8b4fe" />
                    <stop offset="100%" stopColor="#7e22ce" />
                  </linearGradient>
                </defs>

                {/* Banknote sticking out of jar top slot */}
                <g transform="translate(82, 10)">
                  <rect
                    x="0"
                    y="0"
                    width="36"
                    height="50"
                    rx="3"
                    fill="url(#noteGreen)"
                    stroke="#16a34a"
                    strokeWidth="1"
                    transform="rotate(-5)"
                  />
                  <text x="6" y="24" fill="#ffffff" fontSize="12" fontWeight="900" transform="rotate(85, 18, 25)">
                    100
                  </text>
                  <circle cx="18" cy="38" r="4" fill="rgba(255,255,255,0.4)" />
                </g>

                {/* Glass Jar Body (Back Layer) */}
                <rect
                  x="35"
                  y="60"
                  width="130"
                  height="160"
                  rx="24"
                  fill="rgba(243, 232, 255, 0.35)"
                  stroke="rgba(255, 255, 255, 0.8)"
                  strokeWidth="2"
                />

                {/* Folded Rupee Notes Inside Jar */}
                <g transform="translate(45, 110)">
                  {/* Purple notes bundle */}
                  <rect x="15" y="40" width="40" height="50" rx="4" fill="url(#notePurple)" transform="rotate(-25)" />
                  <rect x="55" y="45" width="42" height="48" rx="4" fill="url(#notePurple)" transform="rotate(18)" />

                  {/* Green notes bundle */}
                  <rect x="30" y="25" width="45" height="52" rx="4" fill="url(#noteGreen)" transform="rotate(10)" />
                  <text x="45" y="55" fill="#ffffff" fontSize="13" fontWeight="900" transform="rotate(10)">
                    10
                  </text>

                  <rect x="50" y="20" width="38" height="54" rx="4" fill="url(#noteGreen)" transform="rotate(-15)" />
                  <text x="60" y="50" fill="#ffffff" fontSize="14" fontWeight="900" transform="rotate(-15)">
                    100
                  </text>
                </g>

                {/* Glass Jar Body (Front Highlight & Reflection) */}
                <rect
                  x="35"
                  y="60"
                  width="130"
                  height="160"
                  rx="24"
                  fill="url(#glassSide)"
                  stroke="rgba(255, 255, 255, 0.9)"
                  strokeWidth="2"
                />

                {/* Jar Top Neck & Metallic Rim */}
                <rect x="45" y="50" width="110" height="15" rx="4" fill="url(#chromeRim)" stroke="#94a3b8" strokeWidth="1" />
                <rect x="42" y="44" width="116" height="8" rx="3" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />

                {/* Vertical Specular Glass Highlight */}
                <rect x="48" y="72" width="6" height="130" rx="3" fill="#ffffff" opacity="0.65" />
                <rect x="146" y="72" width="4" height="130" rx="2" fill="#ffffff" opacity="0.45" />
              </svg>
            </div>
          </div>
        )}

        {/* ========================================================
            SLIDE 5: PAISAGO x SBI CARD (Thoughtfully Crafted for India)
            ======================================================== */}
        {slide.illustrationType === 'sbi-card' && (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Top Text Header (Dark Luxurious) */}
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.25em',
                  color: '#c084fc',
                  marginBottom: '8px'
                }}
              >
                {slide.tag}
              </div>

              {/* Co-Branded Logos */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '10px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      backgroundColor: '#059669',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <span style={{ color: '#fff', fontSize: '13px', fontWeight: 800 }}>पै</span>
                  </div>
                  <span style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff' }}>PaisaGo</span>
                </div>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>✕</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#00baf2' }} />
                  <span style={{ fontSize: '18px', fontWeight: 800, color: '#00baf2' }}>SBI card</span>
                </div>
                <span
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.15em',
                    color: '#94a3b8',
                    marginLeft: '4px',
                    fontWeight: 700
                  }}
                >
                  CREDIT CARDS
                </span>
              </div>

              {/* Golden Gradient Main Title */}
              <h1
                style={{
                  fontSize: 'clamp(24px, 3.4vw, 36px)',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  background: 'linear-gradient(90deg, #fef08a 0%, #fde047 30%, #eab308 70%, #ca8a04 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  margin: '0 0 6px'
                }}
              >
                {slide.title}
              </h1>

              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', margin: '0 0 16px' }}>
                {slide.subtitle}
              </p>

              <button
                onClick={() => onSelectSlideCta(slide)}
                style={{
                  backgroundColor: '#ffffff',
                  color: '#1a0836',
                  padding: '9px 28px',
                  borderRadius: '30px',
                  fontSize: '14px',
                  fontWeight: 700,
                  boxShadow: '0 8px 24px rgba(255,255,255,0.2)',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(255,255,255,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,255,255,0.2)';
                }}
              >
                {slide.cta}
              </button>
            </div>

            {/* Central 3D Credit Cards Visual */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '540px',
                height: '240px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '10px'
              }}
            >
              {/* Back Card: Indigo/Purple Gradient */}
              <div
                style={{
                  position: 'absolute',
                  right: '32%',
                  width: '135px',
                  height: '210px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #2e0854 0%, #4a157d 50%, #7e22ce 100%)',
                  border: '1.5px solid rgba(192, 132, 252, 0.4)',
                  boxShadow: '0 16px 36px rgba(0,0,0,0.6)',
                  padding: '12px 10px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transform: 'perspective(800px) rotateY(15deg) rotateZ(4deg)',
                  zIndex: 2
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '10px', fontWeight: 800, color: '#ffffff' }}>PaisaGo</span>
                  <Wifi size={12} color="#ffffff" />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontSize: '44px',
                      fontWeight: 900,
                      color: 'transparent',
                      WebkitTextStroke: '1.5px #a855f7',
                      lineHeight: 1
                    }}
                  >
                    पै
                  </div>
                </div>
                <div style={{ fontSize: '10px', fontWeight: 800, color: '#00baf2' }}>SBI Card</div>
              </div>

              {/* Front Card: Sleek Matte Black SELECT BLACK */}
              <div
                style={{
                  position: 'absolute',
                  left: '32%',
                  width: '145px',
                  height: '220px',
                  borderRadius: '14px',
                  background: 'linear-gradient(145deg, #18181b 0%, #09090b 100%)',
                  border: '1.5px solid rgba(255, 255, 255, 0.25)',
                  boxShadow: '0 20px 45px rgba(0,0,0,0.8), 0 0 30px rgba(168, 85, 247, 0.25)',
                  padding: '14px 12px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transform: 'perspective(800px) rotateY(-10deg) rotateZ(-3deg)',
                  zIndex: 3
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#ffffff' }}>PaisaGo</span>
                  <Wifi size={14} color="#ffffff" />
                </div>

                {/* EMV Chip & Glowing Neon PaisaGo Pe Logo */}
                <div>
                  <div
                    style={{
                      width: '24px',
                      height: '18px',
                      backgroundColor: '#eab308',
                      borderRadius: '3px',
                      marginBottom: '8px'
                    }}
                  />
                  <div style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        fontSize: '52px',
                        fontWeight: 900,
                        color: 'transparent',
                        WebkitTextStroke: '2px #00baf2',
                        filter: 'drop-shadow(0 0 10px #00baf2)',
                        lineHeight: 1
                      }}
                    >
                      पै
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#00baf2' }}>SBI card</span>
                  <span style={{ fontSize: '8px', color: '#94a3b8' }}>RuPay</span>
                </div>
              </div>
            </div>

            {/* Bottom Light Beam Divider with text */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                marginTop: '10px',
                fontSize: '12px',
                color: 'rgba(255,255,255,0.7)',
                letterSpacing: '0.05em'
              }}
            >
              <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4))' }} />
              <span>{slide.subtext}</span>
              <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, rgba(255,255,255,0.4), transparent)' }} />
            </div>

            {/* Bottom Right Footnote */}
            <div
              style={{
                position: 'absolute',
                bottom: '12px',
                right: '24px',
                fontSize: '10px',
                color: 'rgba(255,255,255,0.4)'
              }}
            >
              {slide.disclaimer}
            </div>
          </div>
        )}

        {/* Carousel Pagination Dots (Matching exact PaisaGo style) */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            marginTop: '20px',
            zIndex: 10
          }}
        >
          {carouselSlides.map((s, idx) => {
            const isActive = currentSlide === idx;
            const isDark = slide.theme === 'dark';
            return (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                style={{
                  width: isActive ? '32px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: isActive
                    ? isDark
                      ? '#ffffff'
                      : '#059669'
                    : isDark
                    ? 'rgba(255,255,255,0.25)'
                    : '#dcd4eb',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isActive && !isDark ? '0 2px 8px rgba(5, 150, 105,  0.4)' : 'none'
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>

      {/* Floating Carousel Navigation Arrows */}
      <button
        onClick={handlePrev}
        style={{
          position: 'absolute',
          left: '24px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          backgroundColor: slide.theme === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(8px)',
          color: slide.theme === 'dark' ? '#ffffff' : '#0b132b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          transition: 'all 0.2s',
          zIndex: 20
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
          e.currentTarget.style.backgroundColor = slide.theme === 'dark' ? 'rgba(255,255,255,0.25)' : '#ffffff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          e.currentTarget.style.backgroundColor = slide.theme === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.85)';
        }}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={handleNext}
        style={{
          position: 'absolute',
          right: '24px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          backgroundColor: slide.theme === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(8px)',
          color: slide.theme === 'dark' ? '#ffffff' : '#0b132b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          transition: 'all 0.2s',
          zIndex: 20
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
          e.currentTarget.style.backgroundColor = slide.theme === 'dark' ? 'rgba(255,255,255,0.25)' : '#ffffff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          e.currentTarget.style.backgroundColor = slide.theme === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.85)';
        }}
        aria-label="Next Slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* Subtle Animation Keyframes */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        /* Newton's Wave: ONE BY ONE LEFT TO RIGHT, then RIGHT TO LEFT */

        /* Ball 0 (Leftmost PaisaGo Coin 'पै'): Initiates left swing, then catches return */
        @keyframes cradleBall0 {
          0% {
            transform: rotate(0deg);
            animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          4% {
            transform: rotate(-26deg);
            animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
          }
          8% {
            transform: rotate(0deg);
          }
          8.01%, 84% {
            transform: rotate(0deg);
          }
          84.01% {
            transform: rotate(0deg);
            animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          92% {
            transform: rotate(-26deg);
            animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        /* Ball 1 (Emergency): Swings right 8-14%, then swings left 78-84% */
        @keyframes cradleBall1 {
          0%, 8% {
            transform: rotate(0deg);
          }
          8.01% {
            transform: rotate(0deg);
            animation-timing-function: ease-out;
          }
          11% {
            transform: rotate(12deg);
            animation-timing-function: ease-in;
          }
          14% {
            transform: rotate(0deg);
          }
          14.01%, 78% {
            transform: rotate(0deg);
          }
          78.01% {
            transform: rotate(0deg);
            animation-timing-function: ease-out;
          }
          81% {
            transform: rotate(-12deg);
            animation-timing-function: ease-in;
          }
          84%, 100% {
            transform: rotate(0deg);
          }
        }

        /* Ball 2 (Home): Swings right 14-20%, then swings left 72-78% */
        @keyframes cradleBall2 {
          0%, 14% {
            transform: rotate(0deg);
          }
          14.01% {
            transform: rotate(0deg);
            animation-timing-function: ease-out;
          }
          17% {
            transform: rotate(12deg);
            animation-timing-function: ease-in;
          }
          20% {
            transform: rotate(0deg);
          }
          20.01%, 72% {
            transform: rotate(0deg);
          }
          72.01% {
            transform: rotate(0deg);
            animation-timing-function: ease-out;
          }
          75% {
            transform: rotate(-12deg);
            animation-timing-function: ease-in;
          }
          78%, 100% {
            transform: rotate(0deg);
          }
        }

        /* Ball 3 (Medical): Swings right 20-26%, then swings left 66-72% */
        @keyframes cradleBall3 {
          0%, 20% {
            transform: rotate(0deg);
          }
          20.01% {
            transform: rotate(0deg);
            animation-timing-function: ease-out;
          }
          23% {
            transform: rotate(12deg);
            animation-timing-function: ease-in;
          }
          26% {
            transform: rotate(0deg);
          }
          26.01%, 66% {
            transform: rotate(0deg);
          }
          66.01% {
            transform: rotate(0deg);
            animation-timing-function: ease-out;
          }
          69% {
            transform: rotate(-12deg);
            animation-timing-function: ease-in;
          }
          72%, 100% {
            transform: rotate(0deg);
          }
        }

        /* Ball 4 (Upskilling): Swings right 26-32%, then swings left 60-66% */
        @keyframes cradleBall4 {
          0%, 26% {
            transform: rotate(0deg);
          }
          26.01% {
            transform: rotate(0deg);
            animation-timing-function: ease-out;
          }
          29% {
            transform: rotate(12deg);
            animation-timing-function: ease-in;
          }
          32% {
            transform: rotate(0deg);
          }
          32.01%, 60% {
            transform: rotate(0deg);
          }
          60.01% {
            transform: rotate(0deg);
            animation-timing-function: ease-out;
          }
          63% {
            transform: rotate(-12deg);
            animation-timing-function: ease-in;
          }
          66%, 100% {
            transform: rotate(0deg);
          }
        }

        /* Ball 5 (Education): Swings right 32-38%, then swings left 54-60% */
        @keyframes cradleBall5 {
          0%, 32% {
            transform: rotate(0deg);
          }
          32.01% {
            transform: rotate(0deg);
            animation-timing-function: ease-out;
          }
          35% {
            transform: rotate(13deg);
            animation-timing-function: ease-in;
          }
          38% {
            transform: rotate(0deg);
          }
          38.01%, 54% {
            transform: rotate(0deg);
          }
          54.01% {
            transform: rotate(0deg);
            animation-timing-function: ease-out;
          }
          57% {
            transform: rotate(-13deg);
            animation-timing-function: ease-in;
          }
          60%, 100% {
            transform: rotate(0deg);
          }
        }

        /* Ball 6 (Travel - Rightmost End Ball): Takes full impulse, swings out 38-54% */
        @keyframes cradleBall6 {
          0%, 38% {
            transform: rotate(0deg);
          }
          38.01% {
            transform: rotate(0deg);
            animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          46% {
            transform: rotate(26deg);
            animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
          }
          54% {
            transform: rotate(0deg);
          }
          54.01%, 100% {
            transform: rotate(0deg);
          }
        }
        @media (max-width: 768px) {
          .cradle-spheres {
            gap: 8px !important;
          }
        }
      `}</style>
    </section>
  );
}
