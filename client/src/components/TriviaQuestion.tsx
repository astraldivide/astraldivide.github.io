import { useState } from "react";
import { Sparkles, Info } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TriviaOption {
  text: string;
  correct: boolean;
  funFact: string;
}

interface TriviaQuestionProps {
  question: string;
  options: TriviaOption[];
  accentColor?: string;
}

export function TriviaQuestion({ question, options, accentColor = "bg-primary" }: TriviaQuestionProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleAnswer = (index: number) => {
    if (!hasAnswered) {
      setSelectedOption(index);
      setHasAnswered(true);
    }
  };

  const isCorrect = selectedOption !== null && options[selectedOption]?.correct;

  return (
    <div className="max-w-5xl mx-auto my-20 px-4">
      <Card className="relative overflow-hidden border-2">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-[100px]"></div>
        
        <div className="relative p-8 md:p-12">
          <div className="flex items-start gap-4 mb-8">
            <div className={`flex-shrink-0 w-12 h-12 rounded-2xl ${accentColor}/10 flex items-center justify-center`}>
              <Sparkles className={`w-6 h-6 ${accentColor.replace('bg-', 'text-')}`} />
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-semibold flex-1 leading-tight">
              {question}
            </h3>
          </div>

          <div className="grid gap-4 mb-6">
            {options.map((option, index) => {
              const isSelected = selectedOption === index;
              const showCorrect = hasAnswered && option.correct;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  data-testid={`button-trivia-${index}`}
                  disabled={hasAnswered}
                  className={`
                    relative text-left p-6 rounded-xl border-2 transition-all text-lg
                    ${!hasAnswered ? 'hover-elevate active-elevate-2' : ''}
                    ${isSelected && !hasAnswered ? `border-${accentColor.replace('bg-', '')} ${accentColor}/5` : ''}
                    ${showCorrect ? 'border-chart-3 bg-chart-3/5' : ''}
                    ${!showCorrect && hasAnswered && !isSelected ? 'opacity-40' : ''}
                    ${!hasAnswered && !isSelected ? 'border-border' : ''}
                  `}
                  style={{
                    marginLeft: index % 2 === 1 ? '2rem' : '0',
                  }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex-1">{option.text}</span>
                    {showCorrect && (
                      <Sparkles className="w-5 h-5 text-chart-3 flex-shrink-0" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {hasAnswered && selectedOption !== null && (
            <div className={`p-6 rounded-xl border-2 animate-fade-up ${
              isCorrect 
                ? 'bg-chart-3/5 border-chart-3/30' 
                : 'bg-accent/30 border-accent/50'
            }`}>
              <div className="flex items-start gap-3">
                <Info className={`w-5 h-5 mt-1 flex-shrink-0 ${isCorrect ? 'text-chart-3' : 'text-accent-foreground'}`} />
                <div>
                  <p className={`font-semibold mb-2 ${isCorrect ? 'text-chart-3' : 'text-accent-foreground'}`}>
                    {isCorrect ? 'Amazing! You got it!' : 'Interesting choice!'}
                  </p>
                  <p className="text-sm leading-relaxed text-foreground/90">
                    {options[selectedOption].funFact}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
