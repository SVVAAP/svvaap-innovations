import React, { useState } from "react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const whatsAppNumber = "+917899535703"; // WhatsApp number

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill in all fields before sending.");
      return;
    }

    // Format the WhatsApp message
    const whatsAppMessage = `*Contact Form Submission*\n\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`;
    const whatsAppURL = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(whatsAppMessage)}`;

    // Redirect to WhatsApp with the message
    window.open(whatsAppURL, "_blank");
  };

  return (
    <div id="contact" className="bg-[#f7f6f1] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0f6d5e]">Let's Talk</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#0a1324] sm:text-4xl">Ready to start your next project?</h2>
          <p className="mt-4 text-[#4f5c71]">
            Connect with our team to discuss ideas, timelines, and how we can partner for success.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {/* Phone */}
          <div className="rounded-2xl border border-[#d4d5d8] bg-white p-8 shadow-[0_10px_24px_rgba(14,24,42,0.06)] transition hover:shadow-[0_16px_36px_rgba(14,24,42,0.1)]">
            <div className="inline-flex rounded-xl bg-[#eef8f6] p-3 text-[#0f6d5e]">
              <PhoneIcon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[#0f1a2f]">Phone</h3>
            <p className="mt-2 text-xs text-[#7a8a9f]">Available Mon–Fri, 9am–6pm IST</p>
            <a
              href={`https://wa.me/${whatsAppNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center text-sm font-semibold text-[#0f6d5e] hover:text-[#0a4a3f]"
            >
              +91 7899535703 →
            </a>
          </div>

          {/* Email */}
          <div className="rounded-2xl border border-[#d4d5d8] bg-white p-8 shadow-[0_10px_24px_rgba(14,24,42,0.06)] transition hover:shadow-[0_16px_36px_rgba(14,24,42,0.1)]">
            <div className="inline-flex rounded-xl bg-[#eef8f6] p-3 text-[#0f6d5e]">
              <EnvelopeIcon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[#0f1a2f]">Email</h3>
            <p className="mt-2 text-xs text-[#7a8a9f]">We respond within 24 hours</p>
            <a
              href="mailto:workwithsvvaap@gmail.com"
              className="mt-3 inline-flex items-center text-sm font-semibold text-[#0f6d5e] hover:text-[#0a4a3f]"
            >
              workwithsvvaap@gmail.com →
            </a>
          </div>

          {/* Office */}
          <div className="rounded-2xl border border-[#d4d5d8] bg-white p-8 shadow-[0_10px_24px_rgba(14,24,42,0.06)] transition hover:shadow-[0_16px_36px_rgba(14,24,42,0.1)]">
            <div className="inline-flex rounded-xl bg-[#eef8f6] p-3 text-[#0f6d5e]">
              <MapPinIcon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[#0f1a2f]">Office</h3>
            <p className="mt-2 text-xs text-[#7a8a9f]">Visit us in the temple city</p>
            <p className="mt-3 text-sm font-semibold text-[#0f1a2f]">
              Udupi, Karnataka<br />India - 576101
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mx-auto max-w-2xl rounded-3xl border border-[#d0d1ca] bg-white p-8 shadow-lg sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[#0f1a2f]">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="given-name"
                placeholder="Firstname"
                className="mt-2 w-full rounded-xl border border-[#d7d8dc] bg-[#f9f8f6] px-4 py-2.5 text-sm text-[#0f1a2f] placeholder-[#9fb0cc] transition-colors focus:border-[#0f6d5e] focus:outline-none focus:ring-2 focus:ring-[#0f6d5e]/20"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#0f1a2f]">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-[#d7d8dc] bg-[#f9f8f6] px-4 py-2.5 text-sm text-[#0f1a2f] placeholder-[#9fb0cc] transition-colors focus:border-[#0f6d5e] focus:outline-none focus:ring-2 focus:ring-[#0f6d5e]/20"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[#0f1a2f]">
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your project..."
                className="mt-2 w-full rounded-xl border border-[#d7d8dc] bg-[#f9f8f6] px-4 py-2.5 text-sm text-[#0f1a2f] placeholder-[#9fb0cc] transition-colors focus:border-[#0f6d5e] focus:outline-none focus:ring-2 focus:ring-[#0f6d5e]/20"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-[#0f6d5e] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-[#0a4a3f]"
            >
              Send Message via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
