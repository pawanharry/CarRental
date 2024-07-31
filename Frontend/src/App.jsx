import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'
import Rent from './components/Rent'
import Contact from './components/Contact'



const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Rent/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App