
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import LegalPage from "@/pages/LegalPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 40,
    restDelta: 0.001,
  });

  useEffect(() => {
    document.title = "Radhi K. - Full Stack Developer Portfolio";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 gradient-bg z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <Router>
        <Navbar />
        <main className="flex-grow">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/terms-of-service" element={<LegalPage type="terms" />} />
            <Route path="/privacy-policy" element={<LegalPage type="privacy" />} />
          </Routes>
        </main>
        <Footer />
      </Router>
      <Toaster />
    </div>
  );
};

const App = () => {
  return <AppContent />;
};

export default App;
