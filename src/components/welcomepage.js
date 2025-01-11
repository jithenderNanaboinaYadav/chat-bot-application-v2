import React, { useState } from "react";
import "../App.css";
import Switcher from "./switcher";
import logo from "../applicationlogo.png"

const Welcomepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-cyan-900 dark:bg-gray-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="w-24 h-15 scroll-margin-left: 30px;"  />
            </div>
            <div>
              <Switcher />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
              <a href="/" className="hover:bg-gray-700 px-3 py-2 rounded-md">
                HOME
              </a>
              <a href="/music" className="hover:bg-gray-700 px-3 py-2 rounded-md">
             MUSIC
              </a>
              <a
                href="/video"
                className="hover:bg-gray-700 px-3 py-2 rounded-md"
              >
             VIDEO
              </a>
              <a
                href="/tour"
                className="hover:bg-gray-700 px-3 py-2 rounded-md"
              >
             TOUR
              </a>
              <a
                href="/contact"
                className="hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                CONTACT US
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                {isOpen ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-800">
            <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-700">
              Home
            </a>
            <a
              href="/about"
              className="block px-4 py-2 text-sm hover:bg-gray-700"
            >
              About
            </a>
            <a
              href="/services"
              className="block px-4 py-2 text-sm hover:bg-gray-700"
            >
              Services
            </a>
            <a
              href="/contact"
              className="block px-4 py-2 text-sm hover:bg-gray-700"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
      <div className="h-screen bg-gradient-to-r from-indigo-500 dark:bg-red-500">
        <div className="container mx-auto flex items-center justify-center">
          <div className="mx-auto justify-center text-center">
            <h2 className="font-semibold text-2xl text-yellow-700 mb-2">
              Welcome To Our
            </h2>
            <hr />
            <h1 className="font-semibold text-5xl text-sky-700 uppercase mb-4 mt-2">
              One Page Template
            </h1>
            <hr />
            <p className="mt-2 mb-2">
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              industry"
            </p>
            <button className="mb-2 p-4 bg-sky-900 font-semibold uppercase text-base text-yellow-500">
              Contact Now
            </button>
            <p className="w-0.5 h-12 animate-pulse bg-sky-900 mx-auto"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcomepage;
