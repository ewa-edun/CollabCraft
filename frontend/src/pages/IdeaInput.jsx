import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function IdeaInput() {
  const [idea, setIdea] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Save idea to context or state
    navigate("/progress");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-indigo-50 to-cyan-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 rounded-xl shadow-lg p-8 max-w-lg w-full flex flex-col gap-6"
      >
        <h2 className="text-3xl font-bold text-indigo-700 mb-2 text-center">
          What's your startup idea?
        </h2>
        <textarea
          className="border border-indigo-200 rounded-lg p-4 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
          placeholder="Describe your idea in a few sentences..."
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Submit & Start Agents
        </button>
      </form>
    </div>
  );
}