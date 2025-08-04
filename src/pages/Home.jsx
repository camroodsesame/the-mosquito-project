// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  BookOpen,
  ShoppingCart,
  Microscope,
  Zap,
  Globe,
} from "lucide-react";
import heroBg from "../assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-amber-50 to-emerald-50">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-100/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-emerald-100/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">Combating</span>
              <br />
              <span className="text-gray-900">The World's Most</span>
              <br />
              <span className="bg-clip-text  text-transparent bg-gradient-to-r from-red-950 to-amber-800">
                Dangerous Vector
              </span>
            </h1>

            <p className="text-xl font-bold text-red-1000 mb-10 max-w-xl leading-relaxed">
              The Mosquito Project is a crowdfunded social enterprise that
              leverages science, technology, and community action to contain
              mosquito populations and protect global health alongside.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/initiatives"
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/20 flex items-center justify-center"
              >
                Join Our Mission
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-white hover:bg-amber-50 text-gray-800 font-bold rounded-xl transition-all duration-300 border border-amber-300 flex items-center justify-center shadow-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-amber-600">
                What We Do
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our activitiess
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Work on Ground */}
            <div className="bg-white rounded-2xl p-8 border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-500 group">
              <div className="w-16 h-16 rounded-xl bg-emerald-100 flex items-center justify-center mb-8 group-hover:bg-emerald-200 transition-colors">
                <Users className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                We work on ground
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Partnering with local communities to develop culturally
                appropriate vector control strategies through participatory
                action research.
              </p>
              <Link
                to="/initiatives"
                className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-800 transition-colors"
              >
                Explore Initiatives
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            </div>

            {/* Enlighten People */}
            <div className="bg-white rounded-2xl p-8 border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-500 group">
              <div className="w-16 h-16 rounded-xl bg-amber-100 flex items-center justify-center mb-8 group-hover:bg-amber-200 transition-colors">
                <BookOpen className="text-amber-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                We enlighten people
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Publishing funny research article relatable to the public and
                educational content to advance vector biology knowledge and
                public health awareness.
              </p>
              <Link
                to="/publications"
                className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-800 transition-colors"
              >
                Read Publications
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            </div>

            {/* Provide Solutions */}
            <div className="bg-white rounded-2xl p-8 border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-500 group">
              <div className="w-16 h-16 rounded-xl bg-emerald-100 flex items-center justify-center mb-8 group-hover:bg-emerald-200 transition-colors">
                <ShoppingCart className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                We Innovate
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Developing and deploying cutting-edge vector control
                technologies and eco-friendly solutions for individual impact.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-800 transition-colors"
              >
                Browse Solutions
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className="text-center mt-20">
            <Link
              to="/initiatives"
              className="inline-block px-10 py-5 bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white font-bold rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/20"
            >
              Join the buzz now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
