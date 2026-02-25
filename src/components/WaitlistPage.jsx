import { useState } from 'react'
import Navigation from './Navigation'
import './WaitlistPage.css'

const includedItems = [
  { emoji: '💡', label: 'AI Campaign Lab', value: 'RM 849' },
  { emoji: '🎬', label: 'AI Video Creation Course', value: 'RM 1,069' },
  { emoji: '🧠', label: 'AI Hyper-Realistic Avatar Course', value: 'RM 849' },
  { emoji: '🎥', label: 'Creative Breakdown: From Idea to Viral Ad', value: 'RM 425' },
  { emoji: '📈', label: "The AI Content Creator's Launch & Earn Framework", value: 'RM 639' },
  { emoji: '📅', label: '7-Day Instagram Launch Plan', value: 'RM 209' },
  { emoji: '🔥', label: '100 Prompts Pack', value: 'RM 125' },
  { emoji: '🎁', label: 'Challenges & Giveaways', value: null },
  { emoji: '🌎', label: 'Supportive community', value: null },
]

const customTools = [
  { emoji: '⚙️', label: 'AI Photo/Video Prompt Generator', desc: 'create prompts for photos & videos' },
]

const WHATSAPP_NUMBER = '601121677672'

export default function WaitlistPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', instagram: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const message = [
      `🎬 *AI Video Creation Community - Early Bird Waitlist*`,
      ``,
      `Hi! I'd like to join the waitlist for the AI Video Creation Community.`,
      ``,
      `*Name:* ${form.name}`,
      `*Email:* ${form.email}`,
      `*Phone:* ${form.phone}`,
      form.instagram ? `*Instagram:* @${form.instagram.replace('@', '')}` : '',
      ``,
      `I'm interested in the Early Bird plan at RM18/month.`,
    ].filter(Boolean).join('\n')

    const encoded = encodeURIComponent(message)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank')
  }

  const totalValue = 849 + 1069 + 849 + 425 + 639 + 209 + 125

  return (
    <div className="waitlist-page">
      <Navigation />

      {/* Hero */}
      <section className="waitlist-hero">
        <div className="container">
          <div className="waitlist-hero-content">
            <span className="waitlist-badge">🚀 Early Access — Limited to 50 Members</span>
            <h1>Create your first viral AI video in <span className="text-accent">1 day</span>, even if you've never made one before.</h1>
            <p className="waitlist-subtitle">
              Join creators, freelancers, and studio founders learning how to build, automate, and scale their content with AI.
            </p>
            <div className="waitlist-earn-badge">
              💵 Community members earn <strong>RM 2,000–RM 65,000</strong> per project!
            </div>
          </div>
        </div>
      </section>

      {/* Content grid */}
      <section className="waitlist-content">
        <div className="container">
          <div className="waitlist-grid">
            {/* Left — What's included */}
            <div className="waitlist-includes">
              <div className="waitlist-card">
                <h2>🚀 Included in Your Membership</h2>
                <p className="waitlist-daily-cost">Less than RM 0.60/day to master the future of AI video creation</p>

                <ul className="waitlist-items">
                  {includedItems.map((item, i) => (
                    <li key={i}>
                      <span className="waitlist-item-emoji">{item.emoji}</span>
                      <span className="waitlist-item-label">{item.label}</span>
                      {item.value && <span className="waitlist-item-value">{item.value}</span>}
                    </li>
                  ))}
                </ul>

                <div className="waitlist-tools">
                  <h3>Custom AI Tools</h3>
                  {customTools.map((tool, i) => (
                    <div key={i} className="waitlist-tool">
                      <span className="waitlist-tool-emoji">{tool.emoji}</span>
                      <div>
                        <strong>{tool.label}</strong>
                        <span className="waitlist-tool-desc"> — {tool.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="waitlist-total">
                  <span>Total Value</span>
                  <span className="waitlist-total-amount">RM {totalValue.toLocaleString()}+</span>
                </div>
              </div>
            </div>

            {/* Right — Pricing + Form */}
            <div className="waitlist-right">
              {/* Pricing cards */}
              <div className="waitlist-pricing-cards">
                <div className="waitlist-price-card early-bird">
                  <div className="price-card-badge">🔥 Early Bird</div>
                  <div className="price-card-price">
                    <span className="price-dollar">RM</span>
                    <span className="price-number">18</span>
                    <span className="price-period">/month</span>
                  </div>
                  <p className="price-card-note">For the first 50 members only</p>
                  <p className="price-card-lock">Lock it in now — keep your rate forever.</p>
                </div>

                <div className="waitlist-price-card original">
                  <div className="price-card-label">Original Price</div>
                  <div className="price-card-price">
                    <span className="price-dollar">RM</span>
                    <span className="price-number">50</span>
                    <span className="price-period">/month</span>
                  </div>
                  <p className="price-card-note">Regular membership price</p>
                </div>
              </div>

              {/* Warning */}
              <div className="waitlist-warning">
                ⚠️ Early price for first 50 members. Lock it in now — keep your rate forever.
              </div>

              {/* Form */}
              <div className="waitlist-form-card">
                <h3>Join the Waitlist</h3>
                <p>Fill in your details and we'll reach out via WhatsApp.</p>

                <form onSubmit={handleSubmit} className="waitlist-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">WhatsApp Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+60 12-345 6789"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="instagram">Instagram Handle (optional)</label>
                    <input
                      type="text"
                      id="instagram"
                      name="instagram"
                      value={form.instagram}
                      onChange={handleChange}
                      placeholder="@yourhandle"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-large waitlist-submit">
                    🚀 Join Waitlist — Lock in RM18/month
                  </button>

                  <p className="waitlist-form-note">
                    You'll be redirected to WhatsApp to confirm your spot.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="waitlist-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Adletic Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
