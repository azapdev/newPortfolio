import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Gallery', href: '/gallery', isRoute: true },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/75 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all">
      <div className="w-full px-6 sm:px-10 lg:px-16 h-24 flex items-center justify-between">
        
        {/* Left: Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 flex-1 justify-start">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-textSecondary hover:text-accentPrimary transition-all duration-200 tracking-wide hover:-translate-y-0.5"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-textSecondary hover:text-accentPrimary transition-all duration-200 tracking-wide hover:-translate-y-0.5"
              >
                {link.name}
              </a>
            )
          ))}
        </div>

        {/* Center: Large Free-Form Accented Logo */}
        <div className="flex items-center justify-center">
          <Link
            to="/"
            className="group flex items-center gap-4 py-1 px-3 rounded-full hover:bg-white/60 transition-all duration-300"
            aria-label="Ahmed Elazap Home"
          >
            <img
              src="/assets/color-replaced.webp"
              alt="Ahmed Elazap Logo"
              className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_4px_12px_rgba(45,168,160,0.35)]"
              onError={(e) => {
                e.target.src = '/assets/logo.webp';
              }}
            />
            <div className="flex flex-col text-left">
              <span className="font-heading font-extrabold text-lg sm:text-xl text-textPrimary leading-none tracking-tight group-hover:text-accentPrimary transition-colors">
                Ahmed Elazap
              </span>
              <span className="text-[11px] font-bold text-accentPrimary uppercase tracking-widest mt-1">
                Front-End & Web-App Dev
              </span>
            </div>
          </Link>
        </div>

        {/* Right: Actions / Buttons */}
        <div className="hidden lg:flex items-center gap-4 flex-1 justify-end">
          <a
            href="/resume.pdf"
            className="px-6 py-3 rounded-full text-sm font-semibold text-textPrimary bg-white/80 hover:bg-white border border-white/90 shadow-sm hover:shadow-md hover:border-accentPrimary/40 transition-all duration-200 flex items-center gap-1.5"
          >
            Resume
            <ArrowUpRight size={15} className="text-textSecondary" />
          </a>
          <a
            href="/#contact"
            className="px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-accentPrimary via-[#3AAFA9] to-[#258c85] hover:opacity-95 shadow-[0_4px_16px_rgba(45,168,160,0.4)] hover:shadow-[0_8px_24px_rgba(45,168,160,0.5)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-2xl bg-white/80 border border-white/80 text-textPrimary shadow-sm hover:text-accentPrimary transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 pt-4 pb-6 bg-white/95 backdrop-blur-2xl border-b border-borderLight shadow-xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-textPrimary hover:text-accentPrimary py-1"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-textPrimary hover:text-accentPrimary py-1"
              >
                {link.name}
              </a>
            )
          ))}
          <div className="pt-4 border-t border-borderLight flex flex-col gap-3">
            <a
              href="/resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl border border-borderLight text-textPrimary font-semibold"
            >
              Resume
            </a>
            <a
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-accentPrimary text-white font-bold shadow-md"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
