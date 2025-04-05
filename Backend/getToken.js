import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config();

const oauth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  process.env.GMAIL_REDIRECT_URI
);

const code = '4/0Ab_5qlnBtoLdF87wWkOxEzDjziR_5bQfFo047aIum10bAumaZjX4C4ULVCQLfne73QtZ8g'; // Replace with your code

async function getToken() {
  try {
    const { tokens } = await oauth2Client.getToken(code);
    console.log('Access Token:', tokens.access_token);
    console.log('Refresh Token:', tokens.refresh_token);
    console.log('Token Expiry:', tokens.expiry_date);
  } catch (error) {
    console.error('Error fetching tokens:', error);
  }
}

getToken();
