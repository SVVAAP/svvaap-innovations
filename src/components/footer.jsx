import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANIES, CONTACT, PRODUCTS } from '../data/group';

const columns = [
  {
    title: 'Group',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Team', to: '/team' },
      { label: 'Careers', to: '/careers' },
      { label: 'Ventures', to: '/startup' },
      { label: 'Client work', to: '/projects' },
    ],
  },
  {
    title: 'Companies',
    links: COMPANIES.map((c) => ({ label: c.name, to: c.internal || c.url, muted: !c.url && !c.internal })),
  },
  {
    title: 'Products',
    links: PRODUCTS.slice(0, 5).map((p) => ({ label: p.name, to: p.url })),
  },
  {
    title: 'Services',
    links: [
      { label: 'What we do', to: '/services' },
      { label: 'Software company in Udupi', to: '/software-development-company-udupi' },
      { label: 'Software company in Manipal', to: '/software-development-company-manipal' },
      { label: 'Web & app developers', to: '/budget-friendly-web-app-developers-udupi-manipal' },
    ],
  },
];

const socials = [
  { label: 'LinkedIn', href: CONTACT.linkedin },
  { label: 'X', href: CONTACT.x },
  { label: 'Instagram', href: CONTACT.instagram },
  { label: 'YouTube', href: CONTACT.youtube },
];

const FooterLink = ({ to, children, muted }) => {
  if (!to) return <span className="text-white/35">{children}</span>;
  const cls = `transition-colors hover:text-white ${muted ? 'text-white/35' : ''}`;
  if (to.startsWith('/')) return <Link to={to} className={cls}>{children}</Link>;
  return (
    <a href={to} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="bg-ink text-white/60">
      <div className="mx-auto w-full max-w-site px-5 pb-10 pt-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <img src="/brand/svvaap-light.png" alt="Svvaap Innovations" className="h-8 w-auto" loading="lazy" width={150} height={38} />
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              Svvaap Innovations is the parent company of 21xEngineers, Sen10 Games and Star Labs, building
              software, products and brands from Udupi since 2021.
            </p>
            <div className="mt-6 space-y-1.5 text-sm">
              <a href={`mailto:${CONTACT.email}`} className="block text-white transition-opacity hover:opacity-70">
                {CONTACT.email}
              </a>
              <a href={`tel:+${CONTACT.phoneRaw}`} className="block transition-colors hover:text-white">
                {CONTACT.phone}
              </a>
              <p>{CONTACT.address}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-white/40">{col.title}</h2>
                <ul className="mt-5 space-y-3 text-sm">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <FooterLink to={l.to} muted={l.muted}>
                        {l.label}
                      </FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Svvaap Innovations. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/terms" className="hover:text-white">Terms</Link>
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/refund" className="hover:text-white">Refunds</Link>
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
