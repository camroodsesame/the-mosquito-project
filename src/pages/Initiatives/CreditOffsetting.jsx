// src/pages/initiatives/CreditOffsetting.jsx
import React from "react";
import { Link } from "react-router-dom";

const CreditOffsetting = () => {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-green-50 to-amber-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
            Carbon Credits for Mosquito Offsetting
          </h1>
          <div className="w-20 h-1 bg-amber-500 mb-8"></div>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              You could neutralize your mosquito impact the same way we do with
              carbon footprints.
            </p>

            <img
              src="https://placehold.co/800x400/22c55e/ffffff?text=Mosquito+Offsetting"
              alt="Mosquito Offsetting"
              className="w-full h-64 object-cover rounded-lg mb-8"
            />

            <p className="text-gray-700 mb-6">
              Our innovative mosquito offsetting program allows individuals and
              organizations to calculate their mosquito impact and purchase
              credits to support our containment initiatives. Just as carbon
              credits help reduce greenhouse gas emissions, mosquito credits
              fund projects that reduce mosquito populations and their negative
              effects on communities.
            </p>

            <p className="text-gray-700 mb-6">
              Each credit represents a quantifiable reduction in mosquito
              populations through our scientifically-backed containment methods.
              Your contribution directly supports local communities in
              vulnerable regions where mosquito-borne diseases are most
              prevalent.
            </p>

            <div className="bg-gradient-to-r from-green-100 to-amber-100 rounded-lg p-6 border-l-4 border-green-500 mb-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">
                How It Works
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Calculate your mosquito impact based on travel, outdoor
                  activities, and location
                </li>
                <li>
                  Purchase mosquito offset credits to neutralize your impact
                </li>
                <li>
                  Your contribution funds containment projects in high-risk
                  areas
                </li>
                <li>
                  Receive a certificate and impact report showing your
                  contribution
                </li>
              </ul>
            </div>

            <p className="text-gray-700">
              Join thousands of individuals who have already taken
              responsibility for their mosquito footprint. Together, we're
              creating a world where the buzz is just the sound of progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditOffsetting;
