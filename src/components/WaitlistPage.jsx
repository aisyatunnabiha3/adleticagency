import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import Navigation from './Navigation'
import './WaitlistPage.css'

const MOTIONBOARDS_URL = 'https://motionboards.vercel.app'

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

const appShots = [
  {
    img: '/images/motionboards-app/01-canvas.png',
    title: 'Infinite Canvas',
    desc: 'Drop references, generate new shots, organize scenes — all on one zoomable board. Your creative flow, visualized.',
  },
  {
    img: '/images/motionboards-app/09-modelpanel.png',
    title: 'All Models, One Panel',
    desc: 'Browse the curated catalog — Veo, Nano Banana, Sora-class models — and switch in a click. No juggling tabs.',
  },
  {
    img: '/images/motionboards-app/16-darkfull.png',
    title: 'Dark Mode Native',
    desc: 'Work late without frying your eyes. The full board, toolbar, and model picker in a deep cinematic dark theme.',
  },
  {
    img: '/images/motionboards-app/14-connect.png',
    title: 'Connect Generations',
    desc: 'Chain an image into a video, a reference into a remix. The AI sees the history so every next shot stays on-brand.',
  },
  {
    img: '/images/motionboards-app/13-timeline.png',
    title: 'Timeline Editor',
    desc: 'Pick your favorite clips, stitch them into a reel. Export a finished video straight from the board — no extra app.',
  },
  {
    img: '/images/motionboards-app/08-tutorials.png',
    title: 'Built-in Tutorials',
    desc: 'Ten guided walkthroughs — from first image to start-to-end video. Learn the craft without leaving the tool.',
  },
]

const canvasTools = [
  { img: '/images/motionboards-app/02-toolbar.png', title: 'One Toolbar, Every Tool', desc: 'Select, text, draw, connect, import, export. Everything you need in one row.' },
  { img: '/images/motionboards-app/06-texttool.png', title: 'Text Annotations', desc: 'Label references, leave notes, spec shots — right on the canvas.' },
  { img: '/images/motionboards-app/07-drawtool.png', title: 'Freehand Sketching', desc: 'Draw storyboards, composition hints, arrows. Adjust color and stroke instantly.' },
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

const payPerUseFeatures = [
  'RM50 credited to use across every AI model',
  'Creator community access',
]

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

  const goToApp = () => {
    window.open(MOTIONBOARDS_URL, '_blank')
  }

  return (
    <div className="mb-page">
      <Navigation />

      {/* ══════ HERO ══════ */}
      <section className="mb-hero" ref={heroRef}>
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
            <img src="/images/motionboards-logo.jpg" alt="MotionBoards" className="mb-hero-logo" />
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
            <button className="btn btn-primary btn-xl" onClick={goToApp}>Start Creating</button>
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

      {/* ══════ BIG HERO SHOT ══════ */}
      <section className="mb-section mb-heroshot-section">
        <div className="container">
          <ScrollReveal>
            <div className="mb-section-header">
              <h2>SEE IT IN<br /><span className="text-accent">ACTION</span></h2>
              <p>The full board. Real interface. Every generation, reference, and idea — one canvas.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="mb-heroshot-frame">
              <img src="/images/motionboards-app/16-darkfull.png" alt="MotionBoards dark canvas" loading="lazy" />
              <span className="mb-heroshot-label">CANVAS</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════ INSIDE THE BOARD — FLASHBOARDS-STYLE CARDS ══════ */}
      <section className="mb-section mb-inside-section">
        <div className="container">
          <ScrollReveal>
            <div className="mb-section-header">
              <h2>INSIDE THE BOARD</h2>
              <p>Everything built into MotionBoards — designed for how creators actually work.</p>
            </div>
          </ScrollReveal>
          <div className="mb-inside-grid">
            {appShots.map((f, i) => (
              <ScrollReveal key={i} delay={(i % 3) * 0.08}>
                <div className="mb-inside-card" onClick={goToApp}>
                  <div className="mb-inside-thumb">
                    <img src={f.img} alt={f.title} loading="lazy" />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CANVAS TOOLS STRIP ══════ */}
      <section className="mb-section mb-tools-section">
        <div className="container">
          <ScrollReveal>
            <div className="mb-section-header">
              <h2>EVERY TOOL<br /><span className="text-accent">ONE CLICK AWAY</span></h2>
              <p>No menus to dig through. No tabs to switch. Just the tools, right where you need them.</p>
            </div>
          </ScrollReveal>
          <div className="mb-tools-grid">
            {canvasTools.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="mb-tools-card">
                  <div className="mb-tools-thumb">
                    <img src={t.img} alt={t.title} loading="lazy" />
                  </div>
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ FEATURE BLOCKS ══════ */}
      <section className="mb-section mb-features-section">
        <div className="container">
          <FeatureBlock
            title="BRING VISUALS INTO MOTION"
            desc="Turn static ideas into dynamic video content with AI-driven animation and motion tools designed for storytelling, social, and product experiences."
            video="/videos/city-fall.mp4"
            label="VIDEO"
            labelColor="#f26522"
            reverse={false}
            goToApp={goToApp}
          />
          <FeatureBlock
            title="CREATE WITHOUT LIMITS"
            desc="Generate high-quality visuals from simple prompts. Tailored to your aesthetic and built to scale across concepts, styles, and use cases."
            video="/videos/pepe-frog.mp4"
            label="IMAGE"
            labelColor="#ec4899"
            reverse={true}
            goToApp={goToApp}
          />
          <FeatureBlock
            title="EDIT WITH PRECISION"
            desc="Edit images and video while preserving characters, composition, style. Refine, adjust, and perfect your work without starting over."
            video="/videos/desert-portrait.mp4"
            label="EDITING"
            labelColor="#22c55e"
            reverse={false}
            goToApp={goToApp}
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

      {/* ══════ PROMPTS ══════ */}
      <PromptsBigSection prompts={samplePrompts} goToApp={goToApp} />

      {/* ══════ BUILT FOR CREATORS ══════ */}
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
                <p>Connect, share work, join weekly lives, and grow together.</p>
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
                <p>Learn AI video creation from zero to pro with our course library.</p>
                <div className="mb-courses-compact">
                  {courses.map((c, i) => (
                    <div key={i} className="mb-course-chip">
                      <span>{c.emoji}</span>
                      <span>{c.title}</span>
                    </div>
                  ))}
                </div>
                <span className="mb-builtfor-tag">Included</span>
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
                <span className="mb-builtfor-tag">Included</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════ MODEL PANEL CLOSE-UP ══════ */}
      <section className="mb-section mb-modelpanel-section">
        <div className="container">
          <div className="mb-modelpanel-wrap">
            <ScrollReveal>
              <div className="mb-modelpanel-text">
                <h2>PICK A MODEL.<br /><span className="text-accent">GENERATE.</span></h2>
                <p>
                  Every curated AI model — image, video, sound effects, voice — in a single panel.
                  Pricing surfaced up front. Click, generate, move on.
                </p>
                <ul className="mb-modelpanel-list">
                  <li>Curated top 2 cheapest per category</li>
                  <li>Pricing + speed shown before you spend</li>
                  <li>One-click switch between models</li>
                  <li>Image, video, SFX, and voice — one place</li>
                </ul>
                <button className="btn btn-primary btn-lg" onClick={goToApp}>Open MotionBoards</button>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="mb-modelpanel-shot">
                <img src="/images/motionboards-app/05-models.png" alt="Model panel" loading="lazy" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════ HOW IT WORKS ══════ */}
      <HowItWorksSection goToApp={goToApp} />

      {/* ══════ PRICING — Pay Per Use ══════ */}
      <section className="mb-section mb-pricing-section" id="pricing">
        <div className="container">
          <ScrollReveal>
            <div className="mb-section-header">
              <h2>START CREATING<br /><span className="text-accent">TODAY</span></h2>
              <p>MotionBoards is live. Register free, top up from RM50, start generating.</p>
            </div>
          </ScrollReveal>

          <div className="mb-pricing-combo">
            <ScrollReveal>
              <div className="mb-pricing-card popular">
                <span className="mb-pricing-badge">Pay Per Use</span>
                <h3>Top Up & Generate</h3>
                <p className="mb-pricing-desc">No commitments. No monthly fees. Just add credits and create.</p>
                <div className="mb-pricing-price">
                  <span className="rm">RM</span>
                  <span className="num">50</span>
                  <span className="period">min</span>
                </div>
                <div className="mb-pricing-gens">Starts at RM50</div>
                <div className="mb-pricing-concurrent">Credits unlock every model on the canvas</div>
                <ul className="mb-pricing-features">
                  {payPerUseFeatures.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                <button
                  className="btn btn-primary btn-lg mb-pricing-cta"
                  onClick={goToApp}
                >Start Creating Now</button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mb-pricing-cta-side">
                <h3>Everything you need to ship AI video — on one board.</h3>
                <p>
                  7+ AI models. 16+ workflows. One canvas. Register free, top up from
                  RM50 and the credits work across every model.
                </p>
                <div className="mb-signup-stats">
                  <div><strong>7+</strong><span>AI Models</span></div>
                  <div><strong>16+</strong><span>Workflows</span></div>
                  <div><strong>RM50</strong><span>Min Top Up</span></div>
                </div>
                <button className="btn btn-primary btn-xl mb-pricing-cta-btn" onClick={goToApp}>
                  🚀 Register Free & Start Creating
                </button>
                <p className="mb-pricing-cta-note">Free to register. Pay only when you generate.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════ FOOTER ══════ */}
      <footer className="mb-footer">
        <div className="mb-footer-big">
          <img src="/images/motionboards-logo.jpg" alt="MotionBoards" style={{ height: '60px', borderRadius: '8px' }} />
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
function PromptsBigSection({ prompts, goToApp }) {
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
              <div className="mb-prompt-card" onClick={goToApp}>
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
function HowItWorksSection({ goToApp }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const lineScale = useTransform(scrollYProgress, [0.1, 0.6], [0, 1])

  const steps = [
    { num: '01', title: 'REGISTER', desc: 'Create your free account at motionboards.vercel.app', color: '#f26522' },
    { num: '02', title: 'TOP UP', desc: 'Add credits starting from RM50. Use them on any model.', color: '#ec4899' },
    { num: '03', title: 'GENERATE', desc: 'Pick any AI model. Any workflow. Any style. Generate.', color: '#22c55e' },
  ]

  return (
    <section className="mb-section mb-how-section" ref={ref}>
      <div className="container">
        <ScrollReveal>
          <div className="mb-section-header">
            <h2>HOW IT WORKS</h2>
            <p>Register free. Top up from RM50. Start generating.</p>
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
            <strong>No subscriptions. No packages.</strong> Just top up from RM50 and generate with all 7+ AI models and 16+ workflows.
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

/* ── Feature Block ── */
function FeatureBlock({ title, desc, img, video, label, labelColor, reverse, goToApp }) {
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
          <button className="btn btn-ghost-sm" onClick={goToApp}>Try It Now</button>
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
