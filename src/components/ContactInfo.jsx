
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const ContactInfo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const contactDetails = [
    {
      icon: <Mail className="h-7 w-7 text-primary" />,
      label: "Email",
      value: "contact@radhi.cloud",
      href: "mailto:contact@radhi.cloud",
    },
    {
      icon: <Phone className="h-7 w-7 text-primary" />,
      label: "Phone",
      value: "+1 (587) 776-9999",
      href: "tel:+15877769999",
    },
    {
      icon: <MapPin className="h-7 w-7 text-primary" />,
      label: "Location",
      value: "Toronto, ON, Canada",
      href: "https://www.google.com/maps/place/Toronto,+ON",
    },
  ];

  const socialLinks = [
     {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/radhi-katiki-1b8211251",
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      label: "Twitter",
      href: "https://twitter.com/yourprofile", 
    },
  ];

  return (
    <motion.div 
      className="space-y-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={itemVariants}>
        <h3 className="text-3xl font-semibold text-foreground mb-4">Let's Connect</h3>
        <p className="text-lg text-foreground/80 leading-relaxed">
          I'm always excited to discuss new projects, creative ideas, or opportunities to collaborate. Feel free to reach out through any of the channels below.
        </p>
      </motion.div>

      <ul className="space-y-8">
        {contactDetails.map((item) => (
          <motion.li key={item.label} variants={itemVariants} className="flex items-start group">
            <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full mr-5 group-hover:bg-primary/20 transition-colors duration-300">
              {item.icon}
            </div>
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-0.5">{item.label}</h4>
              <a
                href={item.href}
                target={item.label === "Location" ? "_blank" : undefined}
                rel={item.label === "Location" ? "noopener noreferrer" : undefined}
                className="text-md text-foreground/70 hover:text-primary transition-colors duration-300 break-all"
              >
                {item.value}
              </a>
            </div>
          </motion.li>
        ))}
      </ul>

      <motion.div variants={itemVariants}>
        <h4 className="text-xl font-semibold text-foreground mb-4 mt-10">Find me on</h4>
        <div className="flex space-x-5">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-3 bg-foreground/5 hover:bg-foreground/10 rounded-full text-foreground/70 hover:text-primary transition-all duration-300 icon-glow"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
