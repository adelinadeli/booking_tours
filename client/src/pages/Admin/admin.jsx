import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import ChangeStatus from '../../pages/Admin/applicationuser/ApplicationUser.jsx'

function Admin() {
    
        const [ausers, setInput] = useState([]);
        // const [openModal, setOpenModal] = useState([]);

        // const location = useLocation();
        // const navigate = useNavigate();
    
        
    
        const { currentUser } = useContext(AuthContext);
    
        const location = useLocation();
        const navigate = useNavigate();

        useEffect(() => {
            if (!currentUser) {
                navigate('/login');
            }
        }, [currentUser, navigate]);

        console.log()
    
        useEffect (()=>{
            const fetchData = async ()=>{
                try{
                    const res = await axios.get(`/authuser/application`);
                    setInput(res.data);
                }catch(err){
                    console.log(err);
                }
            }
            fetchData()
        },);
    
        // const applicationId = location.pathname.split("/")[2];
        // const handleDelete = async ()=>{
        //     try{
        //         await axios.delete(`/authuser/${applicationId}`);
        //     }catch(err){
        //         console.log(err);
        //     }
        // };
        
  return (
    <>

    <div className="">
        <Link to="/toursadmin">Туры</Link>
    </div>

      <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
    <thead className="bg-gray-50">
        <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Имя
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Статус
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Телефон
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Почта
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Действия
            </th>
        </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
    {ausers.map((auser) => (
        <tr key={auser.application_id}>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                        {auser.user_name}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {auser.application_status}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {auser.phone_number}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {auser.email}
            </td>
            <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
           
            {/* <button className="link"onClick={() => {setOpenModal(true);}}>
                <p className="red">Изменить статус заявки</p>
            </button>

            {openModal && <ChangeStatus application_id ={auser.application_id} user_name ={auser.user_name} phone_number={auser.phone_number} email={auser.email}  closeModal={setOpenModal} />}
            <span href="#" className="ml-2 text-red-600 hover:text-red-900">Удаление</span> */}
                
            </td>
        </tr>
    ))}
    </tbody>
</table>
    </>
  )
}

export default Admin