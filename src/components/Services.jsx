import React from 'react';
import { Bot, Gamepad2, Globe, Layers, Palette, Smartphone } from 'lucide-react';
import { ButtonLink, Container, Eyebrow, PageHeader, Reveal } from './site/ui';

const services = [
  { icon: Globe, title: 'Websites & web applications', body: 'Fast, accessible sites and dashboards, from company websites to complex internal tools.', by: '21xEngineers' },
  { icon: Smartphone, title: 'Mobile apps', body: 'Android and iOS apps from a single codebase, published and maintained on both stores.', by: '21xEngineers' },
  { icon: Layers, title: 'SaaS & product engineering', body: 'Multi-tenant platforms, payments and subscriptions. The same stack that runs our own products.', by: '21xEngineers' },
  { icon: Bot, title: 'AI & automation', body: 'Practical AI features and workflow automation that save real hours, not demos.', by: '21xEngineers · Star Labs' },
  { icon: Palette, title: 'Brand & UI/UX design', body: 'Identity, product design and design systems that make software feel trustworthy.', by: 'Design team' },
  { icon: Gamepad2, title: 'Game development', body: 'Concept, prototyping and full production of mobile and PC games.', by: 'Sen10 Games' },
];

const steps = [
  { t: 'Discover', d: 'A free call to understand the goal, the users and the constraints.' },
  { t: 'Design', d: 'A clickable prototype you can test before any code is written.' },
  { t: 'Build', d: 'Working software every week, with direct access to the team.' },
  { t: 'Launch & run', d: 'Deployment, training and ongoing support after go-live.' },
];

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="What the group builds for clients."
        intro="Client work is delivered by the company best suited to it, backed by the same engineering and design team that builds our own products."
      >
        <ButtonLink to="/contact" arrow>
          Start a project
        </ButtonLink>
        <ButtonLink to="/projects" variant="secondary">
          See client work
        </ButtonLink>
      </PageHeader>

      <section className="py-24">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 80} className="flex flex-col bg-paper p-8">
                <s.icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                <h2 className="mt-8 text-xl font-semibold">{s.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{s.body}</p>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Delivered by {s.by}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-white py-24">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>Process</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">A process built around fewer surprises.</h2>
          </Reveal>
          <ol className="mt-12 grid gap-8 md:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.t} delay={i * 80} className="border-t border-ink pt-6">
                <span className="font-mono text-sm text-muted">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
