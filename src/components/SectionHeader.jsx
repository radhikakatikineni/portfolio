
import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, titleHighlight, subtitle }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={itemVariants}
      className="text-center"
    >
      <h2 className="section-title">
        {title} <span className="gradient-text">{titleHighlight}</span>
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </motion.div>
  );
};

export default SectionHeader;
