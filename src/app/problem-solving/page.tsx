import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ProblemSolvingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <div className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 gradient-text">
              The Problem We&apos;re Solving
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              In today&apos;s digital world, genuine human connection has become
              increasingly rare. Despite being more &quot;connected&quot; than
              ever through social media, many people report feeling isolated and
              lonely.
            </p>
          </div>

          {/* Problem Sections */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Digital Disconnect */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold gradient-text">
                Digital Disconnect
              </h2>
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Studies show that despite spending an average of 7+ hours
                  daily on digital devices, 61% of young adults report feeling
                  &quot;very lonely&quot; on a regular basis. Traditional social
                  media often creates shallow connections rather than meaningful
                  relationships.
                </p>
              </div>
            </div>

            {/* Safety Concerns */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold gradient-text">
                Safety Concerns
              </h2>
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Meeting new people in-person comes with legitimate safety
                  concerns. 48% of adults say they avoid meeting new people due
                  to safety worries, and 73% of women report having safety
                  concerns when considering attending events with strangers.
                </p>
              </div>
            </div>
          </div>

          {/* Our Solution */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                Our Solution
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Evertwine bridges the gap between digital convenience and
                authentic human connection. We&apos;ve created a platform that
                facilitates real-world meetups while prioritizing safety,
                community standards, and genuine connections.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-3xl p-10 border border-blue-500/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 text-lg">
                      Upcoming ID verification and enhanced safety features for
                      every interaction
                    </span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 text-lg">
                      Location-based meetups with like-minded individuals
                    </span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 text-lg">
                      Community-driven events and interest groups
                    </span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 text-lg">
                      Privacy-first approach to social networking
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Opportunity */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                The Opportunity
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We&apos;re addressing a significant and growing need in
                today&apos;s increasingly digital society.
              </p>
            </div>

            {/* Market Size */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center">
                Market Size
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 text-center">
                  <h4 className="text-xl font-semibold mb-4 gradient-text">
                    Social Networking
                  </h4>
                  <p className="text-gray-300 mb-2 text-lg">Today: $142B</p>
                  <p className="text-blue-400 font-bold text-xl">
                    →2030: $223B
                  </p>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 text-center">
                  <h4 className="text-xl font-semibold mb-4 gradient-text">
                    Event Discovery
                  </h4>
                  <p className="text-gray-300 mb-2 text-lg">Today: $52B</p>
                  <p className="text-purple-400 font-bold text-xl">
                    →2030: $87B
                  </p>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300 text-center">
                  <h4 className="text-xl font-semibold mb-4 gradient-text">
                    Safety Tech
                  </h4>
                  <p className="text-gray-300 mb-2 text-lg">Today: $27B</p>
                  <p className="text-green-400 font-bold text-xl">
                    →2030: $54B
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-center mt-8 text-lg">
                Our platform sits at the intersection of these growing markets,
                with a unique focus on authentic connections and safety.
              </p>
            </div>

            {/* Key Insights */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">
                Key Insights
              </h3>
              <div className="space-y-8">
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                  <h4 className="text-xl font-semibold mb-4 gradient-text">
                    Growing Loneliness Epidemic
                  </h4>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    36% of Americans report feeling &quot;serious
                    loneliness,&quot; with rates highest among young adults
                    (61%) and mothers with young children (51%).
                  </p>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                  <h4 className="text-xl font-semibold mb-4 gradient-text">
                    Digital Fatigue
                  </h4>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    73% of Gen Z and Millennials report experiencing
                    &quot;digital fatigue&quot; and express desire for more
                    in-person interactions.
                  </p>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300">
                  <h4 className="text-xl font-semibold mb-4 gradient-text">
                    Safety Concerns
                  </h4>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    82% of women and 52% of men consider safety features
                    &quot;extremely important&quot; when using platforms to meet
                    new people.
                  </p>
                </div>
              </div>
              <div className="text-center mt-12">
                <p className="text-gray-300 text-lg mb-6">
                  These insights drive our product development, focusing on
                  creating safe, meaningful connections in a digital age.
                </p>
                <blockquote className="border-l-4 border-blue-500 pl-8 italic text-xl text-gray-300 max-w-3xl mx-auto">
                  &quot;We&apos;re building Evertwine to be the bridge between
                  digital convenience and authentic human connection.&quot;
                </blockquote>
              </div>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </div>
  );
}
