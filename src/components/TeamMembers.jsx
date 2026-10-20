import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { LEADERSHIP, TEAM } from '../data/group';
import { ButtonLink, Container, Eyebrow, PageHeader, Reveal } from './site/ui';

function Person({ person, large = false }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-line bg-white">
      <div className={`overflow-hidden bg-[#ecebe7] ${large ? 'aspect-[4/3]' : 'aspect-square'}`}>
        <img
          src={person.image}
          alt={person.name}
          className="h-full w-full object-cover object-top grayscale transition-all duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
          loading="lazy"
        />
      </div>
      <div className="flex items-start justify-between gap-4 p-6">
        <div>
          <h3 className={`${large ? 'text-xl' : 'text-lg'} font-semibold`}>{person.name}</h3>
          <p className="text-sm text-muted">{person.role}</p>
          {person.bio && <p className="mt-3 text-sm leading-relaxed text-ink/75">{person.bio}</p>}
        </div>
        {person.linkedin && (
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${person.name} on LinkedIn`}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors hover:border-ink hover:bg-ink hover:text-white"
          >
            <FaLinkedinIn className="h-4 w-4" />
          </a>
        )}
      </div>
    </article>
  );
}

export default function TeamMembers() {
  return (
    <>
      <PageHeader
        eyebrow="Team"
        title="The people behind the group."
        intro="A small, senior team of engineers and designers who build every company and product in the group, and talk to customers directly."
      />

      <section className="py-24">
        <Container>
          <Reveal>
            <Eyebrow>Leadership</Eyebrow>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {LEADERSHIP.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <Person person={p} large />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20">
            <Eyebrow>Design & engineering</Eyebrow>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <Person person={p} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 flex flex-col items-start justify-between gap-6 rounded-3xl border border-line bg-white p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="text-2xl font-semibold">Want to build with us?</h2>
              <p className="mt-2 text-muted">We are always glad to hear from engineers, designers and builders.</p>
            </div>
            <ButtonLink to="/careers" arrow>
              See careers
            </ButtonLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
