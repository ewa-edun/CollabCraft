import { Link } from "react-router-dom";

export default function PitchView() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-100 px-4 py-10">
      <div className="max-w-2xl w-full bg-white/90 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
          🎤 Pitch Deck
        </h2>
        <div className="mb-6">
          <h3 className="font-semibold text-indigo-600">Elevator Pitch</h3>
          <p className="text-gray-700">[Elevator pitch goes here]</p>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold text-cyan-600">Slide Content</h3>
          <p className="text-gray-700">[Slides go here]</p>
        </div>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition w-full mb-4">
          Export as PDF
        </button>
        <Link
          to="/dashboard"
          className="block text-center text-indigo-600 underline hover:text-indigo-800"
        >
          ← Back to Results
        </Link>
      </div>
    </div>
  );
}