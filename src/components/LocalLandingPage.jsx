import React from "react";
import SEO from "./SEO.jsx";
import { ButtonLink, Container, Eyebrow, PageHeader, Reveal } from "./site/ui";

export default function LocalLandingPage({
  title,
  description,
  path,
  keywords,
  intro,
  highlights,
  services,
  process,
  faqs,
  ctaTitle,
  ctaText,
  faqSchemaId,
}) {
  const faqSchema = faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : undefined;

  return (
    <>
      <SEO title={title} description={description} path={path} keywords={keywords} schema={faqSchema} />

      <PageHeader eyebrow="Svvaap Innovations · Udupi & Manipal" title={title} intro={intro}>
        <ButtonLink to="/contact" arrow>
          Get a quote
        </ButtonLink>
        <ButtonLink to="/services" variant="secondary">
          View services
        </ButtonLink>
      </PageHeader>

      <section className="py-20">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className="bg-paper p-8">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-white py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>What we deliver</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold">Services</h2>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {services.map((service) => (
                <li key={service} className="py-4">{service}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold">Process</h2>
            <ol className="mt-8 space-y-6">
              {process.map((step, index) => (
                <li key={step.title} className="flex gap-5">
                  <span className="font-mono text-sm text-muted">0{index + 1}</span>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      <section id={faqSchemaId || "faq"} className="py-20">
        <Container>
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold">Common questions</h2>
          </Reveal>
          <div className="mt-10 grid gap-x-12 lg:grid-cols-2">
            {faqs.map((faq) => (
              <Reveal key={faq.question} className="border-t border-line py-6">
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{faq.answer}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <Reveal className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-ink p-8 text-white sm:p-12 lg:flex-row lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-white/50">{ctaTitle}</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold">{ctaText}</h2>
            </div>
            <ButtonLink to="/contact" variant="light" arrow>
              Contact Svvaap
            </ButtonLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
