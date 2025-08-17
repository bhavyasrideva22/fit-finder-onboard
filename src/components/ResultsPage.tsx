import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AssessmentResults } from "@/types/assessment";
import { 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  TrendingUp, 
  Brain, 
  Target, 
  Lightbulb,
  BookOpen,
  Users,
  ArrowRight,
  RotateCcw
} from "lucide-react";

interface ResultsPageProps {
  results: AssessmentResults;
  onRetakeAssessment: () => void;
}

export function ResultsPage({ results, onRetakeAssessment }: ResultsPageProps) {
  const getRecommendationIcon = () => {
    switch (results.recommendation) {
      case 'strong-fit': return <CheckCircle className="h-6 w-6 text-success" />;
      case 'potential-fit': return <AlertCircle className="h-6 w-6 text-warning" />;
      case 'low-fit': return <XCircle className="h-6 w-6 text-destructive" />;
    }
  };

  const getRecommendationTitle = () => {
    switch (results.recommendation) {
      case 'strong-fit': return 'Strong Alignment - Great Fit!';
      case 'potential-fit': return 'Potential Match with Development';
      case 'low-fit': return 'Consider Alternative Paths';
    }
  };

  const getRecommendationColor = () => {
    switch (results.recommendation) {
      case 'strong-fit': return 'text-success';
      case 'potential-fit': return 'text-warning';
      case 'low-fit': return 'text-destructive';
    }
  };

  const wiscarData = [
    { label: 'Will (Persistence)', value: results.wiscarScores.will, icon: TrendingUp },
    { label: 'Interest', value: results.wiscarScores.interest, icon: Target },
    { label: 'Skill', value: results.wiscarScores.skill, icon: Brain },
    { label: 'Cognitive Readiness', value: results.wiscarScores.cognitive, icon: Brain },
    { label: 'Ability to Learn', value: results.wiscarScores.ability, icon: Lightbulb },
    { label: 'Real-World Alignment', value: results.wiscarScores.realWorld, icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary p-4">
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="px-4 py-2">
            Assessment Complete
          </Badge>
          <h1 className="text-4xl font-bold text-foreground">
            Your Onboarding Specialist Assessment Results
          </h1>
        </div>

        {/* Overall Score */}
        <Card className="shadow-elegant border-primary/20">
          <CardHeader className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              {getRecommendationIcon()}
              <CardTitle className={`text-2xl ${getRecommendationColor()}`}>
                {getRecommendationTitle()}
              </CardTitle>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">{results.overallScore}%</div>
              <div className="text-sm text-muted-foreground">Overall Compatibility Score</div>
            </div>
          </CardHeader>
        </Card>

        {/* Score Breakdown */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                Psychometric Fit
              </CardTitle>
              <CardDescription>
                Personality and motivation alignment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Score</span>
                  <span className="font-semibold">{results.psychometricScore}%</span>
                </div>
                <Progress value={results.psychometricScore} />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Technical Readiness
              </CardTitle>
              <CardDescription>
                Skills and knowledge assessment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Score</span>
                  <span className="font-semibold">{results.technicalScore}%</span>
                </div>
                <Progress value={results.technicalScore} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* WISCAR Analysis */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>WISCAR Framework Analysis</CardTitle>
            <CardDescription>
              Detailed breakdown of your readiness across key dimensions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {wiscarData.map((item, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <item.icon className="h-4 w-4 text-primary" />
                    <span className="font-medium text-sm">{item.label}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Score</span>
                      <span className="font-semibold">{item.value}%</span>
                    </div>
                    <Progress value={item.value} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Insights */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              Personalized Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {results.insights.map((insight, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-accent/50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">{insight}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Learning Path */}
        {results.learningPath.length > 0 && (
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Recommended Learning Path
              </CardTitle>
              <CardDescription>
                Steps to enhance your readiness for the role
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {results.learningPath.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-semibold">
                      {index + 1}
                    </div>
                    <p className="text-sm pt-0.5">{step}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Alternative Roles */}
        {results.alternativeRoles.length > 0 && (
          <Card className="shadow-soft border-warning/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-warning" />
                Alternative Career Paths
              </CardTitle>
              <CardDescription>
                Other roles that might align with your profile
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {results.alternativeRoles.map((role, index) => (
                  <Badge key={index} variant="outline" className="px-3 py-1">
                    {role}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" onClick={onRetakeAssessment} className="flex items-center gap-2">
            <RotateCcw className="h-4 w-4" />
            Retake Assessment
          </Button>
          <Button variant="hero" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Explore Learning Resources
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-muted-foreground pt-8">
          <p>This assessment is based on validated psychological frameworks and industry best practices.</p>
          <p>Results are for guidance purposes and should be considered alongside other career factors.</p>
        </div>
      </div>
    </div>
  );
}