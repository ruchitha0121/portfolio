import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, MapPin, Download, ArrowRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    'AI Engineering Student',
    'Machine Learning Enthusiast',
    'Computer Science Student',
    'Problem Solver'
  ];

  // Typing effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    let currentText = '';
    let isDeleting = false;
    let charIndex = 0;

    const type = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        currentText = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        currentText = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      setTypedText(currentText);

      let typeSpeed = isDeleting ? 40 : 80;

      if (!isDeleting && currentText === currentRole) {
        typeSpeed = 1500; // Hold at full text
        isDeleting = true;
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        setRoleIndex((prev) => (prev + 1) % roles.length);
        typeSpeed = 500; // Pause before typing next
      }

      timer = setTimeout(type, typeSpeed);
    };

    timer = setTimeout(type, 100);
    return () => clearTimeout(timer);
  }, [roleIndex]);

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-radial from-slate-50 via-slate-50 to-indigo-50/10 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950"
    >
      {/* Visual glowing backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/10 dark:bg-violet-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Information */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 dark:bg-violet-950/40 border border-indigo-100 dark:border-violet-900/40 text-indigo-700 dark:text-violet-400 text-xs font-semibold rounded-full font-mono tracking-wide"
            >
              <Sparkles className="w-3.5 h-3.5" />
              PORTFOLIO WEBSITE
            </motion.div>

            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 dark:text-white leading-tight"
              >
                Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">{personalInfo.name}</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-8 text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-300 font-display"
              >
                <span>{typedText}</span>
                <span className="animate-pulse font-semibold text-indigo-600 dark:text-violet-400 ml-0.5">|</span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
            >
              Artificial Intelligence & Computer Science Engineering student based in Visakhapatnam. Passionate about designing robust machine learning systems and creative web applications.
            </motion.p>

            {/* Quick Metadata */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-mono text-slate-500 dark:text-slate-400"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-900 rounded-lg">
                <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                <span>{personalInfo.location}</span>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200/50 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-500" />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200/50 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-indigo-600 dark:text-violet-400" />
                <span>LinkedIn Profile</span>
              </a>
            </motion.div>

            {/* CTA Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-4"
            >
              <button
                onClick={onOpenResume}
                id="hero-btn-resume"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-violet-600 dark:to-fuchsia-600 hover:opacity-95 rounded-xl shadow-lg transition-all cursor-pointer group"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                Download Resume
              </button>
              
              <button
                onClick={handleContactClick}
                id="hero-btn-contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850 rounded-xl transition-all cursor-pointer group"
              >
                Contact Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

          </div>

          {/* Interactive AI SVG Illustration */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-square rounded-full flex items-center justify-center"
            >
              {/* Spinning backdrop circles */}
              <div className="absolute inset-0 border border-dashed border-indigo-200/40 dark:border-violet-900/30 rounded-full animate-spin [animation-duration:40s]" />
              <div className="absolute inset-6 border border-dashed border-blue-200/40 dark:border-blue-900/30 rounded-full animate-spin [animation-duration:25s] [animation-direction:reverse]" />
              <div className="absolute inset-12 border border-slate-200/20 dark:border-slate-800/20 rounded-full" />

              {/* Neural Network SVG Artwork */}
              <svg viewBox="0 0 400 400" className="w-full h-full relative z-10 select-none">
                <defs>
                  <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Grid Network Lines */}
                <g stroke="currentColor" strokeWidth="0.5" className="text-slate-200 dark:text-slate-800">
                  <line x1="200" y1="200" x2="100" y2="100" />
                  <line x1="200" y1="200" x2="300" y2="100" />
                  <line x1="200" y1="200" x2="100" y2="300" />
                  <line x1="200" y1="200" x2="300" y2="300" />
                  <line x1="200" y1="200" x2="200" y2="50" />
                  <line x1="200" y1="200" x2="200" y2="350" />
                  <line x1="100" y1="100" x2="300" y2="100" />
                  <line x1="300" y1="100" x2="300" y2="300" />
                  <line x1="300" y1="300" x2="100" y2="300" />
                  <line x1="100" y1="300" x2="100" y2="100" />
                </g>

                {/* Circuit paths */}
                <path d="M 100,100 L 200,200 L 200,50 L 300,100" fill="none" stroke="url(#glowGrad)" strokeWidth="1" strokeDasharray="5, 5" className="animate-[dash_5s_linear_infinite]" />
                <path d="M 100,300 L 200,200 L 200,350 L 300,300" fill="none" stroke="url(#glowGrad)" strokeWidth="1" strokeDasharray="5, 5" className="animate-[dash_5s_linear_infinite] [animation-delay:2.5s]" />

                {/* Orbiting nodes with motion */}
                <motion.circle cx="200" cy="50" r="7" fill="#3b82f6" filter="url(#glow)" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} />
                <motion.circle cx="100" cy="100" r="6" fill="#8b5cf6" filter="url(#glow)" animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} />
                <motion.circle cx="300" cy="100" r="6" fill="#ec4899" filter="url(#glow)" animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }} />
                <motion.circle cx="100" cy="300" r="8" fill="#14b8a6" filter="url(#glow)" animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} />
                <motion.circle cx="300" cy="300" r="6" fill="#f59e0b" filter="url(#glow)" animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.5 }} />
                <motion.circle cx="200" cy="350" r="7" fill="#06b6d4" filter="url(#glow)" animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }} />

                {/* Central brain neural icon */}
                <g filter="url(#glow)">
                  <motion.circle cx="200" cy="200" r="48" fill="url(#glowGrad)" className="opacity-15 dark:opacity-20" animate={{ scale: [0.95, 1.05, 0.95] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} />
                  <circle cx="200" cy="200" r="34" fill="url(#glowGrad)" className="opacity-25 dark:opacity-35" />
                  <circle cx="200" cy="200" r="22" fill="url(#glowGrad)" />
                </g>

                {/* Synaptic nodes around center */}
                <circle cx="175" cy="180" r="3" fill="#ffffff" />
                <circle cx="225" cy="180" r="3" fill="#ffffff" />
                <circle cx="165" cy="210" r="3" fill="#ffffff" />
                <circle cx="235" cy="210" r="3" fill="#ffffff" />
                <circle cx="200" cy="230" r="3" fill="#ffffff" />

                {/* Node connection lines (white) */}
                <line x1="175" y1="180" x2="200" y2="230" stroke="#ffffff" strokeWidth="0.5" opacity="0.7" />
                <line x1="225" y1="180" x2="200" y2="230" stroke="#ffffff" strokeWidth="0.5" opacity="0.7" />
                <line x1="165" y1="210" x2="175" y2="180" stroke="#ffffff" strokeWidth="0.5" opacity="0.7" />
                <line x1="235" y1="210" x2="225" y2="180" stroke="#ffffff" strokeWidth="0.5" opacity="0.7" />
              </svg>

              {/* Float indicators */}
              <div className="absolute top-12 left-6 bg-white/75 dark:bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200/50 dark:border-slate-800/50 flex items-center gap-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono font-bold text-slate-700 dark:text-slate-300">TensorFlow/PyTorch</span>
              </div>

              <div className="absolute bottom-16 right-4 bg-white/75 dark:bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200/50 dark:border-slate-800/50 flex items-center gap-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[10px] font-mono font-bold text-slate-700 dark:text-slate-300">React & Tailwind</span>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
