import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, CheckCircle } from "lucide-react";

interface ProgressBarProps {
  currentSection: number;
  totalSections: number;
  currentQuestion: number;
  totalQuestions: number;
  timeRemaining?: number;
  sectionTitle: string;
}

export function ProgressBar({ 
  currentSection, 
  totalSections, 
  currentQuestion, 
  totalQuestions, 
  timeRemaining,
  sectionTitle 
}: ProgressBarProps) {
  const overallProgress = ((currentSection - 1) * 100 + (currentQuestion / totalQuestions) * 100) / totalSections;
  const sectionProgress = (currentQuestion / totalQuestions) * 100;

  return (
    <Card className="shadow-soft">
      <CardContent className="pt-6">
        <div className="space-y-4">
          {/* Section info */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-sm text-foreground">{sectionTitle}</h3>
              <p className="text-xs text-muted-foreground">
                Section {currentSection} of {totalSections}
              </p>
            </div>
            {timeRemaining && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>~{timeRemaining} min remaining</span>
              </div>
            )}
          </div>

          {/* Section progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Section Progress</span>
              <span className="font-medium">{currentQuestion}/{totalQuestions}</span>
            </div>
            <Progress value={sectionProgress} className="h-2" />
          </div>

          {/* Overall progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Overall Progress</span>
              <span className="font-medium">{Math.round(overallProgress)}%</span>
            </div>
            <Progress value={overallProgress} className="h-1" />
          </div>

          {/* Completed sections indicator */}
          <div className="flex gap-1">
            {Array.from({ length: totalSections }, (_, i) => (
              <div
                key={i}
                className={`flex-1 h-1 rounded-full ${
                  i < currentSection - 1
                    ? 'bg-success'
                    : i === currentSection - 1
                    ? 'bg-gradient-primary'
                    : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}