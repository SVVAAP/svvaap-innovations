import React from 'react';
import { ArrowRightIcon, CodeBracketIcon, DevicePhoneMobileIcon, LightBulbIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <div id="home" className="relative bg-black pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
          Building{' '}
          <span className="relative whitespace-nowrap text-indigo-500">
            <span className="relative">innovative solutions</span>
          </span>{' '}
          for real-world problems
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-300">
          We develop cutting-edge websites, mobile apps, and AI solutions to help startups and businesses thrive in the digital age.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-700 focus-visible:outline-indigo-500"
          >
            Get Started
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </div>

        {/* <div className="mt-36 lg:mt-44">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root rounded-lg bg-gray-800 px-6 pb-8">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                    <CodeBracketIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-white">Web Development</h3>
                  <p className="mt-5 text-base leading-7 text-gray-400">
                    Custom websites and web applications built with modern technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flow-root rounded-lg bg-gray-800 px-6 pb-8">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                    <DevicePhoneMobileIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-white">Mobile Apps</h3>
                  <p className="mt-5 text-base leading-7 text-gray-400">
                    Native and cross-platform mobile applications for iOS and Android.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flow-root rounded-lg bg-gray-800 px-6 pb-8">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                    <LightBulbIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-white">AI Solutions</h3>
                  <p className="mt-5 text-base leading-7 text-gray-400">
                    Intelligent automation and AI-powered features for your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
