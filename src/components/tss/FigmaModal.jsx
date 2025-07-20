import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./FigmaModal.css";

const FigmaModal = () => {
  const [isAppOpen, setAppOpen] = useState(false);
  const [isHardwareOpen, setHardwareOpen] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const isModalOpen = isAppOpen || isHardwareOpen;

    if (isModalOpen) {
      const scrollTop = window.scrollY;
      setScrollY(scrollTop);

      document.body.classList.add("scroll-lock");
      document.body.style.top = `-${scrollTop}px`;
    } else {
      document.body.classList.remove("scroll-lock");
      document.body.style.top = "";
      window.scrollTo(0, scrollY);
    }

    
    if (isHardwareOpen) {
      document.body.classList.add("hide-header-and-scroll");
      setVideoLoading(true); 
    } else {
      document.body.classList.remove("hide-header-and-scroll");
    }

    return () => {
      document.body.classList.remove("scroll-lock");
      document.body.style.top = "";
      document.body.classList.remove("hide-header-and-scroll");
    };
  }, [isAppOpen, isHardwareOpen]);

  return (
    <section className="preview-section">
      <motion.h2
        className="preview-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Want to See the App?
      </motion.h2>

      <div className="button-group">
        <motion.button
          className="preview-button"
          onClick={() => setAppOpen(true)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Preview App
        </motion.button>

        <motion.button
          className="preview-button"
          onClick={() => {
            setVideoLoading(true);
            setHardwareOpen(true);
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Preview Hardware
        </motion.button>
      </div>

      {/* App Preview */}
      {isAppOpen && (
        <div className="modal-overlay" onClick={() => setAppOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setAppOpen(false)}>✖</button>
            <iframe
              title="Figma App Preview"
              src="https://embed.figma.com/proto/g8ta4TzHi51h7fV0HLcT4H/The-Sikkim-Sentinel?node-id=1-5&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A5&embed-host=share&scaling=contain&hide-ui=1&bg-color=transparent"
              className="figma-frame"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Hardware Preview */}
      {isHardwareOpen && (
        <div className="hardware-fullscreen" onClick={() => setHardwareOpen(false)}>
          <div className="hardware-video-wrapper" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setHardwareOpen(false)}>✖</button>

            {videoLoading && (
              <div className="video-loader">
                <div className="spinner"></div>
                <p className="loading-text">Loading Preview...</p>
              </div>
            )}

            <iframe
              title="Hardware Prototype"
              src="https://drive.google.com/file/d/1-YN4pQl23F1PbHCpIzFhNKSUBp-D3nVW/preview"
              className="hardware-video-frame"
              allow="autoplay; encrypted-media"
              allowFullScreen
              onLoad={() => setVideoLoading(false)}
              style={{ overflow: "hidden" }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default FigmaModal;