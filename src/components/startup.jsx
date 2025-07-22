import React from "react";
import { Link } from "react-router-dom";
import Navbar from './NavBar';
import Footer from './footer';


const startups = [
  {
    name: "MenuCraft",
    description: "A restaurant digital menu management system that helps restaurants create, manage, and print menus efficiently.",
    image: "/assets/menucraft_logo.png",
    url: "https://www.menucraft.in",
  },
  {
    name: "Ideogram",
    description: "A creative platform where users can share and generate unique ideas powered by AI.",
    image: "/assets/ideogram_logo.png",
    url: "https://www.ideogram.svvaap.in",
  },
  {
    name: "Sen10Games",
    description: "A gaming studio focused on creating immersive and engaging mobile and PC games.",
    image: "/assets/sen10games_logo.png",
    url: "#",
  },
  {
    name: "N9 Clothing",
    description: "A modern clothing brand that blends fashion with innovative designs.",
    image: "/assets/n9clothing_logo.png",
    url: "#",
  },
];

const Startup = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
     <Navbar />

      {/* Hero Section */}
      <header className="text-center py-20 bg-gray-100">
        <h2 className="text-4xl font-bold">Our Startups</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          We are building innovative startups that shape the future of technology, gaming, and fashion.
        </p>
      </header>

      {/* Startups Grid */}
      <section className="container mx-auto px-6 py-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {startups.map((startup, index) => (
          <div key={index} className="bg-white p-6 shadow-lg rounded-lg text-center">
            <img src={startup.image} alt={startup.name} className="h-20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">{startup.name}</h3>
            <p className="text-gray-600 mt-2">{startup.description}</p>
            <a href={startup.url} target="_blank" rel="noopener noreferrer" className="block mt-4 text-blue-500 hover:underline">
              Visit {startup.name}
            </a>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-blue-500 text-white">
        <h2 className="text-3xl font-bold">Partner With Us</h2>
        <p className="mt-4 text-lg">Looking to invest or collaborate? Get in touch with us today!</p>
        <Link to="/contact" className="mt-6 inline-block bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">Contact Us</Link>
      </section>

      <Footer />
    </div>
  );
};

export default Startup;
