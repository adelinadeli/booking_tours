import express from "express";
import { addTour, deleteTour, updateTour,getTour, getTourSchedule} from "../controlles/tour.js";

const router = express.Router()

router.get("/:id", getTour)
router.get("/schedule/:id", getTourSchedule)
router.post("/", addTour)
router.delete("/:id", deleteTour)
router.put("/:id", updateTour)


export default router;