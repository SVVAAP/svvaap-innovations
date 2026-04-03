import React from 'react';
import logo from "../img/logo_light.png";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-[#0a1220] px-5 py-12 text-[#c7d2e6]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <img src={logo} alt="Svvaap Innovations" className="mb-4 w-36" />
          <h3 className="text-lg font-semibold text-white">Svvaap Innovations</h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[#9fb0cc]">
            A technology company from Udupi, Karnataka, delivering modern platforms, AI products, and design systems for growth-focused organizations.
          </p>
          <div className="mt-5 space-y-2 text-sm text-[#c7d2e6]">
            <p>Udupi, Karnataka, India</p>
            <a
              href="https://wa.me/917899535703"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-colors hover:text-white"
            >
              +91 7899535703
            </a>
            <a href="mailto:workwithsvvaap@gmail.com" className="block transition-colors hover:text-white">
              workwithsvvaap@gmail.com
            </a>
          </div>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            <a href="https://www.linkedin.com/company/svvaap-innovations/" className="text-[#9fb0cc] transition-colors hover:text-white">LinkedIn</a>
            <a href="https://x.com/SVVAAPofficial" className="text-[#9fb0cc] transition-colors hover:text-white">Twitter</a>
            <a href="https://www.instagram.com/svvaap" className="text-[#9fb0cc] transition-colors hover:text-white">Instagram</a>
            <a href="https://youtube.com/@svvaap-innovations" className="text-[#9fb0cc] transition-colors hover:text-white">YouTube</a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-base font-semibold text-white">Company</h4>
          <ul className="space-y-2 text-sm text-[#9fb0cc]">
            <li><Link to="/about" className="transition-colors hover:text-white">About Us</Link></li>
            <li><Link to="/Team" className="transition-colors hover:text-white">Team</Link></li>
            <li><a href="/Careers" className="transition-colors hover:text-white">Careers</a></li>
            <li><a href="/startup" className="transition-colors hover:text-white">Startup Programs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-base font-semibold text-white">Capabilities</h4>
          <ul className="space-y-2 text-sm text-[#9fb0cc]">
            <li><a href="/#services" className="transition-colors hover:text-white">Product Engineering</a></li>
            <li><a href="/#services" className="transition-colors hover:text-white">AI Integration</a></li>
            <li><a href="/#services" className="transition-colors hover:text-white">UX and Visual Systems</a></li>
            <li><a href="/#industries" className="transition-colors hover:text-white">Industry Solutions</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-base font-semibold text-white">Legal</h4>
          <ul className="space-y-2 text-sm text-[#9fb0cc]">
            <li><a href="/#contact" className="transition-colors hover:text-white">Contact</a></li>
            <li><Link to="/terms" className="transition-colors hover:text-white">Terms and Conditions</Link></li>
            <li><Link to="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/refund" className="transition-colors hover:text-white">Refund Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center">
        <p className="text-sm text-[#8da0bd]">
          © {new Date().getFullYear()} Svvaap Innovations. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
