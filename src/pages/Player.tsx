import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const matches = [
  {
    id: 1,
    team1: "Corinthians",
    team2: "Flamengo",
    time: "15:00",
    status: "AO VIVO"
  },
  {
    id: 2,
    team1: "Palmeiras",
    team2: "São Paulo",
    time: "17:00",
    status: "AO VIVO"
  },
  {
    id: 3,
    team1: "Santos",
    team2: "Fluminense",
    time: "19:00",
    status: "AO VIVO"
  },
  {
    id: 4,
    team1: "Botafogo",
    team2: "Vasco",
    time: "21:00",
    status: "AO VIVO"
  }
];

const Player = () => {
  const handleWatchMatch = (matchId: number) => {
    // Placeholder for video functionality
    console.log(`Assistindo jogo ${matchId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-hero p-4 md:p-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Jogos ao Vivo
          </h1>
          <p className="text-xl text-muted-foreground">
            Assista aos melhores jogos do futebol brasileiro
          </p>
        </div>

        {/* Matches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {matches.map((match) => (
            <Card 
              key={match.id} 
              className="bg-cyber-gray/50 border-neon-green/20 backdrop-blur-sm hover:shadow-neon transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-neon-green text-sm font-semibold px-2 py-1 bg-neon-green/10 rounded-full">
                    {match.status}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {match.time}
                  </span>
                </div>
                <CardTitle className="text-xl text-center">
                  {match.team1} <span className="text-neon-blue">x</span> {match.team2}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="cyber" 
                  className="w-full"
                  onClick={() => handleWatchMatch(match.id)}
                >
                  <Play className="mr-2 h-4 w-4" />
                  Assistir
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="border-neon-blue/30 text-neon-blue hover:bg-neon-blue/10"
          >
            Voltar ao Início
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Player;