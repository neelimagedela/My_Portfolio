import React from 'react';
import { motion } from 'framer-motion';
import techBG from '../assets/cv.jpg';

const TechStack: React.FC = () => {

  const categories = [
    {
      title: "Programming",
      color: "#8b5cf6",
      skills: [
        { name: "C Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
      ]
    },
    {
      title: "Web Development",
      color: "#06b6d4",
      skills: [
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
      ]
    },
    {
      title: "Databases",
      color: "#f59e0b",
      skills: [
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
      ]
    },
    {
      title: "Tools",
      color: "#10b981",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Google Colab", icon: "https://www.vectorlogo.zone/logos/google_colab/google_colab-icon.svg" }
      ]
    }
  ];

  return (
    <section
      id="techstack"
      style={{
        padding: '110px 6%',
        backgroundImage: `
          linear-gradient(rgba(2,6,23,0.5), rgba(2,6,23,0.75)),
          url(${techBG})
        `, // ✅ brightness increased (overlay reduced more)
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        color: 'white'
      }}
    >

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '70px' }}>
        <h2 style={{
          fontSize: 'clamp(2.5rem,5vw,3.8rem)',
          fontWeight: 900,
          color: 'white',
          textShadow: '0 0 25px rgba(236,72,153,0.5)'
        }}>
          Tech <span style={{ color: '#ec4899' }}>Stack</span>
        </h2>
      </div>

      {/* Horizontal Sections */}
      {categories.map((cat, index) => (
        <div key={index} style={{ marginBottom: '50px' }}>

          <h3 style={{
            marginBottom: '18px',
            color: cat.color,
            fontSize: '1.4rem',
            letterSpacing: '1px'
          }}>
            {cat.title}
          </h3>

          <div style={{
            display: 'flex',
            gap: '20px',
            overflowX: 'auto',
            paddingBottom: '10px'
          }}>

            {cat.skills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, y: -8 }}
                style={{
                  minWidth: '150px',
                  height: '150px',
                  borderRadius: '22px',
                  background: 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(14px)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  border: `1px solid ${cat.color}`,
                  boxShadow: `0 0 20px ${cat.color}55`
                }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  style={{
                    width: '45px',
                    marginBottom: '12px',
                    filter: `drop-shadow(0 0 8px ${cat.color})`
                  }}
                />

                <span style={{
                  fontSize: '0.9rem',
                  fontWeight: 600
                }}>
                  {skill.name}
                </span>

              </motion.div>
            ))}

          </div>
        </div>
      ))}

    </section>
  );
};

export default TechStack;