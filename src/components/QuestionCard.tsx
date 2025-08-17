import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Question } from "@/types/assessment";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: Question;
  answer?: number | string;
  onAnswer: (value: number | string) => void;
  questionNumber: number;
  totalQuestions: number;
}

export function QuestionCard({ 
  question, 
  answer, 
  onAnswer, 
  questionNumber, 
  totalQuestions 
}: QuestionCardProps) {
  return (
    <Card className="shadow-soft animate-fade-in">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <Badge variant="secondary">
            Question {questionNumber} of {totalQuestions}
          </Badge>
          <Badge variant="outline">
            {question.framework}
          </Badge>
        </div>
        <CardTitle className="text-lg leading-relaxed">
          {question.text}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {question.type === 'scale' && (
          <div className="space-y-4">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{question.scaleLabels?.min}</span>
              <span>{question.scaleLabels?.max}</span>
            </div>
            <div className="flex gap-2 justify-center">
              {Array.from({ length: (question.scaleMax || 5) - (question.scaleMin || 1) + 1 }, (_, i) => {
                const value = (question.scaleMin || 1) + i;
                return (
                  <Button
                    key={value}
                    variant={answer === value ? "default" : "outline"}
                    className={cn(
                      "w-12 h-12 rounded-full",
                      answer === value && "shadow-elegant"
                    )}
                    onClick={() => onAnswer(value)}
                  >
                    {value}
                  </Button>
                );
              })}
            </div>
          </div>
        )}

        {(question.type === 'multiple-choice' || question.type === 'single-choice') && (
          <div className="space-y-3">
            {question.options?.map((option, index) => (
              <Button
                key={index}
                variant={answer === option ? "default" : "outline"}
                className={cn(
                  "w-full text-left justify-start h-auto p-4 whitespace-normal",
                  answer === option && "shadow-elegant"
                )}
                onClick={() => onAnswer(option)}
              >
                <span className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-semibold">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{option}</span>
                </span>
              </Button>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}