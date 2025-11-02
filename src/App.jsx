import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import TeachersTestimonials from './components/TeachersTestimonials';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <header>
        <Hero />
      </header>

      <main>
        <HowItWorks />
        <Pricing />
        <TeachersTestimonials />
      </main>

      <footer className="bg-[#F5F7FA]">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-700">
            <a href="#about" className="hover:text-gray-900">About</a>
            <span className="text-gray-400">|</span>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
            <span className="text-gray-400">|</span>
            <a href="#terms" className="hover:text-gray-900">Terms</a>
            <span className="text-gray-400">|</span>
            <a href="#privacy" className="hover:text-gray-900">Privacy</a>
            <span className="text-gray-400">|</span>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>

          <div className="mt-6 flex items-center justify-center gap-3 text-xs text-gray-600">
            <span className="rounded-md border border-gray-300 bg-white px-2.5 py-1">Discord</span>
            <span className="rounded-md border border-gray-300 bg-white px-2.5 py-1">Stripe</span>
            <span className="rounded-md border border-gray-300 bg-white px-2.5 py-1">SendGrid</span>
          </div>

          <p className="mt-6 text-center text-xs text-gray-500">© 2025 Online Game English</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
