import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom';
import moment from "moment";
import "moment/locale/ru";

function ToursAdmin() {
    const [toursA, setToursA] = useState([]);
    const [tours, setTours] = useState([]);
    const navigate = useNavigate();
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/tour`);
                setToursA(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/toutschedule`);
                setTours(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);
    const location = useLocation();
    // const navigate = useNavigate();

    const tourId = location.pathname.split("/")[2];
    const handleDelete = async e  => {
        e.preventDefault()
        try {
            await axios.delete(`/tour/${tourId}`);
            const res = await axios.get(`/tour`);
            setToursA(res.data);
        } catch (err) {
            console.log(err);
        }
    };

   return (
        <>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">#</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Название тура</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Подзаголовок тура</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Описание тура</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Количество чел/тур</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Город</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Цена</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Фотография</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Уровень сложности</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Сезон</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Вид тура</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Место проживание</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Редактировать</th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Удалить</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {toursA.map((tour) => (
                                        <tr className="border-b" key={tour.tour_id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{tour.tour_id}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{tour.name_tour}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{tour.headline}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{tour.desc}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{tour.group}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{tour.city}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{tour.prise}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{tour.img}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{tour.level}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{tour.season}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{tour.name_type}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{tour.accommodation}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><Link to={`/edittour/${tour.tour_id}`}>Редактировать</Link></td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><button onClick={() => handleDelete(tour.tour_id)}>Удалить</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToursAdmin;