import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, Building2, Calendar, Award } from 'lucide-react';
import { internshipList } from '../data';

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold font-mono uppercase tracking-widest text-indigo-600 dark:text-violet-400"
          >
            Professional Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white"
          >
            Internship Experience
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-violet-500 dark:to-fuchsia-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto">
          {internshipList.map((intern, idx) => (
            <motion.div
              key={intern.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-850/60 shadow-md p-6 sm:p-10 relative overflow-hidden"
            >
              {/* Highlight gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600" />

              {/* Card Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 text-[10px] font-bold font-mono uppercase rounded-md border border-blue-100/50 dark:border-blue-900/30">
                    <Sparkles className="w-3 h-3" />
                    May 2025 – July 2025
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-950 dark:text-slate-50">
                    {intern.role}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm text-indigo-600 dark:text-violet-400 font-medium">
                    <Building2 className="w-4 h-4 text-slate-400" />
                    <span>{intern.company}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1 bg-slate-50 dark:bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-150 dark:border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    2 Month Onsite Program
                  </span>
                  <span className="flex items-center gap-1 bg-slate-50 dark:bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-150 dark:border-slate-800">
                    <Award className="w-3.5 h-3.5 text-emerald-500" />
                    Certified Grade A
                  </span>
                </div>
              </div>

              {/* Achievements Bullet List */}
              <div className="mt-8 space-y-4">
                <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Core Achievements & Responsibilities
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {intern.achievements.map((achievement, actIdx) => (
                    <motion.div
                      key={actIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: actIdx * 0.1 }}
                      className="flex gap-3 items-start bg-slate-50/50 dark:bg-slate-950/20 p-4 rounded-xl border border-slate-100 dark:border-slate-800/20 hover:border-indigo-100 dark:hover:border-violet-900/45 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                        {achievement}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
