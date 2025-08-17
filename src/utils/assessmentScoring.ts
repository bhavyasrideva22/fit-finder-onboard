import { Answer, AssessmentResults } from "@/types/assessment";
import { assessmentQuestions } from "@/data/assessmentData";

export function calculateAssessmentResults(answers: Answer[]): AssessmentResults {
  const answerMap = new Map(answers.map(a => [a.questionId, a.value]));
  
  // Calculate psychometric score (Interest + Personality + Motivation)
  const psychometricQuestions = assessmentQuestions.filter(q => 
    q.category === 'interest' || q.category === 'personality' || q.category === 'motivation'
  );
  const psychometricSum = psychometricQuestions.reduce((sum, q) => {
    const answer = answerMap.get(q.id);
    return sum + (typeof answer === 'number' ? answer : 0);
  }, 0);
  const psychometricScore = Math.round((psychometricSum / (psychometricQuestions.length * 5)) * 100);

  // Calculate technical score (Aptitude + Technical)
  const technicalQuestions = assessmentQuestions.filter(q => 
    q.category === 'aptitude' || q.category === 'technical'
  );
  const technicalCorrect = technicalQuestions.reduce((count, q) => {
    const answer = answerMap.get(q.id);
    // For simplicity, we'll count option index 1 as correct for aptitude/technical questions
    return count + (answer === getCorrectAnswer(q.id) ? 1 : 0);
  }, 0);
  const technicalScore = Math.round((technicalCorrect / technicalQuestions.length) * 100);

  // Calculate WISCAR scores
  const wiscarScores = {
    will: calculateWillScore(answers),
    interest: calculateInterestScore(answers),
    skill: calculateSkillScore(answers),
    cognitive: calculateCognitiveScore(answers),
    ability: calculateAbilityScore(answers),
    realWorld: calculateRealWorldScore(answers)
  };

  // Calculate overall score
  const overallScore = Math.round((psychometricScore + technicalScore) / 2);

  // Determine recommendation
  let recommendation: 'strong-fit' | 'potential-fit' | 'low-fit';
  if (overallScore >= 80) recommendation = 'strong-fit';
  else if (overallScore >= 50) recommendation = 'potential-fit';
  else recommendation = 'low-fit';

  // Generate insights
  const insights = generateInsights(psychometricScore, technicalScore, wiscarScores, overallScore);
  
  // Generate learning path
  const learningPath = generateLearningPath(technicalScore, wiscarScores);
  
  // Generate alternative roles
  const alternativeRoles = generateAlternativeRoles(recommendation, psychometricScore, technicalScore);

  return {
    psychometricScore,
    technicalScore,
    wiscarScores,
    overallScore,
    recommendation,
    insights,
    learningPath,
    alternativeRoles
  };
}

function getCorrectAnswer(questionId: string): string {
  // Mapping of question IDs to correct answers (option index)
  const correctAnswers: Record<string, string> = {
    'aptitude_1': 'Ask what specific part they\'re confused about and assess their current understanding',
    'aptitude_2': 'Analyze the feedback and redesign that part of the process',
    'aptitude_3': 'Sequence information based on what people need to know to do their job effectively',
    'aptitude_4': 'Check in with them to identify which parts are causing stress and adjust accordingly',
    'aptitude_5': 'Multiple metrics: time-to-productivity, satisfaction, retention, and manager feedback',
    'aptitude_6': 'Facilitate a discussion to align on what\'s most critical for the new hire\'s success',
    'aptitude_7': 'Investigate if there are barriers preventing completion and provide targeted support',
    'aptitude_8': 'Using multiple formats (visual, written, verbal) and checking for understanding',
    'technical_1': 'To track, deliver, and manage learning content and progress',
    'technical_2': 'Revealing information gradually based on need and readiness',
    'technical_3': 'Time to productivity and role competency',
    'technical_4': 'Use secure platforms with role-based access control',
    'technical_5': 'HR, direct manager, IT, and key team members the new hire will work with',
    'technical_6': 'Multiple touchpoints: during onboarding, at 30/60/90 days, and from managers',
    'technical_7': 'During the first week, integrated with role-specific training',
    'technical_8': 'Adapt the process to address unique needs while maintaining core consistency'
  };
  return correctAnswers[questionId] || '';
}

function calculateWillScore(answers: Answer[]): number {
  const willQuestions = ['motivation_2', 'motivation_3', 'motivation_5'];
  return calculateScoreFromQuestions(answers, willQuestions);
}

function calculateInterestScore(answers: Answer[]): number {
  const interestQuestions = ['interest_1', 'interest_2', 'interest_3', 'interest_4', 'interest_5', 'interest_6', 'interest_7'];
  return calculateScoreFromQuestions(answers, interestQuestions);
}

function calculateSkillScore(answers: Answer[]): number {
  const skillQuestions = ['personality_1', 'personality_2', 'personality_5'];
  return calculateScoreFromQuestions(answers, skillQuestions);
}

function calculateCognitiveScore(answers: Answer[]): number {
  const cognitiveQuestions = ['aptitude_2', 'aptitude_3', 'aptitude_5', 'aptitude_6'];
  const answerMap = new Map(answers.map(a => [a.questionId, a.value]));
  
  const correctCount = cognitiveQuestions.reduce((count, qId) => {
    const answer = answerMap.get(qId);
    return count + (answer === getCorrectAnswer(qId) ? 1 : 0);
  }, 0);
  
  return Math.round((correctCount / cognitiveQuestions.length) * 100);
}

function calculateAbilityScore(answers: Answer[]): number {
  const abilityQuestions = ['personality_4', 'personality_7', 'motivation_6'];
  return calculateScoreFromQuestions(answers, abilityQuestions);
}

function calculateRealWorldScore(answers: Answer[]): number {
  const realWorldQuestions = ['aptitude_1', 'aptitude_4', 'aptitude_7', 'aptitude_8'];
  const answerMap = new Map(answers.map(a => [a.questionId, a.value]));
  
  const correctCount = realWorldQuestions.reduce((count, qId) => {
    const answer = answerMap.get(qId);
    return count + (answer === getCorrectAnswer(qId) ? 1 : 0);
  }, 0);
  
  return Math.round((correctCount / realWorldQuestions.length) * 100);
}

function calculateScoreFromQuestions(answers: Answer[], questionIds: string[]): number {
  const answerMap = new Map(answers.map(a => [a.questionId, a.value]));
  
  const sum = questionIds.reduce((total, qId) => {
    const answer = answerMap.get(qId);
    return total + (typeof answer === 'number' ? answer : 0);
  }, 0);
  
  return Math.round((sum / (questionIds.length * 5)) * 100);
}

function generateInsights(psychometric: number, technical: number, wiscar: any, overall: number): string[] {
  const insights: string[] = [];
  
  if (psychometric >= 80) {
    insights.push("You have a strong natural affinity for helping others and the interpersonal skills needed for onboarding.");
  } else if (psychometric >= 60) {
    insights.push("You show good potential for the people-focused aspects of onboarding, with room to develop your interpersonal confidence.");
  } else {
    insights.push("Consider whether you truly enjoy sustained interaction with newcomers, as this is central to onboarding success.");
  }
  
  if (technical >= 80) {
    insights.push("Your technical and process-oriented thinking aligns well with onboarding system requirements.");
  } else if (technical >= 60) {
    insights.push("You have solid problem-solving skills but would benefit from learning more about onboarding tools and methodologies.");
  } else {
    insights.push("Focus on developing your understanding of onboarding processes, HR systems, and stakeholder management.");
  }
  
  if (wiscar.interest >= 80 && wiscar.will >= 80) {
    insights.push("Your combination of genuine interest and persistence suggests you'd find fulfillment in this role long-term.");
  }
  
  if (wiscar.cognitive >= 70 && wiscar.realWorld >= 70) {
    insights.push("You demonstrate both analytical thinking and practical application skills needed for effective onboarding design.");
  }
  
  return insights;
}

function generateLearningPath(technicalScore: number, wiscar: any): string[] {
  const path: string[] = [];
  
  if (technicalScore < 70) {
    path.push("Learn fundamentals of HR systems (BambooHR, Workday, or similar HRIS platforms)");
    path.push("Study onboarding best practices and industry frameworks");
    path.push("Practice creating process documentation and user guides");
  }
  
  if (wiscar.skill < 70) {
    path.push("Develop communication skills through public speaking or training facilitation");
    path.push("Practice explaining complex concepts in simple terms");
  }
  
  if (wiscar.cognitive < 70) {
    path.push("Study user experience (UX) principles for onboarding flows");
    path.push("Learn project management fundamentals (Agile, process mapping)");
  }
  
  path.push("Seek opportunities to shadow current onboarding specialists");
  path.push("Consider certification programs in People Operations or Employee Experience");
  path.push("Build a portfolio of onboarding templates and process improvements");
  
  return path;
}

function generateAlternativeRoles(recommendation: string, psychometric: number, technical: number): string[] {
  if (recommendation === 'strong-fit') return [];
  
  const alternatives: string[] = [];
  
  if (psychometric >= 70 && technical < 60) {
    alternatives.push("Customer Success Coordinator");
    alternatives.push("HR Assistant");
    alternatives.push("Training Coordinator");
  }
  
  if (technical >= 70 && psychometric < 60) {
    alternatives.push("HR Systems Analyst");
    alternatives.push("Process Improvement Specialist");
    alternatives.push("Documentation Specialist");
  }
  
  if (psychometric < 60 && technical < 60) {
    alternatives.push("Administrative Assistant");
    alternatives.push("Data Entry Specialist");
    alternatives.push("Office Coordinator");
  }
  
  return alternatives;
}