
import { db } from "../db.js";
// import bcrypt from "bcryptjs";


export const appAplication = (req,res)=>{
    if(req.body.user_name == "") return res.status(409).json("Введите  имя!");
    if(req.body.phone_number == "") return res.status(409).json("Введите  телефон!");
    if(req.body.email == "") return res.status(409).json("Введите  почта!");

        const q = "INSERT INTO application (`user_name`, `phone_number`,`email`,`application_status`) VALUES (?)";
        const values = [
            req.body.user_name,
            req.body.phone_number,
            req.body.email,
            'Новая'
        ]
        
        db.query(q,[values], (err,data)=>{
            if(err) return res.status(500).json(err);
            console.log(err)
            return res.json("Заявка отправлена на расмотрение");
        });
   
};

export const deleteAplication = (req,res)=>{
   
        const applicationId = req.params.id;
      const q = "DELETE FROM application WHERE application_id = ?";
  
     
        db.query(q,[applicationId], (err,data)=>{
            if(err) return res.status(500).json(err);
            console.log(err)
            return res.json("Пользователь удален");
        });
   
};

export const updateAplication = (req,res)=>{
    
        const applicationId = req.params.id;
        const q = "UPDATE application SET `application_id`='?',`user_name`='?',`phone_number`='?',`email`='?',`application_status`='?' WHERE application_id = ?";
        const values = [
            req.body.user_name,
            req.body.phone_number,
            req.body.email,
            'Новая'
        ]
        
        db.query(q,[...values, applicationId], (err,data)=>{
            if(err) return res.status(500).json(err);
            console.log(err)
            return res.json("Данные о заявке измененны");
        });
   
};