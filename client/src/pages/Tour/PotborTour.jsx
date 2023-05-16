import React from 'react'
import Fon from '../../img/sylvain-mauroux-OIuzDRYA3cw-unsplash.jpg';



function PotborTour() {
  return (
  

    <div class="flex flex-wrap">
    <div class="w-full sm:w-8/12 ">
      <div class="container mx-auto h-full sm:p-10">
        <nav class="flex px-4 justify-between items-center">
          <div class="text-4xl font-bold">
            Plant<span class="text-green-700">.</span>
          </div>
          <div>
            <img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" class="w-8"/>
          </div>
        </nav>
        <header class="container px-4 lg:flex  items-center h-full lg:mt-0">
          <div class="w-full ">
            <h1 class="text-4xl lg:text-6xl font-bold">Заявка <span class="text-green-700">на</span> подбор тура</h1>
            <div class="max-w-md mr-auto mt-10 mb-10">
                <form class="p-0">
                    <div class="mb-4">
                        <label for="email" class="block text-gray-700 font-bold mb-2">Имя</label>
                        <input type="email" id="email" name="email" class="w-full py-2 px-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-500" placeholder="Enter your email address"/>
                    </div>
                    <div class="mb-4">
                        <label for="password" class="block text-gray-700 font-bold mb-2">Телефон</label>
                        <input type="password" id="password" name="password" class="w-full py-2 px-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-500" placeholder="Enter your password"/>
                    </div>
                    <div class="flex items-center justify-between">
                        <a href="#"
                            class="text-gray-500 hover:text-blue-500 focus:outline-none focus:underline transition duration-150 ease-in-out">Forgot
                            Password?</a>
                        <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition duration-150 ease-in-out">Submit</button>
                    </div>
                </form>
            </div>
            <button class="bg-green-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">Learn More</button>
          </div>
        </header>
      </div>
    </div>
    <img src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Leafs" class="w-full h-48 object-cover sm:h-screen sm:w-4/12"/>
  </div>
  )
}

export default PotborTour