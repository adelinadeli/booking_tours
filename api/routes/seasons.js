import express from "express";
import { addSeason, deleteSeason, updateSeason,getSeason} from "../controlles/season.js";

const router = express.Router()

router.get("/:id", getSeason)

// router.get("/", getSeasons)
router.post("/", addSeason)
router.delete("/:id", deleteSeason)
router.put("/:id", updateSeason)


export default router;