import React, { useState } from 'react'
import background from "../img/chris-henry-l-fJ7o__MlI-unsplash.jpg";
import axios from 'axios';


function Boking() {

	

	// const [uid, setUid] = useState("");
    // const [number_tickets, setTickets] = useState("");
    // // const [tout_schedule_id, setSchedule] = useState("");
	//   const [err, setError] = useState(null);
  
	 
	// 	const handleSubmit = async (e) => {
	// 	  e.preventDefault();
	// 	  try {
	// 		await axios.post("/booking/book", {
	// 			uid, number_tickets, tout_schedule_id : ""
	// 		});
			
	// 	  } catch (err) {
	// 		setError(err.response.data);
			
	// 	  }
	// 	};
		


	
	

  return (
    <>
    
		{/* <!-- Container --> */}
		<div class="container mx-auto">
			<div class="flex justify-center px-6 my-12">
				{/* <!-- Row --> */}
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">
					{/* <!-- Col --> */}
					<div
						class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
						style={{backgroundImage:`url(${background})`}}
					></div>
					{/* <!-- Col --> */}
					<div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 class="pt-4 text-2xl text-center">Забронируйте тур</h3>
						<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div class="mb-4 md:flex md:justify-between">
								<div class="mb-4 md:mr-2 md:mb-0">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
										Введите фамилию
									</label>
									<input
										class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="firstName"
										type="text"
										name="uid"
										placeholder="First Name"
									/>
								</div>
								<div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
										Введите имя
									</label>
									<input
										class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="lastName"
										type="text"
										name="uid"
										placeholder="Last Name"
									/>
								</div>
							</div>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
									Введите почту
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									name="uid"
									placeholder="Email"
								/>
							</div>
							<div class="mb-4 md:flex md:justify-between">
								<div class="mb-4 md:mr-2 md:mb-0">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="date">
										Дата заезда
									</label>
									<input
										class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="date"
										type="text"
										name="tout_schedule_id"
										// placeholder="******************"
									/>
									
								</div>
								<div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="count">
										Количество билетов
									</label>
									<input
										class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="count"
										type="text"
										name="number_tickets"
										// placeholder="******************"
									/>
								</div>
							</div>
							<div class="mb-6 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
								>
									Забронировать
								</button>
							</div>
							<hr class="mb-6 border-t" />
							
						</form>
					</div>
				</div>
			</div>
		</div>
	
    </>
  )
}

export default Boking