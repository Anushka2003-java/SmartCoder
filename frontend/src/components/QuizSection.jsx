export default function QuizSection() {
  return (
    <section id="createQuiz" className="quiz-section">
      <h2>Create Quiz</h2>
      <input id="quizTitle" type="text" placeholder="Quiz Title" />
      <input id="numQuestions" type="number" placeholder="Number of Questions" />
      <button id="generateQuizBtn" className="generate-btn">
        Generate Quiz Code
      </button>

      <p id="quizCodeDisplay" className="quiz-code"></p>
    </section>
  );
}
