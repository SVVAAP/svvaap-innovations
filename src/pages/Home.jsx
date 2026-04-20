import React from 'react';
import {
  ArrowUpRightIcon,
  BuildingOffice2Icon,
  GlobeAsiaAustraliaIcon,
  ShieldCheckIcon,
  SparklesIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline';
import Navbar from '../components/NavBar';
import Footer from '../components/footer';
import Services from '../components/Services';
import Projects from '../components/Clientsprojects';
import Partners from '../components/partners';
import Contact from '../components/Contact';
import TeamMembers from '../components/TeamMembers';
import CompanyStructure from '../components/CompanyStructure';

function Home() {
  const capabilityCards = [
    {
      title: 'Digital Platforms',
      description:
        'Enterprise-grade web and mobile platforms with reliability, speed, and measurable business impact.',
      icon: <BuildingOffice2Icon className="h-7 w-7" />,
    },
    {
      title: 'AI-Enabled Products',
      description:
        'Automation, insights, and AI workflows designed for real operational decisions, not just demos.',
      icon: <CpuChipIcon className="h-7 w-7" />,
    },
    {
      title: 'Design and Brand Systems',
      description:
        'Clear UX systems and polished visual language that make your product feel trusted from first click.',
      icon: <SparklesIcon className="h-7 w-7" />,
    },
    {
      title: 'Security and Governance',
      description:
        'Secure-by-default architecture, compliant workflows, and strong governance from day one.',
      icon: <ShieldCheckIcon className="h-7 w-7" />,
    },
  ];

  const industries = [
    'Startups and New Ventures',
    'Healthcare and Diagnostics',
    'Education and Skilling',
    'Retail and E-commerce',
    'Hospitality and Tourism',
    'Enterprise Internal Systems',
  ];

  return (
    <div className="min-h-screen bg-[#f7f6f1] text-[#101827]">
      <Navbar />

      <main>
        <section className="relative overflow-hidden px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="hero-aura" aria-hidden="true" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c9cdc2] bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#285f53]">
                <GlobeAsiaAustraliaIcon className="h-4 w-4" />
                Rooted in Udupi, Built for the World
              </p>

              <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-[#0a1324] sm:text-5xl lg:text-6xl">
                Software Development Company in Udupi and Manipal for web, app, and AI products.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#374153]">
                Svvaap Innovations is a budget-friendly software development company in Udupi, Manipal,
                and Karnataka. We help startups and growing businesses launch fast with reliable web
                development, mobile app development, and custom AI-powered software solutions.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full bg-[#b86f2f] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#9c5c23]"
                >
                  Start Your Transformation
                  <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center rounded-full border border-[#c9cdc2] bg-white px-6 py-3 text-sm font-semibold text-[#1b2b3f] transition hover:bg-[#eef1ea]"
                >
                  Explore Capabilities
                </a>

                <a
                  href="/21xengineers"
                  className="inline-flex items-center rounded-full border border-[#c9cdc2] bg-white px-6 py-3 text-sm font-semibold text-[#1b2b3f] transition hover:bg-[#eef1ea]"
                >
                  Explore 21xEngineers
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 text-sm sm:grid-cols-4">
                <div className="rounded-2xl border border-[#d7dbcf] bg-white/80 p-3">
                  <p className="text-2xl font-semibold text-[#0a1324]">30+</p>
                  <p className="text-[#4f5d72]">Projects Delivered</p>
                </div>
                <div className="rounded-2xl border border-[#d7dbcf] bg-white/80 p-3">
                  <p className="text-2xl font-semibold text-[#0a1324]">8+</p>
                  <p className="text-[#4f5d72]">Industry Verticals</p>
                </div>
                <div className="rounded-2xl border border-[#d7dbcf] bg-white/80 p-3">
                  <p className="text-2xl font-semibold text-[#0a1324]">24/7</p>
                  <p className="text-[#4f5d72]">Strategic Support</p>
                </div>
                <div className="rounded-2xl border border-[#d7dbcf] bg-white/80 p-3">
                  <p className="text-2xl font-semibold text-[#0a1324]">India + Global</p>
                  <p className="text-[#4f5d72]">Delivery Footprint</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-[#d4d5d8] bg-gradient-to-br from-[#0f6d5e] via-[#124336] to-[#0d111b] p-7 text-white shadow-2xl">
                <p className="text-xs uppercase tracking-[0.2em] text-[#a9e0d5]">What makes us different</p>
                <h2 className="mt-4 text-2xl font-semibold">Precision of enterprise, spirit of Udupi hospitality.</h2>
                <p className="mt-4 text-sm leading-relaxed text-[#d5e9e4]">
                  Our teams combine strong engineering practice with relationship-first execution.
                  Just like the temple town's tradition of care and consistency, we build solutions
                  that are dependable, respectful, and built to last.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-[#def3ed]">
                  <li>Cross-functional pods for product, engineering, and design</li>
                  <li>Clear milestones with transparent delivery governance</li>
                  <li>Long-term partner mindset over short-term output</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0f6d5e]">Capabilities</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#0a1324] sm:text-4xl">Built for boardroom goals and customer outcomes.</h2>
              <p className="mt-4 text-[#4b5567]">
                We design and deliver digital systems that support growth, efficiency, and trust at scale.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {capabilityCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-2xl border border-[#e4e4e7] bg-[#fcfcfb] p-7 shadow-[0_10px_24px_rgba(14,24,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(14,24,42,0.1)]"
                >
                  <div className="inline-flex rounded-xl bg-[#eef8f6] p-3 text-[#0f6d5e]">{card.icon}</div>
                  <h3 className="mt-4 text-xl font-semibold text-[#0f1a2f]">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#4f5c71]">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="industries" className="bg-[#102132] px-4 py-20 text-white sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8ad3c4]">Industry Focus</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Solutions shaped by domain realities.</h2>
              <p className="mt-4 max-w-2xl text-[#cbdbef]">
                From startup MVPs to modernization programs for established organizations, our delivery model
                adapts to business maturity and market pressure.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {industries.map((industry) => (
                <div key={industry} className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm font-medium text-[#eef5ff]">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-svvaap" className="bg-[#f7f6f1] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-3xl border border-[#d8d9ce] bg-white p-8 shadow-[0_18px_44px_rgba(18,23,33,0.08)] sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b86f2f]">Udupi Values in Action</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#0a1324] sm:text-4xl">
              Tradition inspires our execution discipline.
            </h2>
            <p className="mt-5 max-w-4xl text-[#3d4a5f]">
              Udupi is known for integrity, service, and timeless systems that work every day. We bring the same principles
              into technology delivery: clarity in communication, consistency in quality, and respect for every stakeholder.
              This balance of heritage and innovation helps us build products that scale without losing human connection.
            </p>
          </div>
        </section>

        <section id="local-seo" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0f6d5e]">Local Software Partner</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#0a1324] sm:text-4xl">
                Looking for budget-friendly web and app developers in Udupi or Manipal?
              </h2>
              <p className="mt-5 text-[#4f5c71] leading-relaxed">
                Our local delivery team supports companies in Udupi and Manipal with end-to-end software
                development, from requirement discovery and UX to deployment and long-term support.
                Whether you need a business website, e-commerce platform, custom CRM, or mobile app,
                Svvaap Innovations provides practical execution with transparent pricing.
              </p>
              <p className="mt-4 text-[#4f5c71] leading-relaxed">
                We also run <a href="https://21xengineers.svvaap.in" className="font-semibold text-[#0f6d5e] hover:text-[#0a4a3f]">21xEngineers</a>,
                our technology platform focused on AI and innovation updates.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/software-development-company-udupi" className="rounded-full border border-[#c9cdc2] bg-[#f9faf8] px-5 py-3 text-sm font-semibold text-[#1b2b3f] transition hover:bg-[#eef1ea]">
                  Software Company in Udupi
                </a>
                <a href="/software-development-company-manipal" className="rounded-full border border-[#c9cdc2] bg-[#f9faf8] px-5 py-3 text-sm font-semibold text-[#1b2b3f] transition hover:bg-[#eef1ea]">
                  Software Company in Manipal
                </a>
                <a href="/budget-friendly-web-app-developers-udupi-manipal" className="rounded-full border border-[#c9cdc2] bg-[#f9faf8] px-5 py-3 text-sm font-semibold text-[#1b2b3f] transition hover:bg-[#eef1ea]">
                  Budget Web/App Developers
                </a>
              </div>
            </div>
          </div>
        </section>

        <CompanyStructure />
        <Services />
        <Projects />
        <Partners />
        <Contact />
        <TeamMembers />

        <section id="cta" className="bg-[#f0ede3] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-3xl border border-[#cfc8b4] bg-[#fffaf0] p-8 sm:flex-row sm:items-center sm:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9c5c23]">Ready to Transform?</p>
              <h2 className="mt-2 text-3xl font-semibold text-[#1c283c]">Let's build your next big thing together.</h2>
              <p className="mt-3 max-w-2xl text-[#4d596c]">
                From startups to enterprises, we partner with ambitious teams to deliver world-class digital products.
              </p>
            </div>
            <a
              href="mailto:workwithsvvaap@gmail.com?subject=Let%27s%20Build%20Together"
              className="inline-flex items-center justify-center rounded-full bg-[#b86f2f] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#9c5c23] whitespace-nowrap"
            >
              Start a Conversation
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default Home;

