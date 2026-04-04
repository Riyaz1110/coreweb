import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div 
      className="loader-container"
      initial={{ y: 0 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
    >
      <motion.div
        className="loader-spinner"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      >
        <div className="inner-spin text-gradient"></div>
        <div className="inner-spin-2"></div>
      </motion.div>
      <motion.div 
        className="loader-text text-gradient"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Initializing CoreWeb
      </motion.div>
    </motion.div>
  );
};

export default Loader;
