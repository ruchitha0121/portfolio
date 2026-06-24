import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu } from 'lucide-react';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white font-mono selection:bg-indigo-500/30"
        >
          {/* Central Logo & Loader Nodes */}
          <div className="relative flex flex-col items-center gap-6">
            
            {/* Pulsing ring */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="absolute w-24 h-24 rounded-full border border-indigo-500/30 bg-indigo-500/5 blur-md"
            />
            
            {/* Spinning micro circles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
              className="absolute w-16 h-16 rounded-full border border-dashed border-violet-500/40"
            />

            {/* Core Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="relative p-4 bg-slate-900 border border-slate-800 rounded-2xl shadow-[0_0_15px_rgba(99,102,241,0.2)]"
            >
              <Cpu className="w-8 h-8 text-indigo-400 animate-pulse" />
            </motion.div>

            {/* Title & Status */}
            <div className="text-center space-y-1">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-display font-extrabold text-sm tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400"
              >
                ADARI RUCHITHA
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase"
              >
                Initializing Core AI Portfolio...
              </motion.p>
            </div>

          </div>

          {/* Bottom loading progress percentage bar */}
          <div className="absolute bottom-12 w-48 h-1 bg-slate-900 rounded-full overflow-hidden border border-slate-800/50">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600"
            />
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
