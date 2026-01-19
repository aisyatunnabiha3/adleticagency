import { motion } from 'framer-motion'
import './Services.css'

export default function Services() {
  const services = [
    {
      id: 1,
      icon: '💰',
      title: 'Cost Per Lead Below RM6.90',
      description: 'We optimize every campaign for maximum lead generation efficiency.'
    },
    {
      id: 2,
      icon: '🎨',
      title: 'Ad Video & Poster Creation',
      description: 'High-converting ad creatives designed to capture attention and drive engagement on Meta platforms.'
    },
    {
      id: 3,
      icon: '📊',
      title: 'Daily KPI Report',
      description: 'Track your campaign performance with daily key performance indicator reports. Stay updated on every metric that matters.'
    },
    {
      id: 4,
      icon: '💬',
      title: 'Weekly Discussion',
      description: 'Regular strategy sessions to review results, optimize campaigns, and plan next steps for growth.'
    },
    {
      id: 5,
      icon: '⚡',
      title: 'Zero-Cost Ad Setup',
      description: 'Complete campaign setup with Meta Ads Manager configuration, targeting, and optimization at no extra cost.'
    },
    {
      id: 6,
      icon: '🎁',
      title: 'First 5 Sign-Ups: 3 Months FREE',
      description: 'Limited-time offer! First 5 sign-ups get 3 months of service completely free. Serious inquiries only.'
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
    <section className="services" id="services">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>What You Get With Adletic</h2>
          <p>Complete lead generation solution with guaranteed low cost per lead</p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              className={`service-card ${service.id === 1 ? 'featured' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {service.id === 1 && <div className="featured-badge">OBJECTIVE</div>}
              {service.id === 6 && <div className="promo-badge">LIMITED TIME</div>}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
