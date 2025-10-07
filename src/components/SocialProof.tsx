export default function SocialProof() {
  const stats = [
    { number: "10,000+", label: "Active Users" },
    { number: "500+", label: "Meetups Weekly" },
    { number: "50+", label: "Cities" },
  ];

  const testimonials = [
    {
      quote:
        "I met my business partner at a coffee meetup. Evertwine changed my life!",
      author: "Sarah Chen",
      role: "Tech Entrepreneur",
    },
    {
      quote:
        "Finally found people who share my passion for photography. The community is amazing!",
      author: "Mike Rodriguez",
      role: "Photographer",
    },
  ];

  return (
    <section
      id="community"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Join a Growing Community
          </h2>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="mb-6">
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
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
