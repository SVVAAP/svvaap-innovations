import React from "react";
import Logo from "/img/ideogram_logo.png"
const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-white dark:bg-black shadow-md z-50">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-around items-center h-16 px-8">
       
          {/* Left-side navigation */}
          <a href="/home" className="hover:text-blue-500 text-gray-500 dark:text-gray-300">
            Home
          </a>
          <a href="/profile" className="hover:text-blue-500 text-gray-500 dark:text-gray-300">
            Profile
          </a>
       
{/* Logo */}
<div className="text-center">
  <a href="/" className="flex justify-center items-center">
    <img src={Logo} alt="Logo" className="w-44 h-auto" />
  </a>
</div>


      
          {/* Right-side navigation */}
          <a
            href="/notifications"
            className="hover:text-blue-500 text-gray-500 dark:text-gray-300"
          >
            Notifications
          </a>
          <a href="/categories" className="hover:text-blue-500 text-gray-500 dark:text-gray-300">
            Categories
          </a>
       
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed bottom-0 w-full bg-white dark:bg-black shadow-lg flex justify-between items-center h-16 px-4">
        <a href="/home" className="flex flex-col items-center text-gray-500 dark:text-gray-300">
          <span>🏠</span>
          <span className="text-xs">Home</span>
        </a>
        <a href="/search" className="flex flex-col items-center text-gray-500 dark:text-gray-300">
          <span>🔍</span>
          <span className="text-xs">Search</span>
        </a>
        <a
          href="/post"
          className="flex flex-col items-center text-blue-500"
        >
          <span>➕</span>
          <span className="text-xs">Post</span>
        </a>
        <a
          href="/notifications"
          className="flex flex-col items-center text-gray-500 dark:text-gray-300"
        >
          <span>🔔</span>
          <span className="text-xs">Notifications</span>
        </a>
        <a href="/profile" className="flex flex-col items-center text-gray-500 dark:text-gray-300">
          <span>👤</span>
          <span className="text-xs">Profile</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
