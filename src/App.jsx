import React from 'react';
import './index.css';

function App() {
  const projects = [
    {
      title: 'Aurora',
      description: 'A revolutionary design system based on translucent surfaces and vivid background meshes, maximizing immersion.'
    },
    {
      title: 'Prism',
      description: 'An analytics dashboard refocused around clarity, utilizing depth and blur to establish visual hierarchy without clutter.'
    },
    {
      title: 'Echo',
      description: 'A generative audio platform using liquid glass interfaces to reflect the fluidity of sound in visual form.'
    }
  ];

  return (
    <div className="app-container">
      <div className="floating-orb"></div>
      
      <header className="header glass-panel">
        <h1>V. Glass</h1>
        <nav className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h2>Designing<br/>the Intangible</h2>
          <p>
            Crafting digital experiences through depth, light, and transparency. 
            A modern portfolio demonstrating the elegance of liquid glass design.
          </p>
          <button className="btn">Explore Work</button>
        </section>

        <section id="work" className="glass-panel" style={{ padding: '3rem 2rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>Selected Projects</h2>
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div key={idx} className="project-card glass-panel">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                  <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.8 }}>
                    View Case Study →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer glass-panel">
        <p>© {new Date().getFullYear()} V. Glass. Built with React & Vite. Ready for Vercel.</p>
      </footer>
    </div>
  );
}

export default App;
