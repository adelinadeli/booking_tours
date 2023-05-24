import React, { useEffect, useState, useRef } from 'react';
import background from '../../img/fon.jpg';
import '../../components/Navbar/Navbar.css';
import '../../style.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Tour() {
    const [tours, setTours] = useState([]);
    const [checkedSeasons, setCheckedSeasons] = useState([]);
    const page = useRef(1);
    const loader = useRef(null);

    useEffect(() => {
        loadMoreTours();
    }, []);

    const loadMoreTours = async () => {
        try {
            const res = await axios.get(`/tour?page=${page.current}`);
            setTours([...tours, ...res.data]);
            page.current++;
        } catch (err) {
            console.log(err);
        }
    };

    const handleCheckboxChange = (e) => {
        const season = e.target.value;
        if (e.target.checked) {
            setCheckedSeasons([...checkedSeasons, season]);
        } else {
            setCheckedSeasons(checkedSeasons.filter((s) => s !== season));
        }
    };

    const filterTours = (tours, checkedSeasons) => {
        if (checkedSeasons.length === 0) {
            return tours;
        } else {
            return tours.filter((tour) => checkedSeasons.includes(tour.season));
        }
    };

    const filteredTours = filterTours(tours, checkedSeasons);

    const clearFilter = () => {
        setCheckedSeasons([]);
    };

    const handleObserver = (entities) => {
        const target = entities[0];
        if(target.isIntersecting) {
            loadMoreTours();
        }
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '20px',
            threshold: 1.0
        };
        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current) {
            observer.observe(loader.current);
        }
    }, []);

    return (
        <>
            <div className="text-center p-10">
                <h1 className="font-bold text-4xl">Туры по России</h1>
            </div>

            <div className="flex justify-center mb-5">
                <label className="mr-4">
                    <input type="checkbox" value="Лето" checked={checkedSeasons.includes('Лето')} onChange={handleCheckboxChange} className="mr-1" />
                    Лето
                </label>
                <label className="mr-4">
                    <input type="checkbox" value="Осень" checked={checkedSeasons.includes("Осень")} onChange={handleCheckboxChange} className="mr-1" />
                    Осень
                </label>
                <label className="mr-4">
                    <input type="checkbox" value="Зима" checked={checkedSeasons.includes('Зима')} onChange={handleCheckboxChange} className="mr-1" />
                    Зима
               </label>
                <label className="mr-4">
                    <input type="checkbox" value="Весна" checked={checkedSeasons.includes('Весна')} onChange={handleCheckboxChange} className="mr-1" />
                    Весна
                </label>
                <button className="ml-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" onClick={clearFilter}>Очистить фильтр</button>
            </div>

            <div className="w-fit ml-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mb-5">
                {filteredTours.map((tour) => (
                    <div key={tour.tour_id}>
                        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
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
                                <button className="inline-flex items-center justify-center rounded-xl  px-3 py-2 text-sm font-semibold text-black shadow-sm transition-all duration-150 hover:bg-[#00000030] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 mr-8">
                                    <Link to={`/tour/${tour.tour_id}`}>Подробнее о туре</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                <div ref={loader}></div>
            </div>
        </>
    );
}

export default Tour;