import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Team() {
  const [currentMember, setCurrentMember] = useState(0);
  const [imageErrors, setImageErrors] = useState(new Set());

  const teamMembers = [
     {
      name: "Ramiz",
      expertise: " ",
      linkedin: "https://www.linkedin.com/in/",
      github: "https://github.com/",
      accent: "cyber-blue",
      image: "",
      gender: "male"
    },
    {
      name: "Rezaul Hossain",
      expertise: "Hardware",
      linkedin: "https://www.linkedin.com/in/razaul-shoaib-ba192b330/",
      github: "https://github.com/",
      accent: "electric",
      image: "https://res.cloudinary.com/dxkje9whm/image/upload/v1758892639/Screenshot_261_emxplm.png",
      gender: "male"
    },
    {
      name: "Md Yousuf Mallik",
      expertise: "Full stack & Android",
      linkedin: "https://res.cloudinary.com/dxkje9whm/image/upload/v1758892593/yousuf_n1xsid.jpg", 
      github: "https://github.com/Yousuf-cse",
      accent: "neon-green",
      image: "/images/team/yousuf.jpg",
      gender: "male"
    },
    {
      name: "Sharabati Bose",
      expertise: "AI/ML",
      linkedin: "https://www.linkedin.com/in/sharabati-bose-3550b0318/",
      github: "https://github.com/", 
      accent: "cyber-blue",
      image: "https://res.cloudinary.com/dxkje9whm/image/upload/v1758892618/sharabati_jif4ji.jpg",
      gender: "female"
    },
    {
      name: "Inzamam Siddiqui",
      expertise: "competitive programming",
      linkedin: "https://www.linkedin.com/in/inzamam-siddiqui-854a73385?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
      github: "https://github.com/",
      accent: "electric",
      image: "https://res.cloudinary.com/dxkje9whm/image/upload/v1758892609/inzamam_onm43s.jpg",
      gender: "male"
    },
    {
      name: "Isam Ali",
      expertise: "Full Stack Developer",
      linkedin: "www.linkedin.com/in/isam-ali-b49185384",
      github: "https://github.com/isamm-ali",
      accent: "neon-green",
      image: "",
      gender: "male"
    },
    {
      name: "Farhat Anjum", 
      expertise: "Ui/Ux Design",
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      accent: "cyber-blue",
      image: "",
      gender: "female"
    },
    {
      name: "Raghib Ahmad",
      expertise: "Web Development",
      linkedin: "https://www.linkedin.com/in/raghib-ahmad-27hg/",
      github: "https://github.com/",
      accent: "electric",
      image: "",
      gender: "male"
    },
    {
      name: "Warisha Noushad",
      expertise: "Designer",
      linkedin: "https://www.linkedin.com/in/warisha-noushad-61335a386?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app  ",
      github: "https://github.com/codebywn",
      accent: "neon-green",
      image: "",
      gender: "female"
    },
    {
      name: "Karan Sharma",
      expertise: "Software Development",
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      accent: "cyber-blue",
      image: "",
      gender: "male"
    },
    {
      name: "Tapojoyti Mukherjee",
      expertise: "Web Development",
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      accent: "electric",
      image: "",
      gender: "male"
    },
  ];

  // Function to get fallback avatar based on gender
  const getAvatarImage = (member) => {
    const fallbackAvatars = {
      male: "https://res.cloudinary.com/dxkje9whm/image/upload/v1758892609/maleAvatar_ca5wog.png",
      female: "https://res.cloudinary.com/dxkje9whm/image/upload/v1758892592/femaleAvatar_gr6rno.png"
    };
    return fallbackAvatars[member.gender] || fallbackAvatars.male;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMember((prev) => (prev + 1) % teamMembers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [teamMembers.length]);

  const currentTeamMember = teamMembers[currentMember];
  const nextMember = teamMembers[(currentMember + 1) % teamMembers.length];

  // Function to handle image error and use fallback
  const handleImageError = (memberIndex) => {
    setImageErrors(prev => new Set([...prev, memberIndex]));
  };

  // Get the image to display (original or fallback)
  const getDisplayImage = (member, memberIndex) => {
    if (imageErrors.has(memberIndex)) {
      return getAvatarImage(member);
    }
    return member.image;
  };

  return (
    <section id="team" className="py-20 bg-background relative overflow-hidden">
        
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-electric/10 border-2 border-electric/20 transform rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-neon-green/10 border-2 border-neon-green/20 transform -rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-40 bg-cyber-blue/20 transform rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-electric/5 border border-electric/30 transform rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-black text-4xl md:text-6xl mb-6 text-foreground cursor-default">
              Core <span className="text-electric">Team</span>
            </h2>
            
            <div className="terminal-block mb-16 text-left max-w-2xl mx-auto cursor-default">
              <div className="text-neon-green">
                $ club404.team.display()
              </div>
              <div className="text-foreground mt-2">
                Loading team members...
              </div>
              <div className="text-electric mt-1">
                {teamMembers.length} exceptional developers found!
              </div>
            </div>
          </motion.div>

          {/* Team Member Cards */}
          <div className="relative h-96 flex items-center justify-center">
            {/* Next Member Card (Behind) - Moved before current card */}
            <motion.div
              key={`next-${currentMember}`}
              initial={{ opacity: 0.3, scale: 0.9, z: -200 }}
              animate={{ opacity: 0.3, scale: 0.9, z: -50 }}
              className="absolute w-72 h-72 z-0"
              style={{ transform: 'translateZ(-50px) rotateY(15deg)' }}
            >
              <div className="card-brutal h-full relative overflow-hidden">
                {/* Background Image for Next Card */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
                  style={{ backgroundImage: `url(${getDisplayImage(nextMember, (currentMember + 1) % teamMembers.length)})` }}
                >
                  {/* Hidden img element to detect load errors */}
                  <img
                    src={nextMember.image}
                    alt=""
                    className="hidden"
                    onError={() => handleImageError((currentMember + 1) % teamMembers.length)}
                  />
                  <div className="absolute inset-0 bg-black/70"></div>
                </div>
                
                <div className="relative z-10 p-6 h-full flex flex-col justify-center items-center">
                  <div className={`w-4 h-4 ${
                    nextMember.accent === 'electric' ? 'bg-electric/50' : 
                    nextMember.accent === 'neon-green' ? 'bg-neon-green/50' : 
                    'bg-cyber-blue/50'
                  } border border-white/50 transform rotate-45 mb-4`}></div>
                  
                  <h3 className="font-display font-bold text-lg text-white mb-2 drop-shadow-md">
                    {nextMember.name}
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Current Member Card */}
            <motion.div
              key={currentMember}
              initial={{ opacity: 0, scale: 0.8, z: -100 }}
              animate={{ opacity: 1, scale: 1, z: 0 }}
              exit={{ opacity: 0, scale: 0.8, z: -100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute w-80 h-80 z-10"
            >
              <div className="card-brutal h-full relative overflow-hidden group">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${getDisplayImage(currentTeamMember, currentMember)})` }}
                >
                  {/* Hidden img element to detect load errors */}
                  <img
                    src={currentTeamMember.image}
                    alt=""
                    className="hidden"
                    onError={() => handleImageError(currentMember)}
                  />
                  
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 transition-all duration-300"></div>
                  
                  {/* Accent color overlay */}
                  <div className={`absolute inset-0 ${
                    currentTeamMember.accent === 'electric' ? 'bg-electric/20' : 
                    currentTeamMember.accent === 'neon-green' ? 'bg-neon-green/20' : 
                    'bg-cyber-blue/20'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
                
                <div className="relative z-10 p-14 h-full flex flex-col justify-between">
                  <div>
                    <div className={`w-6 h-6 ${
                      currentTeamMember.accent === 'electric' ? 'bg-electric' : 
                      currentTeamMember.accent === 'neon-green' ? 'bg-neon-green' : 
                      'bg-cyber-blue'
                    } border-2 border-white transform rotate-45 mb-6`}></div>
                    
                    <h3 className={`font-display font-bold text-2xl mb-2 cursor-default ${
                      currentTeamMember.accent === 'electric' ? 'text-electric' : 
                      currentTeamMember.accent === 'neon-green' ? 'text-neon-green' : 
                      'text-cyber-blue'
                    } drop-shadow-lg`}>
                      {currentTeamMember.name}
                    </h3>
                    
                    <p className="font-mono text-sm text-white mb-6 drop-shadow-md cursor-default">
                      {currentTeamMember.expertise}
                    </p>
                  </div>
                  
                  <div className="flex gap-3 justify-center">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-black transition-all duration-300"
                      onClick={() => window.open(currentTeamMember.linkedin, '_blank')}
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-black transition-all duration-300"
                      onClick={() => window.open(currentTeamMember.github, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${
                  currentTeamMember.accent === 'electric' ? 'bg-electric' : 
                  currentTeamMember.accent === 'neon-green' ? 'bg-neon-green' : 
                  'bg-cyber-blue'
                }`}></div>
              </div>
            </motion.div>
          </div>

          {/* Team Navigation */}
          <div className="flex justify-center mt-12 space-x-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentMember(index)}
                className={`w-3 h-3 border-2 border-foreground transform rotate-45 transition-all duration-300 ${
                  index === currentMember 
                    ? 'bg-electric scale-125' 
                    : 'bg-transparent hover:bg-muted-foreground/20'
                }`}
              />
            ))}
          </div>

          <div className="terminal-block mt-12 text-left max-w-xl mx-auto cursor-default">
            <div className="text-foreground">
              {"> Team member {currentMember + 1} of {teamMembers.length}"}
            </div>
            <div className="text-electric mt-1">
              {"> Next rotation in 3 seconds..."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};