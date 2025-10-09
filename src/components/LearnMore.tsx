export default function LearnMore() {
  const stats = [
    {
      number: "1,800+",
      label: "Active Members",
      description: "Growing community of connection seekers",
    },
    {
      number: "3",
      label: "Cities",
      description: "Southern California, Phoenix, and Miami",
    },
    {
      number: "500+",
      label: "Meetups Created",
      description: "And counting every day",
    },
    {
      number: "50+",
      label: "Partner Venues",
      description: "Exclusive deals and happy hours",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Learn More About <span className="gradient-text">Evertwine</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We&apos;re building a movement of people committed to real-world
            connections
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="text-5xl font-bold gradient-text mb-3">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </div>
              <div className="text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              At Evertwine, we believe that the best relationships are built
              face-to-face. We&apos;re on a mission to make finding and
              attending real-world meetups as easy as scrolling through social
              media—but infinitely more rewarding.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-4">Growing Fast</h3>
            <p className="text-gray-300 leading-relaxed">
              What started in Southern California has quickly expanded to
              Phoenix and Miami, with more cities on the horizon. Join thousands
              of people who are discovering that the best connections happen in
              person.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
