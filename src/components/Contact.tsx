import { useState, FormEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, MapPin, Send, Languages, CheckCircle2, MessageSquare } from 'lucide-react';
import { personalInfo, languagesList } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    
    // Simulate API delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Auto reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold font-mono uppercase tracking-widest text-indigo-600 dark:text-violet-400"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white"
          >
            Contact & Communication
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-violet-500 dark:to-fuchsia-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Contact info & Spoken languages */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Let's connect details */}
            <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/40 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-display font-bold text-slate-950 dark:text-slate-50">
                Let's Connect
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                I am actively looking for internships, research project collaborations, and placement opportunities. Reach out via email, LinkedIn, or send a message!
              </p>

              <div className="space-y-4 pt-2">
                
                {/* Email node */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-slate-950 border border-slate-200/40 dark:border-slate-850/40 rounded-xl hover:border-blue-500 dark:hover:border-violet-500 transition-all group"
                >
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-wide">
                      Email Address
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                {/* LinkedIn node */}
                <a
                  href={personalInfo.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-slate-950 border border-slate-200/40 dark:border-slate-850/40 rounded-xl hover:border-indigo-500 dark:hover:border-violet-500 transition-all group"
                >
                  <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-lg group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5 text-indigo-500" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-wide">
                      LinkedIn Networking
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                      linkedin.com/in/adari-ruchitha-453185353
                    </p>
                  </div>
                </a>

                {/* Location node */}
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-950 border border-slate-200/40 dark:border-slate-850/40 rounded-xl">
                  <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-lg">
                    <MapPin className="w-5 h-5 text-indigo-600 dark:text-violet-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-wide">
                      Current Location
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Spoken languages card */}
            <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/40 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-200/20 dark:border-slate-800 pb-2 mb-2">
                <Languages className="w-5 h-5 text-indigo-500" />
                <h3 className="text-md font-display font-bold text-slate-950 dark:text-slate-50">
                  Spoken Languages
                </h3>
              </div>

              <div className="space-y-4">
                {languagesList.map((lang) => (
                  <div key={lang.name} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{lang.name}</span>
                      <span className="font-mono text-[10px] font-bold text-slate-400 uppercase">{lang.proficiency}</span>
                    </div>
                    {/* Progress Indicator */}
                    <div className="h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full bg-indigo-600 dark:bg-violet-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Contact form with animated states */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/40 rounded-2xl p-6 sm:p-10 relative overflow-hidden">
              <div className="flex items-center gap-2 pb-6 border-b border-slate-200/30 dark:border-slate-850/45 mb-6">
                <MessageSquare className="w-5 h-5 text-indigo-500" />
                <h3 className="text-lg font-display font-bold text-slate-950 dark:text-slate-50">
                  Send a Direct Message
                </h3>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  // Success State display
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                  >
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 rounded-full border border-emerald-100 dark:border-emerald-900/30">
                      <CheckCircle2 className="w-12 h-12 text-emerald-500 animate-bounce" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                        Message Sent Successfully!
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                        Thank you for reaching out, Adari Ruchitha will get back to you shortly.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  // Active Form display
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1">
                        <label htmlFor="name" className="text-[10px] font-bold font-mono text-slate-400 uppercase">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-slate-800 dark:text-slate-100 transition-colors"
                          placeholder="Your Name"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-1">
                        <label htmlFor="email" className="text-[10px] font-bold font-mono text-slate-400 uppercase">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-slate-800 dark:text-slate-100 transition-colors"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    {/* Subject Input */}
                    <div className="space-y-1">
                      <label htmlFor="subject" className="text-[10px] font-bold font-mono text-slate-400 uppercase">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-slate-800 dark:text-slate-100 transition-colors"
                        placeholder="Project/Placement Query"
                      />
                    </div>

                    {/* Message Textarea */}
                    <div className="space-y-1">
                      <label htmlFor="message" className="text-[10px] font-bold font-mono text-slate-400 uppercase">
                        Message Content *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-slate-800 dark:text-slate-100 transition-colors resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      id="contact-btn-submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 font-bold text-sm text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-violet-600 dark:hover:bg-violet-700 disabled:opacity-50 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
