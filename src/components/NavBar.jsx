import { useEffect, useState } from 'react';
import { Sun, Moon, Bot } from 'lucide-react';

export default function NavBar({ onOpenModal }) {
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

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/60 dark:bg-[#0b0f19]/40 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500" />
          <span className="font-semibold">StudyBuddy AI</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={onOpenModal} className="rounded-xl bg-indigo-500 text-white px-4 py-2">Get Started</button>
          <button onClick={() => setDark((d) => !d)} className="rounded-xl border border-white/10 bg-white/50 dark:bg-white/10 px-3 py-2">
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <a href="#chat" className="group relative">
            <span className="absolute -inset-2 rounded-full bg-indigo-500/20 blur-lg group-hover:bg-indigo-500/30 transition" />
            <span className="relative rounded-full p-2 bg-white/60 dark:bg-white/10 border border-white/10 inline-flex"><Bot className="h-5 w-5" /></span>
          </a>
        </div>
      </div>
    </header>
  );
}
