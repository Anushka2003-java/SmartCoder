export default function Navbar({ onLoginClick, userName, onLogout }) {
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
        <li id="authSection" style={{ listStyle: "none" }}>
          {userName ? (
            <>
              <span className="welcome">Welcome, {userName}!</span>
              <button className="login-btn" onClick={onLogout}>Logout</button>
            </>
          ) : (
            <button className="login-btn" id="loginBtn" onClick={onLoginClick}>Login</button>
          )}
        </li>
      </ul>
    </nav>
  );
}
