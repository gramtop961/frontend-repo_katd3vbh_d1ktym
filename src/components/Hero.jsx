import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to ensure text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0E82FD]/90 to-[#06AED4]/70" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-24 sm:py-28 md:py-32 lg:py-40 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">
          Learn English through Online Games — 1:1 Lessons on Discord
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl text-white/90">
          Book live sessions with friendly teachers. Build confidence, fluency, and fun — one game at a time.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#0E82FD] to-[#06AED4] px-6 py-3 text-white shadow-lg shadow-black/10 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            Start $1 Trial
          </a>
          <a
            href="#how"
            className="inline-flex items-center justify-center rounded-md border border-white/70 bg-white/10 px-6 py-3 text-white backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            See How It Works
          </a>
        </div>

        <p className="mt-4 text-sm text-white/80">
          Learn in a friendly, modern way that fits your games and your schedule.
        </p>
      </div>
    </section>
  );
};

export default Hero;
