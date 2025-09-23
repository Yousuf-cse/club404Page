export default function About () {
  return (
    <section id="about" className="py-20 bg-concrete-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
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
            </div>
            
            <div className="space-y-6">
              <div className="card-brutal cursor-pointer">
                <h3 className="font-display font-bold text-2xl text-electric mb-3">
                  Our Mission
                </h3>
                <p className="font-mono text-muted-foreground">
                  Empowering students through code, fostering innovation, 
                  and building a strong tech community at Aliah University.
                </p>
              </div>
              
              <div className="card-brutal cursor-pointer">
                <h3 className="font-display font-bold text-2xl text-neon-green mb-3">
                  What We Do
                </h3>
                <p className="font-mono text-muted-foreground">
                  Coding sessions, hackathons, workshops, and collaborative 
                  projects that challenge and inspire our members.
                </p>
              </div>
              
              <div className="card-brutal cursor-pointer">
                <h3 className="font-display font-bold text-2xl text-cyber-blue mb-3">
                  Join Us
                </h3>
                <p className="font-mono text-muted-foreground">
                  Open to all skill levels. Whether you're a beginner or expert, 
                  there's a place for you in our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};