import React from 'react';
import { ButtonLink, Container, Eyebrow } from '../components/site/ui';

function NoPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="sv-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" aria-hidden />
      <Container className="relative flex min-h-[80vh] flex-col items-center justify-center py-32 text-center">
        <Eyebrow>Error 404</Eyebrow>
        <h1 className="mt-6 text-5xl font-semibold sm:text-6xl">Page not found</h1>
        <p className="mt-5 max-w-md text-lg text-muted">The page you’re looking for has moved or doesn’t exist.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink to="/" arrow>
            Back to home
          </ButtonLink>
          <ButtonLink to="/contact" variant="secondary">
            Contact us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

export default NoPage;
