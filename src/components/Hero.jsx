import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Zap, Cpu, Globe, Palette, Activity } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';

export default function Hero() {
  const floatingTags = [
    {
      name: 'React 19',
      desc: 'Frontend Core',
      icon: Code2,
      color: 'text-accentPrimary',
      bgColor: 'bg-accentPrimary/15',
      pos: 'top-6 left-6 lg:left-12 hidden md:flex',
      delay: 0.2,
    },
    {
      name: 'Real-Time State',
      desc: 'WebSockets & Zustand',
      icon: Activity,
      color: 'text-success',
      bgColor: 'bg-success/15',
      pos: 'top-16 right-6 md:right-12 lg:right-72 hidden md:flex',
      delay: 0.35,
    },
    {
      name: 'Apple HIG Design',
      desc: 'Fluid & Intuitive',
      icon: Sparkles,
      color: 'text-[#7B61FF]',
      bgColor: 'bg-[#7B61FF]/15',
      pos: 'bottom-24 left-6 lg:left-16 hidden lg:flex',
      delay: 0.45,
    },
    {
      name: 'TypeScript',
      desc: 'Type Safety',
      icon: Cpu,
      color: 'text-[#3AAFA9]',
      bgColor: 'bg-[#3AAFA9]/15',
      pos: 'top-8 right-4 lg:right-16 hidden lg:flex',
      delay: 0.3,
    },
    {
      name: 'Next.js & SSR',
      desc: 'Production Grade',
      icon: Globe,
      color: 'text-textPrimary',
      bgColor: 'bg-slate-900/10',
      pos: 'top-1/3 right-1/4 lg:right-80 hidden xl:flex',
      delay: 0.5,
    },
    {
      name: 'Tailwind CSS',
      desc: 'Liquid Glass',
      icon: Palette,
      color: 'text-accentSecondary',
      bgColor: 'bg-accentSecondary/15',
      pos: 'bottom-36 right-6 lg:right-64 hidden md:flex',
      delay: 0.6,
    },
    {
      name: 'Framer Motion & Vite',
      desc: 'Zero-Lag Motion',
      icon: Zap,
      color: 'text-accentPrimary',
      bgColor: 'bg-accentPrimary/15',
      pos: 'bottom-12 right-6 lg:right-24 hidden md:flex',
      delay: 0.7,
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col justify-between px-6 sm:px-10 lg:pl-16 lg:pr-0 pt-[106px] pb-0 relative overflow-hidden bg-bgMain"
    >
      {/* Interactive Constellation / Particle Canvas Background */}
      <ParticleCanvas />

      {/* Ambient Liquid Glass Lighting Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/12 w-[24rem] sm:w-[32rem] h-[24rem] sm:h-[32rem] bg-accentPrimary/15 rounded-full blur-[100px] sm:blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/3 right-1/12 w-[26rem] sm:w-[36rem] h-[26rem] sm:h-[36rem] bg-[#7B61FF]/15 rounded-full blur-[110px] sm:blur-[140px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-10 left-1/3 w-[20rem] sm:w-[28rem] h-[20rem] sm:h-[28rem] bg-accentSecondary/10 rounded-full blur-[90px]"></div>
      </div>

      {/* Floating Distributed Liquid Glass Badges (Visible on tablet & desktop) */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        {floatingTags.map((tag) => {
          const Icon = tag.icon;
          return (
            <motion.div
              key={tag.name}
              initial={{ y: 20, opacity: 0, scale: 0.85 }}
              animate={{ y: [0, -6, 0], opacity: 1, scale: 1 }}
              transition={{
                opacity: { delay: tag.delay, duration: 0.6 },
                scale: { delay: tag.delay, duration: 0.6 },
                y: { repeat: Infinity, duration: 4 + tag.delay * 2, ease: 'easeInOut' }
              }}
              className={`absolute ${tag.pos} pointer-events-auto px-3.5 sm:px-4 py-2 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/90 shadow-[0_8px_24px_rgba(0,0,0,0.07)] items-center gap-2.5 hover:scale-105 hover:shadow-[0_12px_28px_rgba(45,168,160,0.25)] transition-all cursor-default group`}
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

      {/* Main Responsive Grid Layout (Unified for Mobile, Tablet, & Desktop) */}
      <div className="w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-6 lg:gap-4 items-center flex-1 min-h-[calc(100vh-106px)]">
        
        {/* Text & Copy Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7 flex flex-col items-start text-left pt-4 sm:pt-6 pb-2 md:py-10 pr-0 md:pr-4 lg:pr-10"
        >
          {/* Subtle Mobile Tech Indicator */}
          <div className="flex md:hidden items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-white/90 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-accentPrimary animate-ping"></span>
            <span className="text-[11px] font-bold text-textPrimary">Frontend & Web-App Dev</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold tracking-tight text-textPrimary leading-[1.1] mb-4 sm:mb-6">
            Engineering Real-Time,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentPrimary via-[#3AAFA9] to-[#7B61FF]">
              Liquid Glass
            </span>{' '}
            Web Applications.
          </h1>

          <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl text-textSecondary font-normal leading-relaxed mb-6 sm:mb-8 max-w-2xl">
            Architecting production-grade, high-throughput digital experiences with sub-millisecond responsiveness, Apple HIG precision, and robust frontend distributed ecosystems.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3 sm:gap-4 items-center w-full sm:w-auto">
            <a
              href="#projects"
              className="group px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl bg-gradient-to-r from-accentPrimary to-[#258c85] text-white font-semibold shadow-[0_6px_20px_rgba(45,168,160,0.35)] hover:shadow-[0_10px_25px_rgba(45,168,160,0.45)] hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base flex-1 sm:flex-none text-center"
            >
              Explore Projects
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </a>
            
            <a
              href="#contact"
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/90 text-textPrimary font-semibold shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-lg hover:border-accentPrimary/40 hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base flex-1 sm:flex-none text-center"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile-Friendly Horizontal Tech Stack Badges */}
          <div className="flex md:hidden flex-wrap items-center gap-2 mt-5 pt-3 border-t border-borderLight/60 w-full">
            {['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite'].map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-semibold px-2.5 py-1 rounded-xl bg-white/80 backdrop-blur-md border border-white/90 text-textPrimary shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Avatar Column (Significantly Enlarged for Mobile & Tablet) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 relative flex justify-center md:justify-end items-end w-full h-[65vh] sm:h-[72vh] min-h-[440px] sm:min-h-[520px] md:h-[65vh] lg:h-[calc(100vh-106px)] self-end mt-2 md:mt-0"
        >
          {/* Avatar Image (Bold, prominent presence on mobile with natural aspect ratio grounded to bottom) */}
          <div className="relative flex justify-center md:justify-end items-end w-full h-full">
            <img
              src="/assets/hero-avatar.png"
              alt="Ahmed Elazap - Full Body Portrait"
              className="h-full max-h-[65vh] sm:max-h-[72vh] min-h-[420px] sm:min-h-[500px] md:max-h-[65vh] lg:max-h-[calc(100vh-106px)] w-auto max-w-none object-contain object-bottom md:object-right-bottom drop-shadow-[0_15px_35px_rgba(0,0,0,0.14)] transition-transform duration-500 hover:scale-[1.01]"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
