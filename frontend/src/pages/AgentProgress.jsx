import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const agents = [
  { name: "Ideana", color: "bg-indigo-400" },
  { name: "Scopey", color: "bg-cyan-400" },
  { name: "Brandie", color: "bg-pink-400" },
  { name: "PitchPal", color: "bg-yellow-400" },
];

export default function AgentProgress() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (current < agents.length - 1) {
      const timer = setTimeout(() => setCurrent(current + 1), 1200);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => navigate("/dashboard"), 1200);
    }
  }, [current, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-100 px-4">
      <h2 className="text-2xl font-bold text-indigo-700 mb-8">Agents at Work...</h2>
      <div className="flex flex-col gap-6 w-full max-w-md">
        {agents.map((agent, idx) => (
          <div
            key={agent.name}
            className={`flex items-center gap-4 p-4 rounded-lg shadow transition-all ${
              idx === current
                ? `${agent.color} text-white scale-105`
                : "bg-white text-gray-700 opacity-70"
            }`}
          >
            <span className="text-xl font-bold w-24">{agent.name}</span>
            <span>
              {idx < current
                ? "✅ Done"
                : idx === current
                ? "⏳ Working..."
                : "⏳ Waiting"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}