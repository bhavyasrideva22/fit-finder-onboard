import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Target, Users, ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-secondary">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-24">
        <div className="text-center space-y-8 max-w-4xl mx-auto animate-fade-in">
          <Badge variant="secondary" className="px-4 py-2">
            Professional Career Assessment
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Should I Become an 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Onboarding Specialist</span>?
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover if this growing career path aligns with your personality, skills, and professional goals through our comprehensive assessment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={() => navigate('/assessment')}
              className="flex items-center gap-2"
            >
              Start Assessment
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="shadow-soft animate-scale-in">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Comprehensive Analysis</CardTitle>
              <CardDescription>
                Uses validated psychological frameworks including Big Five, WISCAR analysis, and industry competency models
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-soft animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Personalized Results</CardTitle>
              <CardDescription>
                Get detailed insights, skill gap analysis, and customized learning pathways tailored to your profile
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-soft animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Career Guidance</CardTitle>
              <CardDescription>
                Receive actionable recommendations and alternative career paths based on your unique strengths
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Discover Your Career Path?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Take our scientifically-backed assessment and get clarity on whether becoming an Onboarding Specialist is right for you.
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            onClick={() => navigate('/assessment')}
            className="shadow-elegant"
          >
            Begin Your Assessment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
