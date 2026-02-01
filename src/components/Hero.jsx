import './Hero.css'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hit Lower<br />
            Cost per Inquiry<br />
          </h1>
          <p className="hero-subtitle">
            Most businesses run Meta Ads and hope for the best. <br />
            We do that too lah — just with structure and consistency.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={scrollToContact}>
              LET'S TALK
            </button>
            <button className="btn btn-secondary">
              VIEW PRICING ↓
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Successful Campaigns</span>
            </div>
            <div className="stat">
              <span className="stat-number">12x</span>
              <span className="stat-label">Average ROAS</span>
            </div>
            <div className="stat">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Retention</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
