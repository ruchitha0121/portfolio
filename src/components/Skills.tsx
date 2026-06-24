import { motion } from 'motion/react';
import { Braces, Globe, Wrench, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { skillsList } from '../data';

export default function Skills() {
  const categories = [
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: Braces,
      color: 'from-blue-500 to-cyan-500',
      textColor: 'text-blue-500',
      bgColor: 'bg-blue-50/50 dark:bg-blue-950/10',
      borderColor: 'border-blue-100 dark:border-blue-900/20',
      skills: skillsList.filter(s => s.category === 'programming')
    },
    {
      id: 'web',
      title: 'Web Technologies',
      icon: Globe,
      color: 'from-indigo-500 to-purple-500',
      textColor: 'text-indigo-500',
      bgColor: 'bg-indigo-50/50 dark:bg-indigo-950/10',
      borderColor: 'border-indigo-100 dark:border-indigo-900/20',
      skills: skillsList.filter(s => s.category === 'web')
    },
    {
      id: 'tools',
      title: 'Developer Tools',
      icon: Wrench,
      color: 'from-amber-500 to-orange-500',
      textColor: 'text-amber-500',
      bgColor: 'bg-amber-50/50 dark:bg-amber-950/10',
      borderColor: 'border-amber-100 dark:border-amber-900/20',
      skills: skillsList.filter(s => s.category === 'tools')
    },
    {
      id: 'soft',
      title: 'Professional Soft Skills',
      icon: HeartHandshake,
      color: 'from-emerald-500 to-teal-500',
      textColor: 'text-emerald-500',
      bgColor: 'bg-emerald-50/50 dark:bg-emerald-950/10',
      borderColor: 'border-emerald-100 dark:border-emerald-900/20',
      skills: skillsList.filter(s => s.category === 'soft')
    }
  ];

  return (
    <section
      id="skills"
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
            Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white"
          >
            Technical & Soft Skills
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-violet-500 dark:to-fuchsia-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, catIdx) => {
            const IconComponent = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className={`p-6 sm:p-8 rounded-2xl border ${cat.borderColor} ${cat.bgColor} backdrop-blur-xs flex flex-col justify-between space-y-6 shadow-xs`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${cat.color} text-white shadow-sm`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Skills Grid/List */}
                  <div className="flex flex-wrap gap-3">
                    {cat.skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: (catIdx * 0.1) + (skillIdx * 0.05) }}
                        className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.02)] dark:shadow-none hover:border-indigo-400 dark:hover:border-violet-500 transition-colors group cursor-default"
                      >
                        <CheckCircle2 className={`w-3.5 h-3.5 ${cat.textColor} opacity-80 group-hover:scale-110 transition-transform`} />
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 pt-2 border-t border-slate-150 dark:border-slate-850/40">
                  {cat.skills.length} competencies listed
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
