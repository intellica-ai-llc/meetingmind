// ─────────────────────────────────────────────────────────────
// MeetingMind — Workshop Cards Component
// Replaces banner images with clean card components
// ─────────────────────────────────────────────────────────────

// Presentation/Slide Deck SVG Icon
const SlidesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M8 12 L11 15 L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M12 18 L12 22 M8 22 L16 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Document/List SVG Icon
const DocumentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4H20V20H4V4Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M8 8H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 16H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const WorkshopCards = () => {
  return (
    <div style={{ margin: '40px 0' }}>
      {/* Section Heading */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: 'var(--color-accent-gold)',
          }}
        >
          RESOURCES
        </span>
        <h2
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontWeight: '700',
            marginTop: '12px',
            color: 'var(--color-text-primary)',
          }}
        >
          What You'll Build and Take Away
        </h2>
      </div>

      {/* Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        {/* Card 1: Slide Deck */}
        <div className="workshop-card">
          <div className="workshop-card-icon">
            <SlidesIcon />
          </div>
          <h3 className="workshop-card-title">Workshop Slide Deck</h3>
          <p className="workshop-card-desc">
            The complete presentation from the AI Agents MeetingMind Bootcamp.
            All slides, diagrams, and architecture walkthroughs.
          </p>
          <button
            className="workshop-card-btn"
            onClick={() => window.open('/AI_Agents_Bootcamp_Curriculum.pdf', '_blank')}
          >
            View Slides →
          </button>
        </div>

        {/* Card 2: Curriculum */}
        <div className="workshop-card">
          <div className="workshop-card-icon">
            <DocumentIcon />
          </div>
          <h3 className="workshop-card-title">Bootcamp Curriculum</h3>
          <p className="workshop-card-desc">
            Full learning path and module breakdown for the day. What you will
            build, what you will leave knowing, and what tools you will use.
          </p>
          <button
            className="workshop-card-btn"
            onClick={() => window.open('/AI_Agents_Bootcamp_Curriculum.pdf', '_blank')}
          >
            View Curriculum →
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCards;