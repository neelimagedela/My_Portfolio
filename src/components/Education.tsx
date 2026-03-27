import React from 'react';
import { motion } from 'framer-motion';
import educationBG from '../assets/jj.jpg';

const Education: React.FC = () => {
  const eduData = [
    {
      degree: "B. Tech in Computer Science and Engineering (Artificial Intelligence & Machine Learning)",
      duration: "2023 – 2027",
      location: "Gayatri Vidya Parishad College of Engineering for Women",
      score: "CGPA: 8.42",
      details: "Focused on Machine Learning, Deep Learning, Data Structures, Database Systems, Computer Networks, Cloud Technologies, and Web Development.",
      skills: ["Machine Learning", "Deep Learning", "Data Structures", "Database Systems", "Computer Networks", "Cloud Technologies", "Web Development"],
      color: "#ec4899"
    },
    {
      degree: "Intermediate (MPC)",
      duration: "2021 – 2023",
      location: "Narayana Junior College",
      score: "Grade: A",
      details: "Mastered core engineering basics with a focus on logical reasoning and physics.",
      skills: ["Mathematics", "Physics", "Chemistry", "Problem Solving"],
      color: "#a855f7"
    },
    {
      degree: "Secondary School (SSC)",
      duration: "2020 – 2021",
      location: "Zilla Parishad High School",
      score: "Excellent",
      details: "Strong academic foundation with leadership in school science exhibitions.",
      skills: ["General Science", "Analytical Thinking", "Communication"],
      color: "#3b82f6"
    }
  ];

  return (
    <section
      id="education"
      style={{
        padding: '120px 8%',
        minHeight: '100vh',
        color: 'white',
        backgroundImage: `
          linear-gradient(rgba(2,6,23,0.65), rgba(2,6,23,0.85)),
          url(${educationBG})
        `, // ✅ brightness slightly increased
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900 }}>
          Education <span style={{ color: '#c084fc' }}>Timeline</span>
        </h2>
        <p style={{ color: '#e5e7eb', fontSize: '1.1rem' }}>
          My learning path and technical milestones.
        </p>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        {/* Vertical Line */}
        <div
          style={{
            position: 'absolute',
            left: '20px',
            top: '10px',
            bottom: '10px',
            width: '4px',
            background: 'linear-gradient(to bottom, #ec4899, #a855f7, #3b82f6)',
            opacity: 1
          }}
        />

        {eduData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            style={{
              display: 'flex',
              gap: '30px',
              marginBottom: '80px',
              position: 'relative',
              paddingLeft: '55px'
            }}
          >
            {/* Timeline Dot */}
            <div
              style={{
                position: 'absolute',
                left: '9px',
                top: '20px',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: edu.color,
                boxShadow: `0 0 30px ${edu.color}`,
                zIndex: 2
              }}
            />

            {/* Main Card */}
            <div
              style={{
                background: `linear-gradient(
                  145deg,
                  rgba(255,255,255,0.18),
                  rgba(255,255,255,0.08)
                )`,
                backdropFilter: 'blur(14px)',
                borderRadius: '28px',
                border: `1px solid ${edu.color}`,
                padding: '46px',
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '40px',
                boxShadow: `
                  0 0 55px ${edu.color}55,
                  0 30px 70px rgba(0,0,0,0.65)
                `
              }}
            >
              {/* Info */}
              <div style={{ flex: '1 1 350px' }}>
                <span
                  style={{
                    color: edu.color,
                    fontWeight: 900,
                    fontSize: '0.8rem',
                    letterSpacing: '2px'
                  }}
                >
                  {edu.duration}
                </span>

                <h3
                  style={{
                    fontSize: '2rem',
                    margin: '12px 0',
                    background: `linear-gradient(90deg, ${edu.color}, #ffffff)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {edu.degree}
                </h3>

                <p style={{ color: '#f8fafc', fontWeight: 600 }}>
                  {edu.location}
                </p>

                <div
                  style={{
                    marginTop: '14px',
                    color: edu.color,
                    fontWeight: 900,
                    fontSize: '1.05rem'
                  }}
                >
                  {edu.score}
                </div>

                <p style={{ marginTop: '18px', color: '#e5e7eb', lineHeight: 1.8 }}>
                  {edu.details}
                </p>
              </div>

              {/* Skills */}
              <div
                style={{
                  flex: '1 1 250px',
                  background: 'rgba(255,255,255,0.14)',
                  borderRadius: '22px',
                  padding: '32px',
                  border: `1px solid ${edu.color}`
                }}
              >
                <h5
                  style={{
                    fontSize: '0.75rem',
                    color: '#e5e7eb',
                    marginBottom: '18px',
                    letterSpacing: '2px'
                  }}
                >
                  KEY SKILLS
                </h5>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '9px 20px',
                        background: `linear-gradient(
                          135deg,
                          ${edu.color}55,
                          rgba(255,255,255,0.2)
                        )`,
                        borderRadius: '999px',
                        fontSize: '0.95rem',
                        color: '#ffffff',
                        border: `1px solid ${edu.color}`,
                        boxShadow: `0 0 14px ${edu.color}66`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;