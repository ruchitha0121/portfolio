import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Cpu } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onOpenResume: () => void;
}

export default function Navbar({ isDarkMode, toggleDarkMode, onOpenResume }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section highlighting on scroll
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-md border-b border-slate-200/50 dark:border-slate-850/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <button 
            onClick={() => handleNavClick('hero')} 
            id="nav-logo"
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          >
            <div className="p-2 bg-indigo-50 dark:bg-violet-950/50 rounded-lg border border-indigo-100 dark:border-violet-900/50 group-hover:rotate-12 transition-transform duration-300">
              <Cpu className="w-5 h-5 text-indigo-600 dark:text-violet-400" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
              Adari Ruchitha
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-1 bg-slate-100/60 dark:bg-slate-900/50 p-1 rounded-full border border-slate-200/30 dark:border-slate-800/30">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-link-${item.id}`}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    activeSection === item.id
                      ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-violet-400 shadow-sm font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Action Buttons & Toggle */}
            <div className="flex items-center gap-3 pl-3 border-l border-slate-200 dark:border-slate-800">
              <button
                onClick={toggleDarkMode}
                id="btn-toggle-darkmode"
                className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200/50 dark:hover:bg-slate-800 rounded-full transition-all cursor-pointer"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
              </button>

              <button
                onClick={onOpenResume}
                id="btn-nav-resume"
                className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-violet-600 dark:hover:bg-violet-700 rounded-lg transition-colors shadow-sm hover:shadow cursor-pointer"
              >
                Resume
              </button>
            </div>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleDarkMode}
              id="btn-mobile-darkmode"
              className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-900 rounded-full transition-all cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="btn-toggle-mobile-menu"
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition-colors cursor-pointer"
              aria-label="Open menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Slider */}
      <div
        id="mobile-nav-panel"
        className={`lg:hidden fixed inset-x-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? 'top-[57px] opacity-100 visible' : 'top-[-400px] opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="px-4 pt-3 pb-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              id={`nav-link-mobile-${item.id}`}
              className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? 'bg-indigo-50 dark:bg-violet-950/50 text-indigo-600 dark:text-violet-400 font-bold'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenResume();
              }}
              id="btn-mobile-resume"
              className="w-full text-center py-2.5 font-semibold text-sm text-white bg-indigo-600 dark:bg-violet-600 rounded-lg shadow cursor-pointer"
            >
              View & Print Resume
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
