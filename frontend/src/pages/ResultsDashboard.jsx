import React from 'react';
import { Link } from "react-router-dom";

export default function ResultsDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-cyan-100 flex flex-col items-center px-4 py-10">
      <div className="max-w-3xl w-full bg-white/90 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
          🚀 Your Startup Results
        </h2>
        {/* Replace below with collapsible agent sections */}
        <div className="mb-4">
          <h3 className="font-semibold text-indigo-600">Idea Summary</h3>
          <p className="text-gray-700">[Agent output goes here]</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-cyan-600">Market & Research</h3>
          <p className="text-gray-700">[Agent output goes here]</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-pink-600">Branding & UX</h3>
          <p className="text-gray-700">[Agent output goes here]</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-yellow-600">Pitch Deck</h3>
          <p className="text-gray-700">[Agent output goes here]</p>
        </div>
        <div className="flex gap-4 mt-8 justify-center">
          <Link
            to="/pitch"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            View Pitch Deck
          </Link>
          <Link
            to="/"
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}