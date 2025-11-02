import React from 'react';

const teachers = [
  {
    name: 'Mika',
    bio: 'Casual, friendly coach. Focus on conversation and confidence.',
    game: '🎮 Splatoon',
    avatar: 'https://api.dicebear.com/8.x/thumbs/svg?seed=Mika',
  },
  {
    name: 'Alex',
    bio: 'Grammar made simple while playing co-op games.',
    game: '🧩 Minecraft',
    avatar: 'https://api.dicebear.com/8.x/thumbs/svg?seed=Alex',
  },
  {
    name: 'Sora',
    bio: 'Beginner-friendly lessons with lots of positive feedback.',
    game: '🚗 Rocket League',
    avatar: 'https://api.dicebear.com/8.x/thumbs/svg?seed=Sora',
  },
  {
    name: 'Kenji',
    bio: 'Focus on pronunciation and quick speaking drills.',
    game: '⚔️ Fortnite',
    avatar: 'https://api.dicebear.com/8.x/thumbs/svg?seed=Kenji',
  },
];

const TeachersTestimonials = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        {/* Teacher Highlights */}
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-gray-900">Learn from Friendly Teachers Who Love Games</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.map((t) => (
            <div key={t.name} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full border" />
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">Favorite: {t.game}</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-700">{t.bio}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <a href="#login" className="text-sm font-medium text-[#0E82FD] hover:underline">
            See More Teachers (Login Required)
          </a>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16">
          <h3 className="text-center text-xl sm:text-2xl font-semibold text-gray-900">Why Choose Us</h3>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              '🎮 Game-based learning',
              '⏰ 25-minute sessions',
              '💬 Discord voice calls',
              '💳 Simple subscriptions',
              '📅 Easy reschedule (≥12h before)',
              '🧠 Progress tracking',
            ].map((item) => (
              <div key={item} className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-800">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h3 className="text-center text-xl sm:text-2xl font-semibold text-gray-900">What Our Students Say</h3>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <blockquote className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-gray-800">“Fun and easy to learn while gaming!”</p>
              <footer className="mt-3 text-sm text-gray-500">— Aiko</footer>
            </blockquote>
            <blockquote className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-gray-800">“Teachers are so friendly and lessons fly by!”</p>
              <footer className="mt-3 text-sm text-gray-500">— Ken</footer>
            </blockquote>
          </div>
        </div>

        {/* Final CTA */}
        <div id="cta" className="mt-16 rounded-2xl bg-gradient-to-r from-white to-[#E9EEF5] p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Ready to start your English gaming journey?</h3>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#0E82FD] to-[#06AED4] px-6 py-3 text-white shadow hover:opacity-95"
            >
              Start $1 Trial
            </a>
            <a
              href="#login"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-gray-900 hover:bg-gray-50"
            >
              Log In
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersTestimonials;
