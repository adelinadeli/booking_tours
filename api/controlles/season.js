import { db } from "../db.js";
import jwt from "jsonwebtoken";

// export const getSeasons = (req,res)=>{
//   const q = req.query.name_season ? "SELECT * FROM season WHERE name_season=?" : "SELECT * FROM season";

//   db.query(q, [req.query.name_season], (err,data)=>{
//       if(err) return res.status(500).send(err);

//       return res.status(200).json(data);
//   });
// };

export const getSeason = (req,res)=>{
  const q = "SELECT `season_id`,`name_season`FROM season WHERE season_id=?";

  db.query(q, [req.params.id], (err, data)=> {
      if(err) return res.status(500).json(err);

      return res.status(200).json(data[0])
      
  });
};

export const addSeason = (req,res)=>{

        const q = "INSERT INTO season (`season_id`, `name_season` ) VALUE (?)";

        const values = [
            req.body.name_season,
        ]
        db.query(q,[values], (err,data)=> {
            if (err) return res.status(500).json(err);
            return res.json("Сезон создан.");
        })
   
};

export const deleteSeason = (req, res) => {
   
      

      const tourId = req.params.id;
      const q = "DELETE FROM season WHERE `season_id` = ? ";
  
      db.query(q, [tourId], (err, data) => {
        if (err) return res.status(500).json(err);
  
        return res.json("Сезон удален!");
      });
   
};

export const updateSeason = (req, res) => {

    const seasonId = req.params.id;
    const q ="UPDATE season SET `season_id`='?',`name_season`='?' WHERE  `season_id` = ? ";

    const values = [
            req.body.name_season,
    ];

    db.query(q, [...values, seasonId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Сезон обновлен.");
    });
  
};