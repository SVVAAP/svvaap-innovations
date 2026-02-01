import React, { useState } from 'react';
import { PhoneIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import { FaWhatsapp } from 'react-icons/fa';

// Fixed side contact bar with WhatsApp and Phone
// Props: phone (string), whatsappNumber (string, optional), message (string, optional)
export default function ContactBar({
  phone = '7899535703',
  whatsappNumber,
  message = 'Hello! I would like to get in touch with Svvaap Innovations.',
}) {
  const waNumber = (whatsappNumber || phone).replace(/\D/g, '');
  const waText = encodeURIComponent(message);
  const waHref = `https://wa.me/${waNumber}?text=${waText}`;
  const telHref = `tel:${phone}`;
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop / Tablet: right side vertical pill with toggle */}
      <div className="hidden sm:flex fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <div
          className={`relative flex flex-col items-stretch shadow-2xl border border-gray-800/50 bg-gray-950 rounded-l-2xl overflow-hidden transition-[width] duration-300 ${
            open ? 'w-56' : 'w-12'
          }`}
          aria-label="Contact quick actions"
        >
          {/* Toggle button */}
          <button
            type="button"
            aria-label={open ? 'Collapse contact bar' : 'Expand contact bar'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="group h-12 w-full flex items-center gap-3 px-3 text-white/90 hover:text-white hover:bg-gray-900/80"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/60 ring-1 ring-white/10">
              <ChevronLeftIcon
                className={`h-4 w-4 transition-transform duration-300 ${open ? '' : 'rotate-180'}`}
              />
            </span>
            <span
              className={`text-sm font-semibold whitespace-nowrap transition-opacity duration-200 ${
                open ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              Quick Contact
            </span>
          </button>

          {/* WhatsApp */}
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="h-14 w-full flex items-center gap-3 px-3 bg-emerald-500 text-white hover:brightness-95"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/15 ring-1 ring-white/20">
              <FaWhatsapp className="h-5 w-5" />
            </span>
            <span
              className={`text-sm font-semibold whitespace-nowrap transition-opacity duration-200 ${
                open ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              WhatsApp
            </span>
          </a>

          {/* Phone */}
          <a
            href={telHref}
            aria-label={`Call ${phone}`}
            className="h-14 w-full flex items-center gap-3 px-3 bg-gray-950 text-white hover:bg-gray-900"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/20">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <span
              className={`text-sm font-semibold whitespace-nowrap transition-opacity duration-200 ${
                open ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {`Call ${phone}`}
            </span>
          </a>
        </div>
      </div>

      {/* Mobile: bottom fixed bar */}
      <div className="sm:hidden fixed bottom-4 inset-x-0 z-50 px-4">
        <div className="mx-auto max-w-md rounded-2xl shadow-2xl bg-white/90 backdrop-blur border border-gray-200 p-2 flex items-center justify-between gap-2">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 text-white py-3 font-semibold hover:brightness-95 active:brightness-90 transition"
          >
            <FaWhatsapp className="h-5 w-5" />
            WhatsApp
          </a>
          <a
            href={telHref}
            aria-label={`Call ${phone}`}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 text-white py-3 font-semibold hover:brightness-95 active:brightness-90 transition"
          >
            <PhoneIcon className="h-5 w-5" />
            Call
          </a>
        </div>
      </div>
    </>
  );
}
