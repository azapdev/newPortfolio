import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-bgMain px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-borderLight grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-4 text-textPrimary">Let's Talk</h2>
            <p className="text-textSecondary mb-8">Looking for a developer, or just want to chat about dentistry? Send me a message.</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 text-success font-medium rounded-full text-sm">
              <span className="w-2 h-2 rounded-full bg-success"></span> Available for opportunities
            </div>
          </div>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name" className="px-4 py-3 rounded-xl border border-borderLight bg-bgAlt focus:outline-none focus:border-accentPrimary focus:ring-1 focus:ring-accentPrimary transition-all" />
            <input type="email" placeholder="Email" className="px-4 py-3 rounded-xl border border-borderLight bg-bgAlt focus:outline-none focus:border-accentPrimary focus:ring-1 focus:ring-accentPrimary transition-all" />
            <textarea placeholder="Message" rows="4" className="px-4 py-3 rounded-xl border border-borderLight bg-bgAlt focus:outline-none focus:border-accentPrimary focus:ring-1 focus:ring-accentPrimary transition-all resize-none"></textarea>
            <button type="submit" className="py-3 px-6 bg-accentPrimary hover:bg-[#258c85] text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all text-center">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
