import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { CheckCircle, Star, FileText, TrendingUp, ArrowRight } from "lucide-react";

interface DashboardProps {
  onViewPassport: () => void;
}

export function Dashboard({ onViewPassport }: DashboardProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground px-6 pt-8 pb-20 rounded-b-[2rem]">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12 border-2 border-primary-foreground/20">
              <AvatarImage src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjIzMzE3NjF8MA&ixlib=rb-4.1.0&q=80&w=1080" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div>
              <p className="opacity-90">Welcome back,</p>
              <h2>Jorge Nidales</h2>
            </div>
          </div>
          
          <button className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
            <span className="text-xl">🔔</span>
          </button>
        </div>

        {/* Reputation Score Card */}
        <Card className="bg-card/95 backdrop-blur-sm shadow-xl">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-muted-foreground">Your Reputation Score</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-5xl text-primary">785</span>
                  <span className="text-2xl text-muted-foreground">/ 1000</span>
                </div>
              </div>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <Progress value={78.5} className="h-2 mb-3" />
            
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-green-100 text-green-700 border-0">
                <span className="mr-1">↑</span> +12 this month
              </Badge>
              <span className="text-muted-foreground">Strong</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Summary Cards */}
      <div className="px-6 -mt-8 space-y-4 pb-6">
        <Card className="shadow-lg border-l-4 border-l-primary">
          <div className="p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3>On-Time Payments</h3>
                <p className="text-muted-foreground">96% success rate</p>
              </div>
            </div>
            <div className="text-primary">
              <span className="text-2xl">47</span>
              <p className="text-muted-foreground">verified</p>
            </div>
          </div>
        </Card>

        <Card className="shadow-lg border-l-4 border-l-accent">
          <div className="p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Star className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3>Platform Ratings</h3>
                <p className="text-muted-foreground">Excellent reviews</p>
              </div>
            </div>
            <div className="text-accent">
              <span className="text-2xl">4.8</span>
              <p className="text-muted-foreground">average</p>
            </div>
          </div>
        </Card>

        <Card className="shadow-lg border-l-4 border-l-chart-3">
          <div className="p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-chart-3/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-chart-3" />
              </div>
              <div>
                <h3>Completed Jobs</h3>
                <p className="text-muted-foreground">Last 12 months</p>
              </div>
            </div>
            <div className="text-chart-3">
              <span className="text-2xl">134</span>
              <p className="text-muted-foreground">jobs</p>
            </div>
          </div>
        </Card>
      </div>

      {/* CTA Button */}
      <div className="px-6 pb-8">
        <Button 
          onClick={onViewPassport}
          className="w-full h-14 bg-primary hover:bg-primary/90 group"
          size="lg"
        >
          View My Reputation Passport
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Quick Actions */}
      <div className="px-6 pb-8">
        <h3 className="mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <Card className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
              <span className="text-xl">🔗</span>
            </div>
            <p>Connect Account</p>
          </Card>
          <Card className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-2">
              <span className="text-xl">📊</span>
            </div>
            <p>View Reports</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
