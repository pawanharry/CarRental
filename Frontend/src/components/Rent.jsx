import React from 'react'
import about from '../../src/assets/about.jpg'
import car from '../../src/assets/car.jpg'
import luxury from '../../src/assets/luxury.jpg'
import cars from '../../src/assets/cars.jpg'

export default function Rent() {
  return (
   <>
   <div className='mt-8 bg-indigo-50'>
   <div class="flex pt-2 justify-center text-2xl font-sans items-center">

<h2 class="my-4 font-bold text-3xl  sm:text-4xl ">Most <span class="text-indigo-600">Demanded Cars</span>
</h2>
</div>
<br />
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10 md:px-20">
    <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <div class="relative">
            <img class="w-full h-48 object-cover" src={about}/>
            <div class="absolute top-0 right-0 bg-indigo-500 text-white font-bold px-2 py-1 m-2 rounded-md">Book Now
            </div>
           
        </div>
        <div class="p-4">
        <div className='flex flex-col'>
            <div class="text-lg font-medium text-gray-800 mb-2">Lexus</div>
            </div>
            <p class="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed
                egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.</p>
        </div>
    </div>


    <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <div class="relative">
            <img class="w-full h-48 object-cover" src={car}/>
            <div class="absolute top-0 right-0 bg-indigo-500 text-white font-bold px-2 py-1 m-2 rounded-md">Book Now
            </div>
        </div>
        <div class="p-4">
            <div class="text-lg font-medium text-gray-800 mb-2">bugati</div>
            <p class="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed
                egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.</p>
        </div>
    </div>


    <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <div class="relative">
            <img class="w-full h-48 object-cover" src={luxury}/>
            <div class="absolute top-0 right-0 bg-indigo-500 text-white font-bold px-2 py-1 m-2 rounded-md">Book Now
            </div>
            
        </div>
        <div class="p-4">
            <div class="text-lg font-medium text-gray-800 mb-2">Lemosine</div>
            <p class="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed
                egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.</p>
        </div>
    </div>

    <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <div class="relative">
            <img class="w-full h-48 object-cover" src={cars}/>
            <div class="absolute top-0 right-0 bg-indigo-500 text-white font-bold px-2 py-1 m-2 rounded-md">Book Now
            </div>
        </div>
        <div class="p-4">
            <div class="text-lg font-medium text-gray-800 mb-2">lemosine</div>
            <p class="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed
                egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.</p>
        </div>
    </div>


    <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <div class="relative">
            <img class="w-full h-48 object-cover" src={about}/>
            <div class="absolute top-0 right-0 bg-indigo-500 text-white font-bold px-2 py-1 m-2 rounded-md">Book Now
            </div>
        </div>
        <div class="p-4">
            <div class="text-lg font-medium text-gray-800 mb-2">Rav4</div>
            <p class="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed
                egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.</p>
        </div>
    </div>


    <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <div class="relative">
            <img class="w-full h-48 object-cover" src={luxury}/>
            <div class="absolute top-0 right-0 bg-indigo-500 text-white font-bold px-2 py-1 m-2 rounded-md">Book Now
            </div>
        </div>
        <div class="p-4">
            <div class="text-lg font-medium text-gray-800 mb-2">Range Rover</div>
            <p class="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed
                egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.</p>
        </div>
    </div>

    </div>
</div>
   </>
  )
}
