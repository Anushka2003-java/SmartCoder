import React, { useState } from "react";
import { askAI } from "../services/api"; // ✅ correct import

export default function AiAssistant() {
  const [chat, setChat] = useState([
    { sender: "bot", text: "Hi! Ask me anything 😊" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMsg = { sender: "user", text: input };
    setChat((prev) => [...prev, newMsg]);

    try {
      const response = await askAI(input); // ✅ using askAI instead of sendMessageToAI
      const botReply = response.reply || "⚠️ AI is offline right now.";

      setChat((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (error) {
      setChat((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Error contacting AI service!" },
      ]);
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
