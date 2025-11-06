import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Upload, MessageSquare, FileText, BookOpen, BarChart2, User, Sun, Moon } from 'lucide-react';

export default function Dashboard() {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('theme');
    return stored ? stored === 'dark' : true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  const items = [
    { icon: Upload, label: 'Upload PDFs' },
    { icon: MessageSquare, label: 'Chat' },
    { icon: FileText, label: 'Revision Sheets' },
    { icon: BookOpen, label: 'Glossary' },
    { icon: BarChart2, label: 'Progress Tracker' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50 dark:from-[#0b0f19] dark:to-[#0b0f19] text-gray-900 dark:text-white">
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/60 dark:bg-[#0b0f19]/40 border-b border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="font-semibold">StudyBuddy AI</div>
          <div className="flex items-center gap-3">
            <button onClick={() => setDark((d) => !d)} className="rounded-xl border border-white/10 bg-white/50 dark:bg-white/10 px-3 py-2">
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <div className="rounded-full p-2 bg-white/60 dark:bg-white/10 border border-white/10">
              <User className="h-5 w-5" />
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <aside className="lg:col-span-1 space-y-2">
          {items.map(({ icon: Icon, label }) => (
            <button key={label} className="w-full flex items-center gap-3 rounded-xl border border-gray-200/60 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-lg px-4 py-3 text-left hover:bg-white/80 dark:hover:bg-white/10 transition">
              <Icon className="h-5 w-5 text-indigo-500" />
              <span>{label}</span>
            </button>
          ))}
        </aside>

        <main className="lg:col-span-3 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl p-6"
          >
            <h3 className="text-xl font-semibold">Welcome back 👋</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">This is a mock dashboard. Upload notes, chat with documents, generate revision sheets, and track your progress here.</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1,2,3,4].map((i) => (
                <div key={i} className="rounded-xl border border-gray-200/60 dark:border-white/10 bg-white/60 dark:bg-white/10 p-4 h-28" />
              ))}
            </div>
          </motion.div>
        </main>
      </div>

      <footer className="mt-10 border-t border-black/5 dark:border-white/10 py-6">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
          <p>© {new Date().getFullYear()} StudyBuddy AI — Made with ❤️ by Preetam Tony J</p>
          <div className="flex items-center gap-3 opacity-80">
            <a href="#" aria-label="Twitter" className="hover:opacity-100 transition">X</a>
            <a href="#" aria-label="GitHub" className="hover:opacity-100 transition">GitHub</a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-100 transition">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
