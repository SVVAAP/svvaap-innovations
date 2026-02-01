import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";
import Navbar from './components/NavBar';
import './App.css';
import About from './components/About.jsx';
import Careers from './components/Careers.jsx';
import Startup from './components/startup.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact';
import TeamMembers from './components/TeamMembers';
import Home from "./pages/Home";
import NoPage from "./pages/NoPage.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import RefundPolicy from "./pages/RefundPolicy.jsx";
import PaymentDemo from "./pages/PaymentDemo.jsx";
import Ideogram from './components/ideogram/HomeIG.jsx';
import IGLogin from './components/ideogram/components/Login.jsx';
import Loader from './components/Loader';
import Projects from './components/Clientsprojects.jsx';
import "./index.css";
import ContactBar from './components/ContactBar.jsx';


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
      <ContactBar phone="7899535703" whatsappNumber="7899535703" />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Team" element={<TeamMembers />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/startup" element={<Startup />} />
        <Route path="/projects" element={<Projects />} />
        {/* Payment Demo */}
        <Route path="/payment-demo" element={<PaymentDemo />} />
        {/* Legal Pages */}
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/refund" element={<RefundPolicy />} />
        {/* ideogram links  */}
        <Route path="/ideogram" element={<Ideogram />} />
        <Route path="/ideogram/login" element={<IGLogin />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
