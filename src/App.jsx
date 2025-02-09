import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";
import Navbar from './components/NavBar';
import './App.css';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact';
import TeamMembers from './components/TeamMembers';
import Home from "./pages/Home";
import NoPage from "./pages/NoPage.jsx";
import Ideogram from './components/ideogram/HomeIG.jsx';
import IGLogin from './components/ideogram/components/Login.jsx';
import Loader from './components/Loader';
import "./index.css";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 2 seconds
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />; // Show loading screen while initializing


  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/TeamMembers" element={<TeamMembers />} />
        {/* ideogram links  */}
        <Route path="/ideogram" element={<Ideogram />} />
        <Route path="/ideogram/login" element={<IGLogin />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
