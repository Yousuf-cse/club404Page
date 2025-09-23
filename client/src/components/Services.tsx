export default function Services () {
  const services =[
  {
    "title": "Events & Workshops",
    "description": "We organize hands-on workshops and expert-led tech talks on a range of topics, from full-stack development to AI.",
    "tech": "Workshops • Tech Talks • Webinars • Meetups",
    "accent": "electric"
  },
  {
    "title": "Hackathons",
    "description": "Join our hackathons and coding marathons to build innovative solutions and bring your ideas to life under pressure.",
    "tech": "Hackathons • Ideation • Prototyping • Teamwork",
    "accent": "neon-green"
  },
  {
    "title": "Competitive Programming",
    "description": "Sharpen your problem-solving abilities and master algorithms through our regular contests and practice sessions.",
    "tech": "Algorithms • Data Structures • C++ • Python",
    "accent": "cyber-blue"
  },
  {
    "title": "Project Collaborations",
    "description": "Work with peers on real-world projects, from open source contributions to building your own portfolio-worthy applications.",
    "tech": "Git • GitHub • Project Management • Open Source",
    "accent": "electric"
  },
  {
    "title": "Mentorship & Networking",
    "description": "Connect with industry professionals and senior students to get career guidance and insights into the tech world.",
    "tech": "Mentoring • Networking • Career Guidance",
    "accent": "neon-green"
  },
  {
    "title": "Hardware & IoT",
    "description": "Explore the physical side of tech by working on robotics, embedded systems, and other Internet of Things projects.",
    "tech": "Arduino • Raspberry Pi • Robotics • Embedded Systems",
    "accent": "cyber-blue"
  }
];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-4xl md:text-6xl mb-6 text-foreground cursor-default">
              What We <span className="text-electric">Do</span>
            </h2>
            
            <div className="terminal-block max-w-2xl mx-auto">
              <div className="text-foreground cursor-default">
                {"club404.services.forEach(service => console.log(service))"}
              </div>
            </div>
            
            <div className="divider-brutal mt-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-brutal group cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <h3 className={`font-display font-bold text-xl ${
                    service.accent === 'electric' ? 'text-electric' : 
                    service.accent === 'neon-green' ? 'text-neon-green' : 
                    'text-cyber-blue'
                  } group-hover:text-foreground transition-colors`}>
                    {service.title}
                  </h3>
                  <div className={`w-4 h-4 ${
                    service.accent === 'electric' ? 'bg-electric' : 
                    service.accent === 'neon-green' ? 'bg-neon-green' : 
                    'bg-cyber-blue'
                  } border-2 border-foreground transform rotate-45`}></div>
                </div>
                
                <p className="font-mono text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="terminal-block">
                  <div className="text-sm text-muted-foreground">
                    {service.tech}
                  </div>
                </div>
                
                <div className={`mt-4 h-1 w-full ${
                  service.accent === 'electric' ? 'bg-electric' : 
                  service.accent === 'neon-green' ? 'bg-neon-green' : 
                  'bg-cyber-blue'
                } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

