import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Hero'
import Services from '../Services'
import Contact from '../Contact'
import Rent from '../Rent'
import Footer from '../Footer'
import About from '../About'

function Home() {
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

export default Home