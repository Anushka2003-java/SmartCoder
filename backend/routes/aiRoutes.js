import express from "express";
import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config(); // ✅ ensures env vars load even if server.js fails early

const router = express.Router();

// ✅ Always define with fallback key to avoid missing env issue
const groqApiKey =
  process.env.GROQ_API_KEY?.trim() ||
  "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";

const client = new Groq({ apiKey: groqApiKey });

// POST /api/ai/chat
router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    console.log("User asked:", message);

    const response = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: "You are a helpful AI assistant for students." },
        { role: "user", content: message },
      ],
    });

    const aiMessage =
      response.choices?.[0]?.message?.content || "⚠️ AI response unavailable.";
    console.log("AI Reply:", aiMessage);

    res.json({ reply: aiMessage });
  } catch (error) {
    console.error("AI ERROR:", error);
    res.status(500).json({ reply: "⚠️ AI service error. Try again later!" });
  }
});

export default router;
