import React from 'react'

function Appointment() {
  return (
    <>
    <div class="max-w-md mt-10 mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="text-2xl mt-10 py-4 px-6 bg-indigo-500 text-white text-center font-bold uppercase">
        Book an Appointment
    </div>
    <form class="py-4 px-6" action="" method="POST">
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="name">
                Name
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name" type="text" placeholder="Enter your name"/>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="email">
                Email
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email" type="email" placeholder="Enter your email"/>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="phone">
                Phone Number
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone" type="tel" placeholder="Enter your phone number"/>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="date">
                Date
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="date" type="date" placeholder="Select a date"/>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="time">
                Time
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="time" type="time" placeholder="Select a time"/>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="service">
                Service
            </label>
            <select
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="service" name="service">
                <option value="">Book Car</option>
                <option value="haircut">Test Drive</option>
                <option value="coloring">Consultaion</option>
                <option value="styling">Pick Up</option>
                <option value="facial">drop off</option>
            </select>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="message">
                Message
            </label>
            <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message" rows="4" placeholder="Enter any additional information"></textarea>
        </div>
        <div class="flex items-center justify-center mb-4">
            <button
                class="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                type="submit">
                Book Appointment
            </button>
        </div>

    </form>
</div>
    </>
  )
}

export default Appointment