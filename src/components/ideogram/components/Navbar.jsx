import React from 'react';

const Navbar = ({ isDarkMode, toggleTheme, toggleSidebar, userProfile }) => {
  return (
    <nav className="bg-gray-900 dark:bg-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ideogram</h1>

        {/* Mobile Menu Toggle Button */}
        <button className="lg:hidden" onClick={toggleSidebar}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <ul className="hidden lg:flex space-x-6">
          <li><a href="#" className="hover:text-blue-400">Home</a></li>
          <li><a href="#" className="hover:text-blue-400">About</a></li>
          <li><a href="#" className="hover:text-blue-400">Contact</a></li>
          <li><a href="#" className="hover:text-blue-400">Profile</a></li>
        </ul>

        {/* Theme Toggle Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg"
          >
            {isDarkMode ? 'Day Mode' : 'Night Mode'}
          </button>

          {/* User Info */}
          <p>{userProfile.name}</p>
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
