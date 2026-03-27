import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import galBG from '../assets/kn.jpg';

type Phase = 'boot' | 'intro';

const First: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('boot');
  const [progress, setProgress] = useState(0);

  const title = "ACCESS GRANTED";
  const subtitle = "WELCOME TO NEELU'S WORLD";

  // 🔥 Boot logic
  useEffect(() => {
    if (phase !== 'boot') return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase('intro'), 600);
          return 100;
        }
        return prev + 1;
      });
    }, 22);

    return () => clearInterval(interval);
  }, [phase]);

  return (
    <AnimatePresence>
      {phase && (
        <motion.section
          exit={{ opacity: 0, y: '-100%' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `
              radial-gradient(circle at center,
                rgba(0,0,0,0.25),
                rgba(0,0,0,0.9)
              ),
              url(${galBG})
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff',
            fontFamily: 'Arial, sans-serif'
          }}
        >
          <div style={{ textAlign: 'center', width: '100%' }}>

            {/* ================= BOOT SCREEN (FIXED BIG + BRIGHT) ================= */}
            {phase === 'boot' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >

                {/* 🔥 MAIN TEXT (NOW BIG + CLEAR) */}
                <p style={{
                  fontSize: 18,
                  letterSpacing: 6,
                  color: '#FFD700',
                  fontWeight: 600,
                  marginBottom: 15,
                  textShadow: '0 0 10px rgba(255,215,0,0.6)'
                }}>
                  INITIALIZING SYSTEM
                </p>

                {/* 🔥 BIG PERCENTAGE */}
                <h1 style={{
                  fontSize: '6rem',
                  fontWeight: 300,
                  margin: '10px 0',
                  color: '#ffffff',
                  textShadow: '0 0 25px rgba(255,255,255,0.25)'
                }}>
                  {progress}%
                </h1>

                {/* 🔥 BIG PROGRESS BAR */}
                <div style={{
                  width: 360,
                  height: 5,
                  background: 'rgba(255,255,255,0.2)',
                  margin: '0 auto',
                  borderRadius: 20,
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${progress}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #C5A059, #FFD700)',
                    boxShadow: '0 0 15px #C5A059'
                  }} />
                </div>

                {/* 🔥 SUB TEXT (NOW MORE VISIBLE) */}
                <p style={{
                  marginTop: 20,
                  fontSize: 14,
                  letterSpacing: 4,
                  color: '#ffffff',
                  opacity: 0.95
                }}>
                  LOADING PERSONAL PORTFOLIO EXPERIENCE
                </p>

              </motion.div>
            )}

            {/* ================= INTRO SCREEN ================= */}
            {phase === 'intro' && (
              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >

                <h1 style={{
                  fontSize: 'clamp(2.2rem,6vw,4rem)',
                  fontWeight: 600,
                  letterSpacing: 8,
                  color: '#ffffff'
                }}>
                  {title}
                </h1>

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 120 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    height: 2,
                    background: '#C5A059',
                    margin: '20px auto',
                    boxShadow: '0 0 10px #C5A059'
                  }}
                />

                <p style={{
                  fontSize: 14,
                  letterSpacing: 5,
                  color: 'rgba(255,255,255,0.9)'
                }}>
                  {subtitle}
                </p>

                {/* glowing dot */}
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: '#C5A059',
                    margin: '25px auto',
                    boxShadow: '0 0 15px #C5A059'
                  }}
                />

              </motion.div>
            )}

          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default First;