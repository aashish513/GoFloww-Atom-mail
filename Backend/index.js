// index.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
<<<<<<< HEAD
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js"
=======

>>>>>>> 726e9b00202ec18df2963e4b8ab50eb52a138389
import emailRoutes from "./routes/emailRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

<<<<<<< HEAD
app.use(
  cors({
    origin: "http://localhost:3000", // frontend origin
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", authRoutes);
=======
app.use(cors());
app.use(express.json());

// Routes
>>>>>>> 726e9b00202ec18df2963e4b8ab50eb52a138389
app.use("/api/v1", emailRoutes);

mongoose.set("strictQuery", true); 

mongoose
  mongoose
  .connect(process.env.DATABASE_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");

    // Start the server only after successful DB connection
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection failed:", error);
  });
