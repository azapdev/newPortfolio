import React from 'react';
import { ExternalLink } from 'lucide-react';

function Github({ size = 16, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "DentalSync App",
      desc: "A clinic management mobile app for tracking patient records.",
      tags: ["Kotlin", "Firebase"],
      links: { demo: "#", github: "#" }
    },
    {
      title: "Study Timer",
      desc: "Pomodoro-style app for medical students with custom intervals.",
      tags: ["Flutter", "Dart"],
      links: { demo: "#", github: "#" }
    }
  ];

  return (
    <section id="projects" className="py-24 bg-bgAlt px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 text-textPrimary">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-borderLight group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="h-48 bg-gray-200 w-full flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
                [Image Placeholder]
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  {proj.tags.map((tag, j) => (
                    <span key={j} className="text-xs font-semibold px-3 py-1 bg-accentPrimary/10 text-accentPrimary rounded-full">{tag}</span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-textPrimary">{proj.title}</h3>
                <p className="text-textSecondary mb-6">{proj.desc}</p>
                <div className="flex gap-4">
                  <a href={proj.links.demo} className="flex items-center gap-2 text-sm font-semibold text-textPrimary hover:text-accentPrimary transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={proj.links.github} className="flex items-center gap-2 text-sm font-semibold text-textPrimary hover:text-accentPrimary transition-colors">
                    <Github size={16} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
