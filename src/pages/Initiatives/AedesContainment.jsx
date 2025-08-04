// src/pages/initiatives/AedesContainment.jsx
import React from "react";
import { Link } from "react-router-dom";

const AedesContainment = () => {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-green-50 to-amber-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
            Aedes Aegypti Containment Project
          </h1>
          <div className="w-20 h-1 bg-amber-500 mb-8"></div>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Rooting out the origin of one of humanity's most dangerous
              mosquito species — starting at the source.
            </p>

            <img
              src="https://placehold.co/800x400/16a34a/ffffff?text=Aedes+Containment"
              alt="Aedes Containment"
              className="w-full h-64 object-cover rounded-lg mb-8"
            />

            <p className="text-gray-700 mb-6">
              The Aedes Aegypti mosquito is responsible for transmitting deadly
              diseases including dengue, Zika, chikungunya, and yellow fever.
              Our containment project focuses on identifying and eliminating
              breeding sites in urban environments where this species thrives.
            </p>

            <p className="text-gray-700 mb-6">
              Working with local communities, we implement targeted
              interventions including:
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>
                Community education on identifying and removing breeding sites
              </li>
              <li>
                Distribution of eco-friendly larvicides in standing water
                sources
              </li>
              <li>Installation of mosquito traps in high-risk neighborhoods</li>
              <li>
                Collaboration with local health authorities for surveillance
              </li>
            </ul>

            <div className="bg-gradient-to-r from-green-100 to-amber-100 rounded-lg p-6 border-l-4 border-green-500 mb-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">
                Our Approach
              </h3>
              <p className="text-gray-700">
                We combine cutting-edge vector control techniques with community
                engagement to create sustainable solutions. Our methods are
                environmentally responsible, scientifically validated, and
                community-driven.
              </p>
            </div>

            <p className="text-gray-700">
              By focusing on the Aedes Aegypti at its source, we're not just
              reducing mosquito populations—we're preventing disease outbreaks
              and saving lives. Join us in containing this dangerous species
              before it contains us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AedesContainment;
