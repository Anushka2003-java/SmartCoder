import React, { useEffect, useState } from "react";

export default function LoginModal() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [user, setUser] = useState(localStorage.getItem("studentName") || "");

  useEffect(() => {
    function onDocClick(e) {
      if (e.target.id === "loginModal") setShow(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  useEffect(() => {
    const loginBtn = document.getElementById("loginBtn");
    loginBtn?.addEventListener("click", () => setShow(true));
    return () => loginBtn?.removeEventListener("click", () => setShow(true));
  }, []);

  function submit() {
    const n = name.trim();
    if (!n) return alert("Please enter your name");
    localStorage.setItem("studentName", n);
    setUser(n);
    setShow(false);
    // update authSection DOM to show logout (since navbar is static HTML here)
    const auth = document.getElementById("authSection");
    if (auth) auth.innerHTML = `<span class="welcome">Welcome, ${n}!</span> <button id="logoutBtn" class="login-btn">Logout</button>`;
    const logoutBtn = document.getElementById("logoutBtn");
    logoutBtn?.addEventListener("click", () => {
      localStorage.removeItem("studentName");
      auth.innerHTML = `<button id="loginBtn" class="login-btn">Login</button>`;
    });
  }

  return (
    <div id="loginModal" className="modal" style={{ display: show ? "flex" : "none" }}>
      <div className="modal-content">
        <h3>Student Login</h3>
        <input type="text" id="studentName" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} />
        <button id="submitLogin" onClick={submit}>Login</button>
      </div>
    </div>
  );
}
