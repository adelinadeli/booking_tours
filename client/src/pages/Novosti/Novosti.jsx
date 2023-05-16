import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import background from '../../img/fon.jpg';
import moment from "moment";
import "moment/locale/ru";



const Home = () => {
    
    const [posts, setPosts] = useState([]);

    const cat = useLocation().search;

    useEffect (()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get(`/posts${cat}`);
                setPosts(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchData()
    }, [cat]);
            
    const getText = (html) =>{
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }


    return (
      // <div class="text-center p-8 z-1 relative">
      //     <h2 class="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
      //         Новости
      //     </h2>
      //     {posts.map((post) => (
      //         <div class="flex flex-wrap items-center mt-20 text-left text-center" key={post.id}>
      //             <div class="w-full md:w-3/5 lg:w-1/2 px-4">
      //                 <img src={`../upload/${post.img}`}  class="inline-block rounded shadow-lg border border-merino-400"/>
      //             </div>
      //             <div class="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
      //                 <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
      //                     <Link className="link" to={`/post/${post.id}`}>
      //                       <h1>{post.title}</h1>
      //                     </Link>
      //                 </h3>
      //                 <p class="sm:text-lg mt-6">
      //                 {getText(post.desc)}
      //                 </p>
      //                 <button>Read More</button>
      //             </div>
      //         </div>
      //     ))}
      // </div>
      <div class="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16 ">
            
            <div class="mb-10 rounded overflow-hidden flex flex-col mx-auto">
                <span class="text-xl sm:text-5xl font-semibold  text-center hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-5">Новости</span>
                  {posts.map((post) => (
                    <div key={post.id}>
                    <div class="relative" >
                        <>
                            <img class="w-full" src={`../upload/${post.img}`} alt="фотки"/>
                        </>
                        <span class="hidden absolute z-10 text-xs bottom-0 right-0 bg-indigo-600 px-6 m-2 py-2 text-white hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out sm:flex items-center"><span class="text-lg">|</span>&nbsp;&nbsp;<span> <Link to={`/post/${post.id}`}>Читать статью</Link> </span></span>
                    </div>
                    <p class="text-gray-700 text-base leading-8" > 
                    <h1>{post.title}</h1>
                    </p>
                    <p class="text-gray-700 py-5 text-base leading-8"> 
                    {/* {getText(post.desc)} */}
                    </p>
                    <div class="py-5 text-sm font-regular text-gray-900 flex">
                        <span class="mr-3 flex flex-row items-center">
                            <span class="ml-1">{moment(post.date).format("[Сегодня] dddd,  D MMMM YYYY [года]")}<br/>{moment(post.date).fromNow()}</span></span>
                    </div>
                    </div>
                  ))}
            </div>

      </div>

      
        /* <div className="home">
          <div className="posts">
            {posts.map((post) => (
              <div className="post flex flex-wrap items-center mt-20 text-left text-center" key={post.id}>
                <div className="img ">
                  <img src={`../upload/${post.img}`}  />
                </div>
                <div className="content  w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                  <h3>
                    <Link className="link font-bold mt-8 text-xl md:mt-0 sm:text-2xl" to={`/post/${post.id}`}>
                      <h1>{post.title}</h1>
                    </Link> 
                  </h3>
                  
                  <p class="sm:text-lg mt-6">{getText(post.desc)}</p>
                  <button>Read More</button>
                </div>
              </div>
            ))}
          </div>
        </div> */
      );
    };

export default Home