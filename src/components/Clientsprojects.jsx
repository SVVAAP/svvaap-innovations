import React, { useState, useEffect } from 'react';
import { GlobeAltIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import Jnanashikshakendra from "../img/jnanashikshakendra_screenshot.png";
import Jobhunt4u from "../img/jobhunt4u_screenshot.png";
import A2Zpremiumdeals from "../img/a2zpremiumdeals_screenshot.png";
import Sen10games from "../img/sen10games_screenshot.png";

const projects = [
  {
    title: "Jnanashikshakendra.com",
    description: "An educational platform offering a wide range of learning resources.",
    image: Jnanashikshakendra,
    url: "https://jnanashikshakendra.com",
    category: "Web Development",
    icon: <GlobeAltIcon className="h-10 w-10 text-indigo-500" />
  },
  {
    title: "Jobhunt4u.in",
    description: "A job portal connecting job seekers with potential employers.",
    image: Jobhunt4u,
    url: "https://jobhunt4u.in",
    category: "Web & Mobile",
    icon: <GlobeAltIcon className="h-10 w-10 text-indigo-500" />
  },
  {
    title: "A2Zpremiumdeals.com",
    description: "An e-commerce platform offering premium deals across various categories.",
    image: A2Zpremiumdeals,
    url: "https://a2zpremiumdeals.com",
    category: "E-commerce",
    icon: <GlobeAltIcon className="h-10 w-10 text-indigo-500" />
  },
  {
    title: "Sen10games.in",
    description: "A visionary game development company creating futuristic, sci-fi gaming experiences.",
    image: Sen10games,
    url: "https://sen10games.in",
    category: "Game Development",
    icon: <DevicePhoneMobileIcon className="h-10 w-10 text-indigo-500" />
  }
];

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handleClick = (url) => {
    window.location.href = url; // Redirect to the project's URL
  };

  return (
    <div className="bg-[#f7f6f1] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0f6d5e]">Client Showcase</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#0a1324] sm:text-4xl">Products we've built for scale.</h2>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-[#d4d5d8] bg-gradient-to-br from-[#0a1220] via-[#102436] to-[#051018] shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[520px]">
            {/* Left: Info Panel */}
            <div
              className="flex w-full flex-col justify-center space-y-4 bg-gradient-to-r from-[#0f1a2f]/95 via-[#0f1a2f]/60 to-transparent px-6 py-10 text-white sm:px-8 sm:py-12 lg:w-2/5"
              onClick={() => handleClick(projects[currentIndex].url)}
            >
              <div className="flex items-center gap-3">
                <span className="inline-block h-2 w-2 rounded-full bg-[#0f6d5e]"></span>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8ad3c4]">
                  {projects[currentIndex].category}
                </p>
              </div>
              <h3 className="text-2xl font-bold leading-tight sm:text-3xl">{projects[currentIndex].title}</h3>
              <p className="text-sm leading-relaxed text-[#d5e9e4] sm:text-base">{projects[currentIndex].description}</p>
              <div className="mt-6 flex gap-3 text-xs font-semibold text-[#0f6d5e]">
                <span>Click to explore →</span>
              </div>
            </div>

            {/* Right: Project Image */}
            <div className="relative w-full lg:w-3/5">
              <img
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1220]/40 to-transparent"></div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            aria-label="Previous project"
            className="group absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-[#0f6d5e] sm:p-4"
          >
            <svg className="h-5 w-5 text-white sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            aria-label="Next project"
            className="group absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-[#0f6d5e] sm:p-4"
          >
            <svg className="h-5 w-5 text-white sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-[#0f6d5e]' : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
