import React from 'react';
import { CONTACT } from '../data/group';
import { ButtonLink, Container, Eyebrow, PageHeader, Reveal } from './site/ui';

const reasons = [
  { t: 'Ship real products', d: 'Your work goes live in products like MenuCraft and BizKitOps, used by businesses every day.' },
  { t: 'Work across companies', d: 'Software, games, research and brands. Move between them as your interests grow.' },
  { t: 'Learn from builders', d: 'Work directly with the founders and senior engineers, with code review and mentorship.' },
];

const disciplines = ['Full-stack engineering', 'Mobile (React Native)', 'UI/UX & product design', 'Graphic & 3D design', 'Game development', 'Growth & marketing'];

const stack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'React Native', 'PostgreSQL', 'Supabase', 'Firebase', 'Tailwind CSS', 'Unity'];

export default function Careers() {
  const mail = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Application — Svvaap Innovations')}`;

  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Build companies with us."
        intro="We are a small team that ships a lot. If you like owning your work and seeing it in the hands of real users, you will fit right in."
      >
        <ButtonLink to={mail} arrow>
          Send your application
        </ButtonLink>
      </PageHeader>

      <section className="py-24">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal key={r.t} delay={i * 80} className="bg-paper p-8">
                <span className="font-mono text-sm text-muted">0{i + 1}</span>
                <h2 className="mt-8 text-xl font-semibold">{r.t}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{r.d}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-white py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Who we look for</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold">Disciplines</h2>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {disciplines.map((d) => (
                <li key={d} className="py-4">{d}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>What we use</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold">Stack</h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {stack.map((s) => (
                <span key={s} className="rounded-full border border-line px-4 py-2 text-sm">{s}</span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal className="rounded-[2rem] bg-ink p-8 text-white sm:p-14">
            <Eyebrow dark>Open positions</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold sm:text-4xl">No open roles right now, but we always read every application.</h2>
            <p className="mt-4 max-w-xl text-white/60">
              Send your CV, portfolio or GitHub, and a few lines on what you would like to build. We will reach out when a
              suitable role opens up.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink to={mail} variant="light" arrow>
                Apply by email
              </ButtonLink>
              <span className="font-mono text-sm text-white/50">{CONTACT.email}</span>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
