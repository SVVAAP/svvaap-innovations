import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BRANDS, COMPANIES, CONTACT, PRODUCTS, RESEARCH } from '../data/group';
import { ButtonLink, Container, Eyebrow, LogoTile, NewBadge, PageHeader, Reveal } from './site/ui';

function Group({ eyebrow, title, children }) {
  return (
    <section className="border-b border-line py-20">
      <Container className="grid gap-10 lg:grid-cols-[1fr_2.2fr]">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-5 text-3xl font-semibold">{title}</h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">{children}</div>
      </Container>
    </section>
  );
}

function Card({ href, children }) {
  const cls = 'group flex h-full gap-5 rounded-2xl border border-line bg-white p-6 transition-colors';
  if (!href) return <div className={cls}>{children}</div>;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${cls} hover:border-ink/30`}>
      {children}
    </a>
  );
}

const Startup = () => {
  return (
    <>
      <PageHeader
        eyebrow="Ventures"
        title="Every company, product and brand in the group."
        intro="Ideas start as products inside Svvaap. The ones that find their market grow into companies and brands of their own."
      />

      <Group eyebrow="Companies" title="Operating companies">
        {COMPANIES.map((c, i) => (
          <Reveal key={c.key} delay={i * 60}>
            <Card href={c.url}>
              <LogoTile logo={c.logo} monogram={c.monogram} name={c.name} tile={c.tile} size="h-14 w-14" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold">{c.name}</h3>
                  {c.url ? (
                    <ArrowUpRight className="h-4 w-4 text-muted group-hover:text-ink" aria-hidden />
                  ) : (
                    <span className="font-mono text-[11px] text-muted">{c.status}</span>
                  )}
                </div>
                <p className="text-sm text-muted">{c.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{c.summary}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </Group>

      <Group eyebrow="Products" title="Live software products">
        {PRODUCTS.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 60}>
            <Card href={p.url}>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                    {p.category}
                    {p.isNew && <NewBadge />}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted group-hover:text-ink" aria-hidden />
                </div>
                <h3 className="mt-3 font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/75">{p.summary}</p>
                <p className="mt-3 font-mono text-xs text-muted">{p.domain}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </Group>

      <Group eyebrow="Research" title="Star Labs prototypes">
        {RESEARCH.map((r, i) => (
          <Reveal key={r.name} delay={i * 60}>
            <Card>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{r.category}</span>
                  <span className="font-mono text-[11px] text-muted">Prototype</span>
                </div>
                <h3 className="mt-3 font-semibold">{r.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/75">{r.summary}</p>
                <p className="mt-3 font-mono text-xs text-muted">{r.stack.join(' · ')}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </Group>

      <Group eyebrow="Brands" title="Consumer & creative brands">
        {BRANDS.map((b, i) => (
          <Reveal key={b.name} delay={i * 60}>
            <Card>
              <LogoTile logo={b.logo} name={b.name} size="h-14 w-14" />
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{b.category}</span>
                <h3 className="mt-1 font-semibold">{b.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/75">{b.summary}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </Group>

      <section className="py-24">
        <Container>
          <Reveal className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-ink p-8 text-white sm:p-14 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">Partner or invest with us</h2>
              <p className="mt-3 max-w-xl text-white/60">Distribution, co-building and investment conversations go straight to the founders.</p>
            </div>
            <ButtonLink to={`mailto:${CONTACT.email}?subject=${encodeURIComponent('Partnership enquiry')}`} variant="light" arrow>
              Talk to the founders
            </ButtonLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
};

export default Startup;
