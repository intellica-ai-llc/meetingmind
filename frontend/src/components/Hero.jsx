// ─────────────────────────────────────────────────────────────
// MeetingMind — Hero Component v2.5
// CSS-animated hero banner with pipeline visualization
// ─────────────────────────────────────────────────────────────

import { useEffect, useRef } from 'react';

// Intellica AI Logo SVG component (simplified)
const IntellicaLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="24" height="24" rx="4" stroke="#f59e0b" strokeWidth="1.5" fill="none" />
    <path d="M10 12h12M10 16h8M10 20h6" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="22" cy="20" r="1.5" fill="#f59e0b" />
  </svg>
);

// WhatsApp Icon SVG
const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.9.56 3.67 1.52 5.2L2 22l4.8-1.52A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <path d="M16.5 14.5c-.3.3-1.2.6-1.7.6-.5 0-1.2-.2-2.5-.7-1.3-.5-2.3-1.3-3-2-.7-.7-1.2-1.5-1.5-2.3-.3-.8-.2-1.2 0-1.5.2-.3.4-.5.6-.8.2-.2.3-.5.2-.8 0-.3-.5-1.5-.8-2-.3-.5-.6-.4-.8-.4h-.7c-.3 0-.7.2-1 .6-.4.5-.5 1.2-.3 1.8.3.9 1 1.8 1.8 2.6.8.8 1.8 1.4 2.8 1.8.8.3 1.4.4 1.8.2.4-.2.8-.7 1-1.1.2-.4.2-.8-.1-1.1-.2-.2-.5-.4-.7-.6-.2-.2-.3-.5-.2-.8.1-.3.4-.6.7-.8.6-.4 1.3-.7 2-.7 1 0 1.5.5 1.8 1 .3.5.5 1 .6 1.3.1.3 0 .6-.2.8z" stroke="currentColor" strokeWidth="1.2" fill="none" />
  </svg>
);

const Hero = () => {
  const heroRef = useRef(null);

  // Generate floating particles (reduced count for performance)
  useEffect(() => {
    if (!heroRef.current) return;

    const particleCount = window.innerWidth < 768 ? 6 : 12;
    const container = heroRef.current;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'hero-particle';

      const size = Math.random() * 4 + 2;
      const isGold = Math.random() > 0.6;
      const color = isGold
        ? `rgba(245, 158, 11, ${Math.random() * 0.4 + 0.2})`
        : `rgba(14, 165, 233, ${Math.random() * 0.3 + 0.1})`;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = color;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 5 + 4}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;

      container.appendChild(particle);
    }

    return () => {
      const particles = container.querySelectorAll('.hero-particle');
      particles.forEach(p => p.remove());
    };
  }, []);

  const scrollToAppDemo = () => {
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
    <section className="hero" ref={heroRef}>
      <div className="hero-glow" />
      
      {/* Animated Pipeline Nodes (Background Layer) */}
      <div className="hero-pipeline">
        <div className="pipeline-node node-1">
          <span className="node-label">Agent 1</span>
          <span className="node-name">AssemblyAI</span>
        </div>
        <div className="pipeline-connector connector-1"></div>
        <div className="pipeline-node node-2">
          <span className="node-label">Agent 2</span>
          <span className="node-name">Groq Llama 3.3</span>
        </div>
        <div className="pipeline-connector connector-2"></div>
        <div className="pipeline-node node-3">
          <span className="node-label">Agent 3</span>
          <span className="node-name">Groq Llama 3.3</span>
        </div>
      </div>

      <div className="hero-content">
        {/* Brand Block */}
        <div className="hero-brand">
          <div className="hero-logo-wrapper">
            <IntellicaLogo />
            <span className="hero-logo-text">Intellica AI</span>
          </div>
        </div>

        {/* Eyebrow */}
        <div className="hero-eyebrow">AI ENGINEERING BOOTCAMP</div>

        {/* Main Headline */}
        <div className="hero-headline">
          <h1>Build a Three-Agent AI That Turns <span className="hero-accent">Meetings Into Intelligence</span></h1>
        </div>

        {/* Subheadline */}
        <p className="hero-subheadline">
          One day. One live app. AssemblyAI + Groq → deployed and running before you leave the room.
        </p>

        {/* Location Badge */}
        <div className="hero-venue">
          <div className="venue-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 6 11 6 11s6-5.75 6-11c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
            <span>University of the West Indies, St. Augustine Campus</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="hero-buttons">
          <button className="cta-button" onClick={handleRegister}>
            Register — June 5 · UWI St Augustine
          </button>
          <button className="cta-button-secondary" onClick={scrollToAppDemo}>
            Try MeetingMind →
          </button>
        </div>

        {/* Credibility Line */}
        <div className="hero-credibility">
          <span>✓ 100 free transcription hours</span>
          <span>✓ No credit card required</span>
          <span>✓ Deployed to Render + Netlify</span>
        </div>

        {/* WhatsApp Contact */}
        <div className="hero-whatsapp">
          <button className="whatsapp-button" onClick={handleWhatsApp}>
            <WhatsAppIcon />
            <span>Questions? Chat with us on WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;