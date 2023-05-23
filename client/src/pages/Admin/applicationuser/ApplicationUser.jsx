// import React, { useEffect, useState, useContext, useRef } from "react";
// import { Link, useLocation, useNavigate } from 'react-router-dom'
// import axios from "axios"
// import { AuthContext } from "../../../context/authContext";
// import "./Modal.css";
// // import emailjs from '@emailjs/browser';


// function ApplicationUser(props) {
  
// //   const form = useRef();
//   // console.log(props.idModal) 

//   const {currentUser, logout} = useContext(AuthContext);

  

//     const location = useLocation();
//     const navigate = useNavigate();

//     const [err, setError] = useState(null)
//     const [contact, setContact] = useState(null)
// // console.log(contact)
//   const application_id = props.application_id;
//   const user_name = props.user_name;
//   console.log(user_name)
//   const phone_number = props.phone_number;
//   const email = props.email;
//   //console.log (idModal)


// //   const sendEmail = async (e) => {
// //     e.preventDefault();
// //     try{
// //     await axios.put(`/posts/job/${application_id}`,{
// //       contact, application_id
// //     });
// //       navigate("/")
// //     }
// //     catch(err){
// //       console.error(err.response.data)
// //       setError(err.response.data)
// //   }
// //   };


//   return (
//     <div className="modalBackground">
//       <div className="modalContainer">

//         <div className="titleCloseBtn">
//           <button
//             onClick={() => props.closeModal(false)}>
//             X
//           </button>
//         </div>
//         <center>
 

// <form className="form"  >

// <h3>Оставленная заявка </h3>
//       <div><label>Имя:</label>
//       <input type="text" name="from_name" value={user_name} placeholder='Ваше имя'/></div>

//       <div><label>Номер телефона:</label>
//       <input type="text" name="phone" value={phone_number} placeholder='Ваш номер телефона'/></div>

//       <div><label>Почта:</label>
//       <input type="email" name="reply_to"  value={email}
//        placeholder='Ваша почта'/></div>
            
//     <label name="contact" className="label-job" for="contactChoice1">      <input name="contact" className="label-job"  type="radio" id="contactChoice1"
     
//      onChange={(e) => {
//       setContact(e.target.value);
//     }}
//      value="Подтвержденно"/>Подтвердить</label>



//     <label name="contact" className="label-job" for="contactChoice2">    <input name="contact" className="label-job" type="radio" id="contactChoice2"
     
//      onChange={(e) => {
//       setContact(e.target.value);
//     }}value="Отклоненно"/>Отклонить</label>


//       <input type="submit" value="Оставить заявку!" />

//       {err && <p className="red"><b>{err}</b></p>}

//     </form>
//     </center>

//       </div>
//     </div>
//   );
// }

// export default ApplicationUser;