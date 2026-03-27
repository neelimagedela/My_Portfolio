import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  const links = [
    'home',
    'about',
    'techstack',
    'projects',
    'achievements',
    'internships',
    'education',
    'contact'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = 'home';

      links.forEach((id) => {
        const el = document.getElementById(id);

        if (el) {
          const rect = el.getBoundingClientRect();

          // section in viewport check
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const yOffset = -80;
    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        height: '75px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 6%',
        zIndex: 1000,
        transition: 'all 0.4s ease',
        background: scrolled
          ? 'rgba(15, 23, 42, 0.9)'
          : 'rgba(15, 23, 42, 0.25)',
        backdropFilter: 'blur(14px)',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.08)'
          : '1px solid transparent'
      }}
    >
      {/* LOGO */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#a855f7' }}>
          NEELIMA
        </span>
        <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
          PORTFOLIO
        </span>
      </div>

      {/* LINKS */}
      <ul
        style={{
          display: 'flex',
          gap: '18px',
          listStyle: 'none',
          margin: 0,
          padding: '8px 16px',
          alignItems: 'center',
          background: 'rgba(255,255,255,0.04)',
          borderRadius: '50px',
          backdropFilter: 'blur(10px)'
        }}
      >
        {links.map((item) => (
          <li key={item}>
            <button
              onClick={() => scrollToSection(item)}
              style={{
                background:
                  active === item
                    ? 'rgba(236,72,153,0.25)'
                    : 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: active === item ? '#ec4899' : '#cbd5e1',
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                padding: '6px 10px',
                borderRadius: '20px',
                transition: 'all 0.3s ease'
              }}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

      {/* RESUME */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: '8px 16px',
          borderRadius: '25px',
          border: '1px solid #a855f7',
          color: '#fff',
          textDecoration: 'none',
          fontSize: '0.85rem',
          fontWeight: 600,
          background: 'rgba(168,85,247,0.15)'
        }}
      >
        Resume
      </a>
    </nav>
  );
};

export default Navbar;