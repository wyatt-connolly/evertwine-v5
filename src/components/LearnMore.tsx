export default function LearnMore() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Learn More About <span className="gradient-text">Evertwine</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We&apos;re building a movement of people committed to real-world
            connections
          </p>
        </div>

        {/* Our Mission */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              At Evertwine, we believe that the best relationships are built
              face-to-face. We&apos;re on a mission to make finding and
              attending real-world meetups as easy as scrolling through social
              media—but infinitely more rewarding.
            </p>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="text-center">
          <a
            href="/problem-solving"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
