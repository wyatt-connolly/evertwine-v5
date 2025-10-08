export default function Features() {
  const features = [
    {
      title: "Discover Amazing Events",
      description:
        "Find meetups, workshops, happy hours, and social events that match your interests. From tech talks to hiking groups, craft cocktails to mocktail workshops, discover what's happening in your community.",
      image: "/screenshots/happy-hour.png",
      align: "left",
    },
    {
      title: "Connect & Build Relationships",
      description:
        "Join events, meet like-minded people, and build meaningful connections. Our platform makes it easy to find your tribe and create lasting friendships.",
      image: "/screenshots/meetup-details.png",
      align: "right",
    },
    {
      title: "Stay Connected & Chat",
      description:
        "Keep the conversation going with built-in messaging. Coordinate with other attendees, share experiences, and maintain relationships beyond the events.",
      image: "/screenshots/messages.png",
      align: "left",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
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
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-3xl font-bold text-white">
                      {feature.title}
                    </h3>
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
                    <img
                      src={feature.image}
                      alt={feature.title}
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
