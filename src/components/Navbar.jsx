import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-borderLight shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-accentPrimary text-white font-heading font-bold text-xl"
        >
          M.
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          <a href="#home" className="text-textSecondary hover:text-accentPrimary font-medium">
            Home
          </a>
          <a href="#about" className="text-textSecondary hover:text-accentPrimary font-medium">
            About
          </a>
          <a href="#skills" className="text-textSecondary hover:text-accentPrimary font-medium">
            Skills
          </a>
          <a href="#projects" className="text-textSecondary hover:text-accentPrimary font-medium">
            Projects
          </a>
          <Link to="/gallery" className="text-textSecondary hover:text-accentPrimary font-medium">
            Gallery
          </Link>
        </div>
        <div className="flex gap-4">
          <a
            href="/resume.pdf"
            className="hidden md:block px-4 py-2 rounded-full border-2 border-accentPrimary text-accentPrimary font-medium hover:bg-accentPrimary/10 transition-colors"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-accentPrimary text-white font-medium hover:bg-[#258c85] transition-colors shadow-md hover:shadow-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
}
