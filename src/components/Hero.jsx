import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Zap, Cpu, Globe, Palette, Activity } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';

/**
 * Hero Component
 * Full-viewport intro section engineered with Apple HIG aesthetics:
 * - Interactive particle constellation canvas background
 * - Glowing frosted glass ambient backdrop orbs
 * - Bold headline and copy optimized for production-grade web application development
 * - Uncropped, high-resolution full-body portrait grounded to the bottom edge
 * - Floating frosted glass technology tags positioned harmoniously around the avatar
 */
export default function Hero() {
  // Configuration of floating liquid glass tech badges with custom icons, colors, and coordinates
  const floatingTags = [
    {
      name: 'React 19',
      desc: 'Frontend Core',
      icon: Code2,
      color: 'text-accentPrimary',
      bgColor: 'bg-accentPrimary/15',
      pos: 'top-10 -left-6 sm:-left-10 md:-left-14 lg:-left-20',
      delay: 0.2,
    },
    {
      name: 'Real-Time State',
      desc: 'WebSockets & Zustand',
      icon: Activity,
      color: 'text-success',
      bgColor: 'bg-success/15',
      pos: 'top-4 right-0 md:right-4 lg:right-8',
      delay: 0.35,
    },
    {
      name: 'TypeScript',
      desc: 'Type Safety',
      icon: Cpu,
      color: 'text-[#3AAFA9]',
      bgColor: 'bg-[#3AAFA9]/15',
      pos: 'top-32 -left-4 sm:-left-8 md:-left-10 lg:-left-16',
      delay: 0.3,
    },
    {
      name: 'Apple HIG Design',
      desc: 'Fluid & Intuitive',
      icon: Sparkles,
      color: 'text-[#7B61FF]',
      bgColor: 'bg-[#7B61FF]/15',
      pos: 'bottom-40 -left-6 sm:-left-10 md:-left-12 lg:-left-20',
      delay: 0.45,
    },
    {
      name: 'Tailwind CSS',
      desc: 'Liquid Glass',
      icon: Palette,
      color: 'text-accentSecondary',
      bgColor: 'bg-accentSecondary/15',
      pos: 'bottom-20 -left-4 sm:-left-8 md:-left-8 lg:-left-14',
      delay: 0.6,
    },
    {
      name: 'Framer Motion & Vite',
      desc: 'Zero-Lag Motion',
      icon: Zap,
      color: 'text-accentPrimary',
      bgColor: 'bg-accentPrimary/15',
      pos: 'bottom-8 right-0 md:right-4 lg:right-8',
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

      {/* Ambient Liquid Glass Lighting Orbs for Specular Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/12 w-[24rem] sm:w-[32rem] h-[24rem] sm:h-[32rem] bg-accentPrimary/15 rounded-full blur-[100px] sm:blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/3 right-1/12 w-[26rem] sm:w-[36rem] h-[26rem] sm:h-[36rem] bg-[#7B61FF]/15 rounded-full blur-[110px] sm:blur-[140px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-10 left-1/3 w-[20rem] sm:w-[28rem] h-[20rem] sm:h-[28rem] bg-accentSecondary/10 rounded-full blur-[90px]"></div>
      </div>

      {/* Main Responsive Grid Layout (Unified for Mobile, Tablet, & Desktop) */}
      <div className="w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-6 lg:gap-4 items-center flex-1 min-h-[calc(100vh-106px)]">
        
        {/* Left Column: Headline, Bio & Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7 flex flex-col items-start text-left pt-4 sm:pt-6 pb-2 md:py-10 pr-0 md:pr-4 lg:pr-10 z-10"
        >
          {/* Mobile Role Badge */}
          <div className="flex md:hidden items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-white/90 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-accentPrimary animate-ping"></span>
            <span className="text-[11px] font-bold text-textPrimary">Frontend & Web-App Dev</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold tracking-tight text-textPrimary leading-[1.1] mb-4 sm:mb-6">
            Engineering Real-Time,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentPrimary via-[#3AAFA9] to-[#7B61FF]">
              Liquid Glass
            </span>{' '}
            Web Applications.
          </h1>

          {/* Subtitle / Bio Overview */}
          <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl text-textSecondary font-normal leading-relaxed mb-6 sm:mb-8 max-w-2xl">
            Architecting production-grade, high-throughput digital experiences with sub-millisecond responsiveness, Apple HIG precision, and robust frontend distributed ecosystems.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 items-center w-full sm:w-auto">
            {/* Primary Project CTA */}
            <a
              href="#projects"
              className="group px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl bg-gradient-to-r from-accentPrimary to-[#258c85] text-white font-semibold shadow-[0_6px_20px_rgba(45,168,160,0.35)] hover:shadow-[0_10px_25px_rgba(45,168,160,0.45)] hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base flex-1 sm:flex-none text-center"
            >
              Explore Projects
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </a>
            
            {/* Secondary Contact CTA */}
            <a
              href="#contact"
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/90 text-textPrimary font-semibold shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-lg hover:border-accentPrimary/40 hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base flex-1 sm:flex-none text-center"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile-Friendly Tech Stack Ribbon */}
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

        {/* Right Column: Full-Height Portrait with Floating Liquid Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 relative flex justify-center md:justify-end items-end w-full h-[65vh] sm:h-[72vh] min-h-[440px] sm:min-h-[520px] md:h-[65vh] lg:h-[calc(100vh-106px)] self-end mt-2 md:mt-0"
        >
          {/* Floating Distributed Badges (Visible on Tablet & Desktop) */}
          <div className="absolute inset-0 pointer-events-none z-20 overflow-visible hidden md:block">
            {floatingTags.map((tag) => {
              const Icon = tag.icon;
              return (
                <motion.div
                  key={tag.name}
                  initial={{ y: 15, opacity: 0, scale: 0.85 }}
                  animate={{ y: [0, -5, 0], opacity: 1, scale: 1 }}
                  transition={{
                    opacity: { delay: tag.delay, duration: 0.5 },
                    scale: { delay: tag.delay, duration: 0.5 },
                    y: { repeat: Infinity, duration: 4 + tag.delay * 2, ease: 'easeInOut' }
                  }}
                  className={`absolute ${tag.pos} pointer-events-auto px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/90 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center gap-2 hover:scale-105 hover:shadow-[0_12px_28px_rgba(45,168,160,0.25)] transition-all cursor-default group whitespace-nowrap`}
                >
                  <div className={`p-1.5 rounded-xl ${tag.bgColor} ${tag.color} transition-transform group-hover:scale-110`}>
                    <Icon size={15} />
                  </div>
                  <div className="flex flex-col text-left">
                    <p className="text-[11px] font-bold text-textPrimary leading-none">{tag.name}</p>
                    <p className="text-[9px] font-medium text-textSecondary mt-0.5">{tag.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Uncropped Avatar Image Grounded Directly to the Bottom Border */}
          <div className="relative flex justify-center md:justify-end items-end w-full h-full z-10">
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
