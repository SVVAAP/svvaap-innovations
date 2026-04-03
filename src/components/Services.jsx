import React from 'react';
import { 
  DevicePhoneMobileIcon, 
  GlobeAltIcon, 
  CodeBracketIcon, 
  ShoppingBagIcon, 
  PuzzlePieceIcon, 
  CloudIcon, 
  PencilIcon, 
  SparklesIcon, 
  ChartBarIcon, 
  LifebuoyIcon 
} from '@heroicons/react/24/outline';


export default function Services() {
  const services = [
    {
      icon: <DevicePhoneMobileIcon className="h-6 w-6" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that provide seamless user experiences.',
    },
    // {
    //   icon: <GlobeAltIcon className="h-6 w-6" />,
    //   title: 'Digital Transformation',
    //   description: 'End-to-end digital solutions to modernize your business operations and improve efficiency.',
    // },
    {
      icon: <CodeBracketIcon className="h-6 w-6" />,
      title: 'Web Development',
      description: 'Custom websites and web applications tailored to client needs, using modern technologies.',
    },
    {
      icon: <ShoppingBagIcon className="h-6 w-6" />,
      title: 'E-Commerce Solutions',
      description: 'Building online stores, integrating payment gateways, and providing complete e-commerce platforms.',
    },
    {
      icon: <PuzzlePieceIcon className="h-6 w-6" />,
      title: 'Game Development',
      description: 'Engaging and immersive game applications using Unity and other platforms.',
    },
    // {
    //   icon: <CloudIcon className="h-6 w-6" />,
    //   title: 'Cloud Solutions',
    //   description: 'Scalable cloud services for storage, hosting, and data management.',
    // },
    {
      icon: <PencilIcon className="h-6 w-6" />,
      title: 'UI/UX Design',
      description: 'Intuitive and user-friendly design solutions to elevate user experiences.',
    },
    {
      icon: <SparklesIcon className="h-6 w-6" />,
      title: 'AI and Machine Learning',
      description: 'Incorporating AI-driven solutions to automate processes and enhance decision-making.',
    },
    // {
    //   icon: <ChartBarIcon className="h-6 w-6" />,
    //   title: 'Digital Marketing',
    //   description: 'SEO, social media marketing, and advertising strategies to improve online presence.',
    // },
    // {
    //   icon: <LifebuoyIcon className="h-6 w-6" />,
    //   title: 'Technical Support and Maintenance',
    //   description: 'Ongoing support and updates to ensure smooth functionality of digital solutions.',
    // },
  ];
  

  return (
    <div id="services" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0f6d5e]">Core Services</p>
          <h2 className="mt-4 text-3xl font-semibold text-[#0a1324] sm:text-4xl">Deep expertise across modern technology stacks.</h2>
          <p className="mt-4 text-[#4b5567]">
            From initial concept through post-launch optimization, we deliver comprehensive digital capabilities with proven execution.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-[#e5e7eb] bg-gradient-to-br from-[#fcfdff] to-[#f8f9fb] p-8 shadow-[0_12px_24px_rgba(10,19,36,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(10,19,36,0.12)] hover:border-[#0f6d5e]/20"
            >
              <div className="inline-flex rounded-xl bg-[#eef8f6] p-3.5 text-[#0f6d5e] group-hover:bg-[#0f6d5e] group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-[#0f1a2f]">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4f5c71]">{service.description}</p>
              <div className="mt-5 flex items-center text-sm font-medium text-[#0f6d5e] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more →
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
