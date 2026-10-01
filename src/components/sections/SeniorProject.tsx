"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SeniorProject() {
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
            <img 
              src="/assets/logos/app_logo.png" 
              alt="InhouseCaller CRM and telecalling platform" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
