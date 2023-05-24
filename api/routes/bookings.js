import express from "express";
import { addPost, deletePost, getPost, getPosts, updateSheduls,addSheduls, updateBook, deleteBook, addBook} from "../controlles/booking.js";

const router = express.Router()

// router.get("/", getBooking)
// // router.get("/:id", getPost)
// router.post("/", addSheduls)
// // router.delete("/:id", deletePost)
// router.put("/:id", updateSheduls)

router.post("/book", addBook)
// router.delete("/:id", deleteBook)
// router.put("/:id", updateBook)


export default router;
