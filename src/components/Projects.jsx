import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

function GithubIcon({ size = 18, className = "" }) {
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
      title: "LiquidGlass Studio Platform",
      desc: "An Apple HIG-inspired web app platform for designing and managing real-time translucent dashboards, analytics widgets, and interactive data visualizations.",
      tags: ["React 19", "Tailwind CSS", "Framer Motion", "Vite"],
      gradient: "from-[#2DA8A0]/20 via-[#3AAFA9]/10 to-[#7B61FF]/20",
      accent: "#2DA8A0",
      links: { demo: "https://azap-portfolio.vercel.app", github: "https://github.com/AhmedElazap" }
    },
    {
      title: "Pulse Commerce Web-App",
      desc: "Full-scale modern e-commerce web application with real-time cart synchronization, optimistic UI updates, multi-filter catalog, and seamless checkout flows.",
      tags: ["TypeScript", "Next.js", "Zustand", "Tailwind"],
      gradient: "from-[#7B61FF]/20 via-[#FF8A65]/10 to-[#2DA8A0]/20",
      accent: "#7B61FF",
      links: { demo: "https://azap-portfolio.vercel.app", github: "https://github.com/AhmedElazap" }
    },
    {
      title: "Nexus AI Workflow Studio",
      desc: "High-productivity frontend web-app for prompt engineering, token usage analysis, interactive node graphs, and real-time streaming LLM responses.",
      tags: ["React", "TypeScript", "REST APIs", "Tailwind"],
      gradient: "from-[#FF8A65]/20 via-[#2DA8A0]/15 to-[#3AAFA9]/20",
      accent: "#FF8A65",
      links: { demo: "https://azap-portfolio.vercel.app", github: "https://github.com/AhmedElazap" }
    },
    {
      title: "Aura Glass UI Design System",
      desc: "Comprehensive open-source React component library crafted with Apple HIG principles, specular reflection tokens, and accessible WCAG 2.1 AAA standards.",
      tags: ["React", "TypeScript", "Figma Tokens", "Tailwind"],
      gradient: "from-[#4CAF7D]/20 via-[#2DA8A0]/15 to-[#7B61FF]/20",
      accent: "#4CAF7D",
      links: { demo: "https://azap-portfolio.vercel.app", github: "https://github.com/AhmedElazap" }
    }
  ];

  return (
    <section id="projects" className="py-28 bg-bgAlt/60 relative overflow-hidden">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="px-4 py-1.5 rounded-full bg-accentPrimary/10 text-accentPrimary font-semibold text-xs uppercase tracking-wider mb-3">
            Featured Portfolio
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-textPrimary tracking-tight">
            Selected Web-Apps & Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-textSecondary max-w-2xl">
            A curated showcase of production-ready web applications, interactive tools, and frontend systems designed for scale and impact.
          </p>
        </div>

        {/* Fluid 2x2 Responsive Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="bg-white/85 backdrop-blur-2xl rounded-[2rem] overflow-hidden border border-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(45,168,160,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Card Banner / Visual Preview */}
              <div className={`h-56 sm:h-64 w-full bg-gradient-to-br ${proj.gradient} p-8 flex flex-col justify-between relative overflow-hidden border-b border-borderLight/40`}>
                
                {/* Background Glass Orbs */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/40 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                <div className="flex items-center justify-between relative z-10">
                  <div className="p-2.5 rounded-2xl bg-white/80 backdrop-blur-xl border border-white shadow-sm flex items-center gap-2">
                    <Sparkles size={16} style={{ color: proj.accent }} />
                    <span className="text-xs font-bold text-textPrimary">Production Build</span>
                  </div>
                  <div className="flex gap-2">
                    {proj.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-white/70 backdrop-blur-md text-textPrimary shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative z-10">
                  <span className="text-xs font-mono uppercase tracking-widest text-textSecondary">Web Application</span>
                  <h4 className="text-2xl sm:text-3xl font-heading font-extrabold text-textPrimary mt-1">
                    {proj.title}
                  </h4>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 sm:p-10 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-3 py-1 bg-accentPrimary/10 text-accentPrimary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-textSecondary text-sm sm:text-base leading-relaxed mb-8">
                    {proj.desc}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-6 border-t border-borderLight/60">
                  <a
                    href={proj.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accentPrimary hover:text-[#258c85] transition-colors"
                  >
                    <span>Launch Application</span>
                    <ArrowUpRight size={16} />
                  </a>

                  <a
                    href={proj.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-textSecondary hover:text-textPrimary transition-colors"
                    aria-label={`View ${proj.title} on GitHub`}
                  >
                    <GithubIcon size={18} />
                    <span>Source Code</span>
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
