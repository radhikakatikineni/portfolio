
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#services", label: "Services" },
    { href: "/#portfolio", label: "My Work" },
    { href: "/#contact", label: "Contact" },
  ];

  const handleScrollToSection = (e, sectionHref) => {
    e.preventDefault();
    const sectionId = sectionHref.substring(sectionHref.indexOf("#") + 1);

    if (location.pathname === "/" && sectionHref.startsWith("/#")) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80; 
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    } else {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      }, 100); 
    }
    setIsOpen(false);
  };
  
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, [location.hash]);


  const toggleMenu = () => setIsOpen(!isOpen);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Radhi-Resume.pdf'; 
    link.download = 'Radhi-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto", transition: { duration: 0.4, ease: "easeInOut" } },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? "bg-card/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex justify-between items-center">
        <Link to="/" onClick={(e) => handleScrollToSection(e, "/#home")} className="flex items-center text-2xl font-bold">
          <Sparkles className="h-8 w-8 gradient-text" />
        </Link>

        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollToSection(e, link.href)}
              className={`nav-link ${location.pathname === "/" && location.hash === link.href.substring(link.href.indexOf("#")) ? "active text-primary" : ""}`}
            >
              {link.label}
            </a>
          ))}
          <Button 
            variant="outline" 
            size="sm" 
            className="ml-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 relative overflow-hidden shine-button"
            onClick={handleResumeDownload}
          >
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </Button>
        </div>
      </div>

      <motion.div
        variants={mobileMenuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="md:hidden overflow-hidden"
      >
        <ul className="flex flex-col items-center space-y-3 p-4 pt-2 bg-card/95 backdrop-blur-md shadow-lg">
          {navLinks.map((link) => (
            <li key={link.label} className="w-full">
              <a
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className={`block py-3 px-4 text-foreground/90 hover:text-primary transition-colors w-full text-center rounded-md hover:bg-primary/10 ${location.pathname === "/" && location.hash === link.href.substring(link.href.indexOf("#")) ? "text-primary font-semibold" : ""}`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="w-full pt-2">
            <Button 
              variant="outline" 
              className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 relative overflow-hidden shine-button"
              onClick={handleResumeDownload}
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </li>
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
