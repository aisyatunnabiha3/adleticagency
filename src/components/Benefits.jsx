import { motion } from 'framer-motion'
import './Benefits.css'

export default function Benefits() {
  const benefits = [
    {
      icon: '📊',
      title: 'Proven Results',
      description: 'Businesses see an average 12x ROAS increase within 90 days'
    },
    {
      icon: '⚡',
      title: 'Fast Implementation',
      description: 'Campaigns running and generating leads within 7 days'
    },
    {
      icon: '🎯',
      title: 'Expert Team',
      description: 'Certified Meta Ads specialists with 5+ years experience'
    },
    {
      icon: '💰',
      title: 'Budget Efficient',
      description: 'Maximize ROI with intelligent bidding and audience targeting'
    },
    {
      icon: '📱',
      title: 'Full Service',
      description: 'Creative design, copywriting, setup, and optimization included'
    },
    {
      icon: '🤝',
      title: 'Dedicated Support',
      description: 'WhatsApp support and regular strategy reviews'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section className="benefits" id="benefits">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Why Choose Adletic?</h2>
          <p>We don't just run ads. We build profitable campaigns that grow your business.</p>
        </motion.div>

        <motion.div 
          className="benefits-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              className="benefit-card"
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
