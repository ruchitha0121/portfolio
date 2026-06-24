import { motion } from 'motion/react';
import { Award, ShieldCheck, Building, CheckCircle2 } from 'lucide-react';
import { certificationsList } from '../data';

// Helper to return style variations for certification issuers
const getBadgeStyles = (color: string) => {
  switch (color) {
    case 'blue':
      return 'bg-blue-50 dark:bg-blue-950/40 border-blue-100 dark:border-blue-900/30 text-blue-700 dark:text-blue-400';
    case 'purple':
      return 'bg-purple-50 dark:bg-purple-950/40 border-purple-100 dark:border-purple-900/30 text-purple-700 dark:text-purple-400';
    case 'indigo':
      return 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-100 dark:border-indigo-900/30 text-indigo-700 dark:text-indigo-400';
    case 'emerald':
      return 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-100 dark:border-emerald-900/30 text-emerald-700 dark:text-emerald-400';
    case 'amber':
      return 'bg-amber-50 dark:bg-amber-950/40 border-amber-100 dark:border-amber-900/30 text-amber-700 dark:text-amber-400';
    default:
      return 'bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-400';
  }
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold font-mono uppercase tracking-widest text-indigo-600 dark:text-violet-400"
          >
            Verified Credentials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white"
          >
            Certifications & Badges
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-violet-500 dark:to-fuchsia-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsList.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/40 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all relative overflow-hidden"
            >
              {/* Subtle watermark badge in background */}
              <div className="absolute -right-4 -bottom-4 text-slate-100 dark:text-slate-850 opacity-50 dark:opacity-20 pointer-events-none">
                <Award className="w-32 h-32" />
              </div>

              <div className="space-y-4 relative z-10">
                {/* Header Badge */}
                <div className={`flex items-center gap-1.5 px-3 py-1 border rounded-lg w-fit text-xs font-bold font-mono ${getBadgeStyles(cert.badgeColor)}`}>
                  <ShieldCheck className="w-4 h-4" />
                  <span>VERIFIED CERT</span>
                </div>

                {/* Info Text */}
                <div className="space-y-1.5">
                  <h3 className="text-md sm:text-lg font-display font-bold text-slate-950 dark:text-slate-50 leading-snug">
                    {cert.name}
                  </h3>
                  
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold font-sans">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    <span>{cert.issuer}</span>
                  </div>
                </div>
              </div>

              {/* Verified Credential ID footer */}
              <div className="mt-6 pt-4 border-t border-slate-200/40 dark:border-slate-800/40 flex items-center justify-between relative z-10">
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                    Credential ID
                  </span>
                  <span className="text-[10px] font-mono font-medium text-slate-600 dark:text-slate-300">
                    {cert.credentialId || 'N/A'}
                  </span>
                </div>
                
                <div className="flex items-center gap-1 text-[10px] font-bold font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-100 dark:border-emerald-900/30">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>ISSUED</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
