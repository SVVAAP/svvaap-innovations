import React from "react";
import {
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

export default function CompanyStructure({ companies }) {
  const defaultCompanies = [
    {
      key: "21xengineers",
      name: "21xEngineers",
      tagline: "Web, App & Software Services",
      logo: "/img/21xengineers_logo.jpg",
      colorClass: "from-blue-600 to-indigo-600",
      services: [
        "Custom web apps",
        "Mobile (iOS/Android)",
        "SaaS & integrations",
        "Product design",
        "Cloud & DevOps",
      ],
      highlight: "Trusted enterprise partners",
      contactUrl: "https://21xengineers.svvaap.in"
    },
    {
      key: "sen10games",
      name: "Sen10Games",
      tagline: "Game Development & Gaming Products",
      logo: "https://sen10games.in/assets/img/sen10_logo.png",
      colorClass: "from-pink-500 to-rose-500",
      services: [
        "Game design & protos",
        "Unity / Unreal",
        "Live ops & monetization",
        "QA & performance",
        "Art & animation",
      ],
      highlight: "Award-winning gameplay",
      contactUrl: "https://sen10games.in"
    },
    {
      key: "starlabs",
      name: "Star Labs",
      tagline: "Technology, AI & Research Labs",
      logo: "https://t4.ftcdn.net/jpg/05/64/68/89/360_F_564688956_LfW1Z4gmC5WqfvDbb3wPq5AKHo6IzgCE.jpg",
      colorClass: "from-emerald-600 to-teal-500",
      services: [
        "AI / ML research",
        "Computer vision & NLP",
        "R&D & prototyping",
        "Pilot programs",
        "Collaborative research",
      ],
      highlight: "Experimental R&D team",
      contactUrl: "https://starlabs.svvaap.in"
    },
  ];

  const list = companies && Array.isArray(companies) && companies.length ? companies : defaultCompanies;

  return (
    <section id="company-structure" className="relative bg-[#f7f6f1] px-4 py-20 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute -right-32 -top-32 w-96 h-96 bg-[#0f6d5e] rounded-full opacity-5 blur-3xl pointer-events-none" />
      <div className="absolute -left-32 bottom-0 w-96 h-96 bg-[#b86f2f] rounded-full opacity-5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0f6d5e]">Organization</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#0a1324] sm:text-5xl">
            The Svvaap Ecosystem
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4f5c71]">
            Three specialized studios collaborating on products, games, and AI research. Each brings expertise while sharing operational infrastructure.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (
            <article
              key={c.key}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#d0d1ca] bg-white shadow-[0_12px_24px_rgba(10,19,36,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(10,19,36,0.12)]"
            >
              <div className="flex items-center gap-4 border-b border-[#e5e7eb] bg-gradient-to-r from-[#f9f8f6] to-white p-6">
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-xl bg-[#0a1220] shadow-lg">
                  <img 
                    src={c.logo} 
                    alt={`${c.name} logo`}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-[#0f1a2f]">{c.name}</h3>
                  <p className="text-xs text-[#7a8a9f]">{c.tagline}</p>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-6 p-6">
                <div className="flex flex-wrap gap-2">
                  {c.services.map((s, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 rounded-full bg-[#eef8f6] px-3 py-1.5 text-xs font-medium text-[#0f6d5e]"
                    >
                      <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={c.contactUrl}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0f6d5e] transition-colors hover:text-[#0a4a3f]"
                    aria-label={`Learn more about ${c.name}`}
                  >
                    Learn more
                    <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  </a>

                  <a
                    href={c.contactUrl}
                    className="ml-auto inline-flex items-center rounded-full bg-[#0f6d5e] px-4 py-2 text-xs font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#0a4a3f]"
                  >
                    Explore
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
