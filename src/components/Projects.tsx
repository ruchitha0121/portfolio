import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Brain, Check, Fingerprint, Sparkles, BookOpen } from 'lucide-react';
import { projectsList } from '../data';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'ai' | 'hardware'>('all');

  const filteredProjects = projectsList.filter((proj) => {
    if (filter === 'all') return true;
    return proj.category === filter;
  });

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold font-mono uppercase tracking-widest text-indigo-600 dark:text-violet-400"
          >
            Engineering Showcase
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white"
          >
            Featured Projects
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-violet-500 dark:to-fuchsia-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Filter Tab controls */}
        <div className="flex justify-center items-center mb-16">
          <div className="flex bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-200/50 dark:border-slate-800/50">
            <button
              onClick={() => setFilter('all')}
              id="filter-btn-all"
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-violet-400 shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              All Engineering
            </button>
            <button
              onClick={() => setFilter('ai')}
              id="filter-btn-ai"
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                filter === 'ai'
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-violet-400 shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Brain className="w-3.5 h-3.5" />
              Artificial Intelligence
            </button>
            <button
              onClick={() => setFilter('hardware')}
              id="filter-btn-hardware"
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                filter === 'hardware'
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-violet-400 shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              Hardware & Embedded
            </button>
          </div>
        </div>

        {/* Projects Grid Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                id={`project-card-${project.id}`}
                className="flex flex-col bg-slate-50 dark:bg-slate-900/45 border border-slate-200/50 dark:border-slate-800/40 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all hover:-translate-y-1"
              >
                
                {/* Custom Visual Screen Mockup instead of static image */}
                <div className={`h-56 bg-gradient-to-br ${project.colorScheme} p-6 relative flex items-center justify-center overflow-hidden`}>
                  
                  {/* Overlay grid lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                  {/* Dynamic Mockup UI elements depending on Project */}
                  {project.category === 'ai' ? (
                    // 🧠 AI Learning style dashboard mockup
                    <div className="relative bg-white/95 dark:bg-slate-950/95 w-4/5 h-4/5 rounded-xl shadow-lg border border-white/20 p-4 flex flex-col gap-2 font-mono text-[9px]">
                      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-1.5">
                        <span className="font-bold flex items-center gap-1 text-slate-700 dark:text-slate-300">
                          <Brain className="w-3 h-3 text-indigo-500 animate-pulse" />
                          Adaptive Recommendation Flow
                        </span>
                        <span className="text-[7px] text-emerald-500 font-bold px-1 py-0.5 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-900/40 rounded">
                          ACTIVE MODEL
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-1.5 flex-1">
                        <div className="col-span-2 bg-slate-50 dark:bg-slate-900 p-2 rounded border border-slate-200/20 flex flex-col justify-between">
                          <span className="text-[7px] text-slate-400">LEARNING PREFERENCE INDEX</span>
                          <div className="flex items-end gap-1 h-12">
                            <div className="w-full bg-blue-500 h-[60%] rounded-xs" />
                            <div className="w-full bg-indigo-500 h-[90%] rounded-xs" />
                            <div className="w-full bg-violet-500 h-[45%] rounded-xs" />
                            <div className="w-full bg-pink-500 h-[75%] rounded-xs" />
                          </div>
                        </div>

                        <div className="col-span-1 flex flex-col gap-1.5">
                          <div className="bg-indigo-50 dark:bg-indigo-950/40 p-1.5 rounded border border-indigo-100/30 text-center">
                            <span className="text-[7px] text-indigo-600 dark:text-indigo-400">ACCURACY</span>
                            <div className="text-xs font-extrabold text-indigo-700 dark:text-indigo-300">94.8%</div>
                          </div>
                          <div className="bg-emerald-50 dark:bg-emerald-950/40 p-1.5 rounded border border-emerald-100/30 text-center">
                            <span className="text-[7px] text-emerald-600 dark:text-emerald-400">SAMPLE SIZE</span>
                            <div className="text-xs font-extrabold text-emerald-700 dark:text-emerald-300">12,401</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // 🔑 Biometric fingerprint door lock mockup
                    <div className="relative bg-slate-950/90 w-4/5 h-4/5 rounded-xl shadow-lg border border-white/10 p-4 flex flex-col items-center justify-center font-mono">
                      
                      {/* Scan Laser beam */}
                      <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-emerald-500 shadow-[0_0_10px_#10b981] animate-bounce" />

                      <div className="flex flex-col items-center gap-2">
                        <Fingerprint className="w-16 h-16 text-emerald-400 animate-pulse" />
                        <span className="text-[10px] tracking-widest text-emerald-400 uppercase font-bold">
                          SYSTEM ENCRYPTED
                        </span>
                        <span className="text-[7px] text-slate-500">
                          ESP32 CORE READY // LOGS SECURE
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Bottom info floating tab */}
                  <span className="absolute bottom-3 right-3 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono font-bold text-white border border-white/10 uppercase">
                    {project.category === 'ai' ? 'AI / ML' : 'HARDWARE'}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  
                  {/* Text Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-display font-bold text-slate-950 dark:text-slate-50 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="bg-slate-100/50 dark:bg-slate-900/50 rounded-xl p-4 border border-slate-200/20 dark:border-slate-800/20 space-y-2">
                    <span className="text-[10px] font-bold font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      Key Highlights & Features
                    </span>
                    <ul className="space-y-1">
                      {project.features.map((feat) => (
                        <li key={feat} className="flex gap-2 items-start text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                          <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-semibold font-mono px-2.5 py-1 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-850/60 rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>



                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
