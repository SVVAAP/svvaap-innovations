import React from "react";
import { RocketLaunchIcon, LightBulbIcon } from "@heroicons/react/24/outline";

const upcomingProjects = [
  {
    title: "Ideogram",
    description:
      "A platform where users can get, upload, or share ideas. AI-generated ideas for business, projects, games, and more.",
    status: "In Development",
    icon: <LightBulbIcon className="h-8 w-8 text-yellow-400" />,
    image: "https://c4.wallpaperflare.com/wallpaper/863/172/896/3-316-16-9-aspect-ratio-s-sfw-wallpaper-preview.jpg",
    category: "AI & Innovation",
    url: "https://ideogram.svvaap.in", // Replace with actual URL
  },
  {
    title: "MenuCraft",
    description:
      "A digital menu and website solution for restaurants, providing customizable themes and an interactive experience.",
    status: "Prototype Phase",
    icon: <RocketLaunchIcon className="h-8 w-8 text-blue-400" />,
    image: "https://media.qrtiger.com/blog/2022/04/interactive-digital-menu-app-vs-digital-menu-boarddjpg_800_66.jpeg",
    category: "Food Tech",
    url: "https://menucraft.in", // Replace with actual URL
  }
];

export default function UpcomingProjects() {
  return (
    <div id="upcoming" className="w-full py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Upcoming Projects</h2>
          <p className="mt-3 text-lg text-gray-400">
            Exciting innovations currently in development.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-12">
          {upcomingProjects.map((project, index) => (
            <div key={index} className="w-full flex flex-col sm:flex-row bg-black rounded-lg shadow-lg overflow-hidden">
              {/* Image Section (60%) */}
              <div className="sm:w-3/5 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover aspect-[16/9]"
                />
                {/* Fade-Out Effect */}
                <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black via-transparent"></div>
              </div>

              {/* Content Section (40%) */}
              <div className="sm:w-2/5 p-6 flex flex-col justify-center">
                <div className="flex items-center space-x-3 mb-4">
                  {project.icon}
                  <span className="text-sm uppercase tracking-wide text-gray-400">{project.category}</span>
                </div>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-gray-300">{project.description}</p>

                {/* Status Badge */}
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-indigo-600 text-xs font-medium rounded-full">
                    {project.status}
                  </span>
                </div>

                {/* Visit Now Button */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block px-5 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                  Visit Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
