import { motion } from 'framer-motion'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src="/images/Adetic.png" alt="Adletic Agency" className="footer-logo-image" />
            <h3 className="footer-logo">Adletic</h3>
            <p className="footer-subtitle">Meta Ads Management</p>
            <p>We build campaigns that work. Simple strategy, smart optimization, real support.</p>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Campaign Strategy</a></li>
              <li><a href="#services">Ad Creation</a></li>
              <li><a href="#services">Performance Optimization</a></li>
              <li><a href="#services">Analytics & Reporting</a></li>
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hello@adletic.com">hello@adletic.com</a></li>
              <li><a href="tel:+60112167672">+60 112 167 672</a></li>
              <li><a href="#contact">Get in Touch</a></li>
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>&copy; {currentYear} Adletic Agency. All rights reserved. | Meta Ads Specialists</p>
        </motion.div>
      </div>
    </footer>
  )
}
