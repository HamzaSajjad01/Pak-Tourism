import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">PakTourism</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#provinces" className="text-gray-700 hover:text-blue-600">
              Provinces
            </a>
            <a href="#valleys" className="text-gray-700 hover:text-blue-600">
              Valleys
            </a>
            <a href="#peaks" className="text-gray-700 hover:text-blue-600">
              Peaks
            </a>
            <a href="#cuisine" className="text-gray-700 hover:text-blue-600">
              Cuisine
            </a>
            <a href="#cultures" className="text-gray-700 hover:text-blue-600">
              Cultures
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
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
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col px-4 py-2 space-y-2">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#cities" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded" onClick={() => setIsOpen(false)}>Cities</a>
            <a href="#valleys" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded" onClick={() => setIsOpen(false)}>Valleys</a>
            <a href="#peaks" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded" onClick={() => setIsOpen(false)}>Peaks</a>
            <a href="#cuisine" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded" onClick={() => setIsOpen(false)}>Cuisine</a>
            <a href="#cultures" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded" onClick={() => setIsOpen(false)}>Cultures</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
