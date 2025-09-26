import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion"

export default function Hero () {

  const heroImage = "https://res.cloudinary.com/dxkje9whm/image/upload/v1758892770/hero-coding_l796ty.jpg"
  const whatsAppLink = "https://chat.whatsapp.com/EOR7RBOol6AGHNf0IdhpZI";

  const { toast } = useToast();

  const handleComingSoon = (feature: string) => {
    toast({
      title: "Coming Soon!",
      description: `${feature} will be listed soon`,
      duration: 3000,
    });
  };

  return (
    <motion.section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>
      
           <motion.div 
        className="absolute top-20 left-10 w-20 h-20 bg-electric border-4 border-foreground transform rotate-12"
        initial={{ x: -100, opacity: 0, rotate: 0 }}
        animate={{ x: 0, opacity: 1, rotate: 12 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-20 right-10 w-16 h-16 bg-neon-green border-4 border-foreground transform -rotate-12"
        initial={{ x: 100, opacity: 0, rotate: 0 }}
        animate={{ x: 0, opacity: 1, rotate: -12 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/2 left-20 w-4 h-32 bg-cyber-blue transform -rotate-45"
        initial={{ y: -100, opacity: 0, rotate: 0 }}
        animate={{ y: 0, opacity: 1, rotate: -45 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      ></motion.div>
      
      <motion.div 
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.div 
          className="terminal-block mb-8 text-left max-w-2xl mx-auto"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="text-neon-green cursor-default">~/aliah-university/club-404$</span>
          <span className="text-foreground cursor-default"> ls -la</span>
        </motion.div>
        
         <motion.h1 
          className="font-display font-black text-6xl md:text-8xl lg:text-9xl mb-4 text-foreground cursor-default"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Club<span className="text-electric">404</span>
        </motion.h1>
        
         <motion.div 
          className="divider-brutal mb-8"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 1 }}
        ></motion.div>
        
         <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
        <p className="font-mono text-lg md:text-xl text-muted-foreground mb-2 uppercase tracking-wider cursor-default">
          Coding Club • Aliah University
        </p>
        <p className="font-mono text-lg md:text-xl text-muted-foreground mb-8 uppercase tracking-wider cursor-default">
          New Town, Kolkata
        </p>
        </motion.div>
        
         <motion.div 
          className="terminal-block mb-12 text-left max-w-3xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="text-foreground mb-2 cursor-default">
            We code. We create. We innovate.
          </div>
          <div className="text-foreground mb-2 cursor-default">
            Building the future one line at a time.
          </div>
          <div className="text-electric cursor-default">
            Error 404: Limits not found.
          </div>
        </motion.div>
        
          <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <a href={whatsAppLink} target="_blank" rel="noopener noreferrer">
          <Button className="btn-brutal text-lg px-8 py-4">
            Join The Club
          </Button>
          </a>
          <Button 
            variant="outline" 
            className="font-mono font-bold uppercase tracking-wider bg-transparent border-4 border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-4"
            onClick={() => handleComingSoon("Upcoming Events")}
            >
            Upcoming Events
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

