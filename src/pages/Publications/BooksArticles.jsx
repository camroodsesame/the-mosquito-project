// src/pages/publications/BooksArticles.jsx (new consolidated page)
import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Newspaper, GraduationCap } from "lucide-react";
import mosquitoLogo from "../../assets/mosquito-logo.svg";

const BooksArticles = () => {
  const publications = [
    {
      id: 1,
      title: "The Philosophy of Swatting: A Mosquito Manifesto",
      author: "Dr. Buzz Killington",
      type: "Book",
      description:
        "An existential exploration of humanity's relationship with the mosquito through the lens of philosophy, ecology, and personal vendetta.",
      image: "https://placehold.co/300x400/d1fae5/047857?text=Book+1",
      link: "#",
    },
    {
      id: 2,
      title: "Containment Strategies for the 21st Century",
      author: "Dr. Aedes Expertus",
      type: "Book",
      description:
        "A comprehensive guide to modern mosquito containment techniques, combining traditional methods with cutting-edge technology.",
      image: "https://placehold.co/300x400/dcfce7/15803d?text=Book+2",
      link: "#",
    },
    {
      id: 3,
      title: "Why Mosquitoes Are Winning the Climate Battle",
      author: "Dr. Buzz Killington",
      type: "Article",
      date: "March 15, 2024",
      description:
        "As global temperatures rise, so do mosquito populations. Here's why our tiny adversaries are thriving in our changing climate.",
      image: "https://placehold.co/600x300/fef3c7/d97706?text=Article+1",
      link: "#",
    },
    {
      id: 4,
      title: "The Hidden Economics of Mosquito-Borne Diseases",
      author: "Dr. Aedes Expertus",
      type: "Article",
      date: "February 28, 2024",
      description:
        "Beyond the itchy bite, mosquito-borne diseases cost the global economy billions annually. Here's the economic impact breakdown.",
      image: "https://placehold.co/600x300/fde68a/d97706?text=Article+2",
      link: "#",
    },
    {
      id: 5,
      title:
        "The Buzz on Climate Change: How Global Warming is Making Mosquitoes Worse",
      author: "Dr. Thermos Vector",
      type: "Book",
      description:
        "An in-depth analysis of the relationship between climate change and mosquito population dynamics, with actionable solutions.",
      image: "https://placehold.co/300x400/fef3c7/d97706?text=Book+3",
      link: "#",
    },
    {
      id: 6,
      title: "DIY Mosquito Control: What Actually Works?",
      author: "Dr. Thermos Vector",
      type: "Article",
      date: "February 10, 2024",
      description:
        "Separating fact from fiction in the world of mosquito control. We test popular methods to see what really keeps these pests away.",
      image: "https://placehold.co/600x300/d1fae5/047857?text=Article+3",
      link: "#",
    },
  ];

  const books = publications.filter((pub) => pub.type === "Book");
  const articles = publications.filter((pub) => pub.type === "Article");

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
            Books & Articles
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto mb-8"></div>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Dive deep into our publications combining scientific rigor with
            accessible writing to educate and inspire action against
            mosquito-borne threats.
          </p>
        </div>

        {/* Books Section */}
        <div className="mb-20">
          <div className="flex items-center mb-12">
            <BookOpen className="text-emerald-600 mr-4" size={36} />
            <h2 className="text-3xl font-bold text-gray-900">Our Books</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-2xl overflow-hidden border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-500 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {book.title}
                  </h3>
                  <p className="text-emerald-600 font-medium mb-3">
                    by {book.author}
                  </p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {book.description}
                  </p>
                  <Link
                    to={book.link}
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
        </div>

        {/* Articles Section */}
        <div className="mb-20">
          <div className="flex items-center mb-12">
            <Newspaper className="text-amber-600 mr-4" size={36} />
            <h2 className="text-3xl font-bold text-gray-900">
              Latest Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-500 group"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {article.type}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {article.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {article.title}
                    </h3>
                    <p className="text-emerald-600 font-medium mb-3">
                      by {article.author}
                    </p>
                    <p className="text-gray-600 mb-4">{article.description}</p>
                    <Link
                      to={article.link}
                      className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-800 transition-colors"
                    >
                      Read Full Article
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
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-12 border border-amber-200 shadow-lg text-center">
          <GraduationCap className="text-emerald-600 mx-auto mb-6" size={48} />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Stay Updated
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest publications,
            research updates, and project news delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-5 py-4 bg-amber-50 border border-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800 placeholder-gray-500"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white font-bold rounded-xl transition-all duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksArticles;
