import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
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

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                <span className="text-lg font-medium gradient-text">
                  Where interests become friendships
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"></div>
                <span className="text-lg font-medium text-gray-300">
                  Always wanted to find great happy hours in your area? Well,
                  now you can with Evertwine.
                </span>
              </div>
            </div>

            <div>
              <a
                href="https://apps.apple.com/us/app/evertwine-friends-events/id6479545288"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity duration-300"
              >
                <Image
                  src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                  alt="Download on the App Store"
                  width={200}
                  height={56}
                  className="h-14 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="flex justify-center lg:justify-end slide-in-right">
            <div className="phone-mockup">
              <div className="phone-screen">
                <Image
                  src="/screenshots/hero.png"
                  alt="Evertwine App Screenshot"
                  width={400}
                  height={800}
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
