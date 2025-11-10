const API_URL = "http://localhost:5000/api";

export const sendMessageToAI = async (message) => {
  const res = await fetch("http://localhost:5000/api/ai/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  return await res.json();
};

// ✅ Keep fetchQuestions empty for now so it doesn't break UI
export const fetchQuestions = async (subject) => {
  return []; // We'll fix later
};
