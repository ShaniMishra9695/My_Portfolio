"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const GHARWALE_APP_IMAGES = [
  "/images/dash.jpeg",
  "/images/home.jpeg",
  "/images/home2.jpeg",
  "/images/home3.jpeg",
  "/images/prop.jpeg",
  "/images/calc.jpeg",
  "/images/ac.jpeg",
];

export default function NexusShowcase() {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveCard((current) => (current + 1) % GHARWALE_APP_IMAGES.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="senior-project-section" style={{ paddingTop: 0, paddingBottom: "2rem" }}>
      <div className="container">
        <motion.div 
          className="senior-project-wrapper reverse"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="senior-project-image-box">
            <div className="inhousecaller-card-stack" aria-label="Gharwale.com app screenshots">
              {GHARWALE_APP_IMAGES.map((image, index) => {
                const position = (index - activeCard + GHARWALE_APP_IMAGES.length) % GHARWALE_APP_IMAGES.length;
                const isActive = position === 0;

                return (
                  <motion.img
                    key={image}
                    src={image}
                    alt={`Gharwale.com app screen ${index + 1}`}
                    className="inhousecaller-card"
                    animate={{
                      x: position === 0 ? 0 : position * 16,
                      y: position === 0 ? 0 : position * 21,
                      scale: 1 - position * 0.055,
                      rotate: position === 0 ? 0 : position % 2 === 0 ? -1.5 : 1.5,
                      opacity: position > 3 ? 0 : 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: isActive ? 170 : 125,
                      damping: 18,
                      mass: 0.8,
                    }}
                    style={{ zIndex: GHARWALE_APP_IMAGES.length - position }}
                  />
                );
              })}
            </div>
          </div>

          <div className="senior-project-content">
            <h2 className="senior-project-label">Featured Gharwale Project</h2>
            <h3 className="senior-project-title">Gharwale.com Application</h3>
            <p className="senior-project-desc">
              A live cross-platform real-estate application that helps property buyers, owners, and agents discover and manage listings. The app includes secure authentication, location-based property discovery, detailed property information, reusable APIs, and production deployment through the Google Play Store.
            </p>
            <div className="featured-tags">
              <span className="tag">React Native</span>
              <span className="tag">Expo</span>
              <span className="tag">JWT</span>
              <span className="tag">Node.js</span>
              <span className="tag">MongoDB</span>
            </div>
            
            <Link href="/projects" className="btn btn-primary mt-4">
              Explore Technical Details <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
