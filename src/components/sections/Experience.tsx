"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Data with a "keyBullets" field (top 2) and "moreBullets" (the rest)
const JOBS = [
  {
    id: "gharwale",
    icon: "🚀",
    logo: "/assets/logos/app_logo.png",
    logoAlt: "Gharwale.com",
    title: "Junior Software Engineer & Team Lead",
    company: "Gharwale.com",
    duration: "July 2025 — Present",
    location: "Virar, Maharashtra, India",
    links: [
      { text: "Live Website", url: "https://gharwale.in" }
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
    id: "qilo",
    icon: "💻",
    logo: "/assets/logos/trailer_parts.png",
    logoAlt: "QILO Digital Services",
    title: "Junior Software Engineer Intern",
    company: "QILO Digital Services",
    duration: "Jan 2025 – June 2025",
    location: "Remote",
    keyBullets: [
      "Contributed across web development, Shopify app enhancements, and user interface design and implementation.",
      "Implemented CI/CD pipelines using Docker to streamline production deployments.",
    ],
    moreBullets: [
      "Utilized Shopify Web Pixels to track customer events for analytics.",
      "Incorporated Liquid templating in Shopify themes to create dynamic content.",
      "Collaborated with designers and developers to translate business requirements into responsive, user-friendly web interfaces.",
      "Enhanced Shopify applications and storefront functionality by troubleshooting issues, refining existing features, and improving usability.",
      "Used version control and deployment workflows to coordinate code changes and support reliable releases across environments.",
    ],
    tags: ["Web Development", "Shopify", "Shopify Web Pixels", "Liquid", "Docker", "CI/CD", "UI Design"],
  },
  {
    id: "cloud-counselage",
    icon: "🤖",
    logo: "/assets/logos/restaurant.png",
    logoAlt: "Cloud Counselage Pvt. Ltd.",
    title: "React Developer Intern",
    company: "Cloud Counselage Pvt. Ltd.",
    duration: "June 2024 – Jan 2025",
    location: "Remote",
    keyBullets: [
      "Developed a LinkedIn-inspired social networking application using React, with user authentication, profile creation, and real-time post features.",
      "Integrated Firebase for database management, user authentication, and secure cloud storage.",
    ],
    moreBullets: [
      "Built reusable React components and structured the application into maintainable modules for profiles, posts, feeds, and user interactions.",
      "Implemented responsive interfaces and managed application state to provide a consistent experience across desktop and mobile screen sizes.",
      "Configured Firebase services and security rules to support reliable real-time data access and protected user-generated content.",
      "Tested, debugged, and refined key user flows including sign-up, login, profile updates, post creation, and feed updates.",
    ],
    tags: ["React", "JavaScript", "Firebase", "Authentication", "Cloud Storage", "Real-time Database", "Responsive UI"],
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
