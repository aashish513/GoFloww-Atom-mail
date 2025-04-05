// models/User.js
import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
<<<<<<< HEAD
    userEmail: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },
    // emails: [{ type: mongoose.Schema.Types.ObjectId, ref: "Email" }],
=======
    email: { type: String, required: true, unique: true },
    name: { type: String },
    
>>>>>>> 726e9b00202ec18df2963e4b8ab50eb52a138389
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
<<<<<<< HEAD
 
export default User;
 
=======

export default User;
>>>>>>> 726e9b00202ec18df2963e4b8ab50eb52a138389
