import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
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
import Projects from './components/Clientsprojects.jsx';
import "./index.css";
import Layout from './components/site/Layout.jsx';
import SEO from './components/SEO.jsx';
import TwentyOneXEngineers from './components/21xengineers.jsx';
import SoftwareDevelopmentUdupi from './pages/SoftwareDevelopmentUdupi.jsx';
import SoftwareDevelopmentManipal from './pages/SoftwareDevelopmentManipal.jsx';
import BudgetWebAppDevelopers from './pages/BudgetWebAppDevelopers.jsx';

// Standalone apps are loaded on demand so the marketing pages stay light.
const PaymentDemo = lazy(() => import('./pages/PaymentDemo.jsx'));
const Ideogram = lazy(() => import('./components/ideogram/HomeIG.jsx'));
const IGLogin = lazy(() => import('./components/ideogram/components/Login.jsx'));
const AdminPage = lazy(() => import('./pages/admin.jsx'));

const routeSeoMap = {
  "/": {
    title: "Svvaap Innovations | Technology Group & Software Company in Udupi, Manipal",
    description:
      "Svvaap Innovations is a Udupi-based technology group and parent company of 21xEngineers, Sen10 Games and Star Labs, building SaaS products like MenuCraft and BizKitOps, games, and custom web and app software.",
    keywords:
      "software company in udupi, software company in manipal, software development company in karnataka, budget friendly web developers udupi, app developers manipal, custom software development udupi",
    schema: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Svvaap Innovations",
      foundingDate: "2021",
      subOrganization: [
        { "@type": "Organization", name: "21xEngineers", url: "https://21xengineers.svvaap.in" },
        { "@type": "Organization", name: "Sen10 Games", url: "https://sen10games.in" },
        { "@type": "Organization", name: "Star Labs" }
      ],
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
  "/team": {
    title: "Team | Svvaap Innovations",
    description: "Meet the founders and team behind Svvaap Innovations, 21xEngineers, Sen10 Games and Star Labs.",
    keywords: "svvaap innovations team, srujan moolya, anup nayak"
  },
  "/careers": {
    title: "Careers | Svvaap Innovations",
    description: "Join Svvaap Innovations in Udupi. Build SaaS products, games and client software with a small team that ships.",
    keywords: "software jobs udupi, developer jobs manipal, svvaap careers"
  },
  "/ventures": {
    title: "Ventures | Companies, Products and Brands of Svvaap Innovations",
    description: "Every company, product and brand in the Svvaap Innovations group: 21xEngineers, Sen10 Games, Star Labs, MenuCraft, BizKitOps and more.",
    keywords: "svvaap ventures, menucraft, bizkitops, sen10 games, 21xengineers"
  },
  "/startup": {
    title: "Ventures | Companies, Products and Brands of Svvaap Innovations",
    description:
      "Every company, product and brand in the Svvaap Innovations group: 21xEngineers, Sen10 Games, Star Labs, MenuCraft, BizKitOps and more.",
    keywords:
      "startup development company udupi, mvp development manipal"
  },
  "/21xengineers": {
    title: "21xEngineers | Software Products & Engineering | A Svvaap Innovations Company",
    description:
      "21xEngineers is the software company of Svvaap Innovations. It builds and runs MenuCraft, BizKitOps and other SaaS products, and engineers web, mobile and SaaS platforms for clients.",
    keywords:
      "21xengineers, 21xengineers svvaap, 21xengineers udupi, saas company udupi, menucraft, bizkitops",
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
  },
  "/admin": {
    title: "Admin Panel | Svvaap Innovations",
    description: "Internal admin panel for Svvaap Innovations.",
    keywords: "svvaap admin"
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
      noindex={currentPath === "*" || currentPath === "/admin"}
    />
  );
}


function App() {
  return (
    <Router>
      <RouteSEO />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<TeamMembers />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/startup" element={<Startup />} />
          <Route path="/ventures" element={<Startup />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/21xengineers" element={<TwentyOneXEngineers />} />
          <Route path="/software-development-company-udupi" element={<SoftwareDevelopmentUdupi />} />
          <Route path="/software-development-company-manipal" element={<SoftwareDevelopmentManipal />} />
          <Route path="/budget-friendly-web-app-developers-udupi-manipal" element={<BudgetWebAppDevelopers />} />
          {/* Legal pages */}
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        {/* Standalone apps keep their own chrome */}
        <Route path="/payment-demo" element={<Suspense fallback={null}><PaymentDemo /></Suspense>} />
        <Route path="/ideogram" element={<Suspense fallback={null}><Ideogram /></Suspense>} />
        <Route path="/ideogram/login" element={<Suspense fallback={null}><IGLogin /></Suspense>} />
        <Route path="/admin" element={<Suspense fallback={null}><AdminPage /></Suspense>} />
      </Routes>
    </Router>
  );
}

export default App;
