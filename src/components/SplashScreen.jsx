import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen({ show, onFinish }) {
  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => onFinish(), 3200);
    return () => clearTimeout(t);
  }, [show, onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0b0f19] via-indigo-800/40 to-violet-800/30 dark:from-[#0b0f19] dark:via-indigo-900/40 dark:to-violet-900/30"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative">
            <motion.div
              className="mx-auto h-28 w-28 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl flex items-center justify-center"
              initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 120, damping: 12 }}
            >
              <motion.div
                className="h-14 w-14 rounded-2xl bg-gradient-to-tr from-indigo-500 to-violet-500 shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
              />
            </motion.div>
            <motion.p
              className="mt-6 text-center text-lg sm:text-xl font-medium text-white/90"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Learn Smarter, Not Harder – <span className="font-semibold">StudyBuddy AI</span>
            </motion.p>
            <div className="mt-6 flex items-center justify-center gap-2">
              <span className="sr-only">Loading</span>
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="h-2 w-2 rounded-full bg-white/80"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.12 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
