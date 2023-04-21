import React from "react";
import { Link } from "react-router-dom";
import Block1 from "../img/block1.jpg"
import User from "../img/user.jpg"
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import Menu from "../components/Menu";

const Single = () => {
    return (
        <div className="single">
            <div className="content">
                <img src={Block1} alt="" />
            <div className="user">
                <img src={User} alt="" />
            <div className="info">
                <span>John</span>
                <p>Posted 2 days ago</p>
            </div>
            <div className="edit">
                <Link to={`/write?edit=2`}>
                <img src={Edit} alt="" srcset="" />
                </Link>
                <img src={Delete} alt="" srcset="" />
            </div>
            </div>
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p>
            Our online English classes feature lots of useful learning materials and activities to help you develop your reading skills with confidence in a safe and inclusive learning environment.
            Practise reading with your classmates in live group classes, get reading support from a personal tutor in one-to-one lessons or practise reading by yourself at your own speed with a self-study course.
            <br/>
            <br/>
            Our online English classes feature lots of useful learning materials and activities to help you develop your reading skills with confidence in a safe and inclusive learning environment.
            Practise reading with your classmates in live group classes, get reading support from a personal tutor in one-to-one lessons or practise reading by yourself at your own speed with a self-study course.
            <br/>
            <br/>
            Our online English classes feature lots of useful learning materials and activities to help you develop your reading skills with confidence in a safe and inclusive learning environment.
            Practise reading with your classmates in live group classes, get reading support from a personal tutor in one-to-one lessons or practise reading by yourself at your own speed with a self-study course.
            </p>
            </div>
            <Menu/>
        </div>
    )
}

export default Single