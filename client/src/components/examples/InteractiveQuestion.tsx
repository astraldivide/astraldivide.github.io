import { InteractiveQuestion } from '../InteractiveQuestion'

export default function InteractiveQuestionExample() {
  const options = [
    {
      text: "GPS uses simple addition and subtraction",
      correct: false,
      explanation: "GPS actually relies on advanced mathematics including Einstein's theory of relativity and complex algorithms."
    },
    {
      text: "GPS combines relativity theory with triangulation algorithms",
      correct: true,
      explanation: "Correct! GPS satellites must account for time dilation from both special and general relativity, while using triangulation to pinpoint your location."
    },
    {
      text: "GPS only needs one satellite to work",
      correct: false,
      explanation: "GPS requires at least four satellites to determine your 3D position and time accurately."
    }
  ];

  return (
    <div className="p-8">
      <InteractiveQuestion 
        question="How does GPS use mathematics to find your location?"
        options={options}
      />
    </div>
  )
}
