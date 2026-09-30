"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RecentExperience() {
  return (
    <section className="recent-experience-section">
      <div className="container">
        <div className="section-header-row">
          <h2 className="section-title-small">Current Role</h2>
          <Link href="/experience" className="view-all-link">
            View all experience <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
        
        <motion.div 
          className="recent-exp-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="exp-timeline-dot"></div>
          <div className="exp-content-wrapper">
            <div className="exp-header">
              <div>
                <h3 className="exp-title">Junior Software Engineer &amp; Team Lead</h3>
                <p className="exp-company">Gharwale.com • Virar, Maharashtra, India</p>
              </div>
              <div className="exp-date">July 2025 — Present</div>
            </div>
            <p className="exp-description">
              Developing and deploying web and mobile applications, backend services, APIs, and database-driven systems while coordinating technical delivery across the software team.
            </p>
            <div className="featured-tags">
              <span className="tag">Full-Stack</span>
              <span className="tag">React Native</span>
              <span className="tag">Team Leadership</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
