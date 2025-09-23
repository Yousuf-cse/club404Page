import { Button } from "@/components/ui/button";
import { HashLink } from 'react-router-hash-link';

export default function Header () {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b-4 border-electric">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <HashLink smooth to="#hero" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-electric border-2 border-foreground transform rotate-45"></div>
            <span className="font-display font-bold text-xl text-electric">club404</span>
          </HashLink>
          
          <nav className="hidden md:flex items-center space-x-8">
            <HashLink smooth to="#about" className="font-mono font-bold uppercase tracking-wider hover:text-electric transition-colors">
              About
            </HashLink>
            <HashLink smooth to="#services" className="font-mono font-bold uppercase tracking-wider hover:text-electric transition-colors">
              Services
            </HashLink>
            <HashLink smooth to="#contact" className="font-mono font-bold uppercase tracking-wider hover:text-electric transition-colors">
              Contact
            </HashLink>
          </nav>
          
          <Button className="btn-brutal ">
            Join Now
          </Button>
        </div>
      </div>
    </header>
  );
};

