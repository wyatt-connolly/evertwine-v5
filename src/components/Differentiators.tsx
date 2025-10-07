export default function Differentiators() {
  const differentiators = [
    {
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
            fill="url(#gradient1)"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#3B82F6" }} />
              <stop offset="100%" style={{ stopColor: "#8B5CF6" }} />
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Smart Matching",
      description:
        "AI-powered recommendations that actually match your interests",
    },
    {
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L15.09 8.26L22 9L15.09 9.74L12 16L8.91 9.74L2 9L8.91 8.26L12 2Z"
            fill="url(#gradient2)"
          />
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#3B82F6" }} />
              <stop offset="100%" style={{ stopColor: "#8B5CF6" }} />
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Quality Connections",
      description:
        "Curated events and meaningful meetups, not random gatherings",
    },
    {
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
            fill="url(#gradient3)"
          />
          <defs>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#3B82F6" }} />
              <stop offset="100%" style={{ stopColor: "#8B5CF6" }} />
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Local Focus",
      description: "Build real relationships with people in your community",
    },
  ];

  return (
    <section
      id="why-choose"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Why Evertwine Stands Out
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 card-hover"
            >
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
