
import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt  from "jsonwebtoken";

export const register = (req,res)=>{
    //check existing user
    if(req.body.surname == "") return res.status(409).json("Введите  фамилию!");
    if(req.body.username == "") return res.status(409).json("Введите  имя!");
    if(req.body.login == "") return res.status(409).json("Введите  логин!");
    if(req.body.email == "") return res.status(409).json("Введите почту!");
    if(req.body.telephone == "") return res.status(409).json("Введите телефон!");
    if(req.body.password == "") return res.status(409).json("Введите  пароль!");
    
    const q = "SELECT * FROM user WHERE surname = ? OR username = ?  OR login = ? OR email = ? OR telephone = ? ";
    db.query(q,[req.body.surname, req.body.name, req.body.login, req.body.email,req.body.telephone], (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json("Пользователь уже существует!");

        //хешируем пароль и создаем пользователя
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO user(`surname`, `username`, `login`, `email`, `telephone`, `img`,`password`) VALUES (?)";
        const values = [
            req.body.surname,
            req.body.username,
            req.body.login,
            req.body.email,
            req.body.telephone,
            req.body.img,
            hash,
        ]
        



        db.query(q,[values], (err,data)=>{
        if (err) return res.json(err);
        
            return res.status(200).json("User has been created.");
        })
    });
};

export const login = (req,res)=>{
    // проверить пользователя 
    if(req.body.login == "") return res.status(409).json("Введите  логин!");
    if(req.body.password == "") return res.status(409).json("Введите  пароль!");
    
    const q = "SELECT * FROM user WHERE login = ?";

    db.query(q,[req.body.login], (err,data)=>{
        if (err) return res.json(err);
        if (data.length === 0) return res.status(404).json("Пользователь не найден!");
        
        //проверить пароль

        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

        if(!isPasswordCorrect) return res.status(400).json("Неверное имя пользователя или пароль");
        
        const token = jwt.sign({ id: data[0].id }, "jwtkey"); 
        const { password, ...other } = data[0];

        res.cookie ("access_token", token, {
            httpOnly:true,
        }).status(200).json(other)
    });
};

export const logout = (req,res)=>{

    res.clearCookie("access_token", {
        sameSite:"none",
        secure:true
    }).status(200).json("Пользователь вышел из системы.")
};