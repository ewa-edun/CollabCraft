import { useState } from "react";

// Simulate agent chain processing
export function useAgentChain() {
  const [results, setResults] = useState({
    idea: "",
    market: "",
    branding: "",
    pitch: "",
  });

  // Simulate running agents in sequence
  const runAgents = async (ideaInput) => {
    setResults({
      idea: `Refined: ${ideaInput}`,
      market: "Market research and SWOT analysis...",
      branding: "Branding and UX suggestions...",
      pitch: "Pitch deck content...",
    });
  };

  return { results, runAgents };
}