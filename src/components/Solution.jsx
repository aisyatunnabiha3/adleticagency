import './Solution.css'

export default function Solution() {
  const differentiators = [
    { num: '01', title: 'Data-First, Always', desc: 'Every decision — from targeting to creative to budget — is backed by real performance data, not gut feel.' },
    { num: '02', title: 'Full-Stack Support', desc: 'From AI setup to paid ads management, we handle the execution so you can focus on running your business.' },
    { num: '03', title: 'Transparent Reporting', desc: 'Daily KPI dashboards and weekly strategy calls. You always know exactly where your money is going and what it\'s returning.' },
    { num: '04', title: 'Malaysian Market Expertise', desc: 'We understand the local market, customer behaviour, and platform nuances that generic agencies miss.' },
  ]

  return (
    <section className="solution-section section-dark" id="why">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Why Adletic</span>
          <h2 style={{color:'#fff'}}>We Don't Guess. We Engineer Growth.</h2>
          <p>A systematic approach to customer acquisition that gets better over time.</p>
        </div>

        <div className="differentiators-grid">
          {differentiators.map(d => (
            <div key={d.num} className="diff-card">
              <div className="diff-num">{d.num}</div>
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
