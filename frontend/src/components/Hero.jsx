// frontend/src/components/Hero.jsx
// Performance-optimized version

import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const heroRef = useRef(null);
  const particleContainerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  // Detect when hero is visible to throttle animations
  useEffect(() => {
    if (!heroRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  // Generate particles - REDUCED COUNT
  useEffect(() => {
    if (!particleContainerRef.current || !isVisible) return;
    
    const container = particleContainerRef.current;
    // Reduced from 2500 to 500 on desktop, 800 to 150 on mobile
    const particleCount = window.innerWidth < 768 ? 120 : 450;
    
    // Clear existing particles first
    container.innerHTML = '';
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'hero-particle';
      
      // Size distribution: 70% small, 25% medium, 5% large (fewer large particles)
      const sizeRand = Math.random();
      let size, sizeClass;
      if (sizeRand < 0.7) {
        size = Math.random() * 1.5 + 0.5;
        sizeClass = 'small';
      } else if (sizeRand < 0.95) {
        size = Math.random() * 2 + 2;
        sizeClass = 'medium';
      } else {
        size = Math.random() * 2.5 + 4;
        sizeClass = 'large';
      }
      
      // 80% cyan, 20% gold (reduced gold for less visual noise)
      const isCyan = Math.random() > 0.2;
      const color = isCyan ? '#0ea5e9' : '#f59e0b';
      
      // Only 10% of particles get drift animation (reduced)
      const hasDrift = Math.random() > 0.9;
      const animationName = hasDrift ? 'floatDrift' : 'floatParticle';
      const duration = Math.random() * 6 + 4; // shorter durations = faster cleanup
      const delay = Math.random() * 5;
      
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        opacity: ${Math.random() * 0.2 + 0.05};
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        will-change: transform, opacity;
        animation: ${animationName} ${duration}s ease-in-out infinite;
        animation-delay: ${delay}s;
        pointer-events: none;
      `;
      particle.classList.add(sizeClass);
      
      if (sizeClass === 'large') {
        particle.style.boxShadow = `0 0 6px ${color}`;
      }
      
      container.appendChild(particle);
    }
    
    return () => {
      if (container) container.innerHTML = '';
    };
  }, [isVisible]);

  const scrollToApp = () => {
    const appDemo = document.getElementById('app-demo');
    if (appDemo) {
      appDemo.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRegister = () => {
    window.location.href = 'mailto:intellica.ai@gmail.com?subject=MeetingMind%20Workshop%20Registration';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/18687195236', '_blank');
  };

  return (
    <section className="hero-terminal" ref={heroRef}>
      <div className="hero-grid-drift" />
      <div className="hero-scan-line" />
      
      <div className="hero-corner top-left" />
      <div className="hero-corner top-right" />
      <div className="hero-corner bottom-left" />
      <div className="hero-corner bottom-right" />
      
      <div className="hero-terminal-header">
        <div className="terminal-window-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <span className="terminal-title">MEETINGMIND v2.5</span>
        <div className="terminal-status">
          <span className="status-dot online-pulse" />
          <span>ONLINE</span>
        </div>
      </div>
      
      <div className="terminal-inner-glow" />
      
      <div className="hero-particles" ref={particleContainerRef} />
      
      <div className="hero-content">
        <div className="hero-brand-name">Intellica AI</div>
        
        <div className="hero-label">
          <span>AI ENGINEERING BOOTCAMP</span>
        </div>
        
        <div className="hero-headline">
          <div className="headline-line-one">Build a Three-Agent AI That</div>
          <div className="headline-line-two">Turns Meetings Into Intelligence</div>
        </div>
        
        <p className="hero-subheadline">
          One day. One live app. AssemblyAI + Groq{' '}
          <span className="subheading-arrow">→</span>{' '}
          deployed and running before you leave the room.
        </p>
        
        <div className="hero-location">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.5">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 6 11 6 11s6-5.75 6-11c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          <span>University of the West Indies, St. Augustine Campus</span>
        </div>
        
        <button className="whatsapp-btn" onClick={handleWhatsApp}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.9.56 3.67 1.52 5.2L2 22l4.8-1.52A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
            <path d="M16.5 14.5c-.3.3-1.2.6-1.7.6-.5 0-1.2-.2-2.5-.7-1.3-.5-2.3-1.3-3-2-.7-.7-1.2-1.5-1.5-2.3-.3-.8-.2-1.2 0-1.5.2-.3.4-.5.6-.8.2-.2.3-.5.2-.8 0-.3-.5-1.5-.8-2-.3-.5-.6-.4-.8-.4h-.7c-.3 0-.7.2-1 .6-.4.5-.5 1.2-.3 1.8.3.9 1 1.8 1.8 2.6.8.8 1.8 1.4 2.8 1.8.8.3 1.4.4 1.8.2.4-.2.8-.7 1-1.1.2-.4.2-.8-.1-1.1-.2-.2-.5-.4-.7-.6-.2-.2-.3-.5-.2-.8.1-.3.4-.6.7-.8.6-.4 1.3-.7 2-.7 1 0 1.5.5 1.8 1 .3.5.5 1 .6 1.3.1.3 0 .6-.2.8z" />
          </svg>
          <span>Questions? Chat on WhatsApp</span>
        </button>
        
        <div className="hero-buttons">
          <button className="btn-primary pulse-ring" onClick={handleRegister}>
            Register — June 5 · UWI St Augustine
          </button>
          <button className="btn-secondary" onClick={scrollToApp}>
            Try MeetingMind <span className="arrow">→</span>
          </button>
        </div>
        
        <div className="hero-credits">
          <span><span className="trust-check">✓</span> 100 free transcription hours</span>
          <span><span className="trust-check">✓</span> No credit card required</span>
          <span><span className="trust-check">✓</span> Beginner-friendly — no prior AI experience needed</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;