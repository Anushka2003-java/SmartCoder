// backend/routes/quizRoutes.js
const express = require("express");
const Question = require("../models/Question");
const router = express.Router();

router.post("/generate", async (req, res) => {
  const { subject, count } = req.body;

  try {
    const totalQuestions = await Question.countDocuments({
      subject: { $regex: `^${subject}$`, $options: "i" }
    });

    if (totalQuestions === 0) {
      return res.json({ questions: [] });
    }

    const questions = await Question.aggregate([
      { $match: { subject: { $regex: `^${subject}$`, $options: "i" } } },
      { $sample: { size: Math.min(count, totalQuestions) } }
    ]);

    res.json({ questions });

  } catch (err) {
    console.error("Quiz Error:", err);
    res.status(500).json({ message: "Failed to generate quiz" });
  }
});

module.exports = router;
