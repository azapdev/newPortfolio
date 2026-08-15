import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('tech');

  const techSkills = [
    { name: 'Kotlin', category: 'Language' },
    { name: 'Java', category: 'Language' },
    { name: 'Flutter', category: 'Framework' },
    { name: 'React', category: 'Framework' },
    { name: 'Android Studio', category: 'Tool' },
    { name: 'Git', category: 'Tool' },
  ];

  const dentalSkills = [
    { name: 'Oral Pathology', category: 'Academic' },
    { name: 'Restorative Dentistry', category: 'Clinical' },
    { name: 'Radiography', category: 'Clinical' },
    { name: 'Patient Care', category: 'Soft Skill' },
  ];

  return (
    <section id="skills" className="py-24 bg-bgMain px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-10 text-textPrimary">My Expertise</h2>
        
        <div className="flex justify-center mb-12">
          <div className="bg-bgAlt p-1 rounded-full flex gap-2 border border-borderLight">
            <button 
              onClick={() => setActiveTab('tech')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${activeTab === 'tech' ? 'bg-white text-accentPrimary shadow-sm' : 'text-textSecondary hover:text-textPrimary'}`}
            >
              💻 Tech Skills
            </button>
            <button 
              onClick={() => setActiveTab('dental')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${activeTab === 'dental' ? 'bg-white text-accentPrimary shadow-sm' : 'text-textSecondary hover:text-textPrimary'}`}
            >
              🦷 Dental Focus
            </button>
          </div>
        </div>

        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            {activeTab === 'tech' ? (
              <motion.div key="tech" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {techSkills.map((skill, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-borderLight shadow-sm hover:border-accentPrimary transition-colors flex flex-col items-center justify-center gap-2">
                    <span className="font-semibold text-textPrimary">{skill.name}</span>
                    <span className="text-xs text-textSecondary bg-bgAlt px-2 py-1 rounded-md">{skill.category}</span>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div key="dental" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {dentalSkills.map((skill, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-borderLight shadow-sm hover:border-accentSecondary transition-colors flex flex-col items-center justify-center gap-2">
                    <span className="font-semibold text-textPrimary">{skill.name}</span>
                    <span className="text-xs text-textSecondary bg-bgAlt px-2 py-1 rounded-md">{skill.category}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
