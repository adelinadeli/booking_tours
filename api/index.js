import express from "express";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import aplliRoutes from "./routes/authuser.js";
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


app.get("/api/tour", function (req, res){
  const q = "SELECT * FROM tour"

  db.query(q, [req.params.id], (err, data)=> {
    if(err) return res.status(500).json(err);

    return res.status(200).json(data)
    
});
})





app.listen(8800, () => {
  console.log("Connected!");
});