// src/pages/initiatives/ResearchProjects.jsx (new page)
import React from "react";
import { Link } from "react-router-dom";
import { FileText, Microscope, BookOpen, Newspaper } from "lucide-react";
import mosquitoLogo from "../../assets/mosquito-logo.svg";

const ResearchProjects = () => {
  const researchProjects = [
    {
      id: 1,
      title: "Aedes Aegypti Behavior Patterns",
      description:
        "Comprehensive study on urban mosquito behavior and breeding preferences in high-density areas.",
      status: "Completed",
      year: "2023",
      icon: Microscope,
      image: "https://placehold.co/600x400/d1fae5/047857?text=Aedes+Study",
      link: "#",
    },
    {
      id: 2,
      title: "Climate Impact on Vector Populations",
      description:
        "Analysis of how changing weather patterns affect mosquito population dynamics and disease transmission.",
      status: "Ongoing",
      year: "2024",
      icon: FileText,
      image: "https://placehold.co/600x400/fef3c7/d97706?text=Climate+Study",
      link: "#",
    },
    {
      id: 3,
      title: "Community-Based Containment Methods",
      description:
        "Field research on effective community-driven approaches to mosquito population control.",
      status: "Completed",
      year: "2022",
      icon: BookOpen,
      image: "https://placehold.co/600x400/dcfce7/15803d?text=Community+Study",
      link: "#",
    },
    {
      id: 4,
      title: "Genetic Resistance Analysis",
      description:
        "Study of genetic adaptations in mosquito populations that affect control method effectiveness.",
      status: "Planned",
      year: "2024",
      icon: Newspaper,
      image: "https://placehold.co/600x400/fef3c7/d97706?text=Genetic+Study",
      link: "#",
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
            Research Projects
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto mb-8"></div>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our scientific research initiatives drive innovation in vector
            control through rigorous field studies, laboratory research, and
            collaborative investigations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {researchProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl overflow-hidden border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-500 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                <div className="absolute top-6 right-6 bg-white/80 backdrop-blur p-3 rounded-full border border-amber-200 shadow-sm">
                  <project.icon size={28} className="text-emerald-600" />
                </div>
                <div className="absolute bottom-6 left-6">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === "Completed"
                        ? "bg-emerald-100 text-emerald-800"
                        : project.status === "Ongoing"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <span className="text-amber-600 font-medium">
                    {project.year}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <Link
                  to={project.link}
                  className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-800 transition-colors"
                >
                  View Project Details
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

        <div className="bg-white rounded-3xl p-12 border border-amber-200 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Collaborate With Our Research Team
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We're always looking for research partners, academic
                institutions, and citizen scientists to join our projects.
                Whether you're interested in data collection, analysis, or
                funding support, there's a place for you in our research
                initiatives.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white font-bold rounded-xl transition-all duration-300">
                  Join a Research Project
                </button>
                <button className="px-8 py-4 bg-white hover:bg-amber-50 text-gray-800 font-bold rounded-xl transition-all duration-300 border border-amber-300">
                  Propose a Study
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-100 to-amber-100 rounded-2xl"></div>
                <div className="relative bg-white rounded-2xl p-8 border border-amber-200">
                  <div className="flex items-center justify-center h-64 bg-amber-50 rounded-xl border border-amber-200">
                    <Microscope className="text-emerald-600" size={64} />
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

export default ResearchProjects;
