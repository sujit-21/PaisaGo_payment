import React, { useState, useEffect, useRef } from 'react';
import { Play, ChevronLeft, ChevronRight, ShieldCheck, X } from 'lucide-react';

export default function SafePaymentsSection({ onWatchVideo }) {
  const [activeStoryModal, setActiveStoryModal] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1); // Default centered on "The Sound of Trust for Shopkeepers"
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // Drag tracking
  const touchStartX = useRef(null);
  const isDragging = useRef(false);

  const stories = [
    {
      id: 1,
      title: 'Payments with Zero Surcharge',
      subtitle: 'Instant direct-to-bank UPI transfers with 99.99% success rate',
      badge: 'Zero Transaction Fee',
      image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
      duration: '0:45 min',
      videoUrl: 'https://www.paisago.com/'
    },
    {
      id: 2,
      title: 'The Sound of Trust for Shopkeepers',
      subtitle: 'Instant audio confirmations in 21 Indian languages',
      badge: 'SmartSpeaker Alert',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
      duration: '1:10 min',
      videoUrl: 'https://www.paisago.com/'
    },
    {
      id: 3,
      title: 'Everyday Safety with 256-Bit Encryption',
      subtitle: 'Bank-grade security monitored 24/7 by AI risk engines',
      badge: 'PCI DSS Compliant',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      duration: '1:02 min',
      videoUrl: 'https://www.paisago.com/'
    },
    {
      id: 4,
      title: 'Travel Bookings with Instant Confirmation',
      subtitle: 'Book flights, trains, and buses with zero cancellation stress',
      badge: 'Fast & Reliable',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
      duration: '0:55 min',
      videoUrl: 'https://www.paisago.com/'
    }
  ];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth auto-play every 5 seconds (pauses when hovering)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, stories.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % stories.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches ? e.touches[0].clientX : e.clientX;
    isDragging.current = true;
  };

  const handleTouchEnd = (e) => {
    if (!isDragging.current || touchStartX.current === null) return;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = endX - touchStartX.current;
    if (diff > 40) {
      handlePrev();
    } else if (diff < -40) {
      handleNext();
    }
    isDragging.current = false;
    touchStartX.current = null;
  };

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;
  const spreadX = isMobile ? 220 : isTablet ? 300 : 360;

  return (
    <section style={{ padding: '80px 0 70px', backgroundColor: '#fcfaff', position: 'relative', overflow: 'hidden' }}>
      {/* Background Decorative Cyan & Violet Accents */}
      <div
        style={{
          position: 'absolute',
          top: '40px',
          left: '12%',
          width: '120px',
          height: '14px',
          borderRadius: '20px',
          background: 'linear-gradient(90deg, rgba(0, 186, 242, 0.4) 0%, rgba(0, 186, 242, 0) 100%)',
          transform: 'rotate(-16deg)',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '55px',
          right: '18%',
          width: '140px',
          height: '14px',
          borderRadius: '20px',
          background: 'linear-gradient(90deg, rgba(0, 186, 242, 0.3) 0%, rgba(0, 186, 242, 0) 100%)',
          transform: 'rotate(14deg)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ maxWidth: '1240px' }}>
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 46px' }}>
          <h2
            style={{
              fontSize: 'clamp(30px, 4.2vw, 46px)',
              fontWeight: 800,
              color: '#070d1e',
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
              marginBottom: '16px'
            }}
          >
            Payments on PaisaGo are safe, reliable, and quick
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: '#64748b',
              lineHeight: 1.6,
              margin: 0,
              fontWeight: 450
            }}
          >
            One in three Indians uses the PaisaGo app to send money, recharge, pay bills, and more — all in just a few clicks. PaisaGo also offers a wide range of financial services, including Insurance, Investments, and Lending, giving every Indian an equal opportunity to unlock the flow of money and access to services.
          </p>
        </div>

        {/* Carousel Outer Stage */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleTouchStart}
          onMouseUp={handleTouchEnd}
          style={{
            position: 'relative',
            width: '100%',
            height: isMobile ? '430px' : isTablet ? '500px' : '550px',
            marginBottom: '32px',
            overflow: 'hidden',
            userSelect: 'none'
          }}
        >
          {/* Floating Decorative Purple Diamond & Orange Dot */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              left: isMobile ? '8%' : '26%',
              width: '32px',
              height: '32px',
              backgroundColor: '#047857',
              transform: 'rotate(45deg)',
              borderRadius: '6px',
              zIndex: 12,
              boxShadow: '0 8px 20px rgba(109, 40, 217, 0.35)',
              animation: 'bounceSlow 4s ease-in-out infinite',
              pointerEvents: 'none'
            }}
          />

          <div
            style={{
              position: 'absolute',
              top: '70px',
              right: isMobile ? '8%' : '26%',
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              backgroundColor: '#ea580c',
              zIndex: 12,
              boxShadow: '0 8px 20px rgba(234, 88, 12, 0.35)',
              animation: 'bounceSlow 4s ease-in-out infinite',
              animationDelay: '1.5s',
              pointerEvents: 'none'
            }}
          />

          {/* Arched Cards Stage Track */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {stories.map((story, index) => {
              const total = stories.length;
              let diff = (index - activeIndex) % total;
              if (diff > total / 2) diff -= total;
              if (diff < -total / 2) diff += total;

              const isCurrent = diff === 0;

              // Smooth 3-card layout: Center active card + 2 balanced side previews
              let posX = diff * spreadX;
              let scaleVal = isCurrent ? 1 : isMobile ? 0.8 : 0.88;
              let opacityVal = isCurrent ? 1 : Math.abs(diff) === 1 ? 0.78 : 0;
              let zIndexVal = isCurrent ? 10 : 5 - Math.abs(diff);

              if (Math.abs(diff) > 1) {
                posX = (diff > 0 ? 1 : -1) * (spreadX * 1.8);
                opacityVal = 0;
              }

              const cardWidth = isMobile ? '280px' : isTablet ? '330px' : '370px';
              const cardHeight = isMobile ? '400px' : isTablet ? '470px' : '510px';

              return (
                <div
                  key={story.id}
                  onClick={() => {
                    if (isCurrent) {
                      setActiveStoryModal(story);
                      if (onWatchVideo) onWatchVideo(story.title);
                    } else {
                      setActiveIndex(index);
                    }
                  }}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: cardWidth,
                    height: cardHeight,
                    borderRadius: '260px 260px 32px 32px',
                    overflow: 'hidden',
                    transform: `translate(-50%, -50%) translate3d(${posX}px, 0, 0) scale(${scaleVal})`,
                    transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease, box-shadow 0.6s ease',
                    opacity: opacityVal,
                    zIndex: zIndexVal,
                    boxShadow: isCurrent
                      ? '0 25px 60px rgba(5, 150, 105,  0.28)'
                      : '0 15px 35px rgba(0, 0, 0, 0.12)',
                    cursor: 'pointer',
                    border: '4px solid #ffffff',
                    pointerEvents: opacityVal < 0.2 ? 'none' : 'auto'
                  }}
                  onMouseEnter={(e) => {
                    if (isCurrent) {
                      e.currentTarget.style.boxShadow = '0 30px 70px rgba(5, 150, 105,  0.36)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isCurrent) {
                      e.currentTarget.style.boxShadow = '0 25px 60px rgba(5, 150, 105,  0.28)';
                    }
                  }}
                >
                  {/* Photo background */}
                  <img
                    src={story.image}
                    alt={story.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />

                  {/* Gradient Overlay for Text Readability */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, rgba(0,0,0,0) 25%, rgba(18, 7, 35, 0.65) 65%, rgba(18, 7, 35, 0.95) 100%)'
                    }}
                  />

                  {/* Play Button Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '40%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: isMobile ? '54px' : '64px',
                      height: isMobile ? '54px' : '64px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      color: '#059669',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.35)',
                      backdropFilter: 'blur(6px)',
                      transition: 'transform 0.25s ease'
                    }}
                  >
                    <Play size={isMobile ? 24 : 28} fill="#059669" style={{ marginLeft: '4px' }} />
                  </div>

                  {/* Top Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '26px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      color: '#059669',
                      padding: '5px 16px',
                      borderRadius: '16px',
                      fontSize: '11.5px',
                      fontWeight: 800,
                      whiteSpace: 'nowrap',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                  >
                    {story.badge}
                  </div>

                  {/* Bottom Text Content */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: isMobile ? '20px 16px' : '26px 22px',
                      color: '#ffffff',
                      textAlign: 'center'
                    }}
                  >
                    <h4
                      style={{
                        fontSize: isMobile ? '16px' : '18.5px',
                        fontWeight: 800,
                        margin: '0 0 6px',
                        color: '#ffffff',
                        lineHeight: 1.25
                      }}
                    >
                      {story.title}
                    </h4>
                    <p
                      style={{
                        fontSize: isMobile ? '12px' : '13px',
                        color: 'rgba(255,255,255,0.85)',
                        margin: 0,
                        lineHeight: 1.4
                      }}
                    >
                      {story.subtitle}
                    </p>
                    <div
                      style={{
                        display: 'inline-block',
                        marginTop: '10px',
                        fontSize: '11.5px',
                        color: '#ffd13b',
                        fontWeight: 700
                      }}
                    >
                      Watch Film ({story.duration})
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Circular Left / Right Navigation Buttons & Indicator Dots */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
          <button
            onClick={handlePrev}
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '1.5px solid #cbd5e1',
              color: '#334155',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#059669';
              e.currentTarget.style.color = '#059669';
              e.currentTarget.style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#cbd5e1';
              e.currentTarget.style.color = '#334155';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            aria-label="Previous Video Story"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Indicator Dots */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {stories.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                style={{
                  width: activeIndex === i ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: activeIndex === i ? '#059669' : '#cbd5e1',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0
                }}
                aria-label={`Go to story ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '1.5px solid #cbd5e1',
              color: '#334155',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#059669';
              e.currentTarget.style.color = '#059669';
              e.currentTarget.style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#cbd5e1';
              e.currentTarget.style.color = '#334155';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            aria-label="Next Video Story"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* Video Modal Simulation */}
      {activeStoryModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(18, 7, 35, 0.85)',
            backdropFilter: 'blur(10px)',
            zIndex: 2200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setActiveStoryModal(null)}
        >
          <div
            style={{
              backgroundColor: '#1b0a33',
              borderRadius: '28px',
              padding: '32px',
              maxWidth: '560px',
              width: '100%',
              color: '#ffffff',
              position: 'relative',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
              textAlign: 'center'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveStoryModal(null)}
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.15)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={20} />
            </button>

            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: '#059669',
                margin: '0 auto 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ShieldCheck size={32} color="#ffd13b" />
            </div>

            <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
              {activeStoryModal.title}
            </h3>

            <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.8)', marginBottom: '24px' }}>
              {activeStoryModal.subtitle}
            </p>

            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#000000',
                height: '240px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}
            >
              <img
                src={activeStoryModal.image}
                alt={activeStoryModal.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
              />
              <div style={{ position: 'absolute', textAlign: 'center' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: '#ffd13b',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 24px rgba(255,209,59,0.5)',
                    marginBottom: '8px'
                  }}
                >
                  <Play size={26} fill="#070d1e" style={{ marginLeft: '4px' }} />
                </div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff' }}>Official PaisaGo TV Commercial</div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <button
                onClick={() => setActiveStoryModal(null)}
                style={{
                  backgroundColor: '#059669',
                  color: '#ffffff',
                  padding: '12px 28px',
                  borderRadius: '24px',
                  fontWeight: 700,
                  fontSize: '14px'
                }}
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-10px) rotate(45deg); }
        }
      `}</style>
    </section>
  );
}
