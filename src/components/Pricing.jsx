import './Pricing.css'

const plans = [
  {
    name: 'Starter',
    tier: 'For testing the waters',
    price: 'RM 850',
    period: 'month',
    tagline: 'Get real ads running with proper testing.',
    features: [
      '2 videos + 1 poster every month',
      'A/B split testing to find what sells',
      'Facebook ads setup + full management',
      'Retargeting strategy',
      'Daily KPI reports',
      'Weekly check-in calls',
      'Dedicated support',
    ],
    cta: 'Get Started',
    highlighted: false,
    premium: false,
  },
  {
    name: 'Growth',
    tier: 'Most chosen by SMEs',
    price: 'RM 1,199',
    period: 'month',
    setupFee: 'RM 4,999 first month',
    setupFeeNote: 'then RM 1,199/month',
    tagline: 'Sell more, reply to every lead instantly.',
    features: [
      '4 videos + 2 posters every month',
      'Everything in Starter',
      'Unlimited AI auto-replies for customer messages',
      'A/B split testing',
      'Facebook ads setup + full management',
      'Priority support',
    ],
    cta: 'Get Started',
    highlighted: true,
    premium: false,
  },
  {
    name: 'AI Specialist',
    tier: 'Become an AI-first company',
    price: 'RM 5,599',
    period: 'month',
    setupFee: 'RM 12,599 first month',
    setupFeeNote: 'then RM 5,599/month',
    tagline: 'Automate a new department every month.',
    features: [
      '40 videos + 20 posters every month',
      'Everything in Growth',
      '1 department automated with AI every month',
      'Weekly AI training for your staff (online or in-person)',
      'Build your team into AI specialists',
      'Dedicated account manager',
    ],
    cta: 'Schedule Consultation',
    highlighted: false,
    premium: true,
  },
]

export default function Pricing() {
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Pricing</span>
          <h2>Simple, Transparent Pricing</h2>
          <p>Pick the package that matches where your business is today. Upgrade anytime.</p>
        </div>

        <div className="plans-grid">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={[
                'plan-card',
                plan.highlighted ? 'plan-featured' : '',
                plan.premium ? 'plan-premium' : '',
              ].join(' ').trim()}
            >
              {plan.highlighted && <div className="plan-badge">Most Popular</div>}
              {plan.premium && <div className="plan-badge plan-badge-premium">Premium</div>}

              <div className="plan-header">
                <span className="plan-tier-label">{plan.tier}</span>
                <h3>{plan.name}</h3>
                <div className="plan-price">
                  <span className="price-amount">{plan.price}</span>
                  {plan.period && <span className="price-period">/{plan.period}</span>}
                </div>
                {plan.setupFee && (
                  <div className="plan-setup-fee">
                    <span className="plan-setup-fee-amount">{plan.setupFee}</span>
                    <span className="plan-setup-fee-note">{plan.setupFeeNote}</span>
                  </div>
                )}
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

        <div className="pricing-note">
          <p>All packages include full campaign management, retargeting, daily reports &amp; dedicated support. Not sure which one? We&apos;ll help you pick.</p>
          <button className="btn btn-dark" onClick={scrollToContact}>Talk to Us About Your Needs</button>
        </div>
      </div>
    </section>
  )
}
