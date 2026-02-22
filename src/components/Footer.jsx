import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/images/Adetic.png" alt="Adletic Agency" className="footer-logo" />
            <p>AI Solutions & Paid Ads Agency helping Malaysian businesses grow with smart, measurable systems.</p>
            <div className="footer-socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Solutions</h4>
            <ul>
              <li><button onClick={() => scrollTo('solutions')}>Paid Ads Management</button></li>
              <li><button onClick={() => scrollTo('solutions')}>AI Chatbot Solutions</button></li>
              <li><button onClick={() => scrollTo('pricing')}>Pricing</button></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><button onClick={() => scrollTo('results')}>Results</button></li>
              <li><button onClick={() => scrollTo('faq')}>FAQ</button></li>
              <li><button onClick={() => scrollTo('contact')}>Contact</button></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hello@adleticagency.com">hello@adleticagency.com</a></li>
              <li><a href="tel:+60112167672">+60 112 167 672</a></li>
              <li><span>Shah Alam, Selangor, MY</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} Adletic Agency. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
