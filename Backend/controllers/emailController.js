// controllers/emailController.js
import Email from "../models/Email.js";
import { fetchEmails, sendEmail } from "../services/gmailService.js";
import { generateAIReply } from "../services/geminiService.js";

export const getEmails = async (req, res) => {
  try {
    const emails = await fetchEmails();
    res.json(emails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const replyToEmail = async (req, res) => {
  const { emailId, replyContent } = req.body;

  try {
    const email = await Email.findById(emailId);
    if (!email) {
      return res.status(404).json({ message: "Email not found" });
    }

    // Generate AI reply
    const aiReply = await generateAIReply(replyContent);

    // Send email
    await sendEmail(email.from, `Re: ${email.subject}`, aiReply);

    // Save reply to database
    email.aiGeneratedReply = aiReply;
    await email.save();

    res.status(200).json({ message: "Reply sent successfully", aiReply });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
