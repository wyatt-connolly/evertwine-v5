export default function SocialProof() {
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
        "I found my favorite running buddy through Evertwine! We've been exploring new trails together for months.",
      author: "Aisha Patel",
      role: "Fitness Coach",
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      quote:
        "The map feature makes finding local events super easy. I've discovered amazing coffee shops through Evertwine meetups!",
      author: "David Rodriguez",
      role: "Remote Worker",
      gradient: "from-teal-500 to-green-500",
    },
    {
      quote:
        "As someone who values safety, I appreciate the community standards and upcoming verification features. It's refreshing to be part of such a thoughtful platform.",
      author: "Emma Wilson",
      role: "Teacher",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      quote:
        "I've organized several weekend hiking meetups through Evertwine. The platform makes connecting with fellow nature lovers seamless and fun!",
      author: "Jamal Washington",
      role: "Adventure Guide",
      gradient: "from-emerald-500 to-blue-500",
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
            Their <span className="gradient-text">words</span> speak for us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how Evertwine has helped thousands of people build
            meaningful connections through shared interests
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${testimonial.gradient} rounded-2xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-all duration-300`}
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
                    &ldquo;{testimonial.quote}&rdquo;
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
                    <p className="text-white/80 text-sm">{testimonial.role}</p>
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
