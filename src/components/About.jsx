import { motion } from 'framer-motion'
import './About.css'

export default function About() {
  const stats = [
    { number: '50+', label: 'Successful Campaigns' },
    { number: '$5M+', label: 'Ad Spend Managed' },
    { number: '12x', label: 'Average ROAS' },
    { number: '98%', label: 'Business Satisfaction' }
  ]

  return (
    <section className="about" id="about">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Who We Are</h2>
          <p>A team focused on one thing: making Meta Ads work for your business.</p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Real Experience, Real Results</h3>
            <p>
              We've built and optimized hundreds of Meta Ad campaigns across different industries. That experience isn't theoretical—it's the foundation of everything we do. We know what works because we've seen it work repeatedly.
            </p>
            <p>
              We don't promise unrealistic returns or use empty jargon. Instead, we're straightforward about what's possible, why it matters, and how we'll get you there. We also make sure you understand what we're doing every step of the way.
            </p>
            <p>
              Whether you're just starting with Meta Ads or looking to improve underperforming campaigns, we meet you where you are and build a plan that actually fits your business.
            </p>
            <ul className="about-list">
              <li>Hands-on campaign management and optimization</li>
              <li>Regular communication and transparent reporting</li>
              <li>Data-driven decisions, not guesswork</li>
              <li>Flexible packages for businesses of all sizes</li>
            </ul>
          </motion.div>
            <ul className="about-list">
              <li>Certified Meta Ads specialists</li>
              <li>Data-driven strategy and optimization</li>
              <li>Transparent reporting and communication</li>
              <li>Custom solutions for every budget</li>
            </ul>
          </motion.div>

          <motion.div 
            className="about-stats"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="stats-grid">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  className="stat-box"
                  whileHover={{ y: -4 }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
