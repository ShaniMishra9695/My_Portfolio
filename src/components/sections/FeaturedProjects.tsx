"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const FEATURED_PROJECTS = [
  {
    id: "gharwale-mobile",
    title: "Gharwale.com App",
    subtitle: "Live on Google Play Store",
    description: "Cross-platform real-estate mobile application for property discovery, user authentication, protected sessions, location-based search, detailed property listings, and production mobile access.",
    image: "/assets/logos/app_logo.png",
    link: "https://play.google.com/store/apps/details?id=com.gharwale.mobile&pcampaignid=web_share",
    tags: ["React Native", "Expo", "JWT", "Node.js", "Express.js", "MongoDB"]
  },
  {
    id: "gharwale-web",
    title: "Gharwale.in",
    subtitle: "Live Property Listing Platform",
    description: "Live property listing and discovery platform for searching, exploring, and purchasing real estate, built with a scalable React and Node.js backend ecosystem.",
    image: "/assets/logos/app_logo.png",
    link: "https://gharwale.in/",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "AWS", "Redis"]
  }
];

export default function FeaturedProjects() {
  return (
    <section className="featured-projects-section">
      <div className="container">
        <div className="section-header-row">
          <h2 className="section-title-small">Selected Work</h2>
          <Link href="/projects" className="view-all-link">
            View all projects <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
        
        <div className="featured-grid">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="featured-card"
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="featured-image-container">
                <img src={project.image} alt={project.title} className="featured-image" />
                <div className="featured-overlay">
                  <span className="featured-overlay-btn">Visit Site <i className="fas fa-external-link-alt"></i></span>
                </div>
              </div>
              <div className="featured-content">
                <h3 className="featured-title">{project.title}</h3>
                <p className="featured-subtitle">{project.subtitle}</p>
                <p className="featured-desc">{project.description}</p>
                <div className="featured-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
