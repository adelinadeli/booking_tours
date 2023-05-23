import React, {  useEffect, useState } from 'react'
import background from '../../img/fon.jpg';
import '../../components/Navbar/Navbar.css';
import "../../style.scss"
import { Link } from 'react-router-dom';
import axios from 'axios';


function Tour() {
    const [tours, setTours] = useState([]);
    const [seasons, setSeason] = useState('Ничего');
    const [id, setId] = useState([]);
    const [summer, setSummer] = useState([]);
    const [winter, setWinter] = useState([]);
    const [autumm, setAutumm] = useState([]);
    const [spring, setSpring] = useState([]);

   


    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get(`/tour`)
                setTours(res.data)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchData();
    },[])

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get(`/season/summer`)
                setSummer(res.data)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchData();
    },[])

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get(`/season/winter`)
                setWinter(res.data)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchData();
    },[])   

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get(`/season/autumm`)
                setAutumm(res.data)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchData();
    },[])   

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get(`/season/spring`)
                setSpring(res.data)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchData();
    },[])   
  return (
    <>
    
        <div className="text-center p-10">
            <h1 className="font-bold text-4xl ">Туры по России</h1>
        </div>


        
        <>
        <label name="contact" className="label-job" for="contactChoice1">
        <input name="contact" className="label-job"  type="radio" id="contactChoice1" onChange={(e) => {setSeason(e.target.value);}}value="Ничего"/>Сбросить филтр</label>
        
        <label name="contact" className="label-job" for="contactChoice1">
        <input name="contact" className="label-job"  type="radio" id="contactChoice1" onChange={(e) => {setSeason(e.target.value);}}value="Лето"/>Лето</label>
        
        <label name="contact" className="label-job" for="contactChoice1">
        <input name="contact" className="label-job"  type="radio" id="contactChoice1" onChange={(e) => {setSeason(e.target.value);}}value="Осень"/>Осень</label>
        
        <label name="contact" className="label-job" for="contactChoice1">
        <input name="contact" className="label-job"  type="radio" id="contactChoice1" onChange={(e) => {setSeason(e.target.value);}}value="Зима"/>Зима</label>

        <label name="contact" className="label-job" for="contactChoice1">
        <input name="contact" className="label-job"  type="radio" id="contactChoice1" onChange={(e) => {setSeason(e.target.value);}}value="Весна"/>Весна</label>
        


        
            {seasons == "Ничего" && (
                <>
                <span  id="Projects" className="w-fit ml-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14  mb-5">
                {tours.map((tour) => (
                <div key={tour.tour_id}>
                    <div  className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" >
                            <img src={`../upload/${tour.img}`} className="h-80 w-72 object-cover rounded-t-xl" />
                            <div className="px-4 py-3 w-72">
                                <span className="text-lg font-bold text-black truncate block capitalize ">{tour.name_tour}</span>
                                <p className="text-gray-400 mr-3 uppercase text-xs">{tour.headline}</p>
                                
                                <div className="ml-auto">
                                    <div className="ml-auto">
                                    <p className="text-lg font-semibold text-black cursor-auto my-1">{tour.group}</p>
                                    </div>
                                    <div className="ml-auto">
                                    <p className="text-lg font-semibold text-black cursor-auto my-1">{tour.city}</p>
                                    </div>
                                    <p className="text-lg font-semibold text-black cursor-auto my-1">{tour.season}</p>
                                    </div>
                                    <p className="text-lg font-semibold text-black cursor-auto my-1">{tour.name_type}</p>
                                    <button className="inline-flex items-center justify-center rounded-xl  px-3 py-2 text-sm font-semibold text-black shadow-sm transition-all duration-150 hover:bg-[#00000030] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 mr-8"><Link to={`/tour/${tour.tour_id}`}>Подробнее о туре</Link></button>
                                </div>
                                
                </div>
                </div>
                ))}
                </span>
                </>
                
            )}
            {seasons == "Лето" && (
                <>
                <span  id="Projects" className="w-fit ml-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14  mb-5">
                {summer.map((tour) => (
                <div key={tour.tour_id}>
                    <div  className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" >
                            <img src={`../upload/${tour.img}`} className="h-80 w-72 object-cover rounded-t-xl" />
                            <div className="px-4 py-3 w-72">
                                <span className="text-lg font-bold text-black truncate block capitalize ">{tour.name_tour}</span>
                                <p className="text-gray-400 mr-3 uppercase text-xs">{tour.headline}</p>
                                
                                <div className="ml-auto">
                                    <div className="ml-auto">
                                    <p className="text-lg font-semibold text-black cursor-auto my-1">{tour.group}</p>
                                    </div>
                                    <div className="ml-auto">
                                    <p className="text-lg font-semibold text-black cursor-auto my-1">{tour.city}</p>
                                    </div>
                                    <p className="text-lg font-semibold text-black cursor-auto my-1">{tour.season}</p>
                                    </div>
                                    <p className="text-lg font-semibold text-black cursor-auto my-1">{tour.name_type}</p>
                                    <button className="inline-flex items-center justify-center rounded-xl  px-3 py-2 text-sm font-semibold text-black shadow-sm transition-all duration-150 hover:bg-[#00000030] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 mr-8"><Link to={`/tour/${tour.tour_id}`}>Подробнее о туре</Link></button>
                                </div>
                                
                </div>
                </div>
                ))}
                </span>
                </>
                
            )}
            {seasons == "Зима" && (
                <>
                <span  id="Projects" className="w-fit ml-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14  mb-5">
                {winter.map((tour) => (
                <div key={tour.tour_id}>
                    <div  className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" >
                            <img src={`../upload/${tour.img}`} className="h-80 w-72 object-cover rounded-t-xl" />
                            <div className="px-4 py-3 w-72">
                                <span className="text-lg font-bold text-black truncate block capitalize ">{tour.name_tour}</span>
                                <p className="text-gray-400 mr-3 uppercase text-xs">{tour.headline}</p>
                                
                                <div className="ml-auto">
                                    <div className="ml-auto">
                                    <p className="text-lg font-semibold text-black cursor-auto my-1">{tour.group}</p>
                                    </div>
                                    <div className="ml-auto">
                                    <p className="text-lg font-semibold text-black cursor-auto my-1">{tour.city}</p>
                                    </div>
                                    <p className="text-lg font-semibold text-black cursor-auto my-1">{tour.season}</p>
                                    </div>
                                    <p className="text-lg font-semibold text-black cursor-auto my-1">{tour.name_type}</p>
                                    <button className="inline-flex items-center justify-center rounded-xl  px-3 py-2 text-sm font-semibold text-black shadow-sm transition-all duration-150 hover:bg-[#00000030] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 mr-8"><Link to={`/tour/${tour.tour_id}`}>Подробнее о туре</Link></button>
                                </div>
                                
                </div>
                </div>
                ))}
                </span>
                </>
                
            )}
            {seasons == "Весна" && (
                <>
                <span  id="Projects" className="w-fit ml-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14  mb-5">
                {spring.map((tour) => (
                <div key={tour.tour_id}>
                    <div  className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" >
                            <img src={`../upload/${tour.img}`} className="h-80 w-72 object-cover rounded-t-xl" />
                            <div className="px-4 py-3 w-72">
                                <span className="text-lg font-bold text-black truncate block capitalize ">{tour.name_tour}</span>
                                <p className="text-gray-400 mr-3 uppercase text-xs">{tour.headline}</p>
                                
                                <div className="ml-auto">
                                    <div className="ml-auto">
                                    <p className="text-lg font-semibold text-black cursor-auto my-1">{tour.group}</p>
                                    </div>
                                    <div className="ml-auto">
                                    <p className="text-lg font-semibold text-black cursor-auto my-1">{tour.city}</p>
                                    </div>
                                    <p className="text-lg font-semibold text-black cursor-auto my-1">{tour.season}</p>
                                    </div>
                                    <p className="text-lg font-semibold text-black cursor-auto my-1">{tour.name_type}</p>
                                    <button className="inline-flex items-center justify-center rounded-xl  px-3 py-2 text-sm font-semibold text-black shadow-sm transition-all duration-150 hover:bg-[#00000030] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 mr-8"><Link to={`/tour/${tour.tour_id}`}>Подробнее о туре</Link></button>
                                </div>
                                
                </div>
                </div>
                ))}
                </span>
                </>
                
            )}
            
            {seasons == "Осень" && (
                <>
                <span  id="Projects" className="w-fit ml-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14  mb-5">
                {autumm.map((tour) => (
                <div key={tour.tour_id}>
                    <div  className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" >
                            <img src={`../upload/${tour.img}`} className="h-80 w-72 object-cover rounded-t-xl" />
                            <div className="px-4 py-3 w-72">
                                <span className="text-lg font-bold text-black truncate block capitalize ">{tour.name_tour}</span>
                                <p className="text-gray-400 mr-3 uppercase text-xs">{tour.headline}</p>
                                
                                <div className="ml-auto">
                                    <div className="ml-auto">
                                    <p className="text-lg font-semibold text-black cursor-auto my-1">{tour.group}</p>
                                    </div>
                                    <div className="ml-auto">
                                    <p className="text-lg font-semibold text-black cursor-auto my-1">{tour.city}</p>
                                    </div>
                                    <p className="text-lg font-semibold text-black cursor-auto my-1">{tour.season}</p>
                                    </div>
                                    <p className="text-lg font-semibold text-black cursor-auto my-1">{tour.name_type}</p>
                                    <button className="inline-flex items-center justify-center rounded-xl  px-3 py-2 text-sm font-semibold text-black shadow-sm transition-all duration-150 hover:bg-[#00000030] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 mr-8"><Link to={`/tour/${tour.tour_id}`}>Подробнее о туре</Link></button>
                                </div>
                                
                </div>
                </div>
                ))}
                </span>
                </>
                
            )}
        </>
        
        
    </>
    
  )
}

export default Tour