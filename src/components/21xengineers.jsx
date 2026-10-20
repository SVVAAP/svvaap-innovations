import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCTS } from '../data/group';
import { ButtonLink, Container, Eyebrow, Reveal } from './site/ui';

const capabilities = [
  { t: 'SaaS products', d: 'Builds and runs MenuCraft, BizKitOps and the group’s other live products.' },
  { t: 'Web & mobile apps', d: 'Websites, web apps and Android/iOS apps for clients, from design to launch.' },
  { t: 'Product engineering', d: 'Multi-tenant backends, payments, subscriptions and integrations.' },
];

const TwentyOneXEngineers = () => {
  return (
    <>
      <header className="relative overflow-hidden bg-ink text-white">
        <div className="sv-grid-dark pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden />
        <Container className="relative grid gap-12 pb-20 pt-32 sm:pt-40 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <Eyebrow dark>A Svvaap Innovations company</Eyebrow>
            <div className="mt-8 flex items-center gap-4">
              <img src="/brand/21xengineers.jpg" alt="21xEngineers logo" className="h-12 w-12 shrink-0 rounded-xl sm:h-16 sm:w-16 sm:rounded-2xl" />
              <h1 className="min-w-0 text-4xl font-semibold sm:text-6xl">21xEngineers</h1>
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
              The group’s software company. 21xEngineers builds and operates our SaaS products, and engineers web,
              mobile and SaaS platforms for clients in Udupi, Manipal and across India.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink to="https://21xengineers.svvaap.in" variant="light" arrow>
                Visit 21xEngineers
              </ButtonLink>
              <ButtonLink to="/contact" variant="ghostDark">
                Start a project
              </ButtonLink>
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10">
            {[
              ['Products live', String(PRODUCTS.length)],
              ['Focus', 'SaaS & apps'],
              ['Based in', 'Udupi'],
              ['Part of', 'Svvaap'],
            ].map(([k, v]) => (
              <div key={k} className="bg-ink p-5">
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">{k}</dt>
                <dd className="mt-2 text-xl font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      <section className="py-24">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
            {capabilities.map((c, i) => (
              <Reveal key={c.t} delay={i * 80} className="bg-paper p-8">
                <span className="font-mono text-sm text-muted">0{i + 1}</span>
                <h2 className="mt-8 text-xl font-semibold">{c.t}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.d}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-white py-24">
        <Container>
          <Reveal>
            <Eyebrow>Products by 21xEngineers</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Built here. Running in production.</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 60}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-line p-6 transition-colors hover:border-ink/30"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{p.category}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted group-hover:text-ink" aria-hidden />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.summary}</p>
                  <p className="mt-5 font-mono text-xs text-muted">{p.domain}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default TwentyOneXEngineers;
