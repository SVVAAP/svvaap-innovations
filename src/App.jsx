import React from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import './App.css';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact';
import Home from "./pages/Home";
import NoPage from "./pages/NoPage.jsx";
import Ideogram from './components/ideogram/HomeIG.jsx';
import IGLogin from './components/ideogram/components/Login.jsx';
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        {/* ideogram links  */}
        <Route path="/ideogram" element={<Ideogram />} />
        <Route path="/ideogram/login" element={<IGLogin />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
