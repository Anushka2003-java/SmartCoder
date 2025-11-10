import React, { useState } from "react";
import ExamRunner from "../components/ExamRunner";

export default function ExamsSection() {
  const subjects = [
    "DSA",
    "Aptitude",
    "Cyber Security",
    "AI & ML",
    "DBMS",
    "OS",
    "CN",
    "Web Development",
    "Cloud Computing",
    "ML Advanced",
  ];

  const [activeExam, setActiveExam] = useState(null);

  const handleSubjectClick = (subject) => {
    setActiveExam(subject); // ✅ Switch to exam mode
  };

  // ✅ If exam active → show exam runner screen
  if (activeExam) {
    return (
      <ExamRunner
        subject={activeExam}
        onExit={() => setActiveExam(null)}
      />
    );
  }

  return (
    <section className="exams-section">
      <h2 className="exams-title">Available Exams</h2>

      <div className="exam-grid">
        {subjects.map((sub, index) => (
          <div
            key={index}
            className="exam-card"
            onClick={() => handleSubjectClick(sub)}
          >
            {sub}
          </div>
        ))}
      </div>
    </section>
  );
}
