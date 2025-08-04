// src/pages/Products.jsx
import React from "react";
import { ShoppingCart, Zap, Shield, Leaf, Wrench } from "lucide-react";
import mosquitoLogo from "../assets/mosquito-logo.svg";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "VectorShield Pro",
      description:
        "Advanced mosquito repellent with 12-hour protection using plant-based compounds",
      price: "$24.99",
      icon: Shield,
      features: ["Plant-based", "12-hour protection", "DEET-free"],
    },
    {
      id: 2,
      title: "EcoTrap System",
      description:
        "Solar-powered mosquito trap with smart monitoring and automatic reporting",
      price: "$149.99",
      icon: Zap,
      features: ["Solar-powered", "Smart monitoring", "Eco-friendly"],
    },
    {
      id: 3,
      title: "BioLarvicide",
      description:
        "Organic larvicide tablets for standing water sources with 30-day effectiveness",
      price: "$19.99",
      icon: Leaf,
      features: ["Organic", "30-day effectiveness", "Safe for pets"],
    },
    {
      id: 4,
      title: "VectorTracker",
      description:
        "Mobile app for reporting mosquito sightings and receiving local alerts",
      price: "Free",
      icon: Wrench,
      features: [
        "Real-time alerts",
        "Community reporting",
        "Research contribution",
      ],
    },
  ];

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
            Vector Control Solutions
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto mb-8"></div>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our eco-friendly products and innovative tools help you fight back
            against the mosquito menace in your own backyard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-500 group"
            >
              <div className="p-6">
                <div className="w-16 h-16 rounded-xl bg-emerald-100 flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                  <product.icon className="text-emerald-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="text-2xl font-bold text-emerald-600 mb-4">
                  {product.price}
                </div>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-600 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white font-semibold rounded-lg transition-all duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-12 border border-amber-200 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Custom Vector Solutions
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Need a specialized solution for your community or organization?
                Our team of vector control experts can develop custom products
                and strategies tailored to your specific needs.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mr-3"></div>
                  Community-wide containment programs
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mr-3"></div>
                  Institutional protection systems
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mr-3"></div>
                  Research-grade monitoring equipment
                </li>
              </ul>
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white font-bold rounded-xl transition-all duration-300">
                Request Custom Solution
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-100 to-amber-100 rounded-2xl"></div>
                <div className="relative bg-white rounded-2xl p-8 border border-amber-200">
                  <div className="flex items-center justify-center h-64 bg-amber-50 rounded-xl border border-amber-200">
                    <Wrench className="text-emerald-600" size={64} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
