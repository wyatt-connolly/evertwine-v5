export default function Features() {
  const features = [
    {
      title: "Find Happy Hours & Local Deals",
      description:
        "Discover the best happy hours happening right now in your area. Get exclusive deals, coupons, and promotions from local partners. Evertwine is your go-to app for finding great spots and saving money while you explore your city.",
      image: "/screenshots/happy-hour.png",
      align: "left",
    },
    {
      title: "Discover & Join Amazing Events",
      description:
        "From tech meetups to hiking groups, professional networking to hobby workshops, find events that match your interests. Browse via our interactive map or list view, RSVP with a tap, and connect with attendees before you even arrive.",
      image: "/screenshots/meetup-details.png",
      align: "right",
    },
    {
      title: "Explore Activities Near You",
      description:
        "Use our powerful map and filters to discover local gems, ongoing activities, and spontaneous meetups. Whether you're looking for coffee chats, workout buddies, or creative collaborations, find what's happening around you in real-time.",
      image: "/screenshots/discover-activities.png",
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
