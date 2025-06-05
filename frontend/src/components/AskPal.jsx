import { useState } from "react";

export default function AskPal({ onAsk }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await onAsk(question);
    setAnswer(response);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-4">
        <input
          className="border border-indigo-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Ask a startup question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Ask Gemini
        </button>
      </form>
      {answer && (
        <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded text-gray-700">
          <strong>Gemini:</strong> {answer}
        </div>
      )}
    </div>
  );
}