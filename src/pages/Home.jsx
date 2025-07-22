// src/pages/Home.js
import React from 'react';
import Navbar from '../components/NavBar'
import Footer from '../components/footer'
import Hero from '../components/hero';
import HeroSection from '../components/HeroSection';
import Soon from '../components/comingSoon';
import Services from '../components/Services';
import Projects from '../components/Clientsprojects';
import UpcomingProjects from '../components/upcomingProjects';
import Partners from '../components/partners';
import Contact from '../components/Contact';
import TeamMembers from '../components/TeamMembers';
import MyProjects from '../componentS/Projects';
import Engineers from '../components/21xengineers';


function Home(props) {

  return (

    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        {/* <HeroSection /> */}

        <Services />
        <MyProjects/>
        <Projects />
        <UpcomingProjects />
        <Partners />
        <Engineers/>
        <Contact />
        <TeamMembers />
        <Footer />
      </main>
    </div>
  );
}

export default Home;

