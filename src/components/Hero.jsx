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
      pos: 'top-6 left-6 lg:left-12',
      delay: 0.2,
    },
    {
      name: 'Real-Time State',
      desc: 'WebSockets & Zustand',
      icon: Activity,
      color: 'text-success',
      bgColor: 'bg-success/15',
      pos: 'top-20 right-8 lg:right-72',
      delay: 0.35,
    },
    {
      name: 'Apple HIG Design',
      desc: 'Fluid & Intuitive',
      icon: Sparkles,
      color: 'text-[#7B61FF]',
      bgColor: 'bg-[#7B61FF]/15',
      pos: 'bottom-20 left-6 lg:left-16',
      delay: 0.45,
    },
    {
      name: 'TypeScript',
      desc: 'Type Safety',
      icon: Cpu,
      color: 'text-[#3AAFA9]',
      bgColor: 'bg-[#3AAFA9]/15',
      pos: 'top-10 right-4 lg:right-16',
      delay: 0.3,
    },
    {
      name: 'Next.js & SSR',
      desc: 'Production Grade',
      icon: Globe,
      color: 'text-textPrimary',
      bgColor: 'bg-slate-900/10',
      pos: 'top-1/3 right-1/4 lg:right-80',
      delay: 0.5,
    },
    {
      name: 'Tailwind CSS',
      desc: 'Liquid Glass',
      icon: Palette,
      color: 'text-accentSecondary',
      bgColor: 'bg-accentSecondary/15',
      pos: 'bottom-40 right-10 lg:right-64',
      delay: 0.6,
    },
    {
      name: 'Framer Motion & Vite',
      desc: 'Zero-Lag Motion',
      icon: Zap,
      color: 'text-accentPrimary',
      bgColor: 'bg-accentPrimary/15',
      pos: 'bottom-10 right-8 lg:right-24',
      delay: 0.7,
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

      {/* Floating Distributed Liquid Glass Badges across Hero Atmosphere */}
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
              className={`absolute ${tag.pos} pointer-events-auto px-3.5 sm:px-4 py-2 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/90 shadow-[0_8px_24px_rgba(0,0,0,0.07)] flex items-center gap-2.5 hover:scale-105 hover:shadow-[0_12px_28px_rgba(45,168,160,0.25)] transition-all cursor-default group`}
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

      {/* Main Fluid Hero Content Container */}
      <div className="w-full relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[calc(100vh-106px)]">
        
        {/* Left Side: Production-Grade Typography & Copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left pr-6 sm:pr-10 py-12"
        >
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading font-extrabold tracking-tight text-textPrimary leading-[1.08] mb-6">
            Engineering Real-Time,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentPrimary via-[#3AAFA9] to-[#7B61FF]">
              Liquid Glass
            </span>{' '}
            Web Applications.
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-textSecondary font-normal leading-relaxed mb-8 max-w-2xl">
            Architecting production-grade, high-throughput digital experiences with sub-millisecond responsiveness, Apple HIG precision, and robust frontend distributed ecosystems.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 items-center">
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

        {/* Right Side: Full Height Avatar Sticking to Right Border */}
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
          </div>
        </motion.div>

      </div>
    </section>
  );
}
