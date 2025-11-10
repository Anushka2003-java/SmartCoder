import { useEffect, useState } from "react";
import { fetchQuestions } from "../services/api";
import ScoreModal from "./ScoreModal";

// ✅ Normalize UI subject names to database values
const subjectMap = {
  "DSA": "DSA",
  "Aptitude": "Aptitude",
  "Cyber Security": "Cyber Security",
  "AI & ML": "AI & ML",
  "DBMS": "DBMS",
  "OS": "OS",
  "CN": "CN",
  "Web Development": "Web Development",
  "Cloud Computing": "Cloud Computing",
  "ML Advanced": "ML Advanced"
};

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

        const normalized = subjectMap[subject] || subject;
        const data = await fetchQuestions(normalized);

        setQuestions(data || []);
      } catch (err) {
        console.error("Failed to load questions", err);
        alert("Could not load questions. Try again.");
      }
      setLoading(false);
    }

    load();
  }, [subject]);

  const choose = (qIndex, optIndex) => {
    setSelected((s) => ({ ...s, [qIndex]: optIndex }));
  };

  const handleSubmit = () => {
    let correct = 0;
    const answers = [];

    questions.forEach((q, i) => {
      const sel = selected[i];
      if (sel === q.correctAnswer) correct++;

      answers.push({
        question: q.question,
        selected: sel,
        correctAnswer: q.correctAnswer,
        options: q.options
      });
    });

    setScoreData({
      total: questions.length,
      correct,
      answers,
      subject
    });

    setSubmitted(true);
    setShowModal(true);
  };

  if (loading)
    return <div style={{ marginTop: 20 }}>Loading questions...</div>;

  if (!questions.length)
    return <div style={{ marginTop: 20 }}>No questions available for {subject}.</div>;

  return (
    <div style={{ width: "100%" }}>
      <div style={{ marginBottom: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3>{subject} — {questions.length} Questions</h3>
      </div>

      <div>
        {questions.map((q, i) => (
          <div key={i} className="exam-card" style={{ marginBottom: 16, textAlign: "left" }}>
            <p><strong>{i + 1}.</strong> {q.question}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {q.options.map((opt, idx) => (
                <label key={idx} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
                  <input
                    type="radio"
                    name={`q${i}`}
                    checked={selected[i] === idx}
                    onChange={() => choose(i, idx)}
                  />
                  <span style={{ color: selected[i] === idx ? "#007a5e" : "#333" }}>
                    {opt}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 14 }}>
        <button className="cta" onClick={handleSubmit} disabled={submitted}>Submit</button>
        <button onClick={onExit}>Exit</button>
      </div>

      {showModal && scoreData && (
        <ScoreModal
          data={scoreData}
          onClose={() => setShowModal(false)}
          onRetake={() => {
            setSubmitted(false);
            setShowModal(false);
          }}
          onBack={() => {
            setShowModal(false);
            onExit();
          }}
        />
      )}
    </div>
  );
}
