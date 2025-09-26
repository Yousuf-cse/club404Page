import { Button } from "@/components/ui/button";
import { HashLink } from 'react-router-hash-link';
import { motion } from "framer-motion";

export default function Header () {

  const whatsAppLink = "https://chat.whatsapp.com/EOR7RBOol6AGHNf0IdhpZI";

  return (
     <motion.header 
      className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b-4 border-primary"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
          <HashLink smooth to="#hero" className="flex items-center space-x-3">
             <motion.img 
              src="/src/assets/club-404-logo.jpg" 
              alt="Club 404 Logo" 
              className="w-10 h-10 rounded-lg border-2 border-primary"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
             <motion.span 
              className="font-display font-bold text-xl text-primary"
              whileHover={{ scale: 1.05 }}
            >club404</motion.span>
          </HashLink>
          </motion.div>
          
           <motion.nav 
            className="hidden md:flex items-center space-x-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <HashLink smooth to="#about" className="font-mono font-bold uppercase tracking-wider hover:text-primary transition-colors">
              <motion.span 
   
              className="font-mono font-bold uppercase tracking-wider hover:text-primary transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              About
              </motion.span>
            </HashLink>
            <HashLink smooth to="#services" className="font-mono font-bold uppercase tracking-wider hover:text-primary transition-colors">
               <motion.span
              className="font-mono font-bold uppercase tracking-wider hover:text-primary transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Services
              </motion.span>
            </HashLink>
            <HashLink smooth to="#contact" className="font-mono font-bold uppercase tracking-wider hover:text-primary transition-colors">
               <motion.span 
              className="font-mono font-bold uppercase tracking-wider hover:text-primary transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Contact
              </motion.span>
            </HashLink>
          </motion.nav>
          
            <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href={whatsAppLink} target="_blank" rel="noopener noreferrer">
          <Button className="btn-brutal ">
            Join Now
          </Button>
          </a>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

