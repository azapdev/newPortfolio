import React from 'react';
import { Layers, Zap, ShieldCheck, HeartHandshake } from 'lucide-react';

/**
 * About Component
 * Developer overview and key engineering philosophy:
 * - Bio storytelling card focusing on frontend & web-app development
 * - Core philosophy highlights (Human-Centered Design, Modern Web Architecture, Liquid Motion)
 * - 2x2 Interactive Stats Matrix showcasing experience, shipped apps, and reliability
 */
export default function About() {
  // Quantifiable performance and engineering metrics
  const stats = [
    { label: "Years Experience", value: "3+", icon: Zap, color: "text-accentPrimary" },
    { label: "Web Apps Shipped", value: "20+", icon: Layers, color: "text-[#7B61FF]" },
    { label: "Design Systems", value: "15+", icon: ShieldCheck, color: "text-accentSecondary" },
    { label: "Code Reliability", value: "100%", icon: HeartHandshake, color: "text-success" }
  ];

  // Core engineering pillars
  const highlights = [
    {
      title: "Human-Centered Design",
      desc: "Deeply influenced by Apple HIG, prioritizing clarity, deference, and depth in every UI component."
    },
    {
      title: "Modern Web Architecture",
      desc: "Building performant, type-safe single-page applications and dashboards with React, Next.js, and TypeScript."
    },
    {
      title: "Fluid Animations & Micro-Interactions",
      desc: "Creating tactile, organic micro-interactions and liquid transitions using Framer Motion and modern CSS."
    }
  ];

  return (
    <section id="about" className="py-28 bg-bgAlt/60 relative overflow-hidden">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="px-4 py-1.5 rounded-full bg-accentPrimary/10 text-accentPrimary font-semibold text-xs uppercase tracking-wider mb-3">
            About Ahmed Elazap
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-textPrimary tracking-tight">
            Engineering Precision into Every Pixel
          </h2>
          <p className="mt-4 text-base sm:text-lg text-textSecondary max-w-2xl">
            Passionate Front-End & Web-App developer dedicated to bridging state-of-the-art aesthetics with rock-solid frontend architecture.
          </p>
        </div>

        {/* Fluid 2-Column Responsive Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Story Bio Card */}
          <div className="lg:col-span-7 bg-white/80 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 border border-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-textPrimary mb-6">
                Crafting Modern Web Apps That Feel Intuitive & Alive
              </h3>
              <p className="text-textSecondary text-base sm:text-lg leading-relaxed mb-6">
                I am a dedicated Front-End and Web-App Developer with a deep focus on crafting fluid, responsive, and visually arresting web interfaces. I treat code as a craft where performance, accessibility, and aesthetics converge seamlessly.
              </p>
              <p className="text-textSecondary text-base sm:text-lg leading-relaxed mb-8">
                From responsive layout systems and bespoke design systems to complex state management and API integrations, I specialize in transforming intricate product visions into refined, production-ready web experiences.
              </p>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-borderLight/60">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-heading font-bold text-sm text-textPrimary mb-1">
                    {item.title}
                  </span>
                  <span className="text-xs text-textSecondary leading-relaxed">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Matrix Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-white/80 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl border border-white/90 shadow-[0_8px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(45,168,160,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center group"
                >
                  <div className="p-3 rounded-2xl bg-bgAlt/80 mb-4 group-hover:scale-110 transition-transform duration-200">
                    <Icon size={24} className={stat.color} />
                  </div>
                  <span className="text-3xl sm:text-4xl font-heading font-extrabold text-textPrimary mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-textSecondary">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
