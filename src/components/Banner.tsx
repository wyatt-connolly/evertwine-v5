"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Banner() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  // Don't show banner on non-home pages
  if (pathname !== "/") {
    return null;
  }

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300); // Match the animation duration
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out ${
        isClosing
          ? "transform -translate-y-full opacity-0"
          : "transform translate-y-0 opacity-100"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <p className="text-sm font-medium">
            🚀 New version coming soon! Get ready for exciting new features and
            improvements.
          </p>
        </div>
        <button
          onClick={handleClose}
          className="text-white hover:text-gray-200 transition-colors p-1"
          aria-label="Close banner"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
