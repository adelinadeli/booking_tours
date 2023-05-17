import React, { useState } from 'react'
import Fon from '../../img/sylvain-mauroux-OIuzDRYA3cw-unsplash.jpg';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";



function PotborTour() {

    const [inputs, setInputs] = useState({
      user_name: "",
      phone_number: "",
      email: "",
    });
    // const [err,setError] = useState(null);
    const handleChange = (e) => {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const [err, setError] = useState(null);
    const navigate = useNavigate();
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post("/authuser/application", inputs);
          navigate("/");
        } catch (err) {
          setError(err.response.data);
        }
      };
  
  return (
  

    <div className="flex flex-wrap">
    <div className="w-full sm:w-8/12 ">
      <div className="container mx-auto h-full sm:p-10">
        <nav className="flex px-4 justify-between items-center">
          <div className="text-4xl font-bold">
            Plant<span className="text-green-700">.</span>
          </div>
          <div>
            <img src="" alt="" className="w-8"/>
          </div>
        </nav>
        <header className="container px-4 lg:flex  items-center h-full lg:mt-0">
          <div className="w-full ">
            <h1 className="text-4xl lg:text-6xl font-bold">Заявка <span className="text-green-700">на</span> подбор тура</h1>
            <div className="max-w-md mr-auto mt-10 mb-10">
                <form className="p-0">
                    <div className="mb-4">
                        <label htmlFor="user_name" className="block text-gray-700 font-bold mb-2">Имя</label>
                        <input onChange={handleChange}type="text" id="user_name" name="user_name" className="w-full py-2 px-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone_number" className="block text-gray-700 font-bold mb-2">Телефон</label>
                        <input type="tel" pattern="2[0-9]{3}-[0-9]{3}" onChange={handleChange} id="phone_number" name="phone_number" className="w-full py-2 px-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Почта</label>
                        <input type="email" onChange={handleChange} id="email" name="email" className="w-full py-2 px-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="flex items-center justify-between">
                         <button onClick={handleSubmit} className="bg-green-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">Отправить</button>
                    </div>
                </form>
            </div>
          </div>
        </header>
      </div>
    </div>
    <img src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Leafs" className="w-full h-48 object-cover sm:h-screen sm:w-4/12"/>
  </div>
  )
}

export default PotborTour