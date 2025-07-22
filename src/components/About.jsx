import React from 'react';
import { FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';
import { SiTailwindcss, SiReact, SiFirebase, SiMongodb, SiNextdotjs } from 'react-icons/si';

export default function AboutUs() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 px-6 bg-gray-900 text-white">
        <h1 className="text-4xl sm:text-5xl font-bold">About Svvaap Innovations</h1>
        <p className="mt-4 text-lg max-w-2xl">
          Innovating the future with cutting-edge technology and creative solutions.
        </p>
      </section>
      
      {/* What We Do */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">What We Do</h2>
        <p className="text-lg text-center text-gray-600 mt-4 max-w-3xl mx-auto">
          At Svvaap Innovations, we specialize in providing digital solutions, including web development, mobile applications, and AI-powered tools to help businesses grow.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-10">
          <div className="text-center p-6 bg-gray-100 rounded-lg shadow">
            <FaRocket className="text-indigo-600 text-5xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Innovative Solutions</h3>
            <p className="text-gray-600 mt-2">We bring creativity and technology together to build unique digital products.</p>
          </div>
          <div className="text-center p-6 bg-gray-100 rounded-lg shadow">
            <FaUsers className="text-indigo-600 text-5xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Client-Centric Approach</h3>
            <p className="text-gray-600 mt-2">Understanding customer needs and delivering tailor-made solutions.</p>
          </div>
          <div className="text-center p-6 bg-gray-100 rounded-lg shadow">
            <FaLightbulb className="text-indigo-600 text-5xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Continuous Innovation</h3>
            <p className="text-gray-600 mt-2">We constantly evolve to integrate the latest technology trends.</p>
          </div>
        </div>
      </section>
      
      {/* Tech Stack */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Technologies We Use</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-10">
            <SiReact className="text-blue-500 text-6xl" />
            <SiNextdotjs className="text-white text-6xl" />
            <SiTailwindcss className="text-blue-400 text-6xl" />
            <SiFirebase className="text-yellow-500 text-6xl" />
            <SiMongodb className="text-green-500 text-6xl" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">Let's Work Together</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Interested in our services? Get in touch with us today!
        </p>
        <a href="/contact" className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition">
          Contact Us
        </a>
      </section>
    </div>
  );
}
