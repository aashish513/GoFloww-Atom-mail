// models/Email.js
import mongoose from "mongoose";

const emailSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
    subject: { type: String },
    body: { type: String },
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

export default Email;
