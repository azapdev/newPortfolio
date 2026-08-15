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
      title: "L'Épicurieux Restaurant & Bar",
      desc: "Exploring authentic French culinary flavors with a modern digital dining experience, interactive menu spotlights, and responsive booking flows.",
      tags: ["React", "Tailwind CSS", "Cloudflare Workers", "Framer Motion"],
      img: "/img/works/website.webp",
      gradient: "from-[#2DA8A0]/20 via-[#3AAFA9]/10 to-[#7B61FF]/20",
      accent: "#2DA8A0",
      links: { demo: "https://lepicurieux.azapdev.workers.dev/", github: "https://github.com/AhmedElazap" }
    },
    {
      title: "The Mighty Spice Co.",
      desc: "Experience the bold flavors of Indian street food and spices, served fast and fresh with dynamic product carousels and seamless order flows.",
      tags: ["TypeScript", "Next.js", "Tailwind CSS", "Zustand"],
      img: "/img/works/themightyspiceco.webp",
      gradient: "from-[#FF8A65]/20 via-[#2DA8A0]/10 to-[#7B61FF]/20",
      accent: "#FF8A65",
      links: { demo: "https://themightyspiceco.azapdev.workers.dev/", github: "https://github.com/AhmedElazap" }
    },
    {
      title: "Porty Hotel & Stay Platform",
      desc: "Discover the easiest way to book your perfect stay with effortless reservation flows, budget filters, exclusive deals, and verified reviews.",
      tags: ["React 19", "Vite", "Tailwind CSS", "REST APIs"],
      img: "/img/works/porty.webp",
      gradient: "from-[#7B61FF]/20 via-[#3AAFA9]/10 to-[#2DA8A0]/20",
      accent: "#7B61FF",
      links: { demo: "https://porty.azapdev.workers.dev/", github: "https://github.com/AhmedElazap" }
    },
    {
      title: "Ashely Digital Agency",
      desc: "Comprehensive digital solutions platform providing web and app development services, client portfolio showcases, and high-performance UX.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Apple HIG"],
      img: "/img/works/ashely.webp",
      gradient: "from-[#3AAFA9]/20 via-[#2DA8A0]/10 to-[#7B61FF]/20",
      accent: "#3AAFA9",
      links: { demo: "https://ashely.azapdev.workers.dev/", github: "https://github.com/AhmedElazap" }
    },
    {
      title: "PulseFit Gym & Wellness",
      desc: "Modern and responsive fitness web app designed to inspire workouts, member subscriptions, trainer directories, and interactive goal tracking.",
      tags: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      img: "/img/works/plusfit.webp",
      gradient: "from-[#4CAF7D]/20 via-[#2DA8A0]/10 to-[#7B61FF]/20",
      accent: "#4CAF7D",
      links: { demo: "https://pulsefit.azapdev.workers.dev/", github: "https://github.com/AhmedElazap" }
    }
  ];

  return (
    <section id="projects" className="py-28 bg-bgAlt/60 relative overflow-hidden">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="px-4 py-1.5 rounded-full bg-accentPrimary/10 text-accentPrimary font-semibold text-xs uppercase tracking-wider mb-3">
            Featured Works
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-textPrimary tracking-tight">
            Selected Web-Apps & Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-textSecondary max-w-2xl">
            A curated showcase of live production web applications, client solutions, and frontend systems imported directly from my portfolio.
          </p>
        </div>

        {/* Fluid Responsive Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="bg-white/85 backdrop-blur-2xl rounded-[2rem] overflow-hidden border border-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(45,168,160,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Card Banner / Visual Image Preview */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-bgAlt">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = '/assets/works/website.webp';
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className="p-2 rounded-xl bg-white/90 backdrop-blur-xl border border-white shadow-sm flex items-center gap-1.5">
                    <Sparkles size={14} style={{ color: proj.accent }} />
                    <span className="text-[11px] font-bold text-textPrimary">Live Work</span>
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-white/85 backdrop-blur-md text-textPrimary shadow-sm">
                    {proj.tags[0]}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h4 className="text-xl sm:text-2xl font-heading font-extrabold text-white drop-shadow-md">
                    {proj.title}
                  </h4>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold px-2.5 py-1 bg-accentPrimary/10 text-accentPrimary rounded-xl"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-textSecondary text-sm leading-relaxed mb-6">
                    {proj.desc}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-5 border-t border-borderLight/60">
                  <a
                    href={proj.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-accentPrimary hover:text-[#258c85] transition-colors"
                  >
                    <span>View Website</span>
                    <ArrowUpRight size={16} />
                  </a>

                  <a
                    href={proj.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-textSecondary hover:text-textPrimary transition-colors"
                    aria-label={`View ${proj.title} on GitHub`}
                  >
                    <GithubIcon size={16} />
                    <span>Source</span>
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
