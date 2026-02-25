import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/#' + id)
    }
    setMenuOpen(false)
  }

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'results', label: 'Results' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => scrollTo('home')}>
          <img src="/images/Adetic.png" alt="Adletic Agency" />
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <button key={link.id} className="nav-link" onClick={() => scrollTo(link.id)}>
              {link.label}
            </button>
          ))}
          <button className="nav-waitlist-btn" onClick={() => { navigate('/ai-video-creation-community-waitlist'); setMenuOpen(false) }}>
            🎬 AI Video Waitlist
          </button>
          <button className="btn btn-primary nav-cta-mobile" onClick={() => scrollTo('contact')}>
            Get Started
          </button>
        </div>

        <div className="nav-right-btns">
          <button className="nav-waitlist-btn nav-waitlist-desktop" onClick={() => navigate('/ai-video-creation-community-waitlist')}>
            🎬 AI Video Waitlist
          </button>
          <button className="btn btn-primary nav-cta-desktop" onClick={() => scrollTo('contact')}>
            Get Started
          </button>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}
    </nav>
  )
}
