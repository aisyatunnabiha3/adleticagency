import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import Navigation from './Navigation'
import './WaitlistPage.css'

const aiModels = [
  { name: 'Sora 2 Pro', badge: '9x Cheaper', desc: 'High-end cinematic output with rich composition and dynamic shots.', img: '/images/models/sora2pro.png' },
  { name: 'Veo 3.1', badge: '6x Cheaper', desc: 'Cinematic realism with smooth motion and strong scene coherence.', img: '/images/models/veo31.png' },
  { name: 'Nano Banana', badge: '3.5x Cheaper', desc: 'Fast, versatile workflows for high-quality visuals at low cost.', img: '/images/models/nanobanana.jpg' },
  { name: 'Kling 3.0', badge: null, desc: 'Reliable video generation with consistent detail and solid motion control.', img: '/images/models/kling30.jpg' },
  { name: 'Seedance 2.0', badge: 'New', desc: 'Next-gen dance and motion synthesis with expressive character animation.', img: '/images/models/seedance.png' },
  { name: 'Hailuo 2.3', badge: null, desc: 'Clean stylized results with strong atmosphere and mood control.', img: '/images/models/hailuo.png' },
  { name: 'Wan 2.6', badge: null, desc: 'Flexible creative engine for stylized motion and experimental looks.', img: '/images/models/wan26.png' },
]

const workflows = [
  'Text to Video', 'Image to Video', 'Start-to-End', 'Face Swap', 'Lip Sync', 'Style Transfer',
  'Camera Transfer', 'Motion Transfer', 'Fashion Stylist', 'Emotion Transfer', 'Light Transfer',
  'Drawing to Real', 'Video Upscale', 'Skin Restoration', 'Character Swap', 'Model Posing', 'AI UGC Ads',
]

const heroImages = [
  '/images/models/sora2pro.png', '/images/models/kl-fall.png', '/images/models/grillz.jpg',
  '/images/models/kling30.jpg', '/images/models/hailuo.png', '/images/models/wan26.png',
  '/images/models/nanobanana.jpg', '/images/models/veo31.png', '/images/models/earth.jpg',
  '/images/models/kl-tube.jpg', '/images/models/laptop-guy.png', '/images/models/solar.jpg',
]

const samplePrompts = [
  { title: 'Desert Warrior Walk', model: 'Veo 3.1 S2E', prompt: 'Two people standing in the Saharan desert wearing cream desert headwraps. Slow dolly push-in, golden hour rim lighting.' },
  { title: 'Porsche Highway POV', model: 'Kling 3.0 S2E', prompt: 'POV inside Porsche cockpit on Malaysian highway. Two motorcycles rip past at insane speed.' },
  { title: 'Anime Style Transform', model: 'Veo 3.1 T2V', prompt: 'Transform real footage into vibrant anime — cel-shading, speed lines, expressive animation.' },
  { title: 'Glitch Portal', model: 'Wan 2.6', prompt: 'Reality glitches — digital artifacts, RGB split, neon portal tears open. Cyberpunk mood.' },
  { title: 'Time Freeze Bullet', model: 'Seedance 2.0', prompt: 'Bullet time freeze — camera orbits 360, particles frozen. Speed ramp to real-time.' },
  { title: 'Food Commercial', model: 'Sora 2 Pro', prompt: 'Extreme close-up nasi lemak — sambal drizzle slow motion, steam rising. Macro lens.' },
  { title: 'AI UGC Testimonial', model: 'Kling 3.0', prompt: 'Casual selfie-style girl excitedly reviewing skincare product in bathroom. Natural lighting, authentic energy, slight camera shake.' },
]

const courses = [
  { emoji: '💡', title: 'AI Campaign Lab', lessons: 12, value: 'RM849' },
  { emoji: '🎬', title: 'AI Video Creation', lessons: 18, value: 'RM1,069' },
  { emoji: '🧠', title: 'AI Avatar Course', lessons: 10, value: 'RM849' },
  { emoji: '🎥', title: 'Idea to Viral Ad', lessons: 8, value: 'RM425' },
  { emoji: '📈', title: 'Launch & Earn', lessons: 14, value: 'RM639' },
  { emoji: '📅', title: '7-Day IG Launch', lessons: 7, value: 'RM209' },
  { emoji: '🔥', title: '100 Prompts Pack', lessons: null, value: 'RM125' },
  { emoji: '👄', title: 'AI Lip Sync', lessons: 6, value: 'RM399' },
]

const pricingPlans = [
  { name: 'Starter', price: 10, concurrent: 4, desc: 'Try it out.', badge: null, popular: false, features: ['4 simultaneous generations', 'All AI models', 'Basic workflows', 'Community access', 'Sample prompts', 'Top up credits from RM10'] },
  { name: 'Creator', price: 250, concurrent: 20, desc: 'For serious creators.', badge: 'Most Popular', popular: true, features: ['20 simultaneous generations', 'All AI models', 'All 17+ workflows', 'All courses (RM4,564+)', 'Full prompts library', 'Priority queue', 'Top up credits from RM10'] },
  { name: 'Studio', price: 500, concurrent: null, desc: 'For teams & agencies.', badge: 'Best Value', popular: false, features: ['Unlimited simultaneous generations', 'All models + early access', 'All workflows + custom', 'All courses + first access', 'Exclusive prompts', 'Priority queue', '1-on-1 support'] },
]

const WHATSAPP_NUMBER = '601121677672'

function ScrollReveal({ children, className, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function WaitlistPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', plan: 'Creator' })
  const heroRef = useRef(null)
  const marqueeRef = useRef(null)
  const bigTextRef = useRef(null)

  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const { scrollYProgress: bigTextProgress } = useScroll({ target: bigTextRef, offset: ['start end', 'end start'] })

  const heroY = useTransform(heroProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(heroProgress, [0, 0.6], [1, 0])
  const heroScale = useTransform(heroProgress, [0, 0.6], [1, 0.9])

  const bigTextX1 = useTransform(bigTextProgress, [0, 1], ['10%', '-30%'])
  const bigTextX2 = useTransform(bigTextProgress, [0, 1], ['-10%', '30%'])
  const bigTextRotate = useTransform(bigTextProgress, [0, 1], [-3, 3])

  const smoothBigTextX1 = useSpring(bigTextX1, { stiffness: 50, damping: 20 })
  const smoothBigTextX2 = useSpring(bigTextX2, { stiffness: 50, damping: 20 })

  const scrollToForm = () => {
    document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const plan = pricingPlans.find(p => p.name === form.plan)
    const msg = `🎬 *MotionBoards*\n\nHi! I'd like to join.\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Phone:* ${form.phone}\n*Plan:* ${form.plan} (RM${plan?.price}/mo)`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <div className="mb-page">
      <Navigation />

      {/* ══════ HERO ══════ */}
      <section className="mb-hero" ref={heroRef}>
        {/* Floating images behind text */}
        <div className="mb-hero-images">
          {heroImages.map((src, i) => (
            <motion.div
              key={i}
              className={`mb-hero-float mb-hero-float-${i}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
              style={{ y: heroY }}
            >
              <img src={src} alt="" />
            </motion.div>
          ))}
        </div>

        <motion.div className="mb-hero-content" style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}>
          <motion.div
            className="mb-hero-badge-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="mb-hero-badge">⚡ MotionBoards</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            THE CREATOR-FIRST<br />
            <span className="text-accent">AI VIDEO</span> PLATFORM
          </motion.h1>

          <motion.p
            className="mb-hero-sub"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            7+ AI models. 16+ workflows. One board. Top up and generate.
          </motion.p>

          <motion.div
            className="mb-hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <button className="btn btn-primary btn-xl" onClick={scrollToForm}>Start now</button>
            <button className="btn btn-ghost btn-xl" onClick={() => document.getElementById('models-section')?.scrollIntoView({ behavior: 'smooth' })}>See models</button>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════ BIG SCROLLING TEXT ══════ */}
      <section className="mb-bigtext" ref={bigTextRef}>
        <motion.div className="mb-bigtext-row" style={{ x: smoothBigTextX1, rotate: bigTextRotate }}>
          <span>7+ MODELS</span>
          <span className="accent">•</span>
          <span>16+ WORKFLOWS</span>
          <span className="accent">•</span>
          <span>5x CHEAPER</span>
          <span className="accent">•</span>
          <span>TOP UP & GENERATE</span>
        </motion.div>
        <motion.div className="mb-bigtext-row row2" style={{ x: smoothBigTextX2, rotate: bigTextRotate }}>
          <span className="accent">SORA</span>
          <span>VEO</span>
          <span className="accent">KLING</span>
          <span>SEEDANCE</span>
          <span className="accent">HAILUO</span>
          <span>WAN</span>
          <span className="accent">NANO BANANA</span>
        </motion.div>
      </section>

      {/* ══════ AI MODELS ══════ */}
      <section className="mb-section" id="models-section">
        <div className="container">
          <ScrollReveal>
            <p className="mb-eyebrow">Best-in-class AI models. Zero babysitting. 5x Cheaper</p>
          </ScrollReveal>
          <div className="mb-models-marquee">
            <div className="mb-models-track">
              {[...aiModels, ...aiModels].map((m, i) => (
                <div key={i} className="mb-model-card">
                  <div className="mb-model-thumb">
                    <img src={m.img} alt={m.name} loading="lazy" />
                    {m.badge && <span className={`mb-model-badge ${m.badge === 'New' ? 'new' : ''}`}>{m.badge}</span>}
                  </div>
                  <h4>{m.name}</h4>
                  <p>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mb-note">*vs. average pricing on leading AI video platforms</p>
        </div>
      </section>

      {/* ══════ FEATURE BLOCKS (Leonardo-style) with videos ══════ */}
      <section className="mb-section mb-features-section">
        <div className="container">
          <FeatureBlock
            title="BRING VISUALS INTO MOTION"
            desc="Turn static ideas into dynamic video content with AI-driven animation and motion tools designed for storytelling, social, and product experiences."
            video="/videos/city-fall.mp4"
            label="VIDEO"
            labelColor="#f26522"
            reverse={false}
          />
          <FeatureBlock
            title="CREATE WITHOUT LIMITS"
            desc="Generate high-quality visuals from simple prompts. Tailored to your aesthetic and built to scale across concepts, styles, and use cases."
            video="/videos/pepe-frog.mp4"
            label="IMAGE"
            labelColor="#ec4899"
            reverse={true}
          />
          <FeatureBlock
            title="EDIT WITH PRECISION"
            desc="Edit images and video while preserving characters, composition, style. Refine, adjust, and perfect your work without starting over."
            video="/videos/desert-portrait.mp4"
            label="EDITING"
            labelColor="#22c55e"
            reverse={false}
          />
        </div>
      </section>

      {/* ══════ VIDEO SHOWCASE ══════ */}
      <section className="mb-section mb-showcase-section">
        <div className="container">
          <ScrollReveal>
            <div className="mb-section-header">
              <h2>WHAT YOU'RE SEEING IS<br /><span className="text-accent">AI GENERATED</span></h2>
              <p>No filters. No polish. No lies. Real output from MotionBoards.</p>
            </div>
          </ScrollReveal>
          <div className="mb-showcase-grid">
            {[
              { src: '/videos/cinematic-girl.mp4', label: 'Cinematic Portrait' },
              { src: '/videos/desert-grillz.mp4', label: 'Desert Buckingham' },
              { src: '/videos/capsule.mp4', label: 'Sci-Fi Capsule' },
              { src: '/videos/basketball.mp4', label: 'AI Animation' },
              { src: '/videos/ugc-girl.mp4', label: 'UGC Style' },
              { src: '/videos/desert-portrait.mp4', label: 'Character Portrait' },
            ].map((v, i) => (
              <motion.div
                key={i}
                className="mb-showcase-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
              >
                <video src={v.src} autoPlay muted loop playsInline preload="auto" webkit-playsinline="true" />
                <span className="mb-showcase-label">{v.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ WORKFLOWS MARQUEE ══════ */}
      <section className="mb-section mb-workflows-section" ref={marqueeRef}>
        <div className="container">
          <ScrollReveal>
            <div className="mb-section-header">
              <h2>16+ Optimized Workflows</h2>
              <p>Battle-tested. Pick a workflow, describe what you want, generate.</p>
            </div>
          </ScrollReveal>
        </div>
        <div className="mb-marquee">
          <div className="mb-marquee-track">
            {[...workflows, ...workflows].map((w, i) => (
              <span key={i} className="mb-marquee-item">{w}</span>
            ))}
          </div>
        </div>
        <div className="mb-marquee reverse">
          <div className="mb-marquee-track">
            {[...workflows, ...workflows].reverse().map((w, i) => (
              <span key={i} className="mb-marquee-item outlined">{w}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ PROMPTS — Big text + cards ══════ */}
      <PromptsBigSection prompts={samplePrompts} scrollToForm={scrollToForm} />

      {/* ══════ BUILT FOR CREATORS (Leonardo "Built for Makers" style) ══════ */}
      <section className="mb-section mb-builtfor-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="mb-builtfor-title">
              BUILT FOR<br /><span className="accent">CREATORS</span>
            </h2>
          </ScrollReveal>
          <div className="mb-builtfor-grid">
            <ScrollReveal>
              <div className="mb-builtfor-card">
                <span className="mb-builtfor-icon">💬</span>
                <h3>Creator Community</h3>
                <p>Free with every plan. Connect, share work, join weekly lives, and grow together.</p>
                <div className="mb-builtfor-pills">
                  <span>Feed</span><span>Weekly Lives</span><span>Challenges</span><span>Network</span>
                </div>
                <span className="mb-builtfor-tag free">FREE</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="mb-builtfor-card">
                <span className="mb-builtfor-icon">📚</span>
                <h3>8 Courses — RM4,564+</h3>
                <p>Unlock on Creator & Studio plans. Learn AI video creation from zero to pro.</p>
                <div className="mb-courses-compact">
                  {courses.map((c, i) => (
                    <div key={i} className="mb-course-chip">
                      <span>{c.emoji}</span>
                      <span>{c.title}</span>
                    </div>
                  ))}
                </div>
                <span className="mb-builtfor-tag">Creator+</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="mb-builtfor-card">
                <span className="mb-builtfor-icon">✨</span>
                <h3>Prompt Library</h3>
                <p>Battle-tested prompts for cinematic results. Copy, paste, generate — zero guesswork.</p>
                <div className="mb-builtfor-pills">
                  <span>Cinematic</span><span>Cool Effects</span><span>Product Ads</span><span>Viral Hooks</span>
                </div>
                <span className="mb-builtfor-tag">All Plans</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════ HOW IT WORKS — Big numbers ══════ */}
      <HowItWorksSection />

      {/* ══════ PRICING ══════ */}
      <section className="mb-section mb-pricing-section" id="waitlist-form">
        <div className="container">
          <ScrollReveal>
            <div className="mb-section-header">
              <h2>PRICING</h2>
              <p>More simultaneous generations = faster output. Credits on top-up basis.</p>
            </div>
          </ScrollReveal>

          <div className="mb-pricing-grid">
            {pricingPlans.map((plan, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`mb-pricing-card ${plan.popular ? 'popular' : ''}`}>
                  {plan.badge && <span className="mb-pricing-badge">{plan.badge}</span>}
                  <h3>{plan.name}</h3>
                  <p className="mb-pricing-desc">{plan.desc}</p>
                  <div className="mb-pricing-price">
                    <span className="rm">RM</span>
                    <span className="num">{plan.price}</span>
                    <span className="period">/mo</span>
                  </div>
                  <div className="mb-pricing-gens"><span className="gen-num">{plan.concurrent ?? '∞'}</span> {plan.concurrent ? 'simultaneous' : 'unlimited'}</div>
                  <div className="mb-pricing-concurrent">{plan.concurrent ? `${plan.concurrent} videos generating at once` : 'No limits on parallel generations'}</div>
                  <ul className="mb-pricing-features">
                    {plan.features.map((f, fi) => <li key={fi}>{f}</li>)}
                  </ul>
                  <button
                    className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} btn-lg mb-pricing-cta`}
                    onClick={() => {
                      setForm({ ...form, plan: plan.name })
                      setTimeout(() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' }), 100)
                    }}
                  >Get {plan.name}</button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ SIGNUP FORM ══════ */}
      <section className="mb-section mb-signup-section" id="signup-form">
        <div className="container">
          <div className="mb-signup-wrap">
            <ScrollReveal>
              <div className="mb-signup-left">
                <h2>READY TO<br /><span className="text-accent">CREATE?</span></h2>
                <p>Join MotionBoards and start generating cinematic AI videos today. We'll set you up via WhatsApp.</p>
                <div className="mb-signup-stats">
                  <div><strong>7+</strong><span>AI Models</span></div>
                  <div><strong>16+</strong><span>Workflows</span></div>
                  <div><strong>RM10</strong><span>Min Top Up</span></div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="mb-form-card">
                <form onSubmit={handleSubmit} className="mb-form">
                  <div className="mb-field">
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
                  </div>
                  <div className="mb-field">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
                  </div>
                  <div className="mb-field">
                    <label htmlFor="phone">WhatsApp *</label>
                    <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+60 12-345 6789" required />
                  </div>
                  <div className="mb-field">
                    <label htmlFor="plan">Plan</label>
                    <select id="plan" name="plan" value={form.plan} onChange={handleChange}>
                      {pricingPlans.map(p => <option key={p.name} value={p.name}>{p.name} — RM{p.price}/mo ({p.concurrent ?? '∞'} simultaneous)</option>)}
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary btn-xl mb-form-submit">
                    ⚡ Join MotionBoards — RM{pricingPlans.find(p => p.name === form.plan)?.price}/mo
                  </button>
                  <p className="mb-form-note">You'll be redirected to WhatsApp.</p>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════ FOOTER ══════ */}
      <footer className="mb-footer">
        <div className="mb-footer-big">
          <span>MOTION</span><span className="accent">BOARDS</span>
        </div>
        <div className="container">
          <p>AI Video Creation Platform by Adletic Agency</p>
          <p className="mb-footer-copy">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

/* ── Prompts Big Section ── */
function PromptsBigSection({ prompts, scrollToForm }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgX = useTransform(scrollYProgress, [0, 1], ['5%', '-15%'])

  return (
    <section className="mb-section mb-prompts-section" ref={ref}>
      <motion.div className="mb-prompts-bg-text" style={{ x: bgX }}>
        COPY & GENERATE
      </motion.div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <ScrollReveal>
          <div className="mb-section-header">
            <h2>SAMPLE PROMPTS</h2>
            <p>Battle-tested. Copy, paste, generate. No prompt engineering needed.</p>
          </div>
        </ScrollReveal>
        <div className="mb-prompts-grid">
          {prompts.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="mb-prompt-card" onClick={scrollToForm}>
                <div className="mb-prompt-top">
                  <span className="mb-prompt-model">{p.model}</span>
                </div>
                <h4>{p.title}</h4>
                <p>{p.prompt}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── How It Works Section ── */
function HowItWorksSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const lineScale = useTransform(scrollYProgress, [0.1, 0.6], [0, 1])

  const steps = [
    { num: '01', title: 'SUBSCRIBE', desc: 'From 4 simultaneous (RM10) to unlimited (RM500/mo)', color: '#f26522' },
    { num: '02', title: 'GENERATE', desc: 'Pick any AI model. Any workflow. Any style. Your choice.', color: '#ec4899' },
    { num: '03', title: 'TOP UP', desc: 'Need more? Add credits from just RM10. No waiting.', color: '#22c55e' },
  ]

  return (
    <section className="mb-section mb-how-section" ref={ref}>
      <div className="container">
        <ScrollReveal>
          <div className="mb-section-header">
            <h2>HOW IT WORKS</h2>
            <p>Generations included. Need more? Top up from RM10.</p>
          </div>
        </ScrollReveal>

        <div className="mb-how-steps">
          <motion.div className="mb-how-line" style={{ scaleY: lineScale }} />
          {steps.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="mb-how-row">
                <div className="mb-how-num-big" style={{ color: s.color }}>{s.num}</div>
                <div className="mb-how-dot" style={{ background: s.color }} />
                <div className="mb-how-info">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mb-how-callout">
            <strong>Bigger plan = more speed.</strong> Starter: 4 at once. Creator: 20 at once. Studio: Unlimited. All on top-up credits.
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

/* ── Feature Block (Leonardo-style split layout) ── */
function FeatureBlock({ title, desc, img, video, label, labelColor, reverse }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const mediaY = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <motion.div
      ref={ref}
      className={`mb-feature ${reverse ? 'reverse' : ''}`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="mb-feature-text">
        <motion.h2
          initial={{ opacity: 0, x: reverse ? 60 : -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {desc}
        </motion.p>
        <motion.div
          className="mb-feature-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button className="btn btn-ghost-sm" onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })}>Start now</button>
        </motion.div>
      </div>
      <motion.div className="mb-feature-visual" style={{ y: mediaY }}>
        {video ? (
          <video src={video} autoPlay muted loop playsInline preload="auto" webkit-playsinline="true" />
        ) : (
          <img src={img} alt={title} loading="lazy" />
        )}
        <span className="mb-feature-label" style={{ color: labelColor }}>{label}</span>
      </motion.div>
    </motion.div>
  )
}
