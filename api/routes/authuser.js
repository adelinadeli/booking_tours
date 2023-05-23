import express from "express";
import { application,updatelication,deletelication} from "../controlles/authuser.js";

const router = express.Router()

router.post("/application", application)
router.delete("/:id", deletelication)
router.put("/:id", updatelication)



export default router