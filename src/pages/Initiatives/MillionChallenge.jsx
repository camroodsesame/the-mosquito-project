// src/pages/initiatives/MillionChallenge.jsx
import React from "react";
import { Link } from "react-router-dom";

const MillionChallenge = () => {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-green-50 to-amber-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
            The 1 Million Mosquito Challenge
          </h1>
          <div className="w-20 h-1 bg-amber-500 mb-8"></div>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              A personal mission. A public spectacle. A million tiny swats for
              one giant leap of love. Because love is worth fighting for — even
              if that means one million mosquito fallen.
            </p>

            <img
              src="https://placehold.co/800x400/15803d/ffffff?text=Million+Challenge"
              alt="Million Challenge"
              className="w-full h-64 object-cover rounded-lg mb-8"
            />

            <p className="text-gray-700 mb-6">
              The 1 Million Mosquito Challenge is our founder's personal crusade
              to eliminate one million mosquitoes from the planet. For every
              dollar raised, 20 confirmed mosquito kills are executed by our
              founder personally — no outsourcing, no delegation, just pure,
              unadulterated swatting.
            </p>

            <div className="bg-gradient-to-r from-green-100 to-amber-100 rounded-lg p-6 border-l-4 border-green-500 mb-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">
                Challenge Details
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>$1 = 20 confirmed mosquito kills</li>
                <li>Live updates on our swatting progress</li>
                <li>Personalized certificates for contributors</li>
                <li>Exclusive access to founder's swatting techniques</li>
                <li>Recognition in our "Hall of Swatters"</li>
              </ul>
            </div>

            <p className="text-gray-700 mb-6">
              This isn't just about swatting mosquitoes — it's about taking
              direct action against a global menace. Every swat is documented,
              every kill is verified, and every dollar makes a difference.
            </p>

            <p className="text-gray-700 mb-6">
              The challenge has already gained international attention, with
              media outlets calling it "the most literal fight against climate
              change" and "performance art with a purpose." But for our founder,
              it's simply about making the world a little less itchy, one swat
              at a time.
            </p>

            <div className="text-center">
              <div className="inline-block bg-gradient-to-r from-green-600 to-emerald-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg">
                Current Progress: 847,293/1,000,000 Mosquitoes Eliminated
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MillionChallenge;
