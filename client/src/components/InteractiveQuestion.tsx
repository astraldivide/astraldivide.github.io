import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface QuestionOption {
  text: string;
  correct: boolean;
  explanation: string;
}

interface InteractiveQuestionProps {
  question: string;
  options: QuestionOption[];
}

export function InteractiveQuestion({ question, options }: InteractiveQuestionProps) {
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
    <Card className="p-8 max-w-4xl mx-auto my-12">
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
            ?
          </div>
          <h3 className="text-xl md:text-2xl font-semibold flex-1">{question}</h3>
        </div>

        <div className="space-y-3">
          {options.map((option, index) => {
            const isSelected = selectedOption === index;
            const showCorrect = hasAnswered && option.correct;
            const showIncorrect = hasAnswered && isSelected && !option.correct;

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                data-testid={`button-option-${index}`}
                disabled={hasAnswered}
                className={`
                  w-full text-left p-4 rounded-lg border-2 transition-all
                  ${!hasAnswered ? 'hover-elevate active-elevate-2' : ''}
                  ${isSelected && !hasAnswered ? 'border-primary bg-primary/5' : ''}
                  ${showCorrect ? 'border-chart-3 bg-chart-3/10' : ''}
                  ${showIncorrect ? 'border-destructive bg-destructive/10' : ''}
                  ${!isSelected && hasAnswered ? 'opacity-50' : ''}
                  ${!hasAnswered && !isSelected ? 'border-border' : ''}
                `}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="flex-1">{option.text}</span>
                  {hasAnswered && (
                    <div className="flex-shrink-0">
                      {showCorrect && (
                        <div className="w-6 h-6 rounded-full bg-chart-3 flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                      {showIncorrect && (
                        <div className="w-6 h-6 rounded-full bg-destructive flex items-center justify-center">
                          <X className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {hasAnswered && selectedOption !== null && (
          <div className={`p-4 rounded-lg animate-fade-up ${
            isCorrect ? 'bg-chart-3/10 border border-chart-3/30' : 'bg-destructive/10 border border-destructive/30'
          }`}>
            <p className="text-sm leading-relaxed">
              {options[selectedOption].explanation}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}
