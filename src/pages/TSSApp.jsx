import React, { useRef, useEffect } from "react";
import HeroSection from "../components/tss/HeroSection";
import BoostCards from "../components/tss/BoostCards";
import FigmaModal from "../components/tss/FigmaModal";
import "../components/tss/HeroSection.css";
import "../components/tss/BoostCards.module.css";
import "../components/tss/FigmaModal.css";


import "../styles/tss/App.css"; 

const TssApp = () => {
  const boostRef = useRef(null);

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      if (boostRef.current) {
        boostRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 5000);

    return () => clearTimeout(scrollTimeout);
  }, []);

  return (
    <div className="app-root">
      <HeroSection />
      <BoostCards ref={boostRef} />
      <FigmaModal />
    </div>
  );
};

export default TssApp;