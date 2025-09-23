import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-coding.jpg";

export default function Hero () {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>
      
      <div className="absolute top-20 left-10 w-20 h-20 bg-electric border-4 border-foreground transform rotate-12"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-neon-green border-4 border-foreground transform -rotate-12"></div>
      <div className="absolute top-1/2 left-20 w-4 h-32 bg-cyber-blue transform -rotate-45"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="terminal-block mb-8 text-left max-w-2xl mx-auto">
          <span className="text-neon-green">~/aliah-university/club-404$</span>
          <span className="text-foreground"> ls -la</span>
        </div>
        
        <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl mb-4 text-foreground">
          club<span className="text-electric">404</span>
        </h1>
        
        <div className="divider-brutal mb-8"></div>
        
        <p className="font-mono text-lg md:text-xl text-muted-foreground mb-2 uppercase tracking-wider">
          Coding Club • Aliah University
        </p>
        <p className="font-mono text-lg md:text-xl text-muted-foreground mb-8 uppercase tracking-wider">
          New Town, Kolkata
        </p>
        
        <div className="terminal-block mb-12 text-left max-w-3xl mx-auto">
          <div className="text-foreground mb-2">
            We code. We create. We innovate.
          </div>
          <div className="text-foreground mb-2">
            Building the future one line at a time.
          </div>
          <div className="text-electric">
            Error 404: Limits not found.
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="btn-brutal text-lg px-8 py-4">
            Join The Club
          </Button>
          <Button variant="outline" className="font-mono font-bold uppercase tracking-wider bg-transparent border-4 border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-4">
            Upcoming Events
          </Button>
        </div>
      </div>
    </section>
  );
};

