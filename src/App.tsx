import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import First from './components/first';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Internships from './components/Internships';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import TechStackMatrix from './components/Skills';
import TechStackMarquee from './components/TechStack';

import sharedBG from './assets/ttt.png';
import commonBG from './assets/ttt.png';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <First />
      ) : (
        <>
          <Navbar />

          <div style={{ marginTop: '70px' }}>
            <Hero />
            <About />

            {/* TECH STACK SECTION */}
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.8), rgba(5, 5, 5, 0.9)), url(${commonBG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                width: '100%'
              }}
            >
              <TechStackMarquee />
              <TechStackMatrix />
            </div>

            <Projects />

            {/* ACHIEVEMENTS SECTION (NEW ADDED) */}
            <Achievements />

            <div
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${sharedBG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                width: '100%'
              }}
            >
              <Education />
              <Internships />
            </div>

            <Contact />
          </div>
        </>
      )}
    </div>
  );
}

export default App;