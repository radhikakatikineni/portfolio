
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Linkedin, Twitter, Mail } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offsetTop = contactSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Radhi-Resume.pdf'; 
    link.download = 'Radhi-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.9, type: "spring", stiffness: 100, delay: 0.5 } },
  };

  return (
    <section id="home" className="section-padding min-h-screen flex items-center hero-bg-pattern relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center pt-20 lg:pt-0">
        <motion.div 
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="text-lg font-medium text-primary mb-2">
            Hello, I'm Radhi Katiki
          </motion.p>
          <motion.h1 
            variants={itemVariants} 
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-foreground"
          >
            Full Stack <span className="gradient-text">Python</span> Developer
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl">
            I craft innovative and scalable web solutions with a passion for clean code and cutting-edge technologies. Let's build something amazing together.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button 
              size="lg" 
              className="gradient-bg text-primary-foreground font-semibold text-lg py-7 px-8 rounded-full shadow-lg hover:shadow-primary/40 transition-all duration-300 relative overflow-hidden shine-button"
              onClick={scrollToContact}
            >
              Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="font-semibold text-lg py-7 px-8 rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300"
              onClick={handleResumeDownload}
            >
              <Download className="mr-2 h-5 w-5" /> My Resume
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex space-x-5">
            <a href="https://www.linkedin.com/in/radhi-katiki-1b8211251" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-foreground/70 hover:text-primary transition-colors duration-300">
              <Linkedin className="h-7 w-7 icon-glow" />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile" className="text-foreground/70 hover:text-primary transition-colors duration-300">
              <Twitter className="h-7 w-7 icon-glow" />
            </a>
             <a href="mailto:contact@radhi.cloud" aria-label="Email Me" className="text-foreground/70 hover:text-primary transition-colors duration-300">
              <Mail className="h-7 w-7 icon-glow" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative flex justify-center items-center mt-10 lg:mt-0"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] gradient-bg rounded-full opacity-20 blur-3xl -z-10 animate-pulse"></div>
          <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-2xl border-4 border-card">
            <img  
              className="w-full h-full object-cover" 
              style={{ objectPosition: 'center 35%' }}
              alt="Radhi Katiki - Professional Portrait"
             src="https://storage.googleapis.com/hostinger-horizons-assets-prod/629f5f22-0ba5-43f1-8777-69d8edab3392/30e92b7d4c4435288aa97ca87936012c.jpg" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
