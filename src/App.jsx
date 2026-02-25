import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Services from './components/Services'
import Solution from './components/Solution'
import Pricing from './components/Pricing'
import Proof from './components/Proof'
import Objections from './components/Objections'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WaitlistPage from './components/WaitlistPage'
import './App.css'

function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <Problem />
      <Services />
      <Solution />
      <Pricing />
      <Proof />
      <Objections />
      <Contact />
      <Footer />
    </>
  )
}

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ai-video-creation-community-waitlist" element={<WaitlistPage />} />
      </Routes>
    </div>
  )
}

export default App
