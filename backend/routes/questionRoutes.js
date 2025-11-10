import express from "express";
import Question from "../models/Question.js";

const router = express.Router();

router.get("/:subject", async (req, res) => {
  try {
    const subject = decodeURIComponent(req.params.subject);

    console.log("📌 Fetch request for subject:", subject);

    const questions = await Question.find({ subject }).select(
      "question options correctAnswer"
    );

    if (!questions.length) {
      console.warn(`⚠️ No questions found for subject: ${subject}`);
      return res.json([]);
    }

    res.json(questions);
  } catch (error) {
    console.error("❌ Error fetching questions:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

export default router;
