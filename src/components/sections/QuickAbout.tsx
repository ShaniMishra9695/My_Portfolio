"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function QuickAbout() {
  return (
    <section className="quick-about-section">
      <div className="container">
        <div className="quick-about-grid">
          <motion.div 
            className="quick-about-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="quick-about-heading">
              Building <span className="highlight-text">Scalable Digital Products</span> for Real-World Impact.
            </h2>
          </motion.div>
          
          <motion.div 
            className="quick-about-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="quick-about-text">
              I’m Shani Mishra, a Software Engineer and Technology Team Lead focused on building modern web applications, mobile apps, backend systems, APIs, and digital products. I transform business ideas into reliable, scalable, and user-focused software.
            </p>
            <Link href="/about" className="btn btn-outline quick-about-btn">
              Read my full story <i className="fas fa-arrow-right"></i>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
