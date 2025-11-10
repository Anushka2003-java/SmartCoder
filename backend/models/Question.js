import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  question: { type: String, required: true },
  options: [String],
  correctAnswer: { type: Number, required: true }
});

const Question = mongoose.model("Question", QuestionSchema);

export default Question;
