import React from "react";
import "./App.css";
import "./styles/custom.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { Toaster } from "./components/ui/toaster";
import ScrollToTop from "./components/ScrollToTop"; // ✅ NEW
import { Analytics } from '@vercel/analytics/react';

import { HelmetProvider, Helmet } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>VAYORA_WEB | AI Automation & Web Design Studio</title>
        <meta name="description" content="A modern website design & AI automation studio. We build AI Voice Agents, WhatsApp Automations, and Premium Websites to capture leads perfectly." />
        <meta name="keywords" content="AI Voice Agents, WhatsApp Automation, Web Development, SEO Canada, Web Agency" />
      </Helmet>
      <div className="App">
        <HashRouter>
          <ScrollToTop /> {/* ✅ THIS FIXES FOOTER SCROLL ISSUE */}
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <Toaster />
        </HashRouter>
        <Analytics />
      </div>
    </HelmetProvider>
  );
}

export default App;
