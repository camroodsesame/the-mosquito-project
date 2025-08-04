// src/components/Header.jsx (updated navigation)
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import mosquitoLogo from "../assets/mosquito-logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (menu) => {
    // Clear any existing timeout
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    // Set a timeout to close the dropdown after a short delay
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay before closing
    setDropdownTimeout(timeout);
  };

  const closeAll = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  };

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-amber-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link
            to="/"
            className="flex items-center space-x-3"
            onClick={closeAll}
          >
            <img
              src={mosquitoLogo}
              alt="Mosquito Project Logo"
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-amber-600">
              The Mosquito Project
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <Link
              to="/about"
              className="px-4 py-2 rounded-lg hover:bg-amber-50 transition-all duration-300 font-medium flex items-center"
              onClick={closeAll}
            >
              About
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter("initiatives")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="px-4 py-2 rounded-lg hover:bg-amber-50 transition-all duration-300 flex items-center font-medium">
                Initiatives
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === "initiatives" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              <div
                className={`absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-amber-200 transition-all duration-300 ease-in-out transform origin-top ${
                  activeDropdown === "initiatives"
                    ? "opacity-100 visible scale-y-100 translate-y-0"
                    : "opacity-0 invisible scale-y-95 translate-y-2 pointer-events-none"
                }`}
                onMouseEnter={() => handleMouseEnter("initiatives")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="py-2">
                  <Link
                    to="/initiatives/credit-offsetting"
                    className="block px-6 py-3 hover:bg-amber-50 border-b border-amber-100 transition-colors duration-200"
                    onClick={closeAll}
                  >
                    <div className="font-medium text-emerald-700">
                      The Mosquito Credits Initiative
                    </div>
                  </Link>
                  <Link
                    to="/initiatives/million-challenge"
                    className="block px-6 py-3 hover:bg-amber-50 border-b border-amber-100 transition-colors duration-200"
                    onClick={closeAll}
                  >
                    <div className="font-medium text-emerald-700">
                      The 1 Million Mosquito Challenge
                    </div>
                  </Link>
                  <Link
                    to="/initiatives/aedes-containment"
                    className="block px-6 py-3 hover:bg-amber-50 border-b border-amber-100 transition-colors duration-200"
                    onClick={closeAll}
                  >
                    <div className="font-medium text-emerald-700">
                      The Aedes Aegypti Containment Initiative
                    </div>
                  </Link>

                  <Link
                    to="/initiatives/research-projects"
                    className="block px-6 py-3 hover:bg-amber-50 transition-colors duration-200"
                    onClick={closeAll}
                  >
                    <div className="font-medium text-emerald-700">
                      Research Projects
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/publications"
              className="px-4 py-2 rounded-lg hover:bg-amber-50 transition-all duration-300 font-medium flex items-center"
              onClick={closeAll}
            >
              Books & Articles
            </Link>

            {/*<Link
              to="/products"
              className="px-4 py-2 rounded-lg hover:bg-amber-50 transition-all duration-300 font-medium flex items-center"
              onClick={closeAll}
            >
              Products
            </Link>*/}
            <Link
              to="/faq"
              className="px-4 py-2 rounded-lg hover:bg-amber-50 transition-all duration-300 font-medium flex items-center"
              onClick={closeAll}
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 rounded-lg hover:bg-amber-50 transition-all duration-300 font-medium flex items-center"
              onClick={closeAll}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-emerald-600 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              <Link
                to="/about"
                className="px-4 py-3 rounded-lg hover:bg-amber-50 transition-all font-medium"
                onClick={closeAll}
              >
                About
              </Link>

              <div className="pl-4">
                <button
                  className="flex justify-between items-center w-full py-3 px-4 rounded-lg hover:bg-amber-50 transition-all font-medium text-left"
                  onClick={() => handleMouseEnter("mobile-initiatives")}
                >
                  <span className="text-emerald-600">Initiatives</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === "mobile-initiatives"
                        ? "rotate-180"
                        : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                {activeDropdown === "mobile-initiatives" && (
                  <div className="pl-4 space-y-2 animate-slideDown">
                    <Link
                      to="/initiatives/credit-offsetting"
                      className="block py-2 px-4 rounded-lg hover:bg-amber-50 text-gray-700"
                      onClick={closeAll}
                    >
                      The Mosquito Credits
                    </Link>
                    <Link
                      to="/initiatives/aedes-containment"
                      className="block py-2 px-4 rounded-lg hover:bg-amber-50 text-gray-700"
                      onClick={closeAll}
                    >
                      The Aedes Aegypti Containment Initiative
                    </Link>
                    <Link
                      to="/initiatives/million-challenge"
                      className="block py-2 px-4 rounded-lg hover:bg-amber-50 text-gray-700"
                      onClick={closeAll}
                    >
                      The 1 Million Mosquito Challenge
                    </Link>
                    <Link
                      to="/initiatives/research-projects"
                      className="block py-2 px-4 rounded-lg hover:bg-amber-50 text-gray-700"
                      onClick={closeAll}
                    >
                      Research Projects
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/publications"
                className="px-4 py-3 rounded-lg hover:bg-amber-50 transition-all font-medium"
                onClick={closeAll}
              >
                Books & Articles
              </Link>

              {/*
              <Link
                to="/products"
                className="px-4 py-3 rounded-lg hover:bg-amber-50 transition-all font-medium"
                onClick={closeAll}
              >
                Products
              </Link>*/}
              <Link
                to="/faq"
                className="px-4 py-3 rounded-lg hover:bg-amber-50 transition-all font-medium"
                onClick={closeAll}
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className="px-4 py-3 rounded-lg hover:bg-amber-50 transition-all font-medium"
                onClick={closeAll}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
