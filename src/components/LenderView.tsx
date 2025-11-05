import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { ArrowLeft, QrCode, Shield, CheckCircle, Star, TrendingUp } from "lucide-react";
import { useState } from "react";

interface LenderViewProps {
  onBack: () => void;
}

export function LenderView({ onBack }: LenderViewProps) {
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  const handleVerify = () => {
    // Simulate verification
    if (verificationCode.trim()) {
      setIsVerified(true);
    }
  };

  const handleScan = () => {
    setIsScanning(true);
    // Simulate QR scan
    setTimeout(() => {
      setIsScanning(false);
      setIsVerified(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-chart-3 to-chart-3/80 text-white px-6 pt-6 pb-16 rounded-b-[2rem]">
        <button 
          onClick={onBack}
          className="mb-6 flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="mb-2">Lender Verification</h1>
          <p className="opacity-90">Verify borrower reputation instantly</p>
        </div>
      </div>

      {!isVerified ? (
        <>
          {/* Verification Input */}
          <div className="px-6 -mt-10">
            <Card className="shadow-2xl">
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="mb-3">Enter Verification Code</h3>
                  <div className="space-y-3">
                    <Input
                      placeholder="e.g., RP-847362"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      className="h-12"
                    />
                    <Button 
                      onClick={handleVerify}
                      className="w-full h-12 bg-chart-3 hover:bg-chart-3/90"
                      disabled={!verificationCode.trim()}
                    >
                      Verify Reputation
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-card px-3 text-muted-foreground">or</span>
                  </div>
                </div>

                <div>
                  <Button 
                    onClick={handleScan}
                    variant="outline"
                    className="w-full h-12"
                    disabled={isScanning}
                  >
                    <QrCode className="w-5 h-5 mr-2" />
                    {isScanning ? "Scanning..." : "Scan QR Code"}
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Info Section */}
          <div className="px-6 mt-6 space-y-4">
            <Card className="bg-secondary border-accent/20">
              <div className="p-4">
                <h4 className="mb-2">How It Works</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Request the verification code or QR from the applicant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Enter the code or scan the QR to view their reputation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>See verified payment history and reliability scores</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="bg-muted/50">
              <div className="p-4 flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-chart-3/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-chart-3" />
                </div>
                <div>
                  <h4 className="mb-1">Privacy Protected</h4>
                  <p className="text-muted-foreground">
                    Users control what information is shared. All data is encrypted 
                    and verified through secure channels.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </>
      ) : (
        <>
          {/* Verification Result */}
          <div className="px-6 -mt-10 space-y-4">
            <Card className="shadow-2xl border-2 border-green-500/20">
              <div className="p-6">
                {/* Success Header */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="mb-1">Verification Successful</h2>
                  <p className="text-muted-foreground">ID: RP-847362</p>
                </div>

                {/* Borrower Info */}
                <div className="bg-muted/50 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3>Jordan Silva</h3>
                      <p className="text-muted-foreground">Verified Member</p>
                    </div>
                    <Badge className="bg-primary text-primary-foreground">
                      <Shield className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  </div>
                </div>

                {/* Trust Summary */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <div>
                        <p>Reputation Score</p>
                        <p className="text-muted-foreground">Strong standing</p>
                      </div>
                    </div>
                    <div className="text-2xl text-green-600">785</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 bg-primary/5 rounded-xl text-center">
                      <CheckCircle className="w-6 h-6 text-primary mx-auto mb-1" />
                      <div className="text-2xl text-primary mb-1">96%</div>
                      <p className="text-muted-foreground">On-time Payments</p>
                    </div>
                    <div className="p-4 bg-accent/5 rounded-xl text-center">
                      <Star className="w-6 h-6 text-accent mx-auto mb-1" />
                      <div className="text-2xl text-accent mb-1">4.8</div>
                      <p className="text-muted-foreground">Platform Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Shared Data Summary */}
            <Card>
              <div className="p-6">
                <h3 className="mb-4">Shared Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <p>Payment History</p>
                      <p className="text-muted-foreground">47 verified on-time payments</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <p>Platform Ratings</p>
                      <p className="text-muted-foreground">4.8 average across 139 reviews</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <p>Work History</p>
                      <p className="text-muted-foreground">134 completed jobs in 12 months</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Trust Assessment */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <div className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="mb-2 text-green-900">Reliable Borrower</h3>
                <p className="text-green-700">
                  This applicant demonstrates strong financial responsibility 
                  with verified income sources and excellent payment history.
                </p>
              </div>
            </Card>

            {/* Actions */}
            <div className="space-y-3">
              <Button 
                className="w-full h-12 bg-chart-3 hover:bg-chart-3/90"
              >
                Export Full Report
              </Button>
              <Button 
                variant="outline"
                className="w-full h-12"
                onClick={() => setIsVerified(false)}
              >
                Verify Another
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
