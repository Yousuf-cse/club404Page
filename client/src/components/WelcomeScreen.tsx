import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface WelcomeScreenProps {
  onComplete: () => void;
}

const WelcomeScreen = ({ onComplete }: WelcomeScreenProps) => {
  const [currentText, setCurrentText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [showGeometry, setShowGeometry] = useState(false);
  const [showGlitch, setShowGlitch] = useState(false);

  const fullText = "404";
  const typeSpeed = 400;

  useEffect(() => {
    // Auto complete after 25 seconds
    const autoComplete = setTimeout(() => {
      onComplete();
    }, 25000);

    // Start typing after 1 second
    const startTyping = setTimeout(() => {
      let index = 0;
      const typeInterval = setInterval(() => {
        setCurrentText(fullText.slice(0, index + 1));
        index++;
        
        if (index === fullText.length) {
          clearInterval(typeInterval);
          setShowGeometry(true);
          setShowGlitch(true);
          
          // Complete after showing full animation
          setTimeout(() => {
            onComplete();
          }, 3000);
        }
      }, typeSpeed);

      return () => clearInterval(typeInterval);
    }, 1000);

    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearTimeout(autoComplete);
      clearTimeout(startTyping);
      clearInterval(cursorInterval);
    };
  }, [onComplete]);

  const handleSkip = () => {
    onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background z-50 flex items-center justify-center cursor-pointer overflow-hidden"
      onClick={handleSkip}
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-foreground"
            style={{
              width: "100vw",
              height: "1px",
              top: `${(i + 1) * 5}%`,
              borderTop: "1px solid currentColor"
            }}
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 3,
              delay: i * 0.1,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        ))}
      </div>

      {/* Geometric Elements */}
      <AnimatePresence>
        {showGeometry && (
          <>
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 2, type: "spring" }}
              className="absolute top-20 left-20 w-16 h-16 bg-primary border-4 border-foreground"
            />
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: -360 }}
              transition={{ duration: 2, type: "spring", delay: 0.5 }}
              className="absolute bottom-20 right-20 w-12 h-12 bg-neon-green border-4 border-foreground"
            />
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="absolute top-1/2 left-10 w-4 h-32 bg-cyber-blue transform -rotate-45 origin-bottom"
            />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 1.2 }}
              className="absolute top-1/2 right-10 w-32 h-4 bg-primary transform rotate-45 origin-left"
            />
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Terminal Window */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="terminal-block mb-8 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-foreground">
            <span className="text-primary text-sm">~/welcome$</span>
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-blue-400 border border-foreground"></div>
              <div className="w-3 h-3 rounded-full bg-white border border-foreground"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 border border-foreground"></div>
            </div>
          </div>
          
          <div className="text-left">
            <span className="text-primary">visitor@aliah:~$</span>
            <span className="text-foreground ml-2">echo "Loading..."</span>
            <div className="mt-2 text-muted-foreground">Loading...</div>
            <div className="mt-4">
              <span className="text-primary">visitor@aliah:~$</span>
              <span className="text-foreground ml-2">initialize</span>
            </div>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative"
        >
          <h1 className="font-display font-black text-6xl md:text-7xl lg:text-[10rem] text-foreground relative">
            {currentText}
            {showCursor && (
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="text-primary"
              >
                |
              </motion.span>
            )}
          </h1>

          {/* Glitch Effect */}
          {showGlitch && (
            <>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.3, 0],
                  x: [0, -5, 5, 0],
                }}
                transition={{ 
                  duration: 0.2, 
                  repeat: Infinity,
                  repeatDelay: 2 
                }}
                className="font-display font-black text-8xl md:text-9xl lg:text-[12rem] text-primary absolute inset-0"
              >
                <span>Club</span> {fullText}
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.2, 0],
                  x: [0, 3, -3, 0],
                }}
                transition={{ 
                  duration: 0.15, 
                  repeat: Infinity,
                  repeatDelay: 3,
                  delay: 0.1 
                }}
                className="font-display font-black text-8xl md:text-9xl lg:text-[12rem] text-cyber-blue absolute inset-0"
              >
                {fullText}
              </motion.h1>
            </>
          )}
        </motion.div>

        {/* Subtitle */}
        <AnimatePresence>
          {currentText.length >= 4 && (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mt-8"
            >
              <div className="divider-brutal mb-6"></div>
              <p className="font-mono text-xl text-muted-foreground uppercase tracking-wider">
                Club 404 • Aliah University
              </p>
              <p className="font-mono text-lg text-muted-foreground uppercase tracking-wider mt-2">
                New Town, Kolkata
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-4 border-foreground border-t-primary"
            ></motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-32 right-32 w-6 h-6 bg-neon-green border-2 border-foreground transform rotate-45"
      />
      
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -3, 3, 0] 
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1 
        }}
        className="absolute bottom-32 left-32 w-8 h-8 bg-primary border-2 border-foreground"
      />
    </motion.div>
  );
};

export default WelcomeScreen;