// src/pages/About.jsx
import React from "react";
import { Users, BookOpen, Target, Globe, Award } from "lucide-react";
import mosquitoLogo from "../assets/mosquito-logo.svg";

const About = () => {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <img
              src={mosquitoLogo}
              alt="Mosquito Project Logo"
              className="w-16 h-16 mx-auto"
            />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-amber-600">
            About Us
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto mb-8"></div>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            "I think, I write, I swat, and I believe the line between ridiculous
            and revolutionary is thinner than a mosquito wing."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Origin Story
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              The Mosquito Project was founded by a reluctant climate
              philosopher on a mission to combat the world's most irritating
              (and deadly) problem: mosquitoes. Through eco-conscious
              initiatives, we're turning the global "itch" into actionable
              change.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We use humor to spotlight a real global issue: mosquito-borne
              diseases and climate-driven population spread. So while the tone
              is playful, our initiatives have serious goals.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-12 border border-amber-200 mb-24 shadow-lg">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
            Our Mission
          </h2>
          <p className="text-gray-700 text-xl mb-10 max-w-4xl mx-auto text-center leading-relaxed">
            To combat the rise of mosquitoes — both literally and symbolically —
            by blending humor, digital tools, and real-world action. We aim to
            change the way the public perceive topics regarding mosquitos,
            public health & vector biology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-8 bg-emerald-50 rounded-2xl border border-emerald-100">
              <Target className="text-emerald-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Containment
              </h3>
              <p className="text-gray-600">
                Containment of mosquito populations in areas of concentration,
                especially in vulnerable regions
              </p>
            </div>

            <div className="text-center p-8 bg-amber-50 rounded-2xl border border-amber-100">
              <Users className="text-amber-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Awareness
              </h3>
              <p className="text-gray-600">
                Raising awareness about the collective responsibility of
                confronting disease vectors
              </p>
            </div>

            <div className="text-center p-8 bg-emerald-50 rounded-2xl border border-emerald-100">
              <Globe className="text-emerald-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Community
              </h3>
              <p className="text-gray-600">
                Building a community that turns frustration into impact
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-12 border border-amber-200 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Join Our Vector Revolution
              </h3>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Whether you're here to laugh, learn, contribute, or just count
                how many mosquitoes we've swatted this week — you're welcome.
                Together, we might just make a dent in the world's most annoying
                species realm — and have a good time doing it.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white font-bold rounded-xl transition-all duration-300">
                  Support Our Mission
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
