import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

// Pages whose header is dark: the navbar starts in its light-on-dark form there.
const darkHeroRoutes = ['/21xengineers'];

const navItems = [
  { label: 'Companies', to: '/#companies' },
  { label: 'Products', to: '/#products' },
  { label: 'Work', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Team', to: '/team' },
  { label: 'Careers', to: '/careers' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname, location.hash]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const solid = scrolled || isOpen;
  const onDark = !solid && darkHeroRoutes.includes(location.pathname.toLowerCase());

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'border-b border-line bg-paper/85 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-site items-center justify-between px-5 sm:px-8" aria-label="Main">
        <Link to="/" className="flex items-center" aria-label="Svvaap Innovations home">
          <img
            src={onDark ? '/brand/svvaap-light.png' : '/brand/svvaap-dark.png'}
            alt="Svvaap Innovations"
            className="h-7 w-auto"
            width={140}
            height={35}
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-3.5 py-2 text-sm transition-colors ${
                  onDark
                    ? 'text-white/70 hover:text-white'
                    : isActive && !item.to.includes('#')
                    ? 'text-ink'
                    : 'text-muted hover:text-ink'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className={`inline-flex h-10 items-center gap-1.5 rounded-full px-5 text-sm font-medium transition-transform hover:-translate-y-0.5 ${
              onDark ? 'bg-white text-ink' : 'bg-ink text-white'
            }`}
          >
            Contact us
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className={`-mr-2 rounded-full p-2 lg:hidden ${onDark ? 'text-white' : ''}`}
          aria-controls="mobile-nav"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-nav" className="border-t border-line bg-paper px-5 pb-8 pt-2 lg:hidden">
          {navItems.map((item) => (
            <Link key={item.label} to={item.to} className="block border-b border-line py-4 text-lg">
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-6 flex h-12 items-center justify-center gap-1.5 rounded-full bg-ink text-base font-medium text-white"
          >
            Contact us <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
