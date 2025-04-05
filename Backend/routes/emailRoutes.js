// routes/emailRoutes.js
import express from "express";
import { getEmails, replyToEmail, saveUserReply } from "../controllers/emailController.js";
import { listMessages } from "../controllers/fetchMail.js";

const router = express.Router();

router.get("/", getEmails);
router.post("/reply", replyToEmail);
router.get("/fetchmail", listMessages);
router.post("/save-reply", saveUserReply);

export default router;
