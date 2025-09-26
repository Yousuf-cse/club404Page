import {motion} from "framer-motion"

export default function About () {
  return (
    <section id="about" className="py-20 bg-concrete-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-electric/5 border-2 border-electric/20 transform rotate-12"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-neon-green/5 border-2 border-neon-green/20 transform -rotate-12"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-48 bg-cyber-blue/10 transform rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-electric/3 border border-electric/30 transform rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display font-black text-4xl md:text-6xl mb-6 text-foreground cursor-default">
                About <span className="text-electric">Us</span>
              </h2>
              
              <div className="terminal-block mb-6">
                <div className="text-foreground cursor-default">
                  club404.init()
                </div>
              </div>
              
              <p className="font-mono text-lg text-muted-foreground mb-6 leading-relaxed cursor-default">
                We are the coding community of Aliah University, New Town. 
                a collective of passionate developers, hardware hackers, and digital architects 
                pushing the boundaries of technology.
              </p>
              
              <p className="font-mono text-lg text-muted-foreground mb-8 leading-relaxed cursor-default">
                From web dev to embedded systems, machine learning to mobile apps -
                we explore every corner of the digital universe.
              </p>
              
              <div className="divider-brutal mb-6"></div>
              
              <div className="terminal-block">
                <div className="text-neon-green cursor-default">
                  Status: Active | Members: 150+ | Events: Counting++
                </div>
              </div>
            </motion.div>
            
             <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="card-brutal group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="font-display font-bold text-2xl text-electric mb-3 group-hover:text-foreground transition-colors">
                  Our Mission
                </h3>
                <p className="font-mono text-muted-foreground">
                  Empowering students through code, fostering innovation, 
                  and building a strong tech community at Aliah University.
                </p>
              <div className="mt-4 h-1 w-full bg-electric transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.div>
              
             <motion.div 
                className="card-brutal group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="font-display font-bold text-2xl text-neon-green mb-3 group-hover:text-foreground transition-colors">
                  What We Do
                </h3>
                <p className="font-mono text-muted-foreground">
                  Coding sessions, hackathons, workshops, and collaborative 
                  projects that challenge and inspire our members.
                </p>
              <div className="mt-4 h-1 w-full bg-neon-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.div>
              
             <motion.div 
                className="card-brutal group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="font-display font-bold text-2xl text-cyber-blue mb-3 group-hover:text-foreground transition-colors">
                  Join Us
                </h3>
                <p className="font-mono text-muted-foreground">
                  Open to all skill levels. Whether you're a beginner or expert, 
                  there's a place for you in our community.
                </p>
             <div className="mt-4 h-1 w-full bg-cyber-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};