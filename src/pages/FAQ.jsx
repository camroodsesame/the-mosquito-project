// src/pages/FAQ.jsx
import React, { useState } from "react";
import { Bug, Users, BookOpen } from "lucide-react";
import mosquitoLogo from "../assets/mosquito-logo.svg";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Do you really kill mosquitoes?",
      answer:
        "Yes. Physically, emotionally, and metaphorically. Especially during the 1 Million Mosquito Challenge, where each dollar raised equals 20 confirmed kills. The founder personally handles the swatting — no outsourcing.",
    },
    {
      question: "Is this a joke or a real thing?",
      answer:
        "It's both. The Mosquito Project is a satirical social enterprise — we use humor to spotlight a real global issue: mosquito-borne diseases and climate-driven population spread. So while the tone is playful, our initiatives have serious goals.",
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <img
              src={mosquitoLogo}
              alt="Mosquito Project Logo"
              className="w-16 h-16 mx-auto"
            />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-amber-600">
            Frequently Asked Questions
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto mb-8"></div>
          <p className="text-2xl text-gray-600">
            Everything you've been buzzing to ask about The Mosquito Project
          </p>
        </div>

        <div className="space-y-6 mb-20">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-amber-200 shadow-lg"
            >
              <button
                className="w-full flex justify-between items-center p-8 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-xl font-semibold text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-emerald-600 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
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
              {openIndex === index && (
                <div className="px-8 pb-8">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-12 border border-amber-200 text-center shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Our team of vector experts is ready to buzz you back with answers.
            Reach out to our research team for technical inquiries or our
            community team for general questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white font-bold rounded-xl transition-all duration-300">
              Contact our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
