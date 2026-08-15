import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Layout, Cpu, Database, Palette, Smartphone, Terminal, Globe, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');

  const categories = [
    { id: 'frontend', label: '⚡ Frontend Core', icon: Layout },
    { id: 'webapp', label: '🚀 Web-App & State', icon: Cpu },
    { id: 'tools', label: '🛠️ Tooling & Design', icon: Palette },
  ];

  const skillData = {
    frontend: [
      { name: 'React.js', level: 'Expert', desc: 'Hooks, Suspense, Server Components, Virtual DOM', icon: Code },
      { name: 'TypeScript', level: 'Advanced', desc: 'Type Safety, Generics, Interfaces, Strict Typing', icon: Terminal },
      { name: 'Next.js', level: 'Advanced', desc: 'App Router, SSR, SSG, API Routes, Optimization', icon: Globe },
      { name: 'Tailwind CSS', level: 'Expert', desc: 'Liquid Glass, Responsive Design, Custom Themes', icon: Sparkles },
      { name: 'JavaScript (ES6+)', level: 'Expert', desc: 'Async/Await, Closures, DOM APIs, Event Loops', icon: Code },
      { name: 'HTML5 & Semantics', level: 'Expert', desc: 'Accessibility (a11y), SEO Best Practices', icon: Layout },
    ],
    webapp: [
      { name: 'State Management', level: 'Advanced', desc: 'Zustand, Redux Toolkit, React Context', icon: Database },
      { name: 'Framer Motion', level: 'Advanced', desc: 'Liquid Transitions, Gestures, Scroll Motion', icon: Sparkles },
      { name: 'REST & GraphQL APIs', level: 'Advanced', desc: 'Data Fetching, SWR, TanStack Query', icon: Globe },
      { name: 'Vite Ecosystem', level: 'Expert', desc: 'Lightning fast builds, HMR, Rollup Bundling', icon: Terminal },
      { name: 'Single Page Apps (SPA)', level: 'Expert', desc: 'Client Routing, Lazy Loading, Code Splitting', icon: Cpu },
      { name: 'Responsive Web Apps', level: 'Expert', desc: 'Mobile-first, Container Queries, Fluid Layouts', icon: Smartphone },
    ],
    tools: [
      { name: 'Git & GitHub', level: 'Advanced', desc: 'Branching, PR Reviews, CI/CD Actions', icon: Terminal },
      { name: 'Vitest & Testing', level: 'Proficient', desc: 'Unit Tests, TDD, React Testing Library', icon: CheckCircle2 },
      { name: 'Figma to Code', level: 'Expert', desc: 'Pixel-perfect translation, Design Tokens', icon: Palette },
      { name: 'Vercel Deployment', level: 'Expert', desc: 'Continuous Deployment, Edge Functions, DNS', icon: Globe },
      { name: 'Apple HIG Design', level: 'Advanced', desc: 'Frosted Glass, Depth, Micro-Interactions', icon: Sparkles },
      { name: 'Performance Tuning', level: 'Advanced', desc: 'Core Web Vitals, Lazy Assets, Bundle Minimizing', icon: Cpu },
    ],
  };

  return (
    <section id="skills" className="py-28 bg-bgMain relative overflow-hidden">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="px-4 py-1.5 rounded-full bg-accentPrimary/10 text-accentPrimary font-semibold text-xs uppercase tracking-wider mb-3">
            Technical Arsenal
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-textPrimary tracking-tight">
            Front-End & Web-App Capabilities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-textSecondary max-w-2xl">
            A comprehensive suite of modern web development technologies tailored for building resilient, high-speed, and accessible web applications.
          </p>
        </div>

        {/* Apple-style Segmented Control Liquid Tab Switcher */}
        <div className="flex justify-center mb-14">
          <div className="p-1.5 rounded-2xl bg-bgAlt/80 backdrop-blur-xl border border-borderLight/80 shadow-sm inline-flex gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`relative px-5 sm:px-7 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'text-textPrimary font-semibold shadow-sm'
                      : 'text-textSecondary hover:text-textPrimary'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTab"
                      className="absolute inset-0 bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-white/80"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon size={16} className={isActive ? 'text-accentPrimary' : 'text-textSecondary'} />
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Fluid Grid of Skills */}
        <div className="min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skillData[activeTab].map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="bg-white/80 backdrop-blur-2xl p-6 rounded-3xl border border-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(45,168,160,0.08)] hover:border-accentPrimary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2.5 rounded-2xl bg-bgAlt text-accentPrimary group-hover:bg-accentPrimary/10 group-hover:scale-110 transition-all duration-200">
                          <Icon size={20} />
                        </div>
                        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-accentPrimary/10 text-accentPrimary">
                          {skill.level}
                        </span>
                      </div>
                      <h4 className="text-lg font-heading font-bold text-textPrimary mb-1.5">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-textSecondary leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-borderLight/50 flex items-center gap-1.5 text-[11px] font-medium text-accentPrimary">
                      <CheckCircle2 size={13} />
                      <span>Production Tested</span>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
