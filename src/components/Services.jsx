
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code as CodeXml, ServerCog, CloudCog, DatabaseZap, ShieldCheck as ShieldLock, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';

const ServiceCard = ({ icon, title, description, features, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale:0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1] 
      },
    },
  };

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

  if (!title || !description || !features || features.length === 0) {
    return (
      <div className="p-4 border border-destructive rounded-lg bg-destructive/10 text-destructive-foreground">
        <p className="font-bold">Error: Service data is incomplete.</p>
      </div>
    );
  }

  return (
    <motion.div
      className="h-full"
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} 
    >
      <Card className="h-full flex flex-col glassmorphism-card rounded-xl card-hover-effect overflow-hidden group">
        <CardHeader className="items-center text-center pt-8 pb-4">
          <motion.div 
            className="p-4 rounded-full bg-gradient-to-br from-primary to-secondary w-fit mb-5 text-primary-foreground shadow-lg group-hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: 10 }}
          >
            {icon}
          </motion.div>
          <CardTitle className="text-2xl font-bold text-foreground group-hover:gradient-text transition-colors">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow px-6 pb-6">
          <CardDescription className="text-foreground/75 text-center mb-6 min-h-[70px]">
            {description}
          </CardDescription>
          <ul className="space-y-3 text-left">
            {features.map((feature, i) => (
              <motion.li 
                key={i} 
                className="flex items-start"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 + (index * 0.1) + 0.3 }}
              >
                <CheckCircle className="h-5 w-5 text-accent mr-3 shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/80">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="p-6 pt-0 mt-auto">
          <Button 
            variant="outline" 
            className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold transition-all duration-300 relative overflow-hidden shine-button group"
            onClick={scrollToContact}
          >
            Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};


const Services = () => {
  const servicesData = [
    {
      id: "web-dev",
      icon: <CodeXml className="h-10 w-10" />,
      title: "Custom Web Development",
      description: "Crafting bespoke web applications from scratch, tailored to your unique business requirements and user needs.",
      features: ["Frontend (React, Vue, Angular)", "Backend (Python, Node.js)", "Full-Stack Solutions", "Progressive Web Apps (PWAs)"],
    },
    {
      id: "api-microservices",
      icon: <ServerCog className="h-10 w-10" />,
      title: "API & Microservices",
      description: "Designing and developing robust, scalable RESTful APIs and microservices architecture for complex systems.",
      features: ["REST & GraphQL API Design", "Secure Authentication & Authorization", "Service Orchestration", "API Documentation"],
    },
    {
      id: "cloud-solutions",
      icon: <CloudCog className="h-10 w-10" />,
      title: "Cloud Solutions & DevOps",
      description: "Leveraging cloud platforms (AWS, Azure, GCP) for scalable infrastructure and implementing DevOps practices.",
      features: ["Cloud Migration & Deployment", "Serverless Architecture", "CI/CD Pipelines", "Infrastructure as Code (IaC)"],
    },
    {
      id: "database-design",
      icon: <DatabaseZap className="h-10 w-10" />,
      title: "Database Design & Optimization",
      description: "Expertise in designing efficient database schemas and optimizing queries for high-performance applications.",
      features: ["SQL & NoSQL Databases", "Data Modeling & Architecture", "Performance Tuning", "Data Security & Integrity"],
    },
    {
      id: "app-security",
      icon: <ShieldLock className="h-10 w-10" />,
      title: "Application Security",
      description: "Integrating security best practices throughout the development lifecycle to build resilient and secure applications.",
      features: ["Security Audits & Assessments", "Vulnerability Management", "Secure Coding Practices", "Compliance Implementation"],
    },
    {
      id: "tech-consulting",
      icon: <Lightbulb className="h-10 w-10" />,
      title: "Technology Consulting",
      description: "Providing strategic advice to help you choose the right technologies and approaches for your projects.",
      features: ["Tech Stack Evaluation", "Architectural Design Reviews", "Project Roadmapping", "Agile Process Improvement"],
    },
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-background via-background to-primary/5 hero-bg-pattern">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="section-title">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle">
            Delivering comprehensive solutions to empower your digital vision. From concept to deployment, I provide expert development services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 mt-12">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
