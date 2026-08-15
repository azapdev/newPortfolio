import React from 'react';
import { Sparkles, Layers, Eye, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Gallery() {
  const galleryItems = [
    {
      title: "Liquid Glass Analytics Dashboard",
      category: "Web-App Interface",
      gradient: "from-[#2DA8A0]/30 to-[#7B61FF]/30",
      tag: "React & Tailwind"
    },
    {
      title: "FinTech Transaction Flow",
      category: "Interactive Flow",
      gradient: "from-[#7B61FF]/30 to-[#FF8A65]/30",
      tag: "Next.js & Motion"
    },
    {
      title: "AI Canvas Node Graph System",
      category: "SaaS Application",
      gradient: "from-[#FF8A65]/30 to-[#2DA8A0]/30",
      tag: "TypeScript"
    },
    {
      title: "Apple HIG Dark/Light Mode Theme",
      category: "Design System",
      gradient: "from-[#4CAF7D]/30 to-[#3AAFA9]/30",
      tag: "Design Tokens"
    },
    {
      title: "Dynamic E-Commerce Product Studio",
      category: "Web Application",
      gradient: "from-[#3AAFA9]/30 to-[#7B61FF]/30",
      tag: "Zustand & SWR"
    },
    {
      title: "Real-Time Collaborative Code Editor",
      category: "Developer Tool",
      gradient: "from-[#7B61FF]/30 to-[#4CAF7D]/30",
      tag: "WebSockets"
    }
  ];

  return (
    <div className="pt-28 pb-24 min-h-screen bg-bgMain">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        
        {/* Navigation & Header */}
        <div className="mb-12 flex flex-col items-start">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-white/90 shadow-sm text-sm font-semibold text-textSecondary hover:text-accentPrimary hover:shadow-md transition-all mb-8"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>

          <div className="flex flex-col items-center text-center w-full">
            <span className="px-4 py-1.5 rounded-full bg-accentPrimary/10 text-accentPrimary font-semibold text-xs uppercase tracking-wider mb-3">
              UI & Application Showcase
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-textPrimary tracking-tight">
              Design & Web-App Gallery
            </h1>
            <p className="mt-4 text-base sm:text-lg text-textSecondary max-w-2xl">
              Visual exploration of production interfaces, liquid glass components, and experimental frontend interactions created by Ahmed Elazap.
            </p>
          </div>
        </div>

        {/* Fluid Masonry / Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/85 backdrop-blur-2xl rounded-[2rem] overflow-hidden border border-white/90 shadow-[0_8px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(45,168,160,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Visual Frame */}
              <div className={`h-64 bg-gradient-to-br ${item.gradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
                <div className="flex justify-between items-center relative z-10">
                  <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-white/80 backdrop-blur-md text-textPrimary shadow-sm">
                    {item.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-textPrimary group-hover:scale-110 transition-transform">
                    <Eye size={16} />
                  </div>
                </div>

                <div className="relative z-10">
                  <p className="text-xs font-mono uppercase tracking-widest text-textPrimary/80">{item.category}</p>
                  <h4 className="text-xl font-heading font-bold text-textPrimary mt-1">
                    {item.title}
                  </h4>
                </div>
              </div>

              {/* Caption Footer */}
              <div className="p-5 bg-white/90 flex items-center justify-between border-t border-borderLight/60">
                <span className="text-xs font-medium text-textSecondary">Crafted by Ahmed Elazap</span>
                <span className="text-xs font-bold text-accentPrimary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Preview <span>→</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
