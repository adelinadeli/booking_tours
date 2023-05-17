import express from "express";
import { application} from "../controlles/authuser.js";

const router = express.Router()

router.post("/application", application)


export default router