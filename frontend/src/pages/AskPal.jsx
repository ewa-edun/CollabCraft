import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AskPal() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = (e) => {
    e.preventDefault();
    // TODO: Call Gemini API
    setAnswer("This is a sample answer from Gemini.");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-indigo-50 to-cyan-100 px-4">
      <div className="max-w-lg w-full bg-white/90 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">
          🤖 AskPal – Startup Q&A
        </h2>
        <form onSubmit={handleAsk} className="flex flex-col gap-4 mb-4">
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
        <Link
          to="/"
          className="block text-center text-indigo-600 underline hover:text-indigo-800 mt-6"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}