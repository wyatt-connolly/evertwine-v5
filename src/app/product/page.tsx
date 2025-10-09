import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              The <span className="gradient-text">Product</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how Evertwine makes building real-world connections
              simple, safe, and enjoyable.
            </p>
          </div>

          {/* Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Evertwine is your all-in-one platform for discovering and
                creating meaningful in-person connections. Whether you&apos;re
                looking for friends who share your hobbies, professional
                networking opportunities, or just want to explore what&apos;s
                happening in your city, Evertwine brings it all together in one
                beautifully designed app.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                From spontaneous coffee meetups to organized group events, from
                happy hour discoveries to hobby-based communities, we make it
                effortless to find your people and build authentic
                relationships.
              </p>
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Interest-Based Matching
                </h3>
                <p className="text-gray-300">
                  Find people and events that match your interests, from hiking
                  and photography to tech and entrepreneurship.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                <p className="text-gray-300">
                  Discover meetups and happy hours near you with our intuitive
                  map view. See what&apos;s happening in real-time.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Safe & Trusted Community
                </h3>
                <p className="text-gray-300">
                  Verified users (coming soon), community guidelines, and safety
                  features ensure trustworthy connections.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Local Perks</h3>
                <p className="text-gray-300">
                  Access exclusive deals and discounts from local partner
                  businesses. More than just meetups.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4">
              Ready to experience Evertwine?
            </h3>
            <p className="text-gray-300 mb-6">
              Download the app today and start connecting with like-minded
              people in your area.
            </p>
            <a
              href="https://apps.apple.com/us/app/evertwine-friends-events/id6479545288"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity duration-300"
            >
              <img
                src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                alt="Download on the App Store"
                className="h-14"
              />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
