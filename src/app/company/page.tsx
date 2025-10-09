import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="gradient-text">Evertwine</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We&apos;re on a mission to bring people together through
              authentic, in-person connections.
            </p>
          </div>

          {/* Mission */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                At Evertwine, we believe that meaningful relationships are built
                face-to-face, not just through screens. We&apos;re transforming
                the way people connect by creating a platform that makes it
                effortless to find and build genuine friendships and
                professional relationships in the real world.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our goal isn&apos;t to keep you scrolling online—it&apos;s to
                get you offline creating memories with people who share your
                passions and interests.
              </p>
            </div>
          </section>

          {/* Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold mb-3">
                  Authentic Connections
                </h3>
                <p className="text-gray-300">
                  We prioritize quality over quantity. Every feature is designed
                  to foster genuine relationships and meaningful interactions.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold mb-3">Safety First</h3>
                <p className="text-gray-300">
                  Your safety and privacy are paramount. We implement robust
                  safety features and community guidelines to create a trusted
                  environment.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold mb-3">
                  Simplicity & Design
                </h3>
                <p className="text-gray-300">
                  We&apos;re obsessed with creating an intuitive, elegant
                  experience. Technology should be invisible—connecting should
                  feel effortless.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold mb-3">
                  Community Focused
                </h3>
                <p className="text-gray-300">
                  We&apos;re building more than an app—we&apos;re cultivating a
                  movement of people committed to strengthening their local
                  communities.
                </p>
              </div>
            </div>
          </section>

          {/* Location */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Where We Are</h2>
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Based in Phoenix, Arizona, Evertwine is currently live in
                Southern California, Phoenix, and Miami, with plans to expand to
                more cities across the United States.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We&apos;re a small but passionate team dedicated to making
                real-world connections accessible to everyone, everywhere.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
            <p className="text-gray-300 mb-6">
              Be part of a movement that&apos;s bringing people together in the
              real world.
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
