import { motion } from 'framer-motion'
import './Testimonials.css'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ahmad Hassan',
      company: 'Fashion E-Commerce',
      text: 'Within 3 months, we went from breaking even to 15x ROAS. Adletic truly understands Meta Ads.',
      rating: 5
    },
    {
      name: 'Sarah Lim',
      company: 'Beauty & Wellness',
      text: 'The professionalism and results speak for themselves. Best investment we made this year.',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      company: 'E-Learning Platform',
      text: 'Transparent reporting, quick responses, and campaigns that actually convert. Highly recommended!',
      rating: 5
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
    <section className="testimonials" id="testimonials">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Loved by Our Clients</h2>
          <p>Real results from real businesses using Adletic</p>
        </motion.div>

        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              className="testimonial-card"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="stars">
                {'⭐'.repeat(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.company}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
