import { motion } from 'framer-motion'
import './Contact.css'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you soon.')
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Transform Your Ad Spend?</h2>
          <p>Get a free Meta Ads audit and discover exactly how much revenue you're leaving on the table.</p>
        </motion.div>

        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p><a href="mailto:hello@adletic.com">hello@adletic.com</a></p>
            </div>
            <div className="info-item">
              <div className="info-icon">📱</div>
              <h3>Phone</h3>
              <p><a href="tel:+60112167672">+60 112 167 672</a></p>
            </div>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <h3>Location</h3>
              <p>Shah Alam, Selangor Darul Ehsan, Malaysia</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Your Name" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Your Email" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Company Name" 
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                placeholder="Tell us about your goals..." 
                rows="5"
                required 
              ></textarea>
            </div>
            <motion.button 
              type="submit"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
