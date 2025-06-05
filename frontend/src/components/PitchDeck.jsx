export default function PitchDeck({ elevatorPitch, slides }) {
  return (
    <div>
      <h3 className="font-semibold text-indigo-600 mb-2">Elevator Pitch</h3>
      <p className="mb-4">{elevatorPitch || "[Elevator pitch goes here]"}</p>
      <h3 className="font-semibold text-cyan-600 mb-2">Slides</h3>
      <ul className="list-disc list-inside space-y-2">
        {(slides && slides.length > 0
          ? slides
          : ["[Slides go here]"]
        ).map((slide, idx) => (
          <li key={idx}>{slide}</li>
        ))}
      </ul>
    </div>
  );
}