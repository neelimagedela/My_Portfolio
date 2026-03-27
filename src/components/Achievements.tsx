import React from 'react';
import lll from '../assets/ff.jpg';

const Achievements: React.FC = () => {
  const certificates = [
    "Python Essentials 1 & 2 – Cisco Networking Academy",
    "The Joy of Computing Using Python – NPTEL",
    "Web Application Development using Node.js & MongoDB – Infosys Springboard",
    "Wadhwani: JobReady Employability Skills (Basic Level) – Dec 18, 2025"
  ];

  const activities = [
    "Built mini AI projects using Python",
    "Participated in coding challenges",
    "Developed personal React portfolio project",
    "Practiced full stack development concepts",
    "Explored Machine Learning basics"
  ];

  const cardStyle: React.CSSProperties = {
    flex: '1',
    minWidth: '300px',
    background: 'rgba(255,255,255,0.06)',
    backdropFilter: 'blur(18px)',
    borderRadius: '20px',
    padding: '30px',
    border: '1px solid rgba(255,255,255,0.15)',
    boxShadow: '0 0 25px rgba(0,0,0,0.4)',
    transition: '0.3s ease'
  };

  const itemStyle: React.CSSProperties = {
    padding: '12px 14px',
    marginBottom: '12px',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.05)',
    borderLeft: '3px solid rgba(255,255,255,0.2)',
    transition: '0.3s ease',
    color: '#e5e7eb'
  };

  return (
    <section
      id="achievements"
      style={{
        padding: '120px 10%',
        color: 'white',
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
          url(${lll})
        `, // ✅ brightness reduced here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* TITLE */}
      <h2
        style={{
          fontSize: '3.2rem',
          textAlign: 'center',
          marginBottom: '70px',
          fontWeight: '900',
          letterSpacing: '2px',
          color: '#38bdf8',
          textShadow: '0 0 10px rgba(56,189,248,0.6)'
        }}
      >
        Achievements
      </h2>

      {/* CONTAINER */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '40px'
        }}
      >
        {/* CERTIFICATES CARD */}
        <div
          style={{ ...cardStyle, border: '1px solid #38bdf8' }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow =
              '0 0 35px rgba(56,189,248,0.4)';
            (e.currentTarget as HTMLDivElement).style.transform =
              'translateY(-10px)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow =
              '0 0 25px rgba(0,0,0,0.4)';
            (e.currentTarget as HTMLDivElement).style.transform =
              'translateY(0)';
          }}
        >
          <h3
            style={{
              color: '#38bdf8',
              marginBottom: '25px',
              fontSize: '1.6rem',
              textAlign: 'center'
            }}
          >
            📜 Certificates
          </h3>

          <div>
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                style={itemStyle}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    'rgba(56,189,248,0.15)';
                  (e.currentTarget as HTMLDivElement).style.borderLeft =
                    '3px solid #38bdf8';
                  (e.currentTarget as HTMLDivElement).style.transform =
                    'translateX(6px)';
                  (e.currentTarget as HTMLDivElement).style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    'rgba(255,255,255,0.05)';
                  (e.currentTarget as HTMLDivElement).style.borderLeft =
                    '3px solid rgba(255,255,255,0.2)';
                  (e.currentTarget as HTMLDivElement).style.transform =
                    'translateX(0)';
                  (e.currentTarget as HTMLDivElement).style.color = '#e5e7eb';
                }}
              >
                <span style={{ color: '#38bdf8', fontWeight: 700 }}>✔</span>{' '}
                {cert}
              </div>
            ))}
          </div>
        </div>

        {/* ACTIVITIES CARD */}
        <div
          style={{ ...cardStyle, border: '1px solid #8b5cf6' }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow =
              '0 0 35px rgba(139,92,246,0.4)';
            (e.currentTarget as HTMLDivElement).style.transform =
              'translateY(-10px)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow =
              '0 0 25px rgba(0,0,0,0.4)';
            (e.currentTarget as HTMLDivElement).style.transform =
              'translateY(0)';
          }}
        >
          <h3
            style={{
              color: '#8b5cf6',
              marginBottom: '25px',
              fontSize: '1.6rem',
              textAlign: 'center'
            }}
          >
            ⚡ Activities
          </h3>

          <div>
            {activities.map((act, idx) => (
              <div
                key={idx}
                style={itemStyle}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    'rgba(139,92,246,0.15)';
                  (e.currentTarget as HTMLDivElement).style.borderLeft =
                    '3px solid #8b5cf6';
                  (e.currentTarget as HTMLDivElement).style.transform =
                    'translateX(6px)';
                  (e.currentTarget as HTMLDivElement).style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    'rgba(255,255,255,0.05)';
                  (e.currentTarget as HTMLDivElement).style.borderLeft =
                    '3px solid rgba(255,255,255,0.2)';
                  (e.currentTarget as HTMLDivElement).style.transform =
                    'translateX(0)';
                  (e.currentTarget as HTMLDivElement).style.color = '#e5e7eb';
                }}
              >
                <span style={{ color: '#8b5cf6', fontWeight: 700 }}>⭐</span>{' '}
                {act}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;