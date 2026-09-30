"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Data with a "keyBullets" field (top 2) and "moreBullets" (the rest)
const JOBS = [
  {
    id: "gharwale",
    icon: "🚀",
    logo: "/assets/logos/lane.png",
    logoAlt: "Gharwale.com",
    title: "Junior Software Engineer & Team Lead",
    company: "Gharwale.com",
    duration: "July 2025 — Present",
    location: "Virar, Maharashtra, India",
    links: [
      { text: "Live Website", url: "https://gharwale.com" }
    ],
    keyBullets: [
      "Develop modern React-based web applications and responsive user interfaces for real-world business requirements.",
      "Build and maintain Python-based backend services, APIs, authentication, business logic, and integrations.",
    ],
    moreBullets: [
      "Develop cross-platform mobile applications using React Native, including real-estate telecalling workflows.",
      "Manage databases, deployment workflows, cloud infrastructure, and AWS S3-based application assets.",
      "Contribute to product architecture and technical decision-making across web and mobile products.",
      "Coordinate with UI/UX designers, frontend developers, backend developers, and other stakeholders.",
      "Debug production issues and translate business requirements into practical technical solutions.",
    ],
    tags: ["React", "React Native", "Python", "APIs", "AWS S3", "Databases", "Team Leadership"],
  },
  {
    id: "trailer",
    icon: "💻",
    logo: "/assets/logos/trailer_parts.png",
    logoAlt: "Trailer Parts Experts",
    title: "Software Engineer — Client Project",
    company: "Trailer Parts Experts",
    duration: "Oct 2025 — Dec 2025",
    location: "Remote",
    links: [
      { text: "Live Store", url: "https://trailerpartsexperts.com" }
    ],
    keyBullets: [
      "Designed and built a fully custom Shopify e-commerce website from scratch — zero to a fully operational revenue-generating storefront.",
      "Delivered measurable business impact, contributing to a 43% increase in online sales over three months post-launch.",
    ],
    moreBullets: [
      "Developed a custom Shopify theme from the ground up using Liquid templating, HTML5, CSS3, and JavaScript.",
      "Executed a full SEO strategy covering keyword-rich product titles, meta descriptions, alt tags, and GEO-targeted content.",
      "Optimized storefront performance via image compression, lazy loading, critical CSS inlining, and script deferral.",
    ],
    tags: ["Shopify", "Liquid", "JavaScript", "HTML5/CSS3", "SEO"],
  },
  {
    id: "whatsapp",
    icon: "🤖",
    logo: "/assets/logos/restaurant.png",
    logoAlt: "Restaurant Client",
    title: "Software AI Engineer — WhatsApp Ordering System",
    company: "Restaurant Client",
    duration: "Feb 2025 — May 2025",
    location: "Hyderabad, India",
    keyBullets: [
      "Designed, built, and physically deployed an end-to-end WhatsApp-based food ordering and operations management system.",
      "Engineered automated order routing to kitchen display queues, reducing waitstaff workload by 40% and eliminating handwritten tickets.",
    ],
    moreBullets: [
      "Built the entire automation workflow using n8n integrated with Google Gemini LLM for natural language parsing and order modifications.",
      "Deployed a Gemini-powered sales analytics agent for actionable insights on top dishes, peak traffic windows, and restocking.",
    ],
    tags: ["n8n", "Gemini LLM", "WhatsApp API", "Automation"],
  },
  {
    id: "cognifyz",
    icon: "🧠",
    logo: "/assets/logos/cognifyz.png",
    logoAlt: "Cognifyz Technologies",
    title: "Full Stack Development Intern",
    company: "Cognifyz Technologies",
    duration: "May 2024 — Jul 2024",
    location: "Remote",
    keyBullets: [
      "Developed and maintained RESTful APIs using Python and Flask, implementing endpoints for data ingestion, processing, and validation.",
      "Designed and optimized database schemas for PostgreSQL and MySQL, applying indexing to improve response times.",
    ],
    moreBullets: [
      "Completed a full-stack internship contributing to the design and delivery of production-grade web applications and AI-integrated modules.",
      "Operated within a CI/CD pipeline environment where merged code automatically triggered test suites and staged deployments.",
    ],
    tags: ["Python", "Flask", "PostgreSQL", "MySQL", "JavaScript", "CI/CD"],
  },
];

function JobCard({ job }: { job: (typeof JOBS)[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, type: "spring", bounce: 0.35 }}
      viewport={{ once: true, margin: "-60px" }}
    >
      <div className="timeline-icon" aria-hidden="true">{job.icon}</div>
      <div className="timeline-content">
        <div className="timeline-header">
          <div className="company-logo">
            <Image src={job.logo} alt={job.logoAlt} width={48} height={48} />
          </div>
          <div className="company-info">
            <h3 className="job-title">{job.title}</h3>
            <h4 className="company-name">{job.company}</h4>
            <span className="job-duration">
              <i className="far fa-calendar-alt" aria-hidden="true" /> {job.duration}
            </span>
            <p className="company-location">
              <i className="fas fa-map-marker-alt" aria-hidden="true" /> {job.location}
            </p>
            {job.links && job.links.length > 0 && (
              <div className="job-links" style={{ marginTop: '0.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {job.links.map((link, idx) => (
                  <a 
                    key={idx} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.85rem', color: 'var(--primary-color)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600 }}
                  >
                    <i className={link.text.toLowerCase().includes('github') ? 'fab fa-github' : 'fas fa-external-link-alt'}></i> {link.text}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="job-description">
          <ul>
            {job.keyBullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}

            {/* Expandable extra bullets */}
            {expanded &&
              job.moreBullets.map((b, i) => (
                <motion.li
                  key={`more-${i}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.25, delay: i * 0.05 }}
                >
                  {b}
                </motion.li>
              ))}
          </ul>

          {job.moreBullets.length > 0 && (
            <button
              className="expand-bullets-btn"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
              {expanded
                ? "Show less ▲"
                : `+${job.moreBullets.length} more details ▼`}
            </button>
          )}
        </div>

        <div className="experience-tech-stack">
          <h5>Tech Stack:</h5>
          <div className="tech-tags">
            {job.tags.map((tag) => (
              <span className="tech-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="section-heading">
          <h2>Experience</h2>
          <div className="underline" />
        </div>
        <div className="experience-timeline">
          {JOBS.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}
