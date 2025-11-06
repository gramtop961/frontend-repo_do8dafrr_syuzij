import { motion } from 'framer-motion';
import { BookOpen, FileText, MessageCircle, Brain, Diagram3, Timer } from 'lucide-react';

const features = [
  { icon: FileText, title: 'PDF Summarization', desc: 'Turn long PDFs into clean, digestible notes with key highlights.' },
  { icon: Brain, title: 'Marks-Aware Tutor', desc: 'Practice with exam-style questions aligned with mark schemes.' },
  { icon: Timer, title: 'Quick Revision Sheets', desc: 'Auto-generate concise revision sheets for last-minute prep.' },
  { icon: BookOpen, title: 'Glossary & SRS', desc: 'Build a smart glossary with spaced-repetition reminders.' },
  { icon: Diagram3, title: 'AI Diagrams', desc: 'Visualize complex ideas with AI-generated flow and concept maps.' },
  { icon: MessageCircle, title: 'Chat with Docs (RAG)', desc: 'Ask questions directly from your uploaded notes and PDFs.' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/60 to-transparent dark:via-white/5" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">What is StudyBuddy AI?</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            A friendly exam coach that helps you study smarter with AI. Upload PDFs, chat with your notes, generate revision sheets, and keep a glossary that sticks.
          </p>
        </motion.div>

        <div id="features" className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              className="group rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl p-6 shadow-sm hover:shadow-xl transition shadow-indigo-500/0 hover:shadow-indigo-500/10"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl p-3 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-white/10">
                  <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
              </div>
              <p className="mt-3 text-gray-600 dark:text-gray-300">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
