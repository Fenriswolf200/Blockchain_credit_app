import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowLeft, Plus, CheckCircle, Clock, AlertCircle } from "lucide-react";

interface DataSourcesProps {
  onBack: () => void;
}

interface DataSource {
  id: string;
  name: string;
  category: string;
  status: "linked" | "pending" | "not-connected";
  icon: string;
  description: string;
}

export function DataSources({ onBack }: DataSourcesProps) {
  const dataSources: DataSource[] = [
    {
      id: "1",
      name: "Rent Payments",
      category: "Housing",
      status: "linked",
      icon: "🏠",
      description: "Monthly rent payment history",
    },
    {
      id: "2",
      name: "Utilities",
      category: "Bills",
      status: "linked",
      icon: "⚡",
      description: "Electricity, water, and gas",
    },
    {
      id: "3",
      name: "Freelance Platform",
      category: "Work",
      status: "linked",
      icon: "💼",
      description: "Upwork profile and ratings",
    },
    {
      id: "4",
      name: "Delivery Service",
      category: "Work",
      status: "pending",
      icon: "🚗",
      description: "Uber driver rating and trips",
    },
    {
      id: "5",
      name: "Mobile Phone",
      category: "Bills",
      status: "not-connected",
      icon: "📱",
      description: "Phone bill payment history",
    },
    {
      id: "6",
      name: "Fiverr",
      category: "Work",
      status: "not-connected",
      icon: "🎨",
      description: "Gigs and client reviews",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "linked":
        return (
          <Badge className="bg-green-100 text-green-700 border-0">
            <CheckCircle className="w-3 h-3 mr-1" />
            Linked
          </Badge>
        );
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-700 border-0">
            <Clock className="w-3 h-3 mr-1" />
            Pending
          </Badge>
        );
      case "not-connected":
        return (
          <Badge variant="outline" className="text-muted-foreground">
            Not Connected
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground px-6 pt-6 pb-16 rounded-b-[2rem]">
        <button 
          onClick={onBack}
          className="mb-6 flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        
        <div>
          <h1 className="mb-2">Data Sources</h1>
          <p className="opacity-90">Connect your accounts to build reputation</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-6 -mt-10 mb-6">
        <div className="grid grid-cols-3 gap-3">
          <Card className="p-4 text-center shadow-lg">
            <div className="text-2xl text-primary mb-1">3</div>
            <p className="text-muted-foreground">Linked</p>
          </Card>
          <Card className="p-4 text-center shadow-lg">
            <div className="text-2xl text-accent mb-1">1</div>
            <p className="text-muted-foreground">Pending</p>
          </Card>
          <Card className="p-4 text-center shadow-lg">
            <div className="text-2xl text-muted-foreground mb-1">2</div>
            <p className="text-muted-foreground">Available</p>
          </Card>
        </div>
      </div>

      {/* Info Card */}
      <div className="px-6 mb-6">
        <Card className="bg-secondary border-accent/20">
          <div className="p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <p>
                The more sources you connect, the stronger your reputation becomes. 
                All data is encrypted and you control what to share.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Data Sources List */}
      <div className="px-6 space-y-3">
        <h3 className="mb-3">Your Sources</h3>
        
        {dataSources.map((source) => (
          <Card 
            key={source.id} 
            className={`transition-all hover:shadow-lg ${
              source.status === "linked" ? "border-l-4 border-l-primary" : ""
            }`}
          >
            <div className="p-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center text-2xl flex-shrink-0">
                  {source.icon}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div>
                      <h4>{source.name}</h4>
                      <p className="text-muted-foreground">{source.description}</p>
                    </div>
                    {getStatusBadge(source.status)}
                  </div>
                  
                  <div className="mt-3">
                    {source.status === "linked" ? (
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button variant="ghost" size="sm" className="text-destructive">
                          Disconnect
                        </Button>
                      </div>
                    ) : source.status === "pending" ? (
                      <Button variant="outline" size="sm" className="w-full">
                        Complete Setup
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" className="w-full">
                        Connect Now
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Add Source Button */}
      <div className="px-6 mt-6">
        <Button 
          className="w-full h-14 bg-primary hover:bg-primary/90" 
          size="lg"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Another Source
        </Button>
      </div>

      {/* Security Note */}
      <div className="px-6 mt-6">
        <Card className="bg-muted/50">
          <div className="p-4 text-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
              <span className="text-xl">🔒</span>
            </div>
            <p className="text-muted-foreground">
              Your data is encrypted and secure. We never sell your information.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
