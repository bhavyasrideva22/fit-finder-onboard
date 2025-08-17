export interface Question {
  id: string;
  text: string;
  type: 'scale' | 'multiple-choice' | 'single-choice';
  options?: string[];
  scaleMin?: number;
  scaleMax?: number;
  scaleLabels?: { min: string; max: string };
  category: 'interest' | 'personality' | 'cognitive' | 'motivation' | 'aptitude' | 'technical' | 'wiscar';
  framework?: string;
}

export interface Answer {
  questionId: string;
  value: number | string;
}

export interface AssessmentResults {
  psychometricScore: number;
  technicalScore: number;
  wiscarScores: {
    will: number;
    interest: number;
    skill: number;
    cognitive: number;
    ability: number;
    realWorld: number;
  };
  overallScore: number;
  recommendation: 'strong-fit' | 'potential-fit' | 'low-fit';
  insights: string[];
  learningPath: string[];
  alternativeRoles: string[];
}

export interface AssessmentSection {
  title: string;
  description: string;
  questions: Question[];
  estimatedTime: number;
}