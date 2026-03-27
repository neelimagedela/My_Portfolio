import React from 'react';
import aboutBG from '../assets/zzz.jpg';
import sideProfile from '../assets/myphoto.jpeg';

const About: React.FC = () => {

  const interests = [
    { title: "Problem Solving", emoji: "🧩", angle: "-5deg" },
    { title: "UI Designing", emoji: "🎨", angle: "3deg" },
    { title: "AI Exploration", emoji: "🤖", angle: "-3deg" },
    { title: "Continuous Learning", emoji: "📚", angle: "4deg" }
  ];

  return (
    <section
      id="about"
      style={{
        padding: '120px 10%',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `linear-gradient(
          rgba(10,10,10,0.45),
          rgba(10,10,10,0.55)
        ), url(${aboutBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Soft Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          background: 'rgba(236, 72, 153, 0.15)',
          filter: 'blur(120px)',
          borderRadius: '50%',
          zIndex: 0
        }}
      />

      <div
        style={{
          display: 'flex',
          gap: '80px',
          alignItems: 'center',
          flexWrap: 'wrap',
          position: 'relative',
          zIndex: 5
        }}
      >
        {/* Left Content */}
        <div style={{ flex: '1 1 450px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '20px'
            }}
          >
            <div
              style={{
                width: '40px',
                height: '2px',
                background: '#ec4899'
              }}
            />
            <span
              style={{
                color: '#ec4899',
                fontWeight: 'bold',
                letterSpacing: '2px',
                fontSize: '0.9rem'
              }}
            >
              DISCOVER
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              marginBottom: '30px',
              fontWeight: 800
            }}
          >
            A Blend of Logic <br />
            & <span style={{ color: '#a855f7' }}>Imagination.</span>
          </h1>

          {/* UPDATED LINE ONLY */}
          <p
            style={{
              color: '#e5e7eb',
              fontSize: '1.15rem',
              lineHeight: 1.8,
              marginBottom: '25px'
            }}
          >
            I am a B.Tech CSE (AI & ML) student skilled in Python and SQL, focused on building efficient and scalable applications.
          </p>

          <p
            style={{
              color: '#e5e7eb',
              fontSize: '1.15rem',
              lineHeight: 1.8
            }}
          >
            Beyond my <b>8.42 CGPA</b>, I constantly explore <b>Artificial Intelligence</b> and modern <b>Web Technologies</b>.
          </p>
        </div>

        {/* Right Polaroids */}
        <div
          style={{
            flex: '1 1 400px',
            position: 'relative',
            height: '550px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {/* Main Polaroid */}
          <div
            className="polaroid"
            style={{
              width: '280px',
              background: 'white',
              padding: '15px 15px 40px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              transform: 'rotate(-4deg)',
              position: 'absolute',
              zIndex: 5
            }}
          >
            <img
              src={sideProfile}
              alt="Neelima"
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                filter: 'sepia(0.15)'
              }}
            />
            <p
              style={{
                color: '#222',
                textAlign: 'center',
                marginTop: '20px',
                fontSize: '1.2rem',
                fontWeight: 'bold'
              }}
            >
              Neelima Gedela ✨
            </p>
          </div>

          {/* Mini Polaroids */}
          {interests.map((item, idx) => (
            <div
              key={idx}
              className="polaroid-mini"
              style={{
                position: 'absolute',
                width: '140px',
                background: 'white',
                padding: '10px 10px 20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                transform: `rotate(${item.angle}) translate(${
                  idx % 2 === 0 ? '-180px' : '180px'
                }, ${idx * 60 - 100}px)`,
                transition: '0.3s'
              }}
            >
              <div
                style={{
                  height: '100px',
                  background: '#f0f0f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem'
                }}
              >
                {item.emoji}
              </div>
              <p
                style={{
                  color: '#333',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: '10px'
                }}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .polaroid-mini:hover {
          transform: scale(1.1) rotate(0deg) !important;
          z-index: 10;
          cursor: pointer;
        }

        .polaroid:hover {
          transform: rotate(0deg) scale(1.03) !important;
          transition: 0.4s;
        }
      `}</style>
    </section>
  );
};

export default About;