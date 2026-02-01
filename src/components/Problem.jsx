import './Problem.css'

const problems = [
  {
    id: 1,
    title: 'Cost per lead naik turun',
    description: 'One month cheap, next month expensive.'
  },
  {
    id: 2,
    title: 'Keep changing creatives, but tak sure which one works',
    description: 'Test this, test that. Still unsure which poster or video actually converts.'
  },
  {
    id: 3,
    title: 'Reports ada, but still unsure what to do next',
    description: 'Numbers exist lah, but what do they mean? What should I change?'
  },
  {
    id: 4,
    title: 'Every adjustment feels macam try luck',
    description: 'No system, no logic. Just guessing, hoping something works.'
  },
]

export default function Problem() {
  return (
    <section className="problem-section">
      <div className="container">
        <div className="section-header">
          <h2>Below 5x ROAS?</h2>
          <p>You're spending money, but here's the problem</p>
        </div>
        <div className="problems-grid">
          {problems.map((problem) => (
            <div key={problem.id} className="problem-card">
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </div>
          ))}
        </div>
        <div className="problem-cta">
          <p>You're not doing it wrong. This is what happens when Meta Ads are run <strong>without a proper optimisation system.</strong></p>
        </div>
      </div>
    </section>
  )
}
