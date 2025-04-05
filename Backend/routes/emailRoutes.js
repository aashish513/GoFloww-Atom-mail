// routes/emailRoutes.js
import express from "express";
import { getEmails, replyToEmail } from "../controllers/emailController.js";
import { listMessages } from "../controllers/fetchMail.js";

const router = express.Router();

router.get("/", getEmails);
router.post("/reply", replyToEmail);
router.get("/fetchmail", listMessages);

export default router;
