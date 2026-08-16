import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Mail, Phone, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../assets/reuseablComponents/Input";
import { sendMessageSchema } from "../../schema/sendMessageSchema";

/**
 * Contact Component
 * Direct communication channel with Apple-inspired floating label inputs
 */
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  // React Hook Form Setup
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(sendMessageSchema),
  });

  const onSubmit = (data) => {
    console.log("Form submitted successfully:", data);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 2000);
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
                Have a web app project in mind, an engineering role, or a design
                system challenge? I am always open to discussing new
                opportunities and ambitious ideas.
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
                  <p className="text-xs font-semibold text-textSecondary uppercase tracking-wider">
                    Direct Email
                  </p>
                  <a
                    href="mailto:a7mad3zap@gmail.com"
                    className="text-sm font-bold text-textPrimary hover:text-accentPrimary transition-colors"
                  >
                    a7mad3zap@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp Card */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-bgAlt/80 border border-borderLight/60 hover:border-accentPrimary/40 transition-colors">
                <div className="p-3 rounded-xl bg-[#7B61FF]/10 text-[#7B61FF] flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-textSecondary uppercase tracking-wider">
                    Phone & WhatsApp
                  </p>
                  <a
                    href="tel:+201092672558"
                    className="text-sm font-bold text-textPrimary hover:text-accentPrimary transition-colors"
                  >
                    +20 109 267 2558
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-bgAlt/60 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/80 shadow-inner">
            {submitted ? (
              /* Success Feedback Screen */
              <div className="py-12 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-full bg-success/15 text-success flex items-center justify-center mb-4">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="text-2xl font-heading font-bold text-textPrimary mb-2">
                  Message Sent!
                </h4>
                <p className="text-textSecondary text-sm max-w-sm">
                  Thank you for reaching out, Ahmed will get back to you
                  shortly.
                </p>
              </div>
            ) : (
              /* Contact Form */
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6"
              >
                {/* Floating Label Input: Name */}
                <Input
                  register={register}
                  label="The Name"
                  name="name"
                  error={errors}
                  type="text"
                />

                {/* Floating Label Input: Email */}
                <Input
                  register={register}
                  label="Email Address"
                  name="email"
                  error={errors}
                  type="email"
                />

                {/* Floating Label Textarea: Message */}
                <div className="relative flex flex-col gap-1">
                  <div className="relative">
                    <textarea
                      id="contact-message"
                      rows="4"
                      placeholder=" "
                      {...register("message")}
                      className={`peer w-full px-5 pt-6 pb-2 rounded-2xl border bg-white/95 text-textPrimary placeholder-transparent focus:outline-none focus:ring-2 transition-all font-medium text-sm resize-none ${
                        errors.message
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                          : "border-borderLight focus:border-accentPrimary focus:ring-accentPrimary/20"
                      }`}
                    ></textarea>
                    <label
                      htmlFor="contact-message"
                      className="absolute left-5 top-4 text-xs font-semibold text-textSecondary uppercase tracking-wider transition-all duration-200 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-textSecondary/60 peer-placeholder-shown:normal-case peer-placeholder-shown:font-medium peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-accentPrimary peer-focus:uppercase peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:text-accentPrimary peer-[:not(:placeholder-shown)]:uppercase"
                    >
                      Your Message / Project Details
                    </label>
                  </div>
                  {/* Validation Error Message */}
                  {errors.message && (
                    <span className="text-red-500 text-xs pl-2 font-medium">
                      {errors.message.message}
                    </span>
                  )}
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
