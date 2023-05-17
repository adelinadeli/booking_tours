import React, {  useEffect, useState } from 'react'
import background from '../../img/fon.jpg';
import '../../components/Navbar/Navbar.css';
import "../../style.scss"
import { useLocation,  } from 'react-router-dom';
import axios from 'axios';


function Tour() {
    const [tours, setTours] = useState([]);
   
    

    

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get(`/tour`)
                setTours(res.data)
                console.log(res.data)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchData();
    },)         

    
  return (
    <>
    
        <div className="text-center p-10">
            <h1 className="font-bold text-4xl ">Туры по России</h1>
        </div>
        {tours.map((tour) => (
        <section id="Projects" className="w-fit ml-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14  mb-5">
        
            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" >
                
                    <img src={`../upload/${tour.img}`} className="h-80 w-72 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
                        <span className="text-gray-400 mr-3 uppercase text-xs">{tour.name_tour}</span>
                        <p className="text-lg font-bold text-black truncate block capitalize">{tour.headline}</p>
                        <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">{tour.prise}</p>
                        
                            <div className="ml-auto">
                            <p className="text-lg font-semibold text-black cursor-auto my-3">{tour.desc}</p>
                        <p className="text-lg font-semibold text-black cursor-auto my-3">{tour.group}</p>
                        <p className="text-lg font-semibold text-black cursor-auto my-3">{tour.city}</p>
                            </div>
                            <p className="text-lg font-semibold text-black cursor-auto my-3">{tour.season_id}</p>
                        </div>
                    </div>
                
            </div>
        
        </section>
    ))}
    </>
    
  )
}

export default Tour