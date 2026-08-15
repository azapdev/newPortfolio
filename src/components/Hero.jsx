import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center px-4 py-20 relative overflow-hidden bg-bgMain">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3AAFA9]/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7B61FF]/15 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-2 rounded-full bg-accentPrimary/10 text-accentPrimary font-semibold mb-6">
            👋 Hi, I'm Mohamed
          </span>
          <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight mb-6 text-textPrimary">
            Dental Student & <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3AAFA9] to-[#7B61FF]">App Developer</span>
          </h1>
          <p className="text-lg text-textSecondary mb-8 max-w-lg">
            Building healthier smiles in the clinic and better digital experiences in the code editor. Passionate about merging healthcare and technology.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="px-6 py-3 rounded-full bg-accentPrimary text-white font-medium hover:bg-[#258c85] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              View My Work
            </a>
            <a href="/resume.pdf" className="px-6 py-3 rounded-full border-2 border-borderLight text-textPrimary font-medium hover:border-accentPrimary hover:text-accentPrimary transition-all">
              Download Resume
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl relative z-10">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
              [Photo Placeholder]
            </div>
          </div>
          <div className="absolute -right-6 top-10 bg-white p-3 rounded-xl shadow-xl z-20 flex items-center gap-2">
            <span className="text-xl">🎓</span>
            <span className="font-semibold text-sm">Dental Student</span>
          </div>
          <div className="absolute -left-6 bottom-10 bg-white p-3 rounded-xl shadow-xl z-20 flex items-center gap-2">
            <span className="text-xl">💻</span>
            <span className="font-semibold text-sm">App Developer</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
