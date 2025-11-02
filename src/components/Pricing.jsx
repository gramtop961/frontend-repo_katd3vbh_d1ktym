import React from 'react';

const plans = [
  { title: '1 Plan', price: '¥4,500', tickets: '4 tickets', highlighted: false },
  { title: '2 Plans', price: '¥8,000', tickets: '8 tickets', highlighted: true },
  { title: '3 Plans', price: '¥9,000', tickets: '12 tickets', highlighted: false },
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-[#F5F7FA]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-gray-900">Plans & Pricing</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={
                'rounded-2xl border p-6 shadow-sm bg-white ' +
                (plan.highlighted
                  ? 'border-transparent ring-2 ring-[#0E82FD]'
                  : 'border-gray-200')
              }
            >
              {plan.highlighted && (
                <div className="mb-3 inline-flex rounded-full bg-[#0E82FD]/10 px-3 py-1 text-xs font-medium text-[#0E82FD]">
                  Recommended
                </div>
              )}
              <h3 className="text-lg font-semibold text-gray-900">{plan.title}</h3>
              <div className="mt-2 text-3xl font-bold text-gray-900">{plan.price}</div>
              <p className="mt-1 text-sm text-gray-600">{plan.tickets}</p>

              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>• Includes Discord-based lessons</li>
                <li>• Cancel anytime</li>
                <li>• Email reminders for every booking</li>
              </ul>

              <a
                href="#cta"
                className={
                  'mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow ' +
                  (plan.highlighted
                    ? 'bg-gradient-to-r from-[#0E82FD] to-[#06AED4] text-white'
                    : 'border border-gray-300 text-gray-900 hover:bg-gray-50')
                }
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
