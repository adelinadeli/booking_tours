import  { useContext } from "react";
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/authContext";
import { SidebarData } from './SidebarData';
import Logo from '../../img/logo.png';
import './Navbar.css';
import { IconContext } from 'react-icons';
// import Menu from "../components/Menu";


function Navbar() {


    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const { currentUser, logout } = useContext(AuthContext);

    

    let button;

    if (currentUser?.username && currentUser.user_permit == 'admin') {
      button = 
        <Link className="link" to={`/admin`}>Админ-панель</Link>
    } else {
        button = <Link className="link" to={`/pages/user/${currentUser?.id}`}>{currentUser?.username}</Link>;
    }

    return (

        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className="navbar flex md:rounded-3xl  lg:max-w-screen-xl mx-auto w-full max-w-screen-md mt-5 mb-10 py-3 shadow backdrop-blur-lg md:top-6 ">
            
                    <div className="menu-bars">
                        <Link to='#' >
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    </div>
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="flex items-center  justify-end gap-3">
                            <span>{button}</span>
                            <a className="inline-flex items-center justify-center rounded-xl  px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#ffffff30] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 mr-8">{currentUser ? <span className="link" onClick={logout}>Выход</span> : <div><Link  to="/register">Регистрация</Link> / <Link  to="/login">Вход</Link></div>}</a>
                    </div>   
            </div>
            
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                    <AiIcons.AiOutlineClose />
                </Link>
                </li>
                {SidebarData.map((item, index) => {
                return (
                    <li key={index} className={item.cName}>
                    <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                    </Link>
                    </li>
                );
                })}
            </ul>
            </nav>
        </IconContext.Provider>
        
        </>
    );
    }

    export default Navbar;