import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/logo_dark.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-10" alt="Svvaap Logo" />
        </Link>

        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-controls="navbar-cta"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-bold p-4 md:p-0 mt-4 border border-gray-200 rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 md:p-0 text-blue-600 rounded md:bg-transparent hover:text-blue-700"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 md:p-0 text-gray-700 rounded hover:bg-gray-100 hover:text-blue-600"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/startup"
                className="block py-2 px-3 md:p-0 text-gray-700 rounded hover:bg-gray-100 hover:text-blue-600"
              >
                StartUps
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="block py-2 px-3 md:p-0 text-gray-700 rounded hover:bg-gray-100 hover:text-blue-600"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 md:p-0 text-gray-700 rounded hover:bg-gray-100 hover:text-blue-600"
              >
                Contact
              </Link>
            </li>
            {/* Add "Visit Ideogram" button inside the menu for mobile */}
            <li className="md:hidden">
              <Link to="https://ideogram.svvaap.in">
                <button
                  type="button"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-4 py-2 text-center"
                >
                  Visit Ideogram
                </button>
              </Link>
            </li>
          </ul>
        </div>

        {/* Move the button outside for desktop */}
        <div className="hidden md:block md:order-2">
          <Link to="https://ideogram.svvaap.in">
            <button
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-4 py-2 text-center"
            >
              Visit Ideogram
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
