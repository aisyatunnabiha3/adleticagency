import './Contact.css'

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-text">
            <span className="eyebrow">Get In Touch</span>
            <h2>Ready to Scale Your Business?</h2>
            <p>Whether you're interested in Paid Ads, AI Solutions, or both — let's have a conversation about your goals. No pressure, no hard sell.</p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:hello@adleticagency.com">hello@adleticagency.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <strong>WhatsApp</strong>
                  <a href="tel:+60112167672">+60 112 167 672</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <strong>Office</strong>
                  <span>Shah Alam, Selangor, Malaysia</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-cta-box">
            <h3>Start the Conversation</h3>
            <p>Drop us a message on WhatsApp — we typically reply within a few hours.</p>
            <a
              href="https://api.whatsapp.com/send?phone=601121677672&text=Hi%20Adletic%20Agency,%20I%20would%20like%20to%20learn%20more%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
            >
              💬 Message Us on WhatsApp
            </a>
            <p className="contact-note">Or email us at hello@adleticagency.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}
