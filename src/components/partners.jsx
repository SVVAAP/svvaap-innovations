import React from 'react';
import LogoCarousel from './LogoCarousel';
import sen10games from "../img/sen10games.png"
import n9 from "../img/n9clothing.png"
import bhumijcreations from "../img/bhumij creations logo.png"

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
    name: "Bhumid Designs",
    logo: bhumijcreations,
    description: "Creative design and branding for businesses."
  }
 
];

export default function Startups() {
  return (
    <div id="startups" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Startups
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Driving innovation and creativity through our ventures
          </p>
        </div>

        <div className="mt-10">
          <LogoCarousel logos={startups} darkTheme />
        </div>
      </div>
    </div>
  );
}
