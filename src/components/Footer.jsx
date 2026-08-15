import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-borderLight py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-textSecondary text-sm">© {new Date().getFullYear()} Mohamed. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="text-textSecondary hover:text-accentPrimary">GitHub</a>
          <a href="#" className="text-textSecondary hover:text-accentPrimary">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
