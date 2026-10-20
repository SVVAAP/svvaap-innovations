import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CLIENT_WORK } from '../data/group';
import { BrowserFrame, ButtonLink, Container, NewBadge, PageHeader, Reveal } from './site/ui';

export default function ProjectCarousel() {
  return (
    <>
      <PageHeader
        eyebrow="Client work"
        title="Platforms we’ve built for clients."
        intro="A selection of work delivered by the group for institutions and businesses, from local caterers to superbike showrooms."
      >
        <ButtonLink to="/contact" arrow>
          Start a project
        </ButtonLink>
      </PageHeader>

      <section className="py-24">
        <Container className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {CLIENT_WORK.map((w, i) => {
            const inner = (
              <>
                {w.shot ? (
                  <div className="overflow-hidden rounded-2xl">
                    <BrowserFrame src={w.shot} alt={`${w.name} website`} url={w.domain} className="transition-transform duration-700 group-hover:scale-[1.02]" />
                  </div>
                ) : (
                  <div className="sv-grid flex aspect-[16/11] items-center justify-center rounded-2xl border border-line bg-white">
                    <span className="font-mono text-sm text-muted">{w.domain}</span>
                  </div>
                )}
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{w.category}</span>
                      {w.status ? <NewBadge>{w.status}</NewBadge> : w.isNew && <NewBadge />}
                    </div>
                    <h2 className="mt-2 text-2xl font-semibold">{w.name}</h2>
                    <p className="mt-2 leading-relaxed text-muted">{w.summary}</p>
                  </div>
                  {w.url && (
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line transition-all group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                      <ArrowUpRight className="h-5 w-5" aria-hidden />
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
        </Container>
      </section>
    </>
  );
}
