import React, { useEffect, useState } from 'react'

function Navbar() {

 
  
  
  const [sticky,setStickey]=useState(false)
  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY>0){
        setStickey(true)
      }
      else {
        setStickey(true)
  
      }
    }
    window.addEventListener('scroll',handleScroll)
    return () =>{
      window.removeEventListener('scroll',handleScroll)
    }
  
  },[])
  


    const navItems=(
        <>
        <li><a  className='hover:underline decoration-indigo-500  underline-offset-4'>About Us</a></li>
        <li><a className='hover:underline decoration-indigo-500  underline-offset-4'>Rent a Car</a></li>
        <li><a className='hover:underline decoration-indigo-500  underline-offset-4'>Services</a></li>
        <li><a className='hover:underline decoration-indigo-500  underline-offset-4'>Contact Us</a></li>
        </>
    )

   
  return (
    <>
    <div className={` bg-black w-full  fixed top-0 left-0 right-0 z-50  bg-opacity-0${
      sticky?"sticky-navbar shadow-md bg-opacity-60 bg-black-500  dark:bg-slate-600 dark:text-white duration-300 transition-all ease-in-out":""}
    `}>
    <div className="navbar text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navItems}
      </ul>
    </div>
    <a className=" text-xl  font-bold">LuxeRide</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-md">Book Now</a>
  </div>
</div>
    </div>
    </>
  )
}

export default Navbar