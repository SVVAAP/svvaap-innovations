import React from 'react';
import logo from "../img/logo_light.png";
const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Company Info */}
        <div className="col-span-2">
          <img src={logo} alt="Svvaap Innovations" className="w-32 mb-4" />
          <h3 className="text-lg font-semibold">Svvaap Innovations</h3>
          <p className="mt-2 text-gray-400">
            Revolutionizing the way businesses grow with innovative digital solutions and cutting-edge technology.
          </p>
          <div className="mt-4">
            <p className="flex items-center mb-2">
              📞
              <a
                href="https://wa.me/917899535703"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline ml-2"
              >
                +91 7899535703 (WhatsApp Messages)
              </a>
            </p>

            <p className="flex items-center">
              <a
                href="mailto:workwithsvvaap@gmail.com"
                className="text-indigo-500 hover:underline flex items-center"
              >
                📧 workwithsvvaap@gmail.com
              </a>
            </p>

          </div>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/srujan-moolya" className="text-gray-400 hover:text-white">LinkedIn</a>
            <a href="https://x.com/SVVAAPofficial" className="text-gray-400 hover:text-white">Twitter</a>
            <a href="https://www.instagram.com/svvaap" className="text-gray-400 hover:text-white">Instagram</a>
            <a href="https://youtube.com/@svvaap-innovations" className="text-gray-400 hover:text-white">Youtube</a>
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Who we are</h4>
          <ul>
            <li className="mb-2 hover:text-white">
              <a href="#about">About Us</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#about">Our Team</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#Careers">Careers</a>
            </li>
            <li className="hover:text-white">
              <a href="#Blog">Blog</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">What we do</h4>
          <ul>
            <li className="mb-2 hover:text-white">
              <a href="#webdev">Web Development</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#appdev">Mobile Apps</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#design">UI/UX Design</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#design">Graphics Design</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Get in touch</h4>
          <ul>
            <li className="mb-2 hover:text-white">
              <a href="#contact">Contact Us</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Support</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#">Terms of Service</a>
            </li>
            <li className="hover:text-white">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-10 border-t border-gray-800 pt-6">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Svvaap Innovations. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
