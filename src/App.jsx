import React from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default App
