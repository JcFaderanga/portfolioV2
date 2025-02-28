"use client"
import React from "react";
import { motion } from "framer-motion";

const FadeUp = ({delay, className, children}) => {    
    return(
        <motion.div 
            initial={{ opacity: 0, y: 20 }}  // Starts invisible and slightly below
            animate={{ opacity: 1, y: 0 }}  // Fades in and moves up
            transition={{ duration: .4, delay: delay, ease: "easeOut" }} // 0.5s delay before animation starts
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default FadeUp;