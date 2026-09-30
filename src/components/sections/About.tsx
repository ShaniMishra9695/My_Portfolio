import React from "react";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-heading">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>
        <div className="about-content">
          <div className="about-image">
             <div className="about-lottie-wrap">
               <dotlottie-player
                 src="https://assets-v2.lottiefiles.com/a/201beb62-1189-11ee-b914-4368693c2fcc/ufktK6dC3g.lottie"
                 background="transparent"
                 speed="1"
                 loop
                 autoplay
                 style={{ width: "100%", height: "100%" }}
               />
             </div>
          </div>
          <div className="about-text">
            <h3>My Journey</h3>
            <p>
              I’m Shani Mishra, a Software Engineer and Technology Team Lead passionate about turning ideas into reliable, scalable, and meaningful digital products.
            </p>
            <p>
              I work across the full software development lifecycle — from understanding business requirements and designing technical approaches to developing, deploying, and continuously improving production-ready applications.
            </p>
            <p>
              My experience spans full-stack web development, mobile applications, backend engineering, cloud deployment, APIs, database-driven systems, and modern frontend experiences. I have contributed to Gharwale.com and developed InhouseCaller, a React Native application for real-estate telecalling operations.
            </p>
            <div className="about-details">
              <div className="detail-row">
                <div className="detail-item">
                  <span className="detail-icon"><i className="fas fa-code"></i></span>
                  <div className="detail-content">
                    <h4>Full Stack Development</h4>
                    <p>Building modern web and mobile applications with React, React Native, and scalable APIs</p>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-icon"><i className="fas fa-robot"></i></span>
                  <div className="detail-content">
                    <h4>AI Automation</h4>
                    <p>Turning business requirements into reliable, user-focused digital products</p>
                  </div>
                </div>
              </div>
              <div className="detail-row">
                <div className="detail-item">
                  <span className="detail-icon"><i className="fas fa-database"></i></span>
                  <div className="detail-content">
                    <h4>Cloud & Backend</h4>
                    <p>Building backend services, APIs, database systems, and cloud deployments</p>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-icon"><i className="fas fa-industry"></i></span>
                  <div className="detail-content">
                    <h4>Enterprise Operations</h4>
                    <p>Coordinating designers, developers, stakeholders, and technical delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
