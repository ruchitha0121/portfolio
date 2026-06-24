import { Mail, Linkedin, Cpu, ChevronUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-850/50 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/40 dark:border-slate-800/40">
          
          {/* Brand logo footer */}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-50 dark:bg-violet-950/40 rounded-lg border border-indigo-100/40 dark:border-violet-900/40">
              <Cpu className="w-4 h-4 text-indigo-600 dark:text-violet-400" />
            </div>
            <span className="font-display font-bold text-md text-slate-900 dark:text-white">
              Adari Ruchitha
            </span>
          </div>

          {/* Social connections links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:a.ruchitha21@gmail.com"
              className="p-2.5 bg-white dark:bg-slate-900 text-slate-500 hover:text-blue-500 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/45 rounded-full hover:scale-105 transition-all shadow-xs"
              aria-label="Email Address"
            >
              <Mail className="w-4 h-4" />
            </a>
            
            <a
              href="https://linkedin.com/in/adari-ruchitha-453185353"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white dark:bg-slate-900 text-slate-500 hover:text-indigo-500 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/45 rounded-full hover:scale-105 transition-all shadow-xs"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Return to top */}
          <button
            onClick={handleScrollToTop}
            id="btn-scroll-to-top"
            className="flex items-center gap-1 text-xs font-mono font-bold text-slate-400 hover:text-indigo-600 dark:text-slate-500 dark:hover:text-violet-400 group transition-colors cursor-pointer"
          >
            Back To Top
            <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] font-mono text-slate-400 dark:text-slate-500">
          <p>© {new Date().getFullYear()} Adari Ruchitha. All Rights Reserved.</p>
          <p>
            Designed & Engineered with React + Tailwind v4
          </p>
        </div>

      </div>
    </footer>
  );
}
