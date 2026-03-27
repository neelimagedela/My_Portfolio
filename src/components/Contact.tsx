import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import contactBG from '../assets/sss.jpg';

const Contact: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const socials = [
    { id: 'email', label: 'Gmail', val: 'neelimagedela3738@gmail.com', icon: 'https://img.icons8.com/fluency/48/gmail-new.png', color: '#EA4335', action: 'copy' },
    { id: 'linkedin', label: 'LinkedIn', val: 'neelima-gedela', icon: 'https://img.icons8.com/fluency/48/linkedin.png', color: '#0077B5', action: 'link', url: 'https://linkedin.com/in/neelima-gedela-92ba68330' },
    { id: 'github', label: 'GitHub', val: 'neelimagedela', icon: 'https://img.icons8.com/glyph-neue/64/ffffff/github.png', color: '#a855f7', action: 'link', url: 'https://github.com/neelimagedela' },
    { id: 'phone', label: 'WhatsApp', val: '+91 9392446531', icon: 'https://img.icons8.com/color/48/whatsapp--v1.png', color: '#25D366', action: 'copy' }
  ];

  const handleInteraction = (item: any) => {
    if (item.action === 'copy') {
      navigator.clipboard.writeText(item.val);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2000);
    } else {
      window.open(item.url, '_blank');
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: '140px 6%',
        backgroundColor: '#020617',
        backgroundImage: `
          linear-gradient(rgba(2,6,23,0.6), rgba(2,6,23,0.8)),
          url(${contactBG})
        `, // ✅ slight brightness reduced
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '90px' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={{
            fontSize: 'clamp(2.6rem, 5vw, 4rem)',
            fontWeight: 900,
            letterSpacing: '-1px',
            textShadow: '0 0 30px rgba(236,72,153,0.35)'
          }}
        >
          Let’s{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #ec4899, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Build Something
          </span>{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #3b82f6, #22c55e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Great.
          </span>
        </motion.h2>

        <p style={{ color: '#e5e7eb', fontSize: '1.1rem', marginTop: '12px' }}>
          Reach out for collaborations or just a tech chat!
        </p>
      </div>

      {/* Cards */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '32px',
          flexWrap: 'wrap',
          maxWidth: '1100px',
          width: '100%'
        }}
      >
        {socials.map((item) => (
          <motion.div
            key={item.id}
            onClick={() => handleInteraction(item)}
            whileHover={{ y: -18, scale: 1.07 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            style={{
              flex: '1 1 220px',
              height: '240px',
              background: `
                linear-gradient(
                  145deg,
                  rgba(255,255,255,0.18),
                  rgba(255,255,255,0.08)
                )
              `,
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              borderRadius: '38px',
              border: `1px solid ${item.color}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              position: 'relative',
              boxShadow: `
                0 0 50px ${item.color}55,
                0 35px 70px rgba(0,0,0,0.65)
              `
            }}
          >
            <img
              src={item.icon}
              alt={item.label}
              style={{
                width: '56px',
                height: '56px',
                marginBottom: '18px',
                filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.55))'
              }}
            />
            <h4 style={{ margin: '6px 0', fontSize: '1.3rem', fontWeight: 900 }}>
              {item.label}
            </h4>
            <p style={{ fontSize: '0.9rem', color: '#f1f5f9' }}>
              {item.action === 'copy' ? 'Click to Copy' : 'Visit Profile'}
            </p>

            <AnimatePresence>
              {copiedId === item.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: item.color,
                    borderRadius: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 900,
                    letterSpacing: '1px',
                    zIndex: 5,
                    boxShadow: `0 0 60px ${item.color}`
                  }}
                >
                  COPIED ✓
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <footer
        style={{
          marginTop: '120px',
          paddingBottom: '40px',
          textAlign: 'center',
          color: '#cbd5e1'
        }}
      >
        <p>© 2026 Developed with ❤️ by Gedela Neelima</p>
      </footer>
    </section>
  );
};

export default Contact;