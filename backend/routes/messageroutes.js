import express from "express";
import { sendMessage } from "../controllers/messagecontroller.js";
import { getMessage } from "../controllers/messagecontroller.js";
import protectRoute from '../middleware/protectRoute.js'
const router =express.Router();

router.get("/:id",protectRoute,getMessage)
router.post("/send/:id",protectRoute,sendMessage)

export default router;