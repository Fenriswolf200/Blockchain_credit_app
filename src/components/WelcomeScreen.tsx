import { Button } from "./ui/button";
import { Globe } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

export function WelcomeScreen({ onGetStarted }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-background flex flex-col">
      {/* Language Selector */}
      <div className="p-4 flex justify-end">
        <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <Globe className="w-5 h-5" />
          <span>EN</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-12">
        {/* Hero Image */}
        <div className="w-full max-w-md mb-8 rounded-3xl overflow-hidden shadow-xl">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758873271761-6cfe9b4f000c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwd29ya2VycyUyMHRlYW13b3JrfGVufDF8fHx8MTc2MjMzNTQzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Diverse gig workers"
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="text-center space-y-4 max-w-md">
          <h1 className="text-4xl">
            Build Your Reputation.<br />
            Unlock Fair Credit.
          </h1>
          
          <p className="text-muted-foreground">
            Prove your trustworthiness without traditional payslips. 
            Connect your work history, payments, and ratings to create 
            a portable reputation you control.
          </p>

          <div className="space-y-3 pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary">✓</span>
              </div>
              <p className="text-left">Collect proof from everyday payments & work</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary">✓</span>
              </div>
              <p className="text-left">You decide what to share and with whom</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary">✓</span>
              </div>
              <p className="text-left">Access fair loans and opportunities</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="w-full max-w-md mt-12">
          <Button 
            onClick={onGetStarted}
            className="w-full h-14 bg-primary hover:bg-primary/90"
            size="lg"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
