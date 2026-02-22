import './Problem.css'

const problems = [
  { id: 1, icon: '📉', title: 'Ad Spend With No Clear ROI', description: "Running campaigns but unsure if they're actually profitable. Cost per lead is inconsistent and unpredictable month to month." },
  { id: 2, icon: '⏱️', title: 'Team Buried in Manual Follow-Ups', description: "Your team spends hours replying to the same WhatsApp enquiries, leaving no time to actually close deals." },
  { id: 3, icon: '🚪', title: 'Leads Falling Through the Cracks', description: "Potential customers enquire but never get a timely response — costing you real sales every single day." },
  { id: 4, icon: '📊', title: 'No Visibility Into What Works', description: "Data exists but it's scattered across platforms. No single source of truth for performance or customer conversations." },
]

export default function Problem() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <section className="problem-section" id="problem">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">The Problem</span>
          <h2>Sound Familiar?</h2>
          <p>Most growing businesses hit the same walls. Here's what we help you break through.</p>
        </div>
        <div className="problems-grid">
          {problems.map(p => (
            <div key={p.id} className="problem-card">
              <div className="problem-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
        <div className="problem-footer">
          <p>These aren't isolated issues — they're symptoms of missing the right systems. <strong>That's exactly what we build.</strong></p>
          <button className="btn btn-primary" onClick={() => scrollTo('solutions')}>See How We Fix This →</button>
        </div>
      </div>
    </section>
  )
}
