import React from 'react';
import LogoCarousel from './LogoCarousel';
import sen10games from "../img/sen10games.png"
import n9 from "../img/n9clothing.png"
import bhumijcreations from "../img/bhumij creations logo.png"
import menucraft from "../img/menucraft_logo.png"
import ideogram from "../img/ideogram-white.png"
const startups = [
  {
    name: "Sen10 Games",
    logo: sen10games,
    description: "Immersive gaming experiences with unique concepts."
  },
  {
    name: "N9 Clothings",
    logo: n9,
    description: "sketch design on t-shirts."
  },
  {
    name: "Bhumij Designs",
    logo: bhumijcreations,
    description: "Creative design and branding for businesses."
  },
  {
    name: "MenuCraft",
    logo: menucraft,
    description: "Creative design and branding for businesses."
  },
  {
    name: "ideoGram",
    logo: ideogram,
    description: "Creative design and branding for businesses."
  }
 
];

export default function Startups() {
  return (
    <div id="startups" className="bg-[#0a1220] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8ad3c4]">Portfolio</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Ventures and startups we've incubated
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-[#a9bfd6]">
            Building innovative products and business models through our startup ecosystem.
          </p>
        </div>

        <div className="mt-14">
          <LogoCarousel logos={startups} darkTheme />
        </div>
      </div>
    </div>
  );
}
