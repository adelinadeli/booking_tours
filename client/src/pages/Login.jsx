
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import background from "../img/fon.jpg";
import Logo from "../img/logo.png";


const Login = () => {
    const [inputs, setInputs] = useState({
        login: "",
        password: "",
    });
    const [err,setError] = useState(null);

    const navigate = useNavigate();

    const {login} = useContext(AuthContext);

    const handleChange = e => {
        setInputs((prev)=>({...prev, [e.target.name]: e.target.value}));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try{
            await login(inputs);
            navigate("/");
            
        }catch(err){
           setError(err.response.data);
            
        }
    }

    return (
    <>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    {/* <!-- задний фон --> */}
    <div className="absolute inset-0 z-0">
        <img src={background} alt=""
            className="w-full h-full object-cover filter  brightness-50"/>
    </div>

    {/* <!-- форма регистрации --> */}
    <div
    className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
    <div className="w-full">
        <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">Авторизация</h1>
            {/* <p className="mt-2 text-gray-500">Sign in below to access your account</p> */}
        </div>
        <div className="mt-5">
            <form action="">
                

               

                <div className="relative mt-6">
                    <input type="text" name="login" id="login" 
                    onChange={handleChange} placeholder="login" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                    <label htmlFor="login" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-md peer-focus:text-gray-800">Логин</label>
                </div>
                
                <div className="relative mt-6">
                    <input type="password" name="password" id="password" onChange={handleChange} placeholder="Password" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                    <label htmlFor="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-md peer-focus:text-gray-800">Пароль</label>
                </div>

                <div className="my-6">
                    <button onClick={handleSubmit} type="submit" className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Авторизоваться</button>
                    {err && <p>{err}</p>}
                </div>

                <p className="text-center text-md text-gray-500">У вас нет аккаунта ?
                    <span
                        className="font-semibold text-gray-600 hover:underline text-md focus:text-gray-800 focus:outline-none"><Link to="/register"> Зарегистрируйтесь</Link>
                    </span>.
                </p>
            </form>
            </div>
        </div>
    </div>
    </div>
    </>

                

         
        
    )
}

export default Login;