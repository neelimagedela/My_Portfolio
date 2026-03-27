import React from 'react';
import { motion } from 'framer-motion';
import skillBG from '../assets/ccc.jpg';

const TechStack: React.FC = () => {
  const skillGroups = [
    {
      title: "Programming",
      color: "#8b5cf6",
      skills: [
        { name: "Python", level: 9 },
        { name: "SQL", level: 9 }
      ]
    },
    {
      title: "Web Development",
      color: "#06b6d4",
      skills: [
        { name: "HTML", level: 9 },
        { name: "CSS", level: 9 },
        { name: "JavaScript", level: 8 },
        { name: "React.js", level: 8 },
        { name: "Node.js", level: 7 },
        { name: "Express.js", level: 7 }
      ]
    },
    {
      title: "Machine Learning",
      color: "#ec4899",
      skills: [
        { name: "Machine Learning", level: 8 },
        { name: "Data Preprocessing", level: 8 },
        { name: "Naive Bayes", level: 7 }
      ]
    },
    {
      title: "Databases",
      color: "#f59e0b",
      skills: [
        { name: "MySQL", level: 8 },
        { name: "MongoDB", level: 7 }
      ]
    },
    {
      title: "Tools & Platforms",
      color: "#10b981",
      skills: [
        { name: "Git", level: 9 },
        { name: "GitHub", level: 9 },
        { name: "VS Code", level: 9 },
        { name: "Jupyter Notebook", level: 8 },
        { name: "Google Colab", level: 8 }
      ]
    },
    {
      title: "Core Concepts",
      color: "#6366f1",
      skills: [
        { name: "Data Structures", level: 8 },
        { name: "OOP", level: 8 },
        { name: "DBMS", level: 8 },
        { name: "Computer Networks", level: 7 }
      ]
    }
  ];

  return (
    <section
      className="skills-section"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(2, 6, 23, 0.6),
            rgba(2, 6, 23, 0.85)
          ),
          url(${skillBG})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >

      {/* Header */}
      <div className="skills-header">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills & <span>Expertise</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Technologies I use to build intelligent and scalable applications
        </motion.p>
      </div>

      {/* Cards */}
      <div className="skills-grid">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={idx}
            className="skill-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            style={{
              border: `1px solid ${group.color}`,
              boxShadow: `0 0 20px ${group.color}33`
            }}
          >
            <h3 style={{ color: group.color }}>{group.title}</h3>

            {group.skills.map((skill, i) => (
              <div key={i} className="skill">
                <div className="skill-top">
                  <span>{skill.name}</span>
                  <span>{skill.level * 10}%</span>
                </div>

                <div className="bar">
                  <motion.div
                    className="fill"
                    style={{
                      background: `linear-gradient(90deg, ${group.color}, #ffffff)`
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level * 10}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Styles */}
      <style>{`
        .skills-section {
          padding: 120px 8%;
        }

        .skills-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .skills-header h2 {
          font-size: 3.2rem;
          font-weight: 900;
          background: linear-gradient(90deg, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .skills-header p {
          color: #94a3b8;
          margin-top: 12px;
          font-size: 1rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 35px;
          max-width: 1200px;
          margin: auto;
        }

        .skill-card {
          position: relative;
          padding: 30px;
          border-radius: 20px;
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(14px);
          transition: all 0.35s ease;
          overflow: hidden;
        }

        .skill-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 0 35px var(--hover-color, #8b5cf6);
        }

        .skill-card h3 {
          margin-bottom: 20px;
          font-size: 1.4rem;
          font-weight: 700;
        }

        .skill {
          margin-bottom: 18px;
        }

        .skill-top {
          display: flex;
          justify-content: space-between;
          color: #e5e7eb;
          font-size: 0.9rem;
          margin-bottom: 6px;
        }

        .bar {
          height: 8px;
          background: rgba(255,255,255,0.08);
          border-radius: 10px;
          overflow: hidden;
        }

        .fill {
          height: 100%;
          border-radius: 10px;
          box-shadow: 0 0 8px rgba(255,255,255,0.4);
        }
      `}</style>
    </section>
  );
};

export default TechStack;