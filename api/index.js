import express from "express";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import aplliRoutes from "./routes/authuser.js";
import toursRoutes from "./routes/tours.js"
import seasonsRoutes from "./routes/seasons.js"
// import bookingsRoutes from "./routes/bookings.js"
// import toursRoutes from "./routes/tours.js";
import cookieParser from "cookie-parser";
import multer from "multer";
import {db} from "./db.js"

const app = express();

app.use(express.json());
app.use(cookieParser());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);//Image has been uploaded.
});

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/authuser", aplliRoutes);
app.use("/api/tours", toursRoutes);
// app.use("/api/seasons", seasonsRoutes);
// app.use("/api/bookings", bookingsRoutes);


// SELECT tout_schedule_id,start_tout_schedule AS start_tour , end_tout_schedule AS start_tour , tour.name_tour, tour.headline,tour.desc, tour.group, tour.city, tour.prise, tour.img, difficulty_level.name_difficulty_level AS level, season.name_season AS season, type_tour.name_type_tour AS name_type, accommodation.name_accommodation AS accommodation FROM tout_schedule JOIN tour on tout_schedule.tour_id = tour.tour_id JOIN difficulty_level ON tour.difficulty_level_id = difficulty_level.difficulty_level_id JOIN season on tour.season_id = season.season_id JOIN type_tour on tour.type_tour_id = type_tour.type_tour_id JOIN accommodation on tour.accommodation_id = accommodation.accommodation_id ORDER BY `tout_schedule`.`tout_schedule_id` ASC

app.get("/api/tour", function (req, res){
    const q = "SELECT tour.tour_id, name_tour, headline, `desc`, `group`, city, prise, img,  difficulty_level.name_difficulty_level AS level, season.name_season AS season, type_tour.name_type_tour AS name_type, accommodation.name_accommodation AS accommodation FROM tour JOIN difficulty_level ON tour.difficulty_level_id = difficulty_level.difficulty_level_id JOIN season on tour.season_id = season.season_id JOIN type_tour on tour.type_tour_id = type_tour.type_tour_id JOIN accommodation on tour.accommodation_id = accommodation.accommodation_id";
    
    db.query(q, [req.params.id], (err, data)=> {
    if(err) return res.status(500).json(err);

    return res.status(200).json(data)
    
});
})
app.get("/api/authuser/application", function (req, res){
  const q = "SELECT * FROM application ORDER BY application.application_id DESC";
  
  db.query(q, [req.params.id], (err, data)=> {
  if(err) return res.status(500).json(err);

  return res.status(200).json(data)
  
});
})

// app.get("/api/booking/book", function (req, res){
//   const q = "SELECT booking.*, user.surname, user.username, user.email, tout_schedule.start_tout_schedule, tout_schedule.end_tout_schedule, tout_schedule.tour_id , tout_schedule.count FROM booking JOIN user on booking.uid = user.id JOIN tout_schedule ON booking.tout_schedule_id = tout_schedule.tout_schedule_id";
  
//   db.query(q, [req.params.id], (err, data)=> {
//   if(err) return res.status(500).json(err);

//   return res.status(200).json(data)
  
// });
// })







app.listen(8800, () => {
  console.log("Connected!");
});