import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import aiRoutes from "./routes/aiRoutes.js";
import questionRoutes from "./routes/questionRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ API routes
app.use("/api/ai", aiRoutes);
app.use("/api/questions", questionRoutes);

app.listen(process.env.PORT, () => {
  console.log("✅ Backend running on port", process.env.PORT);
});
