import { useState } from 'react'
import './Objections.css'

const faqs = [
  { q: 'What solutions does Adletic offer?', a: 'We offer two core solutions: Paid Ads Management (Meta & Google Ads) and AI Solutions (WhatsApp AI chatbots and automation). You can use one or combine both for maximum impact on your customer acquisition and retention.' },
  { q: 'How long before I see results from the Paid Ads package?', a: 'You\'ll see initial campaign metrics within 2–3 weeks. Real, consistent conversions typically materialise around weeks 6–8 as we gather data and optimise. We set clear expectations upfront — no vanity metrics, only real business impact.' },
  { q: 'How does the AI chatbot actually work?', a: 'We build a custom AI agent on WhatsApp that\'s trained on your business information, products, and FAQs. It responds to customer enquiries 24/7, books appointments, follows up with leads automatically, and routes complex cases to your human team.' },
  { q: 'Can I use both Paid Ads and AI Solutions together?', a: 'Absolutely — and we recommend it. Paid Ads bring the leads in; AI Solutions ensure every lead gets an immediate, personalised response and is nurtured until they convert. It\'s the complete acquisition and conversion stack.' },
  { q: 'Do I need technical knowledge to get started?', a: 'Not at all. We handle everything — from WhatsApp QR setup and AI prompt building to ad account configuration and creative production. You just provide us with your business details and goals, and we take it from there.' },
  { q: 'What if I\'m not satisfied with the results?', a: 'For Paid Ads: if we don\'t deliver at least 2x ROAS in the first month, we keep optimising for free. For AI Solutions: we continuously refine your chatbot based on real conversation data. We\'re invested in your results.' },
  { q: 'Are there long-term contracts?', a: 'No long-term contracts. Our Paid Ads packages are month-to-month. The AI Solutions have flexible plans including a pay-as-you-go option. We earn your continued business by delivering results, not by locking you in.' },
]

export default function Objections() {
  const [open, setOpen] = useState(null)

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know before getting started with Adletic.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button className="faq-trigger" onClick={() => setOpen(open === i ? null : i)}>
                <span>{faq.q}</span>
                <span className="faq-chevron">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className="faq-body">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <p>Still have questions?</p>
          <a
            href="https://api.whatsapp.com/send?phone=601121677672&text=Hi%20Adletic%20Agency,%20I%20have%20a%20question"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Chat With Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
