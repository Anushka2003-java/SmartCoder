const API_URL = "http://localhost:5000/api";

// ✅ Chatbot message sending
export const sendMessageToAI = async (message) => {
  const res = await fetch(`${API_URL}/ai/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });
  return res.json();
};

// ✅ Fetch questions
export const fetchQuestions = async (subject) => {
  const res = await fetch(`${API_URL}/questions/${encodeURIComponent(subject)}`);
  const data = await res.json();
  return data.questions || [];
};
