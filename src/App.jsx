import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import Benefits from './components/Benefits'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Services />
      <Benefits />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default App