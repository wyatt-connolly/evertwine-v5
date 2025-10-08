"use client";

import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 className="text-2xl font-bold gradient-text">Evertwine</h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a
                href="/press"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Press
              </a>
              <a
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact Us
              </a>
              <a
                href="https://apps.apple.com/us/app/evertwine-friends-events/id6479545288"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 btn-hover"
              >
                Download
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-md">
              <a
                href="/press"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Press
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Contact Us
              </a>
              <a
                href="https://apps.apple.com/us/app/evertwine-friends-events/id6479545288"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-center"
              >
                Download
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
