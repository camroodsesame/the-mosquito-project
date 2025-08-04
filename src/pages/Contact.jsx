// src/pages/Contact.jsx
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Users,
  BookOpen,
  Target,
} from "lucide-react";
import mosquitoLogo from "../assets/mosquito-logo.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your message! We'll buzz back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactOptions = [
    {
      icon: Users,
      title: "Community Support",
      description: "For general inquiries and community program questions",
      email: "community@mosquitoproject.org",
      phone: "+1 (800) COMMUNITY",
    },
    {
      icon: BookOpen,
      title: "Research Collaboration",
      description: "For academic partnerships and research inquiries",
      email: "research@mosquitoproject.org",
      phone: "+1 (800) RESEARCH",
    },
    {
      icon: Target,
      title: "Initiative Support",
      description: "For questions about our containment programs",
      email: "initiatives@mosquitoproject.org",
      phone: "+1 (800) INITIATIVE",
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
            Contact Vector Research
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto mb-8"></div>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions, ideas, or just want to share your mosquito battle
            stories? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {contactOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-amber-200 shadow-lg"
            >
              <div className="w-16 h-16 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                <option.icon className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {option.title}
              </h3>
              <p className="text-gray-600 mb-6">{option.description}</p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail
                    className="mr-3 mt-1 text-emerald-600 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-gray-700">{option.email}</span>
                </div>
                <div className="flex items-start">
                  <Phone
                    className="mr-3 mt-1 text-emerald-600 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-gray-700">{option.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-12 border border-amber-200 shadow-lg">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-2/5">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get In Touch
              </h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-4 rounded-xl mr-6">
                    <Mail className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      Email Us
                    </h3>
                    <p className="text-gray-600">swat@mosquitoproject.org</p>
                    <p className="text-gray-600">support@mosquitoproject.org</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-100 p-4 rounded-xl mr-6">
                    <Phone className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      Call Us
                    </h3>
                    <p className="text-gray-600">+1 (800) VECTOR-NOW</p>
                    <p className="text-gray-600">Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-100 p-4 rounded-xl mr-6">
                    <MapPin className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      Visit Us
                    </h3>
                    <p className="text-gray-600">Global Research Network</p>
                    <p className="text-gray-600">Field Stations Worldwide</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-semibold text-gray-900 text-lg mb-6">
                  Follow Our Research
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-white p-4 rounded-xl hover:bg-amber-50 transition-colors border border-amber-200 shadow-sm"
                  >
                    <svg
                      className="w-6 h-6 text-emerald-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-white p-4 rounded-xl hover:bg-amber-50 transition-colors border border-amber-200 shadow-sm"
                  >
                    <svg
                      className="w-6 h-6 text-emerald-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-white p-4 rounded-xl hover:bg-amber-50 transition-colors border border-amber-200 shadow-sm"
                  >
                    <svg
                      className="w-6 h-6 text-emerald-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-3/5">
              <div className="bg-white rounded-2xl p-8 border border-amber-200 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-3"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-amber-50 border border-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800 placeholder-gray-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-3"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-amber-50 border border-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800 placeholder-gray-500"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 font-medium mb-3"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-amber-50 border border-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800 placeholder-gray-500"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-medium mb-3"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-5 py-4 bg-amber-50 border border-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800 placeholder-gray-500"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center text-lg"
                  >
                    <Send className="mr-3" size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
