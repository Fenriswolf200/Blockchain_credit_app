import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { CheckCircle, Star, FileText, MapPin, Shield, QrCode, Link2, ArrowLeft } from "lucide-react";
import { useState } from "react";

interface ReputationPassportProps {
  onBack: () => void;
}

export function ReputationPassport({ onBack }: ReputationPassportProps) {
  const [shareSettings, setShareSettings] = useState({
    paymentHistory: true,
    platformRatings: true,
    workReferences: true,
    identity: true,
  });

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
        
        <div className="text-center">
          <h1 className="mb-2">Reputation Passport</h1>
          <p className="opacity-90">Your portable trust profile</p>
        </div>
      </div>

      {/* Passport Card */}
      <div className="px-6 -mt-10">
        <Card className="bg-gradient-to-br from-card to-secondary shadow-2xl border-2 border-primary/20 overflow-hidden">
          <div className="p-6">
            {/* Header with Avatar */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16 border-2 border-primary/20">
                  <AvatarImage src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjIzMzE3NjF8MA&ixlib=rb-4.1.0&q=80&w=1080" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <h2>Jordan Silva</h2>
                  <p className="text-muted-foreground">ID: RP-847362</p>
                </div>
              </div>
              <Badge className="bg-primary text-primary-foreground">
                <Shield className="w-3 h-3 mr-1" />
                Verified
              </Badge>
            </div>

            {/* Score Display */}
            <div className="bg-primary/5 rounded-2xl p-4 mb-6 text-center">
              <p className="text-muted-foreground mb-1">Reputation Score</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl text-primary">785</span>
                <span className="text-muted-foreground">/ 1000</span>
              </div>
              <Badge variant="secondary" className="mt-2 bg-green-100 text-green-700 border-0">
                Strong Standing
              </Badge>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="text-center p-3 bg-background/50 rounded-xl">
                <div className="text-2xl text-primary">96%</div>
                <p className="text-muted-foreground">On-time</p>
              </div>
              <div className="text-center p-3 bg-background/50 rounded-xl">
                <div className="text-2xl text-accent">4.8</div>
                <p className="text-muted-foreground">Rating</p>
              </div>
              <div className="text-center p-3 bg-background/50 rounded-xl">
                <div className="text-2xl text-chart-3">134</div>
                <p className="text-muted-foreground">Jobs</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Detailed Sections */}
        <div className="mt-6">
          <Tabs defaultValue="payments" className="w-full">
            <TabsList className="w-full grid grid-cols-3 mb-4">
              <TabsTrigger value="payments">Payments</TabsTrigger>
              <TabsTrigger value="ratings">Ratings</TabsTrigger>
              <TabsTrigger value="work">Work</TabsTrigger>
            </TabsList>

            <TabsContent value="payments" className="space-y-3">
              <Card>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3>Payment History</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Share</span>
                      <Switch
                        checked={shareSettings.paymentHistory}
                        onCheckedChange={(checked) =>
                          setShareSettings({ ...shareSettings, paymentHistory: checked })
                        }
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <div className="flex-1">
                        <p>Rent Payment</p>
                        <p className="text-muted-foreground">Paid on time - Nov 2024</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <div className="flex-1">
                        <p>Utility Bills</p>
                        <p className="text-muted-foreground">47 consecutive on-time payments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="ratings" className="space-y-3">
              <Card>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3>Platform Ratings</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Share</span>
                      <Switch
                        checked={shareSettings.platformRatings}
                        onCheckedChange={(checked) =>
                          setShareSettings({ ...shareSettings, platformRatings: checked })
                        }
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Star className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p>Freelance Platform</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-4 h-4 fill-accent text-accent" />
                          <span>4.9 / 5.0 (87 reviews)</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Star className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <p>Delivery Service</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-4 h-4 fill-accent text-accent" />
                          <span>4.7 / 5.0 (52 reviews)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="work" className="space-y-3">
              <Card>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3>Work References</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Share</span>
                      <Switch
                        checked={shareSettings.workReferences}
                        onCheckedChange={(checked) =>
                          setShareSettings({ ...shareSettings, workReferences: checked })
                        }
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <FileText className="w-5 h-5 text-chart-3" />
                      <div className="flex-1">
                        <p>134 Completed Jobs</p>
                        <p className="text-muted-foreground">Last 12 months</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <MapPin className="w-5 h-5 text-chart-4" />
                      <div className="flex-1">
                        <p>Verified Address</p>
                        <p className="text-muted-foreground">Resident since 2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Share Button */}
        <div className="mt-6 space-y-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full h-14 bg-primary hover:bg-primary/90" size="lg">
                <QrCode className="w-5 h-5 mr-2" />
                Share Proof
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Share Your Reputation</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="bg-muted/50 rounded-xl p-6 flex items-center justify-center">
                  <div className="w-48 h-48 bg-background rounded-lg flex items-center justify-center">
                    <QrCode className="w-32 h-32 text-muted-foreground" />
                  </div>
                </div>
                <p className="text-center text-muted-foreground">
                  Scan this QR code to view verification
                </p>
                <Button variant="outline" className="w-full" size="lg">
                  <Link2 className="w-5 h-5 mr-2" />
                  Copy Share Link
                </Button>
                <p className="text-center">
                  Share Code: <span className="font-mono bg-muted px-2 py-1 rounded">RP-847362</span>
                </p>
              </div>
            </DialogContent>
          </Dialog>

          <p className="text-center text-muted-foreground">
            Only the information you've enabled will be shared
          </p>
        </div>
      </div>
    </div>
  );
}
