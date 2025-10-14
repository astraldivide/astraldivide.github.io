import { TriviaQuestion } from '../TriviaQuestion'

export default function TriviaQuestionExample() {
  const options = [
    {
      text: "About 10 meters per day",
      correct: false,
      funFact: "Actually much worse! Without Einstein's relativity corrections, GPS would drift by about 10 KILOMETERS per day—basically useless for navigation!"
    },
    {
      text: "About 10 kilometers per day",
      correct: true,
      funFact: "Exactly! GPS satellites orbit at 20,000 km altitude traveling at 14,000 km/h. At these speeds and distances from Earth's gravity, time literally runs differently. Without correcting for both special and general relativity, your GPS would be off by 10km every single day!"
    },
    {
      text: "GPS doesn't need relativity",
      correct: false,
      funFact: "Oh, it absolutely does! Relativity isn't just theoretical—it's essential engineering. Every GPS calculation includes relativistic corrections discovered by Einstein over a century ago."
    }
  ];

  return (
    <div className="py-20">
      <TriviaQuestion 
        question="How much would GPS drift per day without Einstein's relativity math?"
        options={options}
        accentColor="bg-primary"
      />
    </div>
  )
}
