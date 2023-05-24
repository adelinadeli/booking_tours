import express from "express";
import { appAplication,updateAplication,deleteAplication} from "../controlles/authuser.js";

const router = express.Router()

router.post("/application", appAplication)
router.delete("/:id", deleteAplication)
router.put("/:id", updateAplication)



export default router