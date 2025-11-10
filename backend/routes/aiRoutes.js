// backend/routes/aiRoutes.js
import express from "express";
import Groq from "groq-sdk";
import dotenv from "dotenv";
dotenv.config();


const router = express.Router();

// ✅ Load API Key
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// ✅ POST /api/ai/chat
router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({ reply: "Please type a message!" });
    }

    console.log("AI Request:", message);

    const result = await groq.chat.completions.create({
      messages: [{ role: "user", content: message }],
      model: "llama-3.1-8b-instant",
      temperature: 0.7,
      max_tokens: 200,
    });

    const aiText = result.choices?.[0]?.message?.content || "No reply";

    console.log("AI Response:", aiText);

    // ✅ Send in format frontend understands
    return res.json({ reply: aiText });

  } catch (error) {
    console.error("AI ERROR:", error);
    return res
      .status(500)
      .json({ reply: "⚠️ AI service error, try again later!" });
  }
});

export default router;
