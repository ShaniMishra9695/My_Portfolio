"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const INHOUSECALLER_IMAGES = [
  "/images/1.jpeg",
  "/images/2.jpeg",
  "/images/14.jpeg",
  "/images/19.jpeg",
  "/images/21.jpeg",
];

export default function SeniorProject() {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveCard((current) => (current + 1) % INHOUSECALLER_IMAGES.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="senior-project-section">
      <div className="container">
        <motion.div 
          className="senior-project-wrapper"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="senior-project-content">
            <h2 className="senior-project-label">Featured Production Project</h2>
            <h3 className="senior-project-title">InhouseCaller — CRM &amp; Telecalling Platform</h3>
            <p className="senior-project-desc">
              I developed and maintain this live internal production platform for Gharwale.com. InhouseCaller manages 300,000+ leads and 400,000+ operational records through CRM administration, campaign allocation, telecalling workflows, follow-ups, role-based access, location tracking, notifications, WhatsApp activity monitoring, and a React Native mobile app for telecallers.
            </p>
            <div className="featured-tags">
              <span className="tag">Django</span>
              <span className="tag">Django REST Framework</span>
              <span className="tag">React Native</span>
              <span className="tag">PostgreSQL</span>
              <span className="tag">Celery</span>
              <span className="tag">AWS S3</span>
            </div>
            
            <Link href="/projects" className="btn btn-primary mt-4">
              Explore Technical Details <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          
          <div className="senior-project-image-box">
            <div className="inhousecaller-card-stack" aria-label="InhouseCaller app screenshots">
              {INHOUSECALLER_IMAGES.map((image, index) => {
                const position = (index - activeCard + INHOUSECALLER_IMAGES.length) % INHOUSECALLER_IMAGES.length;
                const isActive = position === 0;

                return (
                <motion.img
                  key={image}
                  src={image}
                  alt={`InhouseCaller app screen ${index + 1}`}
                  className="inhousecaller-card"
                  animate={{
                    x: position === 0 ? 0 : position * 9,
                    y: position === 0 ? 0 : position * 13,
                    scale: 1 - position * 0.045,
                    rotate: position === 0 ? 0 : position % 2 === 0 ? -1.5 : 1.5,
                    opacity: position > 3 ? 0 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: isActive ? 170 : 125,
                    damping: 18,
                    mass: 0.8,
                  }}
                  style={{ zIndex: INHOUSECALLER_IMAGES.length - position }}
                />
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
