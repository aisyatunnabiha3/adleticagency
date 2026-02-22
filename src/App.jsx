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
import './App.css'

function App() {
  return (
    <div className="app">
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
    </div>
  )
}

export default App
