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
    <nav className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all">
      <div className="w-full px-6 sm:px-10 lg:px-16 h-20 flex items-center justify-between">
        
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

        {/* Center: Accented Liquid Glass Logo */}
        <div className="flex items-center justify-center">
          <Link
            to="/"
            className="group relative flex items-center gap-3 p-1.5 pr-4 rounded-full bg-white/80 backdrop-blur-xl border border-white/80 shadow-[0_2px_12px_rgba(45,168,160,0.15)] hover:shadow-[0_4px_20px_rgba(45,168,160,0.3)] transition-all duration-300 hover:scale-[1.03]"
            aria-label="Ahmed Elazap Home"
          >
            {/* Accented Logo Ring */}
            <div className="relative w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-accentPrimary via-[#3AAFA9] to-[#7B61FF] shadow-sm flex items-center justify-center overflow-hidden">
              <img
                src="/assets/logo.webp"
                alt="Ahmed Elazap Logo"
                className="w-full h-full object-cover rounded-full bg-white transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <span className="hidden w-full h-full items-center justify-center font-heading font-extrabold text-white text-lg bg-accentPrimary">
                AE
              </span>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-heading font-bold text-sm text-textPrimary leading-tight tracking-tight">
                Ahmed Elazap
              </span>
              <span className="text-[10px] font-semibold text-accentPrimary uppercase tracking-wider">
                Front-End Dev
              </span>
            </div>
          </Link>
        </div>

        {/* Right: Actions / Buttons */}
        <div className="hidden lg:flex items-center gap-4 flex-1 justify-end">
          <a
            href="/resume.pdf"
            className="px-5 py-2.5 rounded-full text-sm font-medium text-textPrimary bg-white/70 hover:bg-white border border-white/90 shadow-sm hover:shadow-md hover:border-accentPrimary/40 transition-all duration-200 flex items-center gap-1.5"
          >
            Resume
            <ArrowUpRight size={14} className="text-textSecondary" />
          </a>
          <a
            href="/#contact"
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-accentPrimary to-[#258c85] hover:from-[#258c85] hover:to-[#1e736d] shadow-[0_4px_14px_rgba(45,168,160,0.35)] hover:shadow-[0_6px_20px_rgba(45,168,160,0.45)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-2xl bg-white/80 border border-white/80 text-textPrimary shadow-sm hover:text-accentPrimary transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
              className="w-full text-center py-2.5 rounded-xl border border-borderLight text-textPrimary font-medium"
            >
              Resume
            </a>
            <a
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-accentPrimary text-white font-semibold shadow-md"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
