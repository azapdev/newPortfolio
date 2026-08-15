import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';

/**
 * HomePage Component
 * Assembles the primary single-page experience:
 * - Hero: Full-screen introduction with interactive particles and full-body portrait
 * - About: Engineering background, metrics, and design philosophy
 * - Skills: Interactive segmented technical stack tabs
 * - Projects: Live imported production web applications
 * - Contact: Interactive floating label inquiry form
 */
function HomePage() {
  return (
    <div className="pt-16">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

/**
 * App Root Component
 * Sets up client-side SPA routing with React Router:
 * - Global fixed Navbar and Footer layout
 * - `/`: Main landing and portfolio experience
 * - `/gallery`: Full-screen design & web-app gallery
 */
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col justify-between">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
