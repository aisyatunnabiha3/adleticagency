import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './Navigation'
import MatrixBackground from './MatrixBackground'
import AIChat from './AIChat'
import './UI.css'

export default function UI() {
  const [currentSection, setCurrentSection] = useState('home')

  const sections = [
    { id: 'home', title: 'AI CHAT', icon: '🤖' },
    { id: 'about', title: 'ABOUT', icon: '👨‍💻' },
    { id: 'experience', title: 'EXPERIENCE', icon: '💼' },
    { id: 'projects', title: 'PROJECTS', icon: '🚀' },
    { id: 'skills', title: 'SKILLS', icon: '⚡' },
    { id: 'contact', title: 'CONTACT', icon: '📞' }
  ]

  return (
    <>
      <MatrixBackground />
      
      {/* Main UI Container */}
      <div className="ui-container">
        
        {/* Header */}
        <motion.header 
          className="header glass"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="logo neon-glow">
            <span className="glitch">FIRAZ FHANSURIE</span>
          </div>
        </motion.header>

        {/* Navigation */}
        <Navigation 
          sections={sections}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />

        {/* Main Content */}
        <motion.main className="main-content">
          <AnimatePresence mode="wait">
            {currentSection === 'home' && <AIChatSection key="home" />}
            {currentSection === 'about' && <AboutSection key="about" />}
            {currentSection === 'experience' && <ExperienceSection key="experience" />}
            {currentSection === 'projects' && <ProjectsSection key="projects" />}
            {currentSection === 'skills' && <SkillsSection key="skills" />}
            {currentSection === 'contact' && <ContactSection key="contact" />}
          </AnimatePresence>
        </motion.main>

      </div>
    </>
  )
}

function AIChatSection() {
  return (
    <motion.section 
      className="section ai-chat-section"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <AIChat />
    </motion.section>
  )
}

function AboutSection() {
  return (
    <motion.section 
      className="section about-section"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-content glass-dark">
        <h2 className="section-title neon-glow">ABOUT_ME.exe</h2>
        
        {/* Professional Summary */}
        <div className="professional-summary">
          <div className="summary-card glass">
            <h3 className="summary-title neon-glow-pink">Hello, I'm Firaz!</h3>
            <p className="summary-text">
              25-year-old software engineer from Malaysia. Founded a tech company that scaled to $20K/month revenue. 
              Passionate about AI, automation, and turning complex problems into elegant solutions.
            </p>
          </div>
        </div>

        <div className="about-main">
          <div className="about-text">
            {/* Key Info */}
            <div className="info-section">
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Age:</span>
                  <span className="info-value">25</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Location:</span>
                  <span className="info-value">Shah Alam, Malaysia</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Experience:</span>
                  <span className="info-value">6+ years</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Education:</span>
                  <span className="info-value">Computer Science Diploma</span>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="interests-section">
              <h4 className="section-subtitle neon-glow">Interests</h4>
              <div className="interests-grid">
                <div className="interest-item">🎮 Gaming</div>
                <div className="interest-item">🤖 AI & Automation</div>
                <div className="interest-item">🚀 Startups</div>
                <div className="interest-item">⚡ Problem Solving</div>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <img 
              src="/images/firaz-laptop.png" 
              alt="Firaz working on his laptop" 
              className="developer-image"
            />
          </div>
        </div>

        {/* Contact */}
        <div className="contact-info">
          <div className="contact-grid">
            <div className="contact-item">
              <span className="neon-glow-pink">📞</span> +60 11-2167 7672
            </div>
            <div className="contact-item">
              <span className="neon-glow-pink">✉️</span> ferazfhansurie@gmail.com
            </div>
            <div className="contact-item">
              <span className="neon-glow-pink">💻</span> 
              <a 
                href="https://github.com/ferazfhansurie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-link"
              >
                @ferazfhansurie
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

function ExperienceSection() {
  const experiences = [
    {
      title: "Founder & Software Engineer",
      company: "Juta Teknologi",
      period: "Sep 2023 – Aug 2025",
      location: "Shah Alam, Malaysia",
      highlights: [
        "Founded company using Facebook ads and webhook integrations",
        "Built WhatsApp AI system with team of 4, achieving 30 monthly active companies",
        "Scaled to hundreds of users processing thousands of messages",
        "Peaked at $20K/month revenue before company dissolution",
        "Learned business management and software scaling challenges"
      ]
    },
    {
      title: "Mobile Application Developer",
      company: "Code Titan",
      period: "Jan 2022 – Sep 2023",
      location: "Petaling Jaya, Malaysia",
      highlights: [
        "Developed Flutter and React Native apps",
        "Delivered new features and performance improvements",
        "Collaborated with cross-functional teams",
        "Gained experience in mobile development while exploring AI interests"
      ]
    },
    {
      title: "Web Developer (Part-time)",
      company: "Freelance & NDE Consultancy",
      period: "2019 – 2021",
      location: "UITM Segamat & Terengganu, Malaysia",
      highlights: [
        "Built websites and apps for dad's friends using PHP",
        "Worked part-time as web developer throughout diploma studies",
        "Developed corporate websites with PHP and JavaScript",
        "Optimized front-end performance and responsiveness"
      ]
    },
    {
      title: "Student & Early Developer",
      company: "Self-taught Programming",
      period: "2014 – 2019",
      location: "Malaysia",
      highlights: [
        "Started programming at age 14 with Lego robots (color detection & movement)",
        "Created games using Godot engine at age 16",
        "Pursued Diploma in Computer Science at UITM Segamat, Johor",
        "Built foundation in software development and problem-solving"
      ]
    }
  ]

  return (
    <motion.section 
      className="section experience-section"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="experience-content">
        <h2 className="section-title neon-glow">EXPERIENCE.log</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="timeline-item glass-dark"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-marker neon-glow-pink"></div>
              <div className="timeline-content">
                <h3 className="job-title neon-glow">{exp.title}</h3>
                <h4 className="company neon-glow-pink">{exp.company}</h4>
                <p className="period">{exp.period} | {exp.location}</p>
                <ul className="highlights">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function ProjectsSection() {
  const projects = [
    {
      name: "AI Sales System",
      description: "SaaS platform automating sales pipelines with AI (Web + Flutter app)",
      tech: ["React", "Flutter", "OpenAI API", "Node.js"],
      status: "Discontinued",
      link: "https://jutateknologi.com"
    },
    {
      name: "Second Brain",
      description: "WhatsApp productivity AI detecting reminders and tasks",
      tech: ["React", "Node.js"],
      status: "Discontinued",
      link: "https://app.jutateknologi.com/register"
    },
    {
      name: "Aper & Alist Databases",
      description: "Business and influencer management CRM systems",
      tech: ["JavaScript", "MySQL"],
      status: "Deployed",
      link: "https://aper-dun.vercel.app/"
    },
    {
      name: "NewText Carpet Stock",
      description: "React Native inventory tracking application",
      tech: ["React Native", "Firebase"],
      status: "Live",
      link: "https://apps.apple.com/us/app/cnb/id6743068002"
    },
    {
      name: "TdLabs Health App",
      description: "Health tools mobile application with QR code scanning, booking system, and HealthKit integration",
      tech: ["Flutter", "Yii PHP", "HealthKit"],
      status: "Published",
      link: "https://apps.apple.com/my/app/tdlabs/id1554227226"
    },
 
  ]

  return (
    <motion.section 
      className="section projects-section"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="projects-content">
        <h2 className="section-title neon-glow">PROJECTS.json</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card glass-dark"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <h3 className="project-name neon-glow">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-status">
                <span className="status-badge neon-glow-pink">{project.status}</span>
              </div>
              {project.link && (
                <div className="project-link">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link-button"
                  >
                    View Project →
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function SkillsSection() {
  const skillCategories = [
    {
      category: "Languages & Frameworks",
      skills: ["JavaScript", "React", "Node.js", "Flutter", "Python", "PHP", "Unity (C#)"]
    },
    {
      category: "AI & Automation", 
      skills: ["AI Chatbots", "Custom AI Agents", "Workflow Automation", "SaaS Platforms"]
    },
    {
      category: "Databases & Cloud",
      skills: ["MySQL", "Firebase", "MongoDB", "AWS", "Google Cloud"]
    },
    {
      category: "Mobile Development",
      skills: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      category: "Other Skills",
      skills: ["Full-Stack Development", "Product Management", "Team Leadership", "3D Development"]
    }
  ]

  return (
    <motion.section 
      className="section skills-section"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="skills-content">
        <h2 className="section-title neon-glow">SKILLS.config</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="skill-category glass-dark"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="category-title neon-glow-pink">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <motion.span 
                    key={i} 
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.05) }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function ContactSection() {
  return (
    <motion.section 
      className="section contact-section"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-content glass-dark">
        <h2 className="section-title neon-glow">CONTACT.me</h2>
        <div className="contact-info-grid">
          <motion.div 
            className="contact-card glass"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="neon-glow-pink">📧 Email</h3>
            <p>ferazfhansurie@gmail.com</p>
          </motion.div>
          
          <motion.div 
            className="contact-card glass"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="neon-glow-pink">📞 Phone</h3>
            <p>+60 11-2167 7672</p>
          </motion.div>
          
          <motion.div 
            className="contact-card glass"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="neon-glow-pink">📍 Location</h3>
            <p>Shah Alam, Selangor, Malaysia</p>
          </motion.div>
          
          <motion.div 
            className="contact-card glass"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="neon-glow-pink">🌐 LinkedIn</h3>
            <p>firazfhansurie</p>
          </motion.div>
        </div>
    
      </div>
    </motion.section>
  )
}