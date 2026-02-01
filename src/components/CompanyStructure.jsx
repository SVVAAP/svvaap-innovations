import React from 'react';
import {
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';

export default function CompanyStructure({ companies }) {
  const defaultCompanies = [
    {
      key: '21xengineers',
      name: '21xEngineers',
      tagline: 'Web, App & Software Services',
      logo: "/img/21xengineers_logo.jpg",
      colorClass: 'from-blue-600 to-indigo-600',
      services: [
        'Custom web apps',
        'Mobile (iOS/Android)',
        'SaaS & integrations',
        'Product design',
        'Cloud & DevOps',
      ],
      highlight: 'Trusted enterprise partners',
      contactUrl: 'https://21xengineers.svvaap.in'
    },
    {
      key: 'sen10games',
      name: 'Sen10Games',
      tagline: 'Game Development & Gaming Products',
      logo: 'https://sen10games.in/assets/img/sen10_logo.png',
      colorClass: 'from-pink-500 to-rose-500',
      services: [
        'Game design & protos',
        'Unity / Unreal',
        'Live ops & monetization',
        'QA & performance',
        'Art & animation',
      ],
      highlight: 'Award-winning gameplay',
        contactUrl: 'https://sen10games.in'
    },
    {
      key: 'starlabs',
      name: 'Star Labs',
      tagline: 'Technology, AI & Research Labs',
      logo: 'https://t4.ftcdn.net/jpg/05/64/68/89/360_F_564688956_LfW1Z4gmC5WqfvDbb3wPq5AKHo6IzgCE.jpg',
      colorClass: 'from-emerald-600 to-teal-500',
      services: [
        'AI / ML research',
        'Computer vision & NLP',
        'R&D & prototyping',
        'Pilot programs',
        'Collaborative research',
      ],
      highlight: 'Experimental R&D team',
        contactUrl: 'https://starlabs.svvaap.in'
    },
  ];

  const list = companies && Array.isArray(companies) && companies.length ? companies : defaultCompanies;

  return (
    <section id="company-structure" className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -left-16 -top-16 w-72 h-72 bg-gradient-to-br from-indigo-200 to-purple-300 rounded-full opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-br from-emerald-200 to-teal-300 rounded-full opacity-20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
           The Svvaap Ecosystem
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Three focused studios building products, games and research-driven AI solutions. Explore what each unit offers and how they collaborate.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {list.map((c) => (
            <article
              key={c.key}
              className="group relative flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-3"
            >
              <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-white/50 to-white/30">
                <div className={`rounded-full p-3 bg-black shadow-lg flex items-center justify-center w-16 h-16 overflow-hidden`}>
                  <img 
                    src={c.logo} 
                    alt={`${c.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{c.name}</h3>
                  <p className="text-sm text-gray-500">{c.tagline}</p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    {c.highlight}
                  </span>
                </div>
              </div>

              <div className="p-6 pt-4 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-3">
                  {c.services.map((s, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors duration-150"
                    >
                      <svg className="h-3 w-3 text-gray-400" viewBox="0 0 8 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-end justify-between">
                  <a
                    href={c.contactUrl}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:underline"
                    aria-label={`Learn more about ${c.name}`}
                  >
                    Learn more
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={c.contactUrl}
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${c.colorClass} text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition-transform duration-200`}
                  >
                    Visit Now!
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
