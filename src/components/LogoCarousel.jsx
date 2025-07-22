import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function LogoCarousel({ logos }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    // Clone the logos for seamless scrolling
    const clonedLogos = scrollElement.innerHTML;
    scrollElement.innerHTML += clonedLogos;

    // Calculate scroll speed based on content width
    const duration = scrollElement.scrollWidth * 5;

    scrollElement.style.animation = `scroll ${duration}ms linear infinite`;
  }, []);

  return (
    <div className="relative overflow-hidden w-full">
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
      <div ref={scrollRef} className="flex space-x-12 py-8">
        {logos.map((partner, index) => (
          <div key={index} className="flex-none w-48">
            <div className=" rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-24 w-full object-contain"
              />
              <p className="mt-4 text-sm text-gray-500 text-center font-medium">
                {partner.name}
              </p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

LogoCarousel.propTypes = {
  logos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  ).isRequired
};
