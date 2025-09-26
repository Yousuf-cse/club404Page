import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export default function Contact () {

   const { toast } = useToast();

  const handleComingSoon = (feature: string) => {
    toast({
      title: "Coming Soon!",
      description: `${feature} will be listed soon`,
      duration: 3000,
    });
  };

  return (
   <section id="contact" className="py-20 bg-concrete-dark relative overflow-hidden">
      
      <div className="absolute inset-0">
        <div className="absolute top-12 left-12 w-32 h-32 bg-electric/5 border-2 border-electric/20 transform rotate-12"></div>
        <div className="absolute bottom-12 right-12 w-28 h-28 bg-cyber-blue/5 border-2 border-cyber-blue/20 transform -rotate-12"></div>
        <div className="absolute top-2/3 left-1/3 w-2 h-36 bg-neon-green/10 transform rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-electric/3 border border-electric/30 transform rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-black text-4xl md:text-6xl mb-6 text-foreground">
              Join The <span className="text-electric">Revolution</span>
            </h2>
            
            <div className="terminal-block mb-8 text-left max-w-2xl mx-auto">
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
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="card-brutal text-left group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="font-display font-bold text-xl text-electric mb-3 group-hover:text-foreground transition-colors">
                Location
              </h3>
              <div className="font-mono text-muted-foreground cursor-text">
                <div>Aliah University</div>
                <div>New Town, Kolkata</div>
                <div>West Bengal, India</div>
              </div>
            <div className="mt-4 h-1 w-full bg-electric transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.div>
            
            <motion.div 
              className="card-brutal text-left group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="font-display font-bold text-xl text-neon-green mb-3 group-hover:text-foreground transition-colors">
                Connect
              </h3>
              <div className="font-mono text-muted-foreground space-y-2 cursor-text">
                <div>Linkedin: Club 404 || Aliah University</div>
                <div>x: @club404aliah</div>
                <div>Instagram: @club404aliah.official</div>
              </div>
           <div className="mt-4 h-1 w-full bg-neon-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.div>
            
              <motion.div 
              className="card-brutal text-left group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="font-display font-bold text-xl text-cyber-blue mb-3 group-hover:text-foreground transition-colors">
                Meet Up
              </h3>
              <div className="font-mono text-muted-foreground space-y-2">
                <div>Coming Soon</div>
              </div>
             <div className="mt-4 h-1 w-full bg-cyber-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.div>
          </motion.div>
          
          <div className="divider-brutal mb-8"></div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Button className="btn-brutal text-lg px-8 py-4">
              Join Discord
            </Button>
            <Button 
              variant="outline" 
              className="font-mono font-bold uppercase tracking-wider bg-transparent border-4 border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-4"
              onClick= { () => handleComingSoon("Upcoming events")}
              >
              Upcoming Events
            </Button>
          </motion.div>
          
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
