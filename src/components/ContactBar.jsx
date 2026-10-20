import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

// Floating WhatsApp button. Appears after the visitor scrolls a little so it never covers the hero.
export default function ContactBar({
  phone = '7899535703',
  whatsappNumber,
  message = 'Hello! I would like to get in touch with Svvaap Innovations.',
}) {
  const waNumber = `91${(whatsappNumber || phone).replace(/\D/g, '').replace(/^91(?=\d{10}$)/, '')}`;
  const href = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      tabIndex={visible ? 0 : -1}
      className={`group fixed bottom-5 right-5 z-40 flex h-14 items-center gap-2 rounded-full bg-[#25D366] pl-4 pr-4 text-white shadow-[0_12px_32px_-8px_rgba(0,0,0,0.35)] transition-all duration-300 sm:bottom-8 sm:right-8 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <FaWhatsapp className="h-6 w-6" aria-hidden />
      <span className="hidden text-sm font-medium sm:inline">Chat with us</span>
    </a>
  );
}
