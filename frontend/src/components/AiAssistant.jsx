import React, { useState } from "react";
import { sendMessageToAI } from "../services/api";

export default function AiAssistant() {
  const [chat, setChat] = useState([{ sender: "bot", text: "Hi! Ask me anything 😊" }]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setChat((prev) => [...prev, userMsg]);

    try {
      const response = await sendMessageToAI(input);
      const botReply = response.reply || "⚠️ AI service error, try again later!";
      setChat((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch {
      setChat((prev) => [...prev, { sender: "bot", text: "⚠️ AI service error!" }]);
    }

    setInput("");
  };

  return (
    <section className="ai-section">
      <h2 className="ai-title">AI Mentor 🤖</h2>

      <div className="chat-box">
        {chat.map((msg, i) => (
          <p key={i} className={msg.sender === "user" ? "user-msg" : "bot-msg"}>
            {msg.text}
          </p>
        ))}
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Ask anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </section>
  );
}
