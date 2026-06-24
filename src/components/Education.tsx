import { motion } from 'motion/react';
import { GraduationCap, School, BookOpen, Calendar, Award } from 'lucide-react';
import { educationList } from '../data';

const getEducationIcon = (name: string) => {
  switch (name) {
    case 'graduation': return <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-violet-400" />;
    case 'college': return <BookOpen className="w-5 h-5 text-blue-500" />;
    case 'school': return <School className="w-5 h-5 text-emerald-500" />;
    default: return <GraduationCap className="w-5 h-5 text-slate-500" />;
  }
};

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold font-mono uppercase tracking-widest text-indigo-600 dark:text-violet-400"
          >
            Academic History
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white"
          >
            Education Timeline
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-violet-500 dark:to-fuchsia-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {educationList.map((edu, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={edu.id} className="relative flex flex-col sm:flex-row items-start sm:items-center">
                  
                  {/* Timeline Node Icon */}
                  <div className="absolute left-0 sm:left-1/2 transform -translate-x-0 sm:-translate-x-1/2 z-10 flex items-center justify-center w-9 h-9 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-full shadow-sm">
                    {getEducationIcon(edu.iconName)}
                  </div>

                  {/* Spacer or Content Panel (Desktop alignment) */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${isEven ? 'sm:pr-12' : 'sm:order-2 sm:pl-12'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="p-6 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/40 rounded-2xl shadow-xs hover:shadow-md transition-shadow"
                    >
                      {/* Period Header */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono mb-2">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{edu.period}</span>
                      </div>

                      {/* Info Titles */}
                      <h3 className="text-md sm:text-lg font-display font-bold text-slate-950 dark:text-slate-50 leading-snug">
                        {edu.institution}
                      </h3>
                      
                      <p className="text-sm text-indigo-600 dark:text-violet-400 font-medium font-sans mt-0.5">
                        {edu.degree}
                      </p>

                      {/* Grade Badge */}
                      <div className="mt-4 flex items-center justify-between border-t border-slate-200/40 dark:border-slate-800/40 pt-3">
                        <div className="flex items-center gap-1.5">
                          <Award className="w-4 h-4 text-amber-500" />
                          <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">Result Achieved</span>
                        </div>
                        <span className="text-xs font-bold font-mono px-2.5 py-1 bg-indigo-50 dark:bg-violet-950/50 text-indigo-700 dark:text-violet-400 rounded-md border border-indigo-100/50 dark:border-violet-900/50">
                          {edu.gradeType}: {edu.grade}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty Spacer for the other column on desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
