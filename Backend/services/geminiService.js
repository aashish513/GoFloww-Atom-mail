// services/geminiService.js
import axios from "axios";

const GEMINI_API_URL = "https://api.gemini.com/v1/ai/generate"; // Placeholder URL

export const generateAIReply = async (emailContent) => {
  try {
    const response = await axios.post(
      GEMINI_API_URL,
      { content: emailContent },
      {
        headers: {
          Authorization: `Bearer ${process.env.GEMINI_API_KEY}`,
        },
      }
    );
    return response.data.reply;
  } catch (error) {
    console.error("Error generating AI reply:", error);
    throw new Error("Failed to generate AI reply");
  }
};
