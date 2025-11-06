import { useCallback, useState } from 'react';
import SplashScreen from './components/SplashScreen';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import GetStartedModal from './components/GetStartedModal';
import Dashboard from './components/Dashboard';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [authed, setAuthed] = useState(false);

  const handleFinishSplash = useCallback(() => setShowSplash(false), []);

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  const handleAuthSuccess = useCallback(() => {
    setAuthed(true);
    setModalOpen(false);
    // Scroll to top when entering dashboard
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (authed) {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50 dark:from-[#0b0f19] dark:to-[#0b0f19] text-gray-900 dark:text-white">
      <SplashScreen show={showSplash} onFinish={handleFinishSplash} />
      <NavBar onOpenModal={openModal} />
      <main>
        <Hero onGetStarted={openModal} />
        <About />
        <section id="get-started" className="py-24 sm:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold">Ready to study smarter?</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">Create an account to access your dashboard and start learning with AI.</p>
            <button onClick={openModal} className="mt-6 inline-flex items-center justify-center rounded-xl bg-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition">
              Get Started
            </button>
          </div>
        </section>
      </main>
      <GetStartedModal open={modalOpen} onClose={closeModal} onAuthSuccess={handleAuthSuccess} />
    </div>
  );
}

export default App;
