import React, { useEffect, useState } from 'react'

function Navbar() {
    const navItems=(
        <>
        <li><a className='hover:underline decoration-orange-500  underline-offset-4'>About Us</a></li>
        <li><a className='hover:underline decoration-orange-500  underline-offset-4'>Rent a Car</a></li>
        <li><a className='hover:underline decoration-orange-500  underline-offset-4'>Services</a></li>
        <li><a className='hover:underline decoration-orange-500  underline-offset-4'>Contact Us</a></li>
        </>
    )

   
  return (
    <>
    <div className=" bg-transparent w-full  fixed top-0 left-0 right-0 z-50  bg-opacity-0">
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
    <a className="btn btn-ghost text-xl">LuxeRide</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="border-4 border-orange-200 border-t-orange-500 pl-5 pr-5">Book Now</a>
  </div>
</div>
    </div>
    </>
  )
}

export default Navbar