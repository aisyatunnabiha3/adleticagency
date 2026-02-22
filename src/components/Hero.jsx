import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      {/* 4K video background — place your video at /public/videos/hero-bg.mp4 */}
      <div className="hero-video-wrap">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/Background.png"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />{' '}
            AI Solutions &amp; Paid Ads Agency &mdash; Malaysia
          </div>

          <h1 className="hero-title">
            Grow Your Business With{' '}
            <span className="hero-title-accent">AI, Paid Ads &amp; Video</span>
          </h1>

          <p className="hero-subtitle">
            We combine AI automation, high-performance paid advertising, and next-gen AI video creation
            to help Malaysian businesses acquire more customers, reduce costs, and scale with confidence.
          </p>

          <div className="hero-cta">
            <button className="btn btn-primary btn-large" onClick={() => scrollTo('pricing')}>
              View Our Solutions
            </button>
            <button className="btn btn-secondary btn-large" onClick={() => scrollTo('contact')}>
              Book a Free Consultation
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-value">50+</span>
              <span className="stat-desc">Campaigns Managed</span>
            </div>
            <div className="stat-divider" />
            <div className="hero-stat">
              <span className="stat-value">12x</span>
              <span className="stat-desc">Average ROAS</span>
            </div>
            <div className="stat-divider" />
            <div className="hero-stat">
              <span className="stat-value">RM6.90</span>
              <span className="stat-desc">Avg. Cost Per Lead</span>
            </div>
            <div className="stat-divider" />
            <div className="hero-stat">
              <span className="stat-value">98%</span>
              <span className="stat-desc">Client Retention</span>
            </div>
          </div>
        </div>

        <div className="hero-solution-cards">
          <button className="solution-preview-card" onClick={() => scrollTo('pricing')}>
            <div className="spc-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="spc-body">
              <h4>Paid Ads Solutions</h4>
              <p>Meta &amp; Google Ads campaigns built for measurable ROI</p>
            </div>
            <span className="spc-arrow">→</span>
          </button>
          <button className="solution-preview-card" onClick={() => scrollTo('pricing')}>
            <div className="spc-icon spc-icon-ai">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
              </svg>
            </div>
            <div className="spc-body">
              <h4>AI Solutions</h4>
              <p>WhatsApp AI agents that automate conversations &amp; bookings</p>
            </div>
            <span className="spc-arrow">→</span>
          </button>
          <button className="solution-preview-card" onClick={() => scrollTo('solutions')}>
            <div className="spc-icon spc-icon-video">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
              </svg>
            </div>
            <div className="spc-body">
              <h4>AI Video Community</h4>
              <p>15-sec cinematic clips using next-gen AI video tools</p>
            </div>
            <span className="spc-arrow coming">Soon</span>
          </button>
        </div>
      </div>

      <button className="hero-scroll-hint" onClick={() => scrollTo('solutions')}>
        <div className="scroll-wheel" />
        <span>Scroll to explore</span>
      </button>
    </section>
  )
}
