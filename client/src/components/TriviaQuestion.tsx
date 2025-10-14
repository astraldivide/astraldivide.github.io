import { useState } from "react";
import { Sparkles, Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";

interface QuestionOption {
  text: string;
  correct: boolean;
  explanation: string;
}

interface TriviaQuestionProps {
  question: string;
  options: QuestionOption[];
  funFact?: string;
}

export function TriviaQuestion({ question, options, funFact }: TriviaQuestionProps) {
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
    <Card className="p-8 md:p-12 max-w-4xl mx-auto my-16 bg-card shadow-lg">
      <div className="space-y-8">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <p className="text-xs uppercase tracking-wider font-sans text-muted-foreground mb-2">Trivia Time</p>
            <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight">{question}</h3>
          </div>
        </div>

        <div className="space-y-4">
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
                  w-full text-left p-6 rounded-lg border-2 transition-all font-body text-lg
                  ${!hasAnswered ? 'hover-elevate active-elevate-2 border-border' : ''}
                  ${isSelected && !hasAnswered ? 'border-primary bg-primary/5' : ''}
                  ${showCorrect ? 'border-chart-3 bg-chart-3/10' : ''}
                  ${showIncorrect ? 'border-destructive bg-destructive/10' : ''}
                  ${!isSelected && hasAnswered && !option.correct ? 'opacity-50' : ''}
                  ${!hasAnswered && !isSelected ? 'border-border' : ''}
                `}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="flex-1">{option.text}</span>
                  {hasAnswered && (
                    <div className="flex-shrink-0">
                      {showCorrect && (
                        <div className="w-8 h-8 rounded-full bg-chart-3 flex items-center justify-center">
                          <Check className="w-5 h-5 text-white" />
                        </div>
                      )}
                      {showIncorrect && (
                        <div className="w-8 h-8 rounded-full bg-destructive flex items-center justify-center">
                          <X className="w-5 h-5 text-white" />
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
          <div className={`p-6 rounded-lg border-2 animate-fade-up ${
            isCorrect ? 'bg-chart-3/10 border-chart-3/30' : 'bg-destructive/10 border-destructive/30'
          }`}>
            <p className="font-body text-lg leading-relaxed mb-3">
              {options[selectedOption].explanation}
            </p>
            {funFact && isCorrect && (
              <p className="text-sm text-muted-foreground font-sans italic border-t border-current/20 pt-3 mt-3">
                ✨ {funFact}
              </p>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}
