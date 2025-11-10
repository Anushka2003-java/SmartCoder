import { useEffect, useState } from "react";

export default function LoginModal({ visible, onClose, onLogin }) {
  const [name, setName] = useState("");

  useEffect(() => {
    if (visible) {
      setName("");
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="modal" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Student Login</h3>
        <input
          type="text"
          id="studentName"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button id="submitLogin" onClick={() => {
          const v = name.trim();
          if (!v) return alert("Please enter your name");
          onLogin(v);
        }}>Login</button>
      </div>
    </div>
  );
}
