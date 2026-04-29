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
import Policy from './components/Policy'
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
        <Route path="/motionboards-ai-video-software" element={<WaitlistPage />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/privacy" element={<Policy />} />
      </Routes>
    </div>
  )
}

export default App
