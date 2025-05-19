
import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = 2022; 

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/radhi-katiki-1b8211251",
    },
    // {
    //   icon: <Twitter className="h-5 w-5" />,
    //   label: "Twitter",
    //   href: "https://twitter.com/yourprofile", 
    // },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      href: "mailto:contact@radhi.cloud",
    },
  ];

  const footerLinks = [
    { href: "/terms-of-service", label: "Terms of Service" },
    { href: "/privacy-policy", label: "Privacy Policy" },
  ];

  return (
    <footer className="bg-card/50 border-t border-border/50 py-12 mt-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center text-xl font-bold mb-2">
              <Sparkles className="h-8 w-8 gradient-text" />
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-sm text-foreground/70 mb-2">Connect with me:</p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-foreground/60 hover:text-primary transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
             <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
             <p className="text-xs text-foreground/60">
              &copy; {currentYear} All rights reserved with Radhi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
