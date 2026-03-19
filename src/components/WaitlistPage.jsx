import { useState } from 'react'
import Navigation from './Navigation'
import './WaitlistPage.css'

const courses = [
  {
    emoji: '💡',
    title: 'AI Campaign Lab',
    desc: 'Learn to plan, create, and launch full AI-powered ad campaigns from scratch.',
    lessons: 12,
    value: 'RM 849',
  },
  {
    emoji: '🎬',
    title: 'AI Video Creation Course',
    desc: 'Master AI video tools to produce scroll-stopping content in minutes.',
    lessons: 18,
    value: 'RM 1,069',
  },
  {
    emoji: '🧠',
    title: 'AI Visual Effects Course',
    desc: 'Create scroll-stopping AI effects — morphs, glitches, style shifts, and more.',
    lessons: 10,
    value: 'RM 849',
  },
  {
    emoji: '🎥',
    title: 'Creative Breakdown: From Idea to Viral Ad',
    desc: 'Reverse-engineer viral ads and learn the frameworks behind them.',
    lessons: 8,
    value: 'RM 425',
  },
  {
    emoji: '📈',
    title: "The AI Content Creator's Launch & Earn Framework",
    desc: 'Blueprint to launch your AI content business and land paying clients.',
    lessons: 14,
    value: 'RM 639',
  },
  {
    emoji: '📅',
    title: '7-Day Instagram Launch Plan',
    desc: 'Step-by-step plan to set up and grow your Instagram from zero.',
    lessons: 7,
    value: 'RM 209',
  },
  {
    emoji: '🔥',
    title: '100 Prompts Pack',
    desc: 'Ready-to-use prompts for AI video, photo, and ad generation.',
    lessons: null,
    value: 'RM 125',
    isResource: true,
  },
  {
    emoji: '👄',
    title: 'AI Lip Sync',
    desc: 'Sync realistic lip movements to any audio using AI — perfect for avatars, dubbing, and multilingual content.',
    lessons: 6,
    value: 'RM 399',
  },
]

const upcomingCourses = [
  {
    emoji: '🤖',
    title: 'AI UGC Ads Masterclass',
    desc: 'Create user-generated-style ads entirely with AI — no actors needed.',
  },
  {
    emoji: '🎙️',
    title: 'AI Voice & Audio Production',
    desc: 'Clone voices, create voiceovers, and produce podcast-ready audio with AI.',
  },
  {
    emoji: '📱',
    title: 'Short-Form Content Factory',
    desc: 'Build a system to produce 30 Reels/TikToks per week using AI workflows.',
  },
  {
    emoji: '💰',
    title: 'Selling AI Video Services',
    desc: 'How to package, price, and sell AI video creation as a freelance service.',
  },
]

const communityFeatures = [
  { icon: '💬', title: 'Community Feed', desc: 'Ask questions, share wins, get feedback from creators.' },
  { icon: '📅', title: 'Weekly Live Sessions', desc: 'Live Q&A, tutorials, and strategy calls every week.' },
  { icon: '🎁', title: 'Challenges & Giveaways', desc: 'Monthly challenges with prizes to keep you motivated.' },
  { icon: '🌎', title: 'Creator Network', desc: 'Connect with freelancers, agencies, and studio founders.' },
]

const customTools = [
  { emoji: '⚙️', title: 'AI Photo/Video Prompt Generator', desc: 'Generate optimized prompts for AI photo and video creation tools.' },
]

const calendarEvents = [
  { day: 'MON', date: '10', title: 'Live Q&A: AI Video Basics', time: '8:00 PM MYT' },
  { day: 'WED', date: '12', title: 'Workshop: Viral Ad Breakdown', time: '8:00 PM MYT' },
  { day: 'FRI', date: '14', title: 'Community Challenge Kickoff', time: '9:00 PM MYT' },
  { day: 'SAT', date: '15', title: 'Guest Expert: AI Avatars', time: '3:00 PM MYT' },
]

const leaderboard = [
  { rank: 1, name: 'You?', points: '---', avatar: '🏆' },
  { rank: 2, name: 'Early Bird #2', points: '---', avatar: '🥈' },
  { rank: 3, name: 'Early Bird #3', points: '---', avatar: '🥉' },
  { rank: 4, name: 'Member #4', points: '---', avatar: '👤' },
  { rank: 5, name: 'Member #5', points: '---', avatar: '👤' },
]

const WHATSAPP_NUMBER = '601121677672'

export default function WaitlistPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', instagram: '' })
  const [activeTab, setActiveTab] = useState('classroom')
  const [chatMsg, setChatMsg] = useState('')

  const scrollToForm = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const message = [
      `🎬 *AI Video Creation Community - Early Bird Waitlist*`,
      ``,
      `Hi! I'd like to join the waitlist for the AI Video Creation Community.`,
      ``,
      `*Name:* ${form.name}`,
      `*Email:* ${form.email}`,
      `*Phone:* ${form.phone}`,
      form.instagram ? `*Instagram:* @${form.instagram.replace('@', '')}` : '',
      ``,
      `I'm interested in the Early Bird plan at RM18/month.`,
    ].filter(Boolean).join('\n')

    const encoded = encodeURIComponent(message)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank')
  }

  const totalValue = 849 + 1069 + 849 + 425 + 639 + 209 + 125 + 399

  const tabs = [
    { id: 'community', label: 'Community', icon: '💬' },
    { id: 'classroom', label: 'Classroom', icon: '📚' },
    { id: 'calendar', label: 'Calendar', icon: '📅' },
    { id: 'members', label: 'Members', icon: '👥' },
    { id: 'leaderboards', label: 'Leaderboards', icon: '🏆' },
    { id: 'tools', label: 'AI Tools', icon: '🧩' },
  ]

  return (
    <div className="waitlist-page">
      <Navigation />

      {/* Hero */}
      <section className="waitlist-hero">
        <div className="container">
          <div className="waitlist-hero-content">
            <span className="waitlist-badge">🚀 Early Access — Limited to 50 Members</span>
            <h1>Create your first viral AI video in <span className="text-accent">1 day</span>, even if you've never made one before.</h1>
            <p className="waitlist-subtitle">
              Join creators, freelancers, and studio founders learning how to build, automate, and scale their content with AI.
            </p>
            <div className="waitlist-earn-badge">
              💵 Community members earn <strong>RM 2,000–RM 65,000</strong> per project!
            </div>
          </div>
        </div>
      </section>

      {/* Platform Preview */}
      <section className="platform-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Platform Preview</span>
            <h2>Everything Inside the Community</h2>
            <p>A complete learning platform built for AI video creators. Here's what you'll get access to.</p>
          </div>

          <div className="platform-shell">
            {/* Platform header */}
            <div className="platform-header">
              <div className="platform-header-left">
                <div className="platform-logo">
                  <img src="/images/Adetic.png" alt="AI Video Creators" />
                </div>
                <div className="platform-title-group">
                  <span className="platform-name">AI Video Creators Community</span>
                  <span className="platform-members">Make cool AI vids w family & frends</span>
                </div>
              </div>
              <div className="platform-header-right">
                <span className="platform-status-dot dev"></span>
                <span className="platform-status-text dev">Under Development</span>
              </div>
            </div>

            {/* Tab navigation */}
            <nav className="platform-tabs">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`platform-tab ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="platform-tab-icon">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* Tab content */}
            <div className="platform-content">

              {/* Community Tab */}
              {activeTab === 'community' && (
                <div className="tab-community">
                  <div className="community-feed">
                    <div className="feed-post">
                      <div className="feed-post-header">
                        <div className="feed-avatar">👨‍💻</div>
                        <div>
                          <span className="feed-author">Admin</span>
                          <span className="feed-time">Pinned</span>
                        </div>
                      </div>
                      <div className="feed-body">
                        <h4>Welcome to the AI Video Creators Community! 🎬</h4>
                        <p>This is your home base for learning AI video creation. Start with the Classroom, join the weekly live sessions, and don't be shy — introduce yourself below!</p>
                      </div>
                      <div className="feed-actions">
                        <span className="feed-action">❤️ 24</span>
                        <span className="feed-action">💬 12 comments</span>
                      </div>
                    </div>

                    <div className="feed-post">
                      <div className="feed-post-header">
                        <div className="feed-avatar">🎨</div>
                        <div>
                          <span className="feed-author">Sarah K.</span>
                          <span className="feed-time">2 hours ago</span>
                        </div>
                      </div>
                      <div className="feed-body">
                        <p>Just finished the AI Effects course — made a product morph video for a client's ad. They loved it! 🔥</p>
                      </div>
                      <div className="feed-actions">
                        <span className="feed-action">❤️ 18</span>
                        <span className="feed-action">💬 7 comments</span>
                      </div>
                    </div>

                    <div className="feed-post">
                      <div className="feed-post-header">
                        <div className="feed-avatar">📹</div>
                        <div>
                          <span className="feed-author">Ahmad R.</span>
                          <span className="feed-time">5 hours ago</span>
                        </div>
                      </div>
                      <div className="feed-body">
                        <p>Can anyone share their workflow for creating 15-second product ads? Looking to speed up my process.</p>
                      </div>
                      <div className="feed-actions">
                        <span className="feed-action">❤️ 9</span>
                        <span className="feed-action">💬 14 comments</span>
                      </div>
                    </div>
                  </div>

                  <div className="community-sidebar">
                    {communityFeatures.map((f, i) => (
                      <div key={i} className="community-feature-card">
                        <span className="community-feature-icon">{f.icon}</span>
                        <div>
                          <strong>{f.title}</strong>
                          <p>{f.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chatbox */}
                  <div className="community-chatbox">
                    <div className="chatbox-inner">
                      <input
                        type="text"
                        className="chatbox-input"
                        placeholder="Write something to the community..."
                        value={chatMsg}
                        onChange={(e) => setChatMsg(e.target.value)}
                        onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); scrollToForm() } }}
                      />
                      <button className="chatbox-send" onClick={scrollToForm}>
                        Send →
                      </button>
                    </div>
                    <p className="chatbox-hint">Join the waitlist to start posting in the community.</p>
                  </div>
                </div>
              )}

              {/* Classroom Tab */}
              {activeTab === 'classroom' && (
                <div className="tab-classroom">
                  <div className="classroom-grid">
                    {courses.map((course, i) => (
                      <div key={i} className="course-card" onClick={scrollToForm}>
                        <div className="course-thumb">
                          <span className="course-thumb-emoji">{course.emoji}</span>
                          <span className="course-thumb-cta">Unlock</span>
                        </div>
                        <div className="course-body">
                          <div className="course-meta">
                            {course.isResource
                              ? <span className="course-tag resource">Resource Pack</span>
                              : <span className="course-tag">{course.lessons} lessons</span>
                            }
                            <span className="course-value">{course.value}</span>
                          </div>
                          <h4 className="course-title">{course.title}</h4>
                          <p className="course-desc">{course.desc}</p>
                          <div className="course-progress-row">
                            <div className="course-progress-bar">
                              <div className="course-progress-fill" style={{ width: '0%' }}></div>
                            </div>
                            <span className="course-progress-label">Not started</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="classroom-upcoming">
                    <h3 className="classroom-upcoming-title">🔮 Upcoming Courses</h3>
                    <div className="upcoming-grid">
                      {upcomingCourses.map((course, i) => (
                        <div key={i} className="upcoming-card">
                          <div className="upcoming-thumb">
                            <span className="upcoming-thumb-emoji">{course.emoji}</span>
                            <span className="upcoming-lock">🔒</span>
                          </div>
                          <div className="upcoming-body">
                            <span className="upcoming-tag">Coming Soon</span>
                            <h4>{course.title}</h4>
                            <p>{course.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="classroom-total-banner">
                    <div className="classroom-total-left">
                      <strong>Total Course Value</strong>
                      <span>All included in your membership</span>
                    </div>
                    <div className="classroom-total-right">
                      <span className="classroom-total-value">RM {totalValue.toLocaleString()}+</span>
                      <span className="classroom-total-yours">Yours for RM18/mo</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Calendar Tab */}
              {activeTab === 'calendar' && (
                <div className="tab-calendar">
                  <div className="calendar-header-bar">
                    <h3>Upcoming Events</h3>
                    <span className="calendar-month">This Week</span>
                  </div>
                  <div className="calendar-list">
                    {calendarEvents.map((ev, i) => (
                      <div key={i} className="calendar-event">
                        <div className="calendar-date-block">
                          <span className="calendar-day">{ev.day}</span>
                          <span className="calendar-date">{ev.date}</span>
                        </div>
                        <div className="calendar-event-info">
                          <h4>{ev.title}</h4>
                          <span className="calendar-time">{ev.time}</span>
                        </div>
                        <span className="calendar-event-badge dev">Planned</span>
                      </div>
                    ))}
                  </div>
                  <div className="calendar-note">
                    <span>📅</span>
                    <p>Weekly live sessions, Q&As, workshops, and guest expert calls. Never miss a session — all recordings are saved.</p>
                  </div>
                </div>
              )}

              {/* Members Tab */}
              {activeTab === 'members' && (
                <div className="tab-members">
                  <div className="tier-intro">
                    <h3>Member Tiers</h3>
                    <p>Level up by completing courses, joining live sessions, and contributing to the community. You can only see members at your level or below.</p>
                  </div>

                  <div className="tier-list">
                    {/* Tier 1 — Starter (visible) */}
                    <div className="tier-block tier-unlocked">
                      <div className="tier-header">
                        <div className="tier-badge tier-1">🌱 Level 1</div>
                        <h4>Starter</h4>
                        <span className="tier-desc">New members — just getting started</span>
                      </div>
                      <div className="tier-members-row">
                        <div className="tier-member">
                          <span className="tier-member-avatar">👤</span>
                          <div>
                            <span className="tier-member-name">You</span>
                            <span className="tier-member-role">New Member</span>
                          </div>
                          <span className="tier-member-pts">0 pts</span>
                          <button className="tier-msg-btn" onClick={scrollToForm}>💬 Message</button>
                        </div>
                        <div className="tier-member">
                          <span className="tier-member-avatar">🎨</span>
                          <div>
                            <span className="tier-member-name">Sarah K.</span>
                            <span className="tier-member-role">Content Creator</span>
                          </div>
                          <span className="tier-member-pts">45 pts</span>
                          <button className="tier-msg-btn" onClick={scrollToForm}>💬 Message</button>
                        </div>
                        <div className="tier-member">
                          <span className="tier-member-avatar">📹</span>
                          <div>
                            <span className="tier-member-name">Ahmad R.</span>
                            <span className="tier-member-role">Freelancer</span>
                          </div>
                          <span className="tier-member-pts">30 pts</span>
                          <button className="tier-msg-btn" onClick={scrollToForm}>💬 Message</button>
                        </div>
                      </div>
                    </div>

                    {/* Tier 2 — Creator (locked) */}
                    <div className="tier-block tier-locked">
                      <div className="tier-header">
                        <div className="tier-badge tier-2">⚡ Level 2</div>
                        <h4>Creator</h4>
                        <span className="tier-desc">Complete 2 courses to unlock</span>
                      </div>
                      <div className="tier-members-row blurred">
                        <div className="tier-member">
                          <span className="tier-member-avatar">👤</span>
                          <div>
                            <span className="tier-member-name">██████</span>
                            <span className="tier-member-role">████████</span>
                          </div>
                          <span className="tier-member-pts">??? pts</span>
                        </div>
                        <div className="tier-member">
                          <span className="tier-member-avatar">👤</span>
                          <div>
                            <span className="tier-member-name">██████</span>
                            <span className="tier-member-role">████████</span>
                          </div>
                          <span className="tier-member-pts">??? pts</span>
                        </div>
                      </div>
                      <div className="tier-lock-overlay" onClick={scrollToForm}>
                        <span>🔒</span> Unlock Level 2
                      </div>
                    </div>

                    {/* Tier 3 — Pro (locked) */}
                    <div className="tier-block tier-locked">
                      <div className="tier-header">
                        <div className="tier-badge tier-3">🔥 Level 3</div>
                        <h4>Pro</h4>
                        <span className="tier-desc">Complete 5 courses & earn 500 pts</span>
                      </div>
                      <div className="tier-members-row blurred">
                        <div className="tier-member">
                          <span className="tier-member-avatar">👤</span>
                          <div>
                            <span className="tier-member-name">██████</span>
                            <span className="tier-member-role">████████</span>
                          </div>
                          <span className="tier-member-pts">??? pts</span>
                        </div>
                        <div className="tier-member">
                          <span className="tier-member-avatar">👤</span>
                          <div>
                            <span className="tier-member-name">██████</span>
                            <span className="tier-member-role">████████</span>
                          </div>
                          <span className="tier-member-pts">??? pts</span>
                        </div>
                      </div>
                      <div className="tier-lock-overlay" onClick={scrollToForm}>
                        <span>🔒</span> Unlock Level 3
                      </div>
                    </div>

                    {/* Tier 4 — Expert (locked) */}
                    <div className="tier-block tier-locked">
                      <div className="tier-header">
                        <div className="tier-badge tier-4">💎 Level 4</div>
                        <h4>Expert</h4>
                        <span className="tier-desc">Complete all courses & earn 1,000 pts</span>
                      </div>
                      <div className="tier-members-row blurred">
                        <div className="tier-member">
                          <span className="tier-member-avatar">👤</span>
                          <div>
                            <span className="tier-member-name">██████</span>
                            <span className="tier-member-role">████████</span>
                          </div>
                          <span className="tier-member-pts">??? pts</span>
                        </div>
                      </div>
                      <div className="tier-lock-overlay" onClick={scrollToForm}>
                        <span>🔒</span> Unlock Level 4
                      </div>
                    </div>
                  </div>

                  <div className="tier-note">
                    <p>Earn points by completing courses, attending live sessions, posting in the community, and helping other members.</p>
                  </div>
                </div>
              )}

              {/* Leaderboards Tab */}
              {activeTab === 'leaderboards' && (
                <div className="tab-leaderboards">
                  <div className="leaderboard-header">
                    <h3>Community Leaderboard</h3>
                    <p>Earn points by completing courses, joining live sessions, and helping others.</p>
                  </div>
                  <div className="leaderboard-table">
                    {leaderboard.map((entry) => (
                      <div key={entry.rank} className={`leaderboard-row ${entry.rank === 1 ? 'top-rank' : ''}`}>
                        <span className="leaderboard-rank">#{entry.rank}</span>
                        <span className="leaderboard-avatar">{entry.avatar}</span>
                        <span className="leaderboard-name">{entry.name}</span>
                        <span className="leaderboard-points">{entry.points} pts</span>
                      </div>
                    ))}
                  </div>
                  <div className="leaderboard-note">
                    <p>Be one of the first to claim the #1 spot. Early members get a head start!</p>
                  </div>
                </div>
              )}

              {/* AI Tools Tab */}
              {activeTab === 'tools' && (
                <div className="tab-tools">
                  <div className="tools-header">
                    <h3>Custom AI Tools</h3>
                    <p>Exclusive tools built for community members to speed up your workflow.</p>
                  </div>
                  <div className="tools-grid">
                    {customTools.map((tool, i) => (
                      <div key={i} className="tool-card">
                        <div className="tool-card-icon">{tool.emoji}</div>
                        <h4>{tool.title}</h4>
                        <p>{tool.desc}</p>
                        <div className="tool-card-badge">Included in Membership</div>
                      </div>
                    ))}
                    <div className="tool-card tool-card-coming">
                      <div className="tool-card-icon">🔮</div>
                      <h4>More Tools Coming</h4>
                      <p>We're building more AI tools exclusively for members. Stay tuned.</p>
                      <div className="tool-card-badge coming">Coming Soon</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing + Form Section */}
      <section className="waitlist-pricing-section" id="waitlist-form">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Pricing</span>
            <h2>Lock In Your Early Bird Rate</h2>
            <p>Get everything above for less than a cup of coffee per day.</p>
          </div>

          <div className="waitlist-grid">
            {/* Left — Pricing */}
            <div className="waitlist-includes">
              <div className="waitlist-pricing-cards">
                <div className="waitlist-price-card early-bird">
                  <div className="price-card-badge">🔥 Early Bird</div>
                  <div className="price-card-price">
                    <span className="price-dollar">RM</span>
                    <span className="price-number">18</span>
                    <span className="price-period">/month</span>
                  </div>
                  <p className="price-card-note">For the first 50 members only</p>
                  <p className="price-card-lock">Lock it in now — keep your rate forever.</p>
                </div>

                <div className="waitlist-price-card original">
                  <div className="price-card-label">Original Price</div>
                  <div className="price-card-price">
                    <span className="price-dollar">RM</span>
                    <span className="price-number">50</span>
                    <span className="price-period">/month</span>
                  </div>
                  <p className="price-card-note">Regular membership price</p>
                </div>
              </div>

              <div className="waitlist-warning">
                ⚠️ Early price for first 50 members. Lock it in now — keep your rate forever.
              </div>

              {/* What's included summary */}
              <div className="waitlist-card">
                <h3>Everything Included</h3>
                <ul className="waitlist-items">
                  {courses.map((c, i) => (
                    <li key={i}>
                      <span className="waitlist-item-emoji">{c.emoji}</span>
                      <span className="waitlist-item-label">{c.title}</span>
                      <span className="waitlist-item-value">{c.value}</span>
                    </li>
                  ))}
                  <li>
                    <span className="waitlist-item-emoji">🎁</span>
                    <span className="waitlist-item-label">Challenges & Giveaways</span>
                  </li>
                  <li>
                    <span className="waitlist-item-emoji">🌎</span>
                    <span className="waitlist-item-label">Supportive community</span>
                  </li>
                  <li>
                    <span className="waitlist-item-emoji">⚙️</span>
                    <span className="waitlist-item-label">AI Photo/Video Prompt Generator</span>
                  </li>
                </ul>
                <div className="waitlist-total">
                  <span>Total Value</span>
                  <span className="waitlist-total-amount">RM {totalValue.toLocaleString()}+</span>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="waitlist-right">
              <div className="waitlist-form-card">
                <h3>Join the Waitlist</h3>
                <p>Fill in your details and we'll reach out via WhatsApp.</p>

                <form onSubmit={handleSubmit} className="waitlist-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">WhatsApp Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+60 12-345 6789"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="instagram">Instagram Handle (optional)</label>
                    <input
                      type="text"
                      id="instagram"
                      name="instagram"
                      value={form.instagram}
                      onChange={handleChange}
                      placeholder="@yourhandle"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-large waitlist-submit">
                    🚀 Join Waitlist — Lock in RM18/month
                  </button>

                  <p className="waitlist-form-note">
                    You'll be redirected to WhatsApp to confirm your spot.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="waitlist-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Adletic Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
