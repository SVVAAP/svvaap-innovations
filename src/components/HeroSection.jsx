import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

export default function HeroSection() {
  useEffect(() => {
    gsap.from('.draw', {
      drawSVG: '0%',
      ease: 'expo.out',
      scrollTrigger: {
        trigger: '.heading',
        start: 'top center',
        scrub: true,
        pin: '.pin',
        pinSpacing: false,
        markers: true,
      },
    });

    gsap.set('.logo svg', { opacity: 1 });
  }, []);

  return (
    <section className="relative isolate overflow-hidden font-sans bg-black text-white min-h-screen px-4 pt-10">
      {/* Header */}
      <header className="flex items-center p-6 border-b border-gray-700 bg-gray-900">
        <div className="logo w-40 max-w-[40vw] invert">
          <svg viewBox="0 0 370 100.34" className="opacity-0">
            <path
              fill="#111"
              d="m154.366 61.651 6.506 5.865c-4.307 4.766-10.447 6.873-17.32 6.873C130.539 74.39 120 64.4 120 50.93s10.539-23.552 23.552-23.552c6.873 0 13.013 2.108 17.32 6.873l-6.506 5.865c-2.658-3.574-6.507-4.949-10.814-4.949-7.79 0-14.113 6.507-14.113 15.763 0 9.164 6.323 15.762 14.113 15.762 4.307 0 8.156-1.374 10.814-5.04z"
            />
          </svg>
        </div>
        <nav className="ml-auto">
          <ul className="flex list-none space-x-4">
            <li>
              <a href="#about" className="text-white hover:underline">
                About
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="heading relative z-20 mix-blend-difference perspective-[1000px]">
        <div className="pin">
          <h1 className="uppercase text-center text-[clamp(1.875rem,10vw,7.5rem)] relative">
            <span className="relative -z-10 clamp">
              Clamp
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 842.14 500"
                className="absolute w-[112%] top-1/2 left-[-6%] transform -translate-y-1/2 rotate-[2deg]"
              >
                <path
                  className="draw"
                  d="M336.2,130.05C261.69,118,16.52,122,20.65,244.29c4.17,123,484.3,299.8,734.57,108.37,244-186.65-337.91-311-546.54-268.47"
                  fill="none"
                  stroke="#8486aa"
                  strokeWidth="8"
                />
              </svg>
            </span>
            <span className="yt relative z-30 block">your triggers</span>
          </h1>
        </div>
      </div>

      {/* Images */}
      <div className="images grid grid-cols-4 gap-4 mt-8 z-[-1]">
        {[
          'https://images.unsplash.com/photo-1530569673472-307dc017a82d',
          'https://images.unsplash.com/photo-1439853949127-fa647821eba0',
          'https://images.unsplash.com/photo-1551376347-075b0121a65b',
          'https://images.unsplash.com/photo-1500817487388-039e623edc21',
        ].map((src, idx) => (
          <img
            key={idx}
            src={`${src}?auto=format&fit=crop&w=600&q=80`}
            alt=""
            className="h-[60vh] w-full object-cover"
          />
        ))}
      </div>
    </section>
  );
}
