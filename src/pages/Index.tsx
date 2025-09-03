import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Zap, Play, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-neon-green/10 p-4 rounded-full border border-neon-green/30">
              <Zap className="h-12 w-12 text-neon-green" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            FuturoStream
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A experiência mais avançada para assistir futebol brasileiro. 
            Tecnologia de ponta encontra a paixão do esporte.
          </p>
          
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => navigate('/player')}
            className="px-8 py-4 text-xl"
          >
            <Play className="mr-3 h-6 w-6" />
            Assistir Jogos ao Vivo
            <ChevronRight className="ml-3 h-6 w-6" />
          </Button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="bg-cyber-gray/30 border-neon-blue/20 backdrop-blur-sm hover:shadow-card-cyber transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="bg-neon-blue/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-6 w-6 text-neon-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-neon-blue">Streaming Ultra HD</h3>
              <p className="text-muted-foreground">Qualidade 4K com tecnologia de streaming avançada</p>
            </CardContent>
          </Card>

          <Card className="bg-cyber-gray/30 border-neon-green/20 backdrop-blur-sm hover:shadow-card-cyber transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="bg-neon-green/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-neon-green" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-neon-green">Tempo Real</h3>
              <p className="text-muted-foreground">Transmissão instantânea sem atrasos</p>
            </CardContent>
          </Card>

          <Card className="bg-cyber-gray/30 border-neon-purple/20 backdrop-blur-sm hover:shadow-card-cyber transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="bg-neon-purple/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-neon-purple" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-neon-purple">Comunidade</h3>
              <p className="text-muted-foreground">Assista junto com milhões de torcedores</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
