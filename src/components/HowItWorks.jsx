import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-gray-900">How It Works</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-3xl">🎟️</div>
            <h3 className="mt-3 font-medium text-gray-900">Subscribe & Get Tickets</h3>
            <p className="mt-2 text-sm text-gray-600">Choose a plan and receive lesson credits.</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-3xl">📅</div>
            <h3 className="mt-3 font-medium text-gray-900">Book Your Lesson</h3>
            <p className="mt-2 text-sm text-gray-600">Pick a teacher and 25-minute slot.</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-3xl">🎧</div>
            <h3 className="mt-3 font-medium text-gray-900">Join via Discord</h3>
            <p className="mt-2 text-sm text-gray-600">Meet and play while learning English.</p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#0E82FD] to-[#06AED4] px-6 py-3 text-white shadow hover:opacity-95"
          >
            Start Your $1 Trial Lesson
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
