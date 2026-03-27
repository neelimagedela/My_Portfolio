import React from 'react';
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiArrowRight,
  FiChevronDown,
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import heroBG from '../assets/lll.jpg';
import myPhoto from '../assets/myphoto.jpeg';

const Hero: React.FC = () => {
  const GithubIcon = FiGithub as any;
  const LinkedinIcon = FiLinkedin as any;
  const MailIcon = FiMail as any;
  const PhoneIcon = FiPhone as any;
  const ArrowIcon = FiArrowRight as any;
  const ScrollIcon = FiChevronDown as any;

  return (
    <section
      id="home"
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `
          linear-gradient(
            rgba(0,0,0,0.15),
            rgba(0,0,0,0.25)
          ),
          url(${heroBG})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          maxWidth: '850px',
          width: '90%',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '40px',
          padding: '60px 20px 40px 20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center',
          position: 'relative',
          boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
          zIndex: 10,
        }}
      >

        {/* Profile Image */}
        <div
          style={{
            position: 'absolute',
            top: '-75px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 15,
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              padding: '6px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #a855f7, #ec4899)',
              boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
            }}
          >
            <img
              src={myPhoto}
              alt="Neelima Gedela"
              style={{
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                objectFit: 'cover',
                background: '#1a1a1a',
                display: 'block',
              }}
            />
          </motion.div>
        </div>

        <div style={{ marginTop: '70px' }}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              color: '#eceaabf0',
              letterSpacing: '4px',
              fontSize: '0.85rem',
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}
          >
            B.Tech CSM Student • Web Developer
          </motion.span>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              margin: '15px 0',
              color: 'white',
              fontWeight: '900',
              letterSpacing: '-1px',
            }}
          >
            GEDELA <span style={{ color: '#cd26a6' }}>NEELIMA</span>
          </h1>

          <p
            style={{
              color: '#d4c160dd',
              fontSize: '1.15rem',
              maxWidth: '650px',
              margin: '0 auto 35px auto',
              lineHeight: '1.6',
            }}
          >
            Transforming complex algorithms into{' '}
            <span style={{ color: 'white', fontWeight: 'bold' }}>
              seamless user experiences
            </span>
            . Passionate about AI, Machine Learning, and Modern Web Tech.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '40px',
            }}
          >
            {/* ✅ ONLY THIS BUTTON UPDATED */}
            <motion.button
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth"
                });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '14px 35px',
                borderRadius: '50px',
                background: '#9333ea',
                color: 'white',
                border: 'none',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 10px 20px rgba(147, 51, 234, 0.3)',
              }}
            >
              Explore My Work <ArrowIcon />
            </motion.button>

            <motion.a
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(255,255,255,0.1)',
              }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: 'none',
                padding: '14px 35px',
                borderRadius: '50px',
                border: '2px solid rgba(255, 255, 255, 0.25)',
                color: 'white',
                fontWeight: 'bold',
                transition: '0.3s',
              }}
            >
              View Resume
            </motion.a>
          </div>

          {/* Social Links */}
          <div
            style={{
              display: 'flex',
              gap: '30px',
              justifyContent: 'center',
            }}
          >
            <a href="https://github.com/neelimagedela" className="social-hover" style={{ color: '#e5e7eb', fontSize: '1.7rem' }}>
              <GithubIcon />
            </a>
            <a href="https://www.linkedin.com/in/neelima-gedela-92ba68330" className="social-hover" style={{ color: '#e5e7eb', fontSize: '1.7rem' }}>
              <LinkedinIcon />
            </a>
            <a href="mailto:neelimagedela3738@gmail.com" className="social-hover" style={{ color: '#e5e7eb', fontSize: '1.7rem' }}>
              <MailIcon />
            </a>
            <a href="tel:+919392446531" className="social-hover" style={{ color: '#e5e7eb', fontSize: '1.7rem' }}>
              <PhoneIcon />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Scroll Down */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{
          position: 'absolute',
          bottom: '25px',
          color: 'rgba(255,255,255,0.45)',
          fontSize: '2.5rem',
        }}
      >
        <ScrollIcon />
      </motion.div>

      <style>{`
        .social-hover:hover {
          color: #ec4899 !important;
          transform: translateY(-5px);
        }
      `}</style>
    </section>
  );
};

export default Hero;