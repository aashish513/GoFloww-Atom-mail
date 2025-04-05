// routes/emailRoutes.js
import express from "express";
<<<<<<< HEAD
import { getEmails, replyToEmail } from "../controllers/emailController.js";
=======
import { getEmails, replyToEmail, saveUserReply } from "../controllers/emailController.js";
>>>>>>> 726e9b00202ec18df2963e4b8ab50eb52a138389
import { listMessages } from "../controllers/fetchMail.js";

const router = express.Router();

router.get("/", getEmails);
router.post("/reply", replyToEmail);
router.get("/fetchmail", listMessages);
<<<<<<< HEAD
=======
router.post("/save-reply", saveUserReply);
>>>>>>> 726e9b00202ec18df2963e4b8ab50eb52a138389

export default router;
