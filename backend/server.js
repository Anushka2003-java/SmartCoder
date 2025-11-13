import dotenv from "dotenv";
dotenv.config(); // ✅ must come first

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import aiRoutes from "./routes/aiRoutes.js";
import questionRoutes from "./routes/questionRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
connectDB();

// ✅ Routes
app.use("/api/ai", aiRoutes);
app.use("/api/questions", questionRoutes);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
  console.log(`✅ MongoDB connected`);
});
