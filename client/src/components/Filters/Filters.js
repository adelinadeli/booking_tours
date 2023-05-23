import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Filter() {
    const [seasons, setSeasons] = useState([]);
    const [seas, setIdSeas] = useState([]);
    const [tours, setTours] = useState([]);
    
    
    

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get(`/season`)
                setSeasons(res.data)
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
                const res = await axios.get(`/tour`)
                setTours(res.data)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchData();
    },[]) 
   console.log(tours)
// console.log(seas)
   return (
        <>
        {(seasons.map((season) => 
        <div key={season.season_id}>
            
            <div>
                <label name="contact" className="label-job" for="contactChoice2">{season.name_season}</label>
                <input name="season" type='checkbox' value={season.season_id} id='contactChoice2'onChange={e=>setIdSeas(e.target.value)} />
                
            </div>
        </div>

        ))}
       
                <>
                {seas == "2" && (
                    <div key={tours.tour_id}>
                        {/* <p>8888888</p> */}
                    {tours.filter(tour => tour.season == 'зима').map(filteredtours => (
                        <li>
                          {setTours (filteredtours)}
                        </li>
                      ))}
                    </div>
                )}
                </>
                <>
                {seas == "1" && (
                    <div key={tours.tour_id}>
                        {/* <p>ldkfsldf</p> */}
                    {tours.filter(tour => tour.season == 'лето').map(filteredtours => (
                        <li>
                          {setTours  (filteredtours)}
                        </li>
                      ))}
                    </div>
                     
                )}
                </>

        </>
   )
}
export default Filter;