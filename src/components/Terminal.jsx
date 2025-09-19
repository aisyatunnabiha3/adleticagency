import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Terminal.css'

export default function Terminal({ onClose }) {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([
    { type: 'output', content: 'Welcome to FIRAZ FHANSURIE Terminal v2.0' },
    { type: 'output', content: 'Type "help" for available commands' },
    { type: 'prompt', content: 'firaz@portfolio:~$ ' }
  ])
  const [currentPath, setCurrentPath] = useState('~')
  const inputRef = useRef()
  const terminalRef = useRef()

  const commands = {
    help: () => [
      'Available commands:',
      '  help       - Show this help message',
      '  about      - About Firaz Fhansurie',
      '  skills     - List technical skills',
      '  experience - Show work experience',
      '  projects   - List projects',
      '  contact    - Contact information',
      '  clear      - Clear terminal',
      '  whoami     - Display current user',
      '  ls         - List directory contents',
      '  cat        - Display file contents',
      '  pwd        - Print working directory',
      '  exit       - Close terminal'
    ],
    
    about: () => [
      'Firaz Fhansurie - Software Engineer & AI Entrepreneur',
      '',
      'Founded and scaled Juta Teknologi to $20K/month revenue.',
      '4+ years experience in AI automation, SaaS development,',
      'and mobile applications. Passionate about building',
      'innovative solutions that make a real impact.',
      '',
      'Location: Shah Alam, Selangor, Malaysia',
      'Education: Diploma in Computer Science - UiTM (2018-2021)'
    ],
    
    skills: () => [
      'Technical Skills:',
      '',
      '├── Languages & Frameworks',
      '│   ├── JavaScript (React, Node.js)',
      '│   ├── Flutter (Dart)',
      '│   ├── React Native',
      '│   ├── Python',
      '│   ├── PHP',
      '│   └── Unity (C#)',
      '│',
      '├── AI & Automation',
      '│   ├── AI Chatbots',
      '│   ├── Custom AI Agents',
      '│   ├── Workflow Automation',
      '│   └── SaaS Platforms',
      '│',
      '├── Databases & Cloud',
      '│   ├── MySQL',
      '│   ├── Firebase',
      '│   └── MongoDB',
      '│',
      '└── Other',
      '    ├── Full-Stack Development',
      '    ├── Product Management',
      '    └── Team Leadership'
    ],
    
    experience: () => [
      'Work Experience:',
      '',
      '┌─ Founder & Software Engineer @ Juta Teknologi',
      '│  Sep 2023 – Aug 2025 | Shah Alam, Malaysia',
      '│  • Scaled from $0 → $20K/month revenue',
      '│  • Built AI Sales System, Second Brain, multiple databases',
      '│  • Delivered 10+ websites and apps for SMEs',
      '│',
      '├─ Mobile Application Developer @ Code Titan',
      '│  Jan 2022 – Sep 2023 | Petaling Jaya, Malaysia',
      '│  • Developed Flutter and React Native apps',
      '│  • Performance improvements and new features',
      '│',
      '└─ Web Developer @ NDE Consultancy Services',
      '   Sep 2021 – Dec 2021 | Terengganu, Malaysia',
      '   • Corporate websites with PHP and JavaScript',
      '   • Front-end performance optimization'
    ],
    
    projects: () => [
      'Featured Projects:',
      '',
      '🚀 AI Sales System',
      '   SaaS platform automating sales pipelines with AI',
      '   Tech: React, Flutter, OpenAI API, Node.js',
      '',
      '🧠 Second Brain',
      '   WhatsApp productivity AI detecting tasks & reminders',
      '   Tech: React, Node.js, wweb.js',
      '',
      '💼 Aper & Alist Databases',
      '   Business and influencer management CRM systems',
      '   Tech: JavaScript, MySQL, PHP',
      '',
      '📱 NewText Carpet Stock',
      '   React Native inventory tracking application',
      '   Tech: React Native, Firebase',
      '',
      '🎮 Boom Online Game',
      '   Unity multiplayer PvP shooter game',
      '   Tech: Unity, C#, Multiplayer',
      '',
      '🏥 TdLabs Health App',
      '   Health tools mobile app with QR scanning & HealthKit integration',
      '   Tech: Flutter, Yii PHP, HealthKit'
    ],
    
    contact: () => [
      'Contact Information:',
      '',
      '📧 Email:    ferazfhansurie@gmail.com',
      '📞 Phone:    +60 11-2167 7672',
      '📍 Location: Shah Alam, Selangor, Malaysia',
      '🌐 LinkedIn: firazfhansurie',
      '',
      'Ready to build amazing things together!'
    ],
    
    whoami: () => ['firaz'],
    
    pwd: () => ['/home/firaz/portfolio'],
    
    ls: () => [
      'about.md    skills.json    experience.txt',
      'projects/   contact.info   resume.pdf',
      'portfolio.js    README.md'
    ],
    
    cat: (args) => {
      const file = args[0]
      const files = {
        'about.md': () => commands.about(),
        'skills.json': () => [
          '{',
          '  "languages": ["JavaScript", "Python", "Dart"],',
          '  "frameworks": ["React", "Flutter", "Node.js"],',
          '  "specialties": ["AI Automation", "3D Web"],',
          '  "experience": "4+ years",',
          '  "achievements": ["$20K/month revenue", "10+ projects"]',
          '}'
        ],
        'README.md': () => [
          '# Firaz Fhansurie - Portfolio',
          '',
          'Welcome to my interactive 3D portfolio!',
          '',
          '## Features',
          '- 3D cyberpunk environment',
          '- Interactive terminal',
          '- Glassmorphic UI design',
          '- Particle effects and animations',
          '',
          '## Tech Stack',
          '- React + Three.js',
          '- Framer Motion',
          '- GSAP animations',
          '',
          'Built with ❤️ and lots of caffeine ☕'
        ]
      }
      
      if (!file) {
        return ['cat: missing file name', 'Usage: cat <filename>']
      }
      
      if (files[file]) {
        return files[file]()
      }
      
      return [`cat: ${file}: No such file or directory`]
    },
    
    clear: () => {
      setHistory([{ type: 'prompt', content: 'firaz@portfolio:~$ ' }])
      return []
    },
    
    exit: () => {
      onClose()
      return ['Goodbye! 👋']
    }
  }

  const handleCommand = (cmd) => {
    const [command, ...args] = cmd.trim().split(' ')
    const lowerCmd = command.toLowerCase()
    
    // Add command to history
    setHistory(prev => [
      ...prev.slice(0, -1), // Remove the prompt
      { type: 'input', content: `${currentPath}$ ${cmd}` }
    ])
    
    if (lowerCmd === 'clear') {
      commands.clear()
      return
    }
    
    let output = []
    if (commands[lowerCmd]) {
      if (lowerCmd === 'cat') {
        output = commands[lowerCmd](args)
      } else {
        output = commands[lowerCmd]()
      }
    } else if (cmd.trim() === '') {
      output = []
    } else {
      output = [`bash: ${command}: command not found`]
    }
    
    // Add output and new prompt
    setHistory(prev => [
      ...prev,
      ...output.map(line => ({ type: 'output', content: line })),
      { type: 'prompt', content: 'firaz@portfolio:~$ ' }
    ])
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input)
      setInput('')
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [history])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  return (
    <motion.div 
      className="terminal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="terminal-window glass-dark"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="terminal-buttons">
            <div className="terminal-button close" onClick={onClose}></div>
            <div className="terminal-button minimize"></div>
            <div className="terminal-button maximize"></div>
          </div>
          <div className="terminal-title">firaz@portfolio: ~</div>
        </div>
        
        {/* Terminal Content */}
        <div className="terminal-content" ref={terminalRef}>
          <AnimatePresence>
            {history.map((item, index) => (
              <motion.div 
                key={index}
                className={`terminal-line ${item.type}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                {item.type === 'prompt' ? (
                  <div className="terminal-prompt">
                    <span className="prompt-text">{item.content}</span>
                    {index === history.length - 1 && (
                      <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="terminal-input"
                        autoComplete="off"
                        spellCheck="false"
                      />
                    )}
                  </div>
                ) : (
                  <span className={item.type === 'input' ? 'input-text' : 'output-text'}>
                    {item.content}
                  </span>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}