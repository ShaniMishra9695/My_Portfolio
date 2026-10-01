"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NexusShowcase() {
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
            <img 
              src="/assets/logos/app_logo.png" 
              alt="Gharwale.com application" 
            />
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
