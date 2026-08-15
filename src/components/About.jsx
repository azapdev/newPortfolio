import React from 'react';

export default function About() {
  const stats = [
    { label: "Apps Built", value: "10+" },
    { label: "Dental Year", value: "3rd" },
    { label: "Projects", value: "25+" },
    { label: "Status", value: "Always Learning" }
  ];

  return (
    <section id="about" className="py-24 bg-bgAlt px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 text-textPrimary">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-borderLight">
            <h3 className="text-2xl font-semibold mb-4 text-accentPrimary">Bridging Healthcare & Tech</h3>
            <p className="text-textSecondary mb-6 leading-relaxed">
              As a dental student by day and a self-taught mobile app developer by night, I find joy in solving complex problems. Whether it's diagnosing oral pathologies or debugging Kotlin code, my goal is always to improve lives and craft seamless experiences.
            </p>
            <p className="text-textSecondary leading-relaxed">
              I specialize in mobile development with native Android and Flutter, constantly exploring how technology can intersect with healthcare to create meaningful digital products.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-borderLight flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                <span className="text-3xl font-bold text-textPrimary mb-2">{stat.value}</span>
                <span className="text-sm font-medium text-textSecondary">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
