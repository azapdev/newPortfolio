import React from 'react';
import { ArrowUp } from 'lucide-react';

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-white/70 backdrop-blur-2xl border-t border-borderLight/80 py-10">
      <div className="w-full px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Identity */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-accentPrimary to-[#7B61FF] p-0.5 shadow-sm flex items-center justify-center">
            <img
              src="/assets/color-replaced.png"
              alt="Ahmed Elazap"
              className="w-full h-full object-contain rounded-full bg-white"
              onError={(e) => { e.target.src = '/assets/logo.png'; }}
            />
          </div>
          <div>
            <p className="font-heading font-bold text-sm text-textPrimary">Ahmed Elazap</p>
            <p className="text-xs text-textSecondary">
              © {new Date().getFullYear()} Ahmed Elazap. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>

        {/* Social Links & Back To Top */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-xl bg-bgAlt/80 text-textSecondary hover:text-accentPrimary hover:bg-accentPrimary/10 transition-colors"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-xl bg-bgAlt/80 text-textSecondary hover:text-accentPrimary hover:bg-accentPrimary/10 transition-colors"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="p-2.5 rounded-xl bg-bgAlt/80 text-textSecondary hover:text-accentPrimary hover:bg-accentPrimary/10 transition-colors"
          >
            <TwitterIcon size={18} />
          </a>
          
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2.5 rounded-xl bg-bgAlt/80 text-textSecondary hover:text-accentPrimary hover:bg-accentPrimary/10 transition-colors ml-2"
          >
            <ArrowUp size={18} />
          </button>
        </div>

      </div>
    </footer>
  );
}
