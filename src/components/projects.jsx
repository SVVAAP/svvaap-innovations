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
    <div className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-black text-4xl font-bold mb-5 ">Projects</div>
        <div className="relative overflow-hidden rounded-lg shadow-4xl rotate-[3deg]">
          <div className="flex items-center h-[500px] bg-black ">
            {/* Left Section */}
            <div
              className="w-1/3 p-8 flex flex-col justify-center space-y-4 bg-gradient-to-r from-black to-transparent text-white cursor-pointer"
              onClick={() => handleClick(projects[currentIndex].url)} // Add click event to navigate
            >
              <div className="flex items-center space-x-4">
                <div>{projects[currentIndex].icon}</div>
                <p className="text-sm font-medium">{projects[currentIndex].category}</p>
              </div>
              <h3 className="text-2xl font-bold">{projects[currentIndex].title}</h3>
              <p className="text-gray-300">{projects[currentIndex].description}</p>
            </div>

            {/* Right Section */}
            <div className="w-2/3 relative ">
              <img
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                className="w-full h-full object-cover rounded-lg shadow-lg pr-5"
              />
              <div className="absolute inset-0 bg-black bg-opacity-5 rounded-lg "></div>
            </div>

          </div>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
