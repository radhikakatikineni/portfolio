
import React from "react";
import { motion } from "framer-motion";
import ContactInfo from "@/components/ContactInfo"; 
import ContactForm from "@/components/ContactForm"; 
import SectionHeader from "@/components/SectionHeader";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="section-padding bg-background hero-bg-pattern">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Get In"
          titleHighlight="Touch"
          subtitle="Have a project in mind, a question, or just want to connect? I'm here to listen. Fill out the form or reach out via my contact details."
        />

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 mt-12 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="lg:col-span-5" variants={itemVariants}>
            <ContactInfo />
          </motion.div>
          <motion.div className="lg:col-span-7" variants={itemVariants}>
            <ContactForm />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
