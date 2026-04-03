import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaRocket, FaUsers, FaLightbulb, FaHeart, FaGraduationCap, FaLaptop } from 'react-icons/fa';
import { SiMongodb, SiFirebase, SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss, SiDocker } from 'react-icons/si';
import Navbar from './NavBar';
import Footer from './footer';

export default function Careers() {
  const techStack = [
    { name: 'React.js', icon: <FaReact className="text-blue-500 h-10 w-10" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black h-10 w-10" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600 h-10 w-10" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400 h-10 w-10" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500 h-10 w-10" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-yellow-500 h-10 w-10" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600 h-10 w-10" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-400 h-10 w-10" /> },
    { name: 'Python', icon: <FaPython className="text-blue-400 h-10 w-10" /> },
    { name: 'Docker', icon: <SiDocker className="text-blue-600 h-10 w-10" /> },
    { name: 'AWS', icon: <FaDatabase className="text-orange-500 h-10 w-10" /> },
  ];

  const benefits = [
    { icon: <FaRocket className="h-8 w-8 text-blue-500" />, title: 'Career Growth', description: 'Continuous learning and advancement opportunities' },
    { icon: <FaUsers className="h-8 w-8 text-green-500" />, title: 'Remote Work', description: 'Flexible work arrangements and remote options' },
    { icon: <FaLightbulb className="h-8 w-8 text-yellow-500" />, title: 'Innovation', description: 'Work on cutting-edge technologies and projects' },
    { icon: <FaHeart className="h-8 w-8 text-red-500" />, title: 'Health Benefits', description: 'Comprehensive health and wellness programs' },
    { icon: <FaGraduationCap className="h-8 w-8 text-purple-500" />, title: 'Learning Budget', description: 'Annual budget for courses and conferences' },
    { icon: <FaLaptop className="h-8 w-8 text-indigo-500" />, title: 'Equipment', description: 'Latest hardware and software tools' },
  ];

  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl mb-8">Innovate, Collaborate, and Grow with Us</p>
          <p className="text-lg text-blue-200">
            We're building the future of technology. Come be part of something extraordinary.
          </p>
        </div>
      </section>

      {/* About Company */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">What We Do</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We are a tech-driven company building innovative solutions in AI, web development,
          and automation. Our goal is to revolutionize industries with cutting-edge technology
          while fostering a culture of creativity, collaboration, and continuous learning.
        </p>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Culture</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRocket className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
              <p className="text-gray-600">We encourage creative thinking and experimentation to solve complex problems.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600">We believe in the power of teamwork and diverse perspectives.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGraduationCap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
              <p className="text-gray-600">We invest in your growth with learning opportunities and mentorship.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Benefits & Perks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {techStack.map((tech, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                {tech.icon}
                <p className="mt-3 text-sm font-medium text-center">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Open Positions</h2>

        <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto text-center border border-gray-200">
          <p className="text-xl font-semibold text-gray-900 mb-3">We currently do not have open positions.</p>
          <p className="text-lg text-gray-700 mb-4">Upload your resume here via email:</p>
          <a
            href="mailto:workwithsvvaap@gmail.com"
            className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            workwithsvvaap@gmail.com
          </a>
          <p className="text-sm text-gray-600 mt-4">
            We will reach out when a suitable role opens up.
          </p>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6">Ready to Join Us?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Send your resume, portfolio, and a cover letter telling us why you'd be a great fit for our team.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <p className="text-lg font-semibold text-gray-900 mb-2">Apply via Email:</p>
            <a 
              href="mailto:workwithsvvaap@gmail.com" 
              className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              workwithsvvaap@gmail.com
            </a>
            <p className="text-sm text-gray-600 mt-4">
              Please include the position you're applying for in the subject line.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
