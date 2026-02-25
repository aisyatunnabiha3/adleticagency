import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Pricing.css'

const paidAdsPlans = [
  {
    name: '3-Week Trial',
    price: 'RM 350',
    period: '3 weeks',
    tagline: 'Low commitment, proper testing.',
    features: ['Full campaign setup', 'Retargeting strategy', 'Daily KPI reports', 'Dedicated support'],
    cta: 'Start Trial',
    highlighted: false,
  },
  {
    name: 'Poster Package',
    price: 'RM 550',
    period: 'month',
    tagline: 'Most popular for SMEs.',
    features: ['Full campaign management', 'Ad poster creation', 'Retargeting strategy', 'Daily KPI reports', 'Weekly discussions', 'Dedicated support'],
    cta: 'Get Started',
    highlighted: true,
  },
  {
    name: 'Video Package',
    price: 'RM 1,050',
    period: 'month',
    tagline: 'Best for higher conversions and scaling.',
    features: ['Full campaign management', 'Ad video & poster creation', 'Video editing & optimisation', 'Retargeting strategy', 'Daily KPI reports', 'Weekly discussions', 'Priority support'],
    cta: 'Schedule Consultation',
    highlighted: false,
  },
]

const aiPlans = [
  {
    name: 'Pay-as-you-go',
    price: 'RM 0.10',
    period: 'per AI response',
    tagline: 'Perfect for getting started with no commitment.',
    features: ['Pay per AI Response', 'AI Follow-Up System', 'AI Booking System', 'AI Tagging System', 'AI Assign System', 'Mobile App Access', 'Desktop App Access'],
    cta: 'Register Free',
    highlighted: false,
  },
  {
    name: 'Premium Support Plan',
    price: 'RM 950',
    period: 'month',
    tagline: 'We handle your AI setup and maintenance.',
    features: ['5,000 AI Responses Monthly', 'AI Setup & Maintenance', 'AI Follow-Up System', 'AI Booking System', 'AI Tagging System', 'AI Assign System', 'Mobile & Desktop Access'],
    cta: 'Get Started',
    highlighted: true,
  },
  {
    name: 'Enterprise Plan',
    price: 'Custom',
    period: '',
    tagline: 'Complete solution with custom automations.',
    features: ['20,000 AI Responses Monthly', 'AI Setup & Maintenance', 'Custom Automations', 'AI Follow-Up System', 'AI Booking System', 'AI Tagging & Assign', 'Mobile & Desktop Access', 'Dedicated Account Manager'],
    cta: 'Get a Quote',
    highlighted: false,
  },
]

const communityIncludes = [
  'Private community chat & forums',
  'Direct access to AI video experts & leaders',
  'Step-by-step video creation walkthroughs',
  'Prompt library — tested & ready to use',
  'Weekly live sessions & Q&A',
  'Tutorials for next-gen AI video creation tools',
  'Network with creators & marketers across Malaysia',
  'Early access to new AI video tools & techniques',
]

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('paid-ads')
  const navigate = useNavigate()

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  const plans = activeTab === 'paid-ads' ? paidAdsPlans : aiPlans

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Pricing</span>
          <h2>Simple, Transparent Pricing</h2>
          <p>Select a solution, then choose the package that fits your business best.</p>
        </div>

        {/* Solution tabs */}
        <div className="pricing-tabs">
          <button
            className={`pricing-tab ${activeTab === 'paid-ads' ? 'active' : ''}`}
            onClick={() => setActiveTab('paid-ads')}
          >
            <span className="tab-icon">📈</span>
            Paid Ads
          </button>
          <button
            className={`pricing-tab ${activeTab === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveTab('ai')}
          >
            <span className="tab-icon">🤖</span>
            AI Solutions
          </button>
          <button
            className={`pricing-tab ${activeTab === 'video' ? 'active' : ''}`}
            onClick={() => setActiveTab('video')}
          >
            <span className="tab-icon">🎬</span>
            AI Video Community
          </button>
        </div>

        {/* Paid Ads & AI plans */}
        {activeTab !== 'video' && (
          <>
            <div className="plans-grid">
              {plans.map((plan, i) => (
                <div key={i} className={`plan-card ${plan.highlighted ? 'plan-featured' : ''}`}>
                  {plan.highlighted && <div className="plan-badge">Most Popular</div>}
                  <div className="plan-header">
                    <h3>{plan.name}</h3>
                    <div className="plan-price">
                      <span className="price-amount">{plan.price}</span>
                      {plan.period && <span className="price-period">/{plan.period}</span>}
                    </div>
                    <p className="plan-tagline">{plan.tagline}</p>
                  </div>
                  <button
                    className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-outline'} plan-cta`}
                    onClick={scrollToContact}
                  >
                    {plan.cta}
                  </button>
                  <ul className="plan-features">
                    {plan.features.map((f, j) => (
                      <li key={j}>
                        <span className="check">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {activeTab === 'ai' && (
              <div className="ai-addons">
                <div className="addon-card">
                  <strong>AI Response Top-up</strong>
                  <span>RM 10 per 100 responses — top up anytime on any plan</span>
                  <button className="btn btn-outline addon-btn" onClick={scrollToContact}>Get Top-up</button>
                </div>
              </div>
            )}

            <div className="pricing-note">
              <p>All Paid Ads packages include full campaign management, retargeting, reports &amp; dedicated support.</p>
              <button className="btn btn-dark" onClick={scrollToContact}>Talk to Us About Your Needs</button>
            </div>
          </>
        )}

        {/* AI Video Community tab */}
        {activeTab === 'video' && (
          <div className="community-pricing-block">
            <div className="cpb-left">
              <div className="cpb-platforms">
                <span className="platform-chip higgsfield">Next-Gen AI Video</span>
                <span className="platform-chip veo">3-Step Framework</span>
                <span className="platform-chip sora">Community-First</span>
              </div>
              <h3>Join the AI Video Creation Community</h3>
              <p>
                Get exclusive access to training, expert guidance, and a community of creators
                learning to produce cinematic 15-second clips using AI video tools that most
                marketers haven't even discovered yet.
              </p>

              <div className="cpb-framework">
                <div className="cpb-framework-label">Our 3-Step Framework</div>
                <div className="cpb-steps">
                  <div className="cpb-step">
                    <span className="cpb-step-num">01</span>
                    <span><strong>Craft</strong> — Input your concept or brand brief</span>
                  </div>
                  <div className="cpb-step">
                    <span className="cpb-step-num">02</span>
                    <span><strong>Generate</strong> — AI creates your polished 15-second clip</span>
                  </div>
                  <div className="cpb-step">
                    <span className="cpb-step-num">03</span>
                    <span><strong>Publish</strong> — Post content that stands out from the crowd</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="cpb-right">
              <div className="cpb-card">
                <div className="cpb-card-header">
                  <div className="cpb-early-badge">🔥 Early Bird — 50 Spots</div>
                  <h4>Community Membership</h4>
                  <div className="cpb-price-row">
                    <span className="cpb-price-early">RM18<span>/mo</span></span>
                    <span className="cpb-price-original">RM50/mo</span>
                  </div>
                </div>

                <ul className="cpb-includes">
                  {communityIncludes.map((item, i) => (
                    <li key={i}>
                      <span className="check">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <button className="btn btn-primary cpb-waitlist-btn" onClick={() => navigate('/ai-video-creation-community-waitlist')}>
                  🚀 Join the Waitlist
                </button>
                <p className="cpb-note">Lock in RM18/mo forever — limited to first 50 members.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
