import './Services.css'

const paidAdsFeatures = [
  { icon: '🎯', title: 'Precision Audience Targeting', desc: 'We identify and reach your ideal customers on Meta & Google using data-driven audience research.' },
  { icon: '🎨', title: 'Ad Creative Production', desc: 'High-converting posters, videos and copy designed specifically for your product and audience.' },
  { icon: '📈', title: 'Campaign Optimisation', desc: 'Continuous A/B testing and budget reallocation to lower cost per lead and maximise ROAS.' },
  { icon: '📊', title: 'Daily KPI Reporting', desc: 'Transparent daily reports so you always know exactly how your ad spend is performing.' },
  { icon: '🔄', title: 'Retargeting Strategy', desc: 'Re-engage warm prospects who showed interest but haven\'t converted yet.' },
  { icon: '💬', title: 'Weekly Strategy Sessions', desc: 'Regular calls to review performance, align on goals and plan the next phase of growth.' },
]

const aiFeatures = [
  { icon: '🤖', title: 'Custom AI Chatbot', desc: 'Personalised WhatsApp AI agent trained on your business — handles enquiries 24/7 automatically.' },
  { icon: '📲', title: 'WhatsApp Team Inbox', desc: 'One shared inbox for your entire team. Manage all customer conversations from one place.' },
  { icon: '📅', title: 'Automated Bookings', desc: 'Let the AI schedule appointments and confirmations without any manual input from your team.' },
  { icon: '🔔', title: 'Automated Follow-Ups', desc: 'Nurture leads automatically with timed follow-up sequences until they convert.' },
  { icon: '📤', title: 'Bulk Message Blasting', desc: 'Send targeted campaigns to your entire contact list with personalised messaging at scale.' },
  { icon: '🏷️', title: 'Smart Tagging & Routing', desc: 'Automatically tag conversations and assign them to the right team member based on context.' },
]

const videoSteps = [
  {
    num: '01',
    title: 'Craft Your Concept',
    desc: 'Share your idea, brand brief, or script. Our framework transforms it into a precise AI-ready prompt optimised for cinematic output.',
  },
  {
    num: '02',
    title: 'Generate with Next-Gen AI',
    desc: 'Our AI pipeline generates your 15-second clip using next-generation video AI tools that most creators haven\'t even discovered yet.',
  },
  {
    num: '03',
    title: 'Publish & Dominate',
    desc: 'Receive a polished, ready-to-post video that stands out from every generic AI clip your competitors are making.',
  },
]

const communityPerks = [
  { icon: '💬', text: 'Private community chat — ask questions to industry leaders & AI video experts' },
  { icon: '🎬', text: 'Step-by-step video creation walkthroughs using cutting-edge AI video tools' },
  { icon: '📚', text: 'Prompt library — tested, high-converting prompts you can use immediately' },
  { icon: '🔴', text: 'Weekly live sessions with experts sharing the latest AI video techniques' },
  { icon: '🤝', text: 'Network with creators, marketers & businesses across Malaysia' },
]

// TODO: Replace '#' with the actual community page link when available
const COMMUNITY_LINK = '#'

export default function Services() {
  return (
    <section className="services-section" id="solutions">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Our Solutions</span>
          <h2>Three Ways We Help You Win</h2>
          <p>Choose one, combine two, or go all in — every solution is built to generate real, measurable results.</p>
        </div>

        {/* Top row: Paid Ads + AI Solutions */}
        <div className="solutions-split">
          <div className="solution-block">
            <div className="solution-block-header paid-ads">
              <div className="sb-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <h3>Paid Ads Solutions</h3>
                <p>Meta & Google Ads that deliver consistent, measurable ROI</p>
              </div>
            </div>
            <div className="sb-features">
              {paidAdsFeatures.map((f, i) => (
                <div key={i} className="sb-feature">
                  <span className="sb-f-icon">{f.icon}</span>
                  <div>
                    <strong>{f.title}</strong>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="solution-block">
            <div className="solution-block-header ai-solution">
              <div className="sb-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                </svg>
              </div>
              <div>
                <h3>AI Solutions</h3>
                <p>WhatsApp automation that works for you 24/7</p>
              </div>
            </div>
            <div className="sb-features">
              {aiFeatures.map((f, i) => (
                <div key={i} className="sb-feature">
                  <span className="sb-f-icon">{f.icon}</span>
                  <div>
                    <strong>{f.title}</strong>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full-width: AI Video Creation Community */}
        <div className="video-community-block">
          <div className="vcb-header">
            <div className="vcb-header-left">
              <div className="vcb-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                </svg>
              </div>
              <div>
                <div className="vcb-new-badge">New</div>
                <h3>AI Video Creation Community</h3>
                <p>Create cinematic 15-second clips using next-gen AI video tools the market hasn't discovered yet</p>
              </div>
            </div>
            <div className="vcb-platforms">
              <span className="platform-chip higgsfield">Next-Gen AI Video</span>
              <span className="platform-chip veo">3-Step Framework</span>
              <span className="platform-chip sora">Community-First</span>
            </div>
          </div>

          <div className="vcb-body">
            {/* 3-Step Framework */}
            <div className="vcb-framework">
              <h4 className="vcb-section-label">Our 3-Step Framework</h4>
              <div className="framework-steps">
                {videoSteps.map((step, i) => (
                  <div key={i} className="framework-step">
                    <div className="fs-num">{step.num}</div>
                    <div className="fs-connector" />
                    <h5>{step.title}</h5>
                    <p>{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Perks */}
            <div className="vcb-community">
              <h4 className="vcb-section-label">Inside the Community</h4>
              <div className="community-perks">
                {communityPerks.map((perk, i) => (
                  <div key={i} className="community-perk">
                    <span>{perk.icon}</span>
                    <p>{perk.text}</p>
                  </div>
                ))}
              </div>
              <button
                className="btn vcb-join-btn vcb-join-disabled"
                disabled
              >
                🚧 In Development
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
