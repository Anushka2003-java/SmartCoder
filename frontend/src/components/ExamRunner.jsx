import React, { useEffect, useState } from "react";
import { fetchQuestions } from "../services/api";
import ScoreModal from "./ScoreModal";

export default function ExamRunner({ subject, onExit }) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [scoreData, setScoreData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const data = await fetchQuestions(subject);
        setQuestions(data);
      } catch {
        alert("Could not load questions.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [subject]);

  const choose = (qIndex, optIndex) => setSelected((s) => ({ ...s, [qIndex]: optIndex }));

  const handleSubmit = () => {
    let correct = 0;
    const answers = [];
    questions.forEach((q, i) => {
      const sel = selected[i];
      if (sel === q.correctAnswer) correct++;
      answers.push({ question: q.question, selected: sel, correct: q.correctAnswer });
    });
    setScoreData({ total: questions.length, correct, answers, subject });
    setSubmitted(true);
    setShowModal(true);
  };

  if (loading) return <div>Loading questions...</div>;
  if (!questions.length) return <div>No questions available for {subject}.</div>;

  return (
    <div>
      <h3>{subject} — {questions.length} Questions</h3>
      {questions.map((q, i) => (
        <div key={i} className="exam-card">
          <p><b>{i + 1}.</b> {q.question}</p>
          {q.options.map((opt, idx) => (
            <label key={idx}>
              <input
                type="radio"
                name={`q${i}`}
                checked={selected[i] === idx}
                onChange={() => choose(i, idx)}
              />{" "}
              {opt}
            </label>
          ))}
        </div>
      ))}

      <div>
        <button className="cta" onClick={handleSubmit} disabled={submitted}>Submit</button>
        <button onClick={onExit}>Exit</button>
      </div>

      {showModal && scoreData && (
        <ScoreModal
          data={scoreData}
          onClose={() => setShowModal(false)}
          onRetake={() => window.location.reload()}
          onBack={onExit}
        />
      )}
    </div>
  );
}
