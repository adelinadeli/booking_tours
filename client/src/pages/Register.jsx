import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import Logo from "../../img/logo.png";
import background from "../img/hayato-shin-_MIUxRouG3k-unsplash.jpg";
// import Video from "../video/registr.mp4"

const Register = () => {
    
    const [surname, setSurname] = useState("");
    const [username, setUsername] = useState("");
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [file, setFile] = useState(null);
    const [password, setPassword] = useState("");
    const [err,setError] = useState(null);

    const navigate = useNavigate();

    const upload = async () => {
        try {
          const formData = new FormData();
          formData.append("file", file);
          const res = await axios.post("/upload", formData);
          return res.data;
        } catch (err) {
          console.log(err);
        }
      };
    

   

    const handleSubmit = async e => {
        e.preventDefault()
        const img = await upload();
        try{
            await axios.post("/auth/register", {
                surname, username, login, email, telephone, password, img:file ? img : ""
            })
            navigate("/login");
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
            <h1 className="text-3xl font-semibold text-gray-900">Регистрация</h1>
            {/* <p className="mt-2 text-gray-500">Sign in below to access your account</p> */}
        </div>
        <div className="mt-5">
            <form action="">
                <div className="relative mt-6">
                    <input type="text" onChange={e=>setSurname(e.target.value)} name="surname" id="surname" placeholder="surname" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autoComplete="NA" />
                    <label htmlFor="surname" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Фамилия</label>
                </div>

                <div className="relative mt-6">
                    <input type="text" name="username" id="username" onChange={e=>setUsername(e.target.value)} placeholder="username" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                    <label htmlFor="username" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Имя</label>
                </div>

                <div className="relative mt-6">
                    <input type="text" name="login" id="login" onChange={e=>setLogin(e.target.value)} placeholder="login" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                    <label htmlFor="login" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Логин</label>
                </div>

                <div className="relative mt-6">
                    <input type="email" name="email" id="email" placeholder="123@yandex.ru" onChange={e=>setEmail(e.target.value)} className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                    <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Почта</label>
                </div>

                <div className="relative mt-6">
                    <input type="text" name="telephone" id="telephone" onChange={e=>setTelephone(e.target.value)}  placeholder="8 999 999 99 99" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                    <label htmlFor="telephone" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Телефон</label>
                </div>
                
                <div className="relative mt-6">
                    <input style={{ display: "none" }} type="file" id="file" name="" onChange={(e) => setFile(e.target.files[0])} className="peer peer mt-1 mb- w-full border-b-2 border-gray-300 px-0 py-12 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                    <label  className="file" htmlFor="file" >Загрузите фотографию</label>
                </div>

                <div className="relative mt-6">
                    <input type="password" name="password" id="password" onChange={e=>setPassword(e.target.value)} placeholder="Password" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                    <label htmlFor="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Пароль</label>
                </div>

                <div className="my-6">
                    <button onClick={handleSubmit} type="submit" className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Регистрация</button>
                    {err && <p>{err}</p>}
                </div>

                <p className="text-center text-sm text-gray-500">У вас есть аккаунт ?
                    <span
                        className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"><Link to="/login"> Авторизуйтесь</Link>
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

export default Register