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
       // <div className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16 ">
            
      //       <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto">
      //           <span className="text-xl sm:text-5xl font-semibold  text-center hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-5">Новости</span>
      //             {posts.map((post) => (
      //               <div key={post.id}>
      //               <div className="relative" >
      //                   <>
      //                       <img className="w-full" src={`../upload/${post.img}`} alt="фотки"/>
      //                   </>
      //                   <span className="hidden absolute z-10 text-xs bottom-0 right-0 bg-indigo-600 px-6 m-2 py-2 text-white hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out sm:flex items-center"><span className="text-lg">|</span>&nbsp;&nbsp;<span> <Link to={`/post/${post.id}`}>Читать статью</Link> </span></span>
      //               </div>
      //               <p className="text-gray-700 text-base leading-8" > 
      //               <h1>{post.title}</h1>
      //               </p>
      //               <p className="text-gray-700 py-5 text-base leading-8"> 
      //               {/* {getText(post.desc)} */}
      //               </p>
      //               <div className="py-5 text-sm font-regular text-gray-900 flex">
      //                   <span className="mr-3 flex flex-row items-center">
      //                       <span className="ml-1">{moment(post.date).format(" dddd,  D MMMM YYYY [года]")}<br/>{moment(post.date).fromNow()}</span></span>
      //               </div>
      //               </div>
      //             ))}
      //       </div>

      // </div>
                <div class=" max-w-screen-xl grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2   mx-auto p-5 sm:p-10 md:p-16  gap-x-5  mb-5">

              
                  {/* <!-- CARD 2 --> */}
                  {posts.map((post) => (
                  <div key={post.id} class="rounded overflow-hidden shadow-lg flex flex-col">
                  
                      <div class="relative">
                        <><img class="w-full" src={`../upload/${post.img}`} alt="Sunset in the mountains"/>
                              <div
                                  class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                              </div>
                          </>
                          <>
                              <div
                                  className="hidden absolute z-10 text-xs bottom-0 right-0 bg-indigo-600 px-6 m-2 py-2 text-white hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out sm:flex items-center">
                                  <Link to={`/post/${post.id}`}>Читать статью</Link> 
                              </div>
                          </>
                      </div>
                      <div class="px-6 py-4 mb-auto">
                          <a href="#"
                              class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out i mb-2">{post.title}</a>
                          <p class="text-gray-500 text-sm">
                          {getText(post.desc)} 
                          </p>
                      </div>
                      <div class="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                          <span href="#" class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                              
                                  <g>
                                      <g>
                                          <path
                                              d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                                          </path>
                                      </g>
                                  </g>
                              
                                  <span className="ml-1">{moment(post.date).format(" dddd,  D MMMM YYYY [года]")}</span>
                          </span>
                          <span href="#" class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                              
                              <span className="ml-1">{moment(post.date).fromNow()}</span>
                          </span>
                      </div>
                      </div>
                      
                  ))}
                  </div>
                
                
                  
                
                  


                  
                  
     
                

      
        
      );
    };

export default Home