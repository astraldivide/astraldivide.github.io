import { TriviaQuestion } from '../TriviaQuestion'

export default function TriviaQuestionExample() {
  const options = [
    {
      text: "Albert Einstein",
      correct: false,
      explanation: "While Einstein's theory of relativity is crucial for GPS, he didn't invent the system itself."
    },
    {
      text: "Gladys West",
      correct: true,
      explanation: "Correct! Gladys West, an African-American mathematician, developed the mathematical models that became the foundation of GPS technology in the 1970s-80s."
    },
    {
      text: "Steve Jobs",
      correct: false,
      explanation: "Steve Jobs brought GPS to smartphones, but didn't invent the underlying technology."
    }
  ];

  return (
    <div className="p-8 bg-background">
      <TriviaQuestion 
        question="Who developed the mathematical models that became the foundation of GPS?"
        options={options}
        funFact="Gladys West worked for the U.S. Naval Surface Warfare Center for 42 years, but her crucial contributions to GPS weren't widely recognized until 2018!"
      />
    </div>
  )
}
