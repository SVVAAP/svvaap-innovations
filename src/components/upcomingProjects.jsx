import React from 'react';
import { RocketLaunchIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const upcomingProjects = [
  {
    title: "AI-Powered Agriculture",
    description: "Smart farming solutions using machine learning and IoT sensors",
    status: "Research Phase",
    icon: <LightBulbIcon className="h-6 w-6" />
  },
  {
    title: "Blockchain Supply Chain",
    description: "Transparent and secure supply chain management platform",
    status: "Development Starting Q1",
    icon: <RocketLaunchIcon className="h-6 w-6" />
  },
  {
    title: "AR Shopping Experience",
    description: "Revolutionary retail experience using augmented reality",
    status: "Prototype Phase",
    icon: <RocketLaunchIcon className="h-6 w-6" />
  }
];

export default function UpcomingProjects() {
  return (
    <div id="upcoming" className=" py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Upcoming Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-800">
            Innovative solutions in development
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingProjects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-gray-800 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-sm hover:shadow-lg transition-all duration-200"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-indigo-700 text-indigo-200 ring-4 ring-gray-800">
                  {project.icon}
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-white">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{project.description}</p>
                <div className="mt-4">
                  <span className="inline-flex items-center rounded-full bg-indigo-600 px-2.5 py-0.5 text-xs font-medium text-white">
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
