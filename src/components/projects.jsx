import React from 'react';
import { ExternalLink, ArrowRight, Code, Database, Cloud, Shield, Cpu, Zap ,PenTool, ImagePlus, Utensils } from 'lucide-react';


const InnovationProjects = () => {
 

const projects = [
  {
  id: 1,
  title: "Createx",
  description:
    "Createx is an AI-powered platform that transforms ideas into production-ready web applications. Built on top of DeepSeek, OpenAI, and Gemini, it generates full-stack code from natural language — from UI components to backend logic and deployment.",
  link: "https://createx.svvaap.in",
  image: "./img/createx-screenshot.png",
  icon: <PenTool className="w-6 h-6" />,
  tech: ["React", "Gemini API", "OpenAI", "DeepSeek", "Supabase", "Tailwind CSS"]
},

 {
  id: 2,
  title: "Ideogram",
  description:
    "Ideogram is a community-powered idea-sharing platform where innovators can post, explore, and collaborate on ideas across categories like business, technology, social impact, and startups. It's built to spark the next big thing — one idea at a time.",
  link: "https://ideogram.svvaap.in",
  image: "./img/ideogram-screenshot.png",
  icon: <ImagePlus className="w-6 h-6" />,
  tech: ["Next.js", "Supabase", "Tailwind CSS"]
},

  {
  id: 3,
  title: "MenuCraft.in",
  description:
    "MenuCraft.in is a smart digital menu and POS software built for modern restaurants and cafes. It offers interactive QR-based menus, real-time menu updates, and a full-featured POS system for order management, billing, and inventory — all in one seamless platform.",
  link: "https://menucraft.in",
  image: "https://cms.menutiger.com/wp-content/uploads/2022/11/ver-2-The-best-QR-code-contactless-digital-menu-in-2022-copy-1536x702.jpg?w=600&h=400&fit=crop",
  icon: <Utensils className="w-6 h-6" />,
  tech: ["React", "Supabase", "QR API", "MongoDB", "Tailwind CSS"]
}

];



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Innovation <span className="text-blue-400">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Cutting-edge software solutions transforming enterprise technology landscapes
          </p>
          <div className="mt-8 flex justify-center space-x-4 text-sm text-gray-400">
            <span className="px-3 py-1 bg-blue-900/50 rounded-full">Enterprise Solutions</span>
            <span className="px-3 py-1 bg-blue-900/50 rounded-full">Cloud Native</span>
            <span className="px-3 py-1 bg-blue-900/50 rounded-full">AI/ML Powered</span>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content Side */}
              <div className="flex-1">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                  {/* Project Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                      {project.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {project.title}
                      </h2>
                      <div className="text-sm text-gray-500 font-medium">
                        Project #{project.id.toString().padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 group"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Image Side */}
              <div className="flex-1">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="relative w-full h-80 lg:h-96 object-cover rounded-xl shadow-xl transform group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Impact & Innovation</h3>
            <p className="text-xl opacity-90">
              Delivering enterprise solutions that drive digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime SLA</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50M+</div>
              <div className="text-blue-100">API Calls/Day</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Coverage</div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition-colors duration-300 transform hover:scale-105">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationProjects;