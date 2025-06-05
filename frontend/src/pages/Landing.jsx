import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-100 flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-4 drop-shadow">
          🚀 CollabCraft
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Build your dream startup with AI agents. Go from idea to pitch in minutes!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            to="/idea"
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition font-semibold text-lg"
          >
            Start Your Startup
          </Link>
        </div>
        <div className="bg-white/80 rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-indigo-600 mb-2">How It Works</h2>
          <ol className="text-left text-gray-700 space-y-1 list-decimal list-inside">
            <li>Input your rough startup idea.</li>
            <li>Watch our AI agents (Ideana, Scopey, Brandie, PitchPal) refine, research, and brand it.</li>
            <li>Get a ready-to-pitch deck and summary in minutes!</li>
          </ol>
        </div>
        <div className="flex flex-wrap gap-2 justify-center text-sm text-gray-500">
          <span>Powered by Gemini & ADK</span>
          <span>·</span>
          <Link to="/dashboard" className="underline hover:text-indigo-600">See Example Output</Link>
        </div>
      </div>
    </div>
  );
}