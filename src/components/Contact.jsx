import React, { useState } from 'react';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { CONTACT, whatsapp } from '../data/group';
import { Container, PageHeader, Reveal } from './site/ui';

const topics = ['A new project', 'MenuCraft or BizKitOps', 'Partnership or investment', 'Careers', 'Something else'];

const field =
  'mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-ink focus:bg-white focus:outline-none';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', topic: topics[0], message: '' });
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  // The form hands off to WhatsApp with the details pre-filled; nothing is stored on our side.
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*New enquiry — ${form.topic}*\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n\n${form.message}`;
    window.open(whatsapp(text), '_blank', 'noopener,noreferrer');
  };

  const channels = [
    { icon: MessageCircle, label: 'WhatsApp', value: CONTACT.phone, href: whatsapp('Hello Svvaap Innovations!') },
    { icon: Phone, label: 'Phone', value: CONTACT.phone, href: `tel:+${CONTACT.phoneRaw}` },
    { icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: MapPin, label: 'Office', value: CONTACT.address },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s talk."
        intro="Projects, products, partnerships or careers. Tell us what you have in mind and the right person from the group will reply."
      />

      <section className="py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <ul className="divide-y divide-line border-y border-line">
              {channels.map((c) => {
                const body = (
                  <>
                    <c.icon className="h-5 w-5 shrink-0 text-muted" strokeWidth={1.5} aria-hidden />
                    <span className="hidden w-24 shrink-0 font-mono text-xs uppercase tracking-[0.16em] text-muted sm:block">{c.label}</span>
                    <span className="min-w-0 break-all font-medium sm:break-words">{c.value}</span>
                  </>
                );
                return (
                  <li key={c.label}>
                    {c.href ? (
                      <a
                        href={c.href}
                        {...(c.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="flex items-center gap-4 py-5 transition-opacity hover:opacity-70"
                      >
                        {body}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 py-5">{body}</div>
                    )}
                  </li>
                );
              })}
            </ul>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted">
              Already a MenuCraft or BizKitOps customer? Pick that topic in the form and we’ll route you straight to the
              product team.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={handleSubmit} className="rounded-3xl border border-line bg-white p-6 sm:p-10">
              <h2 className="text-2xl font-semibold">Send us a message</h2>
              <p className="mt-1 text-sm text-muted">Opens WhatsApp with your message ready to send.</p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium">
                  Name
                  <input required value={form.name} onChange={update('name')} autoComplete="name" placeholder="Your name" className={field} />
                </label>
                <label className="block text-sm font-medium">
                  Email
                  <input required type="email" value={form.email} onChange={update('email')} autoComplete="email" placeholder="you@company.com" className={field} />
                </label>
              </div>

              <fieldset className="mt-6">
                <legend className="text-sm font-medium">What’s it about?</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {topics.map((t) => (
                    <label
                      key={t}
                      className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-signal ${
                        form.topic === t ? 'border-ink bg-ink text-white' : 'border-line hover:border-ink/40'
                      }`}
                    >
                      <input type="radio" name="topic" value={t} checked={form.topic === t} onChange={update('topic')} className="sr-only" />
                      {t}
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="mt-6 block text-sm font-medium">
                Message
                <textarea required rows={5} value={form.message} onChange={update('message')} placeholder="A few lines about what you need" className={field} />
              </label>

              <button
                type="submit"
                className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-ink text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Send via WhatsApp
              </button>
              <p className="mt-3 text-center text-xs text-muted">
                Prefer email? Write to <a href={`mailto:${CONTACT.email}`} className="underline underline-offset-2">{CONTACT.email}</a>
              </p>
            </form>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
