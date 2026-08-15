import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Gallery Page Component
 * Visual gallery showcasing live production deployments and application UIs:
 * - Direct routing at `/gallery`
 * - Card grid with live previews, tags, and category taxonomies
 * - Seamless external links opening directly to live deployments
 */
export default function Gallery() {
  // Live gallery items imported from portfolio assets
  const galleryItems = [
    {
      title: "L'Épicurieux Restaurant & Bar",
      category: "Culinary Web Platform",
      img: "/img/works/website.webp",
      link: "https://lepicurieux.azapdev.workers.dev/",
      tag: "React & Cloudflare Workers"
    },
    {
      title: "The Mighty Spice Co.",
      category: "E-Commerce Experience",
      img: "/img/works/themightyspiceco.webp",
      link: "https://themightyspiceco.azapdev.workers.dev/",
      tag: "Next.js & Zustand"
    },
    {
      title: "Porty Hotel & Stay Platform",
      category: "Booking & Hospitality App",
      img: "/img/works/porty.webp",
      link: "https://porty.azapdev.workers.dev/",
      tag: "React 19 & REST APIs"
    },
    {
      title: "Ashely Digital Agency",
      category: "Corporate Agency Platform",
      img: "/img/works/ashely.webp",
      link: "https://ashely.azapdev.workers.dev/",
      tag: "React & Apple HIG"
    },
    {
      title: "PulseFit Gym & Wellness",
      category: "Fitness & Training Web-App",
      img: "/img/works/plusfit.webp",
      link: "https://pulsefit.azapdev.workers.dev/",
      tag: "Framer Motion & Vite"
    }
  ];

  return (
    <div className="pt-28 pb-24 min-h-screen bg-bgMain">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        
        {/* Navigation & Header */}
        <div className="mb-12 flex flex-col items-start">
          {/* Return Home Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/90 shadow-sm text-sm font-semibold text-textSecondary hover:text-accentPrimary hover:shadow-md transition-all mb-8"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>

          {/* Title and Intro Copy */}
          <div className="flex flex-col items-center text-center w-full">
            <span className="px-4 py-1.5 rounded-full bg-accentPrimary/10 text-accentPrimary font-semibold text-xs uppercase tracking-wider mb-3">
              UI & Application Showcase
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-textPrimary tracking-tight">
              Design & Web-App Gallery
            </h1>
            <p className="mt-4 text-base sm:text-lg text-textSecondary max-w-2xl">
              Visual exploration of live production websites and web application interfaces created by Ahmed Elazap.
            </p>
          </div>
        </div>

        {/* Fluid Responsive Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/85 backdrop-blur-2xl rounded-[2rem] overflow-hidden border border-white/90 shadow-[0_8px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(45,168,160,0.14)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Visual Preview Banner */}
              <div className="relative h-64 w-full overflow-hidden bg-bgAlt">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = '/assets/works/website.webp';
                  }}
                />
                
                {/* Visual dark contrast gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent"></div>

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-xl bg-white/90 backdrop-blur-md text-textPrimary shadow-sm">
                    {item.tag}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-accentPrimary group-hover:scale-110 shadow-sm transition-transform">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Bottom Title & Category Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <p className="text-[11px] font-mono uppercase tracking-widest text-white/80">{item.category}</p>
                  <h4 className="text-xl font-heading font-extrabold text-white mt-0.5 drop-shadow">
                    {item.title}
                  </h4>
                </div>
              </div>

              {/* Caption Footer */}
              <div className="p-5 bg-white/90 flex items-center justify-between border-t border-borderLight/60">
                <span className="text-xs font-medium text-textSecondary">Crafted by Ahmed Elazap</span>
                <span className="text-xs font-bold text-accentPrimary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Visit Live <span>→</span>
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
