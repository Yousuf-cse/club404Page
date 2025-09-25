import { motion } from "framer-motion"

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
    <section id="services" className="py-20 bg-background relative overflow-hidden">
    
      <div className="absolute inset-0">
        <div className="absolute top-16 right-16 w-36 h-36 bg-neon-green/5 border-2 border-neon-green/20 transform rotate-12"></div>
        <div className="absolute bottom-16 left-16 w-24 h-24 bg-cyber-blue/5 border-2 border-cyber-blue/20 transform -rotate-12"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-44 bg-electric/10 transform rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/4 w-18 h-18 bg-neon-green/3 border border-neon-green/30 transform rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-black text-4xl md:text-6xl mb-6 text-foreground">
              What We <span className="text-electric">Conduct</span>
            </h2>
            
            <div className="terminal-block max-w-2xl mx-auto">
              <div className="text-foreground">
                {"club404.services.forEach(service => console.log(service))"}
              </div>
            </div>
            
            <div className="divider-brutal mt-8"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="card-brutal group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

