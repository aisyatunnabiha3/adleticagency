import './Proof.css'

const stats = [
  { value: '50+', label: 'Campaigns Managed' },
  { value: '12x', label: 'Average ROAS' },
  { value: 'RM6.90', label: 'Avg. Cost Per Lead' },
  { value: '98%', label: 'Client Retention' },
]

const testimonials = [
  { name: 'Ahmad Rizal', role: 'E-commerce Store Owner', quote: 'Was losing money on ads every month. They fixed our targeting and creatives. Now we\'re profitable consistently. Best investment we\'ve made.', stars: 5 },
  { name: 'Sarah Chen', role: 'Digital Marketing Manager', quote: 'The daily reports and weekly check-ins give us total transparency. We finally understand where every ringgit is going.', stars: 5 },
  { name: 'Puan Anna Rosdijanti', role: 'CEO at BEANA HOME QURAN', quote: 'Juta Teknologi helped us understand customer acquisition better. The AI chatbot handles follow-ups automatically. Very useful.', stars: 5 },
  { name: 'Abdul Qadir Aros', role: 'Managing Partner at AQ AROS & CO', quote: 'Their system is efficient and still has that personal touch. A good balance of automation and human connection.', stars: 5 },
  { name: 'Rajah Sivalingam', role: 'CEO at ApplyRadar', quote: 'Their lead nurturing system is excellent. It keeps potential students engaged throughout the entire decision-making process.', stars: 5 },
  { name: 'Ravi Kumar', role: 'SaaS Company Founder', quote: 'Tripled our leads in 6 weeks. The team knows what they\'re doing and actually cares about our results.', stars: 5 },
]

export default function Proof() {
  return (
    <section className="proof-section" id="results">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Results</span>
          <h2>Numbers That Speak for Themselves</h2>
          <p>Real results from real Malaysian businesses — across both our AI and Paid Ads solutions.</p>
        </div>

        <div className="stats-row">
          {stats.map((s, i) => (
            <div key={i} className="stat-box">
              <div className="stat-box-value">{s.value}</div>
              <div className="stat-box-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="t-stars">{'★'.repeat(t.stars)}</div>
              <p className="t-quote">"{t.quote}"</p>
              <div className="t-author">
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
