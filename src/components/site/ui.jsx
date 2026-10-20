import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Fades content up once it scrolls into view. Reduced-motion users see it immediately.
export function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible');
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`sv-reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined} {...rest}>
      {children}
    </Tag>
  );
}

export function Eyebrow({ children, className = '', dark = false }) {
  return (
    <p className={`flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.16em] ${dark ? 'text-white/55' : 'text-muted'} ${className}`}>
      <span className={`h-px w-6 ${dark ? 'bg-white/40' : 'bg-ink/40'}`} aria-hidden />
      {children}
    </p>
  );
}

export function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-site px-5 sm:px-8 ${className}`}>{children}</div>;
}

const base =
  'inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-all duration-200';
const variants = {
  primary: 'bg-ink text-white hover:bg-ink-2 hover:-translate-y-0.5',
  secondary: 'border border-line bg-white text-ink hover:border-ink/30',
  light: 'bg-white text-ink hover:-translate-y-0.5',
  ghostDark: 'border border-white/20 text-white hover:bg-white/10',
};

// Internal paths use the router; anything else is a normal anchor (new tab for external sites).
export function ButtonLink({ to, variant = 'primary', arrow = false, className = '', children }) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="h-4 w-4" aria-hidden />}
    </>
  );
  if (to.startsWith('/') && !to.startsWith('//')) {
    return (
      <Link to={to} className={cls}>
        {content}
      </Link>
    );
  }
  const external = to.startsWith('http');
  return (
    <a href={to} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {content}
    </a>
  );
}

export function PageHeader({ eyebrow, title, intro, children }) {
  return (
    <header className="relative overflow-hidden border-b border-line">
      <div className="sv-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden />
      <Container className="relative pb-16 pt-32 sm:pb-20 sm:pt-40">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] sm:text-6xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </Container>
    </header>
  );
}

// Square logo tile used for companies and brands; falls back to a monogram.
export function LogoTile({ logo, monogram, name, tile = 'bg-ink', size = 'h-14 w-14' }) {
  return (
    <span className={`grid ${size} shrink-0 place-items-center overflow-hidden rounded-xl ${tile}`}>
      {logo ? (
        <img src={logo} alt={`${name} logo`} className="h-full w-full object-contain p-1.5" loading="lazy" />
      ) : (
        <span className="font-mono text-sm font-medium tracking-wider text-white">{monogram}</span>
      )}
    </span>
  );
}

// Mouse handler for .sv-spot cards: feeds the cursor position into CSS variables.
export function spotlight(e) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`);
}

// Window chrome around a product screenshot.
export function BrowserFrame({ src, alt, url, className = '', dark = false, eager = false }) {
  return (
    <div className={`overflow-hidden rounded-2xl border shadow-[0_40px_80px_-30px_rgba(11,12,14,0.45)] ${dark ? 'border-white/10 bg-ink-2' : 'border-line bg-white'} ${className}`}>
      <div className={`flex items-center gap-3 border-b px-4 py-2.5 ${dark ? 'border-white/10' : 'border-line'}`}>
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </span>
        {url && (
          <span className={`flex-1 truncate rounded-md px-3 py-1 text-center font-mono text-[11px] ${dark ? 'bg-white/5 text-white/50' : 'bg-paper text-muted'}`}>
            {url}
          </span>
        )}
      </div>
      <img src={src} alt={alt} width={1280} height={800} className="block aspect-[16/10] w-full object-cover object-top" loading={eager ? 'eager' : 'lazy'} />
    </div>
  );
}

// Counts up to a number once visible. Non-numeric values render as-is.
export function CountUp({ value, duration = 1200 }) {
  const ref = useRef(null);
  const target = Number(value);
  const numeric = Number.isFinite(target) && String(target) === String(value);
  const [shown, setShown] = useState(numeric ? (target > 1900 ? target - 12 : 0) : value);

  useEffect(() => {
    if (!numeric) return;
    const el = ref.current;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (!el || reduce || typeof IntersectionObserver === 'undefined') {
      setShown(target);
      return;
    }
    const from = target > 1900 ? target - 12 : 0;
    let raf;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t) => {
        const k = Math.min(1, (t - start) / duration);
        setShown(Math.round(from + (target - from) * (1 - Math.pow(1 - k, 3))));
        if (k < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [numeric, target, duration]);

  return <span ref={ref}>{shown}</span>;
}

export function NewBadge({ children = 'New', dark = false }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[11px] ${dark ? 'bg-signal/20 text-[#9fb4ff]' : 'bg-signal/10 text-signal'}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
      {children}
    </span>
  );
}
