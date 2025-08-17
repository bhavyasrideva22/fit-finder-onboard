import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, CheckCircle, Target, Brain, Lightbulb } from "lucide-react";

interface AssessmentIntroProps {
  onStartAssessment: () => void;
}

export function AssessmentIntro({ onStartAssessment }: AssessmentIntroProps) {
  return (
    <div className="min-h-screen bg-gradient-secondary flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="px-4 py-2">
            Career Assessment
          </Badge>
          <h1 className="text-4xl font-bold text-foreground">
            Should I Become an Onboarding Specialist?
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover if this rewarding career path aligns with your personality, skills, and goals
          </p>
        </div>

        {/* Main Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* What is the role card */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                What Is the Role?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                An Onboarding Specialist ensures a seamless introduction to a company or product for new hires or customers.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Key Responsibilities:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Planning and documentation</li>
                  <li>• Process walkthroughs and training</li>
                  <li>• Tech setup and system access</li>
                  <li>• Cross-functional coordination</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Typical careers card */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Career Paths
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-2">
                <Badge variant="outline">Employee Onboarding Specialist</Badge>
                <Badge variant="outline">Customer Onboarding Manager</Badge>
                <Badge variant="outline">People Operations Coordinator</Badge>
                <Badge variant="outline">Client Enablement Manager</Badge>
                <Badge variant="outline">HRIS Onboarding Analyst</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Success traits */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              Traits That Succeed in This Role
            </CardTitle>
            <CardDescription>
              The assessment evaluates these key characteristics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Brain className="h-4 w-4 text-primary" />
                  <span className="font-medium">Communication</span>
                </div>
                <p className="text-sm text-muted-foreground">Strong interpersonal skills and empathy</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="font-medium">Organization</span>
                </div>
                <p className="text-sm text-muted-foreground">Detail-oriented and structured thinking</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-primary" />
                  <span className="font-medium">Tech-Savvy</span>
                </div>
                <p className="text-sm text-muted-foreground">Learning mindset and tool proficiency</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Assessment info */}
        <Card className="shadow-soft border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Assessment Overview
            </CardTitle>
            <CardDescription>
              A comprehensive evaluation using proven psychological frameworks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">What We'll Measure:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Interest & motivation alignment</li>
                  <li>• Personality compatibility</li>
                  <li>• Problem-solving aptitude</li>
                  <li>• Technical readiness</li>
                  <li>• Learning ability</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">You'll Receive:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Personalized fit score</li>
                  <li>• Detailed insights</li>
                  <li>• Skill gap analysis</li>
                  <li>• Learning pathway</li>
                  <li>• Alternative career suggestions</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Estimated time: 25-30 minutes</span>
              </div>
              <Button variant="hero" size="lg" onClick={onStartAssessment} className="animate-scale-in">
                Start Assessment
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer note */}
        <p className="text-center text-sm text-muted-foreground">
          This assessment uses validated psychological frameworks including the Big Five, WISCAR analysis, and industry-specific competency models.
        </p>
      </div>
    </div>
  );
}