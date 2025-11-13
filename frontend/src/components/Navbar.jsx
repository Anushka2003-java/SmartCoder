import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">SmartCoder</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#exams">Exams</a></li>
        <li><a href="#createQuiz">Create Quiz</a></li>
        <li><a href="#aiAssistant">AI Assistant</a></li>
        <li><a href="#about">About</a></li>
        <li id="authSection"><button id="loginBtn" className="login-btn">Login</button></li>
      </ul>
    </nav>
  );
}
