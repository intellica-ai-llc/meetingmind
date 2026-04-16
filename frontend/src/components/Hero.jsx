// ─────────────────────────────────────────────────────────────
// MeetingMind — Hero Component
// CSS-animated hero banner with staggered animations
// ─────────────────────────────────────────────────────────────

import { useEffect, useRef } from 'react';

// Intellica AI Logo SVG component
const IntellicaLogo = () => (
  <svg
    className="hero-logo"
    viewBox="0 0 200 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 10h20v24H0V10zm8 8v8h4v-8H8zm0-6h4V6H8v6zm0 14h4v-6H8v6zM25 10h18v4H25v-4zm0 8h14v4H25v-4zm0 8h10v4H25v-4zM48 10h16v4H48v-4zm0 8h12v4H48v-4zm0 8h8v4h-8v-4zM69 10h22v4H69v-4zm0 8h18v4H69v-4zm0 8h14v4H69v-4zM96 10h24v4h-24v-4zm0 8h20v4h-20v-4zm0 8h16v4h-16v-4zM125 10h18v4h-18v-4zm0 8h14v4h-14v-4zm0 8h10v4h-10v-4z"
      fill="#f59e0b"
    />
    <text
      x="0"
      y="38"
      fontSize="11"
      fontWeight="500"
      fill="#f8fafc"
      letterSpacing="4"
    >
      INTELLICA
    </text>
  </svg>
);

// Map Pin SVG icon
const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 6 11 6 11s6-5.75 6-11c0-3.87-3.13-7-7-7z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

const Hero = () => {
  const heroRef = useRef(null);

  // Generate floating particles
  useEffect(() => {
    if (!heroRef.current) return;

    const particleCount = window.innerWidth < 768 ? 8 : 16;
    const container = heroRef.current;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'hero-particle';

      const size = Math.random() * 4 + 2;
      const isGold = Math.random() > 0.7;
      const color = isGold
        ? `rgba(245, 158, 11, ${Math.random() * 0.3 + 0.2})`
        : `rgba(14, 165, 233, ${Math.random() * 0.25 + 0.1})`;

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

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-glow" />
      <div className="hero-content">
        {/* Brand Block */}
        <div className="hero-brand">
          <IntellicaLogo />
          <div className="hero-workshops-label">WORKSHOPS</div>
        </div>

        {/* Main Headline */}
        <div className="hero-headline">
          <h1>AI Agents MeetingMind Bootcamp</h1>
        </div>

        {/* Event Details */}
        <div className="hero-details">
          <p>
            UWI St Augustine <span className="separator">|</span> 8AM - 5PM{' '}
            <span className="separator">|</span> June 5, 2026
          </p>
        </div>

        {/* Venue Pill */}
        <div className="hero-venue">
          <div className="venue-pill">
            <MapPinIcon />
            <span>University of the West Indies, St. Augustine Campus</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="hero-cta">
          <button className="cta-button">Secure Your Spot — June 5</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;