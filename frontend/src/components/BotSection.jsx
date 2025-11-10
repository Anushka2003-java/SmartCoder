export default function BotSection() {
  return (
    <section className="chatbot-section">
      <h2>Ask SmartBot</h2>

      <div id="chatBox" className="chatbox">
        <p className="bot-msg">Hi! Ask me anything about you Topic💡</p>
      </div>

      <div className="chat-input-box">
        <input
          type="text"
          id="chatInput"
          placeholder="Type your question..."
        />
        <button id="sendChat" className="send-btn">
          Send
        </button>
      </div>
    </section>
  );
}
