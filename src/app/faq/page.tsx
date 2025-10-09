"use client";

import Navigation from "@/components/Navigation";
import { useState } from "react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does Evertwine verify users?",
      answer:
        "User verification with selfie and government ID is coming soon to ensure genuine, trustworthy connections. Currently, we focus on community guidelines and safety measures to maintain a safe and authentic environment for all users.",
    },
    {
      question: "Is Evertwine a dating app?",
      answer:
        "No. Evertwine is designed for building genuine friendships and professional connections. It's a space to meet new people through real-world meetups and shared interests, not online dating. Our focus is on creating meaningful, platonic relationships.",
    },
    {
      question: "Can I use Evertwine in my city?",
      answer:
        "We're currently live in Southern California, Phoenix, and Miami—with more cities coming soon. You can check availability in-app and sign up to be notified when we launch in your area.",
    },
    {
      question: "How are meetups organized on the app?",
      answer:
        "You can join or host events based on interests, industries, and location. Browse meetups via our interactive map or list view, then RSVP with a single tap. You'll receive notifications about upcoming events and can chat with other attendees.",
    },
    {
      question: "Is there a cost to use Evertwine?",
      answer:
        "Evertwine offers a free tier that includes basic features. We also offer optional Lite and Premium subscriptions that unlock extra features, exclusive events, and partner perks to enhance your experience.",
    },
    {
      question: "What types of events can I find on Evertwine?",
      answer:
        "From happy hours and coffee meetups to hiking groups, book clubs, professional networking events, fitness activities, and more. You'll find events for virtually any interest, from casual social gatherings to professional development opportunities.",
    },
    {
      question: "How do I find happy hours near me?",
      answer:
        "Use our interactive map and filters to discover happy hours happening right now in your area. We partner with local venues to bring you exclusive deals and promotions, making it easy to find great spots to meet new people.",
    },
    {
      question: "What safety measures does Evertwine have?",
      answer:
        "We prioritize your safety with strict community guidelines, user reporting features, and upcoming ID verification. All meetups are public, and we encourage members to meet in well-lit, populated areas. Our moderation team actively monitors the platform.",
    },
    {
      question: "Can I create my own meetup?",
      answer:
        "Absolutely! Creating a meetup is easy. Choose your activity, set a time and location, add details about what you'll be doing, and publish. You can manage attendees, send updates, and chat with participants all within the app.",
    },
    {
      question: "How do I get partner perks and deals?",
      answer:
        "Partner perks are available to Premium subscribers and sometimes to all users for special promotions. Browse the app to discover local businesses offering discounts on coffee, dining, activities, and more for Evertwine members.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about Evertwine. Can&apos;t find the
              answer you&apos;re looking for? Feel free to{" "}
              <a href="/contact" className="text-blue-400 hover:text-blue-300">
                contact us
              </a>
              .
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <h3 className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-gray-300 mb-6">
              Our team is here to help. Reach out and we&apos;ll get back to you
              as soon as possible.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
