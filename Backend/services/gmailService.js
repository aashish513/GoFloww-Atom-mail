import { google } from "googleapis";
import pkg from "google-auth-library";
const { OAuth2Client } = pkg;

import dotenv from "dotenv";
dotenv.config();

// Setup OAuth2 client
const oAuth2Client = new OAuth2Client(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  process.env.GMAIL_REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: process.env.GMAIL_REFRESH_TOKEN });

const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

// Function to fetch recent emails
export const fetchEmails = async () => {
  try {
    const res = await gmail.users.messages.list({
      userId: "me",
      maxResults: 10, // You can adjust this
    });

    const messages = res.data.messages;
    if (!messages) return [];

    const emails = await Promise.all(
      messages.map(async (message) => {
        const msg = await gmail.users.messages.get({
          userId: "me",
          id: message.id,
          format: "full", // Or 'metadata', 'minimal' if you want less
        });
        return msg.data;
      })
    );

    return emails;
  } catch (error) {
    console.error("Error fetching emails:", error);
    throw new Error("Failed to fetch emails");
  }
};

// Placeholder for sending email — will connect later
export const sendEmail = async (to, subject, body) => {
  // TODO: Implement email sending functionality with Gmail API
  // Currently a placeholder
};
