import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AssessmentIntro } from "@/components/AssessmentIntro";
import { QuestionCard } from "@/components/QuestionCard";
import { ProgressBar } from "@/components/ProgressBar";
import { ResultsPage } from "@/components/ResultsPage";
import { assessmentSections } from "@/data/assessmentData";
import { Answer } from "@/types/assessment";
import { calculateAssessmentResults } from "@/utils/assessmentScoring";
import { ChevronLeft, ChevronRight } from "lucide-react";

type AssessmentPhase = 'intro' | 'questions' | 'results';

export default function Assessment() {
  const [phase, setPhase] = useState<AssessmentPhase>('intro');
  const [currentSectionIndex, setSectionIndex] = useState(0);
  const [currentQuestionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const currentSection = assessmentSections[currentSectionIndex];
  const currentQuestion = currentSection?.questions[currentQuestionIndex];
  const totalQuestions = assessmentSections.reduce((sum, section) => sum + section.questions.length, 0);
  const completedQuestions = assessmentSections.slice(0, currentSectionIndex).reduce((sum, section) => sum + section.questions.length, 0) + currentQuestionIndex;

  const startAssessment = () => {
    setPhase('questions');
  };

  const getCurrentAnswer = () => {
    return answers.find(a => a.questionId === currentQuestion?.id)?.value;
  };

  const saveAnswer = (value: number | string) => {
    if (!currentQuestion) return;
    
    setAnswers(prev => {
      const existing = prev.findIndex(a => a.questionId === currentQuestion.id);
      const newAnswer: Answer = { questionId: currentQuestion.id, value };
      
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = newAnswer;
        return updated;
      } else {
        return [...prev, newAnswer];
      }
    });
  };

  const goToNext = () => {
    if (currentQuestionIndex < currentSection.questions.length - 1) {
      setQuestionIndex(prev => prev + 1);
    } else if (currentSectionIndex < assessmentSections.length - 1) {
      setSectionIndex(prev => prev + 1);
      setQuestionIndex(0);
    } else {
      // Assessment complete
      setPhase('results');
    }
  };

  const goToPrevious = () => {
    if (currentQuestionIndex > 0) {
      setQuestionIndex(prev => prev - 1);
    } else if (currentSectionIndex > 0) {
      setSectionIndex(prev => prev - 1);
      setQuestionIndex(assessmentSections[currentSectionIndex - 1].questions.length - 1);
    }
  };

  const retakeAssessment = () => {
    setPhase('intro');
    setSectionIndex(0);
    setQuestionIndex(0);
    setAnswers([]);
  };

  const canGoNext = getCurrentAnswer() !== undefined;
  const canGoPrevious = currentSectionIndex > 0 || currentQuestionIndex > 0;

  if (phase === 'intro') {
    return <AssessmentIntro onStartAssessment={startAssessment} />;
  }

  if (phase === 'results') {
    const results = calculateAssessmentResults(answers);
    return <ResultsPage results={results} onRetakeAssessment={retakeAssessment} />;
  }

  return (
    <div className="min-h-screen bg-gradient-secondary p-4">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Progress */}
        <ProgressBar
          currentSection={currentSectionIndex + 1}
          totalSections={assessmentSections.length}
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={currentSection.questions.length}
          timeRemaining={currentSection.estimatedTime}
          sectionTitle={currentSection.title}
        />

        {/* Question */}
        <QuestionCard
          question={currentQuestion}
          answer={getCurrentAnswer()}
          onAnswer={saveAnswer}
          questionNumber={completedQuestions + 1}
          totalQuestions={totalQuestions}
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={goToPrevious}
            disabled={!canGoPrevious}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          <div className="text-sm text-muted-foreground">
            {completedQuestions + 1} of {totalQuestions}
          </div>

          <Button
            onClick={goToNext}
            disabled={!canGoNext}
            className="flex items-center gap-2"
            variant={canGoNext ? "default" : "outline"}
          >
            {currentSectionIndex === assessmentSections.length - 1 && 
             currentQuestionIndex === currentSection.questions.length - 1 
              ? "View Results" 
              : "Next"
            }
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}