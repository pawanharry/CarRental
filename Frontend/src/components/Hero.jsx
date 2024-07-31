import React from 'react'
import car from '../../src/assets/car.jpg'

function Hero() {
  return (
    <>
    <div>
        
    <div
  className="hero min-h-screen">
  <img src={car} alt='hero'/>
  <div className="hero-overlay bg-opacity-60">
  </div>
  
  <div className="hero-content text-neutral-content text-center ">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hire a Luxury Car in a Click</h1>
      
      <button className="pl-10 pr-10 pt-3 pb-3 border-2 border-orange-500 ">Get Started</button>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Hero