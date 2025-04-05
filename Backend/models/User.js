// models/User.js
import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    userEmail: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },
    // emails: [{ type: mongoose.Schema.Types.ObjectId, ref: "Email" }],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
 
export default User;
 