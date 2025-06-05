export default function Dashboard({ results }) {
  return (
    <div className="space-y-6">
      <section>
        <h3 className="font-semibold text-indigo-600">Idea Summary</h3>
        <p className="text-gray-700">{results.idea || "[Agent output goes here]"}</p>
      </section>
      <section>
        <h3 className="font-semibold text-cyan-600">Market & Research</h3>
        <p className="text-gray-700">{results.market || "[Agent output goes here]"}</p>
      </section>
      <section>
        <h3 className="font-semibold text-pink-600">Branding & UX</h3>
        <p className="text-gray-700">{results.branding || "[Agent output goes here]"}</p>
      </section>
      <section>
        <h3 className="font-semibold text-yellow-600">Pitch Deck</h3>
        <p className="text-gray-700">{results.pitch || "[Agent output goes here]"}</p>
      </section>
    </div>
  );
}