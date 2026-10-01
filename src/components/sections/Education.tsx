"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Education() {
  return (
    <section className="education section" id="education">
      <div className="container">
        <div className="section-heading">
          <h2>Education</h2>
          <div className="underline"></div>
        </div>
        <div className="experience-timeline">
          
          {/* Iowa State University */}
          <motion.div 
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="timeline-icon" aria-hidden="true">
               🎓
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div className="company-logo company-logo--bordered" style={{ borderColor: '#cc0000' }}>
                  <Image src="/assets/logos/viva.png" alt="ISU Logo" width={48} height={48} />
                </div>
                <div className="education-info">
                  <h3 className="degree">Master of Computer Applications (MCA)</h3>
                  <h4 className="university-name">VIVA Institute of Technology</h4>
                  <span className="duration"><i className="far fa-calendar-alt"></i> Completed</span>
                  <p className="location"><i className="fas fa-map-marker-alt"></i> Maharashtra, India</p>
                </div>
              </div>
              <div className="education-description">
                <p>
                  Completed a Master of Computer Applications with a focus on software development and practical technology solutions.
                </p>
              </div>
            </div>
          </motion.div>          {/* Narayana Junior College */}
          <motion.div 
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="timeline-icon" aria-hidden="true">
               🏫
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div className="company-logo company-logo--bordered" style={{ borderColor: '#0056b3' }}>
                  <Image src="/assets/logos/veer.png" alt="NJC Logo" width={48} height={48} />
                </div>
                <div className="education-info">
                  <h3 className="degree">Bachelor&apos;s Degree in B.Com</h3>
                  <h4 className="university-name">Veer Bahadur Singh Purvanchal University, Jaunpur</h4>
                  <span className="duration"><i className="far fa-calendar-alt"></i> Completed</span>
                  <p className="location"><i className="fas fa-map-marker-alt"></i> Uttar Pradesh, India</p>
                </div>
              </div>
              <div className="education-description">
                <p>
                  Bachelor&apos;s degree in Commerce from Purvanchal University, Jaunpur, Uttar Pradesh.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
