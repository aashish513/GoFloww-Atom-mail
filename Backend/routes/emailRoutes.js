// routes/emailRoutes.js
import express from "express";
import { getEmails, replyToEmail } from "../controllers/emailController.js";

const router = express.Router();

router.get("/", getEmails);
router.post("/reply", replyToEmail);

export default router;
