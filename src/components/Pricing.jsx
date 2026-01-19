import { motion } from 'framer-motion'
import './Pricing.css'

export default function Pricing() {
  const pricingPlans = [
    {
      id: 1,
      name: '3 Weeks Trial',
      price: 'RM 350',
      period: '/month',
      description: 'Perfect for testing Meta Ads with minimal commitment',
      features: [
        '1x Ad Poster',
        '1x Ad Copywriting',
        'Re-targeting Audiences',
        'Dedicated Support Team'

      ],
      cta: 'Start Trial',
      highlighted: false
    },
    {
      id: 2,
      name: 'Poster Package',
      price: 'RM 550',
      period: '/month',
      description: 'Great for Most Businesses',
      features: [
        '2x Ad Posters (2 Revisions Each)',
        '2x Ad Copywriting',
        'Re-targeting Audiences',
        'ROAS Reports',
        'Dedicated Support Team',
      ],
      cta: 'Get Started',
      highlighted: true
    },
    {
      id: 3,
      name: 'Video Package',
      price: 'RM 1,050',
      period: '/month',
      description: 'Ideal for Businesses Looking for Higher Conversions',
      features: [
        '2x Ad Posters (2 Revisions Each)',
        '2x Ad Videos (Talents Included)',
        '4x Ad Copywriting',
        'Re-targeting Audiences',
        'ROAS Reports',
        'Dedicated Support Team',
      ],
      cta: 'Schedule Consultation',
      highlighted: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Our Packages</h2>
          <p>Choose what works for your business. All packages include full campaign management and support.</p>
        </motion.div>

        <motion.div 
          className="pricing-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan) => (
            <motion.div 
              key={plan.id}
              className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              {plan.highlighted && <div className="badge-featured">Most Popular</div>}
              
              <h3>{plan.name}</h3>
              <p className="price">
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </p>
              <p className="description">{plan.description}</p>

              <motion.button 
                className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-outline-orange'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {plan.cta}
              </motion.button>

              <div className="features">
                <h4>Includes:</h4>
                <ul>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="checkmark">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="pricing-footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>Questions about which package is right for you? We can help you figure it out. Reach out and let's chat.</p>
        </motion.div>
      </div>
    </section>
  )
}
