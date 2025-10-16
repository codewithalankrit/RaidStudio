import { Link } from "react-router-dom";
import type React from "react";

const Footer = () => {
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      const home = document.getElementById("home");
      if (home) {
        home.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4">
            <Link to="/" onClick={handleLogoClick}>
              <img
                src="/footerlogo.PNG"
                alt="RAID STUDIO Logo"
                className="w-auto mx-auto h-24"
              />
            </Link>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <div className="flex justify-center space-x-6 mb-4">
              <Link
                to="/terms-and-conditions"
                className="text-gray-400 hover:text-brand-teal transition-colors duration-300 text-sm"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-brand-teal transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </Link>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} RAID STUDIO. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
