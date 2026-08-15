import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Zap, Layers, Cpu, Globe, Palette } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';

export default function Hero() {
  const floatingTags = [
    {
      name: 'React 19',
      desc: 'Frontend Core',
      icon: Code2,
      color: 'text-accentPrimary',
      bgColor: 'bg-accentPrimary/15',
      pos: 'top-10 -left-6 sm:left-2',
      delay: 0.3,
    },
    {
      name: 'Apple HIG Design',
      desc: 'Fluid & Intuitive',
      icon: Sparkles,
      color: 'text-[#7B61FF]',
      bgColor: 'bg-[#7B61FF]/15',
      pos: 'top-28 -left-12 sm:-left-6',
      delay: 0.4,
    },
    {
      name: 'TypeScript',
      desc: 'Type Safety',
      icon: Cpu,
      color: 'text-[#3AAFA9]',
      bgColor: 'bg-[#3AAFA9]/15',
      pos: 'top-48 -left-8 sm:left-4',
      delay: 0.5,
    },
    {
      name: 'Next.js',
      desc: 'App Architecture',
      icon: Globe,
      color: 'text-textPrimary',
      bgColor: 'bg-slate-900/10',
      pos: 'bottom-48 -left-12 sm:-left-4',
      delay: 0.6,
    },
    {
      name: 'Tailwind CSS',
      desc: 'Liquid Styling',
      icon: Palette,
      color: 'text-accentSecondary',
      bgColor: 'bg-accentSecondary/15',
      pos: 'bottom-28 -left-6 sm:left-6',
      delay: 0.7,
    },
    {
      name: 'Framer Motion & Vite',
      desc: 'Liquid Transitions',
      icon: Zap,
      color: 'text-accentPrimary',
      bgColor: 'bg-accentPrimary/15',
      pos: 'bottom-10 -left-10 sm:-left-2',
      delay: 0.8,
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-between pl-6 sm:pl-10 lg:pl-16 pr-0 pt-[106px] pb-0 relative overflow-hidden bg-bgMain"
    >
      {/* Interactive Constellation / Particle Canvas Background */}
      <ParticleCanvas />

      {/* Ambient Liquid Glass Lighting Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/12 w-[32rem] h-[32rem] bg-accentPrimary/15 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/3 right-1/12 w-[36rem] h-[36rem] bg-[#7B61FF]/15 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-10 left-1/3 w-[28rem] h-[28rem] bg-accentSecondary/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Main Fluid Hero Content Container */}
      <div className="w-full relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[calc(100vh-106px)]">
        
        {/* Left Side: Typography & Copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left pr-6 sm:pr-10 py-10"
        >
          {/* Apple HIG-style Liquid Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/90 shadow-[0_2px_12px_rgba(0,0,0,0.04)] mb-6 hover:shadow-md transition-all">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accentPrimary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accentPrimary"></span>
            </span>
            <span className="text-xs font-semibold text-textPrimary tracking-wide">
              Ahmed Elazap • Front-End & Web-App Developer
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading font-extrabold tracking-tight text-textPrimary leading-[1.1] mb-6">
            Building Fluid,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentPrimary via-[#3AAFA9] to-[#7B61FF]">
              Liquid Glass
            </span>{' '}
            Web Experiences.
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-textSecondary font-normal leading-relaxed mb-8 max-w-2xl">
            Passionate Front-End & Web-App Developer crafting human-centered, responsive, and high-performance digital products with Apple HIG aesthetics, crisp animations, and modern architectures.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <a
              href="#projects"
              className="group px-7 py-3.5 rounded-2xl bg-gradient-to-r from-accentPrimary to-[#258c85] text-white font-semibold shadow-[0_6px_20px_rgba(45,168,160,0.35)] hover:shadow-[0_10px_25px_rgba(45,168,160,0.45)] hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            >
              Explore Projects
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/90 text-textPrimary font-semibold shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-lg hover:border-accentPrimary/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>

        </motion.div>

        {/* Right Side: Full Height Avatar with Floating Liquid Glass Tech Tags */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex justify-end items-end w-full h-[65vh] lg:h-[calc(100vh-106px)] self-end"
        >
          {/* Avatar Image (Exact 10px gap below navbar, full height to bottom edge, zero underlap) */}
          <div className="relative flex justify-end items-end w-full h-full">
            <img
              src="/assets/hero-avatar.png"
              alt="Ahmed Elazap - Full Body Portrait"
              className="h-full max-h-[calc(100vh-106px)] w-auto max-w-full object-contain object-right-bottom drop-shadow-[0_15px_35px_rgba(0,0,0,0.14)] transition-transform duration-500 hover:scale-[1.01]"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />

            {/* Floating Liquid Glass Core Tech Tags */}
            {floatingTags.map((tag) => {
              const Icon = tag.icon;
              return (
                <motion.div
                  key={tag.name}
                  initial={{ y: 15, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ delay: tag.delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`absolute ${tag.pos} px-3.5 sm:px-4 py-2 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/90 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center gap-2.5 z-20 hover:scale-105 hover:shadow-[0_12px_28px_rgba(45,168,160,0.2)] transition-all cursor-default group`}
                >
                  <div className={`p-1.5 rounded-xl ${tag.bgColor} ${tag.color} transition-transform group-hover:scale-110`}>
                    <Icon size={16} />
                  </div>
                  <div className="flex flex-col text-left">
                    <p className="text-[11px] font-bold text-textPrimary leading-none">{tag.name}</p>
                    <p className="text-[9px] font-medium text-textSecondary mt-0.5">{tag.desc}</p>
                  </div>
                </motion.div>
              );
            })}

          </div>
        </motion.div>

      </div>
    </section>
  );
}
