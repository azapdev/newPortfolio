import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, Sparkles } from 'lucide-react';

/**
 * Contact Component
 * Direct communication channel with Apple-inspired floating label inputs:
 * - Direct email and Phone/WhatsApp cards
 * - Modern inputs with floating margin labels (peer pseudo-selectors)
 * - Animated form submission confirmation state with auto-reset
 */
export default function Contact() {
  // Form submission success state
  const [submitted, setSubmitted] = useState(false);

  // Controlled form state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  /**
   * Handles contact form submission with instant feedback
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Reset after 4 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-28 bg-bgMain relative overflow-hidden">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        
        {/* Main Fluid Glass Card Container */}
        <div className="bg-white/85 backdrop-blur-2xl rounded-[2.5rem] p-8 sm:p-14 lg:p-16 border border-white/90 shadow-[0_12px_40px_rgba(0,0,0,0.04)] grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Contact Channels & Context */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
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

            {/* Direct Contact Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {/* Direct Email Card */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-bgAlt/80 border border-borderLight/60 hover:border-accentPrimary/40 transition-colors">
                <div className="p-3 rounded-xl bg-accentPrimary/10 text-accentPrimary flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-textSecondary uppercase tracking-wider">Direct Email</p>
                  <a href="mailto:ahmedelazap@example.com" className="text-sm font-bold text-textPrimary hover:text-accentPrimary transition-colors">
                    ahmedelazap@example.com
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp Card */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-bgAlt/80 border border-borderLight/60 hover:border-accentPrimary/40 transition-colors">
                <div className="p-3 rounded-xl bg-[#7B61FF]/10 text-[#7B61FF] flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-textSecondary uppercase tracking-wider">Phone & WhatsApp</p>
                  <a href="tel:+201000000000" className="text-sm font-bold text-textPrimary hover:text-accentPrimary transition-colors">
                    +20 100 000 0000
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form with Floating Margin Labels */}
          <div className="lg:col-span-7 bg-bgAlt/60 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/80 shadow-inner">
            {submitted ? (
              // Success Feedback Screen
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
              // Contact Form
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {/* Floating Label Input: Name */}
                <div className="relative">
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder=" "
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="peer w-full px-5 pt-6 pb-2 rounded-2xl border border-borderLight bg-white/95 text-textPrimary placeholder-transparent focus:outline-none focus:border-accentPrimary focus:ring-2 focus:ring-accentPrimary/20 transition-all font-medium text-sm"
                  />
                  <label
                    htmlFor="contact-name"
                    className="absolute left-5 top-4 text-xs font-semibold text-textSecondary uppercase tracking-wider transition-all duration-200 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-textSecondary/60 peer-placeholder-shown:normal-case peer-placeholder-shown:font-medium peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-accentPrimary peer-focus:uppercase peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:text-accentPrimary peer-[:not(:placeholder-shown)]:uppercase"
                  >
                    Your Name
                  </label>
                </div>

                {/* Floating Label Input: Email */}
                <div className="relative">
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder=" "
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="peer w-full px-5 pt-6 pb-2 rounded-2xl border border-borderLight bg-white/95 text-textPrimary placeholder-transparent focus:outline-none focus:border-accentPrimary focus:ring-2 focus:ring-accentPrimary/20 transition-all font-medium text-sm"
                  />
                  <label
                    htmlFor="contact-email"
                    className="absolute left-5 top-4 text-xs font-semibold text-textSecondary uppercase tracking-wider transition-all duration-200 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-textSecondary/60 peer-placeholder-shown:normal-case peer-placeholder-shown:font-medium peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-accentPrimary peer-focus:uppercase peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:text-accentPrimary peer-[:not(:placeholder-shown)]:uppercase"
                  >
                    Email Address
                  </label>
                </div>

                {/* Floating Label Textarea: Message */}
                <div className="relative">
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    required
                    placeholder=" "
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="peer w-full px-5 pt-6 pb-2 rounded-2xl border border-borderLight bg-white/95 text-textPrimary placeholder-transparent focus:outline-none focus:border-accentPrimary focus:ring-2 focus:ring-accentPrimary/20 transition-all font-medium text-sm resize-none"
                  ></textarea>
                  <label
                    htmlFor="contact-message"
                    className="absolute left-5 top-4 text-xs font-semibold text-textSecondary uppercase tracking-wider transition-all duration-200 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-textSecondary/60 peer-placeholder-shown:normal-case peer-placeholder-shown:font-medium peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-accentPrimary peer-focus:uppercase peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:text-accentPrimary peer-[:not(:placeholder-shown)]:uppercase"
                  >
                    Your Message / Project Details
                  </label>
                </div>

                {/* Submit Action Button */}
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
