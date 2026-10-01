"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: "inhousecaller",
    category: "sde",
    title: "InhouseCaller — CRM & Telecalling Platform",
    description: "Live internal production CRM and telecalling platform for Gharwale.com, used by 80+ users to manage 300,000+ leads and 400,000+ operational records. Includes lead and campaign management, round-robin assignment, calling workflows, follow-ups, role-based access, location tracking, notifications, WhatsApp activity monitoring, and a React Native telecaller app.",
    tags: ["Django", "DRF", "React Native", "Expo", "PostgreSQL", "Celery", "Twilio", "AWS S3", "Docker", "CI/CD"],
    links: [],
    status: "live-internal",
    icon: "fas fa-users-cog",
  },
  {
    id: "gharwale-mobile",
    category: "sde",
    title: "Gharwale.com Mobile App",
    description: "Live cross-platform real-estate mobile application built with React Native and Expo. Provides authentication, protected sessions, location-based property discovery, detailed property listings, reusable APIs and hooks, and production deployment through Expo Application Services and the Google Play Store.",
    tags: ["React Native", "Expo", "JavaScript", "JWT", "Node.js", "Express.js", "MongoDB", "AsyncStorage"],
    links: [
      { text: "Google Play Store", url: "https://play.google.com/store/apps/details?id=com.gharwale.mobile&pcampaignid=web_share" }
    ],
    icon: "fas fa-house-user",
  },
  {
    id: "linkedin-clone",
    category: "sde",
    title: "LinkedIn Clone",
    description: "LinkedIn-inspired social networking application developed during an internship at Cloud Counselage Pvt. Ltd. Features user authentication, profile creation, real-time posts, responsive UI, state management, and Firebase-powered database, authentication, and cloud storage services.",
    tags: ["React.js", "Firebase", "Authentication", "Cloud Storage", "Real-time Database", "Responsive UI"],
    links: [
      { text: "GitHub", url: "https://github.com/ShaniMishra9695/LinkdIn-clone" }
    ],
    status: "live-production",
    icon: "fab fa-linkedin",
  },
  {
    id: "truespace-realty-crm",
    category: "sde",
    title: "TrueSpace Realty CRM",
    description: "Full-stack real-estate sales and customer relationship management platform for managing property projects, channel partners, customer leads, site visits, inquiries, bookings, call history, and sales-team operations. Includes role-based access, multi-project workflows, dashboards, exports, privacy controls, and mobile notifications.",
    tags: ["React Native", "Expo", "Django", "DRF", "PostgreSQL", "AWS S3", "Excel Import/Export", "Expo Notifications", "Dokku"],
    links: [
      { text: "GitHub", url: "https://github.com/ShaniMishra9695/Happy-Homes" }
    ],
    status: "live-internal",
    icon: "fas fa-building",
  },
  {
    id: "mekk",
    category: "dsml",
    title: "Mekk — Exploration Robot",
    description: "Autonomous AI exploration robot on a custom 3D chassis. Features YOLOv8n tracking, ultrasonic sensor fusion, and local speech controls via Whisper.",
    tags: ["Raspberry Pi", "YOLOv8", "Whisper", "OpenCV"],
    links: [
      { text: "Senior Design Site", url: "https://seniord.cs.iastate.edu/2025-Dec-01/" },
      { text: "GitHub", url: "https://github.com/koushik1133/Mekk-The-Robot" }
    ],
    icon: "fas fa-robot",
  },
  {
    id: "mangal-murti",
    category: "sde",
    title: "Mangal Murti Construction",
    description: "Real-estate construction company landing page designed to present residential projects, highlight amenities, build customer trust, and guide prospective buyers toward property inquiries and site visits.",
    tags: ["Real Estate", "Landing Page", "Responsive UI", "SEO", "Web Development"],
    links: [
      { text: "Live Website", url: "https://mangalmurticonstruction.com/" },
      { text: "GitHub", url: "https://github.com/ShaniMishra9695/Mangal_Murti" }
    ],
    icon: "fas fa-city",
  },
  {
    id: "urs-villas",
    category: "sde",
    title: "URS Villas",
    description: "Real-estate landing page for URS Villas, presenting the property offering with a polished, responsive interface designed to help prospective buyers explore the project and get in touch.",
    tags: ["Real Estate", "Landing Page", "Responsive UI", "Web Development"],
    links: [
      { text: "Live Website", url: "https://ursvillas.com/" },
      { text: "GitHub", url: "https://github.com/ShaniMishra9695/URS-VILLA" }
    ],
    icon: "fas fa-vihara",
  },
  {
    id: "digital-bombay",
    category: "sde",
    title: "The Digital Bombay",
    description: "Modern digital services website for The Digital Bombay, covering digital marketing, web design and development, multimedia graphics design, and mobile app development. Services include SEO, WhatsApp and social media marketing, PPC, analytics, lead generation, static and dynamic websites, custom development, UI/UX, branding, commercial videos, Android and iOS apps, maintenance, and QA.",
    tags: ["Digital Marketing", "SEO", "PPC", "Social Media", "Web Development", "UI/UX", "Graphic Design", "Mobile Apps", "Analytics"],
    links: [
      { text: "Live Website", url: "https://thedigitalbombay.com/" }
    ],
    icon: "fas fa-globe",
  },
  {
    id: "openclaw",
    category: "dsml",
    title: "OpenClaw Command Center",
    description: "Privacy-first local AI command center on personal hardware. Integrates Slack/Telegram bots, Firecrawl web search, and LanceDB semantic memory.",
    tags: ["Ollama", "Slack/Telegram", "LanceDB", "Tmux"],
    links: [
      { text: "GitHub", url: "https://github.com/koushik1133/open-claw-agent" }
    ],
    icon: "fas fa-terminal",
  },
  {
    id: "nexusos",
    category: "dsml",
    title: "NexusOS — Context Agent",
    description: "Proactive cross-device AI OS maintaining context across wearables, mobile, desktop, and vehicles (OBD-II diagnostics) via a unified memory layer.",
    tags: ["Multi-Agent", "Memory", "Voice AI", "IoT"],
    links: [],
    icon: "fas fa-mobile-alt",
  },
  {
    id: "doctor",
    category: "dsml",
    title: "Doctor Agent — Medical Triage",
    description: "AI patient triage assistant: answers inquiries, runs RAG context checks against medical history, performs voice intake, and handles urgent physician escalations.",
    tags: ["Next.js 15", "Groq", "Whisper", "RAG"],
    links: [
      { text: "Live App", url: "https://doctor-agent-pearl.vercel.app" },
      { text: "GitHub", url: "https://github.com/koushik1133/doctor-agent" }
    ],
    icon: "fas fa-user-md",
  },
  {
    id: "gmail",
    category: "dsml",
    title: "AI Gmail Assistant",
    description: "Automated Gmail agent that routes emails, generates summaries, and handles auto-labeling via multi-step agentic pipelines and workspace automation.",
    tags: ["n8n", "Gmail API", "AI Studio"],
    links: [
      { text: "Demo Link", url: "https://www.linkedin.com/posts/koushik-shaganti_ai-n8n-automation-activity-7371983640450441219-iiW-" }
    ],
    icon: "fas fa-envelope-open-text",
  },
  {
    id: "clothe-store",
    category: "sde",
    title: "ClotheStore — Virtual Try-On Platform",
    description: "College project web application developed for a client, enabling users to select and upload clothing images and preview how the clothing fits on their body in real time, similar to a virtual try-on experience.",
    tags: ["React", "Python", "MongoDB", "AWS S3", "Virtual Try-On", "Image Upload"],
    links: [
      { text: "GitHub", url: "https://github.com/ShaniMishra9695/ClotheStore" }
    ],
    icon: "fas fa-tshirt",
  },
  {
    id: "abhinandan-lodha",
    category: "sde",
    title: "Abhinandan Lodha Landing Page",
    description: "Real-estate landing page for the Abhinandan Lodha sales team, designed to showcase property offerings, communicate project details, and help prospective buyers connect with the sales team.",
    tags: ["Real Estate", "Landing Page", "Responsive UI", "Web Development"],
    links: [
      { text: "Live Website", url: "https://abhinandanlodhasalesteam.in/index.php" },
      { text: "GitHub", url: "https://github.com/ShaniMishra9695/Abhinandan_Lodha" }
    ],
    icon: "fas fa-city",
  },
  {
    id: "swastik-residency",
    category: "sde",
    title: "Swastik Residency",
    description: "Real-estate website for Swastik Residency, designed to showcase the residential project, present key property information, and help prospective buyers connect with the sales team.",
    tags: ["Real Estate", "Landing Page", "Responsive UI", "Web Development"],
    links: [
      { text: "Live Website", url: "https://swastikresidency.com/" },
      { text: "GitHub", url: "https://github.com/ShaniMishra9695/Swastik_Residency" }
    ],
    icon: "fas fa-building",
  },
  {
    id: "cybersecurity",
    category: "dsml",
    title: "Malicious URL Detection",
    description: "End-to-end MLOps pipeline on AWS using XGBoost. Automates data ingestion, hyperparameter tracking via MLFlow, containerization, and FastAPI inference.",
    tags: ["XGBoost", "MLFlow", "Docker", "AWS"],
    links: [],
    icon: "fas fa-shield-halved",
  },
  {
    id: "nldb",
    category: "dsml",
    title: "NL-to-Database Agent",
    description: "AI agent using Google Gemini to convert English instructions into SQL queries. Responsive frontend and FastAPI backend for real-time execution.",
    tags: ["Gemini AI", "FastAPI", "SQL"],
    links: [],
    icon: "fas fa-database",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Touch-swipe tracking for scroll container
  const touchStartX = useRef<number | null>(null);

  const filteredProjects = PROJECTS.filter(
    (p) => filter === "all" || p.category === filter
  );

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      // Use card width so we scroll exactly one card on mobile
      const cardWidth =
        scrollRef.current.querySelector<HTMLElement>(".project-card")
          ?.offsetWidth ?? 360;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      className="projects section horizontal-scroll-enabled"
      id="projects"
    >
      <div className="container">
        <div className="section-heading">
          <h2>My Projects</h2>
          <div className="underline" />
        </div>

        {/* Filter buttons */}
        <div className="project-filters" role="group" aria-label="Filter projects">
          {[
            { key: "all", label: "All Projects" },
            { key: "sde", label: "Full-Stack / Web" },
            { key: "dsml", label: "AI & Data" },
          ].map(({ key, label }) => (
            <button
              key={key}
              className={`filter-button ${filter === key ? "active" : ""}`}
              onClick={() => setFilter(key)}
              aria-pressed={filter === key}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Scroll arrows */}
        <div className="scroll-arrow-container" aria-hidden="true">
          <button
            className="scroll-arrow prev-arrow"
            aria-label="Scroll projects left"
            onClick={() => scroll("left")}
          >
            <i className="fas fa-chevron-left" aria-hidden="true" />
          </button>
          <button
            className="scroll-arrow next-arrow"
            aria-label="Scroll projects right"
            onClick={() => scroll("right")}
          >
            <i className="fas fa-chevron-right" aria-hidden="true" />
          </button>
        </div>

        {/* Scrollable card rail */}
        <div
          className="horizontal-scroll-wrapper"
          ref={scrollRef}
        >
          <div className="scroll-content projects-grid">
            {filteredProjects.map((project) => {
              return (
                <motion.div
                  className="project-card"
                  data-category={project.category}
                  key={project.id}
                  whileHover={{ y: -8, scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  {/* Icon banner */}
                  <div
                    className="project-image"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "160px",
                      background: "var(--bg-color-alt)",
                      color: "var(--text-color)",
                      fontSize: "2.8rem",
                    }}
                  >
                    <i className={project.icon} aria-hidden="true" />
                  </div>

                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech-stack">
                      {project.tags.map((tag) => (
                        <span className="tech-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="project-links" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      {project.links && project.links.length > 0 ? (
                        project.links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link hover-target"
                            aria-label={`${link.text} — ${project.title}`}
                          >
                            <i
                              className={link.text.toLowerCase().includes('github') ? 'fab fa-github' : 'fas fa-external-link-alt'}
                              aria-hidden="true"
                            />{" "}
                            {link.text}
                          </a>
                        ))
                      ) : (
                        <span
                          className="project-link project-link--disabled"
                          aria-label={project.status === "live-internal" ? "Live internal production app" : project.status === "live-production" ? "Live production project" : "Coming soon"}
                        >
                          <i className={project.status === "live-internal" || project.status === "live-production" ? "fas fa-circle" : "fas fa-clock"} aria-hidden="true" />{" "}
                          {project.status === "live-internal" ? "Live Internal Production" : project.status === "live-production" ? "Live Production" : "Coming Soon"}
                        </span>
                      )}
                      {project.links && project.links.length > 0 && project.status === "live-internal" && (
                        <span
                          className="project-link project-link--disabled"
                          aria-label="Live internal production app"
                        >
                          <i className="fas fa-circle" aria-hidden="true" /> Live Internal Production
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
