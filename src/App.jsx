// src/App.jsx (updated with new routes)
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import InitiativesIndex from "./pages/initiatives/Index.jsx";
import ResearchProjects from "./pages/initiatives/ResearchProjects.jsx";
import BooksArticles from "./pages/publications/BooksArticles.jsx";
import Products from "./pages/Products";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

// Placeholder components for routes not yet implemented
const Placeholder = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-emerald-50">
    <div className="text-center p-8 bg-white rounded-2xl border border-amber-200 shadow-lg">
      <h2 className="text-3xl font-bold text-emerald-600 mb-4">
        Page Coming Soon
      </h2>
      <p className="text-gray-600">This page is under development</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-b from-white to-amber-50 text-gray-800">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/initiatives" element={<InitiativesIndex />} />
          <Route
            path="/initiatives/research-projects"
            element={<ResearchProjects />}
          />
          <Route
            path="/initiatives/credit-offsetting"
            element={<Placeholder />}
          />
          <Route
            path="/initiatives/aedes-containment"
            element={<Placeholder />}
          />
          <Route
            path="/initiatives/million-challenge"
            element={<Placeholder />}
          />
          <Route path="/publications" element={<BooksArticles />} />
          <Route path="/products" element={<Products />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
