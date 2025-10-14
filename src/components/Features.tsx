import Image from "next/image";

export default function Features() {
  const features = [
    {
      title: "Discover & Join Amazing Events",
      description:
        "From tech meetups to hiking groups, professional networking to hobby workshops, find events that match your interests. Browse via our interactive map or list view, RSVP with a tap, and connect with attendees before you even arrive.",
      image: "/screenshots/meetup-details.png",
      align: "left",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Find Happy Hours & Local Deals",
      description:
        "Discover the best happy hours happening right now in your area. Get exclusive deals, coupons, and promotions from local partners. Evertwine is your go-to app for finding great spots and saving money while you explore your city.",
      image: "/screenshots/happy-hour-deal.png",
      align: "right",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          />
        </svg>
      ),
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "Explore Activities Near You",
      description:
        "Use our powerful map and filters to discover local gems, ongoing activities, and spontaneous meetups. Whether you're looking for coffee chats, workout buddies, or creative collaborations, find what's happening around you in real-time.",
      image: "/screenshots/map-view.png",
      align: "left",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      gradient: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-6">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A complete platform for discovering, joining, and staying connected
            with your community
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                feature.align === "right"
                  ? "lg:flex-row-reverse"
                  : "lg:flex-row"
              }`}
            >
              {/* Content */}
              <div className="flex-1 max-w-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                          <div
                            className="w-1 h-1 bg-purple-500 rounded-full animate-pulse"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                          <div
                            className="w-1 h-1 bg-pink-500 rounded-full animate-pulse"
                            style={{ animationDelay: "0.4s" }}
                          ></div>
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-white">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 max-w-2xl">
                <div className="phone-mockup-small">
                  <div className="phone-screen-small">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={400}
                      height={800}
                      className="w-full h-full object-cover rounded-[20px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
