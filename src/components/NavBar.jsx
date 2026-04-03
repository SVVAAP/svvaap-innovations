import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from "../img/logo_dark.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Why Svvaap', href: '#why-svvaap' },
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/Careers' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[#d7d8dc] bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Svvaap Innovations Home">
          <img src={logo} className="h-9 w-auto" alt="Svvaap Logo" />
          {/* <span className="hidden text-sm font-semibold tracking-[0.2em] text-[#0b1220] sm:inline">
            SVVAAP INNOVATIONS
          </span> */}
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[#30384a] transition-colors duration-200 hover:text-[#0f6d5e]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#0f6d5e] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0a594d]"
          >
            Book Strategy Call
          </a>
        </div>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-[#d7d8dc] p-2 text-[#2f3b52] md:hidden"
          aria-controls="navbar-cta"
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-label="Open menu"
        >
          {isOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen && (
        <div id="navbar-cta" className="border-t border-[#d7d8dc] bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-[#30384a] hover:bg-[#f4f6f8] hover:text-[#0f6d5e]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="mt-1 inline-flex items-center justify-center rounded-xl bg-[#0f6d5e] px-4 py-3 text-sm font-semibold text-white"
            >
              Book Strategy Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
