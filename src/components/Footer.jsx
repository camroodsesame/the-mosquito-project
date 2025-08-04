// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";
import mosquitoLogo from "../assets/mosquito-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-amber-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={mosquitoLogo}
                alt="Mosquito Project Logo"
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-amber-600">
                The Mosquito Project
              </span>
            </div>
            <p className="text-gray-600 mb-6">
              Combating the world's most dangerous vector through science,
              technology, and community action.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-emerald-600 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-emerald-600 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-emerald-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-emerald-600 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/initiatives"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  Initiatives
                </Link>
              </li>
              <li>
                <Link
                  to="/publications"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  Publications
                </Link>
              </li>
              {/*
                <li>
                <Link
                  to="/products"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  Products
                </Link>
              </li>
              */}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-emerald-600 mb-6">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/faq"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-emerald-600 mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="mr-3 mt-1 text-emerald-600" size={18} />
                <span className="text-gray-600">info@mosquitoproject.org</span>
              </li>

              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 text-emerald-600" size={18} />
                <span className="text-gray-600">
                  Arbayeen, Suez, Egypt, Africa
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-200 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} The Mosquito Project. All rights
            reserved.
            <span className="block mt-2">
              Advancing vector science for humanity
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
