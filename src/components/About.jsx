import React from 'react';
import { BRANDS, COMPANIES, FOUNDED, LEADERSHIP, PRODUCTS } from '../data/group';
import { ButtonLink, Container, Eyebrow, LogoTile, PageHeader, Reveal } from './site/ui';

const values = [
  { title: 'Ownership', body: 'We build our own products and run them. That makes us better engineers for our clients too.' },
  { title: 'Clarity', body: 'Plain language, clear scope and honest timelines, from the first call to the last release.' },
  { title: 'Craft', body: 'Design and engineering held to the same standard, whether it is a game, a POS or a website.' },
  { title: 'Long view', body: 'We would rather keep a client and a product for ten years than win one quick launch.' },
];

export default function AboutUs() {
  return (
    <>
      <PageHeader
        eyebrow="About Svvaap Innovations"
        title="A technology group from Udupi, building for India and beyond."
        intro={`Founded in ${FOUNDED}, Svvaap Innovations started as a small software studio. Today it is the parent company of ${COMPANIES.length} companies, ${PRODUCTS.length} live software products and a growing family of brands.`}
      />

      <section className="py-24">
        <Container className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">From client projects to a group of companies.</h2>
          </Reveal>
          <Reveal delay={100} className="space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              Svvaap began by building websites and apps for local businesses and institutions. Along the way we
              kept seeing the same problems: restaurants losing orders, shops billing by hand, students waiting
              for buses that never showed up.
            </p>
            <p>
              So we started building products of our own. MenuCraft and BizKitOps grew out of that work, along with
              smaller tools like HostelBuddy and TrackMyBus. As the work broadened into games, research and consumer
              brands, we organised it into focused companies under one parent.
            </p>
            <p>
              The structure is simple. Svvaap Innovations holds the group and provides shared engineering, design and
              operations. Each company owns its market and its customers.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-line bg-white py-24">
        <Container>
          <Reveal>
            <Eyebrow>Structure</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">How the group is organised</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {COMPANIES.map((c, i) => (
              <Reveal key={c.key} delay={i * 80} className="rounded-2xl border border-line p-6">
                <LogoTile logo={c.logo} monogram={c.monogram} name={c.name} tile={c.tile} size="h-12 w-12" />
                <h3 className="mt-5 text-lg font-semibold">{c.name}</h3>
                <p className="text-sm text-muted">{c.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{c.summary}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-paper p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Products</p>
              <p className="mt-3 leading-relaxed">{PRODUCTS.map((p) => p.name).join(' · ')}</p>
            </div>
            <div className="rounded-2xl bg-paper p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Brands</p>
              <p className="mt-3 leading-relaxed">{BRANDS.map((b) => b.name).join(' · ')}</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>Values</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">What we hold ourselves to</h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className="bg-paper p-8">
                <span className="font-mono text-sm text-muted">0{i + 1}</span>
                <h3 className="mt-8 text-xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <Reveal className="grid gap-10 rounded-[2rem] bg-ink p-8 text-white sm:p-14 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">Led by {LEADERSHIP.map((l) => l.name).join(' and ')}.</h2>
              <p className="mt-3 max-w-xl text-white/60">Meet the founders and the team behind every company in the group.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink to="/team" variant="light" arrow>
                Meet the team
              </ButtonLink>
              <ButtonLink to="/contact" variant="ghostDark">
                Contact us
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
