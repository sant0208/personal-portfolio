import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import About from './components/About'
import Education from './components/Education'
import Hero from './components/Hero'
import Work from './components/Work'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Footer from './components/Footer'
const App = () => {


  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <div>
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Education/>
        <Skills/>
        <Work/>
        <Contact />
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App