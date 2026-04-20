import React from "react";
import { Link } from "react-router-dom";
import SEO from "./SEO.jsx";

export default function LocalLandingPage({
  title,
  description,
  path,
  keywords,
  intro,
  highlights,
  services,
  process,
  faqs,
  ctaTitle,
  ctaText,
  faqSchemaId,
}) {
  const faqSchema = faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : undefined;

  return (
    <div className="min-h-screen bg-[#f7f6f1] text-[#101827]">
      <SEO
        title={title}
        description={description}
        path={path}
        keywords={keywords}
        schema={faqSchema}
      />

      <main>
        <section className="px-4 pb-16 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d8d9ce] bg-white p-8 shadow-[0_18px_44px_rgba(18,23,33,0.08)] sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0f6d5e]">Local SEO Landing Page</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight text-[#0a1324] sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#4f5c71]">{intro}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/contact" className="rounded-full bg-[#0f6d5e] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0a4a3f]">
                Get a Quote
              </a>
              <a href="/services" className="rounded-full border border-[#c9cdc2] bg-white px-5 py-3 text-sm font-semibold text-[#1b2b3f] transition hover:bg-[#eef1ea]">
                View Services
              </a>
              <a href="/21xengineers" className="rounded-full border border-[#c9cdc2] bg-white px-5 py-3 text-sm font-semibold text-[#1b2b3f] transition hover:bg-[#eef1ea]">
                Explore 21xEngineers
              </a>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {highlights.map((item) => (
                <article key={item.title} className="rounded-2xl border border-[#e5e7eb] bg-[#fcfcfb] p-6 shadow-[0_10px_24px_rgba(14,24,42,0.06)]">
                  <h2 className="text-lg font-semibold text-[#0f1a2f]">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#4f5c71]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.9fr]">
            <article className="rounded-[2rem] border border-[#d8d9ce] bg-white p-8 shadow-[0_18px_44px_rgba(18,23,33,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b86f2f]">What We Deliver</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#0a1324]">Services built for local search intent and real buyers.</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {services.map((service) => (
                  <div key={service} className="rounded-2xl border border-[#e5e7eb] bg-[#f9faf8] p-5 text-sm font-medium text-[#243044]">
                    {service}
                  </div>
                ))}
              </div>
            </article>

            <aside className="rounded-[2rem] border border-[#d8d9ce] bg-[#102132] p-8 text-white shadow-[0_18px_44px_rgba(18,23,33,0.14)]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8ad3c4]">Working Process</p>
              <h2 className="mt-3 text-3xl font-semibold">Fast, transparent, and budget-conscious.</h2>
              <div className="mt-7 space-y-4">
                {process.map((step, index) => (
                  <div key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8ad3c4]">0{index + 1}</p>
                    <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#cbdbef]">{step.description}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section id={faqSchemaId || "faq"} className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d8d9ce] bg-white p-8 shadow-[0_18px_44px_rgba(18,23,33,0.08)] sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0f6d5e]">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#0a1324]">Common questions from local clients.</h2>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-2xl border border-[#e5e7eb] bg-[#fcfcfb] p-6">
                  <h3 className="text-lg font-semibold text-[#0f1a2f]">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#4f5c71]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-[2rem] border border-[#cfc8b4] bg-[#fffaf0] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9c5c23]">{ctaTitle}</p>
              <h2 className="mt-2 text-3xl font-semibold text-[#1c283c]">{ctaText}</h2>
            </div>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-[#b86f2f] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#9c5c23] whitespace-nowrap">
              Contact Svvaap
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
