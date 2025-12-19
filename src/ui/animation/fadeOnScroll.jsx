'use client';
import { motion } from 'framer-motion';

const FadeInSection = ({ children, delay = .2 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.2 }} // trigger when 20% visible, animate once
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
