
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const IntroSplash = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500); // Higher duration for more impact

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          {/* Animated Background Elements */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1.2, 1],
              opacity: [0, 0.2, 0.1]
            }}
            transition={{ duration: 4, ease: "easeOut" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,148,79,0.15)_0%,transparent_70%)]"
          />

          {/* Logo Animation */}
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="relative z-10 mb-8"
          >
            <img 
              src={logo} 
              alt="SHREE JEE ELECTRICALS" 
              className="h-24 md:h-32 w-auto animate-pulse-slow active:scale-95 transition-transform"
            />
          </motion.div>

          {/* Text Animation */}
          <div className="relative z-10 text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              className="text-3xl md:text-5xl lg:text-6xl font-black tracking-[0.2em] text-white uppercase mb-2"
            >
              <span className="text-primary">SHREE JEE</span>
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.5, ease: "circOut" }}
              className="h-[2px] w-48 md:w-64 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2, ease: "easeOut" }}
              className="text-[10px] md:text-xs font-bold tracking-[0.5em] text-gray-400 uppercase"
            >
              Exquisite Lighting Solutions
            </motion.p>
          </div>

          {/* Decorative Gold Light Beam */}
          <motion.div
            initial={{ rotate: -45, x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{ duration: 2.5, delay: 1, ease: "easeInOut", repeat: 0 }}
            className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroSplash;
