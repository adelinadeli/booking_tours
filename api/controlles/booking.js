import { db } from "../db.js";

export const addBook = (req,res)=>{
    if(req.body.uid == "") return res.status(409).json("Введите  имя!");
    if(req.body.number_tickets == "") return res.status(409).json("Введите  телефон!");
    if(req.body.tout_schedule_id == "") return res.status(409).json("Введите  почта!");

        const q = "INSERT INTO `booking`(`booking_id`, `uid`, `number_tickets`, `tout_schedule_id`, `statys`) VALUES (?))";
        const values = [
            null,
            req.body.uid,
            req.body.number_tickets,
            req.body.tout_schedule_id,
            'Новая'
        ]
        
        db.query(q,[values], (err,data)=>{
            if(err) return res.status(500).json(err);
            console.log(err)
            return res.json("Заявка отправлена на расмотрение");
        });
   
};

// export const deleteBook = (req,res)=>{
   
//         const bookId = req.params.id;
//       const q = "DELETE FROM booking WHERE booking_id = ?";
  
     
//         db.query(q,[bookId], (err,data)=>{
//             if(err) return res.status(500).json(err);
//             console.log(err)
//             return res.json("Пользователь удален");
//         });
   
// };

// export const updateBook = (req,res)=>{
    
//         const bookId = req.params.id;
//         const q = "UPDATE `booking` SET `booking_id`='?',`uid`='?',`number_tickets`='?',`tout_schedule_id`='?' WHERE booking_id = ?";
//         const values = [
//             null,
//             req.body.uid,
//             req.body.number_tickets,
//             req.body.tout_schedule_id,
//             'Новая'
//         ]
        
//         db.query(q,[...values, bookId], (err,data)=>{
//             if(err) return res.status(500).json(err);
//             console.log(err)
//             return res.json("Данные о заявке измененны");
//         });
   
// };




// export const updateSheduls = (req,res)=>{
//     const token = req.cookies.access_token
//     if(!token) return res.status(401).json("Not authenficated!")

//     jwt.verify(token,"jwtkey", (err, )=>{
//         if(err) return res.status(403).json("Token is not Valid!")

//        const q = "UPDATE tout_schedule SET count= `?` WHERE tout_schedule_id = ?"

       
//        const values = [
//         req.body.count,
//         req.body.tout_schedule_id,
//        ]

//        db.query(q,values , (err,data)=>{
//         if(err) return res.status(500).json(err)
        
//         return res.json("Post has been updated!")
//        });
//     });
// }

// export const addSheduls = (req,res)=>{

//     const token = req.cookies.access_token
//     if(!token) return res.status(401).json("Not authenficated!")

//     jwt.verify(token,"jwtkey", (err, )=>{
//         if(err) return res.status(403).json("Token is not Valid!")

//     const q = "INSERT INTO `tout_schedule`(`tout_schedule_id`, `start_tout_schedule`, `end_tout_schedule`, `tour_id`, `count`) VALUES (?)";

//     const values = [
//         null,
//         req.body.start_tout_schedule,
//         req.body.end_tout_schedule,
//         req.body.tour_id,
//         req.body.count,
//     ]
//     db.query(q,[values], (err,data)=> {
//         if (err) return res.status(500).json(err);
//         return res.json("Тур создан.");
//         })
//     });
// };