// src/pages/Home.js
import React from 'react';
import NavBar from '../components/NavBar'
import Footer from '../components/footer'
import Hero from '../components/hero';
import Soon from '../components/comingSoon';

function Home(props)  {

  return (

  <>
    {/* <Soon/> */}
    <NavBar />
    
    <Hero/>
    <Footer/>
   
  </>
);
}

export default Home;