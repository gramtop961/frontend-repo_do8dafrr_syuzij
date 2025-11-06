import { useRef } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero({ onGetStarted }) {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 dark:from-[#0b0f19]/70 dark:via-[#0b0f19]/40 dark:to-[#0b0f19]/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500">
            Your Personal AI Exam Coach
          </h1>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
            StudyBuddy AI turns your notes into smart sessions: summarize PDFs, chat with docs, generate revision sheets, visualize concepts, and track progress.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <button
              onClick={onGetStarted}
              className="group relative inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500" />
              <span className="absolute inset-0 rounded-xl bg-white/20" />
              <span className="relative">Get Started</span>
            </button>
            <a href="#features" className="rounded-xl border border-gray-200/60 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-md px-6 py-3 text-gray-800 dark:text-gray-200 hover:bg-white/80 dark:hover:bg-white/10 transition">
              Explore Features
            </a>
          </div>
        </motion.div>

        <motion.div
          className="mt-20 flex gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {["Learn. Revise. Ace. With AI.", "Your Notes, Your Tutor, Your Success.", "Smarter Prep Starts Here."].map((t, i) => (
            <motion.span
              key={t}
              className="rounded-full bg-white/60 dark:bg-white/10 border border-white/20 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 backdrop-blur-md"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
            >
              {t}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
