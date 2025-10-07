export default function Hero() {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Connect Through{" "}
              <span className="gradient-text">Shared Interests</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Discover local meetups, events, and activities that match your
              passions. Join a community of like-minded people in your area.
            </p>

            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
              <span className="text-lg font-medium gradient-text">
                Where interests become friendships
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#download"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold text-center hover:shadow-xl transition-all duration-300 btn-hover"
              >
                Download Evertwine
              </a>
              <a
                href="#how-it-works"
                className="border border-gray-600 text-white px-8 py-4 rounded-full text-lg font-semibold text-center hover:bg-gray-800 transition-all duration-300"
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="flex justify-center lg:justify-end slide-in-right">
            <div className="phone-mockup">
              <div className="phone-screen">
                <img
                  src="/screenshots/hero-image.png"
                  alt="Evertwine App Screenshot"
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
