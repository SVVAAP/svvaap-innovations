import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/NavBar';
import './App.css';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact';
import Home from "./pages/Home";
import NoPage from "./pages/NoPage.jsx";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
