
import { db } from "../db.js";
// import bcrypt from "bcryptjs";


export const application = (req,res)=>{
    //проверить существующего пользователя
    // if(req.body.user_name == "") return res.status(409).json("Введите  имя!");
    // if(req.body.email == "") return res.status(409).json("Введите почту!");
    // if(req.body.phone_number == "") return res.status(409).json("Введите телефон!");
    
   
        const q = "INSERT INTO application (`user_name`, `phone_number`,`email`) VALUES (?)";
        const values = [
            req.body.user_name,
            req.body.phone_number,
            req.body.email,
            
        ]
        
        db.query(q,[values], (err,data)=>{
        if (err) return res.json(err);
            return res.status(200).json("Заявка отправлена");
        })
   
};