"use client";

import { useState } from "react";
import Image from "next/image";

export default function SampleContent() {
  const [activeTab, setActiveTab] = useState("meetups");

  const tabs = [
    { id: "meetups", label: "Meetups" },
    { id: "events", label: "Happy Hours" },
    { id: "posts", label: "Posts" },
  ];

  const content = {
    meetups: [
      {
        title: "Photography Walk",
        location: "Golden Gate Park • Today 2PM",
        attendees: "12 people attending",
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop&crop=center",
      },
      {
        title: "Tech Meetup",
        location: "Downtown • Tomorrow 6PM",
        attendees: "8 people attending",
        image:
          "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=400&fit=crop&crop=center",
      },
      {
        title: "Book Club",
        location: "Local Library • This Friday 7PM",
        attendees: "15 people attending",
        image:
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop&crop=center",
      },
    ],
    events: [
      {
        title: "Happy Hour at The Rooftop",
        location: "Downtown Lounge • Today 5PM • $5 Cocktails",
        attendees: "18 people attending",
        image:
          "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=400&fit=crop&crop=center",
      },
      {
        title: "Mocktail Mixing Workshop",
        location: "Green Garden Café • Tomorrow 6PM • Non-Alcoholic",
        attendees: "12 people attending",
        image:
          "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=400&fit=crop&crop=center",
      },
      {
        title: "Networking Event",
        location: "Co-working Space • Next Tuesday 6PM",
        attendees: "25 people attending",
        image:
          "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=400&fit=crop&crop=center",
      },
    ],
    posts: [
      {
        title: "Amazing sunset from yesterday's hike!",
        author: "Posted by Alex • 2 hours ago",
        engagement: "24 likes",
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop&crop=center",
      },
      {
        title: "Great coffee meetup this morning",
        author: "Posted by Maria • 4 hours ago",
        engagement: "18 likes",
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop&crop=center",
      },
    ],
  };

  return (
    <section id="discover" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What You&apos;ll Find on Evertwine
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800 rounded-lg p-1 flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
            <div className="grid gap-6">
              {content[activeTab as keyof typeof content].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg flex-shrink-0 overflow-hidden relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {"location" in item ? item.location : item.author}
                    </p>
                    <span className="text-blue-400 text-sm">
                      {"attendees" in item ? item.attendees : item.engagement}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
