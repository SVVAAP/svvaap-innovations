import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
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
import SEO from './components/SEO.jsx';
import TwentyOneXEngineers from './components/21xengineers.jsx';
import SoftwareDevelopmentUdupi from './pages/SoftwareDevelopmentUdupi.jsx';
import SoftwareDevelopmentManipal from './pages/SoftwareDevelopmentManipal.jsx';
import BudgetWebAppDevelopers from './pages/BudgetWebAppDevelopers.jsx';

const routeSeoMap = {
  "/": {
    title: "Software Development Company in Udupi, Manipal | Svvaap Innovations",
    description:
      "Svvaap Innovations is a software development company in Udupi and Manipal, Karnataka. We build budget-friendly websites, mobile apps, and custom software for startups and businesses.",
    keywords:
      "software company in udupi, software company in manipal, software development company in karnataka, budget friendly web developers udupi, app developers manipal, custom software development udupi",
    schema: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Svvaap Innovations",
      url: "https://www.svvaap.in",
      image: "https://www.svvaap.in/img/21xE_social.png",
      description:
        "Budget-friendly web, app, and custom software development company serving Udupi, Manipal, Karnataka, and global clients.",
      areaServed: ["Udupi", "Manipal", "Karnataka", "India"],
      telephone: "+91-7899535703",
      email: "workwithsvvaap@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Udupi",
        addressRegion: "Karnataka",
        postalCode: "576101",
        addressCountry: "IN"
      },
      sameAs: [
        "https://www.linkedin.com/company/svvaap-innovations",
        "https://x.com/SVVAAPofficial",
        "https://www.instagram.com/svvaap/"
      ]
    }
  },
  "/about": {
    title: "About Svvaap Innovations | Software Company in Udupi, Karnataka",
    description:
      "Learn about Svvaap Innovations, a Udupi-based software development company helping businesses with web apps, mobile apps, and AI-powered platforms.",
    keywords:
      "about svvaap innovations, udupi software company, manipal web development company"
  },
  "/services": {
    title: "Web, App and Custom Software Development Services | Svvaap",
    description:
      "Explore Svvaap Innovations services: web development, mobile app development, AI solutions, UI/UX, and scalable software engineering in Udupi and Manipal.",
    keywords:
      "web development company udupi, app development company manipal, custom software services karnataka"
  },
  "/software-development-company-udupi": {
    title: "Software Development Company in Udupi | Svvaap Innovations",
    description:
      "Budget-friendly software development company in Udupi offering websites, mobile apps, and custom software for local businesses.",
    keywords:
      "software development company in udupi, software company in udupi, web developers udupi, app developers udupi"
  },
  "/software-development-company-manipal": {
    title: "Software Development Company in Manipal | Svvaap Innovations",
    description:
      "Affordable software development company serving Manipal with websites, apps, and custom digital products for businesses and startups.",
    keywords:
      "software development company in manipal, software company in manipal, web developers manipal, app developers manipal"
  },
  "/budget-friendly-web-app-developers-udupi-manipal": {
    title: "Budget Friendly Web and App Developers in Udupi and Manipal | Svvaap",
    description:
      "Hire budget-friendly web and app developers in Udupi and Manipal for affordable websites, apps, and SEO-ready landing pages.",
    keywords:
      "budget friendly web developers udupi, budget friendly app developers manipal, affordable web development udupi, affordable app development manipal"
  },
  "/contact": {
    title: "Contact Svvaap Innovations | Udupi & Manipal Software Experts",
    description:
      "Contact Svvaap Innovations for budget-friendly software, website, and app development in Udupi, Manipal, and Karnataka.",
    keywords:
      "contact software company udupi, contact app developers manipal"
  },
  "/projects": {
    title: "Client Projects | Svvaap Innovations",
    description:
      "See client projects delivered by Svvaap Innovations across web, app, and digital product development.",
    keywords:
      "software development projects udupi, web app portfolio karnataka"
  },
  "/startup": {
    title: "Startup Solutions and Ventures | Svvaap Innovations",
    description:
      "Discover startup-focused product development and digital launch support from Svvaap Innovations in Udupi and Manipal.",
    keywords:
      "startup development company udupi, mvp development manipal"
  },
  "/21xengineers": {
    title: "21xEngineers | Tech Media and Innovation Platform by Svvaap",
    description:
      "21xEngineers by Svvaap covers AI, robotics, and technology innovation. Visit 21xengineers.svvaap.in for updates and collaboration.",
    keywords:
      "21xengineers, 21xengineers svvaap, 21xengineers udupi, tech news platform karnataka",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "21xEngineers",
      url: "https://21xengineers.svvaap.in",
      publisher: {
        "@type": "Organization",
        name: "Svvaap Innovations",
        url: "https://www.svvaap.in"
      }
    }
  },
  "/privacy": {
    title: "Privacy Policy | Svvaap Innovations",
    description: "Read the privacy policy of Svvaap Innovations.",
    keywords: "svvaap privacy policy"
  },
  "/terms": {
    title: "Terms and Conditions | Svvaap Innovations",
    description: "Read the terms and conditions of Svvaap Innovations.",
    keywords: "svvaap terms and conditions"
  },
  "/refund": {
    title: "Refund Policy | Svvaap Innovations",
    description: "Read the refund policy of Svvaap Innovations.",
    keywords: "svvaap refund policy"
  }
};

function RouteSEO() {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();
  const seo = routeSeoMap[currentPath] || {
    title: "Svvaap Innovations | Software Development Company",
    description: "Svvaap Innovations builds web, app, and AI software products.",
    keywords: "software development company"
  };

  return (
    <SEO
      title={seo.title}
      description={seo.description}
      keywords={seo.keywords}
      path={currentPath}
      schema={seo.schema}
      noindex={currentPath === "*"}
    />
  );
}


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
      <RouteSEO />
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
        <Route path="/21xengineers" element={<TwentyOneXEngineers />} />
        <Route path="/software-development-company-udupi" element={<SoftwareDevelopmentUdupi />} />
        <Route path="/software-development-company-manipal" element={<SoftwareDevelopmentManipal />} />
        <Route path="/budget-friendly-web-app-developers-udupi-manipal" element={<BudgetWebAppDevelopers />} />
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
