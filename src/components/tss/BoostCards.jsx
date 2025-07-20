import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import styles from "./BoostCards.module.css";

const BoostCards = forwardRef((props, ref) => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
        ease: "easeInOut",
        duration: 0.8
      }
    }
  };

  const cards = [
    {
      title: "Real-Time Emergency Alerts",
      description: "Get notified instantly about local emergencies directly on your device from the department.",
      img: "/tss-assets/alert.svg"
    },
    {
      title: "Verified Tips",
      description: "Access safety protocols issued directly by The Government.",
      img: "/tss-assets/tips.svg"
    },
    {
      title: "Tiered SOS and Emergency Contacts",
      description: "Reach out quickly in times of distress with one-tap SOS signal and pre-loaded emergency contacts.",
      img: "/tss-assets/emergency.svg"
    },
    {
      title: "Local Updates",
      description: "Stay updated with community-specific news and events.           ",
      img: "/tss-assets/updates.svg"
    }
  ];

  const cardVariant = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      className={styles.boostSection}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <span className={styles.gradientText}>Safety, Security And Welfare Always Comes First!</span>{" "}
      
      </motion.h2>

      <div className={styles.grid}>
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            className={styles.card}
            variants={cardVariant}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(249, 248, 113, 0.3)"
            }}
          >
            <img src={card.img} alt={card.title} className={styles.cardImg} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
});

export default BoostCards;