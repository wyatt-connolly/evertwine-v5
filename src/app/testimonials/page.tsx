"use client";

import Navigation from "@/components/Navigation";
import { useState, useRef } from "react";

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote:
        "Evertwine helped me find my hiking group! I've made genuine connections with people who share my passion for the outdoors.",
      author: "Sophia Chen",
      role: "Outdoor Enthusiast",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      quote:
        "After moving to a new city, Evertwine made it so easy to meet people. The community guidelines and safety measures made me feel secure meeting new friends.",
      author: "Marcus Johnson",
      role: "Software Engineer",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      quote:
        "I found my favorite workout buddy through Evertwine! We've been exploring new gyms together for months now.",
      author: "Aisha Patel",
      role: "Fitness Coach",
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      quote:
        "The photography meetups on Evertwine are incredible. I've learned so much and made lifelong friends who share my creative passion.",
      author: "David Kim",
      role: "Photographer",
      gradient: "from-teal-500 to-green-500",
    },
    {
      quote:
        "As a book lover, I was thrilled to find so many reading groups on Evertwine. The discussions are always engaging and thought-provoking.",
      author: "Emily Rodriguez",
      role: "Librarian",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      quote:
        "Evertwine connected me with fellow entrepreneurs. We now meet weekly to share ideas and support each other's business ventures.",
      author: "Alex Thompson",
      role: "Startup Founder",
      gradient: "from-emerald-500 to-blue-500",
    },
  ];

  const scrollToTestimonial = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth / 1.2; // Show 1.2 cards at a time
      container.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
    setCurrentIndex(index);
  };

  const nextTestimonial = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    scrollToTestimonial(nextIndex);
  };

  const prevTestimonial = () => {
    const prevIndex =
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    scrollToTestimonial(prevIndex);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Their <span className="gradient-text">words</span> speak for us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how Evertwine has helped thousands of people build
              meaningful connections through shared interests
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:scale-110 transition-all duration-300 -ml-6"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:scale-110 transition-all duration-300 -mr-6"
              aria-label="Next testimonial"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-96 bg-gradient-to-br ${testimonial.gradient} rounded-2xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-all duration-300`}
                  style={{ scrollSnapAlign: "start" }}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="mb-6">
                      <svg
                        className="w-8 h-8 text-white/80 mb-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                      </svg>
                      <p className="text-lg leading-relaxed mb-6">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg">
                          {testimonial.author}
                        </h4>
                        <p className="text-white/80 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 scale-125"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4">
              Ready to join our community?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Start connecting with people who share your interests and build
              meaningful relationships today.
            </p>
            <a
              href="https://apps.apple.com/us/app/evertwine-friends-events/id6479545288"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity duration-300"
            >
              <img
                src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                alt="Download on the App Store"
                className="h-14"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

