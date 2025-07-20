import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import { motion } from "framer-motion";

const HeroSection = () => {
  const fullTitle = "  The Sikkim Sentinel";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullTitle.length) {
        setTypedText((prev) => prev + fullTitle.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          {typedText}
          <span className="cursor">|</span>
        </h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Public Safety and Security is Our Top Priority.
        </motion.p>

        <motion.div
          className="glass-tagline"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="hero-tagline">
            Empowering Sikkimese with <span className="highlight">real-time alerts</span>,
             <span className="highlight"> Tiered-SOS </span>,
            <span className="highlight"> safety tips</span>, and
            <span className="highlight"> emergency access</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;