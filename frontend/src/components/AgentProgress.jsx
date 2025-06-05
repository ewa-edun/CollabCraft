export default function AgentProgress({ agents, current }) {
  return (
    <div className="flex flex-col gap-4">
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
  );
}