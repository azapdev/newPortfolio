import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-28 bg-bgMain relative overflow-hidden">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        
        {/* Main Fluid Glass Container */}
        <div className="bg-white/85 backdrop-blur-2xl rounded-[2.5rem] p-8 sm:p-14 lg:p-16 border border-white/90 shadow-[0_12px_40px_rgba(0,0,0,0.04)] grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accentPrimary/10 text-accentPrimary font-semibold text-xs uppercase tracking-wider mb-4">
                <Sparkles size={14} />
                Get In Touch
              </div>
              <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-textPrimary tracking-tight mb-4">
                Let's Build Something Exceptional
              </h2>
              <p className="text-textSecondary text-base sm:text-lg leading-relaxed mb-8">
                Have a web app project in mind, an engineering role, or a design system challenge? I am always open to discussing new opportunities and ambitious ideas.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-bgAlt/80 border border-borderLight/60">
                <div className="p-3 rounded-xl bg-accentPrimary/10 text-accentPrimary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-textSecondary uppercase">Direct Email</p>
                  <a href="mailto:ahmedelazap@example.com" className="text-sm font-bold text-textPrimary hover:text-accentPrimary transition-colors">
                    ahmedelazap@example.com
                  </a>
                </div>
              </div>

              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-success/10 text-success font-semibold rounded-2xl text-xs sm:text-sm border border-success/20">
                <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse"></span>
                <span>Available for Full-Time & Contract Roles</span>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-bgAlt/60 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/80 shadow-inner">
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-full bg-success/15 text-success flex items-center justify-center mb-4">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="text-2xl font-heading font-bold text-textPrimary mb-2">Message Sent!</h4>
                <p className="text-textSecondary text-sm max-w-sm">
                  Thank you for reaching out, Ahmed will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-textPrimary uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-5 py-3.5 rounded-2xl border border-borderLight bg-white/90 text-textPrimary placeholder:text-textSecondary/60 focus:outline-none focus:border-accentPrimary focus:ring-2 focus:ring-accentPrimary/20 transition-all font-medium text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold text-textPrimary uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sarah@company.com"
                    className="w-full px-5 py-3.5 rounded-2xl border border-borderLight bg-white/90 text-textPrimary placeholder:text-textSecondary/60 focus:outline-none focus:border-accentPrimary focus:ring-2 focus:ring-accentPrimary/20 transition-all font-medium text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-textPrimary uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your web app vision or project requirements..."
                    className="w-full px-5 py-3.5 rounded-2xl border border-borderLight bg-white/90 text-textPrimary placeholder:text-textSecondary/60 focus:outline-none focus:border-accentPrimary focus:ring-2 focus:ring-accentPrimary/20 transition-all font-medium text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-gradient-to-r from-accentPrimary via-[#3AAFA9] to-[#258c85] hover:opacity-95 text-white rounded-2xl font-bold shadow-[0_8px_24px_rgba(45,168,160,0.35)] hover:shadow-[0_12px_28px_rgba(45,168,160,0.45)] hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 text-sm"
                >
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
