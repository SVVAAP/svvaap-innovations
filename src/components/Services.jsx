import React from 'react';
import {  DevicePhoneMobileIcon, GlobeAltIcon, CloudIcon, LockClosedIcon } from '@heroicons/react/24/outline';

export default function Services() {
  const services = [
    
    {
      icon: <DevicePhoneMobileIcon className="h-6 w-6" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that provide seamless user experiences.'
    },
    
    {
      icon: <GlobeAltIcon className="h-6 w-6" />,
      title: 'Digital Transformation',
      description: 'End-to-end digital solutions to modernize your business operations and improve efficiency.'
    },
    {
      icon: <CloudIcon className="h-6 w-6" />,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and deployment solutions for your applications.'
    },
    {
      icon: <LockClosedIcon className="h-6 w-6" />,
      title: 'Security',
      description: 'Robust security measures and best practices to protect your digital assets.'
    }
  ];

  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive software solutions to help your business grow and succeed
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-sm hover:shadow-lg transition-all duration-200"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-600 ring-4 ring-white">
                  {service.icon}
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
