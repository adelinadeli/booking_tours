import { db } from "../db.js";
import jwt from "jsonwebtoken";

// SELECT tout_schedule_id,start_tout_schedule AS start_tour , end_tout_schedule AS start_tour , tour.name_tour, tour.headline,tour.desc, tour.group, tour.city, tour.prise, tour.img, difficulty_level.name_difficulty_level AS level, season.name_season AS season, type_tour.name_type_tour AS name_type, accommodation.name_accommodation AS accommodation FROM tout_schedule JOIN tour on tout_schedule.tour_id = tour.tour_id JOIN difficulty_level ON tour.difficulty_level_id = difficulty_level.difficulty_level_id JOIN season on tour.season_id = season.season_id JOIN type_tour on tour.type_tour_id = type_tour.type_tour_id JOIN accommodation on tour.accommodation_id = accommodation.accommodation_id WHERE tout_schedule_id= ?

export const getTour = (req,res)=>{
  const q = "SELECT tout_schedule.start_tout_schedule, tout_schedule.end_tout_schedule, tout_schedule.tout_schedule_id, tour.tour_id, name_tour, headline, `desc`, `group`, city, prise, img,  difficulty_level.name_difficulty_level AS level, season.name_season AS season, type_tour.name_type_tour AS name_type, accommodation.name_accommodation AS accommodation FROM tour JOIN tout_schedule on tour.tour_id = tout_schedule.tour_id JOIN difficulty_level ON tour.difficulty_level_id = difficulty_level.difficulty_level_id JOIN season on tour.season_id = season.season_id JOIN type_tour on tour.type_tour_id = type_tour.type_tour_id JOIN accommodation on tour.accommodation_id = accommodation.accommodation_id WHERE tour.tour_id = ?";

  db.query(q, [req.params.id], (err, data)=> {
      if(err) return res.status(500).json(err);

      return res.status(200).json(data[0])
      
  });
};
export const getTourSchedule = (req,res)=>{
  const q = "SELECT * FROM `tout_schedule` JOIN tour on tour.tour_id = tout_schedule.tour_id WHERE tour.tour_id = ?";

  db.query(q, [req.params.id], (err, data)=> {
      if(err) return res.status(500).json(err);

      return res.status(200).json(data)
      
  });
};

export const addTour = (req,res)=>{

        const q = "INSERT INTO tour (`tour_id`, `name_tour`, `headline`, `desc`, `group`, `city`, `prise`, `img`,  `difficulty_level_id`, `season_id`, `type_tour_id`, `accommodation_id`) VALUE (?)";

        const values = [
            req.body.name_tour,
            req.body.headline,
            req.body.desc,
            req.body.group,
            req.body.city,
            req.body.prise,
            req.body.img,
            req.body.difficulty_level_id,
            req.body.season_id,
            req.body.type_tour_id,
            req.body.accommodation_id,
            
            
        ]
        db.query(q,[values], (err,data)=> {
            if (err) return res.status(500).json(err);
            return res.json("Тур создан.");
        })
   
};

export const deleteTour = (req, res) => {
   
      

      const tourId = req.params.id;
      const q = "DELETE FROM tour WHERE `tour_id` = ? AND `tout_schedule_id` = ? ";
  
      db.query(q, [tourId], (err, data) => {
        if (err) return res.status(500).json(err);
  
        return res.json("Тур удален!");
      });
   
};

export const updateTour = (req, res) => {

    const tourId = req.params.id;
    const q ="UPDATE tour SET `tour_id`='?',`name_tour`='?',`headline`='?',`desc`='?',`group`='?',`city`='?',`prise`='?',`img`='?',`difficulty_level_id`='?',`season_id`='?',`type_tour_id`='?',`accommodation_id`='?' WHERE  `tour_id` = ? ";

    const values = [
            req.body.name_tour,
            req.body.headline,
            req.body.desc,
            req.body.group,
            req.body.city,
            req.body.prise,
            req.body.img,
            req.body.difficulty_level_id,
            req.body.season_id,
            req.body.type_tour_id,
            req.body.accommodation_id,
    ];

    db.query(q, [...values, tourId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Тур обновлен.");
    });
  
};