import React, { useState } from 'react';
import { motion } from 'framer-motion';
import certBG from '../assets/ff.jpg';

const Internships: React.FC = () => {

  const certs = [
    {
      id: 1,
      title: 'Python Full Stack Developer',
      issuer: 'EduSkills',
      year: '2025',
      skills: ['Python', 'Django', 'PostgreSQL'],
      color: '#3776AB',
      icon: '🐍',
      description: 'Developed full-stack applications using Python, Django, and PostgreSQL.'
    },
    {
      id: 2,
      title: 'AI & ML Virtual Intern',
      issuer: 'EduSkills',
      year: '2025',
      skills: ['TensorFlow', 'Scikit-Learn', 'Pandas'],
      color: '#8B5CF6',
      icon: '🧠',
      description: 'Built ML models and performed preprocessing and evaluation.'
    },
    {
      id: 3,
      title: 'Cloud Virtual Intern',
      issuer: 'EduSkills',
      year: '2025',
      skills: ['AWS', 'Azure', 'Cloud Architecture'],
      color: '#0EA5E9',
      icon: '☁️',
      description: 'Worked on cloud deployment and services.'
    },
    {
      id: 4,
      title: 'Cybersecurity Intern',
      issuer: 'Cisco Networking Academy',
      year: '2025',
      skills: ['Network Security', 'Packet Tracer'],
      color: '#22C55E',
      icon: '🛡️',
      description: 'Learned security fundamentals and simulations.'
    },
    {
      id: 5,
      title: 'Prompt Engineering',
      issuer: 'Vault of Codes',
      year: '2025',
      skills: ['LLMs', 'Prompt Design', 'GenAI'],
      color: '#EC4899',
      icon: '✍️',
      description: 'Designed prompts and explored GenAI.'
    },
    {
      id: 6,
      title: 'SQL & Database Management Intern',
      issuer: 'EduSkills',
      year: '2025',
      skills: ['SQL Queries', 'Database Design', 'RDBMS'],
      color: '#f59e0b',
      icon: '🗄️',
      description: 'Practiced SQL queries, database design, and relational database management.'
    },
  ];

  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="internships"
      style={{
        padding: '120px 5%',
        backgroundImage: `
          linear-gradient(rgba(2,6,23,0.68), rgba(2,6,23,0.88)),
          url(${certBG})
        `,
        backgroundSize: 'cover',
        textAlign: 'center'
      }}
    >

      {/* Header */}
      <div style={{ marginBottom: '70px' }}>

        <h4 style={{ 
          fontSize: 'clamp(2rem, 5vw, 3.2rem)',
          fontWeight: 900,
          letterSpacing: '6px',
          marginBottom: '10px',
          background: 'linear-gradient(90deg, #38bdf8, #8b5cf6, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 25px rgba(139,92,246,0.6)'
        }}>
          EXPERIENCE
        </h4>

        <h2 style={{
          fontSize: '3rem',
          fontWeight: 900,
          color: 'white'
        }}>
          Internship Spotlight
        </h2>
      </div>

      {/* Cards */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap'
      }}>

        {certs.map((cert, index) => {

          const isActive = index === active;

          return (
            <motion.div
              key={cert.id}
              onClick={() => setActive(isActive ? null : index)}
              whileHover={{ scale: 1.08, y: -8 }} // ✅ hover highlight
              animate={{
                scale: isActive ? 1.18 : 1
              }}
              transition={{ duration: 0.4 }}
              style={{
                cursor: 'pointer',
                width: '280px',
                position: 'relative',
                overflow: 'hidden',

                background: 'rgba(255,255,255,0.12)', // ✅ brighter card
                backdropFilter: 'blur(16px)',
                borderRadius: '20px',
                padding: '20px',

                border: `2px solid ${cert.color}`, // ✅ stronger border

                boxShadow: isActive
                  ? `0 0 60px ${cert.color}` // ✅ strong glow active
                  : `0 0 25px ${cert.color}88`, // ✅ glow even inactive

                opacity: 1, // ✅ fully visible
                transform: isActive ? 'translateY(-10px)' : 'translateY(0)',

                zIndex: isActive ? 10 : 1
              }}
            >

              {/* SHINE EFFECT */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: '-60%',
                width: '40%',
                height: '100%',
                background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.5), transparent)',
                transform: 'skewX(-25deg)',
                animation: 'shine 4s infinite'
              }} />

              <div style={{ fontSize: '2.5rem' }}>
                {cert.icon}
              </div>

              <h3 style={{ color: 'white', marginTop: '10px' }}>
                {cert.title}
              </h3>

              <p style={{ color: cert.color, fontSize: '0.8rem' }}>
                {cert.issuer} • {cert.year}
              </p>

              {isActive && (
                <>
                  <p style={{
                    color: '#e5e7eb',
                    marginTop: '10px',
                    fontSize: '0.85rem'
                  }}>
                    {cert.description}
                  </p>

                  <div style={{
                    marginTop: '10px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    justifyContent: 'center'
                  }}>
                    {cert.skills.map((skill, i) => (
                      <span key={i} style={{
                        padding: '4px 10px',
                        borderRadius: '10px',
                        background: 'rgba(255,255,255,0.18)', // ✅ brighter tags
                        border: `1px solid ${cert.color}`,
                        color: 'white',
                        fontSize: '0.7rem'
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </>
              )}

            </motion.div>
          );
        })}

      </div>

      <style>{`
        @keyframes shine {
          0% { left: -60%; }
          100% { left: 120%; }
        }
      `}</style>

    </section>
  );
};

export default Internships;