import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GetStartedModal({ open, onClose, onAuthSuccess }) {
  const [tab, setTab] = useState('login');

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-black/40" onClick={onClose} />
        <motion.div
          className="relative w-full max-w-md rounded-2xl border border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-2xl p-6 shadow-2xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 22 }}
        >
          <div className="flex items-center justify-between">
            <div className="inline-flex rounded-xl p-1 bg-white/60 dark:bg-white/10 border border-white/10">
              <button
                onClick={() => setTab('login')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${tab === 'login' ? 'bg-indigo-500 text-white' : 'text-gray-800 dark:text-gray-200'}`}
              >
                Login
              </button>
              <button
                onClick={() => setTab('signup')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${tab === 'signup' ? 'bg-indigo-500 text-white' : 'text-gray-800 dark:text-gray-200'}`}
              >
                Sign Up
              </button>
            </div>
          </div>

          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              onAuthSuccess();
            }}
          >
            {tab === 'signup' && (
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                <input type="text" required className="w-full rounded-xl border border-gray-200/60 dark:border-white/10 bg-white/80 dark:bg-white/10 px-4 py-3 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Alex Student" />
              </div>
            )}
            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input type="email" required className="w-full rounded-xl border border-gray-200/60 dark:border-white/10 bg-white/80 dark:bg-white/10 px-4 py-3 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-400" placeholder="you@school.edu" />
            </div>
            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Password</label>
              <input type="password" required className="w-full rounded-xl border border-gray-200/60 dark:border-white/10 bg-white/80 dark:bg-white/10 px-4 py-3 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-400" placeholder="••••••••" />
            </div>
            <button
              type="submit"
              className="w-full group relative inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500" />
              <span className="absolute inset-0 rounded-xl bg-white/20" />
              <span className="relative">{tab === 'login' ? 'Login' : 'Create account'}</span>
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
