// models/Email.js
import mongoose from "mongoose";

const emailSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    from: { type: String, required: true },
    to: { type: String, required: true },
    subject: { type: String },
    body: { type: String },
    gmailId: { type: String, unique: true },
    aiGeneratedReply: { type: String },
    metadata: {
      tone: { type: String },
      friendliness: { type: String },
      // Add other metadata fields as necessary
    },
  },
  {
    timestamps: true,
  }
);

const Email = mongoose.model("Email", emailSchema);
<<<<<<< HEAD
 
=======

>>>>>>> 726e9b00202ec18df2963e4b8ab50eb52a138389
export default Email;
