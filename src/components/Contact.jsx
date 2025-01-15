import React, { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the message to be sent to WhatsApp
    const whatsAppMessage = `*Contact Form Submission*\n\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`;
    const whatsAppNumber = '+917899535703'; // The WhatsApp number you want to send the message to
    const whatsAppURL = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(whatsAppMessage)}`;

    // Redirect to WhatsApp with the message
    window.open(whatsAppURL, '_blank');
  };

  return (
    <div id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Get in touch with us to discuss your next project
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-8">
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600">
              <PhoneIcon className="h-6 w-6 text-white" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium text-gray-900">Phone</h3>
              <p className="mt-2 text-base text-gray-600">Mon-Fri from 8am to 6pm</p>
              <p className="mt-2 text-base text-indigo-600">+91 7899535703</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600">
              <EnvelopeIcon className="h-6 w-6 text-white" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium text-gray-900">Email</h3>
              <p className="mt-2 text-base text-gray-600">We'll respond within 24 hours</p>
              <p className="mt-2 text-base text-indigo-600">workwithsvvaap@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600">
              <MapPinIcon className="h-6 w-6 text-white" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium text-gray-900">Office</h3>
              <p className="mt-2 text-base text-gray-600">Come say hello at our Online office</p>
              <p className="mt-2 text-base text-indigo-600">Udupi, Karnataka</p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="given-name"
                  className="block w-full rounded-sm border-gray-300 bg-white text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 bg-white text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="block w-full rounded-md border-gray-300 bg-white text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
