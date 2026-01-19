import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            🎯 Meta Ads Management
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Your ads deserve<br />to actually <span className="highlight">work</span>
          </motion.h1>

          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Most businesses throw money at Meta Ads and hope for results. We do that too haha....we just take a different approach. Clear strategy, smart optimization, and genuine support. No fluff. Just split testings & retargeting that improves over time.
          </motion.p>

          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="stat">
              <motion.span 
                className="stat-number"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                50+
              </motion.span>
              <span className="stat-text">Successful Campaigns</span>
            </div>
            <div className="stat">
              <motion.span 
                className="stat-number"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                12x
              </motion.span>
              <span className="stat-text">Average ROAS</span>
            </div>
            <div className="stat">
              <motion.span 
                className="stat-number"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                98%
              </motion.span>
              <span className="stat-text">Business Retention</span>
            </div>
          </motion.div>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="btn btn-primary btn-large"
              whileHover={{ scale: 1.08, boxShadow: '0 20px 40px rgba(242, 101, 34, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
            >
              <span>Let's Talk</span>
            </motion.button>
            <motion.button 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Pricing ↓
            </motion.button>
          </motion.div>

          <motion.div 
            className="trust-badges"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="visual-container">
            <motion.div 
              className="gradient-circle orange"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            ></motion.div>
            <motion.div 
              className="gradient-circle yellow"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            ></motion.div>
            <motion.div 
              className="chart-mock"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="chart-bar"
                style={{ height: '40%' }}
                initial={{ height: 0 }}
                whileInView={{ height: '40%' }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              ></motion.div>
              <motion.div 
                className="chart-bar"
                style={{ height: '65%' }}
                initial={{ height: 0 }}
                whileInView={{ height: '65%' }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
              ></motion.div>
              <motion.div 
                className="chart-bar"
                style={{ height: '85%' }}
                initial={{ height: 0 }}
                whileInView={{ height: '85%' }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              ></motion.div>
              <motion.div 
                className="chart-bar"
                style={{ height: '70%' }}
                initial={{ height: 0 }}
                whileInView={{ height: '70%' }}
                transition={{ duration: 0.8, delay: 0.9 }}
                viewport={{ once: true }}
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
