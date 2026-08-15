import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center px-6 sm:px-10 lg:px-16 pt-24 pb-16 relative overflow-hidden bg-bgMain"
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
      <div className="w-full relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Side: Typography & Copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Apple HIG-style Liquid Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-white/90 shadow-[0_2px_12px_rgba(0,0,0,0.04)] mb-6 hover:shadow-md transition-all">
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
          <div className="flex flex-wrap gap-4 items-center mb-10">
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

          {/* Key Tech Stack Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-borderLight/60 w-full max-w-xl">
            <span className="text-xs font-semibold text-textSecondary uppercase tracking-wider mr-2">
              Core Tech:
            </span>
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'].map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium px-3 py-1 rounded-lg bg-white/70 backdrop-blur-md border border-white/80 text-textPrimary shadow-[0_1px_4px_rgba(0,0,0,0.02)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Natural Full-Body Presentation with Organic Ambient Glow & Floating Liquid Badges */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex justify-center items-end"
        >
          {/* Ambient Glow Aura Behind Full Body */}
          <div className="absolute inset-0 max-w-sm mx-auto bg-gradient-to-t from-accentPrimary/25 via-[#7B61FF]/20 to-transparent rounded-full blur-3xl pointer-events-none transform -translate-y-6"></div>

          {/* Full Body Image (Uncropped, Natural Aspect Ratio, Sitting Back on the Side) */}
          <div className="relative z-10 flex flex-col items-center group">
            
            <img
              src="/assets/hero-avatar.png"
              alt="Ahmed Elazap - Full Body Portrait"
              className="max-h-[72vh] sm:max-h-[78vh] w-auto max-w-full object-contain drop-shadow-[0_20px_35px_rgba(31,36,48,0.18)] transition-transform duration-700 group-hover:scale-[1.02]"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />

            {/* Subtle Liquid Glass Floor Reflection / Stand */}
            <div className="w-3/4 h-4 bg-gradient-to-r from-transparent via-accentPrimary/20 to-transparent rounded-full blur-sm -mt-3"></div>

            {/* Floating Liquid Glass Badge Top Right */}
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute top-10 -right-4 sm:-right-6 px-4 py-2.5 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/90 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center gap-2.5 z-20 hover:scale-105 transition-transform"
            >
              <div className="p-1.5 rounded-xl bg-accentPrimary/15 text-accentPrimary">
                <Code2 size={18} />
              </div>
              <div>
                <p className="text-[11px] font-bold text-textPrimary leading-none">Web-App Architect</p>
                <p className="text-[9px] font-medium text-textSecondary mt-0.5">High Performance</p>
              </div>
            </motion.div>

            {/* Floating Liquid Glass Badge Bottom Left */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-16 -left-4 sm:-left-6 px-4 py-2.5 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/90 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center gap-2.5 z-20 hover:scale-105 transition-transform"
            >
              <div className="p-1.5 rounded-xl bg-[#7B61FF]/15 text-[#7B61FF]">
                <Sparkles size={18} />
              </div>
              <div>
                <p className="text-[11px] font-bold text-textPrimary leading-none">Apple HIG Design</p>
                <p className="text-[9px] font-medium text-textSecondary mt-0.5">Fluid & Intuitive</p>
              </div>
            </motion.div>

            {/* Floating Live Badge Bottom Right */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="hidden sm:flex absolute bottom-6 right-2 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-xl border border-white shadow-lg items-center gap-2 z-20"
            >
              <CheckCircle2 size={14} className="text-success" />
              <span className="text-[11px] font-mono font-semibold text-textPrimary">
                Full-Stack Ready
              </span>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
