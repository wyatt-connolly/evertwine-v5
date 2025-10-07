export default function SocialProof() {
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
    {
      quote:
        "As someone new to the city, Evertwine helped me build a whole new circle of friends through shared interests.",
      author: "Emily Watson",
      role: "Marketing Manager",
    },
    {
      quote:
        "The networking events are incredible. I've grown my professional network by 200% in just 6 months.",
      author: "David Kim",
      role: "Software Engineer",
    },
    {
      quote:
        "From hiking groups to book clubs, I've discovered so many new hobbies thanks to this amazing platform.",
      author: "Lisa Thompson",
      role: "Teacher",
    },
    {
      quote:
        "The quality of people and events on Evertwine is unmatched. Every meetup feels like meeting old friends.",
      author: "Alex Martinez",
      role: "Designer",
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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See what our community members are saying about their Evertwine
            experience
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 card-hover"
            >
              <div className="mb-6">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
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
