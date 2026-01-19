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
          <h2>Why Choose Adletic?</h2>
          <p>We're Meta Ads specialists dedicated to delivering exceptional results for your business.</p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Expert Meta Ads Management</h3>
            <p>
              At Adletic, we specialize exclusively in Meta Ads platform management. With years of experience and a proven track record of delivering results, we understand the nuances of Facebook, Instagram, and Threads advertising.
            </p>
            <p>
              Our team stays current with the latest Meta Ads updates, algorithm changes, and best practices. We don't just run ads—we optimize every aspect of your campaigns to maximize ROI and drive sustainable growth.
            </p>
            <p>
              Whether you're launching your first campaign or scaling an existing account, we have the expertise to help you succeed.
            </p>
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
