import { motion } from 'motion/react';
import { BrainCircuit, Code, Zap, Users, Heart } from 'lucide-react';
import { personalInfo } from '../data';

// Map icon name string to Lucide React component
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'BrainCircuit': return <BrainCircuit className="w-6 h-6 text-blue-500" />;
    case 'Code': return <Code className="w-6 h-6 text-indigo-500" />;
    case 'Zap': return <Zap className="w-6 h-6 text-amber-500" />;
    case 'Users': return <Users className="w-6 h-6 text-purple-500" />;
    case 'Heart': return <Heart className="w-6 h-6 text-rose-500" />;
    default: return <BrainCircuit className="w-6 h-6 text-slate-500" />;
  }
};

export default function About() {
  return (
    <section
      id="about"
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
            A Little About Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white"
          >
            Passion Driven, Technology Focused
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-violet-500 dark:to-fuchsia-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Statement */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200/60 dark:border-slate-850/65 shadow-sm space-y-4">
              <span className="text-4xl">👋</span>
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans font-medium">
                {personalInfo.bio}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                As a student of B.Tech in Artificial Intelligence & Computer Science, my goal is to bridge the gap between heavy technical structures and human experiences. I am currently learning algorithms, hardware design, and interactive system design.
              </p>
            </div>
          </motion.div>

          {/* Highlights Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personalInfo.highlights.map((highlight, idx) => (
              <motion.div
                key={highlight.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/50 dark:border-slate-800/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="p-3 bg-slate-50 dark:bg-slate-950/50 rounded-lg w-fit mb-4 border border-slate-100 dark:border-slate-900">
                  {getIconComponent(highlight.icon)}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-slate-950 dark:text-slate-50 text-sm">
                    {highlight.text}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Committed to professional growth and creating scalable impact in this domain.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
