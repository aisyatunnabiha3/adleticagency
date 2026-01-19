import { motion } from 'framer-motion'
import './Benefits.css'

export default function Benefits() {
  const benefits = [
    {
      icon: '🎯',
      title: 'Clear Strategy',
      description: 'We understand your business first. Then we build campaigns that actually align with your goals.'
    },
    {
      icon: '⚙️',
      title: 'Continuous Optimization',
      description: 'We test, measure, and refine. Results improve over time because we constantly find what works better.'
    },
    {
      icon: '🎨',
      title: 'Creative That Converts',
      description: 'Great ad copy and design matter. We create content that speaks to your audience, not at them.'
    },
    {
      icon: '📊',
      title: 'You Understand Everything',
      description: 'No mystery box. We explain what we\'re doing, why, and what the numbers actually mean for your business.'
    },
    {
      icon: '🚀',
      title: 'Built to Scale',
      description: 'Whether you spend $500 or $5,000 a month, our approach grows with your business.'
    },
    {
      icon: '💬',
      title: 'You Have a Partner',
      description: 'Questions at 3pm? Insights you need to share? We\'re here to listen and support you.'
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
          <h2>How We Work</h2>
          <p>Simple, straightforward, and focused on your success.</p>
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
