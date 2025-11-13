import React from "react";
import "../App.css";

export default function CoursesSection() {
  const courses = [
    {
      name: "DSA",
      desc: "Learn data structures and algorithms with hands-on coding.",
    },
    {
      name: "DBMS",
      desc: "Understand databases, normalization, and SQL queries.",
    },
    {
      name: "Cyber Security",
      desc: "Protect networks and applications from attacks.",
    },
    {
      name: "AI & ML",
      desc: "Explore artificial intelligence and machine learning models.",
    },
    {
      name: "Web Development",
      desc: "Build websites using HTML, CSS, JavaScript, and React.",
    },
    {
      name: "Cloud Computing",
      desc: "Deploy scalable apps on AWS, Azure, and GCP.",
    },
  ];

  return (
    <section className="courses-section">
      {/* Background Wave */}
      <div className="wave-bg"></div>

      <h2 className="section-title">Popular Courses</h2>

      <div className="courses-grid">
        {courses.map((course, i) => (
          <div key={i} className="course-card">
            <h3>{course.name}</h3>
            <p>{course.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
