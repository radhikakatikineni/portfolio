
import React from "react";
import { motion } from "framer-motion";
import { Zap, Brain, Users, Heart, Coffee } from "lucide-react";

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const skills = [
    "Python (Django, Flask)", "React, Node.js, Express.js", "RESTful APIs & Microservices",
    "Cloud (AWS, Azure)", "Database (SQL, NoSQL)", "CI/CD & DevOps",
    "Agile Methodologies", "Problem Solving", "Team Collaboration", "Time Management"
  ];

  const journeyPoints = [
    { icon: <Zap className="h-6 w-6 text-secondary"/>, text: "Over 6 years of dynamic experience in Full Stack Development, delivering robust and scalable applications." },
    { icon: <Heart className="h-6 w-6 text-secondary"/>, text: "Proud mother of two, mastering the art of balancing a thriving tech career with a fulfilling family life." },
    { icon: <Brain className="h-6 w-6 text-secondary"/>, text: "Passionate about continuous learning, adapting to new technologies, and solving complex challenges with creative solutions." },
    { icon: <Coffee className="h-6 w-6 text-secondary"/>, text: "Adept at time management and prioritization, ensuring project deadlines are met while nurturing my children's growth." },
    { icon: <Users className="h-6 w-6 text-secondary"/>, text: "Proven ability to collaborate effectively in Agile teams, fostering a positive and productive work environment." },
  ];

  return (
    <section id="about" className="section-padding bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Driven by curiosity and a passion for technology, I transform complex problems into elegant digital experiences.
          </motion.p>
        </motion.div>

        <div className="mt-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} 
            variants={sectionVariants}
            className="max-w-3xl mx-auto"
          >
            <motion.h3 variants={itemVariants} className="text-3xl font-semibold text-foreground mb-6 text-center lg:text-left">
              My Developer Journey
            </motion.h3>
            <motion.p variants={itemVariants} className="text-lg text-foreground/80 mb-6 leading-relaxed">
              My path into software development began over six years ago, fueled by an insatiable curiosity for how technology shapes our world. It's been a journey of constant evolution, not just in mastering new languages and frameworks, but in growing as an individual. As a mother of two wonderful children, I've learned the profound importance of discipline, time management, and resilience. Balancing the demands of a fast-paced tech career with the joys and responsibilities of motherhood has taught me to be incredibly efficient, to prioritize ruthlessly, and to find creative solutions to challenges both at work and at home.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg text-foreground/80 mb-6 leading-relaxed">
              This unique blend of experiences has shaped me into a developer who is not only technically proficient but also empathetic, patient, and deeply committed. I approach every project with a holistic perspective, understanding that the best solutions are born from a combination of sharp technical skills and a genuine understanding of human needs. My journey is a testament to the fact that passion, dedication, and a strong support system can empower anyone to achieve their goals, no matter the complexities of life.
            </motion.p>
            
            <ul className="space-y-4 mb-8">
              {journeyPoints.map((point, index) => (
                <motion.li variants={itemVariants} key={index} className="flex items-start text-foreground/90">
                  <div className="p-2 bg-secondary/10 rounded-full mr-4 shrink-0 mt-0.5">{point.icon}</div>
                  <span>{point.text}</span>
                </motion.li>
              ))}
            </ul>

            <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-foreground mb-5 mt-10 text-center lg:text-left">
              Core Skills
            </motion.h3>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {skills.map((skill, index) => (
                <motion.span 
                  key={index} 
                  className="bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm hover:bg-primary/20 transition-colors duration-200 cursor-default"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
