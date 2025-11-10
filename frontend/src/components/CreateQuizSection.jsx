import { useState } from "react";

export default function CreateQuizSection() {
  const [code, setCode] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const generated = "QZ-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    setCode(`Your Quiz Code: ${generated}`);
  }

  return (
    <section id="createQuiz" className="section">
      <h2>Create Your Own Quiz</h2>
      <form id="quizForm" onSubmit={handleSubmit}>
        <input type="text" id="quizTitle" placeholder="Enter Quiz Title" required />
        <input type="number" id="numQuestions" placeholder="No. of Questions" required />
        <button type="submit">Generate Quiz Code</button>
      </form>
      <div id="quizCodeDisplay">{code}</div>
    </section>
  );
}
