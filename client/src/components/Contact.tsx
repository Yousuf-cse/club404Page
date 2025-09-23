import { Button } from "@/components/ui/button";

export default function Contact () {
  return (
    <section id="contact" className="py-20 bg-concrete-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-black text-4xl md:text-6xl mb-6 text-foreground cursor-default">
            Join The <span className="text-electric">Revolution</span>
          </h2>
          
          <div className="terminal-block mb-8 text-left max-w-2xl mx-auto cursor-default">
            <div className="text-neon-green">
              $ club404 --connect
            </div>
            <div className="text-foreground mt-2">
              Initializing connection...
            </div>
            <div className="text-electric mt-1">
              Ready to accept new members!
            </div>
          </div>
          
          <p className="font-mono text-lg text-muted-foreground mb-12 leading-relaxed cursor-default">
            Ready to level up your coding skills? Join club404 and be part of 
            Aliah University's most innovative tech community.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card-brutal text-left cursor-pointer">
              <h3 className="font-display font-bold text-xl text-electric mb-3">
                Location
              </h3>
              <div className="font-mono text-muted-foreground cursor-text">
                <div>Aliah University</div>
                <div>New Town, Kolkata</div>
                <div>West Bengal, India</div>
              </div>
            </div>
            
            <div className="card-brutal text-left cursor-pointer">
              <h3 className="font-display font-bold text-xl text-neon-green mb-3">
                Connect
              </h3>
              <div className="font-mono text-muted-foreground space-y-2 cursor-text">
                <div>Linkedin: Club 404 || Aliah University</div>
                <div>x: @club404aliah</div>
                <div>Instagram: @club404aliah.official</div>
              </div>
            </div>
            
            <div className="card-brutal text-left cursor-pointer">
              <h3 className="font-display font-bold text-xl text-cyber-blue mb-3">
                Meet Up
              </h3>
              <div className="font-mono text-muted-foreground space-y-2">
                <div>Coming Soon</div>
              </div>
            </div>
          </div>
          
          <div className="divider-brutal mb-8"></div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-brutal text-lg px-8 py-4">
              Join Discord
            </Button>
            <Button variant="outline" className="font-mono font-bold uppercase tracking-wider bg-transparent border-4 border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-4">
              Upcoming Events
            </Button>
          </div>
          
          <div className="terminal-block mt-12 text-left max-w-xl mx-auto cursor-default">
            <div className="text-foreground">
              {"> Welcome to club404"}
            </div>
            <div className="text-electric mt-1">
              {"> Error 404: Ordinary coders not found"}
            </div>
            <div className="text-neon-green mt-1">
              {"> Exceptional developers detected"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
