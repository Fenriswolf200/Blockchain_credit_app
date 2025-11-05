import { useState } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { Dashboard } from "./components/Dashboard";
import { ReputationPassport } from "./components/ReputationPassport";
import { DataSources } from "./components/DataSources";
import { LenderView } from "./components/LenderView";
import { Tabs, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Home, Link2, Shield, User } from "lucide-react";

type Screen = "welcome" | "dashboard" | "passport" | "sources" | "lender";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome");
  const [hasOnboarded, setHasOnboarded] = useState(false);

  const handleGetStarted = () => {
    setHasOnboarded(true);
    setCurrentScreen("dashboard");
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "welcome":
        return <WelcomeScreen onGetStarted={handleGetStarted} />;
      case "dashboard":
        return <Dashboard onViewPassport={() => setCurrentScreen("passport")} />;
      case "passport":
        return <ReputationPassport onBack={() => setCurrentScreen("dashboard")} />;
      case "sources":
        return <DataSources onBack={() => setCurrentScreen("dashboard")} />;
      case "lender":
        return <LenderView onBack={() => setCurrentScreen("dashboard")} />;
      default:
        return <Dashboard onViewPassport={() => setCurrentScreen("passport")} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className={hasOnboarded ? "pb-20" : ""}>
        {renderScreen()}
      </main>

      {/* Bottom Navigation - Only show after onboarding */}
      {hasOnboarded && (
        <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-50">
          <div className="max-w-lg mx-auto px-4 py-3">
            <div className="flex items-center justify-around">
              <button
                onClick={() => setCurrentScreen("dashboard")}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-colors ${
                  currentScreen === "dashboard"
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Home className="w-6 h-6" />
                <span className="text-xs">Home</span>
              </button>

              <button
                onClick={() => setCurrentScreen("passport")}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-colors ${
                  currentScreen === "passport"
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <User className="w-6 h-6" />
                <span className="text-xs">Passport</span>
              </button>

              <button
                onClick={() => setCurrentScreen("sources")}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-colors ${
                  currentScreen === "sources"
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Link2 className="w-6 h-6" />
                <span className="text-xs">Sources</span>
              </button>

              <button
                onClick={() => setCurrentScreen("lender")}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-colors ${
                  currentScreen === "lender"
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Shield className="w-6 h-6" />
                <span className="text-xs">Verify</span>
              </button>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
