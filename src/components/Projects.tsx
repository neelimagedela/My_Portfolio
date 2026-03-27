import React, { useState } from 'react';
import { motion } from 'framer-motion';
import projectBG from '../assets/oo.jpg';

const Projects: React.FC = () => {

  const projects = [
    {
      title: "Customer Churn Prediction",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      description: "End-to-end Machine Learning project that loads and analyzes the Telco Customer Churn dataset to predict user retention.",
      tags: ["Python", "Streamlit", "ML", "Pandas"],
      features: [
        "Analyzes Telco Customer Churn dataset",
        "Interactive Streamlit front-end",
        "Predictive modeling for user retention"
      ],
      color: "#ec4899"
    },
    {
      title: "AI-Driven Volume Adjustment",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop",
      description: "AI system adjusting volume based on environmental noise.",
      tags: ["Python", "AI", "ML", "Flask"],
      features: [
        "Noise detection",
        "Flask backend",
        "Dynamic control"
      ],
      color: "#38bdf8"
    },
    {
      title: "Spam Email Detection",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
      description: "Naive Bayes spam classifier using NLP.",
      tags: ["Python", "Naive Bayes", "ML", "NLP"],
      features: [
        "Spam classification",
        "Preprocessing",
        "High accuracy"
      ],
      color: "#a855f7"
    },
    {
      title: "Mock Interview Bot",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
      description: "Interactive NLP-based interview bot.",
      tags: ["Python", "Streamlit", "NLP"],
      features: [
        "Interview simulation",
        "Text similarity scoring",
        "Feedback system"
      ],
      color: "#f59e0b"
    },
    {
      title: "Personal Portfolio Website",
      status: "Live",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
      description: "Responsive portfolio showcasing projects.",
      tags: ["React", "JavaScript", "HTML", "CSS"],
      features: [
        "Modern UI",
        "Responsive design",
        "Showcase"
      ],
      color: "#22c55e"
    }
  ];

  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="projects"
      style={{
        padding: '120px 5%',
        backgroundImage: `
          linear-gradient(rgba(2,6,23,0.65), rgba(2,6,23,0.85)),
          url(${projectBG})
        `,
        backgroundSize: 'cover',
        color: 'white'
      }}
    >

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '70px' }}>
        <h1 style={{
          fontSize: '3.2rem',
          fontWeight: 900,
          background: 'linear-gradient(90deg,#a855f7,#ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          My Projects
        </h1>
      </div>

      {/* Cards */}
      <div style={{
        display: 'flex',
        gap: '30px',
        overflowX: 'auto'
      }}>

        {projects.map((proj, index) => {

          const isActive = index === active;

          return (
            <motion.div
              key={index}
              onClick={() => setActive(isActive ? null : index)}
              whileHover={{ scale: 1.05, y: -6 }}
              animate={{
                scale: isActive ? 1.1 : 0.95,
                opacity: isActive ? 1 : 0.7
              }}
              transition={{ duration: 0.4 }}
              style={{
                minWidth: '320px',
                borderRadius: '22px',
                overflow: 'hidden',
                cursor: 'pointer',
                background: isActive
                  ? 'rgba(255,255,255,0.12)'
                  : 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(14px)',

                border: `1.5px solid ${proj.color}`,

                boxShadow: isActive
                  ? `0 0 60px ${proj.color}`
                  : `0 0 18px ${proj.color}55`
              }}
            >

              {/* Image */}
              <div style={{ height: '200px' }}>
                <img
                  src={proj.image}
                  alt={proj.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: '20px' }}>
                <h3 style={{
                  fontWeight: 800,
                  letterSpacing: '0.5px'
                }}>
                  {proj.title}
                </h3>

                <p style={{
                  fontSize: '0.9rem',
                  color: '#f1f5f9',   // 🔥 brighter text
                  marginTop: '6px'
                }}>
                  {proj.description}
                </p>

                {/* TAGS */}
                <div style={{
                  marginTop: '12px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px'
                }}>
                  {proj.tags.map(tag => (
                    <span key={tag} style={{
                      padding: '6px 12px',
                      borderRadius: '12px',
                      fontSize: '0.72rem',
                      background: isActive
                        ? `linear-gradient(90deg, ${proj.color}, #ffffff)`
                        : 'rgba(255,255,255,0.18)',
                      color: isActive ? '#000' : '#fff',
                      boxShadow: isActive
                        ? `0 0 14px ${proj.color}`
                        : `0 0 6px ${proj.color}44`,
                      transition: '0.3s'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Extra details */}
                {isActive && (
                  <ul style={{
                    marginTop: '14px',
                    fontSize: '0.85rem',
                    color: '#e2e8f0'
                  }}>
                    {proj.features.map((f, i) => (
                      <li key={i}>• {f}</li>
                    ))}
                  </ul>
                )}

              </div>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
};

export default Projects;