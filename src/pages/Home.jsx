import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, FlaskConical } from 'lucide-react';
import { BRANDS, CLIENT_WORK, COMPANIES, CONTACT, FOUNDED, LEADERSHIP, PRODUCTS, RESEARCH } from '../data/group';
import {
  BrowserFrame,
  ButtonLink,
  Container,
  CountUp,
  Eyebrow,
  LogoTile,
  NewBadge,
  Reveal,
  spotlight,
} from '../components/site/ui';

const liveProducts = PRODUCTS.length;
const showcase = PRODUCTS.filter((p) => p.shot);

const figures = [
  { value: String(FOUNDED), label: 'Founded in Udupi' },
  { value: String(COMPANIES.length), label: 'Group companies' },
  { value: String(liveProducts), label: 'Live software products' },
  { value: String(CLIENT_WORK.length), label: 'Client platforms shipped' },
];

const principles = [
  { title: 'Build, then scale', body: 'We prove ideas as products with real users before we turn them into companies.' },
  { title: 'Shared foundations', body: 'Every company in the group draws on one engineering, design and operations backbone.' },
  { title: 'Plain dealing', body: 'Clear scope, honest timelines and direct access to the people doing the work.' },
  { title: 'Rooted in Udupi', body: 'A town known for consistency and care. We bring the same standard to how we build.' },
];

// Rotating window of live product screenshots in the hero.
function ProductShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (paused || reduce) return;
    const t = setInterval(() => setActive((i) => (i + 1) % showcase.length), 4500);
    return () => clearInterval(t);
  }, [paused]);

  const current = showcase[active];

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className="relative">
        <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-signal/15 via-transparent to-[#7c5cff]/15 blur-2xl" aria-hidden />
        <div className="relative grid">
          {showcase.map((p, i) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={i === active ? 0 : -1}
              aria-hidden={i !== active}
              className={`col-start-1 row-start-1 transition-all duration-700 ${
                i === active ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
              }`}
            >
              <BrowserFrame src={p.shot} alt={`${p.name} website`} url={p.domain} eager={i === 0} />
            </a>
          ))}
        </div>
      </div>

      <div role="tablist" aria-label="Featured products" className="mt-5 flex flex-wrap items-center gap-2">
        {showcase.map((p, i) => (
          <button
            key={p.name}
            role="tab"
            type="button"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`relative overflow-hidden rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
              i === active ? 'border-ink bg-ink text-white' : 'border-line bg-white/70 text-muted hover:text-ink'
            }`}
          >
            {p.name.replace('BizKitOps ', '')}
            {i === active && !paused && (
              <span key={active} className="absolute inset-x-0 bottom-0 h-0.5 origin-left animate-[sv-progress_4.5s_linear] bg-white/50" aria-hidden />
            )}
          </button>
        ))}
        <span className="ml-auto hidden font-mono text-[11px] text-muted sm:block">{current.category}</span>
      </div>
    </div>
  );
}

// Visual map of the group: parent → companies.
function GroupMap() {
  return (
    <div className="rounded-3xl border border-line bg-white/80 p-6 shadow-[0_30px_80px_-40px_rgba(11,12,14,0.35)] backdrop-blur sm:p-8" aria-hidden>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Group structure</span>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-muted">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          {liveProducts} products live
        </span>
      </div>
      <div className="mt-6 flex items-center gap-3 rounded-2xl bg-ink p-4 text-white">
        <img src="/brand/svvaap-mark.jpg" alt="" className="h-10 w-10 rounded-lg" />
        <div>
          <div className="text-sm font-semibold">Svvaap Innovations</div>
          <div className="text-xs text-white/55">Parent company · Est. {FOUNDED}</div>
        </div>
      </div>
      <div className="mx-auto h-6 w-px bg-line" />
      <div className="relative">
        <div className="absolute left-[16.66%] right-[16.66%] top-0 h-px bg-line" />
        <div className="grid grid-cols-3 gap-3">
          {COMPANIES.map((c) => (
            <div key={c.key} className="flex flex-col items-center">
              <div className="h-5 w-px bg-line" />
              <div className="flex w-full flex-col items-center rounded-2xl border border-line bg-white p-3 text-center">
                <LogoTile logo={c.logo} monogram={c.monogram} name={c.name} tile={c.tile} size="h-10 w-10" />
                <div className="mt-2 text-xs font-semibold leading-tight">{c.name}</div>
                <div className="mt-0.5 text-[10px] leading-tight text-muted">{c.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Home() {
  const flagship = PRODUCTS.filter((p) => p.flagship);
  const featured = PRODUCTS.filter((p) => !p.flagship && p.shot);
  const others = PRODUCTS.filter((p) => !p.flagship && !p.shot);
  const marquee = [...PRODUCTS.map((p) => p.domain), ...CLIENT_WORK.filter((w) => w.url).map((w) => w.domain)];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="sv-aurora" aria-hidden />
        <div className="sv-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_15%,transparent_70%)]" aria-hidden />
        <Container className="relative grid items-center gap-14 pb-16 pt-32 sm:pt-40 lg:grid-cols-[1fr_1.05fr] lg:pb-24">
          <div>
            <Link
              to="/#products"
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-white/70 py-1 pl-1 pr-3 text-xs backdrop-blur transition-colors hover:border-ink/30"
            >
              <span className="rounded-full bg-ink px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white">New</span>
              <span className="text-muted">Now live: BizKitOps Dealership Suite</span>
              <ArrowRight className="h-3.5 w-3.5 text-muted transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
            <h1 className="mt-7 text-[2.75rem] font-semibold leading-[1.02] sm:text-6xl lg:text-[4.25rem]">
              We build companies, products and the <span className="sv-gradient-text">software</span> behind them.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
              Svvaap Innovations is the parent company of 21xEngineers, Sen10 Games and Star Labs. Together we run
              software products used by real businesses, make games, and engineer custom platforms for clients.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink to="/#products" arrow>
                See our products
              </ButtonLink>
              <ButtonLink to="/contact" variant="secondary">
                Work with us
              </ButtonLink>
            </div>
          </div>
          <Reveal delay={150}>
            <ProductShowcase />
          </Reveal>
        </Container>

        {/* Live marquee */}
        <div className="relative border-y border-line bg-white/60 py-4 backdrop-blur [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <div className="sv-marquee flex w-max gap-10 pr-10 hover:[animation-play-state:paused]">
            {[...marquee, ...marquee].map((d, i) => (
              <span key={i} aria-hidden={i >= marquee.length} className="flex items-center gap-2 whitespace-nowrap font-mono text-sm text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
                {d}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white">
          <Container className="grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-line">
            {figures.map((f, i) => (
              <div key={f.label} className={`py-8 md:px-8 ${i % 2 === 1 ? 'pl-6' : ''} ${i === 0 ? 'md:pl-0' : ''}`}>
                <div className="text-4xl font-semibold tracking-tight tabular-nums">
                  <CountUp value={f.value} />
                </div>
                <div className="mt-1 text-sm text-muted">{f.label}</div>
              </div>
            ))}
          </Container>
        </div>
      </section>

      {/* Companies */}
      <section id="companies" className="scroll-mt-16 border-t border-line py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <Reveal>
              <Eyebrow>Our companies</Eyebrow>
              <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">Three companies. One foundation.</h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
                Each company has its own focus and market. All of them share the group’s engineering, design and
                operations, so they move faster than they could alone.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <GroupMap />
            </Reveal>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {COMPANIES.map((c, i) => {
              const href = c.internal || c.url;
              const body = (
                <>
                  <div className="flex items-start justify-between">
                    <LogoTile logo={c.logo} monogram={c.monogram} name={c.name} tile={c.tile} size="h-14 w-14" />
                    <span
                      className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] ${
                        c.status === 'Operating' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                      }`}
                    >
                      {c.status}
                    </span>
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold">{c.name}</h3>
                  <p className="mt-1 text-sm font-medium text-muted">{c.role}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/75">{c.summary}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                    <span className="text-xs text-muted">{c.focus.join(' · ')}</span>
                    {href && <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" aria-hidden />}
                  </div>
                </>
              );
              const cls = 'sv-spot sv-spot-light group flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(11,12,14,0.25)]';
              return (
                <Reveal key={c.key} delay={i * 80}>
                  {!href ? (
                    <div className={cls} onMouseMove={spotlight}>{body}</div>
                  ) : href.startsWith('/') ? (
                    <Link to={href} className={cls} onMouseMove={spotlight}>{body}</Link>
                  ) : (
                    <a href={href} target="_blank" rel="noopener noreferrer" className={cls} onMouseMove={spotlight}>{body}</a>
                  )}
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Products: bento */}
      <section id="products" className="relative scroll-mt-16 overflow-hidden bg-ink py-24 text-white sm:py-32">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-signal/20 blur-[120px]" aria-hidden />
        <Container className="relative">
          <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <Eyebrow dark>Products</Eyebrow>
              <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">Software that businesses run on, every day.</h2>
            </div>
            <p className="max-w-sm text-white/60">Built and operated by 21xEngineers. Every product is live, in use and supported by the team that made it.</p>
          </Reveal>

          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            {flagship.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseMove={spotlight}
                  className="sv-spot group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-colors hover:border-white/20"
                >
                  <div className="p-8 pb-0 sm:p-10 sm:pb-0">
                    <div className="flex items-start justify-between">
                      <span className="grid h-12 place-items-center rounded-xl bg-white px-3">
                        <img src={p.logo} alt={`${p.name} logo`} className={p.logoStyle === 'wordmark' ? 'h-6 w-auto' : 'h-8 w-8 rounded-md'} loading="lazy" />
                      </span>
                      <ArrowUpRight className="h-6 w-6 text-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" aria-hidden />
                    </div>
                    <p className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-white/45">{p.category}</p>
                    <h3 className="mt-2 text-3xl font-semibold">{p.name}</h3>
                    <p className="mt-3 max-w-md leading-relaxed text-white/65">{p.summary}</p>
                  </div>
                  <div className="mt-10 translate-y-6 px-8 transition-transform duration-500 group-hover:translate-y-2 sm:px-10">
                    <BrowserFrame src={p.shot} alt={`${p.name} website`} url={p.domain} dark />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          {featured.map((p) => (
            <Reveal key={p.name} className="mt-4">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={spotlight}
                className="sv-spot group grid items-center gap-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-8 transition-colors hover:border-white/20 sm:p-10 lg:grid-cols-[0.8fr_1.2fr]"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-white/45">{p.category}</p>
                    {p.isNew && <NewBadge dark />}
                  </div>
                  <h3 className="mt-3 text-3xl font-semibold">{p.name}</h3>
                  <p className="mt-3 leading-relaxed text-white/65">{p.summary}</p>
                  <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium">
                    Visit {p.domain} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </div>
                <BrowserFrame src={p.shot} alt={`${p.name} website`} url={p.domain} dark className="lg:-mr-24 lg:translate-y-6" />
              </a>
            </Reveal>
          ))}

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseMove={spotlight}
                  className="sv-spot group flex h-full flex-col rounded-2xl border border-white/10 p-6 transition-colors hover:border-white/20"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">{p.category}</span>
                    <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-white" aria-hidden />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{p.summary}</p>
                  <p className="mt-5 truncate font-mono text-xs text-white/40">{p.domain}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Star Labs */}
      <section className="relative overflow-hidden border-b border-line py-24">
        <div className="sv-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_right,black,transparent_65%)]" aria-hidden />
        <Container className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <Eyebrow>From the lab</Eyebrow>
            <h2 className="mt-5 text-4xl font-semibold leading-tight">Star Labs research</h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted">
              Before an idea becomes a product, it becomes a prototype. Star Labs explores applied AI and computer vision,
              often running entirely on the user’s own device.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {RESEARCH.map((r, i) => (
              <Reveal key={r.name} delay={i * 100}>
                <article onMouseMove={spotlight} className="sv-spot sv-spot-light flex h-full flex-col rounded-3xl border border-line bg-white p-7">
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-white">
                      <FlaskConical className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                    </span>
                    <span className="font-mono text-[11px] text-muted">Prototype</span>
                  </div>
                  <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{r.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{r.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">{r.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {r.stack.map((s) => (
                      <span key={s} className="rounded-full bg-paper px-2.5 py-1 font-mono text-[11px] text-muted">{s}</span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Client work */}
      <section className="bg-white py-24 sm:py-32">
        <Container>
          <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <Eyebrow>Client work</Eyebrow>
              <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">Trusted by institutions and growing businesses.</h2>
            </div>
            <ButtonLink to="/projects" variant="secondary" arrow>
              All client work
            </ButtonLink>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {CLIENT_WORK.filter((w) => w.shot)
              .slice(0, 4)
              .map((w, i) => {
                const inner = (
                  <>
                    <div className="overflow-hidden rounded-2xl">
                      <BrowserFrame src={w.shot} alt={`${w.name} website`} url={w.domain} className="transition-transform duration-700 group-hover:scale-[1.02]" />
                    </div>
                    <div className="mt-5 flex items-start justify-between gap-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{w.category}</span>
                          {w.status ? <NewBadge>{w.status}</NewBadge> : w.isNew && <NewBadge />}
                        </div>
                        <h3 className="mt-2 text-xl font-semibold">{w.name}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">{w.summary}</p>
                      </div>
                      {w.url && (
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line transition-all group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                          <ArrowUpRight className="h-4 w-4" aria-hidden />
                        </span>
                      )}
                    </div>
                  </>
                );
                return (
                  <Reveal key={w.name} delay={(i % 2) * 100}>
                    {w.url ? (
                      <a href={w.url} target="_blank" rel="noopener noreferrer" className="group block">
                        {inner}
                      </a>
                    ) : (
                      <div className="group">{inner}</div>
                    )}
                  </Reveal>
                );
              })}
          </div>
        </Container>
      </section>

      {/* Brands */}
      <section className="border-y border-line py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
          <Reveal>
            <Eyebrow>Brands</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold">Beyond software</h2>
            <p className="mt-3 leading-relaxed text-muted">Consumer and creative brands incubated within the group.</p>
            <Link to="/startup" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium underline decoration-line underline-offset-4 hover:decoration-ink">
              All ventures <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {BRANDS.map((b, i) => (
              <Reveal key={b.name} delay={i * 80}>
                <div onMouseMove={spotlight} className="sv-spot sv-spot-light flex items-center gap-5 rounded-2xl border border-line bg-white p-5">
                  <LogoTile logo={b.logo} name={b.name} size="h-16 w-16" />
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{b.category}</p>
                    <h3 className="mt-1 text-lg font-semibold">{b.name}</h3>
                    <p className="mt-1 text-sm text-muted">{b.summary}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="py-24 sm:py-32">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>How we operate</Eyebrow>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">Principles that run across every company.</h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="bg-paper p-8 transition-colors hover:bg-white">
                <span className="font-mono text-sm text-muted">0{i + 1}</span>
                <h3 className="mt-8 text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="border-t border-line py-24 sm:py-32">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <Eyebrow>Leadership</Eyebrow>
            <h2 className="mt-5 text-4xl font-semibold leading-tight">Founder-led, engineer-run.</h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted">
              The people who started Svvaap still write code, design products and talk to customers every week.
            </p>
            <Link to="/team" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium underline decoration-line underline-offset-4 hover:decoration-ink">
              Meet the team <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {LEADERSHIP.map((p, i) => (
              <Reveal key={p.name} delay={i * 100} className="group overflow-hidden rounded-3xl border border-line bg-white">
                <div className="aspect-[4/3] overflow-hidden bg-[#ecebe7]">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover object-top grayscale transition-all duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="text-sm text-muted">{p.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/75">{p.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing */}
      <section className="pb-24">
        <Container>
          <Reveal className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-white sm:px-14 sm:py-20">
            <div className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full bg-signal/30 blur-[100px]" aria-hidden />
            <div className="pointer-events-none absolute -bottom-40 left-10 h-80 w-80 rounded-full bg-[#7c5cff]/20 blur-[100px]" aria-hidden />
            <div className="sv-grid-dark pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" aria-hidden />
            <div className="relative">
              <h2 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">Let’s build what’s next, together.</h2>
              <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-3">
                {[
                  { k: 'Clients', t: 'Start a project', d: 'Custom web, mobile and SaaS builds through 21xEngineers.', to: '/contact' },
                  { k: 'Partners & investors', t: 'Talk to the founders', d: 'Partnerships, distribution and investment in our products.', to: `mailto:${CONTACT.email}?subject=Partnership%20enquiry` },
                  { k: 'Talent', t: 'Join the group', d: 'Engineers, designers and builders who like to ship.', to: '/careers' },
                ].map((c) => (
                  <ButtonCard key={c.k} {...c} />
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function ButtonCard({ k, t, d, to }) {
  const inner = (
    <>
      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">{k}</span>
      <span className="mt-4 flex items-center gap-2 text-xl font-semibold">
        {t} <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden />
      </span>
      <span className="mt-2 text-sm text-white/55">{d}</span>
    </>
  );
  const cls = 'group flex flex-col bg-ink/90 p-7 backdrop-blur transition-colors hover:bg-ink-2';
  return to.startsWith('/') ? (
    <Link to={to} className={cls}>{inner}</Link>
  ) : (
    <a href={to} className={cls}>{inner}</a>
  );
}

export default Home;
