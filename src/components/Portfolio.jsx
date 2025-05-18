
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Briefcase } from "lucide-react";
import {bmo1, bmo2, tdwealth, tdinsurance, brandvedahome, ahexhome} from '../assets/images';


const portfolioData = [
  {
    id: 1,
    title: "BMO Personal Banking",
    description: "Contributed to the development of features for Bank of Montreal's personal banking portal.",
    imageUrl: bmo1,
    altText: "Bank of Montreal personal banking website screenshot",
    projectUrl: "https://www.bmo.com/en-ca/main/personal/?icid=tl-FEAT2953BRND4-AJBMOH14",
    tags: ["React", "Python", "Django", "TensorFlow", "PyTorch", "Fintech", "FastAPI", "Enterprise", "MongoDB", "AWS", "RESTful APIs"],
  },
  {
    id: 2,
    title: "BMO Private Wealth",
    description: "Developed and maintained components for BMO's Private Wealth management platform.",
    imageUrl: bmo2,
    altText: "Bank of Montreal Private Wealth website screenshot",
    projectUrl: "https://www.bmo.com/en-ca/main/privatewealth/",
    tags: ["Angular", "Pandas", "Python", "NumPy", "Wealth Management", "API Integration", "Microservices", "RestFul", "AWS", "PostgreSQL"],
  },
  {
    id: 3,
    title: "TD Wealth",
    description: "Worked on TD Bank's wealth management digital solutions, enhancing user experience.",
    imageUrl: tdwealth,
    altText: "TD Bank Wealth section website screenshot",
    projectUrl: "https://www.td.com/ca/en/investing/wealth",
    tags: ["React", "Nodejs", "Python", "Financial Services", "UX/UI", "Pandas", "PyTorch", "MySQL", "AWS"],
  },
  {
    id: 4,
    title: "TD Insurance - My Policies",
    description: "Contributed to the TD Insurance 'My Policies' portal for customer self-service.",
    imageUrl: tdinsurance,
    altText: "TD Insurance My Policies portal screenshot",
    projectUrl: "https://www.tdinsurance.com/my-policies",
    tags: ["Python", "React", "Flask", "Django", "Spring Boot","Java", "Insurance Tech", "Docker", "Microservices", "RESTful APIs"],
  },
  {
    id: 5,
    title: "Brandveda (KFM Tech)",
    description: "Developed web solutions for Brandveda, a digital marketing institute, via KFM Technologies.",
    imageUrl: brandvedahome,
    altText: "Brandveda website homepage screenshot",
    projectUrl: "https://www.brandveda.in/",
    tags: ["React", "Nodejs", "Python", "Requests" , "TensorFlow" , "Flask", "FastAPI", "RESTful APIs"],
  },
  {
    id: 6,
    title: "Ahex Technologies (KFM Tech)",
    description: "Built and enhanced web applications for Ahex Technologies through KFM Technologies.",
    imageUrl: ahexhome,
    altText: "Ahex Technologies website homepage screenshot",
    projectUrl: "https://ahex.co/",
    tags: ["Python", "Django", "SaaS", "Django" , "TensorFlow" , "Flask", "FastAPI", "NumPy"],
  },
];

const PortfolioCard = ({ project }) => {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full flex flex-col glassmorphism-card card-hover-effect overflow-hidden group">
        <CardHeader className="pb-4">
          <div className="w-full h-48 mb-4 rounded-md overflow-hidden border border-border">
            <img  
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt={project.altText}
             src={project.imageUrl}/>
          </div>
          <CardTitle className="text-xl lg:text-2xl gradient-text group-hover:text-primary transition-colors">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-foreground/80 mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button
            asChild
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 relative overflow-hidden shine-button group"
          >
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
              View Project <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Portfolio = () => {
  if (!portfolioData || portfolioData.length === 0) {
    return (
      <section id="portfolio" className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="section-title">
            <span className="gradient-text">My Work</span> Showcase
          </h2>
          <p className="section-subtitle">
            Portfolio information is currently being updated. Please check back shortly!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="section-padding bg-background/70 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="section-title">
            <Briefcase className="inline-block h-10 w-10 md:h-12 md:w-12 mr-3 mb-2 gradient-text" />
            My <span className="gradient-text">Work</span>
          </h2>
          <p className="section-subtitle">
            A selection of projects I've had the pleasure to work on, showcasing my skills and experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
