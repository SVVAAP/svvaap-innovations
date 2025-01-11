// src/pages/Home.js
import React from 'react';
import Navbar from '../components/NavBar'
import Footer from '../components/footer'
import Hero from '../components/hero';
import Soon from '../components/comingSoon';
import Services from '../components/Services';
import Projects from '../components/projects';
import UpcomingProjects from '../components/upcomingProjects';
import Partners from '../components/partners';
import Contact from '../components/Contact';


function Home(props) {

  return (

    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services/>
        <Projects />
        <UpcomingProjects />
        <Partners />
        <Contact />
        <Footer/>
      </main>
    </div>
  );
}

export default Home;

