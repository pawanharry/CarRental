import React from 'react'
import cars from '../../src/assets/cars.jpg'

function Hero() {
  return (
    <>
    <div>
        
    <div  className="hero min-h-screen"
    style={{
    backgroundImage: "url(./src/assets/cars.jpg)",
  }}>
    <div class="container  mt-10 mx-auto px-6 md:px-12">
      <div className='flex flex-col'>
        <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 lg:w-2/3">
                <h1 class="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
                <span class="text-indigo-500"> Luxury</span> at your <br class="hidden md:block" />fingertips, <br class="hidden md:block" />
                    <span class="text-indigo-500">adventure </span>in <br class="hidden md:block" />every mile
                </h1>
               
                <div class="flex gap-2">
                    <a href="#" class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-md">Get
                        Started
                    </a>
                    
                </div>
                </div>
                </div>

                <div className='pt-8 px-6 mt-8 md:w-2/3 lg:w-full mx-auto'>
 
  
                    <div class="isolate rounded-xl bg-white/20 shadow-lg ">
                    <div class="p-4 rounded-lg flex flex-col md:flex-row md:space-x-4 items-center w-full ">
  <div class="stat flex-1 ">
    <div class="flex items-center">
      <div class="stat-figure text-secondary mr-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

      </div>
      <div class="flex flex-col">
        <div class="stat-title text-white">Pickup Loacation</div>
        <div class="relative inline-block text-left">
    <div class="group">
        <button type="button"
            class="w-full rounded-md border border-gray-300 py-3 px-4 text-white bg-transparent outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
            
            <svg class="w-4 h-4 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 12l-5-5h10l-5 5z" />
            </svg>
        </button>

       
        <div
            class="absolute left-0 w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
            <div class="py-1">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Brampton</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Kitchener</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Toronto</a>
            </div>
        </div>
    </div>
</div>
      </div>
    </div>
  </div>

  <div class="border-l border-gray-200 h-full"></div>

  <div class="stat flex-1">
    <div class="flex items-center">
      <div class="stat-figure text-secondary mr-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
</svg>




      </div>
      <div class="flex flex-col">
     
      <div class="stat-title text-white">Pickup Date</div>
  

  <label for="date" class="text-base font-medium text-white">
  
  </label>
  <input type="date" id="date" name="date"
         class="w-full rounded-md border border-gray-300 py-3 px-4 text-white bg-transparent outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"/>




      </div>
    </div>
  </div>

  <div class="border-l border-gray-200 h-full"></div>

  <div class="stat flex-1">
    <div class="flex items-center">
      <div class="stat-figure text-secondary mr-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

      </div>
      <div class="flex flex-col">
        <div class="stat-title text-white">Pickup Time</div>
        <label for="time" class="text-base font-medium text-white">
          

</label>

<input type="time" id="time" name="time"

       class="w-full rounded-md border border-gray-300 py-3 px-4 text-white bg-transparent outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"/>
      
      </div>
      
    </div>
  </div>

  <div class="border-l border-gray-200 h-full"></div>

<div class="stat flex-1">
  <div class="flex items-center">
    <div class="stat-figure text-secondary mr-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

    </div>
    <div class="flex flex-col">
      <div class="stat-title text-white">Return Date</div>
      
  

  <label for="date" class="text-base font-medium text-white">
  
  </label>
  <input type="date" id="date" name="date"
         class="w-full rounded-md border border-gray-300 py-3 px-4 text-white bg-transparent outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"/>




      </div>
  </div>
</div>

  <div class="flex-1 flex justify-end items-center">
    <a href='/appointment' class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-16 rounded-md">Book Car</a>
  </div>
</div>

                  </div>
            </div>
        
    </div>


   

</div>


   
      
    </div>
</div>
   
    </>
  )
}

export default Hero