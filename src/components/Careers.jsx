import React, { useState } from 'react';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaRocket, FaUsers, FaLightbulb, FaHeart, FaGraduationCap, FaLaptop, FaGlobe, FaClock } from 'react-icons/fa';
import { SiMongodb, SiFirebase, SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss, SiDocker } from 'react-icons/si';
import Navbar from './NavBar';
import Footer from './footer';

export default function Careers() {
  const [activeTab, setActiveTab] = useState('all');

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

  const jobPositions = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      category: 'frontend',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ Years',
      salary: '$80K - $120K',
      description: 'We are looking for a skilled React.js developer to join our frontend team and help build amazing user experiences.',
      requirements: [
        'Strong experience with React.js, Next.js, and TypeScript',
        'Proficiency in modern CSS frameworks (Tailwind CSS, Styled Components)',
        'Experience with state management (Redux, Zustand)',
        'Knowledge of responsive design and cross-browser compatibility',
        'Experience with testing frameworks (Jest, React Testing Library)'
      ],
      responsibilities: [
        'Develop and maintain high-quality user interfaces',
        'Collaborate with designers and backend developers',
        'Optimize applications for maximum performance',
        'Write clean, maintainable, and well-documented code'
      ]
    },
    {
      id: 2,
      title: 'Backend Developer',
      category: 'backend',
      location: 'Hybrid',
      type: 'Full-time',
      experience: '2+ Years',
      salary: '$70K - $100K',
      description: 'Join our backend team and work with cutting-edge technologies to build scalable APIs and services.',
      requirements: [
        'Experience with Node.js and Express.js',
        'Knowledge of database design (MongoDB, PostgreSQL)',
        'Experience with cloud platforms (AWS, Firebase)',
        'Understanding of RESTful APIs and GraphQL',
        'Experience with authentication and authorization'
      ],
      responsibilities: [
        'Design and implement scalable backend services',
        'Create and maintain APIs',
        'Ensure data security and privacy',
        'Collaborate with frontend team for seamless integration'
      ]
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      category: 'fullstack',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ Years',
      salary: '$75K - $110K',
      description: 'Versatile developer who can work on both frontend and backend, bringing ideas from concept to deployment.',
      requirements: [
        'Proficiency in both frontend and backend technologies',
        'Experience with React.js and Node.js',
        'Knowledge of database systems',
        'Understanding of DevOps practices',
        'Experience with version control (Git)'
      ],
      responsibilities: [
        'Develop end-to-end features',
        'Participate in code reviews',
        'Contribute to technical architecture decisions',
        'Mentor junior developers'
      ]
    },
    {
      id: 4,
      title: 'AI/ML Engineer',
      category: 'ai',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ Years',
      salary: '$90K - $130K',
      description: 'Join our AI team to develop innovative machine learning solutions and push the boundaries of technology.',
      requirements: [
        'Strong background in machine learning and deep learning',
        'Experience with Python, TensorFlow, PyTorch',
        'Knowledge of data preprocessing and feature engineering',
        'Experience with cloud ML platforms',
        'Understanding of MLOps practices'
      ],
      responsibilities: [
        'Develop and deploy ML models',
        'Research and implement new AI technologies',
        'Collaborate with product team on AI features',
        'Optimize model performance and scalability'
      ]
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      category: 'devops',
      location: 'Hybrid',
      type: 'Full-time',
      experience: '2+ Years',
      salary: '$80K - $115K',
      description: 'Help us build and maintain robust infrastructure and deployment pipelines.',
      requirements: [
        'Experience with Docker and Kubernetes',
        'Knowledge of cloud platforms (AWS, GCP)',
        'Experience with CI/CD pipelines',
        'Understanding of monitoring and logging',
        'Experience with infrastructure as code'
      ],
      responsibilities: [
        'Design and maintain cloud infrastructure',
        'Automate deployment processes',
        'Monitor system performance and security',
        'Collaborate with development teams'
      ]
    }
  ];

  const benefits = [
    { icon: <FaRocket className="h-8 w-8 text-blue-500" />, title: 'Career Growth', description: 'Continuous learning and advancement opportunities' },
    { icon: <FaUsers className="h-8 w-8 text-green-500" />, title: 'Remote Work', description: 'Flexible work arrangements and remote options' },
    { icon: <FaLightbulb className="h-8 w-8 text-yellow-500" />, title: 'Innovation', description: 'Work on cutting-edge technologies and projects' },
    { icon: <FaHeart className="h-8 w-8 text-red-500" />, title: 'Health Benefits', description: 'Comprehensive health and wellness programs' },
    { icon: <FaGraduationCap className="h-8 w-8 text-purple-500" />, title: 'Learning Budget', description: 'Annual budget for courses and conferences' },
    { icon: <FaLaptop className="h-8 w-8 text-indigo-500" />, title: 'Equipment', description: 'Latest hardware and software tools' },
  ];

  const filteredJobs = activeTab === 'all' ? jobPositions : jobPositions.filter(job => job.category === activeTab);

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

      {/* Job Listings */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Open Positions</h2>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {['all', 'frontend', 'backend', 'fullstack', 'ai', 'devops'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <div key={job.id} className="border border-gray-200 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{job.title}</h3>
                  <p className="text-gray-600 mt-1">{job.description}</p>
                </div>
                <div className="mt-4 md:mt-0 md:text-right">
                  <p className="text-lg font-semibold text-blue-600">{job.salary}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="flex items-center text-sm text-gray-600">
                  <FaGlobe className="mr-2" />
                  {job.location}
                </span>
                <span className="flex items-center text-sm text-gray-600">
                  <FaClock className="mr-2" />
                  {job.type}
                </span>
                <span className="text-sm text-gray-600">
                  Experience: {job.experience}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Responsibilities:</h4>
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span className="text-gray-700">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No positions available in this category at the moment.</p>
            <p className="text-gray-500 mt-2">Check back later or send us your resume for future opportunities!</p>
          </div>
        )}
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
