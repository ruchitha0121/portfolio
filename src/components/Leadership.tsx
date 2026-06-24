import { motion } from 'motion/react';
import { Heart, Calendar, Users, Megaphone, HeartHandshake } from 'lucide-react';
import { leadershipList } from '../data';

const getResponsibilityIcon = (idx: number) => {
  switch (idx) {
    case 0: return <Heart className="w-4 h-4 text-rose-500" />;
    case 1: return <Users className="w-4 h-4 text-blue-500" />;
    case 2: return <Megaphone className="w-4 h-4 text-purple-500" />;
    case 3: return <HeartHandshake className="w-4 h-4 text-emerald-500" />;
    default: return <Heart className="w-4 h-4 text-slate-500" />;
  }
};

export default function Leadership() {
  return (
    <section
      id="leadership"
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
            Social Responsibility
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white"
          >
            Leadership & Activities
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-violet-500 dark:to-fuchsia-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Timeline bar */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800" />

          {leadershipList.map((lead, idx) => (
            <div key={lead.id} className="relative pl-12 sm:pl-16 pb-4">
              
              {/* Timeline Icon Node */}
              <div className="absolute left-0 sm:left-2 top-0 transform z-10 flex items-center justify-center w-9 h-9 bg-rose-50 dark:bg-rose-950/40 border-2 border-rose-100 dark:border-rose-900/50 rounded-full shadow-sm">
                <Heart className="w-4 h-4 text-rose-500 animate-pulse" />
              </div>

              {/* Timeline Content Block */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-850/50 rounded-2xl p-6 sm:p-8 shadow-sm"
              >
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <span className="text-[10px] font-bold font-mono uppercase tracking-wider text-rose-500 bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded border border-rose-100/30">
                      Non-Profit Leadership
                    </span>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-slate-950 dark:text-slate-50 mt-1">
                      {lead.role}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-600 dark:text-violet-400 font-sans">
                      {lead.organization}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{lead.period}</span>
                  </div>
                </div>

                {/* Grid Lists for NGO coordinates */}
                <div className="mt-6 space-y-4">
                  <span className="text-[10px] font-bold font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                    Key Contributions & Responsibilities
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {lead.responsibilities.map((resp, respIdx) => (
                      <div
                        key={respIdx}
                        className="flex gap-3 items-start bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-100 dark:border-slate-850/30"
                      >
                        <div className="p-2 bg-white dark:bg-slate-900 rounded-lg border border-slate-200/50 dark:border-slate-800/40 flex-shrink-0">
                          {getResponsibilityIcon(respIdx)}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {resp}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
