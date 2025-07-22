import React from 'react';
import { ExternalLink, Instagram, Youtube, Rocket, Brain, Cpu, Globe, Users, TrendingUp, Play, Camera } from 'lucide-react';

const TwentyOneXEngineers = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Innovation Coverage",
      description: "Latest breakthroughs in artificial intelligence and machine learning"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Robotics Insights",
      description: "Cutting-edge robotics developments and industry analysis"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Tech Innovation",
      description: "Emerging technologies shaping the future of engineering"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Industry News",
      description: "Comprehensive coverage of tech industry trends and updates"
    }
  ];

  const stats = [
    { number: "10K+", label: "Tech Articles" },
    { number: "50K+", label: "Community Members" },
    { number: "500+", label: "AI Insights" },
    { number: "24/7", label: "News Coverage" }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-blue-100 px-6 py-2 rounded-full text-blue-700 font-semibold mb-6">
            <TrendingUp className="w-5 h-5" />
            Featured Tech News Platform
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet <span className="text-blue-600">21xEngineers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your premier destination for cutting-edge tech news, robotics insights, and AI innovation coverage
          </p>
        </div>

        {/* Main Feature Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">21xEngineers</h3>
                  <p className="text-blue-600 font-semibold">Tech News & Innovation Platform</p>
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                21xEngineers is a leading tech news platform dedicated to bringing you the latest developments in 
                robotics, artificial intelligence, and cutting-edge engineering innovations. Stay ahead of the curve 
                with expert analysis, industry insights, and breakthrough technology coverage.
              </p>

              {/* Social Media Links */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.instagram.com/21xengineers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 group"
                >
                  <Instagram className="w-5 h-5" />
                  Follow on Instagram
                  <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                </a>
                
                <a
                  href="https://www.youtube.com/@21xEngineers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 group"
                >
                  <Youtube className="w-5 h-5" />
                  Subscribe on YouTube
                  <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                </a>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <Brain className="w-12 h-12 mb-4 text-blue-200" />
                  <h4 className="font-bold text-lg mb-2">AI Coverage</h4>
                  <p className="text-blue-100 text-sm">Deep insights into artificial intelligence</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <Cpu className="w-12 h-12 mb-4 text-purple-200" />
                  <h4 className="font-bold text-lg mb-2">Robotics</h4>
                  <p className="text-purple-100 text-sm">Latest in robotics innovation</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <Camera className="w-12 h-12 mb-4 text-pink-200" />
                  <h4 className="font-bold text-lg mb-2">Visual Content</h4>
                  <p className="text-pink-100 text-sm">Engaging multimedia coverage</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <Play className="w-12 h-12 mb-4 text-green-200" />
                  <h4 className="font-bold text-lg mb-2">Video Content</h4>
                  <p className="text-green-100 text-sm">Expert analysis and tutorials</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        {/* <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Platform Impact</h3>
            <p className="text-gray-600">Making tech news accessible to everyone</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Connected with 21xEngineers</h3>
            <p className="text-lg mb-6 opacity-90">
              Don't miss out on the latest tech innovations and industry insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.instagram.com/21xengineers/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
                Follow Instagram
              </a>
              <a
                href="https://www.youtube.com/@21xEngineers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
                Subscribe YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwentyOneXEngineers;