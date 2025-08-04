// src/pages/initiatives/Index.jsx (updated to remove research section)
import React from "react";
import { Link } from "react-router-dom";
import { Target, Users, Zap } from "lucide-react";
import mosquitoLogo from "../../assets/mosquito-logo.svg";

const InitiativesIndex = () => {
  const initiatives = [
    {
      id: 1,
      title: "The Mosquito Credits Initiative",
      description:
        "Neutralize your mosquito impact through verified containment projects. Each credit represents a quantifiable reduction in vector populations.",
      icon: Target,
      image:
        "https://placehold.co/600x400/d1fae5/047857?text=Mosquito+Offsetting",
      link: "/initiatives/credit-offsetting",
      color: "from-emerald-500 to-green-600",
    },
    {
      id: 2,
      title: "The 1 Million Mosquito Challenge",
      description:
        "10 mosquitoes per USD till we reach 1 million, for the founder to secure his marriage funds and expand the enterprise.",
      icon: Zap,
      image:
        "https://placehold.co/600x400/fef3c7/d97706?text=Aedes+Containment",
      link: "/initiatives/aedes-containment",
      color: "from-amber-500 to-yellow-600",
    },
    {
      id: 3,
      title: "The Aedes Aegypti Containment Initiative",
      description:
        "Targeting the most dangerous mosquito species through community-based elimination programs in high-risk urban environments.",
      icon: Users,
      image:
        "https://placehold.co/600x400/dcfce7/15803d?text=Million+Challenge",
      link: "/initiatives/million-challenge",
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 4,
      title: "Our Research Projects",
      description: "COMING SOON",
      icon: Target,
      image: "https://placehold.co/600x400/dcfce7/15803d?text=Research",
      link: "/initiatives/million-challenge",
      color: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <img
              src={mosquitoLogo}
              alt="Mosquito Project Logo"
              className="w-16 h-16 mx-auto"
            />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-amber-600">
            Our Initiatives
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto mb-8"></div>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At The Mosquito Project, our mission extends beyond swatting pests.
            We channel frustration into purpose-driven action, giving
            individuals everywhere the chance to participate in a global
            movement against one of the world's most resilient nuisances. Here's
            how you can join us in making a difference — with meaning, science,
            satire, and sincerity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {initiatives.map((initiative) => (
            <div
              key={initiative.id}
              className="bg-white rounded-3xl overflow-hidden border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-500 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                <div className="absolute top-6 right-6 bg-white/80 backdrop-blur p-3 rounded-full border border-amber-200 shadow-sm">
                  <initiative.icon size={28} className="text-emerald-600" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {initiative.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {initiative.description}
                </p>
                <Link
                  to={initiative.link}
                  className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-800 transition-colors"
                >
                  Learn More
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
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="bg-white rounded-3xl p-12 border border-amber-200 max-w-4xl mx-auto shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Explore Our Research
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Discover our scientific research projects that drive innovation in
              vector control through rigorous studies and collaborative
              investigations.
            </p>
            <Link
              to="/initiatives/research-projects"
              className="inline-block px-10 py-5 bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white font-bold rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/20"
            >
              View Research Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitiativesIndex;
