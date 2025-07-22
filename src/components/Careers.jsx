import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiFirebase, SiNextdotjs,  } from 'react-icons/si';
import Navbar from './NavBar';
import Footer from './footer';

export default function Careers() {
  const techStack = [
    { name: 'React.js', icon: <FaReact className="text-blue-500 h-10 w-10" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black h-10 w-10" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-yellow-500 h-10 w-10" /> },
   
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600 h-10 w-10" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-400 h-10 w-10" /> },
    { name: 'Python', icon: <FaPython className="text-blue-400 h-10 w-10" /> },
  ];

  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24 text-center">
        <h1 className="text-4xl font-bold">Join Our Team</h1>
        <p className="mt-4 text-lg">Innovate, Collaborate, and Grow with Us</p>
      </section>

      {/* About Company */}
      <section className="py-16 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold">What We Do</h2>
        <p className="mt-4 text-lg text-gray-700">
          We are a tech-driven company building innovative solutions in AI, web development,
          and automation. Our goal is to revolutionize industries with technology.
        </p>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center">Technologies We Use</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {techStack.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              {tech.icon}
              <p className="mt-2 text-lg font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center">Open Positions</h2>
        <div className="mt-8 space-y-8">
          <div className="border p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">Frontend Developer</h3>
            <p className="mt-2 text-gray-700">We are looking for a skilled React.js developer...</p>
            <p className="mt-2 text-sm text-gray-600">Location: Remote | Experience: 2+ Years</p>
          </div>
          <div className="border p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">Backend Developer</h3>
            <p className="mt-2 text-gray-700">Join our backend team and work with Node.js and Firebase...</p>
            <p className="mt-2 text-sm text-gray-600">Location: Hybrid | Experience: 3+ Years</p>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold">Apply Now</h2>
        <p className="mt-4 text-lg text-gray-700">Send your resume & portfolio to:</p>
        <p className="mt-2 text-lg font-bold text-indigo-600">workwithsvvaap@gmail.com</p>
      </section>

      <Footer />
    </div>
  );
}
