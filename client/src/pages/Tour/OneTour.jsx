import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import moment from "moment";
import "moment/locale/ru";

function OneTour() {
    const [tour, setTour] = useState([]);
    const [schedules, setSchedule] = useState([]);
    const [date, setDate] = useState([]);
   
    
    const location = useLocation();
    const tourId = location.pathname.split("/")[2];

    

    console.log(schedules)

    useEffect (()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get(`/tours/${tourId}`);
                setTour(res.data)
                // console.log(res.data)
            }catch(err){
                console.log(err);
            }
        }
        fetchData()
    },[tourId]);

    useEffect (()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get(`/tours/schedule/${tourId}`);
                setSchedule(res.data)
                // console.log(res.data)
            }catch(err){
                console.log(err);
            }
        }
        fetchData()
    },[tourId]);

    
  return (
    <>
        <div className="single">
            <div className="content">
        <div className="bg-white max-w-2xl text-center shadow overflow-hidden sm:rounded-lg">
            
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                {tour.name_tour}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Подробности и информация о туре.
                </p>
            </div>
            
            <div className="border-t border-gray-200">
                <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                        Тур
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {tour.name_tour}
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Цена
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {tour.prise} руб./чел.
                        </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Сезон
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {tour.season}
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Регион
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {tour.season}
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Город 
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {tour.city}
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Проживание
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {tour.accommodation}
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Вид тура
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {tour.name_type}
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Даты тура
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        
                            {(        <select  onChange={(e) => {
                                                setDate(e.target.value);
                                            }}>
                                                    
                                            <option disabled="disabled">Выберите дату</option>
                                              <>      
                                            {
                                            schedules.map(schedule => {
                                                    
                                                return <option id="option" key={schedule.tout_schedule_id} value={schedule.tout_schedule_id}>
                                                    {moment(schedule.start_tout_schedule).format("D MMMM YYYY [года]")} - {moment(schedule.end_tout_schedule).format("D MMMM YYYY [года]")}
                                                    {/* {schedule.start_tout_schedule} - {schedule.end_tout_schedule} */}
                                                </option>
                                                    

                                            })}
                                             </>       
                                        </select>)}
                            
                        
                        
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Количество мест
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {tour.group}
                        </dd>
                    </div>
                    <button>hgjgjhghjh</button>
                </dl>
                
            </div>
        </div>
        </div>
        <div className="menu">
        <div className=" px-10 flex-1">
                <img src={`../upload/${tour.img}`} alt="" srcset="" />
        </div>
        </div>
        </div>
       
        
        <div className="py-10">
               <p>{tour.desc}</p>
        </div>
    </>
  )
}

export default OneTour